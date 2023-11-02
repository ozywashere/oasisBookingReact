import SideNavLinks from './SideNavLinks';
import Logo from './Logo';
const Sidebar = () => {
  return (
    <aside className='fixed top-0 left-0 z-40 flex h-screen w-full max-w-xs flex-col justify-between  shadow-card duration-200 xl:translate-x-0 -translate-x-full bg-white'>
      <div>
        <Logo />
        <SideNavLinks />
      </div>
    </aside>
  );
};

export default Sidebar;
