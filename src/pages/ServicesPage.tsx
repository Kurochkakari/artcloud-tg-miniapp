import { Link } from 'react-router-dom';
import './ServicesPage.css';

const services = [
  {
    id: 1,
    icon: '/assets/computer_phone.svg',
    title: 'Разработка программного обеспечения',
    description: 'Имея многолетний опыт работы в индустрии веб-разработки, наша компания поможет Вам в создании сайтов и мобильных приложений любой сложности.',
    features: [
      'Корпоративные веб-сайты',
      'Интернет-магазины',
      'Веб-приложения',
      'Мобильные приложения',
      'API и интеграции',
    ],
  },
  {
    id: 2,
    icon: '/assets/desktop_arrow.svg',
    title: 'Внедрение и сопровождение IT-систем',
    description: 'Предоставляем услуги по установке, настройке и сопровождению инфраструктурного программного обеспечения.',
    features: [
      'Системы виртуализации',
      'Операционные системы',
      'Терминальные сервисы',
      'Корпоративная почта',
      'LDAP и proxy-серверы',
    ],
  },
  {
    id: 3,
    icon: '/assets/data-protection.svg',
    title: 'Информационная безопасность',
    description: 'Анализ рисков, тесты на проникновение, установка и настройка специализированного ПО, помощь в прохождении сертификации.',
    features: [
      'Аудит безопасности',
      'Тесты на проникновение',
      'СТБ 34.101.x',
      'ISO 2700x',
      'PCI DSS, SOX',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <h1>Наши услуги</h1>
          <p>Комплексные решения для вашего бизнеса</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          {services.map((service, index) => (
            <div key={service.id} className={`service-card ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <div className="service-content">
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn">
                  Заказать услугу
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Нужна консультация?</h2>
          <p>Свяжитесь с нами, и мы поможем подобрать оптимальное решение</p>
          <Link to="/contact" className="btn btn-large">
            Получить консультацию
          </Link>
        </div>
      </section>
    </div>
  );
}
