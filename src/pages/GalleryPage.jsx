import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';

export default function GalleryPage() {
  return (
    <motion.div
      className="page-enter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: 'calc(var(--nav-height) + 4rem)', minHeight: '100vh', padding: '0 2rem' }}
    >
      <div className="container">
        <SectionHeading title="Gallery" subtitle="A collection of moments" />
        <p>Full gallery implementation coming soon...</p>
      </div>
    </motion.div>
  );
}
