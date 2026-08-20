import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function OverlayMenu({ isOpen, onClose }) {
  const items = ["Home", "About", "Skills", "Projects", "Experience", "Testimonials", "Contact"];
  const isMobile = typeof window !== "undefined" && window.innerWidth <1024;
  const origin = isMobile ? "95% 8%" : "50% 8%"

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{clipPath:`circle(0% at ${origin})`}}
          animate={{clipPath:`circle(150% at ${origin})`}}
          exit={{clipPath:`circle(0% at ${origin})`}}
          className="fixed inset-0 z-50 flex items-center justify-center "
          transition={{duration : 0.7 , ease: [0.4,0,0.2,1 ]}}
          style={{backgroundColor: "rgba(0,0,0,0.95)"}}
        >
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-white text-3xl"
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          <ul className="space-y-6 text-center text-white text-3xl">
            {items.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.08 }}
                className="cursor-pointer hover:text-pink-400 transition-colors"
              >
                <a href={`#${item.toLowerCase()}`} onClick={onClose} className="font-semibold">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}