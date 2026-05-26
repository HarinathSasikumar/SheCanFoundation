import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Zap, Shield, Lightbulb, Users } from 'lucide-react';

const CARDS = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To eliminate the gender digital divide by equipping women with cutting-edge technology skills, professional networks, and the confidence to lead in the digital economy.',
    gradient: 'from-purple-500/10 to-purple-700/5',
    border: 'border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    iconBg: 'bg-purple-500/15',
    iconColor: '#c084fc',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'A world where every woman has equal access to technology opportunities — where her gender is never a barrier to her potential or her ability to shape the future.',
    gradient: 'from-pink-500/10 to-pink-700/5',
    border: 'border-pink-500/20 hover:border-pink-500/40 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]',
    iconBg: 'bg-pink-500/15',
    iconColor: '#f472b6',
  },
  {
    icon: Zap,
    title: 'Our Approach',
    description:
      'Combining hands-on training, 1-on-1 mentorship, career placement support, and a thriving community — we create a holistic ecosystem for women to thrive in tech.',
    gradient: 'from-cyan-500/10 to-cyan-700/5',
    border: 'border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]',
    iconBg: 'bg-cyan-500/15',
    iconColor: '#22d3ee',
  },
];

const VALUES = [
  { icon: Shield,    label: 'Inclusivity',   desc: 'Every woman belongs here, regardless of background.' },
  { icon: Lightbulb, label: 'Innovation',    desc: 'We embrace modern skills and forward-thinking ideas.'  },
  { icon: Users,     label: 'Community',     desc: 'Strength in sisterhood — together we go further.'      },
];

const About = ({ isDark }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section 
      id="about" 
      className={`section-padding relative overflow-hidden ${isDark ? 'bg-[#030014]' : 'bg-[#fbfbfd]'}`}
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/5 blur-[90px] rounded-full pointer-events-none" />
      
      {/* Light Beam */}
      {isDark && <div className="light-beam top-10 right-1/4" />}

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Who We Are</span>
          <h2 className={`section-title mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Building a World Where{' '}
            <span className="gradient-text">She Leads</span>
          </h2>
          <p className={`section-subtitle max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            She Can Foundation is a non-profit dedicated to empowering women through
            technology education, mentorship, and career opportunities.
          </p>
        </motion.div>

        {/* Mission / Vision / Approach Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`
                  premium-card relative rounded-3xl p-8 border overflow-hidden transition-all duration-500
                  ${card.border}
                  ${isDark ? 'bg-white/[0.02] backdrop-blur-md' : 'bg-white shadow-md'}
                `}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} pointer-events-none rounded-3xl`} />
                <div className={`relative z-10 inline-flex p-3 rounded-2xl ${card.iconBg} mb-5`}>
                  <Icon className="w-6 h-6" style={{ color: card.iconColor }} />
                </div>
                <h3 className={`relative z-10 font-display font-bold text-xl mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {card.title}
                </h3>
                <p className={`relative z-10 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Values Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`
            rounded-3xl p-8 md:p-12 border transition-all duration-300
            ${isDark 
              ? 'bg-white/[0.01] border-white/5 hover:border-purple-500/20 backdrop-blur-md' 
              : 'bg-white border-gray-200 shadow-md'
            }
          `}
        >
          <h3 className={`font-display font-bold text-2xl text-center mb-10 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => {
              const VIcon = v.icon;
              return (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow-purple">
                    <VIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{v.label}</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
