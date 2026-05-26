import { Toaster }  from 'react-hot-toast';
import useTheme     from './hooks/useTheme';
import Navbar       from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero         from './components/Hero';
import Stats        from './components/Stats';
import About        from './components/About';
import Testimonials from './components/Testimonials';
import CTA          from './components/CTA';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

const App = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={isDark ? 'dark' : 'light'}>
      {/* Global Ultra Modern Additions */}
      <CustomCursor />
      <Toaster position="bottom-center" toastOptions={{ className: isDark ? '!bg-[#130e28] !text-white !border !border-white/10' : '' }} />

      {/* Navigation */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Page Sections */}
      <main>
        <Hero         isDark={isDark} />
        <About        isDark={isDark} />
        <Stats        isDark={isDark} />
        <Testimonials isDark={isDark} />
        <CTA          isDark={isDark} />
        <Contact      isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />
    </div>
  );
};

export default App;
