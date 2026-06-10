import { motion } from 'framer-motion';
import './animations.css';

/* ─── ENTRANCE VARIANTS ────────────────────────────────── */
export const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.92 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

/* ─── STAGGER ──────────────────────────────────────────── */
export const staggerContainer = {
  initial: { opacity: 1 },
  whileInView: { opacity: 1, transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: '-80px' },
};

export const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export const staggerItemLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export const staggerItemScale = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

/* ─── SPRING HOVER ─────────────────────────────────────── */
export const springHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: 'spring', stiffness: 400, damping: 17 },
};

export const springLift = {
  whileHover: { y: -6, transition: { duration: 0.2 } },
};

export const springIcon = {
  whileHover: { scale: 1.15, rotate: 8 },
  transition: { type: 'spring', stiffness: 300, damping: 12 },
};

/* ─── RE-EXPORTS ───────────────────────────────────────── */
export const MotionDiv = motion.div;
export const MotionSpan = motion.span;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionP = motion.p;
export const MotionA = motion.a;
export const MotionSection = motion.section;
export const MotionImg = motion.img;
export const MotionButton = motion.button;
