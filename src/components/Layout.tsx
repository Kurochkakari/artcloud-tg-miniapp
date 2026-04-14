import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Layout.css';

const navItems = [
  { path: '/', label: 'Главная' },
  { path: '/services', label: 'Услуги' },
  { path: '/about', label: 'О нас' },
  { path: '/portfolio', label: 'Портфолио' },
  { path: '/technology', label: 'Технологии' },
  { path: '/process', label: 'Процесс' },
  { path: '/contact', label: 'Контакты' },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            <img 
              src="./assets/logo__artcloud.png" 
              alt="ArtCloud" 
            />
          </Link>

          <button 
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a href="tel:+375298083680" className="phone-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="phone-text">+375(29) 808-36-80</span>
          </a>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="./assets/logo__artcloud.png" alt="ArtCloud" />
            <p>Искусство программировать</p>
          </div>
          
          <nav className="footer-nav">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="footer-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="footer-contact">
            <a href="tel:+375298083680">+375(29) 808-36-80</a>
            <a href="mailto:info@artcloud.by">info@artcloud.by</a>
          </div>

          <div className="footer-social">
            <a href="https://www.facebook.com/artcloud.by" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://twitter.com/ArtCloud_BY" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/artcloud.by/about/" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>

          <p className="footer-copyright">© 2012-2026 ArtCloud. Все права защищены.</p>
        </div>
      </footer>

      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </div>
  );
}
