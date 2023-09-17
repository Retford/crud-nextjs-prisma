'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const NewPage = ({ params }) => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
    } else {
      const res = await fetch('/api/tasks/', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
    }
    // REDIRECCIONAR
    router.refresh();
    router.push('/');
  };
  return (
    <div className='h-screen flex justify-center items-center'>
      <form
        className='bg-slate-800 p-10 lg:w-3/4 w-1/2'
        onSubmit={handleSubmit}
      >
        <label htmlFor='title' className='font-bold text-sm'>
          Título de la Tarea
        </label>
        <input
          type='text'
          className='border border-gray-400 p-2 mb-4 w-full outline-none text-black'
          placeholder='Título'
          id='title'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor='description' className='font-bold text-sm'>
          Descripción de la Tarea
        </label>
        <textarea
          rows='3'
          className='border border-gray-400 p-2 mb-4 w-full outline-none text-black'
          placeholder='Describe tu Tarea'
          id='description'
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>

        {params.id ? (
          <button
            className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded'
            type='submit'
          >
            Actualizar
          </button>
        ) : (
          <button
            className='bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded'
            type='submit'
          >
            Crear
          </button>
        )}
        {params.id && (
          <button
            className='bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded ml-4'
            type='button'
            onClick={async () => {
              const res = await fetch(`/api/tasks/${params.id}`, {
                method: 'DELETE',
              });
              const data = await res.json();

              router.refresh();
              router.push('/');
            }}
          >
            Eliminar
          </button>
        )}
      </form>
    </div>
  );
};

export default NewPage;
