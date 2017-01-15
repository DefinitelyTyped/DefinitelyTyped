import Semaphore from 'semaphore-async-await';

(
	async () =>
	{
		// A Semaphore with one permit is a lock
		const lock = new Semaphore( 1 );
		
		// Helper function used to wait for the given number of milliseconds
		const wait = ( ms: number ) => new Promise( r => setTimeout( r, ms ) );
		
		let globalVar: number = 0;
		
		( async () =>
		{
			// This waits (without blocking the event loop) until a permit becomes available
			await lock.wait();
			const localCopy = globalVar;
			await wait( 500 );
			globalVar = localCopy + 1;
			// Signal releases the lock and lets other things run
			lock.signal();
		} )();
		
		// This returns false because the function above has acquired the lock
		// and is scheduled to continue executing once the main function yields or
		// returns
		console.log( lock.tryAcquire() === false );
		
		// Similar to the function above but using waitFor instead of wait. We
		// give it five seconds to wait which is enough time for it to acquire
		// the lock
		(
			async () =>
			{
				// This waits for at least five seconds, trying to acquire a permit.
				const didAcquireLock = await lock.waitFor( 5000 );
				if ( didAcquireLock )
				{
					const localCopy = globalVar;
					await wait( 500 );
					globalVar = localCopy + 1;
					// Signal releases the lock and lets other things run
					lock.signal();
				}
			}
		)();
		
		// Alternative to using wait()/signal() directly
		lock.execute(
			async () =>
			{
				const localCopy = globalVar;
				await wait( 500 );
				globalVar = localCopy + 1;
			}
		);
		
		// Wait for everything to finish
		await wait( 2000 );
		
		console.log( globalVar === 3 );
	}
)();
