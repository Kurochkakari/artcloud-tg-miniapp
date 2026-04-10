import { useState } from 'react';
import { useTelegram } from '../hooks/useTelegram';
import './ContactPage.css';

export default function ContactPage() {
  const { ready } = useTelegram();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ready();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Контакты</h1>
          <p>Свяжитесь с нами любым удобным способом</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Контактная информация</h2>
              <p>Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом.</p>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <strong>Телефон</strong>
                  <a href="tel:+375298083680">+375(29) 808-36-80</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:info@artcloud.by">info@artcloud.by</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <strong>Адрес</strong>
                  <span>220125, г.Минск, ул.Острошицкая 6, пом. 148, комната 2/16</span>
                </div>
              </div>

              <div className="social-links">
                <a href="https://www.facebook.com/artcloud.by" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/ArtCloud_BY" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/artcloud.by/about/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3>Заявка отправлена!</h3>
                  <p>Спасибо за обращение. Мы свяжемся с вами в ближайшее время.</p>
                  <button className="btn" onClick={() => setSubmitted(false)}>
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Оставить заявку</h2>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Ваш email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Ваш телефон"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Сообщение"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-full">
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=27.436692%2C53.946684&z=16&pt=27.436692%2C53.946684%2Cpm2rdm"
            width="100%"
            height="300"
            frameBorder="0"
            allowFullScreen
            title="ArtCloud Location"
          />
        </div>
      </section>
    </div>
  );
}
