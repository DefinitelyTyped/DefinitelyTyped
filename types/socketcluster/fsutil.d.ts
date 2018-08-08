import { PathLike } from "fs";

export function fileExists(filePath: PathLike, callback: (exists: boolean) => void): void;

export function waitForFile(
  filePath: PathLike,
  checkInterval: number,
  startTime: number,
  maxWaitDuration: number,
  timeoutErrorMessage?: string
): Promise<void>;
