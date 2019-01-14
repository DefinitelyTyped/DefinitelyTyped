// Type definitions for ros2d.js 0.9.0
// Project: http://wiki.ros.org/ros2djs
// Definitions by: Jacob Davison <https://github.com/jmdavison>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {EventEmitter2} from "eventemitter2";
import createjs from "easeljs";
import * as ROSLIB from "roslib";

/**
 *  Augment the createjs Stage object with some ROS conversion methods
 */
declare namespace createjs {
    interface Stage {
        /**
         * Converts a point in map space to ROS space
         * @param pos
         * @return {{x: number; y: number}}
         */
        globalToRos(x: number, y:number): ROSLIB.Vector3;
        /**
         * Converts a point in ROS space to global screen space
         * @param pos
         * @return {{x: number; y: number}}
         */
        rosToGlobal(pos: any): {x:number,y:number};
        /**
         * Convert a ROS quaternion to theta in degrees.
         *
         * @param orientation - A ROSLIB.Qauternion object.
         * @return globalTheta - A theta value in degrees (number).
         */
        rosQuaternionToGlobalTheta(orientation:ROSLIB.Quaternion): number;
    }
}

declare namespace ROS2D {
    /**
     * An image map is a PNG image scaled to fit to the dimensions of a OccupancyGrid.
     *
     * @constructor
     * @param options - object with following keys:
     *   * message - the occupancy grid map meta data message
     *   * image - the image URL to load
     */
    class ImageMap extends createjs.Bitmap {
        constructor(options: {
            message: ROSLIB.Message,
            image: string
        });
    }

    /**
     * Image map client subscribes to a topic to retrieve updates to an
     * occupancy grid as it changes.
     *
     * Emits the following events:
     *   * 'change' - there was an update or change in the map
     *
     * @constructor
     * @param options - object with following keys:
     *   * ros - the ROSLIB.Ros connection handle
     *   * topic (optional) - the map meta data topic to listen to
     *   * image - the image URL to load
     *   * rootObject (optional) - the root object to add this marker to
     */
    class ImageMapClient extends EventEmitter2 {
        constructor(options: {
            ros: ROSLIB.Ros,
            topic?: string,
            image: string,
            rootObject: createjs.Container
        });
    }

    /**
     * An OccupancyGrid can convert a ROS occupancy grid message into a createjs Bitmap object.
     *
     * @constructor
     * @param options - object with following keys:
     *   * message - the occupancy grid message
     */
    class OccupancyGrid extends createjs.Bitmap {
        constructor(options: {
            message: ROSLIB.Message
        });
    }

    /**
     * A map that listens to a given occupancy grid topic.
     *
     * Emits the following events:
     *   * 'change' - there was an update or change in the map
     *
     * @constructor
     * @param options - object with following keys:
     *   * ros - the ROSLIB.Ros connection handle
     *   * topic (optional) - the map topic to listen to
     *   * rootObject (optional) - the root object to add this marker to
     *   * continuous (optional) - if the map should be continuously loaded (e.g., for SLAM)
     */
    class OccupancyGridClient extends EventEmitter2 {
        constructor(options: {
            ros: ROSLIB.Ros,
            topic?: string,
            rootObject?: createjs.Container,
            continuous?: boolean
        });
    }

    /**
     * A static map that receives from map_server.
     *
     * Emits the following events:
     *   * 'change' - there was an update or change in the map
     *
     * @constructor
     * @param options - object with following keys:
     *   * ros - the ROSLIB.Ros connection handle
     *   * service (optional) - the map topic to listen to, like '/static_map'
     *   * rootObject (optional) - the root object to add this marker to
     */
    class OccupancyGridSrvClient extends EventEmitter2 {
        public currentGrid: ROS2D.OccupancyGrid;
        constructor(options: {
            ros: ROSLIB.Ros,
            service?: string,
            rootObject?: createjs.Container
        });
    }

    /**
     * An arrow with line and triangular head, based on the navigation arrow.
     * Aims to the left at 0 rotation, as would be expected.
     *
     * @constructor
     * @param options - object with following keys:
     *   * size (optional) - the size of the marker
     *   * strokeSize (optional) - the size of the outline
     *   * strokeColor (optional) - the createjs color for the stroke
     *   * fillColor (optional) - the createjs color for the fill
     *   * pulse (optional) - if the marker should "pulse" over time
     */
    class ArrowShape extends createjs.Shape {
        constructor(options: {
            size?: number,
            strokeSize?: number,
            strokeColor?: string,
            fillColor?: string,
            publse?: boolean
        });
    }

    /**
     * A Grid object draw in map.
     *
     * @constructor
     * @param options - object with following keys:
     *  * size (optional) - the size of the grid
     *  * cellSize (optional) - the cell size of map
     *  * lineWidth (optional) - the width of the lines in the grid
     */
    class Grid extends createjs.Shape {
        constructor(options: {
            size?: number,
            cellSize?: number,
            lineWidth?: string
        });
    }

    /**
     * A navigation arrow is a directed triangle that can be used to display orientation.
     *
     * @constructor
     * @param options - object with following keys:
     *   * size (optional) - the size of the marker
     *   * strokeSize (optional) - the size of the outline
     *   * strokeColor (optional) - the createjs color for the stroke
     *   * fillColor (optional) - the createjs color for the fill
     *   * pulse (optional) - if the marker should "pulse" over time
     */
    class NavigationArrow extends createjs.Shape {
        constructor(options: {
            size?: number,
            strokeSize?: number,
            strokeColor?: string,
            fillColor?: string,
            publse?: boolean
        });
    }

    /**
     * A navigation image that can be used to display orientation.
     *
     * @constructor
     * @param options - object with following keys:
     *   * size (optional) - the size of the marker
     *   * image - the image to use as a marker
     *   * pulse (optional) - if the marker should "pulse" over time
     */
    class NavigationImage extends createjs.Bitmap {
        constructor(options: {
            size?: number,
            image: Image,
            publse?: boolean
        });
    }

    /**
     * A shape to draw a nav_msgs/Path msg
     *
     * @constructor
     * @param options - object with following keys:
     *   * path (optional) - the initial path to draw
     *   * strokeSize (optional) - the size of the outline
     *   * strokeColor (optional) - the createjs color for the stroke
     */
    class PathShape extends createjs.Shape {
        constructor(options: {
            path?: any,
            strokeSize?: number,
            strokeColor?: string
        });

        /**
         * Set the path to draw
         *
         * @param path of type nav_msgs/Path
         */
        public setPath(path:any);
    }

    /**
     * A polygon that can be edited by an end user
     *
     * @constructor
     * @param options - object with following keys:
     *   * pose (optional) - the first pose of the trace
     *   * lineSize (optional) - the width of the lines
     *   * lineColor (optional) - the createjs color of the lines
     *   * pointSize (optional) - the size of the points
     *   * pointColor (optional) - the createjs color of the points
     *   * fillColor (optional) - the createjs color to fill the polygon
     *   * lineCallBack (optional) - callback function for mouse interaction with a line
     *   * pointCallBack (optional) - callback function for mouse interaction with a point
     */
    class PolygonMarker extends createjs.Container {
        public pointContainer: createjs.Container;
        public lineContainer: createjs.Container;
        public fillShape: createjs.Shape;
        constructor(options: {
            pose?: any,
            lineSize?: number,
            lineColor?: string,
            pointSize?: number,
            pointColor?: string,
            fillColor?: string,
            lineCallBack?: Function,
            pointCallBack?: Function
        });
        private createLineShape(startPoint: createjs.Point, endPoint: createjs.Point):createjs.Shape;
        private editLineShape(line: createjs.Shape, startPoint: createjs.Point, endPoint: createjs.Point):void;
        private createPointShape(pos: createjs.Point):createjs.Shape;
        /**
         * Adds a point to the polygon
         * @param position of type ROSLIB.Vector3
         */
        public addPoint(pos: createjs.Point):void;
        /**
         * Removes a point from the polygon
         * @param obj either an index (integer) or a point shape of the polygon
         */
        public remPoint(obj: createjs.Shape):void;
        /**
         * Moves a point of the polygon
         * @param obj either an index (integer) or a point shape of the polygon
         * @param position of type ROSLIB.Vector3
         */
        public movePoint(obj: createjs.Shape, newPos: createjs.Point):void;
        /**
         * Splits a line of the polygon: inserts a point at the center of the line
         * @param obj either an index (integer) or a line shape of the polygon
         */
        public splitLine(obj: number|createjs.Shape);
        private drawFill();
    }

    /**
     * A trace of poses, handy to see where a robot has been
     *
     * @constructor
     * @param options - object with following keys:
     *   * pose (optional) - the first pose of the trace
     *   * strokeSize (optional) - the size of the outline
     *   * strokeColor (optional) - the createjs color for the stroke
     *   * maxPoses (optional) - the maximum number of poses to keep, 0 for infinite
     *   * minDist (optional) - the minimal distance between poses to use the pose for drawing (default 0.05)
     */
    class TraceShape extends createjs.Shape {
        constructor(options: {
            pose?: any,
            strokeSize?: number,
            strokeColor?: string,
            maxPoses?: number,
            minDist?: number
        });

        /**
         * Adds a pose to the trace and updates the graphics
         * @param pose of type ROSLIB.Pose
         */
        public addPose(pose:any):void;

        /**
         * Removes front pose and updates the graphics
         */
        public popFront():void;
    }

    /**
     * Adds panning to a view
     *
     * @constructor
     * @param options - object with following keys:
     *   * rootObject (optional) - the root object to apply panning to
     */
    class PanView {
        constructor(options: {
            rootObject?: createjs.Container
        });

        public startPan(startX:number, startY:number): void;
        public pan(curX:number, curY:number):void;
    }

    /**
     * A Viewer can be used to render an interactive 2D scene to a HTML5 canvas.
     *
     * @constructor
     * @param options - object with following keys:
     *   * divID - the ID of the div to place the viewer in
     *   * width - the initial width, in pixels, of the canvas
     *   * height - the initial height, in pixels, of the canvas
     *   * background (optional) - the color to render the background, like '#efefef'
     */
    class Viewer {
        public scene: createjs.Stage;
        constructor(options: {
            divID: string,
            width: number,
            height: number,
            background?: string
        });

        /**
         * Add the given createjs object to the global scene in the viewer.
         * @param object - the object to add
         */
        public addObject(object: createjs.DisplayObject):void;

        /**
         * Scale the scene to fit the given width and height into the current canvas.
         * @param width - the width to scale to in meters
         * @param height - the height to scale to in meters
         */
        public scaleToDimensions(width:number, height:number):void;

        /**
         * Shift the main view of the canvas by the given amount. This is based on the
         * ROS coordinate system. That is, Y is opposite that of a traditional canvas.
         *
         * @param x - the amount to shift by in the x direction in meters
         * @param y - the amount to shift by in the y direction in meters
         */
        public shift(x:number, y:number):void;
    }

    /**
     * Adds zooming to a view
     *
     * @constructor
     * @param options - object with following keys:
     *   * rootObject (optional) - the root object to apply zoom to
     *   * minScale (optional) - minimum scale to set to preserve precision
     */
    class ZoomView {
        constructor(options: {
            rootObject: createjs.Stage,
            minScale?: number
        });

        public startZoom(centerX:number, centerY:number):void;
        public zoom(zoom:number):void;
    }
}