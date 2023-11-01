import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import "./App.css";
import fancyAScroll from './fancyAScroll';

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

function DnArrow() {
  const [showArrow, setShowArrow] = useState(true);

  return (
    showArrow &&
    <div id="scrollTarget" className="flex justify-center items-center bg-white" onClick={(e) => {setShowArrow(false);fancyAScroll("scrollTarget");}}>
      <motion.div
        animate={{ y:[0,20,0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="grey" viewBox="0 0 960 560" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937
            c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937
            c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/>
        </svg>
      </motion.div>
    </div>
  );
}

function Hero() {
  const isDesktop = useMediaQuery({ minWidth: 992 });

  useEffect(() => {
    let footerHeight = 100;
    let heroHeight = 660;
    let marginMax = 10;
    let marginMin = -10;

    const debouncedHandleResize = debounce(function handleResize() {
      const element = document.getElementById("hero");
      const child = document.getElementById("hero_child");

      if (isDesktop) {
        if (window.innerHeight-footerHeight > heroHeight) {
          element.style.height = heroHeight.toString()+"px";
          child.style.marginTop = marginMax.toString()+"rem";
        } else if (window.innerHeight-footerHeight < heroHeight) {
          element.style.height = parseInt(window.innerHeight - footerHeight).toString()+"px";
          child.style.marginTop = parseInt((window.innerHeight-footerHeight)/heroHeight*(marginMax-marginMin)+marginMin).toString()+"rem";
        }
      } else {
        element.style.height = "260px";
        child.style.marginTop = "-4rem";
      }
    }, 10);

    debouncedHandleResize();
    window.addEventListener("resize", debouncedHandleResize);
    return _ => { window.removeEventListener("resize", debouncedHandleResize)};
  });

  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      >
        <div id="hero" className={"bg-cover bg-center w-full bg-[url('https://images.dowjones.com/wp-content/uploads/sites/43/2013/09/04081924/Optimized-Dow-Jones.jpg')] "+(!isDesktop && "bg-[length:992px] bg-no-repeat")}>
          <motion.div
            initial={{ y: 15 }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: "easeInOut"
            }}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <div id="hero_child" className="relative w-24">
                <img className="mt-[7rem]" src="https://images.dowjones.com/wp-content/uploads/sites/43/2015/12/18165417/logo-big.png"></img>
              </div>
              <div className={"pt-8 mb-5 "+(isDesktop ? "text-3xl" : "text-2xl")+" tracking-tight text-white stretched-title"}>POWERING THE PROFESSIONAL WORLD</div>
              { isDesktop && <div className="mb-5 tracking-tight text-white stretch-text">
                Dow Jones brings together world-leading data, media,<br/>
                membership and intelligence solutions to power the most<br/>
                ambitious companies and professionals
              </div>}
            </div>
          </motion.div>
        </div>
        { isDesktop && <DnArrow />}
      </motion.div>
    );
  }
  
export default Hero;