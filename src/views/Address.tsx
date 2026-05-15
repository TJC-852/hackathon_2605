import React from 'react';
import { ChevronLeft, Search, Navigation, MapPin } from 'lucide-react';

export default function Address({ onNavigate }: { onNavigate: (v: string) => void }) {
  return (
    <div className="flex flex-col h-full bg-white relative overflow-hidden">
      <div className="flex items-center justify-between px-3 pt-11 pb-2 bg-white z-10 flex-shrink-0 relative">
        <div className="w-8 h-8 flex items-center justify-center cursor-pointer active:scale-95" onClick={() => onNavigate('home')}>
          <ChevronLeft size={24} className="text-gray-900" />
        </div>
        <span className="font-bold text-[17px] tracking-wide absolute left-1/2 -translate-x-1/2">选择收货地址</span>
        <span className="text-[14px] font-medium text-gray-800 cursor-pointer active:opacity-70">新增地址</span>
      </div>

      <div className="px-3 pb-3 flex space-x-3 items-center flex-shrink-0 border-b border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] z-10">
         <div className="flex items-center text-[14px] font-medium text-gray-800 cursor-pointer">
           北京 <ChevronLeft size={14} className="-rotate-90 ml-0.5 text-gray-500" />
         </div>
         <div className="flex-1 bg-[#F5F5F5] rounded-full flex items-center px-3 py-1.5 focus-within:ring-1 focus-within:ring-[#FFD101] transition-all">
           <Search size={16} className="text-gray-400 mr-2" />
           <input type="text" placeholder="请输入收货地址" className="bg-transparent text-[13px] w-full outline-none placeholder-gray-400 font-medium" />
         </div>
      </div>

      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden bg-[#F7F8FA]">
        <div className="flex items-center justify-between px-4 py-3 bg-[#FFFBF0] mb-2 cursor-pointer active:bg-[#FFF4E5] transition-colors" onClick={() => onNavigate('home')}>
          <div className="flex items-center">
            <span className="font-bold text-gray-900 text-[15px]">融新科技中心-B座</span>
          </div>
          <div className="flex items-center text-[#FF6300] text-[13px] font-bold">
            <Navigation size={14} className="mr-1" /> 重新定位
          </div>
        </div>

        <div className="bg-white px-2">
          <div className="px-2 pt-4 pb-1.5 flex items-center text-gray-400 text-[11px] font-medium uppercase tracking-widest">
             我的收货地址
          </div>
          
          {[
            { tag: '公司', name: '融新科技中心-B座', detail: '一楼大厅外卖柜', user: '田先生', phone: '188****3001' },
            { tag: '家', name: '香江北岸白领家园A座', detail: '3单元 1202 放门口就行', user: '田先生', phone: '188****3001' },
            { tag: '', name: 'HiDrum成人架子鼓(望京店)', detail: '', user: '田先生', phone: '188****3001' },
          ].map((addr, i) => (
            <div key={i} className="px-2 py-4 border-b border-gray-100 cursor-pointer active:bg-gray-50 flex flex-col" onClick={() => onNavigate('home')}>
               <div className="flex items-start mb-1.5">
                  {addr.tag && (
                    <span className={`px-1.5 py-0.5 text-[9px] font-bold rounded-sm mr-1.5 mt-[2px] leading-tight ${addr.tag === '公司' ? 'bg-[#E3F2FD] text-[#1976D2]' : 'bg-[#FFF3E0] text-[#FF8F00]'}`}>
                      {addr.tag}
                    </span>
                  )}
                  <span className="font-bold text-[16px] text-gray-900 leading-tight">
                    {addr.name} <span className="font-medium text-gray-700">{addr.detail}</span>
                  </span>
               </div>
               <div className="text-[12px] text-gray-500 flex items-center">
                   {addr.user} <span className="ml-3 font-medium">{addr.phone}</span>
               </div>
            </div>
          ))}
          
          <div className="px-4 py-3 text-[12px] text-gray-500 font-medium flex items-center justify-center cursor-pointer active:opacity-70">
             展开更多地址 <ChevronLeft size={16} className="-rotate-90 ml-0.5 text-gray-400" />
          </div>
        </div>

        <div className="bg-white mt-2 px-2 pb-6">
          <div className="px-2 pt-4 pb-1.5 flex items-center text-gray-400 text-[11px] font-medium uppercase tracking-widest">
             附近地址
          </div>
          {['融新科技中心-B座', '融新科技中心-A座', '融新科技中心-C座', '融新科技中心-E座', '绿地中心-中国锦'].map((addr, i) => (
            <div key={i} className="px-2 py-3.5 border-b border-gray-100 cursor-pointer active:bg-gray-50 flex items-center" onClick={() => onNavigate('home')}>
               <MapPin size={16} className="text-gray-300 mr-2.5" />
               <div className="font-medium text-[15px] text-gray-800">{addr}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
