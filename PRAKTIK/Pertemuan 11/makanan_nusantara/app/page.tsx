"use client";
import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection></HeroSection>
      </main>
    </div>
  );
}
