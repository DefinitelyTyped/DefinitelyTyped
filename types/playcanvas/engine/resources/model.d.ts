declare namespace pc {

    /**
     * @name pc.ModelHandler
     * @class Resource Handler for creating pc.Model resources
     * @description {@link pc.ResourceHandler} use to load 3D model resources
     * @param {pc.GraphicsDevice} device The graphics device that will be rendering
     */
    class ModelHandler {
        constructor(device: pc.GraphicsDevice)

        /**
         * @function
         * @name pc.ModelHandler#load
         * @description Fetch model data from a remote url
         */
        load(url: string, callback: Function): void;

        /**
         * @function
         * @name pc.ModelHandler#open
         * @description Process data in deserialized format into a pc.Model object
         * @param {Object} data The data from model file deserialized into a JavaScript Object
         */
        open(url: string, data: any): any;

        /**
         * @function
         * @name pc.ModelHandler#addParser
         * @description Add a parser that converts raw data into a {@link pc.Model}
         * Default parser is for JSON models
         * @param {Object} parser See JsonModelParser for example
         * @param {Function} decider Function that decides on which parser to use. 
         * Function should take (url, data) arguments and return true if this parser should be used to parse the data into a {@link pc.Model}.
         * The first parser to return true is used.
         */
        addParser(parser: {}, decider: Function): void;
    }
}
