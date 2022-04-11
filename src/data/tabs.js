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


const tabs = [
  {
    name: 'Welcome',
    image: shuttle,
    link: '/dashboard/welcome',
  },
  {
    name: 'Dashboard',
    image: dashboard,
    link: '/dashboard',
  },
  {
    name: 'Sales',
    image: wallet,
    link: '/dashboard/sales',
    sub: []
  },
  {
    name: 'Purchases',
    image: purchase,
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
    link: '/dashboard/accounting',
    sub: []
  },
  {
    name: 'Banking',
    image: bank,
    link: '/dashboard/banking',
    sub: []
  },
  {
    name: 'Payroll',
    image: invoices,
    link: '/dashboard/payroll',
    sub: []
  },
  {
    name: 'Reports',
    image: report,
    link: '/dashboard/reports',
  },
  {
    name: 'Analytics',
    image: analytic,
    link: '/dashboard/analytics',
    sub: [
      {
        name: 'View Report',
        link: '/dashboard/analytics/view-report',
      },
      {
        name: 'To-Do',
        link: '/dashboard/analytics/todo',
      },
      {
        name: 'Upload Docs',
        link: '/dashboard/analytics/upload-docs',
      },
      {
        name: 'Chat',
        link: '/dashboard/analytics/chat',
      },
      {
        name: 'Schedule',
        link: '/dashboard/analytics/schedule',
      },
      {
        name: 'Message Board',
        link: '/dashboard/analytics/message-board',
      },
      {
        name: 'Make Payments',
        link: '/dashboard/analytics/make-payments',
      },
      {
        name: 'Billing',
        link: '/dashboard/analytics/billing',
      },
    ]
  },
  {
    name: 'Settings',
    image: settings,
    link: '/dashboard/settings',
  },
]

export default tabs;