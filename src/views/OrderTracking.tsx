import React from 'react';
import { ChevronLeft, Share, RefreshCcw, Navigation, Phone, MessageCircle, MapPin, ShieldCheck, Clock, FileText, Star } from 'lucide-react';

export default function OrderTracking({ onNavigate }: { onNavigate: (v: string) => void }) {
  return (
    <div className="flex flex-col h-full bg-[#f5f5f5] relative overflow-hidden">
      {/* 顶部工具栏 (叠加在地图上方) */}
      <div className="absolute top-11 left-0 right-0 px-3 flex justify-between items-center z-20">
        <div className="w-9 h-9 bg-white/95 backdrop-blur rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.1)] cursor-pointer active:scale-95" onClick={() => onNavigate('home')}>
          <ChevronLeft size={22} className="text-gray-900 ml-[-2px]" />
        </div>
        <div className="flex items-center">
          <div className="bg-white/95 backdrop-blur rounded-full flex items-center h-9 px-3 shadow-[0_2px_10px_rgba(0,0,0,0.1)] cursor-pointer active:scale-95 mr-2.5">
             <span className="text-[#FF4A4A] font-bold text-[12px] flex items-center"><span className="text-[14px] mr-[2px]">红包</span>待领取</span>
          </div>
          <div className="bg-white/95 backdrop-blur rounded-full w-9 h-9 flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.1)] cursor-pointer active:scale-95 mr-2.5">
            <Share size={18} className="text-gray-900" />
          </div>
          <div className="bg-white/95 backdrop-blur rounded-full w-9 h-9 flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.1)] cursor-pointer active:scale-95">
            <RefreshCcw size={18} className="text-gray-900" />
          </div>
        </div>
      </div>

      {/* 伪地图背景区域 */}
      <div className="h-[45%] bg-[#F2F4F5] relative overflow-hidden flex items-center justify-center z-0">
         <img src="https://placehold.co/400x400/E8ECEE/FFFFFF?text=MAP+VIEW" alt="map bg" className="absolute inset-0 w-full h-full object-cover" />
         
         {/* 模拟地图路线条 */}
         <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
           <path d="M 120 150 Q 150 150 200 220 T 300 280" stroke="#FFD101" strokeWidth="6" fill="none" strokeDasharray="10, 5" className="opacity-80 drop-shadow-md" />
           <path d="M 60 100 L 120 150" stroke="#1976D2" strokeWidth="6" fill="none" className="opacity-70 drop-shadow-md" />
         </svg>
         
         {/* 模拟商家位置 */}
         <div className="absolute top-[22%] left-[12%] flex flex-col items-center z-10">
           <div className="bg-white px-2 py-0.5 rounded-md text-[10px] font-bold text-gray-800 shadow-sm mb-1 leading-tight whitespace-nowrap border border-gray-100">超级碗 FOOD...</div>
           <div className="bg-white rounded-full p-1 shadow-md relative">
              <div className="w-5 h-5 bg-[#FF6300] rounded-full flex items-center justify-center text-[9px] text-white font-bold">店</div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-white"></div>
           </div>
         </div>
         
         {/* 模拟骑手位置 */}
         <div className="absolute top-[48%] left-[45%] flex flex-col items-center z-20 animate-bounce">
           <div className="bg-gradient-to-r from-[#FFD101] to-[#FFB300] px-2 py-0.5 rounded-full text-[10px] font-bold text-gray-900 shadow-sm mb-1 leading-tight whitespace-nowrap flex items-center">距您 <span className="text-[12px] mx-0.5">800</span> m</div>
           <div className="bg-white rounded-full p-[3px] shadow-lg relative border-2 border-[#FFD101]">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[20px] bg-white">🛵</div>
           </div>
         </div>
         
         {/* 模拟用户位置 */}
         <div className="absolute bottom-[28%] right-[22%] flex flex-col items-center z-10">
            <div className="bg-white rounded-full p-1 shadow-md relative">
              <div className="w-5 h-5 bg-[#1976D2] rounded-full flex items-center justify-center text-[9px] text-white font-bold">我</div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-white"></div>
           </div>
         </div>
      </div>

      {/* 底部信息面板 */}
      <div className="flex-1 bg-[#f5f5f5] -mt-8 rounded-t-3xl z-20 relative px-2.5 pt-3 overflow-y-auto [&::-webkit-scrollbar]:hidden">
         {/* 拖动指示条 */}
         <div className="flex justify-center mb-3">
           <div className="w-9 h-1.5 bg-gray-300/80 rounded-full"></div>
         </div>

         {/* 进度条区块 */}
         <div className="bg-white rounded-2xl p-4 shadow-sm mb-2.5">
            <div className="flex justify-between items-start mb-2">
               <div>
                  <h2 className="font-bold text-[28px] text-gray-900 leading-none flex items-end">
                    13:55 <span className="text-[14px] ml-2 mb-1.5 text-gray-700">预计送达</span>
                  </h2>
                  <p className="text-[11px] text-gray-500 mt-1 flex items-center tracking-wide">
                    骑手正在快马加鞭为您送餐，请耐心等待
                  </p>
               </div>
               <div className="text-[11px] font-bold text-[#1976D2] border border-[#1976D2]/30 bg-[#F0F7FF] px-1.5 py-0.5 rounded flex items-center shadow-sm">
                  <ShieldCheck size={12} className="mr-0.5" /> 准时宝
               </div>
            </div>

            {/* 状态进度条 */}
            <div className="flex items-center mt-7 mb-4 relative">
               <div className="flex-1 h-1 bg-gray-100 relative">
                 <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#FFD101] to-[#FFD101] w-full"></div>
                 <div className="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-3 bg-white border-[3px] border-[#FFD101] rounded-full shadow-sm"></div>
               </div>
               <div className="flex-1 h-1 bg-gray-100 relative">
                 <div className="absolute top-0 left-0 h-1 bg-[#FFD101] w-2/3"></div>
                 <div className="absolute top-1/2 -translate-y-1/2 left-2/3 w-4 h-4 bg-[#FFD101] border-2 border-white rounded-full shadow-md z-10 flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                 </div>
               </div>
               
               <div className="absolute -top-6 left-0 text-[11px] text-gray-500 font-medium">商家已接单</div>
               <div className="absolute -top-6 left-[45%] text-[13px] text-gray-900 font-bold">骑手配送中</div>
               <div className="absolute -top-6 right-0 text-[11px] text-gray-400">订单已送达</div>
            </div>
         </div>

         {/* 骑手信息 */}
         <div className="bg-white rounded-2xl p-4 shadow-sm mb-2.5 flex items-center justify-between">
             <div className="flex items-center">
                 <div className="relative">
                   <div className="w-11 h-11 bg-gray-100 rounded-full overflow-hidden mr-3 border border-gray-200">
                      <img src="https://placehold.co/100x100/F0F0F0/666?text=Rider" alt="rider" className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute -bottom-1 -right-0.5 bg-gradient-to-r from-[#FFD101] to-[#FFB300] text-gray-900 text-[8px] px-1 rounded-sm font-bold border border-white leading-tight">专送</div>
                 </div>
                 <div className="flex flex-col justify-center h-11">
                    <div className="font-bold text-[15px] text-gray-900 flex items-center mt-[-2px]">
                      王师傅 
                    </div>
                    <div className="text-[11px] text-gray-500 mt-0.5 flex items-center">
                       <span className="text-[#FF6300] font-bold flex items-center mr-1.5">
                         <Star fill="#FF6300" size={10} className="mr-[1px]" /> 99%
                       </span>
                       <span className="border-l border-gray-300 pl-1.5">本月已跑 3.4万单</span>
                    </div>
                 </div>
             </div>
             <div className="flex space-x-2.5">
                 <div className="w-[38px] h-[38px] rounded-full bg-[#FFFBF0] border border-[#FFD101]/30 flex items-center justify-center active:scale-95 cursor-pointer shadow-sm">
                    <MessageCircle size={18} className="text-[#ECAE00] fill-[#ECAE00]/10" />
                 </div>
                 <div className="w-[38px] h-[38px] rounded-full bg-[#F0F7FF] border border-[#1976D2]/30 flex items-center justify-center active:scale-95 cursor-pointer shadow-sm">
                    <Phone size={18} className="text-[#1976D2] fill-[#1976D2]/10" />
                 </div>
             </div>
         </div>

         {/* 订单简化信息 */}
         <div className="bg-white rounded-2xl p-4 shadow-sm mb-5">
             <div className="flex items-center justify-between cursor-pointer active:opacity-70 mb-4" onClick={() => onNavigate('menu')}>
                 <div className="flex items-center">
                     <img src="https://placehold.co/100/FFF4E5/FF7A59?text=BOWL" className="w-[30px] h-[30px] rounded border border-gray-100 mr-2.5" />
                     <span className="font-bold text-gray-900 text-[15px]">超级碗 FOODBOWL (望京店)</span>
                 </div>
                 <ChevronLeft size={16} className="text-gray-400 rotate-180" />
             </div>
             
             <div className="flex items-center text-[12px] text-gray-500 pb-3 border-b border-gray-100 border-dashed">
                <span className="bg-gray-100 text-gray-600 px-1.5 rounded-sm mr-2 font-medium">1件商品</span>
                <span className="truncate">蜜汁鸡腿超级碗 (正常量, 糙米饭)</span>
             </div>
             
             <div className="pt-3 flex justify-between items-center cursor-pointer active:opacity-70">
                <div className="flex space-x-4 text-[13px] font-bold text-gray-800">
                  <span className="flex items-center"><Phone size={14} className="mr-1" /> 联系商家</span>
                </div>
                <div className="flex space-x-4 text-[13px] font-bold text-gray-800">
                  <span className="flex items-center"><FileText size={14} className="mr-1" /> 订单详情</span>
                </div>
             </div>
         </div>

      </div>
    </div>
  );
}
