import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { TelegramWebApp, TelegramUser } from '../types/telegram';

interface TelegramContextType {
  tg: TelegramWebApp | null;
  user?: TelegramUser;
  themeParams: Record<string, string>;
  viewportHeight: number;
  viewportStableHeight: number;
  headerColor: string;
  backgroundColor: string;
  expand: () => void;
  close: () => void;
  ready: () => void;
  setHeaderColor: (color: string) => void;
  setBackgroundColor: (color: string) => void;
}

const TelegramContext = createContext<TelegramContextType | null>(null);

interface TelegramProviderProps {
  children: ReactNode;
}

export function TelegramProvider({ children }: TelegramProviderProps) {
  const [tg, setTg] = useState<TelegramWebApp | null>(null);
  const [user, setUser] = useState<TelegramUser | undefined>();
  const [themeParams, setThemeParams] = useState<Record<string, string>>({});
  const [viewportHeight, setViewportHeight] = useState<number>(window.innerHeight);
  const [viewportStableHeight, setViewportStableHeight] = useState<number>(window.innerHeight);
  const [headerColor, setHeaderColorState] = useState<string>('#ffffff');
  const [backgroundColor, setBackgroundColorState] = useState<string>('#ffffff');

  useEffect(() => {
    const telegram = window.Telegram;
    
    if (telegram?.Telegram) {
      const webApp = telegram.Telegram;
      setTg(webApp);
      setUser(webApp.initDataUnsafe?.user);
      setThemeParams(webApp.themeParams || {});
      setViewportHeight(webApp.viewportHeight || window.innerHeight);
      setViewportStableHeight(webApp.viewportStableHeight || window.innerHeight);
      setHeaderColorState(webApp.headerColor || '#ffffff');
      setBackgroundColorState(webApp.backgroundColor || '#ffffff');
      
      webApp.ready();
      webApp.expand();
    } else {
      const mockTg: TelegramWebApp = {
        ready: () => {},
        expand: () => {},
        close: () => {},
        setHeaderColor: (color: string) => setHeaderColorState(color),
        setBackgroundColor: (color: string) => setBackgroundColorState(color),
        headerColor: '#ffffff',
        backgroundColor: '#ffffff',
        themeParams: {},
        initDataUnsafe: {},
        viewportHeight: window.innerHeight,
        viewportStableHeight: window.innerHeight,
      };
      setTg(mockTg);
    }
  }, []);

  const expand = () => tg?.expand();
  const close = () => tg?.close();
  const ready = () => tg?.ready();
  const setHeaderColor = (color: string) => {
    tg?.setHeaderColor(color);
    setHeaderColorState(color);
  };
  const setBackgroundColor = (color: string) => {
    tg?.setBackgroundColor(color);
    setBackgroundColorState(color);
  };

  if (!tg) return null;

  return (
    <TelegramContext.Provider
      value={{
        tg,
        user,
        themeParams,
        viewportHeight,
        viewportStableHeight,
        headerColor,
        backgroundColor,
        expand,
        close,
        ready,
        setHeaderColor,
        setBackgroundColor,
      }}
    >
      {children}
    </TelegramContext.Provider>
  );
}

export function useTelegram() {
  const context = useContext(TelegramContext);
  if (!context) {
    throw new Error('useTelegram must be used within a TelegramProvider');
  }
  return context;
}
