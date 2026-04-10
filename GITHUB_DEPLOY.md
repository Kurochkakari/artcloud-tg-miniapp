# Инструкция по развертыванию на GitHub Pages

## Шаг 1: Создайте репозиторий на GitHub

1. Перейдите на https://github.com/new
2. Введите имя репозитория: `artcloud-tg-miniapp`
3. Выберите **Public**
4. Нажмите **Create repository**

## Шаг 2: Подключите локальный репозиторий к GitHub

После создания репозитория GitHub покажет команды. Выполните:

```bash
cd tg-miniapp
git remote add origin https://github.com/YOUR_USERNAME/artcloud-tg-miniapp.git
git branch -M main
git push -u origin main
```

Замените `YOUR_USERNAME` на ваше имя пользователя GitHub.

## Шаг 3: Включите GitHub Pages

1. Откройте настройки репозитория: `https://github.com/YOUR_USERNAME/artcloud-tg-miniapp/settings/pages`
2. В разделе **Source** выберите:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
3. Нажмите **Save**

## Шаг 4: Дождитесь деплоя

Через 1-2 минуты сайт будет доступен по адресу:

```
https://YOUR_USERNAME.github.io/artcloud-tg-miniapp/
```

---

## Альтернатива: Deploy через GitHub Actions (рекомендуется)

После `git push` GitHub автоматически запустит GitHub Actions для деплоя.

Сайт будет доступен на том же URL.
