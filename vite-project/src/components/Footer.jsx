import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import vimeo from "../images/vimeo.svg";
import pinterest from "../images/pinterest.svg";
import youtube from "../images/youtube.svg";
import visa from "../images/visa.svg";
import paypal from "../images/paypal.svg";
import discover from "../images/discover.svg";
import mastercard from "../images/mastercard.svg";


const secData = [
    {
        id: 1,
        title: "Customer Services",
        oneText: "Contact Us",
        twoText: "Shipping",
        threeText: "Click & Collect",
        fourText: "Returns",
        fiveText: `FAQ’s`

    },
    {
        id: 2,
        title: "Customer Assistance",
        oneText: "Track My Orders",
        twoText: "Online Returns",
        threeText: "Shipping Rates",
        fourText: "Returns & Exchanges",
        fiveText: `International Shipping`,
        
    },
]

function Footer() {
  return (
    <div>
        <footer className="footer">
        <div className="footer__top">
            <div className="container">

                
                {
                    secData.map((secItem)=>{
                        return <div className="footer__box" key={secItem.id}>
                        <p className="footer__title">{secItem.title}</p>
                        <ul className="footer__list">
                            <li className="footer__item"><a href="" className="footer__link">{secItem.oneText}</a></li>
                            <li className="footer__item"><a href="" className="footer__link">{secItem.twoText}</a></li>
                            <li className="footer__item"><a href="" className="footer__link">{secItem.threeText}</a></li>
                            <li className="footer__item"><a href="" className="footer__link">{secItem.fourText}</a></li>
                            <li className="footer__item"><a href="" className="footer__link">{secItem.fiveText}</a></li>
                    </ul>
                    </div>
                  })
                }
                <div className="footer__box">
                    <p className="footer__title">Customer Services</p>
                    <ul className="footer__list">
                        <li className="footer__item"><a href="" className="footer__link"><img src={facebook} alt="facebook"/> Contact Us</a></li>
                        <li className="footer__item"><a href="" className="footer__link"><img src={twitter} alt="twitter"/> Shipping</a></li>
                        <li className="footer__item"><a href="" className="footer__link"><img src={vimeo} alt="vimeo"/> Click & Collect</a></li>
                        <li className="footer__item"><a href="" className="footer__link"><img src={pinterest} alt="pinterest"/> Returns</a></li>
                        <li className="footer__item"><a href="" className="footer__link"><img src={youtube} alt="youtube"/> FAQ’s</a></li>
                    </ul>
                </div>


                <div className="footer__box">
                    <p className="footer__title">Join The Club</p>
                    <div className="footer__search">
                        <input type="text" className="footer__input" placeholder="E-mail Address*"/>
                        <button className="footer__button">JOIN</button>
                    </div>
                    <p className="footer__text">Sign me up to receive emails on new product arrivals, special offers and exclusive events.</p>
                    <div className="footer__cards">
                        <a href="" className="footer__card"><img src={visa} alt="visa"/></a>
                        <a href="" className="footer__card"><img src={paypal} alt="paypal"/></a>
                        <a href="" className="footer__card"><img src={discover} alt="discover"/></a>
                        <a href="" className="footer__card"><img src={mastercard} alt="mastercard"/></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__bottom">
            <p className="footer__author">Designed and Powered by <span>ZICO</span></p>
        </div>
    </footer>
    </div>
  )
}

export default Footer