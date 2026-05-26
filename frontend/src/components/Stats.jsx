import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, BookOpen, Globe2, Award, Heart, TrendingUp } from 'lucide-react';

const STATS = [
  { icon: Users,      value: 15000, suffix: '+', label: 'Women Trained',      color: 'from-purple-500 to-purple-700',   bg: 'bg-purple-500/10', border: 'border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]' },
  { icon: BookOpen,   value: 240,   suffix: '+', label: 'Programs Launched',  color: 'from-pink-500 to-pink-700',       bg: 'bg-pink-500/10',   border: 'border-pink-500/20'   },
  { icon: Globe2,     value: 42,    suffix: '',  label: 'Cities Reached',     color: 'from-cyan-500 to-cyan-700',       bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20'   },
  { icon: Award,      value: 98,    suffix: '%', label: 'Success Rate',       color: 'from-violet-500 to-violet-700',   bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
  { icon: Heart,      value: 500,   suffix: '+', label: 'Mentors Worldwide',  color: 'from-rose-500 to-rose-700',       bg: 'bg-rose-500/10',   border: 'border-rose-500/20'   },
  { icon: TrendingUp, value: 87,    suffix: '%', label: 'Employment Uplift',  color: 'from-emerald-500 to-emerald-700', bg: 'bg-emerald-500/10',border: 'border-emerald-500/20'},
];

/** Animated counter hook */
function useCounter(target, duration = 2000, isActive = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isActive) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, isActive]);
  return count;
}

const StatCard = ({ icon: Icon, value, suffix, label, color, bg, border, isDark, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const count = useCounter(value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className={`
        premium-card relative rounded-3xl p-6 md:p-8 border overflow-hidden transition-all duration-500
        ${border}
        ${isDark ? 'bg-white/[0.02] border-white/5' : 'bg-white border-gray-200/80 shadow-md'}
      `}
    >
      {/* Background glow */}
      <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full ${bg} blur-2xl pointer-events-none`} />

      {/* Icon */}
      <div className={`inline-flex p-3 rounded-2xl ${bg} mb-4 relative z-10`}>
        <Icon className={`w-6 h-6 absolute`} style={{
          background: `linear-gradient(135deg, ${color.includes('purple') ? '#a855f7,#7c3aed' : color.includes('pink') ? '#ec4899,#be185d' : color.includes('cyan') ? '#06b6d4,#0891b2' : color.includes('violet') ? '#8b5cf6,#6d28d9' : color.includes('rose') ? '#f43f5e,#e11d48' : '#10b981,#059669'})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }} />
        <Icon className="w-6 h-6 opacity-0" />
      </div>

      {/* Value */}
      <div className={`font-display font-black text-3xl sm:text-4xl md:text-5xl mb-1 bg-gradient-to-br ${color} bg-clip-text text-transparent relative z-10`}>
        {count.toLocaleString()}{suffix}
      </div>

      {/* Label */}
      <p className={`text-sm font-medium relative z-10 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{label}</p>

      {/* Shimmer bar */}
      <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${color} opacity-40`} />
    </motion.div>
  );
};

const Stats = ({ isDark }) => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="stats" className={`section-padding relative overflow-hidden ${isDark ? 'bg-[#030014]' : 'bg-[#fbfbfd]'}`}>
      {/* Decorative blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      {isDark && <div className="light-beam bottom-10 left-1/4" />}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Our Impact</span>
          <h2 className={`section-title mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Numbers That{' '}
            <span className="gradient-text">Tell Our Story</span>
          </h2>
          <p className={`section-subtitle max-w-xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Every number represents a life changed, a barrier broken, a future reimagined.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} {...stat} isDark={isDark} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
