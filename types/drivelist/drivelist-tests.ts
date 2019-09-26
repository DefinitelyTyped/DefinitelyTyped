import * as drivelist from "drivelist";

drivelist.list((error, drives) => {
    if (!error) {
        drives.forEach(drive => {
            const {
                enumerator,
                busType,
                busVersion,
                device,
                devicePath,
                raw,
                description,
                error,
                size,
                blockSize,
                logicalBlockSize,
                mountpoints,
                isReadOnly,
                isSystem,
                isVirtual,
                isRemovable,
                isCard,
                isSCSI,
                isUSB,
                isUAS
            } = drive;

            enumerator; // $ExpectType string
            busType; // $ExpectType BusType
            busVersion; // $ExpectType string | null
            device; // $ExpectType string
            devicePath; // $ExpectType string | null
            raw; // $ExpectType string
            description; // $ExpectType string
            error; // $ExpectType any
            size; // $ExpectType number | null
            blockSize; // $ExpectType number | null
            logicalBlockSize; // $ExpectType number | null

            mountpoints; //  $ExpectType MountPoint[]
            mountpoints.forEach(mountpoint => {
                const { path, label } = mountpoint;

                path; // $ExpectType string
                label; // $ExpectType string | undefined
            });

            isReadOnly; // $ExpectType boolean
            isSystem; // $ExpectType boolean
            isVirtual; // $ExpectType boolean | null
            isRemovable; // $ExpectType boolean | null
            isCard; // $ExpectType boolean | null
            isSCSI; // $ExpectType boolean | null
            isUSB; // $ExpectType boolean | null
            isUAS; // $ExpectType boolean | null
        });
    }
});
