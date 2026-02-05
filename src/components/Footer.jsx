import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Heart, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, url: 'https://instagram.com/brothers_cafe_butibori', name: 'Instagram' },
    { icon: <Facebook size={20} />, url: 'https://facebook.com/brotherscafe', name: 'Facebook' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com/brotherscafe', name: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-bg border-t border-neon-orange/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-neon-orange/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-3xl font-display font-bold gradient-text mb-3">
                Brothers Cafe
              </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                More than coffee. It's a vibe. Nagpur's loudest Gen-Z hangout serving 
                good food, great vibes, and memories that last.
              </p>
              <div className="flex items-center gap-2 text-neon-orange text-sm">
                <Coffee size={16} />
                <span>Butibori, Nagpur</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-neon-orange transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social & Hours */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-bold mb-4 text-white">Connect</h4>
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-neon-orange/20 flex items-center justify-center text-neon-orange hover:bg-neon-orange hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <div className="text-sm text-gray-400">
                <div className="font-semibold text-white mb-2">Hours</div>
                <div>Mon - Sun: 11 AM - 12 AM</div>
                <div className="text-neon-orange mt-1">Open Every Day</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-neon-orange/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Brothers Cafe. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Heart size={16} className="text-neon-orange fill-neon-orange" />
              </motion.div>
              <span>in Nagpur</span>
            </div>
          </div>
        </motion.div>

        {/* Easter egg tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6 text-xs text-gray-600"
        >
          Built by brothers, loved by Gen-Z ✨
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
