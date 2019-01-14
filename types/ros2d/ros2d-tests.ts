import {ROS2D} from './index'
import ROSLIB = require('roslib');

const stage = new createjs.Stage('canvas');

// test merged defenitions in easeljs
stage.rosQuaternionToGlobalTheta(new ROSLIB.Quaternion({x:1,y:1,z:1,w:0}));
stage.rosToGlobal({x:100,y:200});
stage.globalToRos(100,200);

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