import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import DashboardLayout from '../../components/layout/index';

const AddBill = () => {
  return (
    <DashboardLayout>
      <div className="lg:px-10 lg:py-8 w-full">
        <h1 className='text-blue-900 lg:text-2xl lg:font-extrabold'>Add Bill</h1>
        <div className='lg:mt-5'>
          <div className='lg:grid lg:grid-cols-3 lg:gap-3'>
            <CustomSelect label='Vendor' />
            <CustomTextField label='Bill Number' />
            <CustomTextField label='Bill Number' />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

const CustomSelect = (props) => {
  const {label} = props;

  return (
    <div className='w-3/5 text-gray-500 mb-4'>
      <label className='block -mb-3'>{label}</label><br />
      <Select
        variant='outlined'
        fullWidth={true}
        value='Choose'
        type='date'
      >
        <MenuItem value="Choose">Choose</MenuItem>
      </Select>
    </div>
  )
}


const CustomTextField = (props) => {
  const {label} = props;

  return (
    <div className='w-3/5 text-gray-300 mb-4'>
      <label className='block -mb-3 font-semibold'>{label}</label><br />
      <TextField  placeholder={`Enter your ${label}`} {...props} fullWidth={true} variant='outlined'/>
    </div>
  )
}

export default AddBill