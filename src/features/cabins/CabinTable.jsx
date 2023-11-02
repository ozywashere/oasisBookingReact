import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';
import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';

const CabinTable = () => {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ['cabin'],
    queryFn: getCabins,
  });
  if (error) console.log(error);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className='px-4 w-full'>
      <div className='w-full rounded border border-stroke bg-white mb-5'>
        <div className='max-w-full overflow-x-auto'>
          <table className='w-full table-auto '>
            <thead>
              <tr className='border-b border-stroke'>
                <th className='min-w-[90px] py-5 px-4'>
                  <p className='text-left text-base font-medium text-black'>Cabin</p>
                </th>
                <th className='min-w-[90px] py-5 px-4'>
                  <p className='text-left text-base font-medium text-black'>Capacity</p>
                </th>
                <th className='min-w-[90px] py-5 px-4'>
                  <p className='text-left text-base font-medium text-black'>Price</p>
                </th>
                <th className='min-w-[90px] py-5 px-4'>
                  <p className='text-left text-base font-medium text-black'>Discount</p>
                </th>
                <th className='min-w-[90px] py-5 px-4'>
                  <p className='text-left text-base font-medium text-black'></p>
                </th>
              </tr>
            </thead>
            <tbody>
              {cabins.map((cabin) => (
                <CabinRow cabin={cabin} key={cabin.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CabinTable;
