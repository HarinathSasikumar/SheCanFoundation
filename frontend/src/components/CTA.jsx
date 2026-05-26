import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = ({ isDark }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className={`section-padding relative overflow-hidden ${isDark ? 'bg-[#030014]' : 'bg-gradient-to-br from-[#f8f6fc] to-[#f4f3f9]'}`}
    >
      {/* Background Blobs and Light Beams */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      {isDark && <div className="light-beam top-1/3 left-1/3" />}

      <div className="max-w-4xl mx-auto relative z-10 text-center" >
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Animated ring decoration */}
          <div className="relative inline-flex mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-full border border-dashed border-purple-500/20"
            />
            <span className="badge bg-purple-500/10 border-purple-500/20 text-purple-400">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              Limited Scholarships Available
            </span>
          </div>

          <h2 className={`font-display font-black text-4xl md:text-6xl leading-tight mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Your Future in Tech{' '}
            <span className="gradient-text block mt-1">Starts Today.</span>
          </h2>

          <p className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Don't let another year pass wondering "what if." She Can Foundation
            gives you the skills, community, and confidence to claim your place in the digital world.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-premium-glow text-lg px-10 py-5 group w-full sm:w-auto justify-center"
            >
              Apply for Free
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#stats"
              onClick={(e) => { e.preventDefault(); document.querySelector('#stats')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`
                btn-outline text-lg px-10 py-5 w-full sm:w-auto justify-center border backdrop-blur-md
                ${isDark 
                  ? 'text-purple-300 border-purple-500/30 hover:border-purple-500/60 hover:bg-white/5' 
                  : 'text-purple-700 border-purple-400 hover:bg-purple-50'
                }
              `}
            >
              See Our Impact
            </motion.a>
          </div>

          {/* Trust badges */}
          <div className={`flex flex-wrap items-center justify-center gap-6 mt-14 text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            {['✅ 100% Free to Apply', '🎓 Scholarship Programs', '💼 Job Placement Support', '🌍 Global Community'].map((item) => (
              <span key={item} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
