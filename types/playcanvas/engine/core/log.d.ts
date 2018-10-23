declare namespace pc {

    namespace log {

        /**
         * @private
         * @function
         * @name pc.log.write
         * @description Write text to the console
         * @param {String} text
         */
        function write (text: string): void;

        /**
         * @private
         * @function
         * @name pc.log.open
         * @description Starting logging to the console
         * @param {String} text
         */
        function open(text: string): void;

        /**
         * @private
         * @function
         * @name pc.log.info
         * @description Write text to the log preceded by 'INFO:'
         * @param {String} text
         */
        function info(text: string): void;

        /**
         * @private
         * @function
         * @name pc.log.debug
         * @description Write text to the log preceded by 'DEBUG:'
         * @param {String} text
         */
        function debug(text: string): void;

        /**
         * @private
         * @function
         * @name pc.log.error
         * @description Write text to the log preceded by 'ERROR:'
         * @param {String} text
         */
        function error(text: string): void;

        /**
         * @private
         * @function
         * @name pc.log.warning
         * @description Write text to the log preceded by 'WARNING:'
         * @param {String} text
         */
        function warning(text: string): void;

        /**
         * @private
         * @function
         * @name pc.log.alert
         * @description Write text to the log preceded by 'ALERT:' and pop up an alert dialog box with the text
         * @param {String} text
         */
        function alert(text: string): void;

        /**
         * @private
         * @function
         * @name pc.log.assert
         * @description If condition is false, then write text to the log preceded by 'ASSERT:' and pop up a dialog box.
         * @param {Boolean} condition
         * @param {String} text
         */
        function assert(condition: boolean, text: string): void;
    }
}
