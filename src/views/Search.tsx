import React, { useState } from 'react';
import { ChevronLeft, Trash2, RefreshCcw, Search as SearchIcon, X, Flame } from 'lucide-react';

export default function Search({ onNavigate }: { onNavigate: (v: string, data?: any) => void }) {
  const [q, setQ] = useState('');
  
  const handleSearch = (term: string) => {
    onNavigate('search_results', { query: term });
  };

  return (
    <div className="flex flex-col h-full bg-white relative overflow-hidden">
      <div className="flex items-center px-2 pt-11 pb-2 bg-white flex-shrink-0 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <div className="w-8 h-8 flex items-center justify-center cursor-pointer active:scale-95" onClick={() => onNavigate('home')}>
          <ChevronLeft size={24} className="text-gray-800" />
        </div>
        <div className="flex-1 bg-[#F5F5F5] rounded-full flex items-center px-1 py-1 relative ring-1 ring-transparent focus-within:ring-[#FFD101] transition-all ml-1">
          <SearchIcon size={16} className="text-gray-400 ml-2" />
          <input 
            type="text" 
            placeholder="汉堡王" 
            className="bg-transparent text-[14px] font-medium w-full outline-none ml-1.5 placeholder-gray-400 text-gray-900"
            value={q}
            onChange={e => setQ(e.target.value)}
          />
          {q && <X size={14} className="text-gray-400 mr-2 cursor-pointer" onClick={() => setQ('')} />}
          <button 
            className="bg-[#FFD101] text-gray-900 text-[13px] font-bold px-4 py-1.5 rounded-full absolute right-1 active:scale-95"
            onClick={() => handleSearch(q || '汉堡王')}
          >
            搜索
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pt-2 pb-10 [&::-webkit-scrollbar]:hidden bg-[#fefefe]">
         <div className="mt-3 flex justify-between items-center mb-2.5">
            <span className="font-bold text-[14px] text-gray-900">历史搜索</span>
            <Trash2 size={14} className="text-gray-400 cursor-pointer active:scale-95" />
         </div>
         <div className="flex flex-wrap gap-2.5 mb-6">
            {['美式', '奶茶', '蛋糕', '韩式炒年糕', '咖啡'].map((item) => (
              <span key={item} onClick={() => handleSearch(item)} className="bg-[#F5F5F5] text-gray-700 font-medium text-[12px] px-3 py-1.5 rounded-md cursor-pointer active:bg-gray-200 transition-colors">{item}</span>
            ))}
         </div>

         <div className="mt-2 flex justify-between items-center mb-2.5">
            <span className="font-bold text-[14px] text-gray-900">猜你想搜</span>
            <div className="text-[12px] text-gray-500 font-medium flex items-center cursor-pointer active:opacity-70">
              <RefreshCcw size={12} className="mr-1" /> 换一批
            </div>
         </div>
         <div className="flex flex-wrap gap-2.5 mb-6">
            {['奶茶', '美式咖啡', '拿铁', '冰美式', '手冲咖啡', '面包'].map((item, i) => (
              <span key={i} onClick={() => handleSearch(item)} className={`text-[12px] font-medium px-3 py-1.5 rounded-md cursor-pointer active:bg-gray-200 transition-colors ${item.includes('手冲') ? 'bg-[#FFF4E5] text-[#FF6300] font-bold border border-[#FFD101]/50' : 'bg-[#F5F5F5] text-gray-700 border border-transparent'}`}>
                {item}
              </span>
            ))}
         </div>

         <div className="bg-gradient-to-b from-[#FFF0F2] via-[#FFF9FA] to-white rounded-2xl p-4 mt-2 relative overflow-hidden border border-[#FFEBEE] shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FFEBEE] to-transparent rounded-full opacity-50 blur-xl"></div>
            
            <div className="font-bold text-[16px] text-gray-900 mb-4 italic flex items-center tracking-wide text-[#D32F2F]">
              <Flame size={18} className="fill-[#FF4A4A] mr-1" /> 发现好词
            </div>
            
            {[
              { id: 1, title: '外卖冤种人格测试', tag: '爆', desc: '来测测专属于干饭人的WMTI外卖人格', val: '99.0万' },
              { id: 2, title: '张凌赫带火了横店烤肉！', tag: '热', desc: '横店顶流！张凌赫同款苏子叶烤肉', val: '95.8万' },
              { id: 3, title: '这可能是夏天最好喝的特饮', tag: '新', desc: '手打柠檬茶全面升级中', val: '43.2万' },
            ].map(item => (
              <div key={item.id} className="flex mb-4 last:mb-0 items-center cursor-pointer active:bg-white/50 p-1.5 -mx-1.5 rounded-xl transition-colors group" onClick={() => handleSearch(item.title)}>
                 <div className="relative w-12 h-12 flex-shrink-0 mr-3">
                    <img src={`https://placehold.co/100/FAD0C4/FFF?text=Img${item.id}`} alt="trend" className="w-full h-full rounded-lg border border-red-100 object-cover shadow-sm group-hover:scale-105 transition-transform" />
                    <div className="absolute -top-1.5 -left-1.5 w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white text-white shadow-sm" style={{ backgroundColor: item.id === 1 ? '#FF4A4A' : item.id === 2 ? '#FF7A59' : '#FFB74D' }}>{item.id}</div>
                 </div>
                 <div className="flex flex-col flex-1 pb-0.5 justify-center">
                    <div className="font-bold text-[14px] text-gray-900 flex items-center mb-0.5">
                       {item.title} 
                       <span className={`text-white text-[9px] px-1 rounded-sm ml-1.5 leading-tight ${item.tag === '爆' ? 'bg-[#FF4A4A]' : item.tag === '热' ? 'bg-[#FF7A59]' : 'bg-[#FFB74D]'}`}>{item.tag}</span>
                    </div>
                    <div className="text-[11px] text-gray-500 line-clamp-1">{item.desc}</div>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
