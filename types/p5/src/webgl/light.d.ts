// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Creates an ambient light with a color. Ambient
         *   light is light that comes from everywhere on the
         *   canvas. It has no particular source.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         *   @param [alpha] the alpha value
         *   @chainable
         */
        ambientLight(v1: number, v2: number, v3: number, alpha?: number): p5;

        /**
         *   Creates an ambient light with a color. Ambient
         *   light is light that comes from everywhere on the
         *   canvas. It has no particular source.
         *   @param value a color string
         *   @chainable
         */
        ambientLight(value: string): p5;

        /**
         *   Creates an ambient light with a color. Ambient
         *   light is light that comes from everywhere on the
         *   canvas. It has no particular source.
         *   @param gray a gray value
         *   @param [alpha] the alpha value
         *   @chainable
         */
        ambientLight(gray: number, alpha?: number): p5;

        /**
         *   Creates an ambient light with a color. Ambient
         *   light is light that comes from everywhere on the
         *   canvas. It has no particular source.
         *   @param values an array containing the
         *   red,green,blue & and alpha components of the color
         *   @chainable
         */
        ambientLight(values: number[]): p5;

        /**
         *   Creates an ambient light with a color. Ambient
         *   light is light that comes from everywhere on the
         *   canvas. It has no particular source.
         *   @param color the ambient light color
         *   @chainable
         */
        ambientLight(color: Color): p5;

        /**
         *   Set's the color of the specular highlight when
         *   using a specular material and specular light. This
         *   method can be combined with specularMaterial() and
         *   shininess() functions to set specular highlights.
         *   The default color is white, ie (255, 255, 255),
         *   which is used if this method is not called before
         *   specularMaterial(). If this method is called
         *   without specularMaterial(), There will be no
         *   effect.
         *
         *   Note: specularColor is equivalent to the
         *   processing function lightSpecular.
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
         *   Set's the color of the specular highlight when
         *   using a specular material and specular light. This
         *   method can be combined with specularMaterial() and
         *   shininess() functions to set specular highlights.
         *   The default color is white, ie (255, 255, 255),
         *   which is used if this method is not called before
         *   specularMaterial(). If this method is called
         *   without specularMaterial(), There will be no
         *   effect.
         *
         *   Note: specularColor is equivalent to the
         *   processing function lightSpecular.
         *   @param value a color string
         *   @chainable
         */
        specularColor(value: string): p5;

        /**
         *   Set's the color of the specular highlight when
         *   using a specular material and specular light. This
         *   method can be combined with specularMaterial() and
         *   shininess() functions to set specular highlights.
         *   The default color is white, ie (255, 255, 255),
         *   which is used if this method is not called before
         *   specularMaterial(). If this method is called
         *   without specularMaterial(), There will be no
         *   effect.
         *
         *   Note: specularColor is equivalent to the
         *   processing function lightSpecular.
         *   @param gray a gray value
         *   @chainable
         */
        specularColor(gray: number): p5;

        /**
         *   Set's the color of the specular highlight when
         *   using a specular material and specular light. This
         *   method can be combined with specularMaterial() and
         *   shininess() functions to set specular highlights.
         *   The default color is white, ie (255, 255, 255),
         *   which is used if this method is not called before
         *   specularMaterial(). If this method is called
         *   without specularMaterial(), There will be no
         *   effect.
         *
         *   Note: specularColor is equivalent to the
         *   processing function lightSpecular.
         *   @param values an array containing the
         *   red,green,blue & and alpha components of the color
         *   @chainable
         */
        specularColor(values: number[]): p5;

        /**
         *   Set's the color of the specular highlight when
         *   using a specular material and specular light. This
         *   method can be combined with specularMaterial() and
         *   shininess() functions to set specular highlights.
         *   The default color is white, ie (255, 255, 255),
         *   which is used if this method is not called before
         *   specularMaterial(). If this method is called
         *   without specularMaterial(), There will be no
         *   effect.
         *
         *   Note: specularColor is equivalent to the
         *   processing function lightSpecular.
         *   @param color the ambient light color
         *   @chainable
         */
        specularColor(color: Color): p5;

        /**
         *   Creates a directional light with a color and a
         *   direction A maximum of 5 directionalLight can be
         *   active at one time
         *   @param v1 red or hue value (depending on the
         *   current color mode),
         *   @param v2 green or saturation value
         *   @param v3 blue or brightness value
         *   @param position the direction of the light
         *   @chainable
         */
        directionalLight(v1: number, v2: number, v3: number, position: Vector): p5;

        /**
         *   Creates a directional light with a color and a
         *   direction A maximum of 5 directionalLight can be
         *   active at one time
         *   @param color color Array, CSS color string, or
         *   p5.Color value
         *   @param x x axis direction
         *   @param y y axis direction
         *   @param z z axis direction
         *   @chainable
         */
        directionalLight(color: number[] | string | Color, x: number, y: number, z: number): p5;

        /**
         *   Creates a directional light with a color and a
         *   direction A maximum of 5 directionalLight can be
         *   active at one time
         *   @param color color Array, CSS color string, or
         *   p5.Color value
         *   @param position the direction of the light
         *   @chainable
         */
        directionalLight(color: number[] | string | Color, position: Vector): p5;

        /**
         *   Creates a directional light with a color and a
         *   direction A maximum of 5 directionalLight can be
         *   active at one time
         *   @param v1 red or hue value (depending on the
         *   current color mode),
         *   @param v2 green or saturation value
         *   @param v3 blue or brightness value
         *   @param x x axis direction
         *   @param y y axis direction
         *   @param z z axis direction
         *   @chainable
         */
        directionalLight(v1: number, v2: number, v3: number, x: number, y: number, z: number): p5;

        /**
         *   Creates a point light with a color and a light
         *   position A maximum of 5 pointLight can be active
         *   at one time
         *   @param v1 red or hue value (depending on the
         *   current color mode),
         *   @param v2 green or saturation value
         *   @param v3 blue or brightness value
         *   @param x x axis position
         *   @param y y axis position
         *   @param z z axis position
         *   @chainable
         */
        pointLight(v1: number, v2: number, v3: number, x: number, y: number, z: number): p5;

        /**
         *   Creates a point light with a color and a light
         *   position A maximum of 5 pointLight can be active
         *   at one time
         *   @param v1 red or hue value (depending on the
         *   current color mode),
         *   @param v2 green or saturation value
         *   @param v3 blue or brightness value
         *   @param position the position of the light
         *   @chainable
         */
        pointLight(v1: number, v2: number, v3: number, position: Vector): p5;

        /**
         *   Creates a point light with a color and a light
         *   position A maximum of 5 pointLight can be active
         *   at one time
         *   @param color color Array, CSS color string, or
         *   p5.Color value
         *   @param x x axis position
         *   @param y y axis position
         *   @param z z axis position
         *   @chainable
         */
        pointLight(color: number[] | string | Color, x: number, y: number, z: number): p5;

        /**
         *   Creates a point light with a color and a light
         *   position A maximum of 5 pointLight can be active
         *   at one time
         *   @param color color Array, CSS color string, or
         *   p5.Color value
         *   @param position the position of the light
         *   @chainable
         */
        pointLight(color: number[] | string | Color, position: Vector): p5;

        /**
         *   Sets the default ambient and directional light.
         *   The defaults are ambientLight(128, 128, 128) and
         *   directionalLight(128, 128, 128, 0, 0, -1). Lights
         *   need to be included in the draw() to remain
         *   persistent in a looping program. Placing them in
         *   the setup() of a looping program will cause them
         *   to only have an effect the first time through the
         *   loop.
         *   @chainable
         */
        lights(): p5;

        /**
         *   Sets the falloff rates for point lights. It
         *   affects only the elements which are created after
         *   it in the code. The default value is
         *   lightFalloff(1.0, 0.0, 0.0), and the parameters
         *   are used to calculate the falloff with the
         *   following equation: d = distance from light
         *   position to vertex position
         *
         *   falloff = 1 / (CONSTANT + d * LINEAR + ( d * d ) *
         *   QUADRATIC)
         *   @param constant constant value for determining
         *   falloff
         *   @param linear linear value for determining falloff
         *   @param quadratic quadratic value for determining
         *   falloff
         *   @chainable
         */
        lightFalloff(constant: number, linear: number, quadratic: number): p5;

        /**
         *   Creates a spotlight with a given color, position,
         *   direction of light, angle and concentration. Here,
         *   angle refers to the opening or aperture of the
         *   cone of the spotlight, and concentration is used
         *   to focus the light towards the center. Both angle
         *   and concentration are optional, but if you want to
         *   provide concentration, you will also have to
         *   specify the angle. A maximum of 5 spotLight can be
         *   active at one time
         *   @param v1 red or hue value (depending on the
         *   current color mode),
         *   @param v2 green or saturation value
         *   @param v3 blue or brightness value
         *   @param x x axis position
         *   @param y y axis position
         *   @param z z axis position
         *   @param rx x axis direction of light
         *   @param ry y axis direction of light
         *   @param rz z axis direction of light
         *   @param [angle] optional parameter for angle.
         *   Defaults to PI/3
         *   @param [conc] optional parameter for
         *   concentration. Defaults to 100
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
            conc?: number
        ): p5;

        /**
         *   Creates a spotlight with a given color, position,
         *   direction of light, angle and concentration. Here,
         *   angle refers to the opening or aperture of the
         *   cone of the spotlight, and concentration is used
         *   to focus the light towards the center. Both angle
         *   and concentration are optional, but if you want to
         *   provide concentration, you will also have to
         *   specify the angle. A maximum of 5 spotLight can be
         *   active at one time
         *   @param color color Array, CSS color string, or
         *   p5.Color value
         *   @param position the position of the light
         *   @param direction the direction of the light
         *   @param [angle] optional parameter for angle.
         *   Defaults to PI/3
         *   @param [conc] optional parameter for
         *   concentration. Defaults to 100
         */
        spotLight(
            color: number[] | string | Color,
            position: Vector,
            direction: Vector,
            angle?: number,
            conc?: number
        ): void;

        /**
         *   Creates a spotlight with a given color, position,
         *   direction of light, angle and concentration. Here,
         *   angle refers to the opening or aperture of the
         *   cone of the spotlight, and concentration is used
         *   to focus the light towards the center. Both angle
         *   and concentration are optional, but if you want to
         *   provide concentration, you will also have to
         *   specify the angle. A maximum of 5 spotLight can be
         *   active at one time
         *   @param v1 red or hue value (depending on the
         *   current color mode),
         *   @param v2 green or saturation value
         *   @param v3 blue or brightness value
         *   @param position the position of the light
         *   @param direction the direction of the light
         *   @param [angle] optional parameter for angle.
         *   Defaults to PI/3
         *   @param [conc] optional parameter for
         *   concentration. Defaults to 100
         */
        spotLight(
            v1: number,
            v2: number,
            v3: number,
            position: Vector,
            direction: Vector,
            angle?: number,
            conc?: number
        ): void;

        /**
         *   Creates a spotlight with a given color, position,
         *   direction of light, angle and concentration. Here,
         *   angle refers to the opening or aperture of the
         *   cone of the spotlight, and concentration is used
         *   to focus the light towards the center. Both angle
         *   and concentration are optional, but if you want to
         *   provide concentration, you will also have to
         *   specify the angle. A maximum of 5 spotLight can be
         *   active at one time
         *   @param color color Array, CSS color string, or
         *   p5.Color value
         *   @param x x axis position
         *   @param y y axis position
         *   @param z z axis position
         *   @param direction the direction of the light
         *   @param [angle] optional parameter for angle.
         *   Defaults to PI/3
         *   @param [conc] optional parameter for
         *   concentration. Defaults to 100
         */
        spotLight(
            color: number[] | string | Color,
            x: number,
            y: number,
            z: number,
            direction: Vector,
            angle?: number,
            conc?: number
        ): void;

        /**
         *   Creates a spotlight with a given color, position,
         *   direction of light, angle and concentration. Here,
         *   angle refers to the opening or aperture of the
         *   cone of the spotlight, and concentration is used
         *   to focus the light towards the center. Both angle
         *   and concentration are optional, but if you want to
         *   provide concentration, you will also have to
         *   specify the angle. A maximum of 5 spotLight can be
         *   active at one time
         *   @param color color Array, CSS color string, or
         *   p5.Color value
         *   @param position the position of the light
         *   @param rx x axis direction of light
         *   @param ry y axis direction of light
         *   @param rz z axis direction of light
         *   @param [angle] optional parameter for angle.
         *   Defaults to PI/3
         *   @param [conc] optional parameter for
         *   concentration. Defaults to 100
         */
        spotLight(
            color: number[] | string | Color,
            position: Vector,
            rx: number,
            ry: number,
            rz: number,
            angle?: number,
            conc?: number
        ): void;

        /**
         *   Creates a spotlight with a given color, position,
         *   direction of light, angle and concentration. Here,
         *   angle refers to the opening or aperture of the
         *   cone of the spotlight, and concentration is used
         *   to focus the light towards the center. Both angle
         *   and concentration are optional, but if you want to
         *   provide concentration, you will also have to
         *   specify the angle. A maximum of 5 spotLight can be
         *   active at one time
         *   @param v1 red or hue value (depending on the
         *   current color mode),
         *   @param v2 green or saturation value
         *   @param v3 blue or brightness value
         *   @param x x axis position
         *   @param y y axis position
         *   @param z z axis position
         *   @param direction the direction of the light
         *   @param [angle] optional parameter for angle.
         *   Defaults to PI/3
         *   @param [conc] optional parameter for
         *   concentration. Defaults to 100
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
            conc?: number
        ): void;

        /**
         *   Creates a spotlight with a given color, position,
         *   direction of light, angle and concentration. Here,
         *   angle refers to the opening or aperture of the
         *   cone of the spotlight, and concentration is used
         *   to focus the light towards the center. Both angle
         *   and concentration are optional, but if you want to
         *   provide concentration, you will also have to
         *   specify the angle. A maximum of 5 spotLight can be
         *   active at one time
         *   @param v1 red or hue value (depending on the
         *   current color mode),
         *   @param v2 green or saturation value
         *   @param v3 blue or brightness value
         *   @param position the position of the light
         *   @param rx x axis direction of light
         *   @param ry y axis direction of light
         *   @param rz z axis direction of light
         *   @param [angle] optional parameter for angle.
         *   Defaults to PI/3
         *   @param [conc] optional parameter for
         *   concentration. Defaults to 100
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
            conc?: number
        ): void;

        /**
         *   Creates a spotlight with a given color, position,
         *   direction of light, angle and concentration. Here,
         *   angle refers to the opening or aperture of the
         *   cone of the spotlight, and concentration is used
         *   to focus the light towards the center. Both angle
         *   and concentration are optional, but if you want to
         *   provide concentration, you will also have to
         *   specify the angle. A maximum of 5 spotLight can be
         *   active at one time
         *   @param color color Array, CSS color string, or
         *   p5.Color value
         *   @param x x axis position
         *   @param y y axis position
         *   @param z z axis position
         *   @param rx x axis direction of light
         *   @param ry y axis direction of light
         *   @param rz z axis direction of light
         *   @param [angle] optional parameter for angle.
         *   Defaults to PI/3
         *   @param [conc] optional parameter for
         *   concentration. Defaults to 100
         */
        spotLight(
            color: number[] | string | Color,
            x: number,
            y: number,
            z: number,
            rx: number,
            ry: number,
            rz: number,
            angle?: number,
            conc?: number
        ): void;

        /**
         *   This function will remove all the lights from the
         *   sketch for the subsequent materials rendered. It
         *   affects all the subsequent methods. Calls to
         *   lighting methods made after noLights() will
         *   re-enable lights in the sketch.
         *   @chainable
         */
        noLights(): p5;
    }
}
