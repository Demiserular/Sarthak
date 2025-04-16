import image from "../assets/news.jpeg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Newsitem = ({ title, description, src, url }) => {
  const cardRef = useRef(null);
  const fallbackImage = "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=";

  const getShortDescription = (text) => {
    if (!text) return "Stay informed with real-time updates, trending headlines, and curated stories from around the world.";
    return text
      .split(" ")
      .reduce((acc, word) => {
        if ((acc + word).length <= 100) return acc + word + " ";
        return acc;
      }, "")
      .trim() + "...";
  };

  useEffect(() => {
    // Initial reveal animation
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // Hover animations
    const card = cardRef.current;
    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.03,
        y: -10,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className="card bg-dark text-white mb-4 d-inline-block mx-3" 
      style={{ 
        width: "345px",
        minHeight: "450px",
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
        transform: "translateY(0)",
        backgroundColor: "#1a1a1a",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }}>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: "15px 15px 0 0" }}>
        <img
          src={src && src !== "null" ? src : image}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
          style={{ 
            height: "200px", 
            width: "100%", 
            objectFit: "cover",
            transition: "transform 0.3s ease"
          }}
          className="card-img-top"
          alt="News"
        />
      </div>
      <div className="card-body d-flex flex-column justify-content-between" style={{ padding: "1.5rem" }}>
        <h5 className="card-title mb-3" style={{ 
          fontSize: "1.2rem", 
          lineHeight: "1.5",
          color: "#ffffff",
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          height: "3em"
        }}>{title ? title : "Breaking News"}</h5>
        <p className="card-text" style={{ 
          fontSize: "0.95rem", 
          marginBottom: "1.5rem",
          color: "rgba(255, 255, 255, 0.8)",
          lineHeight: "1.6",
          display: "-webkit-box",
          WebkitLineClamp: "3",
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}>{getShortDescription(description)}</p>
        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary" style={{
          backgroundColor: "#2563eb",
          border: "none",
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          textDecoration: "none",
          transition: "all 0.3s ease",
          display: "inline-block",
          fontWeight: "500",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          fontSize: "0.875rem"
        }}>Read More</a>
      </div>
    </div>
  );
};

export default Newsitem;


