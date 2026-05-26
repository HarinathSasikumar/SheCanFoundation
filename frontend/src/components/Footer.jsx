import { motion } from 'framer-motion';
import { Heart, Twitter, Instagram, Linkedin, Github, Youtube, Mail, ArrowRight } from 'lucide-react';

const FOOTER_LINKS = {
  Programs: ['Web Development', 'Data Science', 'UX/UI Design', 'Digital Marketing', 'Cybersecurity'],
  Company:  ['About Us', 'Our Team', 'Impact Report', 'Press Kit', 'Careers'],
  Support:  ['FAQ', 'Contact Us', 'Scholarship Info', 'Volunteer', 'Donate'],
  Legal:    ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

const SOCIALS = [
  { icon: Twitter,   href: '#', label: 'Twitter',   color: 'hover:text-sky-400'   },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400'  },
  { icon: Linkedin,  href: '#', label: 'LinkedIn',  color: 'hover:text-blue-400'  },
  { icon: Youtube,   href: '#', label: 'YouTube',   color: 'hover:text-red-400'   },
  { icon: Github,    href: '#', label: 'GitHub',    color: 'hover:text-purple-400'},
];

const Footer = ({ isDark }) => {
  return (
    <footer className={`relative overflow-hidden ${isDark ? 'bg-[#030014] border-t border-white/5' : 'bg-gray-900 border-t border-gray-800'}`}>
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-800/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-800/10 blur-[100px] rounded-full pointer-events-none" />

      {/* ── CTA Band ── */}
      <div className="relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-purple-500/20"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(236,72,153,0.06) 100%)' }}>
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
                Ready to Change Your Life?
              </h3>
              <p className="text-gray-300 text-sm font-medium">Join 15,000+ women who've already taken the first step.</p>
            </div>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-premium-glow flex-shrink-0 group"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 col-start-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow-purple">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <p className="font-display font-bold text-lg text-white">She Can</p>
                <p className="text-xs gradient-text">Foundation</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering women through technology education, mentorship, and community. Building a future where every woman thrives.
            </p>

            {/* Newsletter mini form */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
              <button className="px-4 py-2.5 rounded-xl gradient-primary text-white text-sm font-medium transition-all hover:shadow-glow-purple hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>

          {/* Link Groups */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group} className="col-span-1">
              <h4 className="text-white font-semibold text-sm mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-gray-400 hover:text-purple-300 text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left font-medium">
            © {new Date().getFullYear()} She Can Foundation. Made with{' '}
            <Heart className="inline w-3.5 h-3.5 text-pink-400 fill-pink-400 mx-0.5" />
            for women everywhere.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${color} transition-all duration-200 hover:border-white/20`}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
