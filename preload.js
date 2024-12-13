const { contextBridge, ipcRenderer } = require("electron");

// تعریف API سفارشی برای استفاده در ریکت
contextBridge.exposeInMainWorld("electronAPI", {
  minimize: () => ipcRenderer.send("minimize-window"),
  maximize: () => ipcRenderer.send("maximize-window"),
  close: () => ipcRenderer.send("close-window"),
});