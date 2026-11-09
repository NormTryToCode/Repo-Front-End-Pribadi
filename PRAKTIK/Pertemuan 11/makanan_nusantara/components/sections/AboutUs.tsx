import Image from "next/image";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { company, stats } from "@/data/company";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import StatItem from "@/components/ui/StatItem";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section id="tentang-kami" className={styles.section}>
      <Container>
        <Row className="align-items-center g-5">
          <Col xs={12} lg={6}>
            <Reveal>
              <div className={styles.collage}>
                <div className={styles.main}>
                  <Image
                    src="/images/menu/mie-ayam.webp"
                    alt="Mie ayam hangat dengan topping ayam cincang"
                    fill
                    sizes="(min-width: 992px) 40vw, 90vw"
                    className={styles.img}
                  />
                </div>
                <div className={styles.secondary}>
                  <Image
                    src="/images/menu/nasi-goreng.webp"
                    alt="Nasi goreng udang dengan kerupuk"
                    fill
                    sizes="(min-width: 992px) 20vw, 45vw"
                    className={styles.img}
                  />
                </div>
                <div className={styles.badge}>
                  <strong>Sejak 2015</strong>
                  <span>Melayani dengan rasa</span>
                </div>
              </div>
            </Reveal>
          </Col>

          <Col xs={12} lg={6}>
            <Reveal delay={150}>
              <SectionHeading
                align="start"
                eyebrow="Tentang Kami"
                title={`Mengenal ${company.name}`}
              />
              <p className={styles.text}>
                {company.name} berawal dari dapur keluarga kecil yang ingin
                memperkenalkan kekayaan kuliner Indonesia kepada lebih banyak
                orang. Dari mie goreng yang harum rempah hingga gado-gado yang
                segar, setiap hidangan kami masak dengan resep yang dijaga dari
                generasi ke generasi.
              </p>
              <p className={styles.text}>
                Misi kami sederhana: menghadirkan rasa rumah dan kebanggaan
                akan masakan Nusantara di setiap piring, dengan bahan lokal yang
                segar dan proses yang higienis.
              </p>

              <div className={styles.stats}>
                {stats.map((stat) => (
                  <StatItem key={stat.label} {...stat} />
                ))}
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
