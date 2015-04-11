// Type definitions for checksum 0.1.1
// Project: https://github.com/dshaw/checksum
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "checksum" {
	
	module checksum {
		/**
		 * Options object for all functions
		 */
		interface ChecksumOptions {
			/**
			 * Algorithm to use, default 'sha1'
			 * Can be 'sha1' or 'md5'  (see module 'crypto').
			 */
			algorithm?: string;
		}
		
		/**
		 * Generate the checksum for a file on disk
		 * @param filename	The file name
		 * @param callback	Callback which is called with the result or an error 
		 */
		function file(filename: string, callback: (error: Error, hash: string) => void): void;
		/**
		 * Generate the checksum for a file on disk
		 * @param filename	The file name
		 * @param options	Options object to indicate hash algo
		 * @param callback	Callback which is called with the result or an error 
		 */
		function file(filename: string, options: ChecksumOptions, callback: (error: Error, hash: string) => void): void;
	}
	
	/**
	 * Generates a checksum for the given value
	 * @param value	Any value
	 * @param options	Allows to set the algorithm
	 * @returns	Checksum
	 */
	function checksum(value: any, options?: checksum.ChecksumOptions): string;
	
	export = checksum;
}
