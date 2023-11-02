import PropTypes from 'prop-types';

const FormRow = ({ label, type, name, id, ...props }) => {
  return (
    <div className='mb-6 flex items-center w-full'>
      <label htmlFor={label} className='w-1/5 block text-base font-medium text-body mr-3'>
        {label}
      </label>

      {name === 'id' ? (
        <textarea
          id={id}
          name={name}
          type={type}
          rows='5'
          cols='33'
          className='w-3/5 border border-stroke rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
          {...props}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          className='w-3/5 border border-stroke rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
          {...props}
        />
      )}
    </div>
  );
};

FormRow.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default FormRow;
