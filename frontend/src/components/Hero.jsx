import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Users, Award, Globe } from 'lucide-react';
import AnimatedBlob from './AnimatedBlob';

const Hero = ({ isDark }) => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  // Setup Framer Scroll Parallax for continuous page scrolling effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // GSAP Cinematic Entrance Animations on Mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo('.gsap-badge', 
        { opacity: 0, y: -30 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' }
      );
      
      tl.fromTo('.gsap-title-part', 
        { opacity: 0, y: 60 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power4.out' },
        '-=0.6'
      );
      
      tl.fromTo('.gsap-subtitle', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );
      
      tl.fromTo('.gsap-cta', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      );
      
      tl.fromTo('.gsap-stat-item', 
        { opacity: 0, scale: 0.85 }, 
        { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.5)' },
        '-=0.4'
      );
      
      gsap.fromTo('.gsap-image-frame', 
        { opacity: 0, x: 60, scale: 0.96, rotate: 1 }, 
        { opacity: 1, x: 0, scale: 1, rotate: 0, duration: 1.4, ease: 'power4.out' },
        0.3
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className={`
        relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20
        ${isDark ? 'bg-[#030014] text-white' : 'bg-gradient-to-br from-[#f6f3fc] via-[#fbf9fe] to-[#f4f7fd]'}
      `}
    >
      {/* ── Animated Background Blobs & Aurora Mesh ── */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none w-full h-full z-0">
        {/* V3 Aurora moving gradients */}
        {isDark && <div className="aurora-mesh" />}
        
        {/* Lights rays/beams for cinematic flair */}
        {isDark && <div className="light-beam -top-20 -left-20" />}
        {isDark && <div className="light-beam bottom-10 right-10" />}

        <AnimatedBlob color="purple" size="2xl" className="-top-40 -left-40 opacity-50" delay={0} />
        <AnimatedBlob color="pink"   size="xl"  className="-top-20 right-0 opacity-30"  delay={1} />
        <AnimatedBlob color="cyan"   size="lg"  className="bottom-0 left-1/3 opacity-20" delay={2} />
        <AnimatedBlob color="violet" size="xl"  className="bottom-10 -right-20 opacity-30" delay={1} />
        
        {/* Grid Overlay */}
        <div
          className={`absolute inset-0 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.04]'}`}
          style={{
            backgroundImage:
              'linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        
        {/* Floating Light Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-purple-400/55"
            style={{ left: `${10 + i * 12}%`, top: `${15 + (i % 3) * 22}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.3, 0.9, 0.3], scale: [1, 1.5, 1] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </motion.div>

      {/* ── Main Content Grid ── */}
      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text Content with Parallax */}
          <motion.div
            style={{ y: yText, opacity: opacityText }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Premium Badge */}
            <div className="gsap-badge opacity-0 flex mb-6">
              <span className="badge gap-2 bg-purple-500/10 backdrop-blur-md border-purple-500/20 text-purple-400 font-semibold px-5 py-2">
                <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
                Empowering Women Since 2018
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`
                font-display font-black leading-[1.08] mb-6 tracking-tight
                text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem]
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}
            >
              <span className="gsap-title-part block">Empowering</span>
              <span className="gsap-title-part block gradient-text">Women.</span>
              <span className={`gsap-title-part block text-3xl sm:text-4xl lg:text-5xl mt-4 font-bold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Transforming{' '}
                <span className="relative inline-block">
                  Futures.
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1.5 rounded-full gradient-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
                  />
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`gsap-subtitle opacity-0 max-w-xl text-lg md:text-xl leading-relaxed mb-10 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Bridging the gender gap in technology through elite software education, 
              world-class mentorship, and a thriving global community.
            </p>

            {/* CTA Buttons */}
            <div
              className="gsap-cta opacity-0 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16 w-full"
            >
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-premium-glow group text-base w-full sm:w-auto"
              >
                Join Our Mission
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                onClick={scrollToAbout}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`
                  inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base
                  transition-all duration-300 w-full sm:w-auto justify-center border
                  ${isDark
                    ? 'text-gray-200 hover:text-white border-white/10 hover:border-white/25 hover:bg-white/5 backdrop-blur-md'
                    : 'text-gray-700 hover:text-gray-900 border-gray-300 hover:border-gray-400 hover:bg-white shadow-sm'
                  }
                `}
              >
                <span className="w-10 h-10 rounded-full flex items-center justify-center gradient-primary shadow-glow-purple">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </span>
                Learn More
              </motion.button>
            </div>

            {/* Floating Stats Row */}
            <div
              className="gsap-cta opacity-0 grid grid-cols-3 gap-4 w-full max-w-md lg:max-w-lg mx-auto lg:mx-0"
            >
              {[
                { icon: Users,  value: '15K+', label: 'Graduates' },
                { icon: Award,  value: '98%',  label: 'Placements' },
                { icon: Globe,  value: '42',   label: 'Hubs' },
              ].map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className={`
                    gsap-stat-item opacity-0 rounded-2xl p-4 text-center border transition-all duration-300
                    hover:border-purple-500/30 hover:-translate-y-1.5
                    ${isDark 
                      ? 'bg-white/5 border-white/10 hover:bg-white/8 backdrop-blur-md' 
                      : 'bg-white/60 border-gray-200/60 shadow-md backdrop-blur-md hover:bg-white/80'
                    }
                  `}
                >
                  <Icon className="w-5 h-5 mx-auto mb-2 text-purple-400" />
                  <p className="text-xl md:text-2xl font-display font-black gradient-text">{value}</p>
                  <p className={`text-xs mt-1 font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Premium Image with Parallax */}
          <motion.div 
            style={{ y: yImage }}
            className="gsap-image-frame opacity-0 relative lg:h-[700px] flex items-center justify-center mt-12 lg:mt-0"
          >
            {/* Image container with premium glass frame */}
            <div className={`
              relative z-10 w-full max-w-md lg:max-w-full rounded-3xl p-3 border
              ${isDark 
                ? 'bg-white/5 border-white/10 backdrop-blur-xl hover:border-purple-500/30 shadow-[0_30px_70px_rgba(0,0,0,0.5)]' 
                : 'bg-white/40 border-white shadow-2xl backdrop-blur-xl'
              }
              transition-all duration-500 hover:shadow-purple-500/10
            `}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[600px] w-full">
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 mix-blend-overlay z-10" />
                
                <img 
                  src="/hero-image.png" 
                  alt="Diverse modern women coding together"
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Floating glass badge on image */}
                <motion.div 
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className={`
                    absolute bottom-6 left-6 right-6 p-4 rounded-xl border backdrop-blur-md flex items-center gap-4 z-20
                    ${isDark ? 'bg-[#030014]/85 border-white/10' : 'bg-white/95 border-white/50 shadow-lg'}
                  `}
                >
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-glow-purple flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>#1 Women in Tech NGO</p>
                    <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Awarded by Global Tech Council 2024</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Background decorative ring behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-purple-500/20 border-dashed animate-spin-slow pointer-events-none -z-10" />
          </motion.div>

        </div>
      </div>

      {/* ── Bottom Fade ── */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${isDark ? 'from-[#030014]' : 'from-white/0'} to-transparent pointer-events-none z-20`} />
    </section>
  );
};

export default Hero;
