// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Creates an ambient light with the given color.
         *   Ambient light does not come from a specific
         *   direction. Objects are evenly lit from all sides.
         *   Ambient lights are almost always used in
         *   combination with other types of lights.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         *   @param [alpha] alpha value relative to current
         *   color range (default is 0-255)
         *   @chainable
         */
        ambientLight(v1: number, v2: number, v3: number, alpha?: number): p5;

        /**
         *   Creates an ambient light with the given color.
         *   Ambient light does not come from a specific
         *   direction. Objects are evenly lit from all sides.
         *   Ambient lights are almost always used in
         *   combination with other types of lights.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param gray number specifying value between white
         *   and black
         *   @param [alpha] alpha value relative to current
         *   color range (default is 0-255)
         *   @chainable
         */
        ambientLight(gray: number, alpha?: number): p5;

        /**
         *   Creates an ambient light with the given color.
         *   Ambient light does not come from a specific
         *   direction. Objects are evenly lit from all sides.
         *   Ambient lights are almost always used in
         *   combination with other types of lights.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param value a color string
         *   @chainable
         */
        ambientLight(value: string): p5;

        /**
         *   Creates an ambient light with the given color.
         *   Ambient light does not come from a specific
         *   direction. Objects are evenly lit from all sides.
         *   Ambient lights are almost always used in
         *   combination with other types of lights.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param values an array containing the
         *   red,green,blue & and alpha components of the color
         *   @chainable
         */
        ambientLight(values: number[]): p5;

        /**
         *   Creates an ambient light with the given color.
         *   Ambient light does not come from a specific
         *   direction. Objects are evenly lit from all sides.
         *   Ambient lights are almost always used in
         *   combination with other types of lights.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param color color as a p5.Color
         *   @chainable
         */
        ambientLight(color: Color): p5;

        /**
         *   Sets the color of the specular highlight of a
         *   non-ambient light (i.e. all lights except
         *   ambientLight()). specularColor() affects only the
         *   lights which are created after it in the code.
         *
         *   This function is used in combination with
         *   specularMaterial(). If a geometry does not use
         *   specularMaterial(), this function will have no
         *   effect.
         *
         *   The default color is white (255, 255, 255), which
         *   is used if specularColor() is not explicitly
         *   called.
         *
         *   Note: specularColor is equivalent to the
         *   Processing function lightSpecular.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         *   @chainable
         */
        specularColor(v1: number, v2: number, v3: number): p5;

        /**
         *   Sets the color of the specular highlight of a
         *   non-ambient light (i.e. all lights except
         *   ambientLight()). specularColor() affects only the
         *   lights which are created after it in the code.
         *
         *   This function is used in combination with
         *   specularMaterial(). If a geometry does not use
         *   specularMaterial(), this function will have no
         *   effect.
         *
         *   The default color is white (255, 255, 255), which
         *   is used if specularColor() is not explicitly
         *   called.
         *
         *   Note: specularColor is equivalent to the
         *   Processing function lightSpecular.
         *   @param gray number specifying value between white
         *   and black
         *   @chainable
         */
        specularColor(gray: number): p5;

        /**
         *   Sets the color of the specular highlight of a
         *   non-ambient light (i.e. all lights except
         *   ambientLight()). specularColor() affects only the
         *   lights which are created after it in the code.
         *
         *   This function is used in combination with
         *   specularMaterial(). If a geometry does not use
         *   specularMaterial(), this function will have no
         *   effect.
         *
         *   The default color is white (255, 255, 255), which
         *   is used if specularColor() is not explicitly
         *   called.
         *
         *   Note: specularColor is equivalent to the
         *   Processing function lightSpecular.
         *   @param value color as a CSS string
         *   @chainable
         */
        specularColor(value: string): p5;

        /**
         *   Sets the color of the specular highlight of a
         *   non-ambient light (i.e. all lights except
         *   ambientLight()). specularColor() affects only the
         *   lights which are created after it in the code.
         *
         *   This function is used in combination with
         *   specularMaterial(). If a geometry does not use
         *   specularMaterial(), this function will have no
         *   effect.
         *
         *   The default color is white (255, 255, 255), which
         *   is used if specularColor() is not explicitly
         *   called.
         *
         *   Note: specularColor is equivalent to the
         *   Processing function lightSpecular.
         *   @param values color as an array containing the
         *   red, green, and blue components
         *   @chainable
         */
        specularColor(values: number[]): p5;

        /**
         *   Sets the color of the specular highlight of a
         *   non-ambient light (i.e. all lights except
         *   ambientLight()). specularColor() affects only the
         *   lights which are created after it in the code.
         *
         *   This function is used in combination with
         *   specularMaterial(). If a geometry does not use
         *   specularMaterial(), this function will have no
         *   effect.
         *
         *   The default color is white (255, 255, 255), which
         *   is used if specularColor() is not explicitly
         *   called.
         *
         *   Note: specularColor is equivalent to the
         *   Processing function lightSpecular.
         *   @param color color as a p5.Color
         *   @chainable
         */
        specularColor(color: Color): p5;

        /**
         *   Creates a directional light with the given color
         *   and direction. Directional light comes from one
         *   direction. The direction is specified as numbers
         *   inclusively between -1 and 1. For example, setting
         *   the direction as (0, -1, 0) will cause the
         *   geometry to be lit from below (since the light
         *   will be facing directly upwards). Similarly,
         *   setting the direction as (1, 0, 0) will cause the
         *   geometry to be lit from the left (since the light
         *   will be facing directly rightwards).
         *
         *   Directional lights do not have a specific point of
         *   origin, and therefore cannot be positioned closer
         *   or farther away from a geometry.
         *
         *   A maximum of 5 directional lights can be active at
         *   once.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         *   @param x x component of direction (inclusive range
         *   of -1 to 1)
         *   @param y y component of direction (inclusive range
         *   of -1 to 1)
         *   @param z z component of direction (inclusive range
         *   of -1 to 1)
         *   @chainable
         */
        directionalLight(v1: number, v2: number, v3: number, x: number, y: number, z: number): p5;

        /**
         *   Creates a directional light with the given color
         *   and direction. Directional light comes from one
         *   direction. The direction is specified as numbers
         *   inclusively between -1 and 1. For example, setting
         *   the direction as (0, -1, 0) will cause the
         *   geometry to be lit from below (since the light
         *   will be facing directly upwards). Similarly,
         *   setting the direction as (1, 0, 0) will cause the
         *   geometry to be lit from the left (since the light
         *   will be facing directly rightwards).
         *
         *   Directional lights do not have a specific point of
         *   origin, and therefore cannot be positioned closer
         *   or farther away from a geometry.
         *
         *   A maximum of 5 directional lights can be active at
         *   once.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         *   @param direction direction of light as a p5.Vector
         *   @chainable
         */
        directionalLight(v1: number, v2: number, v3: number, direction: Vector): p5;

        /**
         *   Creates a directional light with the given color
         *   and direction. Directional light comes from one
         *   direction. The direction is specified as numbers
         *   inclusively between -1 and 1. For example, setting
         *   the direction as (0, -1, 0) will cause the
         *   geometry to be lit from below (since the light
         *   will be facing directly upwards). Similarly,
         *   setting the direction as (1, 0, 0) will cause the
         *   geometry to be lit from the left (since the light
         *   will be facing directly rightwards).
         *
         *   Directional lights do not have a specific point of
         *   origin, and therefore cannot be positioned closer
         *   or farther away from a geometry.
         *
         *   A maximum of 5 directional lights can be active at
         *   once.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param color color as a p5.Color, as an array, or
         *   as a CSS string
         *   @param x x component of direction (inclusive range
         *   of -1 to 1)
         *   @param y y component of direction (inclusive range
         *   of -1 to 1)
         *   @param z z component of direction (inclusive range
         *   of -1 to 1)
         *   @chainable
         */
        directionalLight(color: Color | number[] | string, x: number, y: number, z: number): p5;

        /**
         *   Creates a directional light with the given color
         *   and direction. Directional light comes from one
         *   direction. The direction is specified as numbers
         *   inclusively between -1 and 1. For example, setting
         *   the direction as (0, -1, 0) will cause the
         *   geometry to be lit from below (since the light
         *   will be facing directly upwards). Similarly,
         *   setting the direction as (1, 0, 0) will cause the
         *   geometry to be lit from the left (since the light
         *   will be facing directly rightwards).
         *
         *   Directional lights do not have a specific point of
         *   origin, and therefore cannot be positioned closer
         *   or farther away from a geometry.
         *
         *   A maximum of 5 directional lights can be active at
         *   once.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param color color as a p5.Color, as an array, or
         *   as a CSS string
         *   @param direction direction of light as a p5.Vector
         *   @chainable
         */
        directionalLight(color: Color | number[] | string, direction: Vector): p5;

        /**
         *   Creates a point light with the given color and
         *   position. A point light emits light from a single
         *   point in all directions. Because the light is
         *   emitted from a specific point (position), it has a
         *   different effect when it is positioned farther vs.
         *   nearer an object.
         *
         *   A maximum of 5 point lights can be active at once.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         *   @param x x component of position
         *   @param y y component of position
         *   @param z z component of position
         *   @chainable
         */
        pointLight(v1: number, v2: number, v3: number, x: number, y: number, z: number): p5;

        /**
         *   Creates a point light with the given color and
         *   position. A point light emits light from a single
         *   point in all directions. Because the light is
         *   emitted from a specific point (position), it has a
         *   different effect when it is positioned farther vs.
         *   nearer an object.
         *
         *   A maximum of 5 point lights can be active at once.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         *   @param position of light as a p5.Vector
         *   @chainable
         */
        pointLight(v1: number, v2: number, v3: number, position: Vector): p5;

        /**
         *   Creates a point light with the given color and
         *   position. A point light emits light from a single
         *   point in all directions. Because the light is
         *   emitted from a specific point (position), it has a
         *   different effect when it is positioned farther vs.
         *   nearer an object.
         *
         *   A maximum of 5 point lights can be active at once.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param color color as a p5.Color, as an array, or
         *   as a CSS string
         *   @param x x component of position
         *   @param y y component of position
         *   @param z z component of position
         *   @chainable
         */
        pointLight(color: Color | number[] | string, x: number, y: number, z: number): p5;

        /**
         *   Creates a point light with the given color and
         *   position. A point light emits light from a single
         *   point in all directions. Because the light is
         *   emitted from a specific point (position), it has a
         *   different effect when it is positioned farther vs.
         *   nearer an object.
         *
         *   A maximum of 5 point lights can be active at once.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param color color as a p5.Color, as an array, or
         *   as a CSS string
         *   @param position of light as a p5.Vector
         *   @chainable
         */
        pointLight(color: Color | number[] | string, position: Vector): p5;

        /**
         *   Places an ambient and directional light in the
         *   scene. The lights are set to ambientLight(128,
         *   128, 128) and directionalLight(128, 128, 128, 0,
         *   0, -1). Note: lights need to be called (whether
         *   directly or indirectly) within draw() to remain
         *   persistent in a looping program. Placing them in
         *   setup() will cause them to only have an effect the
         *   first time through the loop.
         *   @chainable
         */
        lights(): p5;

        /**
         *   Sets the falloff rate for pointLight() and
         *   spotLight(). lightFalloff() affects only the
         *   lights which are created after it in the code.
         *
         *   The constant, linear, an quadratic parameters are
         *   used to calculate falloff as follows:
         *
         *   d = distance from light position to vertex
         *   position
         *
         *   falloff = 1 / (CONSTANT + d * LINEAR + (d * d) *
         *   QUADRATIC)
         *   @param constant CONSTANT value for determining
         *   falloff
         *   @param linear LINEAR value for determining falloff
         *   @param quadratic QUADRATIC value for determining
         *   falloff
         *   @chainable
         */
        lightFalloff(constant: number, linear: number, quadratic: number): p5;

        /**
         *   Creates a spot light with the given color,
         *   position, light direction, angle, and
         *   concentration. Like a pointLight(), a spotLight()
         *   emits light from a specific point (position). It
         *   has a different effect when it is positioned
         *   farther vs. nearer an object.
         *
         *   However, unlike a pointLight(), the light is
         *   emitted in one direction along a conical shape.
         *   The shape of the cone can be controlled using the
         *   angle and concentration parameters.
         *
         *   The angle parameter is used to determine the
         *   radius of the cone. And the concentration
         *   parameter is used to focus the light towards the
         *   center of the cone. Both parameters are optional,
         *   however if you want to specify concentration, you
         *   must also specify angle. The minimum concentration
         *   value is 1.
         *
         *   A maximum of 5 spot lights can be active at once.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         *   @param x x component of position
         *   @param y y component of position
         *   @param z z component of position
         *   @param rx x component of light direction
         *   (inclusive range of -1 to 1)
         *   @param ry y component of light direction
         *   (inclusive range of -1 to 1)
         *   @param rz z component of light direction
         *   (inclusive range of -1 to 1)
         *   @param [angle] angle of cone. Defaults to PI/3
         *   @param [concentration] concentration of cone.
         *   Defaults to 100
         *   @chainable
         */
        spotLight(
            v1: number,
            v2: number,
            v3: number,
            x: number,
            y: number,
            z: number,
            rx: number,
            ry: number,
            rz: number,
            angle?: number,
            concentration?: number
        ): p5;

        /**
         *   Creates a spot light with the given color,
         *   position, light direction, angle, and
         *   concentration. Like a pointLight(), a spotLight()
         *   emits light from a specific point (position). It
         *   has a different effect when it is positioned
         *   farther vs. nearer an object.
         *
         *   However, unlike a pointLight(), the light is
         *   emitted in one direction along a conical shape.
         *   The shape of the cone can be controlled using the
         *   angle and concentration parameters.
         *
         *   The angle parameter is used to determine the
         *   radius of the cone. And the concentration
         *   parameter is used to focus the light towards the
         *   center of the cone. Both parameters are optional,
         *   however if you want to specify concentration, you
         *   must also specify angle. The minimum concentration
         *   value is 1.
         *
         *   A maximum of 5 spot lights can be active at once.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param color color as a p5.Color, as an array, or
         *   as a CSS string
         *   @param position position of light as a p5.Vector
         *   @param direction direction of light as a p5.Vector
         *   @param [angle] angle of cone. Defaults to PI/3
         *   @param [concentration] concentration of cone.
         *   Defaults to 100
         */
        spotLight(
            color: Color | number[] | string,
            position: Vector,
            direction: Vector,
            angle?: number,
            concentration?: number
        ): void;

        /**
         *   Creates a spot light with the given color,
         *   position, light direction, angle, and
         *   concentration. Like a pointLight(), a spotLight()
         *   emits light from a specific point (position). It
         *   has a different effect when it is positioned
         *   farther vs. nearer an object.
         *
         *   However, unlike a pointLight(), the light is
         *   emitted in one direction along a conical shape.
         *   The shape of the cone can be controlled using the
         *   angle and concentration parameters.
         *
         *   The angle parameter is used to determine the
         *   radius of the cone. And the concentration
         *   parameter is used to focus the light towards the
         *   center of the cone. Both parameters are optional,
         *   however if you want to specify concentration, you
         *   must also specify angle. The minimum concentration
         *   value is 1.
         *
         *   A maximum of 5 spot lights can be active at once.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         *   @param position position of light as a p5.Vector
         *   @param direction direction of light as a p5.Vector
         *   @param [angle] angle of cone. Defaults to PI/3
         *   @param [concentration] concentration of cone.
         *   Defaults to 100
         */
        spotLight(
            v1: number,
            v2: number,
            v3: number,
            position: Vector,
            direction: Vector,
            angle?: number,
            concentration?: number
        ): void;

        /**
         *   Creates a spot light with the given color,
         *   position, light direction, angle, and
         *   concentration. Like a pointLight(), a spotLight()
         *   emits light from a specific point (position). It
         *   has a different effect when it is positioned
         *   farther vs. nearer an object.
         *
         *   However, unlike a pointLight(), the light is
         *   emitted in one direction along a conical shape.
         *   The shape of the cone can be controlled using the
         *   angle and concentration parameters.
         *
         *   The angle parameter is used to determine the
         *   radius of the cone. And the concentration
         *   parameter is used to focus the light towards the
         *   center of the cone. Both parameters are optional,
         *   however if you want to specify concentration, you
         *   must also specify angle. The minimum concentration
         *   value is 1.
         *
         *   A maximum of 5 spot lights can be active at once.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param color color as a p5.Color, as an array, or
         *   as a CSS string
         *   @param x x component of position
         *   @param y y component of position
         *   @param z z component of position
         *   @param direction direction of light as a p5.Vector
         *   @param [angle] angle of cone. Defaults to PI/3
         *   @param [concentration] concentration of cone.
         *   Defaults to 100
         */
        spotLight(
            color: Color | number[] | string,
            x: number,
            y: number,
            z: number,
            direction: Vector,
            angle?: number,
            concentration?: number
        ): void;

        /**
         *   Creates a spot light with the given color,
         *   position, light direction, angle, and
         *   concentration. Like a pointLight(), a spotLight()
         *   emits light from a specific point (position). It
         *   has a different effect when it is positioned
         *   farther vs. nearer an object.
         *
         *   However, unlike a pointLight(), the light is
         *   emitted in one direction along a conical shape.
         *   The shape of the cone can be controlled using the
         *   angle and concentration parameters.
         *
         *   The angle parameter is used to determine the
         *   radius of the cone. And the concentration
         *   parameter is used to focus the light towards the
         *   center of the cone. Both parameters are optional,
         *   however if you want to specify concentration, you
         *   must also specify angle. The minimum concentration
         *   value is 1.
         *
         *   A maximum of 5 spot lights can be active at once.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param color color as a p5.Color, as an array, or
         *   as a CSS string
         *   @param position position of light as a p5.Vector
         *   @param rx x component of light direction
         *   (inclusive range of -1 to 1)
         *   @param ry y component of light direction
         *   (inclusive range of -1 to 1)
         *   @param rz z component of light direction
         *   (inclusive range of -1 to 1)
         *   @param [angle] angle of cone. Defaults to PI/3
         *   @param [concentration] concentration of cone.
         *   Defaults to 100
         */
        spotLight(
            color: Color | number[] | string,
            position: Vector,
            rx: number,
            ry: number,
            rz: number,
            angle?: number,
            concentration?: number
        ): void;

        /**
         *   Creates a spot light with the given color,
         *   position, light direction, angle, and
         *   concentration. Like a pointLight(), a spotLight()
         *   emits light from a specific point (position). It
         *   has a different effect when it is positioned
         *   farther vs. nearer an object.
         *
         *   However, unlike a pointLight(), the light is
         *   emitted in one direction along a conical shape.
         *   The shape of the cone can be controlled using the
         *   angle and concentration parameters.
         *
         *   The angle parameter is used to determine the
         *   radius of the cone. And the concentration
         *   parameter is used to focus the light towards the
         *   center of the cone. Both parameters are optional,
         *   however if you want to specify concentration, you
         *   must also specify angle. The minimum concentration
         *   value is 1.
         *
         *   A maximum of 5 spot lights can be active at once.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         *   @param x x component of position
         *   @param y y component of position
         *   @param z z component of position
         *   @param direction direction of light as a p5.Vector
         *   @param [angle] angle of cone. Defaults to PI/3
         *   @param [concentration] concentration of cone.
         *   Defaults to 100
         */
        spotLight(
            v1: number,
            v2: number,
            v3: number,
            x: number,
            y: number,
            z: number,
            direction: Vector,
            angle?: number,
            concentration?: number
        ): void;

        /**
         *   Creates a spot light with the given color,
         *   position, light direction, angle, and
         *   concentration. Like a pointLight(), a spotLight()
         *   emits light from a specific point (position). It
         *   has a different effect when it is positioned
         *   farther vs. nearer an object.
         *
         *   However, unlike a pointLight(), the light is
         *   emitted in one direction along a conical shape.
         *   The shape of the cone can be controlled using the
         *   angle and concentration parameters.
         *
         *   The angle parameter is used to determine the
         *   radius of the cone. And the concentration
         *   parameter is used to focus the light towards the
         *   center of the cone. Both parameters are optional,
         *   however if you want to specify concentration, you
         *   must also specify angle. The minimum concentration
         *   value is 1.
         *
         *   A maximum of 5 spot lights can be active at once.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         *   @param position position of light as a p5.Vector
         *   @param rx x component of light direction
         *   (inclusive range of -1 to 1)
         *   @param ry y component of light direction
         *   (inclusive range of -1 to 1)
         *   @param rz z component of light direction
         *   (inclusive range of -1 to 1)
         *   @param [angle] angle of cone. Defaults to PI/3
         *   @param [concentration] concentration of cone.
         *   Defaults to 100
         */
        spotLight(
            v1: number,
            v2: number,
            v3: number,
            position: Vector,
            rx: number,
            ry: number,
            rz: number,
            angle?: number,
            concentration?: number
        ): void;

        /**
         *   Creates a spot light with the given color,
         *   position, light direction, angle, and
         *   concentration. Like a pointLight(), a spotLight()
         *   emits light from a specific point (position). It
         *   has a different effect when it is positioned
         *   farther vs. nearer an object.
         *
         *   However, unlike a pointLight(), the light is
         *   emitted in one direction along a conical shape.
         *   The shape of the cone can be controlled using the
         *   angle and concentration parameters.
         *
         *   The angle parameter is used to determine the
         *   radius of the cone. And the concentration
         *   parameter is used to focus the light towards the
         *   center of the cone. Both parameters are optional,
         *   however if you want to specify concentration, you
         *   must also specify angle. The minimum concentration
         *   value is 1.
         *
         *   A maximum of 5 spot lights can be active at once.
         *
         *   Note: lights need to be called (whether directly
         *   or indirectly) within draw() to remain persistent
         *   in a looping program. Placing them in setup() will
         *   cause them to only have an effect the first time
         *   through the loop.
         *   @param color color as a p5.Color, as an array, or
         *   as a CSS string
         *   @param x x component of position
         *   @param y y component of position
         *   @param z z component of position
         *   @param rx x component of light direction
         *   (inclusive range of -1 to 1)
         *   @param ry y component of light direction
         *   (inclusive range of -1 to 1)
         *   @param rz z component of light direction
         *   (inclusive range of -1 to 1)
         *   @param [angle] angle of cone. Defaults to PI/3
         *   @param [concentration] concentration of cone.
         *   Defaults to 100
         */
        spotLight(
            color: Color | number[] | string,
            x: number,
            y: number,
            z: number,
            rx: number,
            ry: number,
            rz: number,
            angle?: number,
            concentration?: number
        ): void;

        /**
         *   Removes all lights present in a sketch. All
         *   subsequent geometry is rendered without lighting
         *   (until a new light is created with a call to one
         *   of the lighting functions (lights(),
         *   ambientLight(), directionalLight(), pointLight(),
         *   spotLight()).
         *   @chainable
         */
        noLights(): p5;
    }
}
