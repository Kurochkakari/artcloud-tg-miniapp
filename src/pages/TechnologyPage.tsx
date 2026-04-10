import './TechnologyPage.css';

const technologies = [
  { name: 'HTML5', icon: 'https://artcloud.by/wp-content/uploads/2021/04/html5.svg' },
  { name: 'CSS3', icon: 'https://artcloud.by/wp-content/uploads/2021/04/css3.svg' },
  { name: 'JavaScript', icon: 'https://artcloud.by/wp-content/uploads/2021/04/js.svg' },
  { name: 'Angular', icon: 'https://artcloud.by/wp-content/uploads/2021/04/angularjs.svg' },
  { name: 'PHP', icon: 'https://artcloud.by/wp-content/uploads/2021/04/php.svg' },
  { name: 'Laravel', icon: 'https://artcloud.by/wp-content/uploads/2021/04/laravel.svg' },
  { name: 'Python', icon: 'https://artcloud.by/wp-content/uploads/2021/04/python.svg' },
  { name: 'jQuery', icon: 'https://artcloud.by/wp-content/uploads/2021/04/jquery.svg' },
  { name: 'Vue', icon: 'https://artcloud.by/wp-content/uploads/2021/04/vue.svg' },
  { name: 'React', icon: 'https://artcloud.by/wp-content/uploads/2021/04/react.svg' },
  { name: 'MySQL', icon: 'https://artcloud.by/wp-content/uploads/2021/04/mysql.svg' },
  { name: 'WordPress', icon: 'https://artcloud.by/wp-content/uploads/2021/04/wordpress.svg' },
  { name: 'Joomla', icon: 'https://artcloud.by/wp-content/uploads/2021/04/joomla.svg' },
  { name: 'Bitrix', icon: 'https://artcloud.by/wp-content/uploads/2021/04/bitrix.svg' },
  { name: 'Bitrix24', icon: 'https://artcloud.by/wp-content/uploads/2024/09/logo_bitrix_24.svg' },
  { name: 'MODX', icon: 'https://artcloud.by/wp-content/uploads/2021/04/modx.svg' },
  { name: 'Git', icon: 'https://artcloud.by/wp-content/uploads/2021/04/git.svg' },
  { name: 'Photoshop', icon: 'https://artcloud.by/wp-content/uploads/2021/04/adobephotoshop.svg' },
];

export default function TechnologyPage() {
  return (
    <div className="technology-page">
      <section className="page-header">
        <div className="container">
          <h1>Наши технологии</h1>
          <p>Современный стек для качественной разработки</p>
        </div>
      </section>

      <section className="tech-intro">
        <div className="container">
          <p>
            Компания ArtCloud разрабатывает веб-сайты и мобильные приложения, используя 
            проверенные технологии программирования. Наши разработчики работают с фреймворками 
            и системами управления контентом CMS — WordPress, Bitrix 24, 1C-Bitrix и другими 
            решениями, адаптированными под задачи клиентов.
          </p>
          <p>
            Программисты компании внедряют искусственный интеллект для автоматизации процессов 
            и улучшения цифровых продуктов. Команда ArtCloud регулярно проходит курсы повышения 
            квалификации, чтобы предлагать оптимальные решения для наших клиентов.
          </p>
        </div>
      </section>

      <section className="tech-grid-section">
        <div className="container">
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon">
                  <img src={tech.icon} alt={tech.name} />
                </div>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
