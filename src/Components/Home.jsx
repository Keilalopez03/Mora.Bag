import React from 'react'
import bannerImage from '../imagenes/banner1.png'
import Carrouselimg1 from '../imagenes/imghome.jpeg'
import Carrouselimg2 from '../imagenes/carteras.jpeg'
import Carrouselimg3 from '../imagenes/cartera.jpeg'
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
  return (
    <div className="home-container">
    <div className="banner">
        <h1>Bienvenidos a Mora Bag</h1>
        <img src={bannerImage} alt="Banner" />
    </div>
    <div className="carousel-container">
        <Carousel>
            <Carousel.Item>
                <img src={Carrouselimg1} alt="carrousel" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={Carrouselimg2} alt="carrousel" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={Carrouselimg3} alt="carrousel" />
            </Carousel.Item>
        </Carousel>
    </div>
</div>
);
};

export default Home