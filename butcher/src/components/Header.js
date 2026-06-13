import { useEffect } from "react";

function Header() {
      useEffect(() => {
      const elements = document.querySelectorAll(".hero_title");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      elements.forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
  return (
    <header className="hero">
      <h1 className="hero_title">THE BUTCHER</h1>
    </header>
  );
}

export default Header;
