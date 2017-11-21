
import { TextField, TextContent, Image } from "./types";
export namespace utils {
    export class ImageUtils {
        /**
         * Creates an image object with a single source
         * 
         * These images may be in either JPEG or PNG formats, with the appropriate file extensions.
         * An image cannot be larger than 2 MB
         * You must host the images at HTTPS URLs that are publicly accessible.
         * widthPixels and heightPixels are optional - Do not include them unless they are exactly correct.
         * 
         * By default, for Echo Show, size takes the value X_SMALL. If the other size values are included, 
         * then the order of precedence for displaying images begins with X_LARGE and proceeds downward, 
         * which means that larger images will be downscaled for display on Echo Show if provided.
         * 
         * example : ImageUtils.makeImage('https://url/to/my/img.png', 300, 400, 'SMALL', 'image description')
         * 
         * @static
         * @param {string} url url of the image
         * @param {number} widthPixels (optional) width of the image in pixels
         * @param {number} heightPixels (optional) height of the image in pixels
         * @param {string} size size of the image (X_SMALL, SMALL, MEDIUM, LARGE, X_LARGE)
         * @param {string} description text used to describe the image in a screen reader
         * @returns 
         * @memberof ImageUtils
         */
        public static makeImage(url: string, widthPixels?: number, heightPixels?: number, size?: string, description?: string): Image;
        /**
        * 
        * Creates an image object with a multiple sources, source images are provided as an array of image objects
        * 
        * These images may be in either JPEG or PNG formats, with the appropriate file extensions.
        * An image cannot be larger than 2 MB
        * You must host the images at HTTPS URLs that are publicly accessible.
        * widthPixels and heightPixels are optional - Do not include them unless they are exactly correct.
        * 
        * By default, for Echo Show, size takes the value X_SMALL. If the other size values are included, 
        * then the order of precedence for displaying images begins with X_LARGE and proceeds downward, 
        * which means that larger images will be downscaled for display on Echo Show if provided.
        * example :
        * let imgArr = [
        *  { 'https://url/to/my/small.png', 300, 400, 'SMALL' },
        *  { 'https://url/to/my/large.png', 900, 1200, 'LARGE' },
        * ]
        *  ImageUtils.makeImage(imgArr, 'image description')
        *
        * @static
        * @param {{url : string, widthPixels : number, heightPixels : number, size : string}[]} imgArr 
        * @param {string} description text used to describe the image in a screen reader
        * @returns 
        * @memberof ImageUtils
        */
        public static makeImages(imgArr: Array<{ url: string, widthPixels: number, heightPixels: number, size: string }>, description: string): Image;
    }
    /**
     * Utility methods for building TextField objects
     * 
     * @class TextUtils
     */
    export class TextUtils {

        /**
         * Creates a plain TextField object with contents : text
         * 
         * @static
         * @param {string} text contents of plain text object
         * @returns 
         * @memberof TextUtils
         */
        public static makePlainText(text: string): TextField;

        /**
         * Creates a rich TextField object with contents : text
         * 
         * @static
         * @param {string} text 
         * @returns 
         * @memberof TextUtils
         */
        public static makeRichText(text: string): TextField;

        /**
         * Creates a textContent
         * 
         * @static
         * @param {{type : string, text : string}} primaryText 
         * @param {{type : string, text : string}} secondaryText 
         * @param {{type : string, text : string}} tertiaryText 
         * @returns 
         * @memberof TextUtils
         */
        public static makeTextContent(primaryText: { type: string, text: string },
            secondaryText: { type: string, text: string }, tertiaryText: { type: string, text: string }): TextContent
    }
}