import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { company } from "@/data/company";
import { navItems } from "@/data/navigation";
import { slides } from "@/data/slides";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="kontak" className={styles.footer}>
      <div className="batik-strip" aria-hidden="true" />

      <Container className={styles.body}>
        <Row className="g-4 g-lg-5">
          <Col xs={12} lg={4}>
            <h3 className={styles.brand}>{company.name}</h3>
            <p className={styles.muted}>{company.tagline}</p>
            <ul className={`${styles.list} ${styles.socials}`}>
              {company.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className={styles.social}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={6} lg={2}>
            <h4 className={styles.heading}>Navigasi</h4>
            <ul className={styles.list}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={styles.link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={6} lg={3}>
            <h4 className={styles.heading}>Menu Favorit</h4>
            <ul className={styles.list}>
              {slides.map((slide) => (
                <li key={slide.id} className={styles.muted}>
                  {slide.title}
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={12} lg={3}>
            <h4 className={styles.heading}>Hubungi Kami</h4>
            <ul className={styles.list}>
              <li className={styles.muted}>{company.address}</li>
              <li>
                <a href={`mailto:${company.email}`} className={styles.link}>
                  {company.email}
                </a>
              </li>
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className={styles.link}>
                  {company.phone}
                </a>
              </li>
              <li className={styles.muted}>{company.hours}</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div className={styles.bottom}>
        <Container>
          <small>© 2026 {company.name}. Hak cipta dilindungi.</small>
        </Container>
      </div>
    </footer>
  );
}
