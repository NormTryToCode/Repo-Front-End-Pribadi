export interface NavItem {
  id: string;
  label: string;
}

/** id harus sama dengan id pada <section> / <footer> di halaman. */
export const navItems: NavItem[] = [
  { id: "beranda", label: "Beranda" },
  { id: "mengapa-kami", label: "Mengapa Kami" },
  { id: "tentang-kami", label: "Tentang Kami" },
  { id: "kontak", label: "Kontak" },
];
