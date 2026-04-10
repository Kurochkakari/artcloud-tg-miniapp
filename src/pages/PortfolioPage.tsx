import { useState } from 'react';
import './PortfolioPage.css';

const projects = [
  {
    id: 1,
    image: './assets/5element__by.png',
    title: '5 Элемент',
    description: 'Интернет-магазин',
    details: 'Разработка сайта с нуля, поддержка, разработка нового функционала. Синхронизация с 1С, платежные шлюзы, программы лояльности.',
    link: 'https://5element.by/',
  },
  {
    id: 2,
    image: './assets/megatop__by.png',
    title: 'Megatop',
    description: 'Интернет-магазин',
    details: 'Создание интернет-магазина с собственной CMS на Laravel и VueJS.',
    link: 'https://megatop.by/',
  },
  {
    id: 3,
    image: './assets/hovanka.jpg',
    title: 'HOVANKA',
    description: 'Корпоративный сайт',
    details: 'Разработка сайта с нуля, создание темы WordPress.',
    link: 'https://hovanka.by/',
  },
  {
    id: 4,
    image: './assets/pradius.jpg',
    title: 'Pradius Nova',
    description: 'Корпоративный сайт',
    details: 'Мультиязычная структура, система отзывов и рейтингов.',
    link: 'https://pradius.by/',
  },
  {
    id: 5,
    image: './assets/gordorstroy_by.jpg',
    title: 'Гордорстрой',
    description: 'Корпоративный сайт',
    details: 'WordPress тема, мультиязычность, оптимизация SEO.',
    link: 'https://gordorstroy.by/',
  },
  {
    id: 6,
    image: './assets/blk_by.jpg',
    title: 'БЛК Комплекс',
    description: 'Корпоративный сайт',
    details: 'Разработка сайта с нуля, поддержка.',
    link: 'https://odoblk.by/',
  },
  {
    id: 7,
    image: './assets/savtt-by.jpg',
    title: 'СавТехноТранс',
    description: 'Корпоративный сайт',
    details: 'Разработка сайта с нуля, WordPress, поддержка.',
    link: 'https://savtt.by/',
  },
  {
    id: 8,
    image: './assets/craftsman-site.jpg',
    title: 'CraftsMan',
    description: 'Площадка для ремесленников',
    details: 'Каталог товаров для ремесленников и самозанятых Беларуси.',
    link: 'https://craftsman.by/',
  },
  {
    id: 9,
    image: './assets/alfabank__by.png',
    title: 'Альфа Банк',
    description: 'Консалтинг',
    details: 'Консультационные услуги в сфере информационной безопасности.',
    link: 'https://www.alfabank.by/',
  },
  {
    id: 10,
    image: './assets/itreal.jpg',
    title: 'ЮВЛЕН-ГРУПП',
    description: 'Интернет-магазин',
    details: 'WordPress, интеграция доставки и оплаты, парсинг товаров.',
    link: 'https://itreal.store/',
  },
];

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="portfolio-page">
      <section className="page-header">
        <div className="container">
          <h1>Наши работы</h1>
          <p>Более 50 успешно реализованных проектов</p>
        </div>
      </section>

      <section className="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="portfolio-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="portfolio-overlay">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <div className="modal-info">
              <h2>{selectedProject.title}</h2>
              <p className="modal-type">{selectedProject.description}</p>
              <p className="modal-details">{selectedProject.details}</p>
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn">
                Перейти на сайт
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
