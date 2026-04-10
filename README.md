# ArtCloud Telegram MiniApp

Версия сайта artcloud.by для Telegram MiniApp.

## Структура проекта

```
tg-miniapp/
├── src/
│   ├── components/     # Компоненты
│   │   └── Layout.tsx # Основной layout с навигацией
│   ├── hooks/          # React хуки
│   │   └── useTelegram.tsx  # Интеграция с Telegram WebApp SDK
│   ├── pages/          # Страницы (каждая секция сайта)
│   │   ├── HomePage.tsx        # Главная
│   │   ├── ServicesPage.tsx    # Услуги
│   │   ├── AboutPage.tsx       # О компании
│   │   ├── PortfolioPage.tsx   # Портфолио
│   │   ├── TechnologyPage.tsx  # Технологии
│   │   ├── ProcessPage.tsx     # Как мы работаем
│   │   └── ContactPage.tsx    # Контакты
│   ├── styles/         # Глобальные стили
│   │   └── global.css
│   ├── types/          # TypeScript типы
│   │   └── telegram.d.ts
│   ├── App.tsx         # Главный компонент с роутингом
│   └── main.tsx        # Точка входа
├── public/             # Статические файлы
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

## Страницы

| Маршрут | Описание |
|---------|----------|
| `/` | Главная страница с Hero секцией |
| `/services` | Услуги компании |
| `/about` | О компании |
| `/portfolio` | Портфолио проектов |
| `/technology` | Технологии |
| `/process` | Как мы работаем (12 шагов) |
| `/contact` | Контакты и форма обратной связи |

## Адаптивный дизайн

- **Мобильные телефоны**: < 768px
- **Планшеты**: 768px - 1023px
- **Десктоп**: ≥ 1024px

## Разработка

```bash
# Установка зависимостей
npm install

# Режим разработки
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр продакшен сборки
npm run preview
```

## Telegram MiniApp

Проект интегрирован с Telegram WebApp SDK:
- Автоматическое раскрытие на полный экран
- Адаптация цветовой схемы под тему Telegram
- Поддержка хaptic feedback (вибрация)
- Работа с данными пользователя

## Деплой

Для деплоя в Telegram MiniApp:

1. Собрать проект: `npm run build`
2. Загрузить содержимое папки `dist` на хостинг с HTTPS
3. Настроить Telegram Bot через @BotFather
4. Указать URL MiniApp в настройках бота

## Технологии

- React 18
- TypeScript
- Vite
- React Router DOM
- CSS3 (адаптивный дизайн)
- Telegram WebApp SDK
