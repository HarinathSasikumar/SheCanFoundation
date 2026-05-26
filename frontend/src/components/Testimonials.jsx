import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer @ Google',
    city: 'Bangalore',
    avatar: 'PS',
    avatarBg: 'from-purple-500 to-pink-500',
    rating: 5,
    text: 'She Can Foundation completely transformed my career. I went from knowing nothing about coding to landing a job at Google in just 18 months. The mentorship and community support is unreal.',
  },
  {
    name: 'Ananya Mehta',
    role: 'UI/UX Designer @ Swiggy',
    city: 'Mumbai',
    avatar: 'AM',
    avatarBg: 'from-pink-500 to-rose-500',
    rating: 5,
    text: 'The design bootcamp here is world-class. I now lead a team of 12 designers. She Can gave me both the skills AND the confidence I was missing.',
  },
  {
    name: 'Ritu Verma',
    role: 'Data Scientist @ Flipkart',
    city: 'Pune',
    avatar: 'RV',
    avatarBg: 'from-cyan-500 to-blue-500',
    rating: 5,
    text: 'Coming from a non-technical background, I was terrified. But the curriculum here is so well-structured and the community so warm, I never felt alone in my journey.',
  },
  {
    name: 'Kavitha Nair',
    role: 'Full Stack Dev @ Razorpay',
    city: 'Chennai',
    avatar: 'KN',
    avatarBg: 'from-violet-500 to-purple-500',
    rating: 5,
    text: 'She Can Foundation doesn\'t just teach — they mentor, support, and celebrate every milestone. My salary tripled after completing the program. Forever grateful!',
  },
  {
    name: 'Deepa Reddy',
    role: 'DevOps Engineer @ Amazon',
    city: 'Hyderabad',
    avatar: 'DR',
    avatarBg: 'from-emerald-500 to-cyan-500',
    rating: 5,
    text: 'The 1-on-1 mentorship sessions were a game-changer. My mentor helped me navigate job interviews at top companies. She Can is more than a foundation — it\'s family.',
  },
  {
    name: 'Meera Pillai',
    role: 'Product Manager @ Zomato',
    city: 'Kochi',
    avatar: 'MP',
    avatarBg: 'from-orange-500 to-pink-500',
    rating: 5,
    text: 'I joined as a homemaker wanting to re-enter the workforce. 14 months later, I\'m a Product Manager at Zomato. She Can made what felt impossible feel inevitable.',
  },
];

const TestimonialCard = ({ testimonial, isDark }) => (
  <div
    className={`
      premium-card flex-shrink-0 w-80 md:w-96 rounded-3xl p-7 mx-3 border transition-all duration-500
      ${isDark
        ? 'bg-white/[0.02] border-white/5 hover:border-purple-500/20'
        : 'bg-white border-gray-200 shadow-md'
      }
    `}
  >
    {/* Quote icon */}
    <Quote className="w-8 h-8 text-purple-400/30 mb-4" />

    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>

    {/* Text */}
    <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
      "{testimonial.text}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3">
      <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.avatarBg} flex items-center justify-center flex-shrink-0`}>
        <span className="text-white text-sm font-bold">{testimonial.avatar}</span>
      </div>
      <div>
        <p className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</p>
        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.role}</p>
        <p className="text-xs text-purple-400">{testimonial.city}</p>
      </div>
    </div>
  </div>
);

const Testimonials = ({ isDark }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  // Duplicate for infinite scroll illusion
  const allTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className={`section-padding relative overflow-hidden ${isDark ? 'bg-[#030014]' : 'bg-gradient-to-br from-purple-50 via-white to-pink-50'}`}>
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-4"
        >
          <span className="badge mb-4">Success Stories</span>
          <h2 className={`section-title mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Real Women.{' '}
            <span className="gradient-text">Real Transformations.</span>
          </h2>
          <p className={`section-subtitle max-w-xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Thousands of women have transformed their lives through our programs. Here's what they say.
          </p>
        </motion.div>

        {/* Auto-scrolling testimonials */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className={`absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r ${isDark ? 'from-[#030014]' : 'from-purple-50'} to-transparent`} />
          <div className={`absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l ${isDark ? 'from-[#030014]' : 'from-pink-50'} to-transparent`} />

          <div className="testimonial-track flex">
            {allTestimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} isDark={isDark} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Join 15,000+ women who have already started their journey
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-premium-glow inline-flex"
          >
            Start Your Story
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
