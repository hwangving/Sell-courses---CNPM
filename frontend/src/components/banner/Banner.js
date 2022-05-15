import FlashSale from "./images/flash_sale.jpg"
import BannerPink from "./images/banner_pink.png"
import Modal from "./images/moda.jpg"
import Bambaska from "./images/bambaska.jpg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
};

export default function Banner() {
    return (
        // <div className="container">
        <div className="banner__container">
            <img src='https://nordiccoder.com/app/uploads/2020/01/58-developer.jpg?fbclid=IwAR3P9dWudPa7YjJb22WrY8fDG8QRnb1ifZEqte5rfKb-A_TunEv4vvKlKJE' alt='' className="banner__image" />
        </div>
        // </div>
    )
}
