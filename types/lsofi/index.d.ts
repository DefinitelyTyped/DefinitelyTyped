declare module "lsofi" {
	/**
	 * Check if a port is being used by a process or not
	 * @param {number} port - The port to check
	 * @returns {number|null} Process ID of the originating process or null if no process is listening to this port
	 */
	export default function lsofi(port: number): Promise<number|null>
}