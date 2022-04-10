import {useState} from 'react';

import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';

import logo from '../../image/logo.png';
import tabs from '../../data/tabs';

const tabStyle =  `lg:w-10 lg:h-10 lg:rounded-full lg:flex lg:items-center lg:justify-center`
const currentTaabStyle = tabStyle.concat(' ').concat('lg:bg-blue-700 lg:text-white ')

const DashboardLayout = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(null)

  return (
    <div className="lg:relative lg:bg-gray-100">
      {/** Header */}
      <div className="lg:h-20 lg:w-full lg:fixed lg:bg-gray-100 lg:z-40 lg:top-0 lg:pl-3 lg:pr-20 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-40 h-14 lg:flex lg:gap-2 lg:items-center lg:px-2 lg:shadow-md lg:rounded-xl">
          <div className="lg:w-10 lg:h-10">
            <img src={logo} alt="logo" className="lg:h-full object-cover" />
          </div>
          <p className='font-semibold'>HostBeak</p>
          <ArrowRightRoundedIcon color='primary'/>
        </div>
        <div className='lg:w-60 h-14 lg:flex lg:gap-4 lg:items-center lg:px-2 '>
          <div className='lg:border lg:rounded-full lg:text-gray-300 lg:w-8 lg:h-8 lg:flex lg:items-center lg:justify-center'>
            <NotificationsNoneRoundedIcon/>
          </div>
          <div className='lg:w-10 lg:h-10 lg:rounded-full lg:bg-black'></div>
          <p className='lg:text-gray-700 lg:text-sm lg:font-semibold'>Ogoluwa</p>
          <div>
            <KeyboardArrowDownRoundedIcon />
          </div>
        </div>
      </div>

      <div className='lg:h-screen lg:flex'>
        {/** Sidebar */}
        <div className='lg:w-1/6 lg:mt-20 lg:text-xsm lg:py-4 lg:overflow-y-scroll'>
          <div className='lg:w-4/5 lg:mx-auto'>
            {
              tabs.map((tab, i) => {
                const toggleTab = (i) => {
                  if (currentTab === i) {
                    setCurrentTab(null);
                  } else {
                    setCurrentTab(i);
                  }
                };

                return (
                  <TabList tab={tab} toggleTab={toggleTab} currentTab={currentTab} i={i} />
                )
              })
            }
          </div>
          <div className='lg:text-xs lg:text-red-300 lg:flex lg:gap-8 lg:w-3/4 lg:mx-auto my-3'>
            <LogoutRoundedIcon style={{fontSize: '1.2rem'}} />
            <span className='text-black font-semibold'>Log out</span>
          </div>
          <div className='lg:w-4/5 lg:mx-auto lg:rounded-lg lg:bg-blue-800 lg:text-white lg:px-1 lg:py-2 lg:flex lg:gap-2 lg:items-center lg:mt-8 lg:mb-5'>
            <CreditCardRoundedIcon style={{fontSize: '2rem'}}/>
            <span>Accepts Payment</span>
          </div>
          <div className='lg:border-b lg:w-4/5 lg:mx-auto'></div>
        </div>

        {/** Main Content */}
        <div className="lg:w-full lg:flex lg:overflow-y-scroll lg:relative lg:mt-20 lg:bg-white lg:rounded-lg">{children}</div>
      </div>

    </div>
  );
};


const TabList = ({tab, toggleTab, currentTab, i}) => {
  const {name, image} = tab;

  return (
    <div className='lg:text-gray-500 lg:mb-2' key={name}>
      <div className='lg:grid lg:grid-cols-3 lg:gap-4 lg:items-center lg:cursor-pointer' onClick={() => toggleTab(i)}> 
        <div className={currentTab === i ?  currentTaabStyle : tabStyle }>
          {/* {icon} */}
          <img src={image} alt="icon" className="lg:w-6 lg:h-6 object-cover" />
        </div>
        <p className={currentTab === i ? 'lg:text-black lg:font-semibold' : ''}>{name}</p>
      {tab.sub ? <div className='lg:justify-self-end'><ArrowRightRoundedIcon /></div> : null }
      </div>

      {currentTab === i ? (
        tab.sub && tab.sub.length > 0 ? (
          <SubTabList tab={tab} />
          ) : null
      ) : null}
    </div>
  )
}

const SubTabList = ({tab}) => {
  return(
    <div className='lg:text-xs  lg:w-26 lg:ml-14 lg:pl-2 lg:mb-1'>
      {tab.sub.map((subTab) => {
        const {name} = subTab;
        
        return(
          <p className='lg:hover:text-blue-700 lg:cursor-pointer mb-1' key={name}>{name}</p>
        )
      })}
    </div>
  )
}

export default DashboardLayout;
