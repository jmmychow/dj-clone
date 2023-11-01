import sitemap from "./sitemap.json";
import { useMediaQuery } from 'react-responsive';

function Sitemap({showSitemap}) {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const sitecat = [];

    function SiteCategory({category,list}) {
        return (
            <div className={(isDesktop ? "p-10" : "p-5")+" text-white"}>
            <p className="text-sm tracking-tight">{category}</p><br/>
            <ul>
                {list.map((item,i) => (<li key={i} className="text-gray-400 tracking-tight">{item}</li>))}
            </ul>
            </div>
        );
    }
    
    for (var key in sitemap) {
        sitecat.push(<SiteCategory key={key} category={key} list={sitemap[key]} />);
    }

    return (showSitemap && 
        (isDesktop ?
            <div className="w-full flex flex-col items-center bg-gray-700">
                <div className="relative grid grid-cols-3 max-w-8xl align-top max-w-[1100px]">
                {/* negative z-index is needed for Accordion */}
                {sitecat}
                </div>
            </div> :
            <div className="relative flex flex-col bg-gray-700">{sitecat}</div>
        )
    );
}

export default Sitemap;