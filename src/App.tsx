import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  return (
    <TelegramProvider>
      <BrowserRouter>
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
      </BrowserRouter>
    </TelegramProvider>
  );
}

export default App;
