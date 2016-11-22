// Type definitions for semaphore-async-await v1.0.2
// Project: https://github.com/jsoendermann/semaphore-async-await
// Definitions by: Andrey Volynkin <https://github.com/Avol-V/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Class representing a semaphore
 */
export default class Semaphore {
	private _permits: number;
	private _promiseResolvers: (( value: boolean ) => void)[];
	
	/**
	 * Creates a semaphore.
	 * 
	 * @param permits The number of permits, i.e. things being allowed 
	 *  to run in parallel. To create a lock that only lets one thing run 
	 *  at a time, set this to 1. This number can also be negative.
	 */
	public constructor( permits: number );

	/**
	 * Returns a promise used to wait for a permit to become available.
	 * 
	 * @return A promise that gets resolved when execution is allowed 
	 *  to proceed.
	 */
	public wait(): Promise<boolean>;

	/**
	 * Same as wait except the promise returned gets resolved with false 
	 * if no permit becomes available in time.
	 * 
	 * @param milliseconds The time spent waiting before the wait is aborted.
	 * @return A promise that gets resolved with true when execution is allowed 
	 *  to proceed or false if the time given elapses before a permit becomes 
	 *  available.
	 */
	public waitFor( milliseconds: number ): Promise<boolean>;

	/**
	 * Synchronous function that tries to acquire a permit and returns true 
	 * if successful, false otherwise.
	 * 
	 * @return Whether a permit could be acquired.
	 */
	public tryAcquire(): boolean;

	/**
	 * Increases the number of permits by one. If there are other functions 
	 * waiting, one of them will continue to execute in a future iteration 
	 * of the event loop.
	 */
	public signal(): void;

	/**
	 * Schedules func to be called once a permit becomes available.
	 * 
	 * @param func The function to be executed.
	 */
	public execute( func: Function ): Promise<void>;
}
