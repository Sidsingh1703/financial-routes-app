import React from 'react';
import { motion } from 'framer-motion';
import styles from './SidebarItem.module.css';

/**
 * SidebarItem component for navigation sidebar
 * @param {Object} props - Component props
 * @param {string} props.sublabel - Small label (usually a number)
 * @param {string} props.label - Main label text
 * @param {boolean} props.active - Whether the item is currently active
 * @param {boolean} props.completed - Whether the item has been completed
 * @param {number} props.index - Index for animation delay
 * @param {function} props.onClick - Function to call when item is clicked
 */
const SidebarItem = ({ sublabel, label, active = false, completed = false, index = 0, onClick }) => {
  // Simple pop-in animation
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: index * 0.05,
        duration: 0.3
      }
    }
  };

  const checkmarkVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.05 + 0.2,
        duration: 0.3
      }
    }
  };

  const glowAnimation = active ? {
    boxShadow: [
      '0 0 0 0 rgba(255, 230, 0, 0)',
      '0 0 15px 3px rgba(255, 230, 0, 0.3)',
      '0 0 0 0 rgba(255, 230, 0, 0)'
    ],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  } : {};

  const handleClick = () => {
    if (onClick) {
      onClick(index);
    }
  };

  return (
    <motion.div 
      className={`${styles.sidebarItem} ${active ? styles.active : ''}`}
      variants={itemVariants}
      onClick={handleClick}
      animate={glowAnimation}
      style={{ cursor: 'pointer' }}
    >
      <div className={styles.textWrapper}>
        <div className={styles.sublabel}>
          {sublabel}
        </div>
        <div className={styles.label}>
          {label}
        </div>
      </div>
      {completed && (
        <motion.div 
          className={`${styles.iconContainer} ${active ? styles.activeIcon : ''} ${styles.completed}`}
          variants={checkmarkVariants}
        >
          <div className={styles.checkmark} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default SidebarItem;
