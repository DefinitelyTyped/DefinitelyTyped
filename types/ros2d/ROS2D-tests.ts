import * as createjs from 'easeljs'

const stage = createjs.Stage();

// test merged defenitions in easeljs
stage.rosQuaternionToGlobalTheta();
stage.rosToGlobal();
stage.globalToRos();

// test constructor insights
let viewer: ROS2D.Viewer = new ROS2D.Viewer({
    height:200,
    width: 500,
    divID: `#hey`
});


let robotMarker = new ROS2D.NavigationArrow({
    size : 25,
    strokeSize : 1,
    fillColor : createjs.Graphics.getRGB(255, 128, 0, 0.66),
    pulse : true
});

// test method parameters
viewer.addObject(robotMarker);

const gridClient = new ROS2D.OccupancyGridClient({
    ros: null,
    topic: `/map`,
    rootObject: stage,
    continuous: true
});


