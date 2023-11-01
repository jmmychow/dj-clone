import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import "./App.jsx";

function ProfessionalOfferings() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  function Offerings({image,title,text,stroke}) {
    function Stroke() {
      return (
        isDesktop ? 
        <div className="h-[480px] w-[1px] bg-gray-200"></div> :
        <div className="h-[1px] w-full bg-gray-200 my-10"></div>
      );
    }
  
    return (
      <>
        <div className={"flex flex-col px-3 items-center grp-hover "+(isDesktop ? "hover:bg-gray-50 w-48" : "w-[70%]" )}>
          <div className="py-6"><img src={image}></img></div>
          <div className="link link-hover text-2xl text-[rgb(0,180,220)] text-center stretched-title">{title}</div>
          <div className="pt-5 text-gray-400 text-center stretched-text leading-tight">{text}</div>
        </div>
        { stroke ? <Stroke /> : <div className="my-5"></div> }
      </>
    );
  }

  function offeringData() {
    return [
      [ "https://images.dowjones.com/wp-content/uploads/sites/43/2018/01/22203852/icon-bulb.png", "Factiva & Curation Services", "Rely on an unrivaled collection of global news and data accessible via a powerful research platform, on mobile devices or integrated with advanced feeds and APIs.", true],
      [ "https://images.dowjones.com/wp-content/uploads/sites/43/2018/01/22204347/icon-risk.png", "Risk & Compliance", "The global leader in data intelligence for anti-money laundering. anti- corruption, economic sanctions, third- party data and commerical rish.", true],
      [ "https://images.dowjones.com/wp-content/uploads/sites/43/2018/01/22204011/icon-globe.png", "Dow Jones Newswires", "Market-moving, trusted news, exclusive insights and rich data sets for financial firms, professionals and investors.", true],
      [ "https://images.dowjones.com/wp-content/uploads/sites/43/2018/05/26155332/icon-dev1.png", "Developer Platform", "Unlock industry- leading data. news and analytics for your enterprise.", true],
      [ "https://images.dowjones.com/wp-content/uploads/sites/43/2023/06/06093258/OPIS-Icon.png", "OPIS", "News, data, analytics and events for the energy, chemicals and sustainability communities.", false]
    ].map(([image,title,text,stroke],i) => (
      <Offerings key={i} image={image} title={title} text={text} stroke={stroke} />
    ))
  }

  return (
    <div id="offeringsTarget" className="flex flex-col items-center bg-white w-full">
      { isDesktop &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
        >
          <div className="p-10 text-3xl text-gray-700 text-center stretched-title tracking-wide">Our Professional Offerings</div>
        </motion.div>  
      }
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          ease: "easeInOut"
        }}
      >
        { isDesktop ? 
          <div className="flex flex-row justify-center max-w-[1100px]">{offeringData()}</div> :
          <div className="flex flex-col justify-center items-center">{offeringData()}</div> 
        }
      </motion.div>  
    </div>
  );
}

export default ProfessionalOfferings;