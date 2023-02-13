import Flash from "flash";

const storagePartition = new Flash('storage');
trace(storagePartition.blockSize);
