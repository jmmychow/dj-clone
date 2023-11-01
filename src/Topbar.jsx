import { useState, useEffect } from 'react';
import { motion, AnimatePresence, cubicBezier } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import "./App.css";

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

function Topbar({showLogin, setShowLogin, setShowSearch}) {

  const xStyle = "-mt-4 mb-4 -mx-3 p-3 text-white hover:text-sky-600 text-2xl leading-loose grp-hover";
  const mStyle = "-mt-4 mb-4 -mx-6 p-3 text-white hover:bg-sky-600 text-xl tracking-tighter leading-loose shrinked-text grp-hover";
  const lStyle = "-mt-4 mb-4 -mx-6 p-5 text-white hover:bg-sky-600 text-xl tracking-tighter leading-none shrinked-text grp-hover";

  function Stroke() {
    return (
      <svg class="h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -10 2 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M0 0v26" /></svg>
    );
  }

  function DnArrow({showLogin}) {
    const variants = {
      down: { rotate: 0, transition: { ease: "easeOut", duration: 0.4 } },
      up: { rotate: 180, transition: { ease: "easeOut", duration: 0.4 } }
    };

    return (
      <div className="pt-4 ml-3 h-10 w-5">
        <motion.div
          variants={variants}
          animate={showLogin ? 'up' : 'down'}
        >
          <div className="flex justify-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 960 560" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937
                c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937
                c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/>
            </svg>
          </div>
        </motion.div>
      </div>
    );
  }

  function Magnifier() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    );
  }

  function Hamburger() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h26M4 12h26M4 18h26" /></svg>
    );
  }

  function LoginMenu() {
    //const easing = cubicBezier(.35,.17,.3,.86);
    let top = 0;
    function findTop() {
      const element = document.getElementById("topbar");
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      top = parseInt(elementRect - bodyRect);
      console.log(top);
      return true;
    }
    return ( findTop() &&
      <motion.div
        key="loginMenu"
        initial={{ y: top-400, opacity: 0 }}
        animate={{ y: top, opacity: 1 }}
        exit={{ y: top-400, opacity: 0 }}
        transition={{
          duration: 0.5
        }}
      >
        <div id="loginMenu" className="fixed p-5 text-center bg-sky-600 text-white ">
          <ul>
            {[
              "RISKCENTER", 
              "RISKCENTER | THIRD PARTY", 
              <a>NEW RISKCENTER | FINANCIAL<br/>CRIME</a>,
              "FACTIVA",
              "THE WALL STREET JOURNAL",
              "RISK & COMPLIANCE"
            ].map((text,i) => (<div key={i} className={lStyle}>{text}</div>))}
          </ul>
        </div>
      </motion.div>
    );
  }

  function Login({showLogin, setShowLogin}) {
    useEffect(() => {
      const debouncedHandleResize = debounce(function handleResize() {
        const element = document.getElementById("login");
        const rect = element.getBoundingClientRect();
        const lm = document.getElementById("loginMenu");
        if (lm) {
          lm.style.transform="translateX("+parseInt(rect.left.toString())+"px)";
        }
      }, 1);
      debouncedHandleResize();
      window.addEventListener("resize", debouncedHandleResize);
      return _ => { window.removeEventListener("resize", debouncedHandleResize) };
    });

    const variants = {
      green: { backgroundColor: "#002626" },
      blue: { backgroundColor: "#0284c7" }
    };
    return (
      <motion.div
        variants={variants}
        animate={showLogin ? "blue": "green"}
      >
        <div className="btn btn-ghost rounded-none no-animation hover:bg-opacity-0" onClick={(e) => setShowLogin(!showLogin)} >
          <div className="flex flex-row items-center">
            <div className="normal-case text-xs tracking-tight stretched-text">LOG&nbsp;IN</div>
            <DnArrow showLogin={showLogin} />
          </div>
        </div>
      </motion.div>
    );
  }

  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  return (
    <>
      <div id="topbar" className="sticky top-0 flex justify-center bg-[rgb(0,38,38)] text-white border-t-2 border-b-2 border-gray-400 z-10 w-full">

        <div className="flex-none">
          <div className="flex flex-row">
            <div className="flex flex-row bg-[rgb(0,38,38)] z-20">
              <div className="ml-5 mr-4 w-6 mt-2"><img src="https://www.dowjones.com/wp-content/themes/dow-jones/assets/dist/img/logo-dow-jones.png"></img></div>
              <Stroke />
            </div>
            <motion.div
              initial={{ x: -80 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeIn"
              }}
            >
              <a className="btn btn-ghost normal-case text-sm font-bold tracking-tight no-animation">DOW JONES</a>
            </motion.div>
          </div>
        </div>

        <div className="flex-1 max-w-[800px]"></div>

        <div className="flex-none">
          <div id="login" className="flex flex-row">
            { isDesktop && <Login showLogin={showLogin} setShowLogin={setShowLogin} /> }
            <div className="h-5"><Stroke /></div>
            <div className="btn btn-ghost hover:bg-opacity-0" onClick={(e) => setShowSearch(true)}>
              <Magnifier />
            </div>
            <div className="h-5"><Stroke /></div>
            <div className="drawer drawer-end">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost hover:bg-opacity-0">
                  <Hamburger />
                </label>
              </div> 
              <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-[rgb(0,38,38)] text-base-content">
                  <div className={xStyle}><label htmlFor="my-drawer-4">X</label></div>
                  {[
                    "HOME", "PRODUCTS", "INSIGHTS", "PRESS ROOM", "SCOOPS", "ABOUT", "CAREERS", "CONTACT"
                  ].map((text,i) => (<div key={i} className={mStyle}>{text}</div>))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <AnimatePresence>{ showLogin && <LoginMenu /> }</AnimatePresence>
    </>
  );
}

export default Topbar;