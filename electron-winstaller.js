var electronInstaller = require('electron-winstaller');
var path = require('path')

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './build/書記-win32-ia32',
    description: '書記 桌面版',
    exe: '書記.exe',
    name: '書記',
    title: '書記',
    authors: 'qwqaq.com',
    version: '1.0.0',
    outputDirectory: './build/installer',
    setupIcon: path.resolve(__dirname, '/app/icon.ico')
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));