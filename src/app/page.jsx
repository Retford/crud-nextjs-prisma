import TaskCard from '@/components/TaskCard';
import { prisma } from '@/libs/prisma';

async function loadTasks() {
  // forma con PETICIÓN FETCH
  // const res = await fetch('http://localhost:3000/api/tasks');
  // const data = await res.json();
  // console.log(data);
  //
  // Forma con OBTENCIÓN DE LA BASE DE DATOS
  return await prisma.task.findMany();
}

// export const revalidate = 60;
export const dynamic = 'force-dynamic';

const HomePage = async () => {
  const tasks = await loadTasks();

  return (
    <section className='container m-auto'>
      <div className='grid grid-cols-3 gap-3 mt-10'>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
