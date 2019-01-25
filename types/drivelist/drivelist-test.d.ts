import * as drivelist from "drivelist";

drivelist.list((error, drives) => {
    if (!error) {
        drives.forEach(drive => {
            if (drive.isRemovable) {
                // removable storage
            }
            drive.mountpoints.forEach(mountpoint => {
                const { path, label } = mountpoint;
                console.log(path, label);
            });
        });
    }
});
