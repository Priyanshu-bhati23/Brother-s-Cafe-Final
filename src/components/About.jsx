import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Users, Sparkles } from 'lucide-react';
import cafeMenuBoardImage from '../assets/images/cafe-menu-board.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Made with Love',
      description: 'Every dish crafted with passion by two brothers who care',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community First',
      description: 'Built for students, creators, and dreamers like you',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Vibe > Everything',
      description: 'Not just food, but an experience you will remember',
    },
  ];

  return (
    <section id="about" className="section-padding bg-dark-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon-orange/5 to-transparent" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-neon-orange font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Two Brothers, One <span className="gradient-text">Dream</span>
            </h2>
          </motion.div>

          {/* Story content */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left side - Story text */}
            <div className="space-y-6">
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed"
              >
                It started with late-night conversations, endless coffee cups, and a simple question:{' '}
                <span className="text-neon-orange font-semibold">
                  "Why is not there a place where we actually want to hang out?"
                </span>
              </motion.p>
              
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed"
              >
                We were tired of boring cafes that felt like libraries. We wanted music that slaps, 
                food that hits different, and vibes that make you want to stay for hours.
              </motion.p>
              
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed"
              >
                So we did what any crazy brothers would do — we built it ourselves. From scratch. 
                With our own hands, our parents blessings, and way too many sleepless nights.
              </motion.p>
              
              <motion.p
                variants={itemVariants}
                className="text-lg text-neon-orange font-semibold leading-relaxed"
              >
                Brothers Cafe is not just a business. It is where Nagpur Gen-Z comes alive. 
                It is YOUR space. Welcome home.
              </motion.p>
            </div>

            {/* Right side - Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-neon-orange/20 to-yellow-500/20 p-1">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <img 
                    src={cafeMenuBoardImage} 
                    alt="Brothers Cafe" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -top-6 -right-6 bg-neon-orange text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Est. 2023
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Features grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-dark-card p-8 rounded-2xl border border-neon-orange/20 hover:border-neon-orange/50 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="text-neon-orange mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
