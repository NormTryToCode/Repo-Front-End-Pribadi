"use client";

import Image from "next/image";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { slides } from "@/data/slides";
import styles from "./HeroCarousel.module.css";

export default function HeroCarousel() {
  return (
    <section id="beranda" aria-label="Menu unggulan" className={styles.hero}>
      <Carousel fade interval={5000} pause="hover" className={styles.carousel}>
        {slides.map((slide, index) => (
          <Carousel.Item key={slide.id}>
            <div className={styles.slide}>
              {/* Latar: foto yang sama, di-blur agar tetap halus di layar lebar */}
              <Image
                src={slide.image}
                alt=""
                fill
                sizes="50vw"
                priority={index === 0}
                aria-hidden="true"
                className={styles.backdrop}
              />
              <div className={styles.overlay} />

              <Container className={styles.content}>
                <Row className="align-items-center g-4 g-lg-5">
                  <Col xs={12} lg={6} className={`${styles.textCol} order-2 order-lg-1`}>
                    <span className={styles.category}>{slide.category}</span>
                    <h1 className={styles.title}>{slide.title}</h1>
                    <p className={styles.description}>{slide.description}</p>
                    <div className="d-flex flex-wrap gap-2 gap-md-3">
                      <Button as="a" href="#tentang-kami" className="btn-nusa">
                        Kenali Kami
                      </Button>
                      <Button as="a" href="#mengapa-kami" className="btn-nusa-outline" variant="outline-light">
                        Mengapa Kami
                      </Button>
                    </div>
                  </Col>

                  <Col xs={12} lg={6} className="order-1 order-lg-2">
                    <div className={styles.frame}>
                      <Image
                        src={slide.image}
                        alt={slide.imageAlt}
                        fill
                        sizes="(min-width: 992px) 45vw, 90vw"
                        priority={index === 0}
                        className={styles.photo}
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
