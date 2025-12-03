import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../../components';
import styles from './PersonalWelcomePage.module.css';

/**
 * PersonalWelcomePage component that displays a personalized greeting with user avatar
 * This page welcomes the user by name and provides a brief introduction to the platform
 */
const PersonalWelcomePage = () => {
  // User data - in a real app, this would come from authentication/context
  const userData = {
    name: 'Julia',
    avatar: `${process.env.PUBLIC_URL}/assets/Avatar.svg`,
  };

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.4,
        duration: 1.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 70,
        duration: 1.5,
        ease: 'easeOut',
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 1.2,
        ease: 'easeOut',
      },
    },
  };

  const waveVariants = {
    hidden: { rotateZ: 0, scale: 1 },
    visible: {
      rotateZ: [0, -25, 15, -25, 15, -15, 10, 0],
      scale: [1, 1.1, 1, 1.1, 1, 1.05, 1],
      transition: {
        delay: 1.8,
        duration: 2.5,
        ease: 'easeInOut',
        times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  const avatarVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8,
        duration: 1.5,
        type: 'spring',
        damping: 15,
        stiffness: 60,
      },
    },
  };

  // Border glow removed as requested

  return (
    <div className={styles.personalWelcomeContainer}>
      <Header />
      
      <main className={styles.mainContent}>
        <motion.div 
          className={styles.contentSection}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className={styles.heading} variants={itemVariants}>
            Hi {userData.name} 
            <motion.span 
              className={styles.waveEmoji}
              variants={waveVariants}
            >
              👋
            </motion.span>
          </motion.h1>
          
          <motion.h2 className={styles.subheading} variants={itemVariants}>
            Let's begin your journey
          </motion.h2>
          
          <motion.div 
            className={styles.descriptionContainer}
            variants={paragraphVariants}
          >
            <p className={styles.description}>
              Welcome to Operate Zone, your comprehensive solution for streamlined
              loan servicing.
            </p>
            <p className={styles.description}>
              Our platform leverages blockchain technology to provide unparalleled
              transparency, automation, and insights, ensuring efficient and compliant
              operations.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className={styles.avatarContainer}
          initial="hidden"
          animate="visible"
          variants={avatarVariants}
        >
          <div className={styles.avatarFrame}>
            <img 
              src={userData.avatar} 
              alt={`${userData.name}'s avatar`} 
              className={styles.avatarImage}
            />
          </div>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.07, boxShadow: '0 4px 24px 0 rgba(255,153,0,0.25)' }}
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
          style={{
            position: 'fixed',
            right: '48px',
            bottom: '48px',
            left: 'auto',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24.1px 48.2px',
            gap: '14.22px',
            width: '149.43px',
            height: '60px',
            background: 'linear-gradient(0deg, rgba(29, 29, 29, 0.2), rgba(29, 29, 29, 0.2)), #1D1D1D',
            backgroundBlendMode: 'color-burn, plus-lighter',
            boxShadow: 'inset 6.03px 6.03px 1px -7.03px rgba(255,255,255,0.5), inset 4.02px 4.02px 2.01px -4.02px #B3B3B3, inset -4.02px -4.02px 2.01px -4.02px #B3B3B3, inset 0px 0px 44.20px rgba(242,242,242,0.5)',
            backdropFilter: 'blur(40.18px)',
            borderRadius: '200.89px',
            color: '#fff',
            fontWeight: 600,
            fontSize: 20,
            border: 'none',
            cursor: 'pointer',
            zIndex: 30
          }}
          onClick={() => window.location.assign('/loan-service')}
        >
          Next
        </motion.button>
      </main>
      
      {/* Placeholder for future background */}
      <div className={styles.backgroundPlaceholder}></div>
    </div>
  );
};

export default PersonalWelcomePage;
