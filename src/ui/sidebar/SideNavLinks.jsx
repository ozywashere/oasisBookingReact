import { NavLink } from 'react-router-dom';
import { HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineHomeModern, HiOutlineUsers } from 'react-icons/hi2';
const navigation = [
  {
    name: 'Home',
    path: '/dashboard',
    icon: <HiOutlineHome />,
  },
  {
    name: 'Bookings',
    path: '/bookings',
    icon: <HiOutlineCalendarDays />,
  },
  {
    name: 'Cabins',
    path: '/cabins',
    icon: <HiOutlineHomeModern />,
  },
  {
    name: 'Users',
    path: '/users',
    icon: <HiOutlineUsers />,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: <HiOutlineCog6Tooth />,
  },
];
const normalStyle =
  'relative mb-[2px] flex items-center rounded py-[10px] px-4 text-lg font-medium text-body duration-200 hover:bg-white hover:bg-opacity-80';
const activeStyle =
  'relative mb-[2px] flex items-center rounded py-[10px] px-4 text-lg font-medium text-body duration-200 border-r-4 border-violet-500 [&>span]:text-violet-500 bg-violet-100';
const SideNavLinks = () => {
  return (
    <nav className='px-10'>
      <ul>
        {navigation.map((item) => (
          <li key={item.name} className='mb-5'>
            <NavLink
              to={item.path}
              className={({ isActive }) => {
                return isActive ? activeStyle : normalStyle;
              }}>
              <span className='pr-[20px] text-3xl font-bold'>{item.icon}</span>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavLinks;
