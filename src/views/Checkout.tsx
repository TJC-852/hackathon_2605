import React, { useState } from 'react';
import { ChevronLeft, MapPin, ChevronRight, CheckCircle2, Navigation, Clock, ShieldCheck, FileText } from 'lucide-react';

export default function Checkout({ onNavigate }: { onNavigate: (v: string) => void }) {
  const [method, setMethod] = useState('外卖配送');

  return (
    <div className="flex flex-col h-full bg-[#f5f5f5] relative overflow-hidden">
      {/* 顶部 Header & Tabs */}
      <div className="bg-gradient-to-b from-[#FFD101] to-[#f5f5f5] pt-11 pb-2 px-3 flex-shrink-0 relative z-10">
        <div className="flex items-center mb-4 relative">
          <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer active:scale-95" onClick={() => onNavigate('menu')}>
            <ChevronLeft size={24} className="text-gray-900 ml-[-4px]" />
          </div>
          <span className="font-bold text-[17px] text-gray-900 absolute left-1/2 -translate-x-1/2 tracking-wide">确认订单</span>
        </div>
        
        <div className="flex bg-[#ECAE00]/10 rounded-full p-[3px] mx-3 relative border border-[#ECAE00]/20 shadow-inner">
          <div 
             className={`absolute inset-y-[3px] w-[calc(50%-3px)] bg-gray-900 rounded-full shadow-md transition-all duration-300 ${method === '外卖配送' ? 'left-[3px]' : 'left-[calc(50%+1px)]'}`}
          ></div>
          <div className="flex-1 flex text-[14px] font-bold z-10">
            <button 
              className={`flex-1 py-1.5 text-center rounded-full transition-colors ${method === '外卖配送' ? 'text-[#FFD101]' : 'text-gray-800'}`}
              onClick={() => setMethod('外卖配送')}
            >
              外卖配送
            </button>
            <button 
              className={`flex-1 py-1.5 text-center rounded-full transition-colors ${method === '到店自取' ? 'text-[#FFD101]' : 'text-gray-800'}`}
              onClick={() => setMethod('到店自取')}
            >
              到店自取
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden px-3 pb-28 -mt-2 relative z-20">
         {/* 地址卡片 */}
         <div className="bg-white rounded-2xl p-4 shadow-sm mb-2.5">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => onNavigate('address')}>
               <div>
                  <div className="text-[12px] text-gray-500 flex items-center mb-1">
                    <span className="bg-[#FFEBEE] text-[#FF4A4A] px-1 rounded-sm text-[9px] font-bold mr-1 border border-[#FFCDD2]">公司</span> 融新科技中心
                  </div>
                  <div className="font-bold text-[20px] text-gray-900 mb-1 leading-tight flex items-center">
                    融新科技中心-B座 <ChevronRight size={20} className="text-gray-400 ml-0.5" />
                  </div>
                  <div className="text-[13px] text-gray-500 font-medium">
                    田(先生) 188****3001
                  </div>
               </div>
            </div>
         </div>

         {/* 配送时间 */}
         <div className="bg-white rounded-2xl px-4 py-3.5 shadow-sm mb-2.5 flex justify-between items-center cursor-pointer">
            <div className="flex flex-col">
              <span className="font-bold text-[15px] text-gray-900">立即送出</span>
              <span className="text-[11px] text-[#FF6300] bg-[#FFF4E5] px-1.5 py-0.5 rounded flex items-center w-fit border border-[#FFD5B2] mt-1 shadow-sm font-medium">
                <ShieldCheck size={10} className="mr-0.5" /> 晚到必赔
              </span>
            </div>
            <div className="flex items-center text-[#1976D2] font-bold text-[14px]">
              大约 13:20 送达 <ChevronRight size={16} className="ml-0.5" />
            </div>
         </div>

         {/* 订单明细 */}
         <div className="bg-white rounded-2xl p-4 shadow-sm mb-2.5">
            <h3 className="font-bold text-[13px] text-gray-900 border-b border-gray-100 pb-3 mb-4 flex items-center">超级碗 FOODBOWL (望京店) <ChevronRight size={14} className="text-gray-400 ml-0.5" /></h3>
            
            <div className="flex items-start mb-6">
               <img src="https://placehold.co/150/FFF4E5/FF7A59?text=Food" alt="item" className="w-[60px] h-[60px] rounded-lg bg-gray-50 object-cover mr-3 flex-shrink-0" />
               <div className="flex-1 flex flex-col justify-between min-h-[60px]">
                 <div className="flex justify-between items-start">
                   <span className="font-bold text-[15px] text-gray-900 leading-tight line-clamp-1 w-[70%]">蜜汁鸡腿超级碗</span>
                   <div className="flex flex-col items-end">
                     <span className="font-bold text-[16px] text-gray-900 flex items-baseline leading-none"><span className="text-[11px] mr-0.5 font-normal">¥</span>37.4</span>
                     <span className="text-[11px] text-gray-400 line-through mt-0.5">¥45.0</span>
                   </div>
                 </div>
                 <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1 w-[80%]">正常量, 糙米饭, 无辅助碳水, 蒜香西兰花</div>
                 <div className="text-[11px] text-gray-500 mt-1">x1</div>
               </div>
            </div>

            <div className="flex justify-between items-center text-[13px] mb-4">
               <span className="text-gray-900 font-medium tracking-wide">打包费</span>
               <span className="font-bold text-gray-900 flex items-baseline"><span className="text-[10px] mr-[1px] font-normal">¥</span>2</span>
            </div>
            <div className="flex justify-between items-center text-[13px] pb-4 border-b border-gray-100 border-dashed">
               <span className="text-gray-900 font-medium tracking-wide">配送费 <span className="text-white bg-[#1976D2] text-[9px] px-1 rounded-sm ml-1 font-bold">美团专送</span></span>
               <div className="flex items-center">
                 <span className="text-gray-400 line-through text-[11px] mr-2">¥4.5</span>
                 <span className="font-bold text-gray-900 flex items-baseline"><span className="text-[10px] mr-[1px] font-normal">¥</span>1.5</span>
               </div>
            </div>

            {/* 优惠券 */}
            <div className="flex justify-between items-center text-[14px] pt-4 pb-2 cursor-pointer">
               <span className="text-gray-900 font-bold flex items-center"><span className="bg-[#FF4A4A] text-white text-[10px] px-1 rounded-sm mr-1.5 leading-tight">券</span>美团红包</span>
               <div className="flex items-center text-[#FF4A4A] font-bold">
                 - ¥5 <ChevronRight size={16} className="text-gray-400 ml-0.5" />
               </div>
            </div>
            <div className="flex justify-between items-center text-[14px] py-2 cursor-pointer">
               <span className="text-gray-900 font-bold flex items-center"><span className="bg-[#FF6300] text-white text-[10px] px-1 rounded-sm mr-1.5 leading-tight">减</span>商家满减</span>
               <div className="flex items-center text-[#FF4A4A] font-bold">
                 - ¥2 <ChevronRight size={16} className="text-gray-400 ml-0.5" />
               </div>
            </div>

            <div className="flex justify-end pt-4 pb-1 text-[13px] items-baseline">
               已优惠 <span className="text-[#FF4A4A] font-bold mx-1">¥7</span> 
               <span className="ml-2 font-medium text-gray-900">小计</span> 
               <span className="text-gray-900 font-bold text-[22px] ml-1 flex items-baseline leading-none"><span className="text-[13px] mr-[1px] font-bold">¥</span>33.9</span>
            </div>
         </div>
         
         <div className="bg-white rounded-2xl p-4 shadow-sm mb-2.5">
           <div className="flex justify-between items-center mb-4 cursor-pointer">
              <span className="font-bold text-[14px] text-gray-900 flex items-center"><FileText size={16} className="mr-1.5 text-gray-700" /> 备注</span>
              <div className="flex items-center text-[13px] text-gray-400 font-medium">
                口味、偏好等 <ChevronRight size={16} className="ml-0.5" />
              </div>
           </div>
           <div className="flex justify-between items-center cursor-pointer">
              <span className="font-bold text-[14px] text-gray-900 flex items-center"><ShieldCheck size={16} className="mr-1.5 text-gray-700" /> 号码保护</span>
              <div className="flex items-center text-[13px] text-gray-500 font-medium">
                对商家、骑手隐藏真实号码
                <div className="w-8 h-4 bg-[#FFD101] rounded-full ml-2 relative shadow-inner">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-0 shadow-sm border border-gray-100"></div>
                </div>
              </div>
           </div>
         </div>
      </div>

      {/* 底部支付栏 */}
      <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 pb-8 pt-2.5 px-3 flex justify-between items-center z-30 shadow-[0_-5px_15px_rgba(0,0,0,0.03)]">
         <div className="flex flex-col ml-1 justify-center">
           <div className="flex items-end leading-none">
             <span className="text-gray-900 font-bold text-[24px] flex items-baseline"><span className="text-[13px] mr-[2px] font-bold">¥</span>33.9</span>
             <span className="text-[11px] text-[#FF4A4A] ml-2 font-medium bg-[#FFEBEE] px-1 rounded-sm border border-[#FFCDD2] mb-1">共优惠 ¥7</span>
           </div>
         </div>
         <button 
           className="bg-[#FFD101] text-gray-900 font-bold text-[16px] w-[130px] h-[44px] rounded-full shadow-sm active:scale-95 flex flex-col items-center justify-center leading-none tracking-wide"
           onClick={() => onNavigate('order_tracking')}
         >
           提交订单
         </button>
      </div>
    </div>
  );
}
