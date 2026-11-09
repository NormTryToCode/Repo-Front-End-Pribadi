"use client"
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const HeroSection = () => {
  const slides: Slide[] = [
    {
      title: "Mie goreng",
      subtitle: "Kuliner khas nusantara yang memadukan budaya Tionghoa dengan rempah rempah yang kaya rasa pada mie yang kenyal",
      imageUrl: "/images/makan1.webp",
    },
    {
      title: "Nasi goreng",
      subtitle: "Kuliner khas nusantara yang juga merupakan bagian dari budaya Tionghoa, dengan setiap butiran nasi yang memiliki ciri khas yang manis",
      imageUrl: "/images/makan2.webp",
    },
    {
      title: "Ketoprak",
      subtitle: "Main character from That Time I Got Reincarnated As a Slime",
      imageUrl: "/images/makan3.webp",
    }
  ]

  return (
    <Carousel fade interval={4000} data-bs-theme="dark">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "60vh",
            }}>
          </div>
          <Carousel.Caption>
            <h1 className="display-4 fw-bold">{slide.title}</h1>
            <p className="lead">{slide.subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
      )}
    </Carousel>
  )
}

export default HeroSection;

