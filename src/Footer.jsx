import { useMediaQuery } from 'react-responsive';
import "./App.css";
  
function Footer() {
  const isDesktop = useMediaQuery({ minWidth: 992 });

  function Copyright() {
    return (
      <div className="mr-10 mt-1 text-sm">© DOW JONES 2003</div>
    );
  }

  function SocialMedia() {
    return (
      <div className="flex flex-row">
        <div className="grp-hover">
          <svg className="fill-white hover:fill-sky-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
            <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23c12.683,0,23-10.317,23-23S37.683,2,25,2z M32,16h-3.29 C26.772,16,26,16.455,26,17.806V21h6l-1,5h-5v13h-6V26h-3v-5h3v-2.774C20,14.001,21.686,11,26.581,11C29.203,11,32,12,32,12V16z"></path>
          </svg>
        </div>
        <div className="ml-3 grp-hover">
          <svg className="fill-white hover:fill-sky-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 7 80 80">
            <path d="M36 12c13.234,0,24,10.766,24,24S49.234,60,36,60S12,49.234,12,36S22.766,12,36,12z M45.952,32.393	c0.904-0.653,1.689-1.466,2.308-2.394c-1.261,0.573-2.656,0.728-2.656,0.728s1.63-0.943,2.033-2.559	c-0.893,0.53-1.883,0.915-2.937,1.123c-0.843-0.899-2.046-1.461-3.375-1.461c-2.554,0-4.624,2.071-4.624,4.624	c0,0.362,0.119,1.053,0.119,1.053s-5.581,0.034-9.532-4.832c0,0-0.608,0.814-0.625,2.326c-0.029,2.564,2.057,3.848,2.057,3.848	s-1.049,0.028-2.094-0.578c0.094,3.972,3.71,4.593,3.71,4.593s-1.168,0.225-2.088,0.08c0.589,1.837,2.296,3.175,4.32,3.212	c-1.582,1.24-3.576,1.98-5.744,1.98c-0.372,0-0.741-0.022-1.103-0.065c1.074,1.162,4.477,2.077,7.089,2.077	c8.506,0,13.157-7.046,13.157-13.157C45.966,32.791,45.961,32.592,45.952,32.393z"></path>
          </svg>
        </div>
      </div>
    );
  }

  function NewsCorp() {
    return (
      <div className="w-28 grp-hover"><img src="https://www.dowjones.com/wp-content/themes/dow-jones/assets/dist/img/newscorp-logo.png"></img></div>
    );
  }

  return (
    <div className="flex justify-center pt-6 pb-2 bg-[rgb(0,38,38)] text-white border-base-300 w-full">

        { isDesktop ? 
          <>
            <div className="flex-none ml-24">
              <div className="flex flex-row"><Copyright /><SocialMedia /></div>
            </div>
            <div className="flex-1 max-w-[800px]"></div>
            <div className="flex-none mr-24">
              <NewsCorp />
            </div>
          </> :
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="flex-none ml-6"><Copyright /></div>
              <div className="flex-1 w-[400px]"></div>
              <div className="flex-none mr-6"><SocialMedia /></div>
            </div>
            <div className="flex justify-center pb-4"><NewsCorp /></div>
          </div>
        }

    </div>
  );
}

export default Footer;