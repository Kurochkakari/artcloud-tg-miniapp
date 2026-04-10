import './ProcessPage.css';

const steps = [
  {
    number: '01',
    title: 'Заявка',
    description: 'Оставляете заявку или звоните нам по телефону: +375(29) 808-36-80',
  },
  {
    number: '02',
    title: 'Обсуждение',
    description: 'Обсуждаем с Вами задачу, выясняем, как Вам лучше помочь, озвучиваем ориентировочную стоимость работ.',
  },
  {
    number: '03',
    title: 'Техническое задание',
    description: 'Подробно прорабатываем проект, составляем техническое задание.',
  },
  {
    number: '04',
    title: 'Договор',
    description: 'Подписываем договор.',
  },
  {
    number: '05',
    title: 'Предоплата',
    description: 'За работу над большими проектами мы берем предоплату. Небольшие проекты и поддержка оплачивается по факту.',
  },
  {
    number: '06',
    title: 'Дизайн',
    description: 'Дизайнер рисует макеты. Показываем Вам, вносим необходимые правки. Утверждаем дизайн.',
  },
  {
    number: '07',
    title: 'Разработка',
    description: 'Верстаем и программируем, исходя из технического задания и утвержденного дизайна.',
  },
  {
    number: '08',
    title: 'Тестирование',
    description: 'Вся работа ведется на тестовом сервере, что позволит Вам видеть промежуточный результат.',
  },
  {
    number: '09',
    title: 'Контент',
    description: 'Публикуем на сайте предоставленный Вами контент.',
  },
  {
    number: '10',
    title: 'Перенос на сервер',
    description: 'Переносим сайт на боевой (постоянный) сервер.',
  },
  {
    number: '11',
    title: 'SEO',
    description: 'Производим базовую поисковую оптимизацию.',
  },
  {
    number: '12',
    title: 'Готово!',
    description: 'Сайт готов! Проверяем все внимательно.',
  },
];

export default function ProcessPage() {
  return (
    <div className="process-page">
      <section className="page-header">
        <div className="container">
          <h1>Как мы работаем</h1>
          <p>12 шагов к вашему успешному проекту</p>
        </div>
      </section>

      <section className="process-list">
        <div className="container">
          <div className="process-grid">
            {steps.map((step, index) => (
              <div key={index} className="process-card">
                <div className="process-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
