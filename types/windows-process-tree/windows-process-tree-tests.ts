import * as windowsProcessTree from "windows-process-tree";

windowsProcessTree.getProcessCpuUsage([], () => { });
windowsProcessTree.getProcessList(1, () => { });
windowsProcessTree.getProcessTree(1, () => { }, windowsProcessTree.ProcessDataFlag.CommandLine);
windowsProcessTree.getProcessTree(1, () => { }, windowsProcessTree.ProcessDataFlag.Memory);
windowsProcessTree.getProcessTree(1, () => { }, windowsProcessTree.ProcessDataFlag.None);
