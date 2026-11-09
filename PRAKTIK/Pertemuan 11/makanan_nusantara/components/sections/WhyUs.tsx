import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { features } from "@/data/features";
import FeatureCard from "@/components/ui/FeatureCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./WhyUs.module.css";

export default function WhyUs() {
  return (
    <section id="mengapa-kami" className={styles.section}>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Mengapa Kami"
            title="Alasan Pelanggan Kembali Lagi"
            subtitle="Kami percaya masakan Indonesia terbaik lahir dari bahan yang jujur, resep yang dijaga, dan pelayanan yang tulus."
          />
        </Reveal>

        <Row className="g-4">
          {features.map((feature, i) => (
            <Col key={feature.title} xs={12} sm={6} lg={3}>
              <Reveal delay={i * 100} className="h-100">
                <FeatureCard {...feature} />
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
