import UpdateNotifier, { NotifyOptions, Package, Settings, UpdateInfo } from "./update-notifier.js";

/** Checks if there is an available update */
export default function updateNotifier(settings?: Settings): UpdateNotifier;

export type { NotifyOptions, Package, Settings, UpdateInfo, UpdateNotifier };
