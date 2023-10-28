import { Outlet } from 'react-router';
import { Header, Sidebar } from '.';
const AppLayout = () => {
  return (
    <div className='relative flex min-h-screen w-full items-start'>
      <Sidebar />
      <div className='w-full xl:pl-80'>
        <Header />
        <main className='p-[30px]'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
