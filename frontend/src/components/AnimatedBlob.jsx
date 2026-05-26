/**
 * AnimatedBlob — decorative background blobs used in the hero section.
 * Pure CSS animation, no dependencies.
 */
const AnimatedBlob = ({ className = '', color = 'purple', size = 'lg', delay = 0 }) => {
  const colors = {
    purple: 'bg-purple-600/20',
    pink:   'bg-pink-500/20',
    cyan:   'bg-cyan-500/15',
    violet: 'bg-violet-700/25',
  };

  const sizes = {
    sm:  'w-48 h-48',
    md:  'w-72 h-72',
    lg:  'w-96 h-96',
    xl:  'w-[30rem] h-[30rem]',
    '2xl': 'w-[40rem] h-[40rem]',
  };

  const delays = {
    0: '',
    1: 'animation-delay-2000',
    2: 'animation-delay-4000',
  };

  return (
    <div
      className={`
        absolute rounded-full blur-3xl pointer-events-none
        ${colors[color] || colors.purple}
        ${sizes[size]  || sizes.lg}
        ${delays[delay] || ''}
        blob-animate
        ${className}
      `}
      aria-hidden="true"
    />
  );
};

export default AnimatedBlob;
