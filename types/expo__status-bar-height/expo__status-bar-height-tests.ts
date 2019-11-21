import StatusBarHeight from '@expo/status-bar-height';

const onChangeHeight = (height: number) => console.log(`New height: ${height}`);

StatusBarHeight.addEventListener(onChangeHeight);

StatusBarHeight.getAsync()
  .then((height: number) => console.log(`Current height: ${height}`))
  .catch((error: Error) => console.error('Threw an error in StatusBarHeight.getAsync():', error));

StatusBarHeight.removeEventListener(onChangeHeight);
