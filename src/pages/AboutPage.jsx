import { motion } from 'framer-motion';
import AboutSection from '../components/sections/About';
import SectionHeading from '../components/ui/SectionHeading';

export default function AboutPage() {
  return (
    <motion.div
      className="page-enter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: 'var(--nav-height)' }}
    >
      <div className="container" style={{ padding: '4rem 0' }}>
        <SectionHeading title="About Me" subtitle="The person behind the lens" />
      </div>
      <AboutSection />
    </motion.div>
  );
}
