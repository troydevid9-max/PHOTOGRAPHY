import { motion } from 'framer-motion';
import ServicesSection from '../components/sections/Services';
import SectionHeading from '../components/ui/SectionHeading';

export default function ServicesPage() {
  return (
    <motion.div
      className="page-enter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: 'calc(var(--nav-height) + 4rem)' }}
    >
      <div className="container">
        <SectionHeading title="All Services" subtitle="What we can do for you" />
      </div>
      <ServicesSection showAll={true} />
    </motion.div>
  );
}
