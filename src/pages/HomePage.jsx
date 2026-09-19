import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import Services from '../components/sections/Services';

export default function HomePage() {
  return (
    <motion.div
      className="page-enter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <About />
      <Portfolio />
      <Services showAll={false} />
    </motion.div>
  );
}
