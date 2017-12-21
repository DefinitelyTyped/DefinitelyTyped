import * as electronInstaller from "electron-winstaller";

const options: electronInstaller.Options = {
  appDirectory: '/tmp/build/my-app-64',
  outputDirectory: '/tmp/build/installer64',
  authors: 'My App Inc.',
  exe: 'myapp.exe'
};

const resultPromise = electronInstaller.createWindowsInstaller(options);

resultPromise.then(
  () => console.log("It worked!"),
  (e) => console.log(`No dice: ${e.message}`));
