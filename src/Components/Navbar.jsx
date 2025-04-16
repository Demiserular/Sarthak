

import { FaMobileAlt, FaLaptop, FaBriefcase, FaHeartbeat, FaFlask, FaRunning, FaFilm } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = ({setCategory}) => {
  const navRef = useRef(null);
  const categories = [
    { name: "Technology", icon: <FaLaptop className="me-2" />, value: "technology" },
    { name: "Business", icon: <FaBriefcase className="me-2" />, value: "business" },
    { name: "Health", icon: <FaHeartbeat className="me-2" />, value: "health" },
    { name: "Science", icon: <FaFlask className="me-2" />, value: "science" },
    { name: "Sports", icon: <FaRunning className="me-2" />, value: "sports" },
    { name: "Entertainment", icon: <FaFilm className="me-2" />, value: "entertainment" }
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsApp</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((category) => (
              <li className="nav-item" key={category.value}>
                <div 
                  className="nav-link d-flex align-items-center" 
                  onClick={() => setCategory(category.value)}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.1,
                      color: "#2563eb",
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      color: "#fff",
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                >
                  <span className="d-none d-lg-inline">{category.icon}</span>
                  <span>{category.name}</span>
                  <span className="d-lg-none ms-2">{category.icon}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar