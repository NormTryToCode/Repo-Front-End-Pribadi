"use client";

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BsNavbar from "react-bootstrap/Navbar";
import { navItems } from "@/data/navigation";
import { company } from "@/data/company";
import useActiveSection from "@/hooks/useActiveSection";
import styles from "./Navbar.module.css";

const sectionIds = navItems.map((item) => item.id);

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const activeId = useActiveSection(sectionIds, 72);

  return (
    <BsNavbar
      sticky="top"
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      data-bs-theme="dark"
      className={styles.navbar}
    >
      <Container>
        <BsNavbar.Brand href="#beranda" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true">
            N
          </span>
          <span>{company.name}</span>
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="main-nav" aria-label="Buka menu navigasi" />

        <BsNavbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <Nav.Link
                  key={item.id}
                  href={`#${item.id}`}
                  active={isActive}
                  onClick={() => setExpanded(false)}
                  className={`${styles.link} ${isActive ? styles.active : ""}`}
                >
                  {item.label}
                </Nav.Link>
              );
            })}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
