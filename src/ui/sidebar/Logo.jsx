import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <div className='px-10 pt-10 pb-9 '>
      <Link to='/' className='flex justify-center'>
        <img src='/assets/logo-light.png' className='h-20 w-20 drop-shadow-2xl' alt='logo' />
      </Link>
    </div>
  );
};

export default Logo;
