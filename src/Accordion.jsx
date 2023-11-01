import { motion, AnimatePresence } from "framer-motion";
import Sitemap from "./Sitemap";

const Accordion = ({showSitemap}) => {
  return (
    <AnimatePresence>
        {showSitemap &&
        <motion.div
            key="answer"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
                open: { height: 'auto', transition: { duration: 1.5 } },
                collapsed: { height: 0 },
                exit: { height: 0, transition: { duration: 1.5 } },
            }}
        >
            <Sitemap showSitemap={showSitemap}/>
        </motion.div>
        }
    </AnimatePresence>
  );
};

export default Accordion;
