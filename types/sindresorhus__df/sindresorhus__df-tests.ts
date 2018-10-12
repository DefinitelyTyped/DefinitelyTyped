import df = require('@sindresorhus/df');

(async () => {
    const disks  = await df();
    disks.forEach((disk: df.SpaceInfo) => {
        const {filesystem, size, used, available, capacity, mountpoint} = disk;
        return {
            filesystem, size, used, available, capacity, mountpoint
        };
    });
	/*
	[{
		filesystem: '/dev/disk1',
		size: 499046809600,
		used: 443222245376,
		available: 55562420224,
		capacity: 0.89,
		mountpoint: '/'
	}, …]
	*/

	let {filesystem, size, used, available, capacity, mountpoint} = await df.fs('/dev/disk1');
	/*
	{
		filesystem: '/dev/disk1',
		…
	}
	*/

	({filesystem, size, used, available, capacity, mountpoint} = await df.file('./simple.txt'));
	/*
	{
		filesystem: '/dev/disk1',
		…
	}
	*/
})();
