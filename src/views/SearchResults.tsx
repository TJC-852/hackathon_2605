import React, { useState } from 'react';
import { ChevronLeft, ChevronDown, Filter, Zap, X, ShoppingCart } from 'lucide-react';

export default function SearchResults({ onNavigate, query }: { onNavigate: (v: string, data?: any) => void, query: string }) {
  const [tab, setTab] = useState('全部商家');

  return (
    <div className="flex flex-col h-full bg-[#f4f4f4] relative overflow-hidden font-sans">
      {/* 顶部搜索栏 & Tab栏 */}
      <div className="bg-white pt-11 pb-2 px-3 z-20 flex-shrink-0 relative">
        <div className="flex items-center justify-between mb-4">
          <div className="w-8 h-8 flex items-center justify-center cursor-pointer active:opacity-70" onClick={() => onNavigate('search')}>
            <ChevronLeft size={24} className="text-gray-900 ml-[-8px] stroke-[2.5px]" />
          </div>
          <div className="flex-1 border border-[#FFD101] rounded-full flex items-center h-8 px-2 relative bg-white">
            <span className="text-[14px] text-gray-900 font-medium w-full outline-none bg-transparent pl-2">{query || '美式'}</span>
            <div className="w-[14px] h-[14px] rounded-full bg-gray-300/80 flex items-center justify-center mr-1 cursor-pointer" onClick={() => onNavigate('search')}>
               <X size={10} className="text-white" />
            </div>
          </div>
          <div className="flex items-center ml-3 text-[12px] text-gray-700 font-medium tracking-tight">
            <div className="flex flex-col items-center justify-center leading-tight cursor-pointer active:opacity-70">
              <span>切到</span>
              <span>商品</span>
            </div>
            <div className="w-[1px] h-[14px] bg-gray-300 mx-2.5"></div>
            <div className="flex flex-col items-center justify-center leading-tight cursor-pointer active:opacity-70">
              <span>切换</span>
              <span>地址</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-[15px] px-1 pt-1">
          {['全部商家', '特价外卖'].map(t => (
            <div 
              key={t} 
              className="flex flex-col items-center justify-center cursor-pointer"
              onClick={() => setTab(t)}
            >
              <span className={`pb-1.5 transition-colors ${tab === t ? 'font-bold text-gray-900 text-[16px]' : 'text-gray-500 font-bold'}`}>
                {t}
              </span>
              {tab === t && <div className="w-8 h-1 bg-[#FFD101] rounded-full -mt-1"></div>}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden relative scroll-smooth flex flex-col">
        {/* 神抢手 推荐卡片 (仅全部商家Tab展示) */}
        {tab === '全部商家' && (
          <div className="bg-gradient-to-r from-white via-white to-[#FDF9F1] mx-2 mt-2 p-2.5 py-3 rounded-2xl shadow-sm flex mb-1 relative overflow-hidden flex-shrink-0">
            <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-bl from-[#FFF3E0] to-transparent opacity-50 pointer-events-none"></div>
            <div className="relative w-[105px] h-[105px] flex-shrink-0 z-10 cursor-pointer" onClick={() => onNavigate('menu')}>
               <img src="https://placehold.co/200/FFF8E1/FF9800?text=☕" className="w-full h-full object-cover rounded-xl" />
               <div className="absolute top-0 left-0 bg-white/90 text-[10px] text-gray-900 font-bold px-1.5 rounded-br-lg rounded-tl-xl flex items-center justify-center">
                 神抢手
               </div>
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#FF5252] to-[#FF1744] text-white text-[11px] font-bold text-center rounded-b-xl py-[2px] tracking-widest shadow-sm">
                 性价比优选
               </div>
            </div>
            
            <div className="ml-3 flex flex-col flex-1 pb-0.5 z-10 cursor-pointer" onClick={() => onNavigate('menu')}>
               <div className="font-bold text-[17px] text-gray-900 leading-snug">双杯美式咖啡（一杯加浓）</div>
               <div className="flex items-center text-[11px] text-gray-500 mt-1 justify-between pr-1">
                 <span className="truncate flex-1 mr-2">NNCAFE诺诺咖啡(...)</span>
                 <span className="flex-shrink-0 whitespace-nowrap">免配送费 <span className="ml-[2px]">28分钟</span></span>
               </div>
               <div className="flex items-center text-[10px] mt-1.5 space-x-2">
                  <span className="text-[#FF6300] font-bold tracking-tight">10+回头客推荐</span>
                  <span className="text-[#FF6300] font-bold tracking-tight">放心吃</span>
               </div>
               <div className="mt-auto flex items-baseline">
                 <span className="text-[#FF4A4A] font-bold text-[22px] leading-none"><span className="text-[12px] mr-[1px]">¥</span>19<span className="text-[16px]">.8</span></span>
                 <span className="text-gray-400 text-[11px] line-through ml-1 font-medium">¥31</span>
                 <span className="text-[#FF4A4A] text-[10px] ml-1.5 font-bold">享6.4折</span>
               </div>
            </div>
            <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 flex space-x-1 pointer-events-none z-10 p-2">
                <div className="w-2.5 h-1 bg-white rounded-full"></div>
                <div className="w-1.5 h-1 bg-white/50 rounded-full"></div>
                <div className="w-1.5 h-1 bg-white/50 rounded-full"></div>
            </div>
          </div>
        )}

        {/* 筛选栏 (Sticky悬浮) */}
        <div className="bg-[#f4f4f4] pt-2 pb-2 px-2 flex items-center overflow-x-auto [&::-webkit-scrollbar]:hidden flex-shrink-0 z-20 sticky top-0 relative border-b border-gray-100/50">
           {/* 综合排序 dropdown */}
           <div className="text-gray-900 text-[13px] font-bold flex items-center pl-1 pr-3 flex-shrink-0 bg-[#f4f4f4] sticky left-0 z-20 cursor-pointer">
             综合 <ChevronDown size={14} className="ml-0.5 stroke-[3px]" />
           </div>
           
           <span className="bg-white text-gray-700 text-[11px] font-medium px-2 py-1.5 rounded mr-2 flex-shrink-0 active:bg-gray-50 cursor-pointer shadow-sm">神券商家</span>
           <span className="bg-white text-gray-700 text-[11px] font-medium px-2 py-1.5 rounded mr-2 flex-shrink-0 active:bg-gray-50 cursor-pointer shadow-sm">15分钟</span>
           <span className="bg-white text-gray-700 text-[11px] font-medium px-2 py-1.5 rounded mr-2 flex-shrink-0 active:bg-gray-50 cursor-pointer shadow-sm">点评高分</span>
           <span className="bg-white text-gray-700 text-[11px] font-medium px-2 py-1.5 rounded mr-2 flex-shrink-0 active:bg-gray-50 cursor-pointer shadow-sm">外卖自取</span>
           
           <div className="absolute right-0 bg-gradient-to-l from-[#f4f4f4] via-[#f4f4f4] to-transparent w-10 h-full flex items-center justify-end px-2 z-20">
             <Filter size={14} className="text-gray-600 stroke-[2px]" />
           </div>
        </div>

        {/* 商家列表主体 */}
        <div className="px-2 pt-1 pb-10">
          
          {/* Item 1 */}
          <div className="bg-white rounded-2xl p-3 mb-2 shadow-sm cursor-pointer active:opacity-95" onClick={() => onNavigate('menu')}>
            <div className="flex">
               <div className="relative w-12 h-12 flex-shrink-0 bg-[#FFF3E0] rounded-lg p-1 border border-gray-100">
                  <div className="w-full h-full border border-[#FFB74D] flex items-center justify-center rounded">
                    <img src="https://placehold.co/100/FFF3E0/FF9800?text=BLF" className="w-[80%] h-[80%] object-contain" />
                  </div>
                  <div className="absolute -top-1 -right-3 bg-gradient-to-r from-yellow-300 to-yellow-400 text-gray-900 text-[9px] px-1 py-[1px] rounded-tl-lg rounded-br-lg rounded-tr-sm font-bold shadow-sm">品牌</div>
               </div>
               
               <div className="ml-2.5 flex-1 w-0">
                  <div className="flex justify-between items-start">
                     <span className="font-bold text-[16px] text-gray-900 leading-tight truncate">便利蜂(望京诚盈中心店)</span>
                     <span className="bg-[#FFF4E5] text-[#FF6300] text-[10px] px-1 py-[1px] rounded-sm ml-1 float-right flex-shrink-0 font-medium">美团专送</span>
                  </div>
                  
                  <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                     <div className="flex items-center min-w-0 mr-1">
                        <span className="flex-shrink-0">月售 100+</span>
                        <div className="mx-1.5 w-[1px] h-[9px] bg-gray-300 flex-shrink-0"></div>
                        <span className="flex-shrink-0">起送 ¥20</span>
                        <div className="mx-1.5 w-[1px] h-[9px] bg-gray-300 flex-shrink-0"></div>
                        <span className="truncate flex-1">满20 ¥ 免配送费</span>
                     </div>
                     <div className="flex items-center flex-shrink-0 ml-1">
                        <div className="text-[#FF6300] font-bold flex items-center mr-1">
                           <Zap size={10} fill="#FF6300" className="mr-[1px]" /> 15分钟
                        </div>
                        <span>568m</span>
                     </div>
                  </div>

                  <div className="flex flex-wrap items-center mt-1.5 gap-x-1.5 gap-y-1">
                     <span className="text-[#FF6300] font-bold text-[12px]">4.5分</span>
                     <span className="text-[#FF6300] text-[10px] bg-[#FFF8E1] px-1 py-px rounded font-medium border border-transparent">24小时营业</span>
                     <span className="text-[#FF6300] text-[10px] bg-[#FFF8E1] px-1 py-px rounded font-medium border border-transparent truncate max-w-[150px]">超1000件零食酒饮好物热卖中</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center mt-1.5 gap-1.5">
                     <span className="text-gray-500 border border-gray-200 text-[10px] px-1 py-px rounded-sm">支持自取</span>
                     <span className="text-gray-500 border border-gray-200 text-[10px] px-1 py-px rounded-sm">票</span>
                     <span className="text-gray-500 border border-gray-200 text-[10px] px-1 py-px rounded-sm">在线咨询</span>
                  </div>
               </div>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-4 gap-2 mt-3">
               {[
                 { name: '冰美式咖啡（大', img: 'https://placehold.co/100/F5F5F5/555?text=Iced', price: '10' },
                 { name: '热美式咖啡（大', img: 'https://placehold.co/100/FFF8E1/FF9800?text=Hot', price: '8' },
                 { name: '冰美式咖啡（中', img: 'https://placehold.co/100/F5F5F5/555?text=Iced', price: '9' },
                 { name: '热美式咖啡（中', img: 'https://placehold.co/100/FFF8E1/FF9800?text=Hot', price: '7' },
               ].map((prod, idx) => (
                 <div key={idx} className="flex flex-col">
                   <div className="w-full aspect-square rounded-lg bg-[#f8f8f8] mb-1.5 border border-gray-100 overflow-hidden relative">
                      <img src={prod.img} className="w-full h-full object-cover mix-blend-multiply" />
                      <div className="absolute bottom-0 right-0 text-[8px] text-white/50 px-0.5">美团外卖</div>
                   </div>
                   <span className="text-[12px] text-gray-900 tracking-tight leading-tight truncate">{prod.name}</span>
                   <span className="text-[#FF4A4A] font-bold text-[14px] mt-[1px] leading-none"><span className="text-[10px]">¥</span>{prod.price}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-2xl p-3 mb-2 shadow-sm cursor-pointer active:opacity-95" onClick={() => onNavigate('menu')}>
            <div className="flex">
               <div className="relative w-12 h-12 flex-shrink-0 bg-gray-50 rounded-lg p-0.5 border border-gray-100 overflow-hidden">
                  <img src="https://placehold.co/100/F5F5F5/795548?text=Coffee" className="w-full h-full object-cover rounded-md" />
               </div>
               
               <div className="ml-2.5 flex-1 w-0">
                  <div className="flex justify-between items-start">
                     <span className="font-bold text-[16px] text-gray-900 leading-tight truncate">新一咖啡(融新科技中心店)</span>
                     <span className="text-[#FF6300] border border-[#FFD5B2] text-[10px] px-1 py-[1px] rounded-sm ml-1 float-right flex-shrink-0 font-medium bg-white">美团快送</span>
                  </div>
                  
                  <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                     <div className="flex items-center min-w-0 mr-1">
                        <span className="flex-shrink-0">月售 400+</span>
                        <div className="mx-1.5 w-[1px] h-[9px] bg-gray-300 flex-shrink-0"></div>
                        <span className="flex-shrink-0">起送 ¥0</span>
                        <div className="mx-1.5 w-[1px] h-[9px] bg-gray-300 flex-shrink-0"></div>
                        <span className="truncate flex-1">配送约 ¥0</span>
                     </div>
                     <div className="flex items-center flex-shrink-0 ml-1">
                        <span>107m</span>
                        <span className="ml-[2px]">15分钟</span>
                     </div>
                  </div>

                  <div className="flex flex-wrap items-center mt-1.5 gap-x-1.5 gap-y-1">
                     <span className="text-[#FF6300] font-bold text-[12px]">4.7分</span>
                     <span className="text-[#FF6300] text-[10px] bg-[#FFF8E1] px-1 py-px rounded font-medium border border-transparent">刚刚有用户下单</span>
                     <span className="text-[#FF6300] text-[10px] bg-[#FFF8E1] px-1 py-px rounded font-medium border border-transparent">门店上新</span>
                     <span className="text-[#FF6300] text-[10px] bg-[#FFF8E1] px-1 py-px rounded font-medium border border-transparent">刚刚有用户看过</span>
                  </div>
                  
                  <div className="flex items-center mt-1.5">
                     <div className="flex items-center border border-[#FFCDD2] rounded-sm text-[#FF4A4A] text-[10px] leading-none overflow-hidden h-[16px] font-medium mr-1.5 flex-shrink-0">
                        <div className="bg-gradient-to-b from-[#FF5252] to-[#FF1744] text-white px-1 h-full flex items-center rounded-r-[4px] relative -mr-[4px] z-10 box-border text-[9px] font-bold"><Zap size={8} fill="white" className="mr-0.5" /> 神券</div>
                        <div className="px-1 pl-2 bg-[#FFF5F5] h-full flex items-center pr-1">最高可用20元券</div>
                     </div>
                     <div className="flex items-center border border-[#FFCDD2] text-[10px] text-[#FF4A4A] rounded-sm px-1 h-[16px] bg-white whitespace-nowrap overflow-hidden">
                       29减2 | 39减3 | 59减5
                     </div>
                     <ChevronDown size={12} className="text-gray-400 ml-auto" />
                  </div>
               </div>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-4 gap-2 mt-3">
               {[
                 { name: '深烘美式·黑咖', img: 'https://placehold.co/100/EFEBE9/4E342E?text=DK', price: '6.7', tag: '新客价', type: '可热饮', corner: '冷热' },
                 { name: '阿尔卑斯·小黄', img: 'https://placehold.co/100/FFF3E0/FF9800?text=YW', price: '22.8', tag: '新客价', type: '可热饮', corner: '冷热' },
                 { name: '中深美式·阿拉', img: 'https://placehold.co/100/EFEBE9/4E342E?text=MD', price: '18.8', tag: '新客价', type: '可热饮', corner: '冷热' },
                 { name: '美式烘焙简餐', img: 'https://placehold.co/100/F5F5F5/999999?text=Meal', price: '21.8', tag: '新客价' },
               ].map((prod, idx) => (
                 <div key={idx} className="flex flex-col">
                   <div className="w-full aspect-square rounded-lg bg-[#f8f8f8] mb-1.5 border border-gray-100 overflow-hidden relative">
                      <img src={prod.img} className="w-full h-full object-cover blend-multiply" />
                      {prod.type && <div className="absolute bottom-0 left-0 bg-[#FFD101]/90 text-gray-900 text-[9px] font-bold px-1 rounded-tr pl-0.5"><span className="text-[#FF6300] mr-[1px]">♨</span> {prod.type}</div>}
                      {prod.corner && <div className="absolute bottom-0.5 right-0.5 bg-white/80 border border-gray-200 text-gray-500 text-[8px] px-0.5 rounded leading-tight scale-90">{prod.corner}</div>}
                   </div>
                   <span className="text-[12px] text-gray-900 tracking-tight leading-tight truncate">{prod.name}</span>
                   <div className="flex flex-wrap items-baseline mt-[1px]">
                     <span className="text-[#FF4A4A] font-bold text-[14px] leading-none"><span className="text-[10px]">¥</span>{prod.price}</span>
                     {prod.tag && <span className="text-[#FF4A4A] text-[9px] ml-0.5 scale-90 origin-left truncate">{prod.tag}</span>}
                   </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Item 3 (Bottom Cut off) */}
          <div className="bg-white rounded-2xl p-3 mb-2 shadow-sm relative pt-4" onClick={() => onNavigate('menu')}>
            <div className="flex">
               <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-3 border-2 border-gray-900 rounded-full mb-0.5"></div>
                    <span className="text-[6px] font-bold leading-none transform scale-75">Infinity Coffee</span>
                  </div>
                  <div className="absolute -bottom-[5px] left-1 bg-gray-100 text-gray-400 text-[8px] px-1 rounded-sm scale-90 transform origin-left">广告</div>
               </div>
               
               <div className="ml-2.5 flex-1 w-0">
                  <div className="flex justify-between items-start">
                     <span className="font-bold text-[16px] text-gray-900 leading-tight truncate">Infinity Coffee 无穷咖啡(北苑店)</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                     <div className="flex items-center min-w-0 mr-1">
                        <span className="flex-shrink-0">月售 500+</span>
                        <div className="mx-1.5 w-[1px] h-[9px] bg-gray-300 flex-shrink-0"></div>
                        <span className="flex-shrink-0">起送 ¥20</span>
                        <div className="mx-1.5 w-[1px] h-[9px] bg-gray-300 flex-shrink-0"></div>
                        <span className="truncate flex-1">配送约 ¥0.5</span>
                     </div>
                     <div className="flex items-center flex-shrink-0 ml-1">
                        <span>3.6km</span>
                     </div>
                  </div>
                  <div className="flex flex-wrap items-center mt-1.5 gap-x-1.5">
                     <span className="text-[#FF6300] font-bold text-[12px]">4.7分</span>
                     <span className="text-[#FF6300] text-[10px] bg-[#FFF8E1] px-1 py-px rounded font-medium border border-transparent">最近24小时有21人下单</span>
                     <span className="text-[#FF6300] text-[10px] bg-[#FFF8E1] px-1 py-px rounded font-medium border border-transparent">8个月前买过</span>
                  </div>
               </div>
            </div>
            
            {/* 悬浮购物车图标 */}
            <div className="absolute right-4 bottom-4 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center cursor-pointer active:scale-95">
               <ShoppingCart size={18} className="text-gray-900 stroke-[2.5px] ml-[-2px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

