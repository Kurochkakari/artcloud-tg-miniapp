import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { TelegramProvider } from './hooks/useTelegram';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import TechnologyPage from './pages/TechnologyPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';

function App() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Скроллбар - серый, при взаимодействии голубой */
      * {
        scrollbar-width: thin;
        scrollbar-color: #06b6d4 #94a3b8;
      }
      
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #94a3b8 !important;
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #94a3b8 !important;
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #06b6d4 !important;
      }
      
      ::-webkit-scrollbar-thumb:active {
        background: #06b6d4 !important;
      }
      
      /* Только изображение в портфолио - голубое свечение при наведении */
      .portfolio-image {
        position: relative;
        overflow: hidden;
        border-radius: 12px;
      }
      
      .portfolio-image img {
        transition: all 0.4s ease;
      }
      
      .portfolio-card:hover .portfolio-image img {
        transform: scale(1.05);
        filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.8));
      }
      
      .portfolio-info {
        padding: 16px;
        text-align: left;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <TelegramProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="technology" element={<TechnologyPage />} />
            <Route path="process" element={<ProcessPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </TelegramProvider>
  );
}

export default App;
