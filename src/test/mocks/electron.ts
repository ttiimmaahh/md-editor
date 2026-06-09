import { tmpdir } from 'os'
import { join } from 'path'

export const app = {
  getName: (): string => 'Praxis',
  getPath: (name: string): string => join(tmpdir(), 'praxis-test-electron', name),
  getVersion: (): string => '0.0.0-test',
  isPackaged: false,
  on: (): void => {},
  quit: (): void => {},
  whenReady: async (): Promise<void> => {}
}

export class BrowserWindow {
  static getAllWindows(): BrowserWindow[] {
    return []
  }

  loadURL(): void {}
  on(): void {}
  webContents = {
    send: (): void => {}
  }
}

export const nativeTheme = {
  on: (): void => {},
  shouldUseDarkColors: false,
  themeSource: 'system'
}

export const screen = {
  getPrimaryDisplay: (): { workArea: { width: number; height: number } } => ({
    workArea: { width: 1280, height: 720 }
  })
}

export default {
  app,
  BrowserWindow,
  nativeTheme,
  screen
}
