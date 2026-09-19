import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { clientInfo } from '../data/servicesData';

export default function ContactPage() {
  return (
    <motion.div
      className="page-enter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: 'calc(var(--nav-height) + 4rem)', minHeight: '100vh', padding: '0 2rem' }}
    >
      <div className="container">
        <SectionHeading title="Contact Us" subtitle="Let's capture your story" />
        <div style={{ marginTop: '2rem' }}>
          <p>Email: {clientInfo.email}</p>
          <p>Phone: {clientInfo.phone}</p>
          <p>Address: {clientInfo.address}</p>
        </div>
      </div>
    </motion.div>
  );
}
