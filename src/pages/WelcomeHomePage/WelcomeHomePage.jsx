import React from 'react';
import { MoveDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from '../../components';
import styles from './WelcomeHomePage.module.css';

const WelcomeHomePage = () => {
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

  const bottomVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.8,
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

  const arrowVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2.2,
        duration: 0.8,
        ease: 'easeOut',
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 0.8,
      },
    },
  };

  return (
    <div className={styles.welcomeContainer}>
      <Header />

      <main className={styles.mainContent}>
        <motion.div
          className={styles.centerContent}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className={styles.heading} variants={itemVariants}>
            Hello, there!
            <motion.span className={styles.waveEmoji} variants={waveVariants}>
              👋
            </motion.span>
          </motion.h1>
          <motion.h2 className={styles.subheading} variants={itemVariants}>
            Welcome to Operate Zone.
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.bottomContent}
          initial="hidden"
          animate="visible"
          variants={bottomVariants}
        >
          <motion.p className={styles.instruction}>
            Please proceed on the interactive screen to begin
          </motion.p>
          <motion.div variants={arrowVariants} initial="hidden" animate="visible">
            <MoveDown className={styles.arrowIcon} />
          </motion.div>
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
          onClick={() => window.location.assign('/personal-welcome')}
        >
          Next
        </motion.button>
      </main>

      <motion.video
        className={styles.bgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.95, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <source src="/assets/bgvideo.mp4" type="video/mp4" />
      </motion.video>
      <div className={styles.overlay} />
    </div>
  );
};

export default WelcomeHomePage;
