import { Link } from 'react-router-dom';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>О компании</h1>
          <p>Команда профессионалов с 2012 года</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="about-content">
            <h2>ArtCloud — искусство программировать</h2>
            <p>
              С 2012 года запустили большое количество сайтов, придумали и реализовали 
              эксклюзивные решения для проектов различной сложности: от потрясающих 
              лендингов до мультифункциональных интернет-магазинов.
            </p>
            <p>
              Компания «ArtCloud» — это команда профессионалов с большим опытом работы 
              в сфере веб–разработки.
            </p>
            <p>
              Основным принципом нашей компании является тесная работа с клиентом, в ходе 
              которой мы проводим анализ вашего бизнеса и его сильных сторон, изучаем 
              основных конкурентов компании, исследуем предпочтения целевой аудитории.
            </p>
            <p>
              Все это позволяет нам создать уникальный продукт.
            </p>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Наши принципы</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Клиентоориентированность</h3>
              <p>Тесная работа с клиентом на всех этапах проекта для достижения наилучшего результата</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3>Качество</h3>
              <p>Используем проверенные технологии и лучшие практики разработки</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Сроки</h3>
              <p>Соблюдаем дедлайны и держим клиента в курсе прогресса</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Безопасность</h3>
              <p>Уделяем особое внимание защите данных и безопасности проектов</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Хотите работать с нами?</h2>
          <p>Начните проект прямо сейчас</p>
          <Link to="/contact" className="btn btn-large">
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  );
}
