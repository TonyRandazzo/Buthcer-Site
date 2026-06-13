function Media({ type, src, alt = "" }) {
  return (
    <div className="media">
      {type === "image" ? (
        <img className="media__el" src={src} alt={alt} loading="lazy" />
      ) : (
        <video
          className="media__el"
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      )}
    </div>
  );
}

export default Media;
