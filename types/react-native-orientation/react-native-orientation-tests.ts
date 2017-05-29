import * as Orientation from 'react-native-orientation';

Orientation.addOrientationListener((orientation)=>{});
Orientation.removeOrientationListener((orientation)=>{});
Orientation.addSpecificOrientationListener((orientation)=>{});
Orientation.removeSpecificOrientationListener((orientation)=>{});

Orientation.getInitialOrientation();
Orientation.lockToPortrait();
Orientation.lockToPortrait();
Orientation.lockToLandscape();
Orientation.lockToLandscapeLeft();
Orientation.lockToLandscapeRight();
Orientation.unlockAllOrientations();
Orientation.getOrientation((err,orientation)=>{});
Orientation.getSpecificOrientation((err,orientation)=>{});
