import React from 'react';
import { MapPin, MessageSquare, Search, ChevronRight, Flame, ArrowRight, ReceiptText, User, ScanLine, ShoppingBag, Droplets, UtensilsCrossed, Apple, Pill, Truck, Bike, Wallet, Percent, Star, ChevronDown, MoreHorizontal } from 'lucide-react';

export default function Home({ onNavigate }: { onNavigate: (v: string) => void }) {
  return (
    <div className="flex flex-col h-full bg-[#F4F4F4] relative scrollbar-hide overflow-hidden font-sans">
      
      {/* 顶部黄色大背景 */}
      <div className="absolute top-0 left-0 right-0 h-[220px] bg-gradient-to-b from-[#FFD101] to-[#FFD101] z-0 rounded-b-[20%] scale-x-125 -mt-4"></div>

      {/* Header 区 */}
      <div className="pt-12 px-3 sticky top-0 z-20 flex-shrink-0">
        
        {/* 地址行 */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center text-gray-900">
            <span className="font-bold text-[22px] tracking-wide">首页</span>
            <span className="mx-2 text-gray-800/20 text-[18px]">|</span>
            <span className="text-[20px] font-medium tracking-wide">自取</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center cursor-pointer" onClick={() => onNavigate('address')}>
              <MapPin size={16} className="text-gray-900 stroke-[2.5px]" />
              <span className="font-bold text-[15px] text-gray-900 ml-1 tracking-wide">
                融新科技中心-B座
              </span>
              <ChevronRight size={16} className="text-gray-900 ml-0.5 stroke-[2.5px]" />
            </div>
            
            {/* 消息气泡图标 */}
            <div className="relative">
              <div className="w-[30px] h-[26px] bg-[#FF7BE5] rounded-full rounded-br-sm border-[1.5px] border-white flex flex-col items-center justify-center relative overfow-hidden">
                <div className="flex space-x-[2px] mt-0.5">
                   <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                   <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                   <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 搜索框 */}
        <div 
           className="bg-white rounded-full flex items-center p-1 shadow-sm cursor-pointer active:scale-[0.98] transition-all"
           onClick={() => onNavigate('search')}
        >
          <div className="flex pl-3 items-center flex-1">
            <Search size={18} className="text-gray-400 mr-2 stroke-[2px]" />
            <span className="text-gray-500 text-[14px] font-medium">鸡柳大人爆汁大鸡腿上新</span>
          </div>
          <button className="bg-[#FFD101] text-gray-900 text-[14px] font-bold px-5 py-1.5 rounded-full mr-0.5">
            搜索
          </button>
        </div>
      </div>

      {/* 滚动内容区 */}
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden px-3 pt-4 z-10 pb-24 relative">
        
        {/* 金刚区 (业务分类 Grid) */}
        <div className="bg-white rounded-3xl p-3 pb-3 mb-2.5 shadow-sm relative overflow-hidden flex flex-col">
          <div className="grid grid-cols-5 gap-y-4 pt-1">
            {[
              { name: '美食', img: 'https://placehold.co/100x100/FFF0F0/FF6B6B?text=🍽️' },
              { name: '甜点饮品', tag: '特价', img: 'https://placehold.co/100x100/FFF5E6/FF9800?text=🥤' },
              { name: '超市便利', img: 'https://placehold.co/100x100/E3F2FD/2196F3?text=🛒' },
              { name: '蔬菜水果', img: 'https://placehold.co/100x100/E8F5E9/4CAF50?text=🥕' },
              { name: '看病买药', img: 'https://placehold.co/100x100/E0F7FA/00BCD4?text=💊' },
              { name: '午餐', img: 'https://placehold.co/100x100/FFF8E1/FFC107?text=🍱' },
              { name: '食光机', img: 'https://placehold.co/100x100/FFF3E0/FF9800?text=🐔' },
              { name: '拼好饭', img: 'https://placehold.co/100x100/FFFDE7/FBC02D?text=🍲' },
              { name: '跑腿', img: 'https://placehold.co/100x100/FBE9E7/FF5722?text=🏃' },
              { name: '天天津贴', img: 'https://placehold.co/100x100/FFEBEE/F44336?text=¥' },
            ].map((item, idx) => (
              <div key={idx} onClick={() => onNavigate('search_results')} className="flex flex-col items-center justify-start relative cursor-pointer active:scale-95 transition-transform group">
                {item.tag && (
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-[#FF4A4A] text-white text-[10px] px-1.5 py-0.5 rounded-full rounded-bl-sm z-10 border border-white whitespace-nowrap font-bold">
                    {item.tag}
                  </div>
                )}
                <div className="w-[45px] h-[45px] mb-1.5 rounded-full overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                   <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-full mix-blend-multiply" />
                </div>
                <span className="text-[12px] text-gray-700 font-medium tracking-tight">{item.name}</span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-3 space-x-1.5 pb-1">
            <div className="w-4 h-1 bg-[#FFD101] rounded-full"></div>
            <div className="w-1.5 h-1 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* 神抢手 */}
        <div className="bg-white rounded-2xl p-3 mb-2.5 shadow-sm">
           <div className="flex justify-between items-center mb-3">
             <div className="flex items-center">
               <span className="font-bold text-[18px] text-gray-900 mr-2 tracking-wide font-sans">神抢手</span>
               <div className="text-[11px] text-[#D32F2F] bg-gradient-to-r from-[#FFF0F0] to-[#FFF5F5] px-1.5 py-0.5 rounded-sm font-medium border border-[#FFEBEE]">
                 品质精选省心价
               </div>
             </div>
             <div className="text-[12px] text-gray-500 flex items-center pr-1 active:opacity-70 cursor-pointer">
               更多 <ChevronRight size={12} className="ml-0.5" />
             </div>
           </div>

           <div className="grid grid-cols-2 gap-2">
              {[
                { brand: 'LELECHA乐...', name: '【爆款奶茶】咸法酪', price: '15.9', tag: '一口价', img: 'https://placehold.co/100/FFF8F0/FF9800?text=🥤' },
                { brand: '凑凑', name: '【热销】台式卤肉饭', price: '24.9', tag: '买贵必赔', img: 'https://placehold.co/100/FFF3E0/FF9800?text=🍱' },
                { brand: 'wagas', name: '畅销海盐卷X咖啡随...', price: '19.9', tag: '低至5.7折', img: 'https://placehold.co/100/EFEBE9/795548?text=☕' },
                { brand: '七加三轻食健身餐', name: '低卡(柠香煎鸡胸)', price: '20', tag: '买贵必赔', img: 'https://placehold.co/100/E8F5E9/4CAF50?text=🥗' },
              ].map((item, i) => (
                <div key={i} className="flex cursor-pointer active:scale-95 transition-transform" onClick={() => onNavigate('search_results')}>
                   <div className="w-14 h-14 rounded-lg flex-shrink-0 bg-gray-50 overflow-hidden mr-2">
                     <img src={item.img} className="w-full h-full object-cover" />
                   </div>
                   <div className="flex flex-col justify-between py-0.5 flex-1 min-w-0">
                      <div>
                        <div className="text-[13px] font-bold text-gray-900 truncate leading-tight">{item.brand}</div>
                        <div className="text-[11px] text-gray-600 truncate mt-0.5">{item.name}</div>
                      </div>
                      <div className="flex items-baseline mt-auto">
                        <span className="text-[#FF4A4A] font-bold text-[14px] leading-none"><span className="text-[10px]">¥</span>{item.price}</span>
                        <span className="text-[#FF4A4A] text-[9px] ml-1 line-through scale-90 origin-bottom-left truncate">{item.tag}</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* 附近商家 */}
        <div className="flex items-end mb-3 sticky top-[56px] z-20 py-2 -mx-3 px-3">
          <div className="absolute inset-0 bg-[#F4F4F4]/90 backdrop-blur-md"></div>
          <div className="relative z-10 flex items-center">
            <span className="text-[19px] font-bold text-gray-900 tracking-wide pr-3 relative">
              附近商家
              <div className="absolute bottom-0 left-0 right-3 h-1.5 bg-[#FFD101]/60 rounded-full"></div>
            </span>
            <span className="text-[14px] font-bold text-gray-500 px-2 tracking-wide">特价外卖</span>
            <div className="text-[#FF6300] text-[10px] bg-[#FFF4E5] border border-[#FFD5B2] px-1 py-[2px] rounded-sm font-bold flex items-center leading-none ml-1 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-white/60 to-transparent"></div>
               10元点套餐
            </div>
          </div>
        </div>

        {/* 商家卡片 */}
        {[
          {
             name: '超级碗 FOODBOWL(融新科...',
             img: 'https://placehold.co/200/E8F5E9/4CAF50?text=BOWL',
             score: '4.8分', tags: ['堂食店'], sales: '月售 5000+', 
             deliveryType: '美团快送', deliveryPrice: '起送 ¥20 免配送费', dist: '65m', time: '约15分钟',
             rank: '望京盖饭排行榜第1名', dp: '大众点评高分店铺',
             coupon: '最高可用 21.5元券',
             imgTag: '品质必点'
          },
          {
             name: '苗可娘·贵州米粉(韩国城店)',
             img: 'https://placehold.co/200/FFF8E1/FFC107?text=NOODLE',
             score: '4.7分', tags: ['明厨亮灶'], sales: '月售 900+', 
             deliveryType: '美团快送', deliveryPrice: '起送 ¥0 配送 ¥0', dist: '3.3km', time: '33分钟',
             rank: '米粉营养丰富', dp: '',
             coupon: '最高可用 28元券', coupon2: '收藏领1元券',
             imgTag: ''
          }
        ].map((store, i) => (
           <div 
             key={i}
             onClick={() => onNavigate('menu')}
             className="bg-white rounded-2xl p-3 pb-4 flex mb-2.5 shadow-sm active:scale-[0.98] transition-transform relative"
           >
             <div className="relative w-[110px] h-[110px] flex-shrink-0">
               <img src={store.img} alt={store.name} className="w-[110px] h-[110px] object-cover rounded-xl border border-gray-100" />
               {store.imgTag && (
                  <div className="absolute top-0 left-0 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-[11px] px-1.5 py-0.5 rounded-tl-xl rounded-br-lg font-bold tracking-wider opacity-90 shadow-sm">{store.imgTag}</div>
               )}
               {i === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FFD101]/90 to-transparent p-1.5 pb-1 rounded-b-xl">
                      <div className="text-[12px] font-bold text-gray-900 text-center uppercase tracking-widest leading-none drop-shadow-sm">上新</div>
                      <div className="text-[9px] font-bold text-gray-900 text-center leading-none mt-[2px] drop-shadow-sm">咬春菜饭!</div>
                  </div>
               )}
               {i === 1 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FFB74D]/90 to-transparent p-1.5 pb-1 rounded-b-xl">
                      <div className="text-[10px] font-bold text-white text-center leading-none drop-shadow-sm pb-0.5">门店上新</div>
                  </div>
               )}
             </div>
             
             <div className="ml-3 flex flex-col flex-1 pb-0 overflow-hidden">
               <div className="flex justify-between items-start">
                 <span className="font-bold text-[16px] text-gray-900 leading-[1.2] truncate block pb-1 font-sans">{store.name}</span>
                 <MoreHorizontal size={14} className="text-gray-300 flex-shrink-0 mt-0.5" />
               </div>

               <div className="flex items-center justify-between mt-[2px]">
                 <div className="flex items-center text-[11px] text-gray-500">
                   <span className="text-[#FF6300] font-bold mr-1.5 tracking-tight">{store.score}</span>
                   {store.tags.map(t => <span key={t} className="text-[#68C76B] font-medium mr-1.5">{t}</span>)}
                   <span>{store.sales}</span>
                 </div>
                 <div className="text-[#FF6300] text-[9px] border border-[#FFD5B2] px-1 rounded-sm leading-tight flex-shrink-0 font-medium">
                   {store.deliveryType}
                 </div>
               </div>

               <div className="flex justify-between items-center text-[11px] text-gray-500 mt-1.5 tracking-tight">
                 <div className="truncate pr-1">{store.deliveryPrice}</div>
                 <div className="flex items-center flex-shrink-0">
                   <span>{store.dist}</span>
                   <span className="mx-1.5">|</span>
                   <span className="text-[#FF6300] font-medium">{store.time}</span>
                 </div>
               </div>

               {/* Tags Row */}
               <div className="flex flex-wrap items-center mt-[9px] mb-[-2px] gap-1.5 h-[16px] overflow-hidden">
                 {store.rank && (
                   <span className="text-[10px] text-white bg-gradient-to-r from-[#FF8A65] to-[#FFAB91] px-1.5 py-[1px] rounded-[3px] font-bold shadow-sm flex items-center leading-tight">
                      <Flame size={10} fill="#FFF" className="mr-[2px]" /> {store.rank} 
                      {store.rank.includes('排行') && <ChevronRight size={10} className="ml-[1px]" />}
                   </span>
                 )}
                 {store.dp && (
                   <span className="text-[10px] text-[#A1887F] font-bold px-0 tracking-tight flex items-center leading-tight pt-px">大众点评高分店铺</span>
                 )}
               </div>

               {/* Coupon Row */}
               <div className="flex flex-wrap items-center mt-[7px] gap-1.5">
                   {store.coupon && (
                     <div className="flex items-center border border-[#FFCDD2] rounded-sm text-[#FF4A4A] text-[10px] leading-none overflow-hidden h-[16px] font-medium shadow-sm">
                        <div className="bg-gradient-to-b from-[#FF5252] to-[#FF1744] text-white px-1 h-full flex items-center rounded-r-[4px] relative -mr-[4px] z-10 box-border text-[9px] font-bold">神券</div>
                        <div className="px-1 pl-2 bg-[#FFF5F5] h-full flex items-center pr-1">{store.coupon}</div>
                     </div>
                   )}
                   {store.coupon2 && (
                      <div className="border border-[#FFCDD2] rounded-sm text-[#FF4A4A] text-[10px] px-1 h-[16px] flex items-center font-medium bg-[#FFF5F5] shadow-sm">{store.coupon2}</div>
                   )}
               </div>
             </div>
             
             {/* Float Cart Icon */}
             {i === 1 && (
                <div className="absolute right-3 top-10 w-9 h-9 bg-white border border-gray-100 rounded-full shadow-md flex items-center justify-center opacity-80 cursor-pointer hover:bg-gray-50">
                  <ShoppingBag size={18} className="text-gray-900 ml-[-2px]" />
                </div>
             )}
           </div>
        ))}
        
        {/* Right floating tag */}
        <div className="fixed right-0 top-[50%] bg-white/80 border border-gray-200 border-r-0 rounded-l-md px-1 py-1.5 text-[9px] text-gray-500 font-bold shadow-sm z-30 writing-vertical-lr flex items-center justify-center space-x-0 tracking-widest backdrop-blur-sm" style={{ writingMode: 'vertical-lr' }}>
           资质规则
        </div>
      </div>

      {/* 底部导航栏 (高度还原设计图) */}
      <div className="absolute bottom-0 w-full h-[70px] bg-white flex justify-between items-center z-50 pt-2 pb-6 px-4 before:absolute before:inset-0 before:top-[-10px] before:bg-gradient-to-b before:from-transparent before:to-white before:pointer-events-none border-t border-gray-100/50 relative shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
        
        {/* Ai吃 */}
        <div className="flex flex-col items-center justify-center z-10 w-1/5 cursor-pointer relative" onClick={() => onNavigate('search')}>
           <div className="relative mb-1">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="drop-shadow-sm">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8 14H6V9H8V14ZM10 14H12V9H10V14ZM18 14H16V9H18V14Z" fill="url(#aiGradient)" />
                <defs>
                  <linearGradient id="aiGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFD101" />
                    <stop offset="0.5" stopColor="#FF7BE5" />
                    <stop offset="1" stopColor="#B388FF" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute -top-1 -right-1.5 w-1.5 h-1.5 bg-[#FF4A4A] rounded-full border border-white"></div>
           </div>
           <span className="text-[11px] font-bold text-[#FF4081] bg-clip-text text-transparent bg-gradient-to-r from-[#FFD101] via-[#FF4081] to-[#B388FF]">Ai吃</span>
        </div>

        {/* 神券 */}
        <div className="flex flex-col items-center justify-center z-10 w-1/5 cursor-pointer">
           <div className="mb-0.5 relative flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 8C19 8 16.5 5 12 5C7.5 5 5 8 5 8V16C5 16 7.5 19 12 19C16.5 19 19 16 19 16V8Z" stroke="#424242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11V14M9.5 12.5H14.5" stroke="#424242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="1" fill="#424242"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center mt-1"><span className="text-[13px] font-bold text-gray-800">神</span></div>
           </div>
           <span className="text-[11px] font-bold text-gray-700">神券</span>
        </div>

        {/* 连续下单 (悬浮大黄钮) */}
        <div className="flex flex-col items-center justify-center z-20 w-1/5 cursor-pointer relative group">
           <div className="absolute bottom-[2px] w-[58px] h-[58px] bg-gradient-to-b from-[#FFEB3B] to-[#FFC107] rounded-full flex flex-col items-center justify-center shadow-[0_4px_12px_rgba(255,193,7,0.4)] border-[3px] border-[#FCFCFC] group-hover:scale-105 transition-transform">
             <span className="text-[14px] font-bold text-gray-900 leading-tight">连续</span>
             <span className="text-[14px] font-bold text-gray-900 leading-tight">下单</span>
           </div>
        </div>

        {/* 订单 */}
        <div className="flex flex-col items-center justify-center z-10 w-1/5 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate('order_tracking')}>
           <div className="mb-1">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect x="5" y="4" width="14" height="16" rx="2" stroke="#424242" strokeWidth="2" strokeLinecap="round"/>
               <path d="M9 10H15" stroke="#424242" strokeWidth="2" strokeLinecap="round"/>
               <path d="M9 14H13" stroke="#424242" strokeWidth="2" strokeLinecap="round"/>
              </svg>
           </div>
           <span className="text-[11px] font-bold text-gray-700">订单</span>
        </div>

        {/* 我的 */}
        <div className="flex flex-col items-center justify-center z-10 w-1/5 cursor-pointer hover:opacity-80 transition-opacity">
           <div className="mb-1">
             <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#424242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#424242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
           </div>
           <span className="text-[11px] font-bold text-gray-700">我的</span>
        </div>
        
      </div>
    </div>
  );
}
