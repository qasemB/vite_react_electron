import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;

// بررسی حالت توسعه یا بیلد
const isDev = !app.isPackaged; // اگر برنامه بسته‌بندی نشده باشه، یعنی در حالت توسعه است

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  if (isDev) mainWindow.loadURL("http://localhost:5173");
  else mainWindow.loadFile(path.join(__dirname, "dist/index.html"));
  // mainWindow.webContents.openDevTools();

  // مدیریت پیام‌های کنترلی
  ipcMain.on("minimize-window", () => {
    mainWindow.minimize();
  });

  ipcMain.on("maximize-window", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.on("close-window", () => {
    mainWindow.close();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
