import React from 'react';
import { Content } from '../types';
import { Tag, Activity, Settings, TrendingUp, Users, ShoppingCart, MousePointer2 } from 'lucide-react';

interface ToolShowcaseProps {
  content: Content['toolPreview'];
}

export const ToolShowcase: React.FC<ToolShowcaseProps> = ({ content }) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">{content.title}</h2>
        <p className="text-slate-500">{content.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* GTM Mockup */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-full transform transition hover:-translate-y-1 hover:shadow-xl">
          <div className="bg-[#4285F4] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-white">
              <div className="bg-white/20 p-1 rounded">
                <Tag className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm tracking-wide">{content.gtmTitle}</span>
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
          </div>
          
          <div className="p-4 bg-slate-50 border-b border-slate-100 text-xs text-slate-500 flex justify-between">
            <span>Workspace: Default</span>
            <span className="text-green-600 font-semibold">Live</span>
          </div>

          <div className="p-0 flex-grow">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 font-medium">
                <tr>
                  <th className="p-3 pl-5 font-semibold">Tag Name</th>
                  <th className="p-3 hidden sm:table-cell font-semibold">Trigger</th>
                  <th className="p-3 text-right pr-5 font-semibold">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: "GA4 Configuration", trigger: "All Pages", type: "Google Analytics" },
                  { name: "Facebook Pixel Base", trigger: "All Pages", type: "Custom HTML" },
                  { name: "Purchase Event", trigger: "Custom Event - purchase", type: "GA4 Event" },
                  { name: "Add to Cart", trigger: "Click - Add to Cart", type: "GA4 Event" },
                  { name: "Google Ads Conv.", trigger: "Page View - Thank You", type: "Google Ads" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-blue-50/50 transition-colors group">
                    <td className="p-3 pl-5 font-medium text-slate-700 flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${i < 2 ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                      {row.name}
                    </td>
                    <td className="p-3 hidden sm:table-cell text-slate-500">{row.trigger}</td>
                    <td className="p-3 text-right pr-5 text-slate-400 text-xs uppercase tracking-wider">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* GA4 Mockup - ENHANCED */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-full transform transition hover:-translate-y-1 hover:shadow-xl">
          <div className="bg-[#F9AB00] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-white">
              <div className="bg-white/20 p-1 rounded">
                <Activity className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm tracking-wide">{content.ga4Title}</span>
            </div>
            <Settings className="w-4 h-4 text-white/80" />
          </div>

          <div className="p-6">
            {/* Top Cards */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                <div className="flex items-center text-slate-500 mb-1 text-[10px] uppercase font-bold tracking-wider">
                  <Users className="w-3 h-3 mr-1" /> Users
                </div>
                <div className="text-xl font-bold text-slate-800">14.2K</div>
                <div className="text-green-500 text-[10px] font-medium flex items-center">
                  <TrendingUp className="w-2 h-2 mr-1" /> +12.5%
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                <div className="flex items-center text-slate-500 mb-1 text-[10px] uppercase font-bold tracking-wider">
                  <ShoppingCart className="w-3 h-3 mr-1" /> Revenue
                </div>
                <div className="text-xl font-bold text-slate-800">€42.5K</div>
                <div className="text-green-500 text-[10px] font-medium flex items-center">
                  <TrendingUp className="w-2 h-2 mr-1" /> +8.2%
                </div>
              </div>
              {/* Real-time Card */}
              <div className="bg-blue-600 p-3 rounded-lg border border-blue-500 text-white relative overflow-hidden">
                <div className="flex items-center mb-1 text-[10px] uppercase font-bold tracking-wider opacity-80">
                  Real-time
                </div>
                <div className="text-xl font-bold">128</div>
                <div className="text-[10px] opacity-80">Users in last 30m</div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Graph */}
            <div className="relative h-32 w-full flex items-end justify-between space-x-1 px-2 mb-6">
               {[35, 55, 40, 70, 60, 85, 75, 50, 65, 90, 80, 60, 75, 50].map((h, i) => (
                 <div key={i} className="w-full bg-slate-100 rounded-t-sm relative group">
                    <div 
                      className="absolute bottom-0 left-0 w-full bg-orange-400/80 rounded-t-sm transition-all duration-500 group-hover:bg-orange-500" 
                      style={{ height: `${h}%` }}
                    ></div>
                 </div>
               ))}
               <div className="absolute inset-0 border-b border-slate-100 pointer-events-none"></div>
            </div>

            {/* Bottom Details (New Section) */}
            <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-4">
              {/* Traffic Sources */}
              <div>
                 <h4 className="text-xs font-bold text-slate-700 uppercase mb-3">Traffic Channels</h4>
                 <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                       <div className="flex items-center text-slate-600"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>Organic Search</div>
                       <span className="font-semibold">45%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                       <div className="flex items-center text-slate-600"><div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>Paid Search</div>
                       <span className="font-semibold">32%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                       <div className="flex items-center text-slate-600"><div className="w-2 h-2 bg-slate-300 rounded-full mr-2"></div>Direct</div>
                       <span className="font-semibold">23%</span>
                    </div>
                 </div>
              </div>

               {/* Top Events */}
              <div>
                 <h4 className="text-xs font-bold text-slate-700 uppercase mb-3">Top Events</h4>
                 <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs group">
                       <div className="text-slate-600 flex items-center"><MousePointer2 className="w-3 h-3 mr-1 opacity-50"/> page_view</div>
                       <span className="font-mono text-slate-400">142k</span>
                    </div>
                    <div className="flex items-center justify-between text-xs group">
                       <div className="text-slate-600 flex items-center"><MousePointer2 className="w-3 h-3 mr-1 opacity-50"/> view_item</div>
                       <span className="font-mono text-slate-400">45k</span>
                    </div>
                    <div className="flex items-center justify-between text-xs group">
                       <div className="text-slate-600 flex items-center"><MousePointer2 className="w-3 h-3 mr-1 opacity-50"/> purchase</div>
                       <span className="font-mono text-slate-400">1.2k</span>
                    </div>
                 </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};