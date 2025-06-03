'use client';

import { useState, useEffect } from 'react';
import './page.css';

interface FloatingShape {
  id: number;
  size: number;
  left: number;
  top: number;
  delay: number;
}

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const floatingShapes: FloatingShape[] = [
    { id: 1, size: 80, left: 10, top: 20, delay: 0 },
    { id: 2, size: 120, left: 85, top: 60, delay: 2000 },
    { id: 3, size: 60, left: 20, top: 80, delay: 4000 },
    { id: 4, size: 100, left: 70, top: 15, delay: 1000 },
  ];

  useEffect(() => {
    // Page loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Mouse move handler for interactive particles
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create particle effect
      const newParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setParticles(prev => [...prev, newParticle]);
      
      // Remove particle after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 1000);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCtaClick = () => {
    // Add some interaction feedback
    console.log('CTA clicked!');
    // You can add navigation logic here
  };

  if (isLoading) {
    return (
      <div className="page-loader">
        <div className="loader-spinner"></div>
        <p className="loader-text">Loading...</p>
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* Animated Background */}
      <div className="bg-animation">
        {floatingShapes.map((shape) => (
          <div
            key={shape.id}
            className="floating-shape"
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              left: `${shape.left}%`,
              top: `${shape.top}%`,
              animationDelay: `${shape.delay}ms`,
            }}
          />
        ))}
      </div>

      {/* Interactive Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="container">
        <div className="content-card">
          <div className="hero-icon">
            <div className="icon-inner">🚀</div>
          </div>
          
          <h1 className="hero-title">Welcome to CreatorNex</h1>
          
          <p className="hero-subtitle">
            Empowering creators with cutting-edge tools and innovative solutions
          </p>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Optimized performance for seamless user experience</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <h3>Creative Tools</h3>
              <p>Professional-grade tools for every creative need</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🔐</div>
              <h3>Secure & Reliable</h3>
              <p>Enterprise-level security and 99.9% uptime</p>
            </div>
          </div>
          
          <div className="cta-section">
            <button 
              className="cta-button primary"
              onClick={handleCtaClick}
            >
              Get Started
            </button>
            
            <button className="cta-button secondary">
              Learn More
            </button>
          </div>
          
          <div className="stats-section">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">50M+</div>
              <div className="stat-label">Projects Created</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow">↓</div>
        <span>Scroll to explore</span>
      </div>
    </div>
  );
};

export default HomePage;
