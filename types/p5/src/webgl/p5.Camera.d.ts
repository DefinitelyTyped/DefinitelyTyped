// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Camera {
        /**
         *   Sets a perspective projection. Accepts the same
         *   parameters as the global perspective(). More
         *   information on this function can be found there.
         */
        perspective(): void;

        /**
         *   Sets an orthographic projection. Accepts the same
         *   parameters as the global ortho(). More information
         *   on this function can be found there.
         */
        ortho(): void;

        /**
         *   Sets the camera's frustum. Accepts the same
         *   parameters as the global frustum(). More
         *   information on this function can be found there.
         */
        frustum(): void;

        /**
         *   Panning rotates the camera view to the left and
         *   right.
         *   @param angle amount to rotate camera in current
         *   angleMode units. Greater than 0 values rotate
         *   counterclockwise (to the left).
         */
        pan(angle: number): void;

        /**
         *   Tilting rotates the camera view up and down.
         *   @param angle amount to rotate camera in current
         *   angleMode units. Greater than 0 values rotate
         *   counterclockwise (to the left).
         */
        tilt(angle: number): void;

        /**
         *   Reorients the camera to look at a position in
         *   world space.
         *   @param x x position of a point in world space
         *   @param y y position of a point in world space
         *   @param z z position of a point in world space
         */
        lookAt(x: number, y: number, z: number): void;

        /**
         *   Sets the camera's position and orientation.
         *   Accepts the same parameters as the global
         *   camera(). More information on this function can be
         *   found there.
         */
        camera(): void;

        /**
         *   Move camera along its local axes while maintaining
         *   current camera orientation.
         *   @param x amount to move along camera's left-right
         *   axis
         *   @param y amount to move along camera's up-down
         *   axis
         *   @param z amount to move along camera's
         *   forward-backward axis
         */
        move(x: number, y: number, z: number): void;

        /**
         *   Set camera position in world-space while
         *   maintaining current camera orientation.
         *   @param x x position of a point in world space
         *   @param y y position of a point in world space
         *   @param z z position of a point in world space
         */
        setPosition(x: number, y: number, z: number): void;

        /**
         *   Copies information about the argument camera's
         *   view and projection to the target camera. If the
         *   target camera is active, it will be reflected on
         *   the screen.
         *   @param cam source camera
         */
        set(cam: Camera): void;

        /**
         *   For the cameras cam0 and cam1 with the given
         *   arguments, their view are combined with the
         *   parameter amt that represents the quantity, and
         *   the obtained view is applied. For example, if cam0
         *   is looking straight ahead and cam1 is looking
         *   straight to the right and amt is 0.5, the applied
         *   camera will look to the halfway between front and
         *   right. If the applied camera is active, the
         *   applied result will be reflected on the screen.
         *   When applying this function, all cameras involved
         *   must have exactly the same projection settings.
         *   For example, if one is perspective, ortho,
         *   frustum, the other two must also be perspective,
         *   ortho, frustum respectively. However, if all
         *   cameras have ortho settings, interpolation is
         *   possible if the ratios of left, right, top and
         *   bottom are equal to each other. For example, when
         *   it is changed by orbitControl().
         *   @param cam0 first p5.Camera
         *   @param cam1 second p5.Camera
         *   @param amt amount to use for interpolation during
         *   slerp
         */
        slerp(cam0: Camera, cam1: Camera, amt: number): void;

        /**
         *   camera position value on x axis
         */
        eyeX: number;

        /**
         *   camera position value on y axis
         */
        eyeY: number;

        /**
         *   camera position value on z axis
         */
        eyeZ: number;

        /**
         *   x coordinate representing center of the sketch
         */
        centerX: number;

        /**
         *   y coordinate representing center of the sketch
         */
        centerY: number;

        /**
         *   z coordinate representing center of the sketch
         */
        centerZ: number;

        /**
         *   x component of direction 'up' from camera
         */
        upX: number;

        /**
         *   y component of direction 'up' from camera
         */
        upY: number;

        /**
         *   z component of direction 'up' from camera
         */
        upZ: number;
    }
    interface p5InstanceExtensions {
        /**
         *   Sets the position of the current camera in a 3D
         *   sketch. Parameters for this function define the
         *   camera's position, the center of the sketch (where
         *   the camera is pointing), and an up direction (the
         *   orientation of the camera). This function
         *   simulates the movements of the camera, allowing
         *   objects to be viewed from various angles.
         *   Remember, it does not move the objects themselves
         *   but the camera instead. For example when the
         *   centerX value is positive, and the camera is
         *   rotating to the right side of the sketch, the
         *   object will seem like it's moving to the left.
         *
         *   See this example to view the position of your
         *   camera.
         *
         *   If no parameters are given, the following default
         *   is used: camera(0, 0, (height/2) / tan(PI/6), 0,
         *   0, 0, 0, 1, 0)
         *   @param [x] camera position value on x axis
         *   @param [y] camera position value on y axis
         *   @param [z] camera position value on z axis
         *   @param [centerX] x coordinate representing center
         *   of the sketch
         *   @param [centerY] y coordinate representing center
         *   of the sketch
         *   @param [centerZ] z coordinate representing center
         *   of the sketch
         *   @param [upX] x component of direction 'up' from
         *   camera
         *   @param [upY] y component of direction 'up' from
         *   camera
         *   @param [upZ] z component of direction 'up' from
         *   camera
         *   @chainable
         */
        camera(
            x?: number,
            y?: number,
            z?: number,
            centerX?: number,
            centerY?: number,
            centerZ?: number,
            upX?: number,
            upY?: number,
            upZ?: number
        ): p5;

        /**
         *   Sets a perspective projection for the current
         *   camera in a 3D sketch. This projection represents
         *   depth through foreshortening: objects that are
         *   close to the camera appear their actual size while
         *   those that are further away from the camera appear
         *   smaller. The parameters to this function define
         *   the viewing frustum (the truncated pyramid within
         *   which objects are seen by the camera) through
         *   vertical field of view, aspect ratio (usually
         *   width/height), and near and far clipping planes.
         *
         *   If no parameters are given, the following default
         *   is used: perspective(PI/3, width/height, eyeZ/10,
         *   eyeZ*10), where eyeZ is equal to ((height/2) /
         *   tan(PI/6)).
         *   @param [fovy] camera frustum vertical field of
         *   view, from bottom to top of view, in angleMode
         *   units
         *   @param [aspect] camera frustum aspect ratio
         *   @param [near] frustum near plane length
         *   @param [far] frustum far plane length
         *   @chainable
         */
        perspective(fovy?: number, aspect?: number, near?: number, far?: number): p5;

        /**
         *   Sets an orthographic projection for the current
         *   camera in a 3D sketch and defines a box-shaped
         *   viewing frustum within which objects are seen. In
         *   this projection, all objects with the same
         *   dimension appear the same size, regardless of
         *   whether they are near or far from the camera. The
         *   parameters to this function specify the viewing
         *   frustum where left and right are the minimum and
         *   maximum x values, top and bottom are the minimum
         *   and maximum y values, and near and far are the
         *   minimum and maximum z values.
         *
         *   If no parameters are given, the following default
         *   is used: ortho(-width/2, width/2, -height/2,
         *   height/2).
         *   @param [left] camera frustum left plane
         *   @param [right] camera frustum right plane
         *   @param [bottom] camera frustum bottom plane
         *   @param [top] camera frustum top plane
         *   @param [near] camera frustum near plane
         *   @param [far] camera frustum far plane
         *   @chainable
         */
        ortho(left?: number, right?: number, bottom?: number, top?: number, near?: number, far?: number): p5;

        /**
         *   Sets the frustum of the current camera as defined
         *   by the parameters. A frustum is a geometric form:
         *   a pyramid with its top cut off. With the viewer's
         *   eye at the imaginary top of the pyramid, the six
         *   planes of the frustum act as clipping planes when
         *   rendering a 3D view. Thus, any form inside the
         *   clipping planes is visible; anything outside those
         *   planes is not visible.
         *
         *   Setting the frustum changes the perspective of the
         *   scene being rendered. This can be achieved more
         *   simply in many cases by using perspective().
         *
         *   If no parameters are given, the following default
         *   is used: frustum(-width/20, width/20, height/20,
         *   -height/20, eyeZ/10, eyeZ*10), where eyeZ is equal
         *   to ((height/2) / tan(PI/6)).
         *   @param [left] camera frustum left plane
         *   @param [right] camera frustum right plane
         *   @param [bottom] camera frustum bottom plane
         *   @param [top] camera frustum top plane
         *   @param [near] camera frustum near plane
         *   @param [far] camera frustum far plane
         *   @chainable
         */
        frustum(left?: number, right?: number, bottom?: number, top?: number, near?: number, far?: number): p5;

        /**
         *   Creates a new p5.Camera object and sets it as the
         *   current (active) camera. The new camera is
         *   initialized with a default position (see camera())
         *   and a default perspective projection (see
         *   perspective()). Its properties can be controlled
         *   with the p5.Camera methods.
         *
         *   Note: Every 3D sketch starts with a default camera
         *   initialized. This camera can be controlled with
         *   the global methods camera(), perspective(),
         *   ortho(), and frustum() if it is the only camera in
         *   the scene.
         *   @return The newly created camera object.
         */
        createCamera(): Camera;

        /**
         *   Sets the current (active) camera of a 3D sketch.
         *   Allows for switching between multiple cameras.
         *   @param cam p5.Camera object
         */
        setCamera(cam: Camera): void;
    }
}
