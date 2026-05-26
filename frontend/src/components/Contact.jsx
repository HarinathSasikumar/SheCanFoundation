import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';

const INITIAL_FORM = { fullName: '', email: '', phone: '', message: '' };
const INITIAL_ERRORS = { fullName: '', email: '', phone: '', message: '' };

// ── Validation helpers ─────────────────────────────────────────────────────
const validate = (name, value) => {
  switch (name) {
    case 'fullName':
      if (!value.trim()) return 'Full name is required';
      if (value.trim().length < 2) return 'Name must be at least 2 characters';
      if (!/^[a-zA-Z\s.'-]+$/.test(value)) return 'Name can only contain letters and spaces';
      return '';
    case 'email':
      if (!value.trim()) return 'Email address is required';
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) return 'Enter a valid email address';
      return '';
    case 'phone':
      if (!value.trim()) return 'Phone number is required';
      if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(value.replace(/\s/g, '')))
        return 'Enter a valid phone number';
      return '';
    case 'message':
      if (!value.trim()) return 'Message is required';
      if (value.trim().length < 10) return 'Message must be at least 10 characters';
      if (value.trim().length > 1000) return 'Message cannot exceed 1000 characters';
      return '';
    default:
      return '';
  }
};

// ── V3 Input Field Component with Floating Labels ─────────────────────────
const InputField = ({ id, label, icon: Icon, type = 'text', value, error, onChange, onBlur, isDark, rows }) => {
  const [focused, setFocused] = useState(false);
  const hasError = !!error;
  const isValid  = value && !error;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="floating-label-group relative w-full">
        {rows ? (
          <textarea
            id={id}
            name={id}
            placeholder=" "
            value={value}
            rows={rows}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => { setFocused(false); onBlur && onBlur(); }}
            className={`
              floating-label-textarea resize-none font-sans
              ${hasError 
                ? 'border-rose-500/60 shadow-[0_0_0_3px_rgba(244,63,94,0.1)]' 
                : isValid 
                  ? 'border-emerald-500/60 shadow-[0_0_0_3px_rgba(16,185,129,0.1)]' 
                  : focused 
                    ? 'border-purple-500/60 shadow-[0_0_0_3px_rgba(124,58,237,0.15)]' 
                    : ''
              }
            `}
          />
        ) : (
          <input
            id={id}
            type={type}
            placeholder=" "
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => { setFocused(false); onBlur && onBlur(); }}
            className={`
              floating-label-input font-sans
              ${hasError 
                ? 'border-rose-500/60 shadow-[0_0_0_3px_rgba(244,63,94,0.1)]' 
                : isValid 
                  ? 'border-emerald-500/60 shadow-[0_0_0_3px_rgba(16,185,129,0.1)]' 
                  : focused 
                    ? 'border-purple-500/60 shadow-[0_0_0_3px_rgba(124,58,237,0.15)]' 
                    : ''
              }
            `}
          />
        )}
        
        {/* Left Icon */}
        <Icon className={`
          absolute left-4 w-4 h-4 transition-colors pointer-events-none
          ${rows ? 'top-6' : 'top-1/2 -translate-y-1/2'} 
          ${focused ? 'text-purple-400' : isDark ? 'text-gray-500' : 'text-gray-400'}
        `} />

        {/* Floating Label Text */}
        <label htmlFor={id} className={rows ? 'floating-label-text-textarea' : 'floating-label-text'}>
          {label}
        </label>

        {/* Right Validation Icon */}
        {(isValid || hasError) && (
          <div className={`absolute right-4 ${rows ? 'top-6' : 'top-1/2 -translate-y-1/2'}`}>
            {isValid  && <CheckCircle className="w-4 h-4 text-emerald-400" />}
            {hasError && <AlertCircle className="w-4 h-4 text-rose-400" />}
          </div>
        )}
      </div>

      {/* Validation Error Message */}
      <AnimatePresence>
        {hasError && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-xs text-rose-400 flex items-center gap-1 mt-0.5"
          >
            <AlertCircle className="w-3 h-3" /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

// ── Main Contact Component ─────────────────────────────────────────────────
const Contact = ({ isDark }) => {
  const [form,       setForm]       = useState(INITIAL_FORM);
  const [errors,     setErrors]     = useState(INITIAL_ERRORS);
  const [touched,    setTouched]    = useState({});
  const [submitting, setSubmitting] = useState(false);

  const ref = useRef(null);
  const buttonRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  // Mouse Tracking Glow Circle on Button Hover
  const handleButtonMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    buttonRef.current.style.setProperty('--x', `${x}px`);
    buttonRef.current.style.setProperty('--y', `${y}px`);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    if (touched[id]) {
      setErrors((prev) => ({ ...prev, [id]: validate(id, value) }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validate(field, form[field]) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Touch all fields
    const allTouched = { fullName: true, email: true, phone: true, message: true };
    setTouched(allTouched);

    // Validate all
    const newErrors = {
      fullName: validate('fullName', form.fullName),
      email:    validate('email',    form.email),
      phone:    validate('phone',    form.phone),
      message:  validate('message',  form.message),
    };
    setErrors(newErrors);
    
    if (Object.values(newErrors).some(Boolean)) {
      toast.error("Please resolve the validation errors first.", { style: { borderRadius: '16px' }});
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Server error. Please try again.');
      }

      // V3 Canvas-Confetti Explosion Effect
      confetti({
        particleCount: 160,
        spread: 90,
        origin: { y: 0.7 },
        colors: ['#7c3aed', '#ec4899', '#06b6d4', '#f59e0b', '#10b981']
      });

      toast.success(
        <div className="flex flex-col gap-1 text-left">
          <p className="font-bold">Thank You! Message Sent. 🚀</p>
          <p className="text-xs opacity-90">We've received your inquiry and will respond shortly.</p>
        </div>, 
        { 
          duration: 5000,
          style: { 
            borderRadius: '20px', 
            padding: '16px 24px',
            background: isDark ? '#110c2e' : '#fff',
            color: isDark ? '#fff' : '#1e1b4b',
            border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)'
          },
          iconTheme: { primary: '#ec4899', secondary: '#fff' }
        }
      );
      
      setForm(INITIAL_FORM);
      setErrors(INITIAL_ERRORS);
      setTouched({});
    } catch (err) {
      toast.error(err.message || 'Failed to connect. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const charCount = form.message.length;

  return (
    <section 
      id="contact" 
      className={`section-padding relative overflow-hidden ${isDark ? 'bg-[#030014]' : 'bg-[#faf9fc]'}`} 
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-600/10 blur-[110px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Get In Touch</span>
          <h2 className={`section-title mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Ready to Begin Your{' '}
            <span className="gradient-text">Journey?</span>
          </h2>
          <p className={`section-subtitle max-w-xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Have questions? Want to join our programs? We'd love to hear from you. Our team typically responds within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: Mail,          title: 'Email Us',       value: 'hello@shecanfoundation.org',  sub: 'We reply within 24 hours' },
              { icon: Phone,         title: 'Call Us',        value: '+91 98765 43210',              sub: 'Mon–Fri, 9AM–6PM IST' },
              { icon: MessageSquare, title: 'WhatsApp',       value: '+91 98765 43210',              sub: 'Quick queries anytime' },
            ].map(({ icon: Icon, title, value, sub }) => (
              <div
                key={title}
                className={`
                  flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5
                  ${isDark 
                    ? 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-purple-500/20' 
                    : 'bg-white border-gray-200/80 hover:shadow-lg'
                  }
                `}
              >
                <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow-purple">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</p>
                  <p className="text-sm text-purple-400 font-medium">{value}</p>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{sub}</p>
                </div>
              </div>
            ))}

            {/* Social proof */}
            <div className={`p-6 rounded-2xl border ${isDark ? 'bg-white/[0.01] border-white/5' : 'bg-purple-50/50 border-purple-100'}`}>
              <p className={`text-sm font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>🌸 Why connect with us?</p>
              <ul className="space-y-3">
                {['Free counselling session', 'No commitment required', 'Scholarship opportunities', 'Job placement assistance'].map((item) => (
                  <li key={item} className={`text-xs flex items-center gap-2.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              noValidate
              className={`
                rounded-3xl p-8 md:p-10 border transition-all duration-300
                ${isDark 
                  ? 'bg-white/[0.02] border-white/5 shadow-2xl hover:border-purple-500/20' 
                  : 'bg-white border-gray-200 shadow-xl'
                }
              `}
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <InputField
                  id="fullName"
                  label="Full Name"
                  icon={User}
                  value={form.fullName}
                  error={errors.fullName}
                  onChange={handleChange}
                  onBlur={() => handleBlur('fullName')}
                  isDark={isDark}
                />
                <InputField
                  id="email"
                  label="Email Address"
                  icon={Mail}
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  isDark={isDark}
                />
              </div>

              <div className="mb-5">
                <InputField
                  id="phone"
                  label="Phone Number"
                  icon={Phone}
                  type="tel"
                  value={form.phone}
                  error={errors.phone}
                  onChange={handleChange}
                  onBlur={() => handleBlur('phone')}
                  isDark={isDark}
                />
              </div>

              <div className="mb-2">
                <InputField
                  id="message"
                  label="Your Message"
                  icon={MessageSquare}
                  value={form.message}
                  error={errors.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  isDark={isDark}
                  rows={5}
                />
              </div>

              {/* Char counter */}
              <div className={`text-right text-xs mb-6 ${charCount > 900 ? 'text-rose-400' : isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                {charCount}/1000
              </div>

              {/* Submit Button with Custom Mouse spotlight effect */}
              <button
                id="submit-contact"
                ref={buttonRef}
                type="submit"
                disabled={submitting}
                onMouseMove={handleButtonMouseMove}
                className="
                  relative overflow-hidden w-full h-14 rounded-2xl font-semibold text-base transition-all duration-300
                  flex items-center justify-center gap-2 text-white bg-gradient-to-r from-purple-600 to-pink-600
                  hover:from-purple-500 hover:to-pink-500 shadow-glow-purple disabled:opacity-85 disabled:cursor-not-allowed
                "
                style={{
                  // Local variables manipulated by JS mouse movement
                  '--x': '50%',
                  '--y': '50%'
                }}
              >
                {/* Spotlight background hover element */}
                <span 
                  className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle 80px at var(--x) var(--y), rgba(255, 255, 255, 0.15), transparent)'
                  }}
                />

                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              <p className={`text-center text-xs mt-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                By submitting, you agree to our Privacy Policy. We never share your data.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
