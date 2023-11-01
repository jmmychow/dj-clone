import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import fancyAScroll from './fancyAScroll';
import Sitemap from './Sitemap';
import "./App.css";

function Links() {
  const [ showSitemap, setShowSitemap ] = useState(false);

  //const linkStyle="grp-hover hover:text-[rgb(0,200,255)] tracking-tight mx-3 p-2";
  const linkStyle="grp-hover svglink tracking-tight mx-3 p-2";
  const linkStyle2="grp-hover tracking-tight mx-3 p-2 text-[rgb(0,255,255)]";

  function DnArrow({up}) {
    return (
      <div className={"flex justify-center text-center ml-2 w-5 "+(up && " rotate-180")}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 960 560" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937
            c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937
            c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/>
        </svg>
      </div>
    );
  }

  function handleShowSitemap() {
    if (showSitemap) {
      fancyAScroll("resourcesTarget",1200, 0, 10, ()=>setShowSitemap(false));
    } else {
      setShowSitemap(true);
      fancyAScroll("linksTarget",1200);
    }
  }

  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  return (
    <>
    <div id="linksTarget" className={"flex flex-col "+(isDesktop ? "items-center px-10" : "items-left ")+" py-4 bg-gray-700 text-[13px] text-white w-full"}>
      <nav className={ isDesktop ? "flex flex-row justify-center flex-wrap max-w-[1100px]" : "flex flex-col" }>
        {[
          [ "CONTACT", linkStyle ],
          [ "LEGAL", linkStyle ],
          [ "DIVERSITY STATEMENT", linkStyle ],
          [ "EQUAL OPPORTUNITY", linkStyle ],
          [ "MODERN SLAVERY STATEMENT", linkStyle ],
          [ "ACCESSIBILITY STATEMENT", linkStyle2 ],
          [ "CODE OF CONDUCT", linkStyle ],
          [ "PRIVACY NOTICE", linkStyle2 ],
          [ "COOKIE NOTICE", linkStyle2 ],
          [ "SECURITY", linkStyle2 ],
          [ "PIB CONTENT PRIVACY NOTICE", linkStyle2 ],
          [ "SUPPLIER CODE OF CONDUCT", linkStyle ]
        ].map(([text, style],i) => (<div key={i} className={style}>{text}</div>))}
        <div className={linkStyle+" flex flex-row items-center"} onClick={(e) => handleShowSitemap()}>SITEMAP <DnArrow up={showSitemap} /></div>
      </nav>
    </div>
    <Sitemap showSitemap={showSitemap} />
    </>
  );
}

export default Links;