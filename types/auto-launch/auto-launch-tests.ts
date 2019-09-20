import AutoLaunch = require('auto-launch');

const minecraftAutoLauncher = new AutoLaunch({
  name: 'Minecraft',
  path: '/Applications/Minecraft.app',
  mac: {
    useLaunchAgent: true
  }
});

minecraftAutoLauncher.enable();
minecraftAutoLauncher.disable();

minecraftAutoLauncher.isEnabled()
  .then((isEnabled) => {
    if (isEnabled) {
      return;
    }
    minecraftAutoLauncher.enable();
  })
  .catch((err) => {
    console.error(err);
  });
