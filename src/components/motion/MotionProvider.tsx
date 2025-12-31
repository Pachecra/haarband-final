// src/components/motion/MotionProvider.tsx
"use client";

import { MotionConfig } from "framer-motion";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      reducedMotion="user"
    >
      {children}
    </MotionConfig>
  );
}
