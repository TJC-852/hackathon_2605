import React, { useState } from 'react';
import { ChevronLeft, Search, Star, MoreHorizontal, Plus, Minus, X, Info, Phone, Heart, Share, ThumbsUp } from 'lucide-react';

export default function Menu({ onNavigate }: { onNavigate: (v: string) => void }) {
  const [activeTab, setActiveTab] = useState('点外卖');
  const [showSku, setShowSku] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const handleShowSku = () => setShowSku(true);
  
  const handleAddToCart = (price: number) => {
    setCartCount(c => c + 1);
    setCartTotal(c => c + price);
    setShowSku(false); // 关闭规格弹窗
  };

  return (
    <div className="flex flex-col h-full bg-white relative overflow-hidden">
      {/* 顶部 店铺背景与Header */}
      <div className="bg-gradient-to-b from-[#FFF0DB] to-white pt-10 px-3 relative flex-shrink-0 z-10 before:absolute before:inset-0 before:-z-10 before:bg-[url('https://placehold.co/400x200/FFF0DB/FFD101?text=bg')] before:bg-cover before:bg-center before:opacity-30">
        <div className="flex justify-between items-center relative z-20 pb-2">
          <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center backdrop-blur-md" onClick={() => onNavigate('search_results')}>
             <ChevronLeft size={20} className="text-white ml-[-2px]" />
          </div>
          <div className="flex space-x-2">
            <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center backdrop-blur-md">
              <Search size={16} className="text-white" />
            </div>
            <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center backdrop-blur-md">
              <Heart size={16} className="text-white" />
            </div>
            <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center backdrop-blur-md">
              <MoreHorizontal size={16} className="text-white" />
            </div>
          </div>
        </div>

        {/* 商家信息卡片 */}
        <div className="relative mt-2 z-20">
          <div className="flex">
             <div className="w-[72px] h-[72px] bg-white rounded-xl p-1 shadow-md z-10 flex-shrink-0">
                <img src="https://placehold.co/100/FF7A59/FFF?text=BOWL" alt="logo" className="w-full h-full object-cover rounded-lg" />
                <div className="absolute top-0 right-0 bg-black/60 text-white text-[9px] px-1 rounded-bl-md rounded-tr-md">品牌</div>
             </div>
             <div className="ml-3 flex-1 flex flex-col justify-end pb-1 overflow-hidden">
               <h1 className="font-bold text-[20px] text-gray-900 leading-tight">超级碗 FOODBOWL</h1>
               <div className="text-[11px] text-gray-600 mt-1 flex items-center">
                 <div className="flex items-center text-[#FF6300] font-bold mr-2">
                   <Star size={10} fill="#FF6300" className="mr-0.5" /> 4.9
                 </div>
                 <span className="mr-2">月售5000+</span>
                 <span>约15分钟</span>
               </div>
             </div>
          </div>
          
          <div className="mt-3 flex items-center justify-between">
             <div className="flex flex-wrap gap-1.5 flex-1 overflow-hidden h-[18px]">
               <span className="text-[10px] text-[#FF4A4A] border border-[#FF4A4A]/30 px-1 py-0.5 rounded flex items-center whitespace-nowrap">25减2</span>
               <span className="text-[10px] text-[#FF4A4A] border border-[#FF4A4A]/30 px-1 py-0.5 rounded flex items-center whitespace-nowrap">50减5</span>
               <span className="text-[10px] text-[#FF4A4A] border border-[#FF4A4A]/30 px-1 py-0.5 rounded flex items-center whitespace-nowrap">特价商品</span>
               <span className="text-[10px] text-[#4DB1E2] border border-[#4DB1E2]/30 px-1 py-0.5 rounded flex items-center whitespace-nowrap">极速退</span>
             </div>
             <div className="text-[10px] text-gray-400 flex items-center ml-2 flex-shrink-0">
                11个优惠 <ChevronLeft size={10} className="rotate-180 ml-0.5" />
             </div>
          </div>
          
          <div className="text-[11px] text-gray-500 mt-2 truncate w-[85%]">公告：健康轻食，每天新鲜现做，健康0负担！门店自取更优惠哦健康轻食，每天新鲜现做，健康0负担！门店自取更优惠哦健康轻食，每天新鲜现做，健康0负担！门店自取更优惠哦</div>
        </div>
      </div>

      {/* Tab 栏 */}
      <div className="flex items-center px-4 pt-1 pb-2 border-b border-gray-100 flex-shrink-0 text-[15px] z-20 bg-white sticky top-0 shadow-sm shadow-gray-100/50">
          {['点外卖', '评价', '商家'].map(t => (
            <div 
              key={t} 
              className="flex flex-col items-center justify-center mr-8 cursor-pointer"
              onClick={() => setActiveTab(t)}
            >
              <span className={`pb-1.5 transition-colors ${activeTab === t ? 'font-bold text-gray-900 text-[16px]' : 'text-gray-500 font-medium'}`}>
                {t} {t === '评价' && <span className="text-[10px] ml-0.5 font-normal">999+</span>}
              </span>
              {activeTab === t && <div className="w-5 h-1 bg-[#FFD101] rounded-full"></div>}
            </div>
          ))}
          
          <div className="ml-auto bg-gray-100 rounded-full flex items-center px-2 py-1 space-x-2">
             <span className="text-[11px] text-gray-600 font-medium flex items-center"><Search size={12} className="mr-0.5" /> 搜索</span>
          </div>
      </div>

      {/* 点菜区域 (左侧分类 + 右侧商品) */}
      <div className="flex-1 overflow-hidden flex bg-white pb-[72px]">
         <div className="w-[84px] bg-[#f7f8fa] overflow-y-auto [&::-webkit-scrollbar]:hidden flex-shrink-0">
           {[
             { name: '热销榜', icon: '🔥' },
             { name: '招牌主食', active: true },
             { name: '沙拉轻食' },
             { name: '健康饮品' },
             { name: '小吃周边' },
             { name: '单点加料' },
             { name: '酱汁选项' }
           ].map((cat, i) => (
             <div key={i} className={`py-4 px-2 text-[12px] relative flex items-center ${cat.active ? 'bg-white text-gray-900 font-bold' : 'text-gray-500 font-medium'}`}>
               {cat.active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FFD101]"></div>}
               {cat.icon && <span className="mr-1">{cat.icon}</span>}
               {cat.name}
             </div>
           ))}
         </div>
         <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden p-3 relative scroll-smooth">
            <h2 className="font-bold text-[13px] text-gray-900 mb-2.5 sticky top-0 bg-white/95 py-1.5 z-10 backdrop-blur-sm -mx-3 px-3">招牌主食</h2>
            
            {[1,2,3,4,5].map(item => (
              <div key={item} className="flex mb-6 cursor-pointer" onClick={handleShowSku}>
                <div className="relative w-[100px] h-[100px] flex-shrink-0">
                  <img src={`https://placehold.co/200/FFF4E5/FF7A59?text=Food${item}`} alt="food" className="w-[100px] h-[100px] rounded-lg object-cover bg-gray-50" />
                  {item === 1 && <div className="absolute bottom-1 left-1 bg-gradient-to-r from-[#FF5A5F] to-[#FF8A65] text-white text-[9px] px-1.5 py-0.5 rounded flex items-center font-bold shadow-sm">店长推荐</div>}
                </div>
                <div className="ml-2.5 flex-1 flex flex-col pt-0.5">
                   <div className="font-bold text-[15px] text-gray-900 leading-tight">蜜汁鸡腿超级碗</div>
                   <div className="text-[11px] text-gray-500 mt-1 line-clamp-2 leading-snug">主要原料：鸡腿肉、糙米、西兰花、秘制烤肉汁、南瓜块</div>
                   
                   <div className="flex items-center text-[10px] text-gray-400 mt-1 space-x-2">
                     <span>月售 1000+</span>
                     <span className="flex items-center"><ThumbsUp size={10} className="mr-0.5" /> 99%</span>
                   </div>
                   
                   <div className="flex items-center mt-1">
                     <span className="text-[#D32F2F] bg-[#FFEBEE] border border-[#FFCDD2] text-[9px] px-1 rounded-sm">折后约 ¥32</span>
                   </div>

                   <div className="mt-auto flex justify-between items-end relative bottom-0">
                     <div className="flex items-baseline text-[#FF4A4A]">
                       <span className="text-[12px] font-bold mr-[1px]">¥</span><span className="text-[18px] font-bold">37.4</span>
                     </div>
                     <button 
                       className="relative text-gray-900 h-6 active:scale-95 transition-transform"
                       onClick={(e) => { e.stopPropagation(); handleShowSku(); }}
                     >
                       <div className="bg-[#FFD101] text-[11px] font-bold px-3 py-1 rounded-full relative z-10 leading-none h-full flex items-center justify-center">选规格</div>
                       <div className="absolute -top-1.5 -right-1.5 bg-[#FF4A4A] text-white text-[9px] rounded-full min-w-[14px] h-[14px] flex items-center justify-center border border-white font-bold leading-none px-0.5 z-20">选</div>
                     </button>
                   </div>
                </div>
              </div>
            ))}
         </div>
      </div>

      {/* 底部购物车 */}
      <div className="absolute bottom-3 left-3 right-3 h-[52px] bg-[#333333] rounded-full flex items-center shadow-lg z-30">
        <div className="relative w-[52px] h-[52px] -mt-4 ml-3 border-4 border-white rounded-full bg-[#f5f5f5] flex items-center justify-center">
           <div className={`w-full h-full rounded-full flex items-center justify-center
               ${cartCount > 0 ? 'bg-[#FFD101] animate-pulse' : 'bg-[#e5e5e5]'}
           `}>
             <span className={`text-[20px] ${cartCount === 0 && 'opacity-50 grayscale'}`}>🛒</span>
           </div>
           {cartCount > 0 && <div className="absolute -top-1 -right-1 bg-[#FF4A4A] text-white text-[10px] min-w-[16px] h-[16px] px-1 flex items-center justify-center rounded-full font-bold border border-white leading-none">{cartCount}</div>}
        </div>
        
        <div className="flex-1 ml-3 flex flex-col justify-center">
            {cartCount > 0 ? (
               <>
                 <div className="text-white font-bold flex items-baseline"><span className="text-[12px] mr-px">¥</span><span className="text-[18px]">{cartTotal.toFixed(1)}</span></div>
                 <div className="text-[#AAAAAA] text-[10px] leading-tight mt-0.5">预估另需配送费 ¥1.5</div>
               </>
            ) : (
               <>
                 <div className="text-[#AAAAAA] font-medium text-[13px] leading-tight">未选购商品</div>
                 <div className="text-[#AAAAAA] text-[10px] leading-tight mt-1">另需配送费 ¥1.5</div>
               </>
            )}
        </div>
        
        <button 
          className={`h-full px-5 rounded-r-full font-bold text-[14px] flex items-center justify-center transition-colors ${cartCount > 0 ? 'bg-[#FFD101] text-gray-900 w-[100px]' : 'bg-[#444444] text-[#888888] w-[100px]'}`}
          onClick={() => { if(cartCount > 0) onNavigate('checkout'); }}
        >
          {cartCount > 0 ? '去结算' : '¥20起送'}
        </button>
      </div>

      {/* SKU 多规格选择弹窗 (Screen 5) */}
      {showSku && (
        <div className="absolute inset-0 bg-black/60 z-50 flex items-end justify-center sm:rounded-[40px] overflow-hidden backdrop-blur-sm">
          <div className="w-full h-[85%] bg-white rounded-t-2xl flex flex-col relative animate-in slide-in-from-bottom duration-200">
            <div className="absolute top-4 right-4 bg-gray-100 p-1.5 rounded-full cursor-pointer z-20 active:scale-95" onClick={() => setShowSku(false)}>
               <X size={16} className="text-gray-500" />
            </div>
            
            {/* Header image and details */}
            <div className="px-4 pt-4 pb-2 relative flex-shrink-0">
               <div className="flex items-end">
                 <img src="https://placehold.co/200/FFF4E5/FF7A59?text=SKU" alt="sku" className="w-[100px] h-[100px] rounded-lg object-cover border border-gray-100 shadow-sm bg-gray-50" />
                 <div className="ml-3 flex flex-col justify-end h-[100px] pb-1 w-[60%]">
                   <h3 className="font-bold text-[16px] text-gray-900 leading-tight">蜜汁鸡腿超级碗</h3>
                   <div className="text-[11px] text-gray-500 mt-1 flex items-center space-x-2">
                     <span>月售 1000+</span> <span>好评度 99%</span>
                   </div>
                   <div className="text-[#FF4A4A] flex items-baseline mt-auto">
                     <span className="text-[14px] font-bold mr-px">¥</span><span className="text-[22px] font-bold leading-none">37.4</span>
                   </div>
                 </div>
               </div>
               
               {/* 规格选择简述 */}
               <div className="bg-gray-50 rounded-lg p-2 mt-3 flex items-center">
                 <span className="text-gray-500 text-[11px] mr-2 flex-shrink-0">已选规：</span>
                 <span className="font-bold text-gray-900 text-[11px] truncate">正常量, 糙米饭, 无辅助碳水, 蒜香西兰花</span>
               </div>
            </div>

            {/* Sku Options */}
            <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden px-4 pt-2 pb-20">
               {/* Option Group 1 */}
               <div className="mb-6">
                 <div className="text-gray-900 font-bold text-[13px] mb-2.5">份量</div>
                 <div className="flex flex-wrap gap-2.5">
                   <button className="bg-[#FFF4E5] border border-[#FFD101] text-[#FF6300] text-[12px] font-bold px-4 py-1.5 rounded-md">正常量</button>
                   <button className="bg-[#f5f5f5] text-gray-700 text-[12px] font-medium px-4 py-1.5 rounded-md">少饭多菜</button>
                 </div>
               </div>
               
               {/* Option Group 2 */}
               <div className="mb-6">
                 <div className="text-gray-900 font-bold text-[13px] mb-2.5">选择碳水或沙拉</div>
                 <div className="flex flex-wrap gap-2.5">
                   <button className="bg-[#FFF4E5] border border-[#FFD101] text-[#FF6300] text-[12px] font-bold px-4 py-1.5 rounded-md relative overflow-hidden">
                     糙米饭
                     <div className="absolute top-0 right-0 bg-[#FFD101] px-[3px] py-[2px] rounded-bl-sm text-[#FF6300] font-bold">
                       <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                     </div>
                   </button>
                   <button className="bg-[#f5f5f5] text-gray-700 text-[12px] font-medium px-4 py-1.5 rounded-md">混合生菜底</button>
                   <button className="bg-[#f5f5f5] text-gray-700 text-[12px] font-medium px-4 py-1.5 rounded-md">荞麦面</button>
                 </div>
               </div>

               {/* Option Group 3 */}
               <div className="mb-6">
                 <div className="text-gray-900 font-bold text-[13px] mb-2.5 flex items-center">
                   <span>选择辅助碳水</span>
                   <span className="text-[10px] text-gray-400 font-normal ml-1">(最多可选1项)</span>
                 </div>
                 <div className="flex flex-wrap gap-2.5">
                   <div className="bg-[#FFF4E5] border border-[#FFD101] text-[#FF6300] text-[12px] px-3 py-1.5 rounded-md flex flex-col items-center justify-center font-bold w-[calc(33.33%-7px)] relative">
                     <span>无辅碳</span>
                     <div className="absolute top-0 right-0 bg-[#FFD101] px-[3px] py-[2px] rounded-bl-sm text-[#FF6300] font-bold">
                       <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                     </div>
                   </div>
                   <div className="bg-[#f5f5f5] text-gray-700 text-[12px] px-3 py-1.5 rounded-md flex flex-col items-center justify-center font-medium w-[calc(33.33%-7px)] border border-transparent">
                     <span>南瓜块</span>
                     <span className="text-[9px] text-[#FF4A4A] mt-0.5 font-bold">+¥2.2</span>
                   </div>
                   <div className="bg-[#f5f5f5] text-gray-700 text-[12px] px-3 py-1.5 rounded-md flex flex-col items-center justify-center font-medium w-[calc(33.33%-7px)] border border-transparent">
                     <span>烤土豆</span>
                     <span className="text-[9px] text-[#FF4A4A] mt-0.5 font-bold">+¥2.5</span>
                   </div>
                 </div>
               </div>

               <div className="mb-6">
                 <div className="text-gray-900 font-bold text-[13px] mb-2.5 flex items-center">
                   <span>选择植物纤维</span>
                   <span className="text-[10px] text-[#FF4A4A] font-normal border border-[#FF4A4A] rounded-sm px-0.5 ml-1 leading-none py-[1px]">必选</span>
                 </div>
                 <div className="flex flex-wrap gap-2.5">
                   <button className="bg-[#f5f5f5] text-gray-700 text-[12px] font-medium px-4 py-1.5 rounded-md">水煮绿叶菜</button>
                   <button className="bg-[#FFF4E5] border border-[#FFD101] text-[#FF6300] text-[12px] font-bold px-4 py-1.5 rounded-md relative">
                      蒜香西兰花
                      <div className="absolute top-0 right-0 bg-[#FFD101] px-[3px] py-[2px] rounded-bl-sm text-[#FF6300] font-bold">
                       <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                     </div>
                   </button>
                 </div>
               </div>
            </div>

            {/* Bottom Add Action */}
            <div className="px-4 py-3 border-t border-gray-100 flex justify-between items-center bg-white border-b-8 border-white pb-6 z-20">
               <div className="flex items-center space-x-4">
                 <button className="w-7 h-7 rounded-full border-[1.5px] border-gray-200 flex items-center justify-center text-gray-400 active:scale-90 transition-transform bg-white"><Minus size={14} /></button>
                 <span className="font-bold text-gray-900 text-[16px]">1</span>
                 <button className="w-7 h-7 rounded-full bg-[#FFD101] flex items-center justify-center text-gray-900 active:scale-90 transition-transform"><Plus size={14} strokeWidth={3} /></button>
               </div>
               <button 
                 className="bg-[#FFD101] text-gray-900 font-bold py-2.5 px-8 rounded-full active:scale-95 text-[15px]"
                 onClick={() => handleAddToCart(37.4)}
               >
                 加入购物车
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
