import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera, Instagram, Heart, Star } from 'lucide-react';
import cafeWallImage from '../assets/images/cafe-wall.jpg';
import cafeMenuBoardImage from '../assets/images/cafe-menu-board.jpg';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Gallery items with placeholder descriptions
  const galleryItems = [
    { id: 1, type: 'ambience', title: 'I AM ROWDY Wall', aspect: 'aspect-[4/3]', image: cafeWallImage },
    { id: 2, type: 'food', title: 'Brothers Cafe Menu', aspect: 'aspect-[3/4]', image: cafeMenuBoardImage },
    { id: 3, type: 'food', title: 'Cold Coffee Goals', aspect: 'aspect-square', image: null },
    { id: 4, type: 'people', title: 'Squad Goals', aspect: 'aspect-square', image: null },
    { id: 5, type: 'food', title: 'Pizza Perfection', aspect: 'aspect-[4/3]', image: null },
    { id: 6, type: 'ambience', title: 'Late Night Energy', aspect: 'aspect-square', image: null },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const reasons = [
    {
      icon: <Heart className="w-6 h-6" />,
      text: 'Affordable AF',
      description: 'College student budget? We got you.',
    },
    {
      icon: <Star className="w-6 h-6" />,
      text: 'Late-Night Hangout',
      description: 'Open till midnight. No judgement.',
    },
    {
      icon: <Camera className="w-6 h-6" />,
      text: 'Instagrammable Vibes',
      description: 'Every corner is content-worthy.',
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      text: 'Fast Service',
      description: "Your order, delivered in minutes.",
    },
  ];

  return (
    <section id="gallery" className="section-padding bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-neon-orange font-semibold text-sm uppercase tracking-wider mb-4 block">
              Gallery
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              See What the <span className="gradient-text">Hype</span> Is About
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Don't just take our word for it — check out the vibes yourself
            </p>
          </motion.div>

          {/* Gallery grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.aspect}`}
              >
                {/* Real image or placeholder background */}
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/30 via-dark-card to-yellow-500/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="w-16 h-16 text-white/20" />
                    </div>
                  </>
                )}

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 text-neon-orange">
                      <Instagram size={16} />
                      <span className="text-sm">@brothers_cafe_butibori</span>
                    </div>
                  </div>
                </motion.div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-neon-orange/20 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Instagram CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-20"
          >
            <motion.a
              href="https://instagram.com/brothers_cafe_butibori"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Instagram size={24} />
              Follow @brothers_cafe_butibori
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Why People Love Us */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-3xl md:text-5xl font-display font-bold text-center mb-12">
              Why People <span className="gradient-text">Love Us</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-dark-card p-6 rounded-2xl border border-neon-orange/20 hover:border-neon-orange/50 transition-all duration-300 text-center group"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-orange/20 text-neon-orange mb-4 group-hover:bg-neon-orange group-hover:text-white transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {reason.icon}
                  </motion.div>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    {reason.text}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-neon-orange/10 to-yellow-500/10 rounded-3xl p-8 text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">4.8★</div>
                <div className="text-gray-400">Google Reviews</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-neon-orange/30" />
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">2K+</div>
                <div className="text-gray-400">Instagram Followers</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-neon-orange/30" />
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-400">Happy Customers</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
