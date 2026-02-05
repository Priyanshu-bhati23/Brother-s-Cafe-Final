import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, Mail, Navigation } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      info: '+91 98765 43210',
      link: 'tel:+919876543210',
      action: 'Call Now',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      info: 'Butibori, Nagpur',
      link: 'https://maps.app.goo.gl/WR7P8vKaLezz5u6j8',
      action: 'Get Directions',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Timings',
      info: '11:00 AM - 12:00 AM',
      info2: 'Open All Days',
      action: null,
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: 'Instagram',
      info: '@brothers_cafe_butibori',
      link: 'https://instagram.com/brothers_cafe_butibori',
      action: 'Follow Us',
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="contact" className="section-padding bg-dark-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-neon-orange/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-neon-orange font-semibold text-sm uppercase tracking-wider mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Come Say <span className="gradient-text">Hi!</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              DM us, call us, or just show up. We're always ready to vibe.
            </p>
          </motion.div>

          {/* Contact info grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-dark-bg p-6 rounded-2xl border border-neon-orange/20 hover:border-neon-orange/50 transition-all duration-300 text-center group"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-neon-orange/20 text-neon-orange mb-4 group-hover:bg-neon-orange group-hover:text-white transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-1">
                  {item.info}
                </p>
                {item.info2 && (
                  <p className="text-gray-400 text-sm mb-3">
                    {item.info2}
                  </p>
                )}
                {item.action && item.link && (
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block text-neon-orange font-semibold text-sm mt-2 hover:underline"
                  >
                    {item.action} →
                  </motion.a>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Map and CTA */}
          <motion.div
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-neon-orange/20 h-[400px] relative group">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.826916193089!2d79.00916807526107!3d21.16989988050934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4eb1c8e8e8e8f%3A0x1234567890abcdef!2sBrothers%20Cafe!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brothers Cafe Location"
              />
              
              {/* Overlay with directions button */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.a
                  href="https://maps.app.goo.gl/WR7P8vKaLezz5u6j8"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn-primary flex items-center gap-2"
                >
                  <Navigation size={20} />
                  Open in Maps
                </motion.a>
              </div>
            </div>

            {/* Call to action box */}
            <div className="bg-gradient-to-br from-neon-orange/10 via-dark-bg to-yellow-500/10 rounded-2xl p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Experience the <span className="gradient-text">Vibe?</span>
              </h3>
              
              <p className="text-gray-400 text-lg mb-8">
                Call us to book a table, order takeaway, or just ask what's good today. 
                We're here for you!
              </p>

              <div className="space-y-4">
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full flex items-center justify-center gap-3 text-lg"
                >
                  <Phone size={20} />
                  Call Now: +91 98765 43210
                </motion.a>

                <motion.a
                  href="https://instagram.com/brothers_cafe_butibori"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary w-full flex items-center justify-center gap-3 text-lg"
                >
                  <Instagram size={20} />
                  DM on Instagram
                </motion.a>
              </div>

              {/* Additional info */}
              <div className="mt-8 pt-8 border-t border-neon-orange/20">
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <Mail className="w-5 h-5 text-neon-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white mb-1">Email Us</div>
                    <a href="mailto:hello@brotherscafe.com" className="hover:text-neon-orange transition-colors">
                      hello@brotherscafe.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 p-8 bg-dark-bg rounded-2xl border border-neon-orange/20"
          >
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">11 AM</div>
              <div className="text-gray-400 text-sm">Opening Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">12 AM</div>
              <div className="text-gray-400 text-sm">Closing Time</div>
            </div>
            <div className="text-center md:col-span-1 col-span-2">
              <div className="text-3xl font-bold gradient-text mb-2">7 Days</div>
              <div className="text-gray-400 text-sm">Open Weekly</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
