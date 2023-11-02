import PropTypes from 'prop-types';
import { formatPrice } from '../../utils/helpers';
import { deleteCabin } from '../../services/apiCabins';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
const CabinRow = ({ cabin }) => {
  const { name, maxCapacity, regularPrice, discount, image, id: cabinId } = cabin;

  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success('Cabin deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (error) => toast.error(error.message),
  });
  return (
    <tr key={cabinId} className='border-b border-stroke'>
      <td className='py-[18px] pl-6 pr-3'>
        <div className='flex items-center'>
          <img src={image} alt='' className='mr-4 h-[50px] w-[60px] rounded object-cover object-center' />
          <p className='text-sm text-body'>{name}</p>
        </div>
      </td>
      <td className='py-[18px] px-4'>
        <p className='text-sm text-body'>{maxCapacity}</p>
      </td>
      <td className='py-[18px] px-4'>
        <p className='text-sm text-body'>{formatPrice(regularPrice)}</p>
      </td>
      <td className='py-[18px] px-4'>
        <p className='text-sm text-body'>{discount}%</p>
      </td>
      <td className='py-[18px] px-4'>
        <div className='flex items-center justify-end space-x-2'>
          <button
            className='inline-flex items-center justify-center whitespace-nowrap rounded bg-primary py-[10px] px-5 text-sm font-medium text-white hover:bg-opacity-90 '
            onClick={() => mutate(cabinId)}
            disabled={isLoading}>
            Edit
          </button>{' '}
          <button
            className='inline-flex items-center justify-center whitespace-nowrap rounded bg-primary py-[10px] px-5 text-sm font-medium text-white hover:bg-opacity-90 '
            onClick={() => mutate(cabinId)}
            disabled={isLoading}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

CabinRow.propTypes = {
  cabin: PropTypes.object.isRequired,
};
export default CabinRow;
