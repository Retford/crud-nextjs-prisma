import Link from 'next/link';

const NotFound = () => {
  return (
    <section className='flex h-[calc(100vh-7rem)] justify-center items-center'>
      <div className='flex justify-center items-center flex-col gap-8'>
        <h1 className='text-4xl font-bold'>NotFound</h1>
        <Link href='/'>Volver al Inicio</Link>
      </div>
    </section>
  );
};

export default NotFound;
