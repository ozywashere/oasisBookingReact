import { Outlet } from 'react-router';
import { Header, Sidebar } from '.';
const AppLayout = () => {
  return (
    <div className='relative flex min-h-screen w-full items-start bg-gray'>
      <Sidebar />
      <div className='w-full xl:pl-80'>
        <Header />
        <main className='p-[30px]'>
          <div className='container'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
