import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Banner() {
  const [ showBanner, setShowBanner ] = useState(true);

  return (
    <AnimatePresence>
      {showBanner &&
        <div className="absolute sticky bottom-0 w-full z-20">
          <motion.div
            key="banner"
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            exit={{ y: 200 }}
            transition={{
              duration: 0.5,
              ease: "linear"
            }}
          >
            <div className="font-serif w-full p-5 flex flex-row items-center justify-center bg-sky-500 text-white leading-tight">
              <div>
                Dow Jones and The Wall Street Journal stand with our colleague Evan <br/>
                Gershkovich and call for his immediate release.<br/>
                <br/>
                Read the latest updates on this situation and learn how you can support.
              </div>
              <button className="font-sans btn mx-6 w-40 bg-gray-700 hover:bg-white border-none text-white hover:text-black">READ MORE</button>
              <div className="absolute right-5">
                <motion.div
                  whileHover={{ scale: 1.3 }}
                >
                  <button className="btn btn-circle border-none btn-xs bg-sky-200 hover:bg-white" onClick={(e) => setShowBanner(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-auto" fill="none" viewBox="0 0 24 24" stroke="rgb(100,100,100)"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      }
    </AnimatePresence>
  );
}

export default Banner;