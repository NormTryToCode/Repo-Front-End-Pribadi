export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "🌿",
    title: "Bahan Segar Lokal",
    description:
      "Rempah dan sayuran yang dipilih langsung dari petani dan pasar lokal agar rasa selalu segar dan otentik.",
  },
  {
    icon: "📜",
    title: "Resep Warisan",
    description:
      "Kami menjaga resep turun-temurun dari berbagai daerah tanpa mengurangi cita rasa aslinya.",
  },
  {
    icon: "✅",
    title: "Higienis & Halal",
    description:
      "Dapur kami bersih, seluruh bahan dijamin halal sehingga aman dinikmati keluarga.",
  },
  {
    icon: "🚚",
    title: "Antar Cepat",
    description:
      "Pesanan dikemas rapi dan diantar dalam keadaan hangat, siap disantap kapan pun Anda mau.",
  },
];
