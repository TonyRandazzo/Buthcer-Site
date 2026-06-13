function Section({ className = "", layout = "", children }) {
  return (
    <section className={`section section--${layout} ${className}`}>
      <div className="section__inner">{children}</div>
    </section>
  );
}

export default Section;
