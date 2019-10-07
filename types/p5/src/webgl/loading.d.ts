// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Load a 3d model from an OBJ or STL file.  One of
         *   the limitations of the OBJ and STL format is that
         *   it doesn't have a built-in sense of scale. This
         *   means that models exported from different programs
         *   might be very different sizes. If your model isn't
         *   displaying, try calling loadModel() with the
         *   normalized parameter set to true. This will resize
         *   the model to a scale appropriate for p5. You can
         *   also make additional changes to the final size of
         *   your model with the scale() function.
         *
         *   Also, the support for colored STL files is not
         *   present. STL files with color will be rendered
         *   without color properties.
         *   @param path Path of the model to be loaded
         *   @param normalize If true, scale the model to a
         *   standardized size when loading
         *   @param [successCallback] Function to be called
         *   once the model is loaded. Will be passed the 3D
         *   model object.
         *   @param [failureCallback] called with event error
         *   if the model fails to load.
         *   @return the p5.Geometry object
         */
        loadModel(
            path: string,
            normalize: boolean,
            successCallback?: (p1: Geometry) => any,
            failureCallback?: (p1: Event) => any
        ): Geometry;

        /**
         *   Load a 3d model from an OBJ or STL file.  One of
         *   the limitations of the OBJ and STL format is that
         *   it doesn't have a built-in sense of scale. This
         *   means that models exported from different programs
         *   might be very different sizes. If your model isn't
         *   displaying, try calling loadModel() with the
         *   normalized parameter set to true. This will resize
         *   the model to a scale appropriate for p5. You can
         *   also make additional changes to the final size of
         *   your model with the scale() function.
         *
         *   Also, the support for colored STL files is not
         *   present. STL files with color will be rendered
         *   without color properties.
         *   @param path Path of the model to be loaded
         *   @param [successCallback] Function to be called
         *   once the model is loaded. Will be passed the 3D
         *   model object.
         *   @param [failureCallback] called with event error
         *   if the model fails to load.
         *   @return the p5.Geometry object
         */
        loadModel(
            path: string,
            successCallback?: (p1: Geometry) => any,
            failureCallback?: (p1: Event) => any
        ): Geometry;

        /**
         *   Render a 3d model to the screen.
         *   @param model Loaded 3d model to be rendered
         */
        model(model: Geometry): void;
    }
}
