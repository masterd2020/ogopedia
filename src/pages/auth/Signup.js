import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import signupImage from '../../image/image-1.png'

const Signup = () => {
  return (
    <div className="relative lg:h-full lg:flex">
      <div className='relative lg:w-2/4 lg:h-screen'>
        <img src={signupImage} alt="signup" className="lg:h-full lg:w-full object-cover" />
        <p className='text-white lg:absolute lg:bottom-20 lg:w-3/5 lg:left-2/4 lg:-ml-56 lg:text-3xl lg:tracking-widest'>Building exceptional services with Back Office Support and Business Perfomance</p>
      </div>
      <div className='lg:py-6 lg:px-10 lg:w-2/4'>
        <p className='text-blue-800 lg:text-2xl lg:font-extrabold'>Create Account</p>
        <p className='text-gray-300 lg:mt-3'>Build and execeptional business</p>
        <form className='text-gray-300 lg:mt-10'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-3'>
            <CustomTextField label='First Name' />
            <CustomTextField label='Last Name' />
          </div>
            <CustomTextField label='Phone Number' type='number' />
            <CustomTextField label='Email' type='email' />
            <CustomTextField label='Password' type='password' />
            <div className='lg:flex lg:items-center lg:justify-between'>
              <div>
                <Checkbox/>
                <span>Remember me</span>
              </div>
            <p class='text-blue-300 font-bold'>Forgot Password?</p>
            </div>
            <div className='w-full h-14 font-semibold text-2xl text-white bg-blue-400 rounded-md flex items-center justify-center my-4 cursor-pointer'>Signup</div>
            <div className='text-center'>Got an Account? <span className='text-blue-300 font-bold'>Sign in</span></div>
        </form>
      </div>
    </div>
  );
}

const CustomTextField = (props) => {
  const {label} = props;

  return (
    <div className='w-full text-gray-300 mb-4'>
      <label className='block -mb-3 font-semibold'>{label}</label><br />
      <TextField  placeholder={`Enter your ${label}`} {...props} fullWidth={true} />
    </div>
  )
}

export default Signup