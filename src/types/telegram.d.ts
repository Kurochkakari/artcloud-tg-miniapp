interface TelegramWebApp {
  ready(): void;
  expand(): void;
  close(): void;
  setHeaderColor(color: string): void;
  setBackgroundColor(color: string): void;
  headerColor: string;
  backgroundColor: string;
  themeParams: Record<string, string>;
  initDataUnsafe: {
    user?: TelegramUser;
  };
  viewportHeight: number;
  viewportStableHeight: number;
}

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}

declare global {
  interface Window {
    Telegram?: {
      Telegram?: TelegramWebApp;
    };
  }
}

export type { TelegramWebApp, TelegramUser };
