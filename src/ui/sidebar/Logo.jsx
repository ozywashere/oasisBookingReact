import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <div className='px-10 pt-10 pb-9 '>
      <Link to='/' className='flex justify-center'>
        <img src='/assets/logo-light.png' className='h-16 w-32' alt='logo' />
      </Link>
    </div>
  );
};

export default Logo;
