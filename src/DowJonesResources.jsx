import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import "./App.css";

function DowJonesResources() {
    const isDesktop = useMediaQuery({ minWidth: 992 });
  
    function Resource({title="", date="", text="", resource="", class_ext=""}) {
        return (
            <div className={"m-3 "+(isDesktop ? "h-64 w-72": "h-56 m-5 w-full")}>
                <div className={"relative w-full h-full grp-hover "+(isDesktop && " before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-[length:300px_260px] "+class_ext)} >
                    <div className={"flex flex-col w-full h-full "+(isDesktop && "transition hover:duration-500 hover:-translate-y-5")}>
                        <div className="text-xl text-[rgba(0,200,255,0.7)] text-center p-5 tracking-tight stretched-title">{title}</div>
                        <div className="p-0 text-sm text-gray-500 text-center p-5 tracking-tight stretched-title">{date}</div>
                        <div className="text-white text-center p-5 tracking-tight stretched-title">{text}</div>
                        <div className={"absolute h-full w-full "+(isDesktop && "transition hover:duration-500 hover:-translate-y-5")+" text-sm text-white flex flex-col text-center justify-center tracking-tight"}>
                            { resource=="" ? <></> : <div className={"absolute bottom-0 w-full h-14 bg-sky-500/90 "+(isDesktop ? "translate-y-10":"" )}></div>}
                            <div className={"text-white z-10 "+(!isDesktop && "mb-5")}>{resource}</div>
                        </div>
                    </div>
                    { isDesktop && <div className="absolute bottom-0 h-11 w-80 translate-y-11 bg-[rgb(0,38,38)] z-20">{/*for hiddening purposes*/}</div> }
                </div>
            </div>
        );
    }

    return (
        <div id="resourcesTarget" className="flex flex-col items-center justify-center bg-[rgb(0,38,38)] w-full">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                duration: 0.8,
                ease: "easeInOut"
                }}
            >
                { isDesktop ?
                <div className="flex flex-row p-10 h-96 justify-center w-full">
                    <Resource title={<>MarketWatch50 Recognizes 2023's Top Market Movers and Policymakers</>} date="OCTOBER 31, 2023" text="" resource={<><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>PRESS RELEASE</>} />
                    <div className="m-3 h-64 w-72 bg-[length:300px_260px] bg-[url('https://images.dowjones.com/wp-content/uploads/sites/43/2020/02/05214357/Header-Dow-Jones-Blog-Desktop-01-01-01-1.png')]"></div>
                    {/*<Resource class_ext="resource_image1"/>*/}
                    <Resource title={<><br/><br/>Join Our Team</>} text={<>Check out the latest job <br/>postings!</>} resource={<><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>CAREERS</>} class_ext="resource_image2" />
                </div> :
                <div className="flex flex-col justify-center w-full -translate-x-5">
                    <Resource title={<>MarketWatch50 Recognizes 2023's Top Market Movers and<br/>Policymakers</>} date="OCTOBER 31, 2023" text="" resource={<><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>PRESS RELEASE</>} />
                    <div className="flex flex-col items-center justify-center bg-sky-500/90 m-5 h-56 w-full"><img className="w-14 m-8" src="https://images.dowjones.com/wp-content/uploads/sites/43/2015/12/18165417/logo-big.png"></img><div className="btn bg-sky-500/90 text-white mb-12">BLOG</div></div>
                    <Resource title={<>Join Our Team</>} text="Check out the lastest job postings!" resource={<><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>CAREERS</>} class_ext="resource_image2" />
                </div>
                }
            </motion.div>
        </div>
    );
}
  
export default DowJonesResources;  