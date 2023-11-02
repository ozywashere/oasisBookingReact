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
  'relative mb-1  flex items-center rounded py-3 px-4 text-base font-medium text-body duration-200  hover:bg-gray hover:text-primary';
const activeStyle =
  'relative mb-1 flex items-center rounded py-3 px-4 text-base font-medium text-body duration-200 border-r-2 bg-gray text-primary ';
const SideNavLinks = () => {
  return (
    <nav className='px-10'>
      <ul>
        {navigation.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) => {
                return isActive ? activeStyle : normalStyle;
              }}>
              <span className='pr-[20px] text-xl font-bold'>{item.icon}</span>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavLinks;
