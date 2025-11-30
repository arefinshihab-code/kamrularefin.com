import React from 'react';
import { motion } from 'framer-motion';
import { User, MousePointer2, Database, BarChart, Server } from 'lucide-react';
import { Content } from '../types';

interface ProcessAnimationProps {
  content: Content['process'];
}

export const ProcessAnimation: React.FC<ProcessAnimationProps> = ({ content }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 pb-1">
          {content.title}
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {content.subtitle}
        </p>
      </div>

      <div className="relative bg-slate-900 rounded-xl p-8 shadow-2xl overflow-hidden border border-slate-700">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
          backgroundSize: '30px 30px' 
        }}></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          
          {/* STEP 1: User Behavior */}
          <div className="flex flex-col items-center space-y-4 relative group">
            <div className="w-20 h-20 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center relative">
               <motion.div
                 animate={{ scale: [1, 1.1, 1] }}
                 transition={{ repeat: Infinity, duration: 2 }}
               >
                 <User className="w-10 h-10 text-blue-400" />
               </motion.div>
               {/* Click Animation */}
               <motion.div 
                 className="absolute top-0 right-0"
                 animate={{ x: [0, 10, 0], y: [0, 10, 0], opacity: [0, 1, 0] }}
                 transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
               >
                 <MousePointer2 className="w-6 h-6 text-white" />
               </motion.div>
            </div>
            <p className="text-slate-300 font-semibold text-center text-lg">{content.step1}</p>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Clicks & Views</div>
          </div>

          {/* Connection Line 1 */}
          <div className="hidden md:block absolute left-[25%] top-1/2 w-[16%] h-[2px] bg-slate-700 -translate-y-12">
            <motion.div 
              className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
              initial={{ width: "0%", left: 0 }}
              animate={{ width: "100%", left: "100%", opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              style={{ width: "20%" }} 
            />
          </div>

          {/* STEP 2: GTM Processing */}
          <div className="flex flex-col items-center space-y-4 relative">
             <div className="w-24 h-24 rounded-lg bg-orange-500/10 border-2 border-orange-500 flex items-center justify-center relative shadow-[0_0_30px_rgba(249,115,22,0.2)]">
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                 className="absolute inset-0 rounded-lg border border-dashed border-orange-500/30"
               />
               <Server className="w-12 h-12 text-orange-500" />
               
               {/* Pulse Effect */}
               <motion.div 
                 className="absolute inset-0 bg-orange-500 rounded-lg"
                 animate={{ opacity: [0, 0.2, 0] }}
                 transition={{ repeat: Infinity, duration: 1.5 }}
               />
            </div>
            <p className="text-slate-300 font-semibold text-center text-lg">{content.step2}</p>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Data Layer</div>
          </div>

          {/* Connection Line 2 */}
          <div className="hidden md:block absolute right-[25%] top-1/2 w-[16%] h-[2px] bg-slate-700 -translate-y-12">
             <motion.div 
              className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
              initial={{ width: "0%", left: 0 }}
              animate={{ width: "100%", left: "100%", opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.75 }}
              style={{ width: "20%" }} 
            />
          </div>

          {/* STEP 3: Analytics/Growth */}
          <div className="flex flex-col items-center space-y-4 relative">
             <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
               <div className="relative">
                 <Database className="w-8 h-8 text-green-400 mb-1 mx-auto" />
                 <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                    className="absolute bottom-0 left-0 w-full bg-green-500/20"
                 />
               </div>
            </div>
            {/* Floating Chart */}
            <motion.div 
               className="absolute -top-6 -right-6 bg-slate-800 p-2 rounded border border-slate-600 shadow-xl"
               animate={{ y: [0, -5, 0] }}
               transition={{ repeat: Infinity, duration: 3 }}
            >
              <BarChart className="w-6 h-6 text-green-400" />
            </motion.div>

            <p className="text-slate-300 font-semibold text-center text-lg">{content.step3}</p>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Business ROI</div>
          </div>

        </div>

        {/* Mobile Arrows (Vertical) */}
        <div className="md:hidden absolute left-1/2 top-1/3 -translate-x-1/2 text-slate-600">
           ↓
        </div>
        <div className="md:hidden absolute left-1/2 bottom-1/3 -translate-x-1/2 text-slate-600">
           ↓
        </div>
      </div>
    </div>
  );
};