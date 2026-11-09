export interface Slide {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const slides: Slide[] = [
  {
    id: "mie-goreng",
    category: "Hidangan Mie",
    title: "Mie Goreng",
    description:
      "Mie kenyal dengan bumbu rempah yang meresap, hasil perpaduan budaya Tionghoa dan cita rasa Nusantara yang kaya.",
    image: "/images/menu/mie-goreng.webp",
    imageAlt: "Sepiring mie goreng dengan irisan tomat dan sayuran",
  },
  {
    id: "nasi-goreng",
    category: "Hidangan Nasi",
    title: "Nasi Goreng",
    description:
      "Setiap butir nasi berpadu dengan kecap manis, bawang goreng, dan udang segar. Favorit dari Sabang sampai Merauke.",
    image: "/images/menu/nasi-goreng.webp",
    imageAlt: "Nasi goreng udang dengan kerupuk dan irisan timun",
  },
  {
    id: "ketoprak",
    category: "Hidangan Betawi",
    title: "Ketoprak",
    description:
      "Lontong, tahu, dan bihun disiram saus kacang gurih-manis, lalu ditutup kerupuk renyah. Sarapan khas Jakarta.",
    image: "/images/menu/ketoprak.webp",
    imageAlt: "Ketoprak dengan lontong, tahu, bihun, dan saus kacang",
  },
  {
    id: "gado-gado",
    category: "Hidangan Sayur",
    title: "Gado-Gado",
    description:
      "Sayuran rebus segar, tahu, dan telur dengan siraman bumbu kacang kental. Segar, mengenyangkan, dan seimbang.",
    image: "/images/menu/gado-gado.webp",
    imageAlt: "Gado-gado di atas daun pisang dengan telur dan bumbu kacang",
  },
  {
    id: "mie-ayam",
    category: "Hidangan Mie",
    title: "Mie Ayam",
    description:
      "Mie lembut bertabur ayam cincang berbumbu dan tahu goreng, disajikan hangat bersama sayur hijau.",
    image: "/images/menu/mie-ayam.webp",
    imageAlt: "Semangkuk mie ayam dengan topping ayam cincang dan tahu",
  },
];
