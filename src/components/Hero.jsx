import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Coffee } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg pt-20">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-neon-orange/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Tag line */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-orange/20 text-neon-orange border border-neon-orange/30 text-sm font-semibold">
              <Coffee size={16} />
              Nagpur's Loudest Cafe
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 leading-tight"
          >
            More Than Coffee.
            <br />
            <span className="gradient-text">It is a Vibe.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto font-medium"
          >
            Where Gen-Z hangs, creators vibe, and every corner is Insta-worthy
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-400 mb-12 flex items-center justify-center gap-2"
          >
            <MapPin size={18} className="text-neon-orange" />
            Nagpur, Maharashtra
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('menu')}
              className="btn-primary flex items-center gap-2 text-lg w-full sm:w-auto"
            >
              View Menu
              <ArrowRight size={20} />
            </motion.button>
            <motion.a
              href="https://maps.google.com/?q=Brothers+Cafe+Nagpur"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2 text-lg w-full sm:w-auto"
            >
              <MapPin size={20} />
              Get Directions
            </motion.a>
          </motion.div>

          {/* Floating coffee icon */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="mt-20 inline-block"
          >
            <Coffee size={48} className="text-neon-orange opacity-50" />
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 100 }}
                className="text-4xl font-bold gradient-text mb-2"
              >
                500+
              </motion.div>
              <div className="text-gray-400 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
                className="text-4xl font-bold gradient-text mb-2"
              >
                50+
              </motion.div>
              <div className="text-gray-400 text-sm">Menu Items</div>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, type: 'spring', stiffness: 100 }}
                className="text-4xl font-bold gradient-text mb-2"
              >
                24/7
              </motion.div>
              <div className="text-gray-400 text-sm">Open Late</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-6 h-10 border-2 border-neon-orange rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-neon-orange rounded-full mt-2"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
