import Barca from "../images/collect1.png";
import Milano from "../images/collect2.png";
import Parij from "../images/collect3.png";
import Rome from "../images/collect4.png";
import jacket from "../images/jacket1.png";
import jacketSecond from "../images/jacket2.png";
import jacketThird from "../images/jacket3.png";
import jacketFourth from "../images/jacket4.png";
import basket from "../images/basket.png";
import like from "../images/like.svg";
import eye from "../images/view.svg"

const data = [
    {
        id: 1,
        images: Barca,
        text: "Barcelona"
    },
    {
        id: 2,
        images: Milano,
        text: "Milano"
    },
    {
        id: 3,
        images: Parij,
        text: "Parij"
    },
    {
        id: 4,
        images: Rome,
        text: "Rome"
    }
]

const dataSecond = [
    {
        id: 1,
        images: jacket,
        title: "Cotton-Blend-Jacket",
        text: "add to cart",
        price: "$48.00",
        basket: basket,
        like: like,
        eye: eye

    },
    {
        id: 2,
        images: jacketSecond,
        title: "Multi Pocket Jacket",
        text: "add to cart",
        price: "$59.00",
        basket: basket,
        like: like,
        eye: eye,
        out: "OUT OF STOCK"

    },
    {
        id: 3,
        images: jacketThird,
        title: "Velvet Blazer",
        text: "add to cart",
        price: "$48.00",
        basket: basket,
        like: like,
        eye: eye

    },
    {
        id: 4,
        images: jacketFourth,
        title: "Cotton-Blend-Jacket",
        text: "add to cart",
        price: " $16.00",
        basket: basket,
        like: like,
        eye: eye,
        out: "SALE"

    }
    
]

function Main() {
  return (
    
        <main>
        <section className="collect">
            <div className="container">
                {
                    data.map((item)=>{
                        return <div className="collect__box" key={item.id}>
                            <img src={item.images} alt=""  className='product__right-image'/>
                            <h3 className="product__right-title">{item.title}</h3>
                            <p className="collect__title">{item.text}</p>
                        </div>
                  })
                }
            </div>
        </section>
        <section className="project">
            <div className="project__top">
                <h3 className="project__top-title">eCommerce Ready</h3>
                <p className="project__top-text">Style your products and shop pages, add a cart widget to your header, and convert clicks into sales.</p>
            </div>
            <div className="project__bottom">
                <div className="container">
                    <p className="project__bottom-text">The Chloe Collection</p>
                    <h3 className="project__bottom-title">The Project Jacket</h3>
                    <button className="project__bottom-button">PURCHASE THEME</button>
                </div>
            </div>
        </section>
        <section className="jacket">
            <div className="jacket__top">
                <h3 className="jacket__top-title">Highly Customizable</h3>
                <p className="jacket__top-text">Style your products and shop pages, add a cart widget to your header, and convert clicks into sales.</p>
            </div>
            <div className="jacket__bottom">
                <div className="container">
                    

                    {
                    dataSecond.map((oneItem)=>{
                         let sale = "";
                        if (oneItem.out == "OUT OF STOCK" || oneItem.out == "SALE") {
                         sale = "jacket__bottom-box_sale"
                        }
                        return <div className="jacket__bottom-box" key={oneItem.id}>
                        <div className="jacket__bottom-box_top">
                            <p className={sale} >{oneItem.out}</p>
                            <img src={oneItem.images} alt="jacket 2" className="jacket__bottom-box_image"/>
                            <div className="jacket__bottom-box_icons">
                                <button className="jacket__bottom-box_basket">
                                    <img src={oneItem.basket} alt="basket"/>
                                    <span>{oneItem.text}</span>
                                </button>
                                <div className="jacket__bottom-box_info">
                                    <button><img src={oneItem.like} alt="like"/></button>
                                    <button><img src={oneItem.eye} alt="view"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="jacket__bottom-box_bottom">
                            <p className="jacket__bottom-box_name">{oneItem.title}</p>
                            <p className="jacket__bottom-box_price">{oneItem.price}</p>
                        </div>
                    </div>
                        })
                    }
                   
                </div>
            </div>
        </section>
    </main>
    
  )
}

export default Main