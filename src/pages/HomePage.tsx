import { Link } from 'react-router-dom';
import { useTelegram } from '../hooks/useTelegram';
import './HomePage.css';

export default function HomePage() {
  const { ready } = useTelegram();

  const handleContact = () => {
    ready();
  };

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1>Разработка сайтов и приложений</h1>
          <div className="company-name">ArtCloud</div>
          <p className="hero-description">
            Создаем современные веб-решения для вашего бизнеса с 2012 года
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn" onClick={handleContact}>
              Оставить заявку
            </Link>
            <Link to="/portfolio" className="btn btn-outline">
              Наши работы
            </Link>
          </div>
          <div className="hero-showcase">
            <img src="./assets/5element__by.png" alt="Проекты" />
          </div>
        </div>
      </section>

      <section className="quick-links">
        <div className="container">
          <h2>Наши направления</h2>
          <div className="links-grid">
            <Link to="/services" className="quick-link">
              <div className="quick-link-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>Услуги</h3>
              <p>Разработка ПО, IT-системы, информационная безопасность</p>
            </Link>

            <Link to="/about" className="quick-link">
              <div className="quick-link-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>О компании</h3>
              <p>Команда профессионалов с 14-летним опытом</p>
            </Link>

            <Link to="/portfolio" className="quick-link">
              <div className="quick-link-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3>Портфолио</h3>
              <p>Более 50 успешно реализованных проектов</p>
            </Link>

            <Link to="/technology" className="quick-link">
              <div className="quick-link-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h3>Технологии</h3>
              <p>Современный стек: React, Vue, Laravel, WordPress</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">14+</div>
              <div className="stat-label">Лет опыта</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Проектов</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Клиентов</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Технологий</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Готовы начать проект?</h2>
          <p>Свяжитесь с нами для обсуждения вашей идеи</p>
          <Link to="/contact" className="btn btn-large" onClick={handleContact}>
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  );
}