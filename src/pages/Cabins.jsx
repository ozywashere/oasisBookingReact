import CabinTable from '../features/cabins/CabinTable';
import { useState } from 'react';
import CreateCabin from '../features/cabins/CreateCabin';
const Cabins = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className='-mx-4 flex flex-wrap'>
        <div className='w-full px-4'>
          <div className='items-center justify-between border-b border-stroke md:flex mb-5'>
            <div className='w-full mb-6'>
              <h2 className='mb-2 text-2xl font-semibold text-body'>All Cabins</h2>
              <p className='text-sm text-body max-w-[400px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste deleniti delectus ullam eaque labore consequuntur?
              </p>
            </div>
            <div className='mb-6'>
              <button className='inline-flex items-center justify-center whitespace-nowrap rounded bg-primary py-[10px] px-5 text-sm font-medium text-white hover:bg-opacity-90 w-full'>
                Sort / Filter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='-mx-4 flex flex-wrap'>
        <CabinTable />
        <div className='w-full px-4'>
          <div className='flex items-center justify-center mb-5'>
            <button
              onClick={() => setShowForm((prev) => !prev)}
              className='inline-flex items-center justify-center whitespace-nowrap rounded bg-primary py-[10px] px-5 text-sm font-medium text-white hover:bg-opacity-90 w-full'>
              Add New Cabin
            </button>
          </div>
        </div>
      </div>
      {showForm && <CreateCabin />}
    </>
  );
};

export default Cabins;
