import { bayerSansClasses } from '../lib/bayer-sans';
import { LogOut, User, Bell, Settings, Search, Home, Calendar, FileText, Users, BarChart } from 'lucide-react';
import { useThemeColors } from '../hooks/use-cloudfront-theme';

interface DashboardProps {
  user: { name: string; email: string } | null;
  onLogout: () => void;
}

export default function Dashboard({ user, onLogout }: DashboardProps) {
  const colors = useThemeColors();
  
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-col md:w-64 bg-white border-r">
        <div className="flex items-center justify-center h-16 border-b">
          <h1 className={`${bayerSansClasses.heading.h5} text-primary-700`}>
            Dashboard
          </h1>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 space-y-1">
            <a
              href="#"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-primary-50 text-primary-700"
            >
              <Home className="mr-3 h-5 w-5" />
              Home
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50"
            >
              <Calendar className="mr-3 h-5 w-5" />
              Calendar
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50"
            >
              <FileText className="mr-3 h-5 w-5" />
              Documents
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50"
            >
              <Users className="mr-3 h-5 w-5" />
              Team
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50"
            >
              <BarChart className="mr-3 h-5 w-5" />
              Reports
            </a>
          </nav>
          <div className="p-4 border-t">
            <button
              onClick={onLogout}
              className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 w-full"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className={`${bayerSansClasses.heading.h5} text-primary-700 md:hidden`}>
                    Dashboard
                  </h1>
                </div>
              </div>
              <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  <span className="sr-only">View notifications</span>
                  <Bell className="h-6 w-6" />
                </button>
                <button className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  <span className="sr-only">Settings</span>
                  <Settings className="h-6 w-6" />
                </button>
                <div className="ml-3 relative">
                  <div>
                    <button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                      <span className="sr-only">Open user menu</span>
                      <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
                        <User className="h-5 w-5" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Welcome banner */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className={`${bayerSansClasses.heading.h3} text-gray-900`}>
              Welcome back, {user?.name || 'User'}!
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Here's what's happening with your account today.
            </p>
          </div>
        </div>
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Stats */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {/* Stat card 1 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-md" style={{ backgroundColor: colors.primary('100') }}>
                        <Users className="h-6 w-6" style={{ color: colors.primary('600') }} />
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Total Users
                        </dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">
                            24,331
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <a href="#" className="font-medium text-primary-700 hover:text-primary-900">
                      View all
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Stat card 2 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-md" style={{ backgroundColor: colors.secondary('100') }}>
                        <BarChart className="h-6 w-6" style={{ color: colors.secondary('600') }} />
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Total Revenue
                        </dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">
                            $45,231.89
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <a href="#" className="font-medium text-primary-700 hover:text-primary-900">
                      View all
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Stat card 3 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-md" style={{ backgroundColor: colors.success('100') }}>
                        <FileText className="h-6 w-6" style={{ color: colors.success('600') }} />
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Completed Tasks
                        </dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">
                            1,543
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <a href="#" className="font-medium text-primary-700 hover:text-primary-900">
                      View all
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Stat card 4 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-md" style={{ backgroundColor: colors.danger('100') }}>
                        <Calendar className="h-6 w-6" style={{ color: colors.danger('600') }} />
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Pending Approvals
                        </dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">
                            12
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <a href="#" className="font-medium text-primary-700 hover:text-primary-900">
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent activity */}
            <div className="mt-8">
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className={`${bayerSansClasses.heading.h5} text-gray-900`}>
                    Recent Activity
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Your latest actions and updates.
                  </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Last login
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Today at 10:30 AM
                      </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Email address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {user?.email || 'user@example.com'}
                      </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Account status
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Subscription plan
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Premium (Monthly)
                      </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Next billing date
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        June 15, 2023
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            
            {/* Logout button (mobile only) */}
            <div className="mt-8 md:hidden">
              <button
                onClick={onLogout}
                style={{ 
                  backgroundColor: colors.primary('500'),
                  color: colors.primary('50')
                }}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <LogOut className="mr-2 h-5 w-5" />
                Logout
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
