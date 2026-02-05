import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Beef, Pizza, Coffee, Soup, QrCode, ArrowRight } from 'lucide-react';
import qrMenuImage from '../assets/qr-menu.png';

const MenuPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const menuItems = [
    {
      icon: <Beef className="w-12 h-12" />,
      name: 'Burgers',
      description: 'Juicy, loaded, and absolutely fire',
      price: '₹99 onwards',
      color: 'from-red-500/20 to-orange-500/20',
      badge: 'Best Seller',
    },
    {
      icon: <Pizza className="w-12 h-12" />,
      name: 'Pizza',
      description: 'Crispy base, loaded toppings, pure magic',
      price: '₹149 onwards',
      color: 'from-yellow-500/20 to-red-500/20',
      badge: 'Crowd Fav',
    },
    {
      icon: <Coffee className="w-12 h-12" />,
      name: 'Cold Coffee',
      description: 'Instagram-worthy, taste even better',
      price: '₹79 onwards',
      color: 'from-amber-500/20 to-yellow-500/20',
      badge: 'Must Try',
    },
    {
      icon: <Soup className="w-12 h-12" />,
      name: 'Momos',
      description: 'Steamed perfection with spicy chutney',
      price: '₹59 onwards',
      color: 'from-green-500/20 to-emerald-500/20',
      badge: 'Affordable',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="menu" className="section-padding bg-dark-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-neon-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-neon-orange font-semibold text-sm uppercase tracking-wider mb-4 block">
              What's Cooking
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Menu That <span className="gradient-text">Hits Different</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From comfort food to Instagram-worthy delights — we got it all
            </p>
          </motion.div>

          {/* Menu grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -15,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="bg-dark-bg rounded-2xl p-6 border border-neon-orange/20 hover:border-neon-orange/50 transition-all duration-300 h-full relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-neon-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.badge}
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="text-neon-orange mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm">
                      {item.description}
                    </p>
                    <div className="text-neon-orange font-bold text-lg">
                      {item.price}
                    </div>
                  </div>

                  {/* Hover effect corner */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-neon-orange/10 rounded-tl-full transform translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* QR Code CTA */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-neon-orange/10 via-yellow-500/10 to-neon-orange/10 rounded-3xl p-1">
              <div className="bg-dark-bg rounded-3xl p-8 md:p-12 text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="inline-block mb-6"
                >
                  <img 
                    src={qrMenuImage} 
                    alt="Scan for Full Menu" 
                    className="w-48 h-48 mx-auto rounded-2xl"
                  />
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Want the <span className="gradient-text">Full Menu?</span>
                </h3>
                
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Scan our QR code at the cafe or check out our complete menu with prices, 
                  combos, and special deals
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    <QrCode size={20} />
                    Scan QR at Cafe
                  </motion.button>
                  
                  <motion.a
                    href="tel:+919876543210"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary flex items-center gap-2"
                  >
                    Call to Order
                    <ArrowRight size={20} />
                  </motion.a>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-neon-orange/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">50+</div>
                    <div className="text-gray-500 text-sm">Menu Items</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">Veg & Non-Veg</div>
                    <div className="text-gray-500 text-sm">Both Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">₹59</div>
                    <div className="text-gray-500 text-sm">Starting Price</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">Combos</div>
                    <div className="text-gray-500 text-sm">Best Deals</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuPreview;
