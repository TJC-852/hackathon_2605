import React, { useState } from 'react';
import Home from './views/Home';
import Address from './views/Address';
import Search from './views/Search';
import SearchResults from './views/SearchResults';
import Menu from './views/Menu';
import Checkout from './views/Checkout';
import OrderTracking from './views/OrderTracking';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = (view: string, data?: any) => {
    if (data?.query) setSearchQuery(data.query);
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-gray-200/80 flex justify-center items-center font-sans sm:py-4">
      {/* 模拟移动端 H5 容器 */}
      <div className="w-full h-full sm:max-w-[375px] sm:h-[812px] bg-white sm:rounded-[40px] sm:shadow-2xl overflow-hidden relative sm:border-[6px] sm:border-gray-900 flex flex-col">
         {/* 状态栏模拟 */}
         <div className="h-12 bg-transparent absolute top-0 w-full z-50 pointer-events-none flex justify-between items-end px-6 pb-2 text-gray-900 font-medium text-sm">
            <span>11:03</span>
            <div className="flex space-x-1.5 items-center pb-0.5">
               <div className="w-4 h-3 bg-gray-800 rounded-[2px]"></div>
               <div className="w-3 h-3 rounded-full bg-gray-800"></div>
               <div className="w-5 h-3 border border-gray-800 rounded flex items-center p-[1px]"><div className="bg-gray-800 h-full w-3 rounded-[1px]"></div></div>
            </div>
         </div>

         {/* 视图路由 */}
         {currentView === 'home' && <Home onNavigate={navigate} />}
         {currentView === 'address' && <Address onNavigate={navigate} />}
         {currentView === 'search' && <Search onNavigate={navigate} />}
         {currentView === 'search_results' && <SearchResults onNavigate={navigate} query={searchQuery} />}
         {currentView === 'menu' && <Menu onNavigate={navigate} />}
         {currentView === 'checkout' && <Checkout onNavigate={navigate} />}
         {currentView === 'order_tracking' && <OrderTracking onNavigate={navigate} />}
      </div>
    </div>
  );
}
