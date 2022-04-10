import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import shuttle from '../image/shuttle.png';
import purchase from '../image/purchase.png';
import dashboard from '../image/dashboard.png';
import wallet from '../image/wallet.png';
import accounting from '../image/accounting.png';
import bank from '../image/bank.png';
import invoices from '../image/invoices.png';
import report from '../image/report.png';
import analytic from '../image/analytic.png';
import settings from '../image/settings.png';

const style = {fontSize: '1.5rem'}

const tabs = [
  {
    name: 'Welcome',
    image: shuttle,
    icon: <CreditCardRoundedIcon style={style} />,
    link: '/dashboard/welcome',
  },
  {
    name: 'Dashboard',
    image: dashboard,
    icon: <CreditCardRoundedIcon style={style} />,
    link: '/dashboard',
  },
  {
    name: 'Sales',
    image: wallet,
    icon: <CreditCardRoundedIcon style={style} />,
    link: '/dashboard/sales',
    sub: []
  },
  {
    name: 'Purchases',
    image: purchase,
    icon: <CreditCardRoundedIcon style={style} />,
    link: '/dashboard/purchases',
    sub: [
      {
          name: 'Bills',
          link: '/dashboard/purchases/bills',
      },
      {
          name: 'Vendors',
          link: '/dashboard/purchases/vendors',
      },
      {
          name: 'Product & Services',
          link: '/dashboard/purchases/product',
      },
    ]
  },
  {
    name: 'Accounting',
    image: accounting,
    icon: <CreditCardRoundedIcon style={style} />,
    link: '/dashboard/accounting',
    sub: []
  },
  {
    name: 'Banking',
    image: bank,
    icon: <CreditCardRoundedIcon style={style} />,
    link: '/dashboard/banking',
    sub: []
  },
  {
    name: 'Payroll',
    image: invoices,
    icon: <CreditCardRoundedIcon style={style} />,
    link: '/dashboard/payroll',
    sub: []
  },
  {
    name: 'Reports',
    image: report,
    icon: <CreditCardRoundedIcon style={style} />,
    link: '/dashboard/reports',
  },
  {
    name: 'Analytics',
    image: analytic,
    icon: <CreditCardRoundedIcon style={style} />,
    link: '/dashboard/analytics',
    sub: []
  },
  {
    name: 'Settings',
    image: settings,
    icon: <CreditCardRoundedIcon style={style} />,
    link: '/dashboard/settings',
  },
]

export default tabs;