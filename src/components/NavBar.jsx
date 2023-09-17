import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='bg-slate-800'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        <Link href='/'>
          <h3 className='font-bold text-3xl'>NextCRUD</h3>
        </Link>
        <ul className='flex justify-between items-center gap-12'>
          <li className='text-slate-400 hover:text-slate-100'>
            <Link href='/new'>New</Link>
          </li>
          <li className='text-slate-400 hover:text-slate-100'>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
