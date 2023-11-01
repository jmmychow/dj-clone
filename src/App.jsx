import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Topbar from "./Topbar";
import Hero from "./Hero";
import ProfessionalOfferings from "./ProfessionalOfferings";
import DowJonesResources from "./DowJonesResources";
import Links from "./Links";
import Footer from "./Footer";
import Banner from "./Banner";


function App() {
  const [ showLogin, setShowLogin ] = useState(false);
  const [ showSearch, setShowSearch ] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 992 });

  function Magnifier() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    );
  }

  function handleEmptyClick(e) {
    if (showLogin) {
      setShowLogin(false);
    }
  }

  function SearchBox({setShowSearch}) {
    function Close() {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      );
    }

    return (
      <div className="fixed flex justify-center top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 z-20" onClick={(e) => {setShowSearch(false);e.stopPropagation();}} >
        { isDesktop && 
          <button className="fixed mt-10 ml-[800px] btn bg-opacity-0 hover:bg-opacity-0 border-none"><Close /></button>
        }
        <div className={"flex flex-col "+(isDesktop ? "w-[850px]" : "w-full mx-5")}>
          <div className="text-white text-3xl mt-40 flex items-center w-full justify-between">Search{!isDesktop && <button><Close/></button>}</div>
          <div className={"relative before:absolute searchbox before:top-[40px] before:bottom-0 before:w-[30px] "+(isDesktop ? "before:left-[800px]" : "before:right-10")}>
            <input type="text" className="input input-bordered rounded-none mt-10 h-20 w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div onClick={(e) => handleEmptyClick(e)}>
        { showSearch && <SearchBox setShowSearch={setShowSearch} /> }
        <Topbar showLogin={showLogin} setShowLogin={setShowLogin} setShowSearch={setShowSearch} />
        <Hero />
        <ProfessionalOfferings />
        <DowJonesResources />
        <Links />
        <Footer />
        <Banner />
      </div>
    </>
  );
}

export default App;
