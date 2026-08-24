import { useState, useEffect, useRef } from "react";
import { CATEGORIES, Product, PRODUCTS } from "../data/products";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let scrolled = false;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (!scrolled && currentScroll > 60) {
        scrolled = true;
        setIsScrolled(true);
      } else if (scrolled && currentScroll < 10) {
        scrolled = false;
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (mediaQuery.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const filtered =
    activeCategory === "Todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-[110vh] flex flex-col bg-background text-foreground font-sans select-none">
      {/* Header */}
      <header
        className="sticky top-0 z-20 px-4"
        style={{
          paddingTop: "max(1.25rem, env(safe-area-inset-top))",
          background: "var(--background)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* Title row */}
        <div className="mb-2 transition-all duration-300">
          <h1
            className={`font-black leading-none tracking-tight text-foreground transition-all duration-300 ${
              isScrolled ? "text-[1.1rem] text-center" : "text-[1.6rem]"
            }`}
          >
            Kiosco Ely
          </h1>
          <p className={`font-bold transition-all duration-300 ${
              isScrolled ? "text-primary text-[18px] text-center mt-0.5" : "text-muted-foreground text-[11px] mt-0.5"
            }`}>
            alias: kioscoelida.mp
          </p>
        </div>

        {/* Category tabs */}
        <div
          className={`flex w-full justify-between items-center transition-all duration-300 overflow-hidden ${
            isScrolled ? "h-0 opacity-0" : "h-8 opacity-100 mt-1"
          }`}
        >
          {CATEGORIES.map(({ id, label, emoji }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className="flex items-center justify-center h-8 px-2 rounded-full text-[12px] font-black transition-all duration-200"
              style={
                activeCategory === id
                  ? {
                      background: "var(--foreground)",
                      color: "var(--background)",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
                    }
                  : {
                      background: "var(--muted)",
                      color: "var(--muted-foreground)",
                    }
              }
            >
              {id === "Todos" ? <span>Todo</span> : <span className="text-lg">{emoji}</span>}
            </button>
          ))}
        </div>
      </header>

      {/* Product grid */}
      <main className="px-2.5 pb-4 pt-3 flex-1">
        <div className="grid grid-cols-3 gap-2">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </main>

      <footer className="px-4 py-3 mt-auto">
        <p className="text-[10px] text-muted-foreground text-right italic">
          diseñado por PMI 2026
        </p>
      </footer>
    </div>
  );
}

function ProductCard({
  product,
}: {
  product: Product;
}) {
  const [pressed, setPressed] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const touchPos = useRef<{ x: number; y: number } | null>(null);

  return (
    <>
      <div
        className="rounded-2xl overflow-hidden cursor-pointer"
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
          transform: pressed ? "scale(0.94)" : "scale(1)",
          transition: "transform 0.1s ease",
          boxShadow: pressed
            ? "0 2px 8px rgba(0,0,0,0.10)"
            : "0 2px 12px rgba(0,0,0,0.04)",
        }}
        onPointerDown={(e) => {
          setPressed(true);
          touchPos.current = { x: e.clientX, y: e.clientY };
        }}
        onPointerUp={() => setPressed(false)}
        onPointerLeave={() => setPressed(false)}
        onPointerCancel={() => setPressed(false)}
        onClick={(e) => {
          if (touchPos.current) {
            const dx = Math.abs(e.clientX - touchPos.current.x);
            const dy = Math.abs(e.clientY - touchPos.current.y);
            if (dx > 10 || dy > 10) {
              return;
            }
          }
          setIsEnlarged(true);
        }}
      >
        {/* Image */}
        <div className="w-full aspect-square overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-1"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 p-2 pt-8 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex items-end">
            <p className="font-bold text-[11px] leading-tight text-white w-full text-left" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
              {product.name}
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="px-2 pt-[7px] pb-[8px]">
          <p className="font-black leading-none text-right text-[19px] text-foreground">
            ${product.price}
          </p>
        </div>
      </div>

      {/* Full screen overlay */}
      {isEnlarged && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
          onClick={() => setIsEnlarged(false)}
        >
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-auto max-h-[85vh] object-contain rounded-xl drop-shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
