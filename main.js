const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Create the browser window with specific size and options
  const mainWindow = new BrowserWindow({
    width: 300,      // Width of the calculator window
    height: 400,     // Height of the calculator window
    webPreferences: {
      nodeIntegration: true,     // Enable Node.js in renderer (for simplicity; disable in production for security)
      contextIsolation: false    // Disable context isolation (for simplicity)
    },
    resizable: false, // Prevent resizing for a fixed calculator layout
    icon: path.join(__dirname, 'icon.ico') // Optional: Add an icon file if you have one
  });

  // Load the HTML file into the window
  mainWindow.loadFile('index.html');

  // Open DevTools for debugging (remove in production)
  // mainWindow.webContents.openDevTools();
}

// This method is called when Electron has finished initialization
app.whenReady().then(createWindow);

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Re-create window on macOS when dock icon is clicked
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});