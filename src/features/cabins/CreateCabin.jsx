import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { createCabin } from '../../services/apiCabins';

const CreateCabin = () => {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('Cabin created successfully');

      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (data) => {
    mutate({ ...data, image: data.image ? data.image[0] : null });
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <div className='-mx-4 flex flex-wrap'>
      <div className='w-full px-4'>
        <form className='mx-auto bg-white rounded p-12 sm:p-[60px] flex flex-col' onSubmit={handleSubmit(onSubmit, onError)}>
          <div className='mb-6'>
            <label htmlFor='name' className='block text-base font-medium text-body mb-3'>
              Cabin Name
            </label>
            <input
              id='name'
              name='name'
              type='text'
              disabled={isCreating}
              className='w-full border border-stroke rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              {...register('name', { required: 'This field is required' })}
            />
            {errors?.name?.message && <p className='text-red-500 text-sm mt-2'>{errors.name.message}</p>}
          </div>
          <div className='mb-6'>
            <label htmlFor='maxCapacity' className='block text-base font-medium text-body mb-3'>
              Max Capacity
            </label>
            <input
              id='maxCapacity'
              name='maxCapacity'
              type='number'
              disabled={isCreating}
              className='w-full border border-stroke rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              {...register('maxCapacity', {
                required: 'This field is required',
                min: { value: 1, message: 'Minimum value is 1' },
              })}
            />
            {errors?.name?.message && <p className='text-red-500 text-sm mt-2'>{errors.name.message}</p>}
          </div>
          <div className='mb-6'>
            <label htmlFor='price' className='block text-base font-medium text-body mb-3'>
              Regular Price
            </label>
            <input
              id='regularPrice'
              name='regularPrice'
              type='number'
              disabled={isCreating}
              className='w-full border border-stroke rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              {...register('regularPrice', {
                required: 'This field is required',
                min: { value: 1, message: 'Minimum value should be at least 1' },
              })}
            />
            {errors?.regularPrice?.message && <p className='text-red-500 text-sm mt-2'>{errors.regularPrice.message}</p>}
          </div>
          <div className='mb-6'>
            <label htmlFor='discount' className='block text-base font-medium text-body mb-3'>
              Discount
            </label>
            <input
              id='discount'
              name='discount'
              type='number'
              disabled={isCreating}
              className='w-full border border-stroke rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              {...register('discount', {
                required: 'This field is required',
                validate: (value) => value <= getValues().regularPrice || 'Discount must be lower than or equal to regular price ',
              })}
            />
            {errors?.discount?.message && <p className='text-red-500 text-sm mt-2'>{errors.discount.message}</p>}
          </div>
          <div className='mb-6'>
            <label htmlFor='description' className='block text-base font-medium text-body mb-3'>
              Description for Website
            </label>
            <textarea
              id='description'
              name='description'
              type='text'
              rows='5'
              cols='33'
              disabled={isCreating}
              className='w-full border border-stroke rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              {...register('description', { required: 'This field is required' })}
            />
            {errors?.description?.message && <p className='text-red-500 text-sm mt-2'>{errors.description.message}</p>}
          </div>
          <div className='mb-6'>
            <label htmlFor='image' className='block text-base font-medium text-body mb-3'>
              Image
            </label>
            <input
              id='image'
              name='image'
              type='file'
              accept='image/*'
              disabled={isCreating}
              className='w-full border border-stroke rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent '
              {...register('image')}
            />
          </div>

          <div className='flex items-center justify-end self-end mt-6 space-x-2'>
            <button
              className='inline-flex items-center justify-center whitespace-nowrap rounded  py-[10px] px-5 text-sm font-medium  hover:bg-opacity-90 w-full border-gray shadow text-body'
              type='reset'
              disabled={isCreating}>
              Cancel
            </button>
            <button
              className='inline-flex items-center justify-center whitespace-nowrap rounded bg-primary py-[10px] px-5 text-sm font-medium text-white hover:bg-opacity-90 w-full'
              type='submit'
              disabled={isCreating}>
              Add Cabin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCabin;
