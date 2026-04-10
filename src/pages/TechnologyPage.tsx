import './TechnologyPage.css';

const technologies = [
  { name: 'HTML5', icon: './assets/html5.svg' },
  { name: 'CSS3', icon: './assets/css3.svg' },
  { name: 'JavaScript', icon: './assets/js.svg' },
  { name: 'Angular', icon: './assets/angularjs.svg' },
  { name: 'PHP', icon: './assets/php.svg' },
  { name: 'Laravel', icon: './assets/laravel.svg' },
  { name: 'Python', icon: './assets/python.svg' },
  { name: 'jQuery', icon: './assets/jquery.svg' },
  { name: 'Vue', icon: './assets/vue.svg' },
  { name: 'React', icon: './assets/react.svg' },
  { name: 'MySQL', icon: './assets/mysql.svg' },
  { name: 'WordPress', icon: './assets/wordpress.svg' },
  { name: 'Joomla', icon: './assets/joomla.svg' },
  { name: 'Bitrix', icon: './assets/bitrix.svg' },
  { name: 'Bitrix24', icon: './assets/logo_bitrix_24.svg' },
  { name: 'MODX', icon: './assets/modx.svg' },
  { name: 'Git', icon: './assets/git.svg' },
  { name: 'Photoshop', icon: './assets/adobephotoshop.svg' },
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
