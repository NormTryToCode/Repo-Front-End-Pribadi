"use client";

import { useEffect, useState } from "react";


export default function useActiveSection(ids: string[], offset = 72) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join("|");

  useEffect(() => {
    const list = key.split("|");
    let ticking = false;

    const compute = () => {
      ticking = false;
      const doc = document.documentElement;

      // Di dasar halaman, section terakhir (footer) dianggap aktif.
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
        setActive(list[list.length - 1]);
        return;
      }

      const line = offset + window.innerHeight * 0.25;
      let current = list[0];
      for (const id of list) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [key, offset]);

  return active;
}
