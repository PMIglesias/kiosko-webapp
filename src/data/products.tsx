const AlfajorIcon = (
  <svg viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="none" stroke="currentColor" strokeWidth="1">
    <rect x="3" y="6" width="18" height="5" rx="2.5" fill="#D4A373" stroke="#9C6644" />
    <rect x="3.5" y="11" width="17" height="4" fill="#6B4226" stroke="#4A2B15" />
    <rect x="3" y="15" width="18" height="5" rx="2.5" fill="#D4A373" stroke="#9C6644" />
  </svg>
);

const BotellaIcon = (
  <svg viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="none">
    <path d="M10 2h4v2h-4z" fill="#EF4444" />
    <path d="M11 4h2v2c1 2 2 3 2 5v9a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-9c0-2 1-3 2-5V4z" fill="#1e1e1e" />
    <rect x="8.5" y="11" width="7" height="6" fill="#EF4444" />
    <path d="M9 12h6M9 15h6" stroke="#fff" strokeWidth="1" opacity="0.8" />
  </svg>
);

const SandwichIcon = (
  <svg viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="none">
    <path d="M3 20 L21 20 L3 4 Z" fill="#FDE047" stroke="#D97706" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M3 16.5 L17.5 16.5 L3 4 Z" fill="#FCA5A5" />
    <path d="M3 14.5 L15.5 14.5 L3 4 Z" fill="#FEF08A" />
    <path d="M3 12 L13 12 L3 4 Z" fill="#FDE047" stroke="#D97706" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const CATEGORIES = [
  { id: "Todos", label: "Todo", emoji: "✨" },
  { id: "Alfajores", label: "", emoji: AlfajorIcon },
  { id: "Bebidas", label: "", emoji: BotellaIcon },
  { id: "Chocolates", label: "", emoji: "🍫" },
  { id: "Galletitas", label: "", emoji: "🍪" },
  { id: "Golosinas", label: "", emoji: "🍬" },
  { id: "Snacks", label: "", emoji: "🍟" },
  { id: "Varios", label: "", emoji: SandwichIcon },
];

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  imageFilename: string; // Utiliza esta propiedad para saber qué nombre ponerle al archivo de imagen
}

const p = (id: number, prefix: string, name: string, price: number, category: string, filename: string): Product => ({
  id,
  name,
  price,
  category,
  image: "/images/products/" + filename,
  imageFilename: filename
});

export const PRODUCTS: Product[] = [
  p(1, "ALFAJOR", "FULBITO", 300, "Alfajores", "img_00014_.png"),
  p(2, "ALFAJOR", "GOAT RIVER/BOCA", 1200, "Alfajores", "img_00017_.png"),
  p(3, "ALFAJOR", "GUAYMALLEN", 350, "Alfajores", "img_00018_.png"),
  p(4, "ALFAJOR", "GUAYMALLEN ORO/RUBI", 800, "Alfajores", "img_00021_.png"),
  p(5, "ALFAJOR", "GUAYMALLEN PLATINO", 1200, "Alfajores", "img_00020_.png"),
  p(7, "ALFAJOR", "JORGITO", 1200, "Alfajores", "img_00024_.png"),
  p(8, "ALFAJOR", "PUAN CHOCOLATE/MAICENA 6U", 1800, "Alfajores", "img_00036_.png"),
  p(9, "ALFAJOR", "TRIPLE AGUILA", 2000, "Alfajores", "img_00046_.png"),
  p(10, "ALFAJOR", "TRIPLE BLOCK", 2000, "Alfajores", "img_00047_.png"),
  p(11, "ALFAJOR", "TRIPLE MILKA", 2000, "Alfajores", "img_00048_.png"),
  p(12, "ALFAJOR", "TRIPLE PEPITOS", 2000, "Alfajores", "img_00049_.png"),
  p(13, "ALFAJOR", "TRIPLE SUSCHEN", 400, "Alfajores", "img_00050_.png"),
  p(14, "ALFAJOR", "TRIPLE TOFI", 2000, "Alfajores", "img_00051_.png"),
  p(15, "BEBIDAS", "AGUA VILLAMANAOS 600ML", 800, "Bebidas", "img_00001_.png"),
  p(16, "BEBIDAS", "BAGGIO 200ML", 800, "Bebidas", "img_00002_.png"),
  p(17, "BEBIDAS", "GASEOSA MANAOS 1.5L", 1600, "Bebidas", "img_00015_.png"),
  p(18, "BEBIDAS", "GASEOSA MANAOS 600ML", 1000, "Bebidas", "img_00016_.png"),
  p(19, "BEBIDAS", "AGUA SABORIZADA PLACER 600ml", 900, "Bebidas", "img_00053_.png"),
  p(20, "BEBIDAS", "AGUA SABORIZADA PLACER 1,5L", 1600, "Bebidas", "img_00052_.png"),
  p(21, "CHICLE", "FIERITA", 75, "Golosinas", "img_00013_.png"),
  p(22, "CHICLE", "FIERITA RECARGADO", 100, "Golosinas", "img_00012_.png"),
  p(23, "CHICLE", "TOPLINE", 900, "Golosinas", "img_00043_.png"),
  p(24, "CHOCOLATE", "BOMBON NEVARES SMACK", 350, "Chocolates", "img_00005_.png"),
  p(25, "CHOCOLATE", "HAMLET", 1000, "Chocolates", "img_00023_.png"),
  p(26, "CHOCOLATE", "BOCADITO BEL", 250, "Chocolates", "img_00004_.png"),
  p(27, "CHUPETIN", "EVOLUTION", 300, "Golosinas", "img_00011_.png"),
  p(28, "GALLETITAS", "BISCOCHITOS DON SATUR", 1500, "Galletitas", "img_00003_.png"),
  p(29, "GALLETITAS", "CELOSAS", 800, "Galletitas", "img_00009_.png"),
  p(30, "GALLETITAS", "MINI OREO", 1300, "Galletitas", "img_00026_.png"),
  p(31, "GALLETITAS", "PITUSAS", 1300, "Galletitas", "img_00033_.png"),
  p(32, "GALLETITAS", "SURTIDAS", 1500, "Galletitas", "img_00040_.png"),
  p(33, "GALLETITAS", "TRIO PEPAS", 1200, "Galletitas", "img_00045_.png"),
  p(34, "OBLEA", "CUBANITO OBLITA", 150, "Golosinas", "img_00010_.png"),
  p(35, "OBLEA", "NEVARES SMACK", 400, "Golosinas", "img_00027_.png"),
  p(36, "OBLEA", "OBLITA 50G", 500, "Golosinas", "img_00028_.png"),
  p(37, "PASTILLAS", "BULLDOG MIX/ACIDAS", 500, "Golosinas", "img_00008_.png"),
  p(38, "PASTILLAS", "HALLS", 800, "Golosinas", "img_00022_.png"),
  p(39, "PASTILLAS", "MENTITAS", 500, "Golosinas", "img_00025_.png"),
  p(40, "Pochoclo", "POCHOCLO BIGGYS", 1200, "Snacks", "img_00035_.png"),
  p(41, "REGALIZ", "BULLDOG ACIDO 18G", 500, "Golosinas", "img_00006_.png"),
  p(42, "REGALIZ", "BULLDOG ACIDO 60G", 1000, "Golosinas", "img_00007_.png"),
  p(43, "REGALIZ", "TNT TUBI", 1000, "Golosinas", "img_00042_.png"),
  p(44, "SNACKS", "PALITOS SALADOS NIKITOS 28G", 400, "Snacks", "img_00029_.png"),
  p(45, "SNACKS", "PAPAS FRITAS NIKITOS CLASICA", 1300, "Snacks", "img_00030_.png"),
  p(46, "SNACKS", "PAPAS FRITAS NIKITOS SABORIZADAS", 1500, "Snacks", "img_00031_.png"),
  p(47, "SNACKS", "PIPAS", 400, "Snacks", "img_00032_.png"),
  p(48, "SNACKS", "PIZZITOS NIKITOS", 800, "Snacks", "img_00034_.png"),
  p(49, "SNACKS", "PUFLITOS/TUTUCAS NIKITOS", 900, "Snacks", "img_00037_.png"),
  p(50, "SNACKS", "REX ORIGINAL", 1500, "Snacks", "img_00038_.png"),
  p(51, "SNACKS", "SALADIX", 1000, "Snacks", "img_00039_.png"),
  p(52, "SNACKS", "TALITAS URQUIZA", 1500, "Snacks", "img_00041_.png"),
  p(53, "VARIOS", "TOSTADO MIGA", 1200, "Varios", "img_00044_.png"),
];
