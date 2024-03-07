import { ElectronDialogHandler, ElectronHandler } from '../main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    electronDialog: ElectronDialogHandler;
  }
}

export {};
