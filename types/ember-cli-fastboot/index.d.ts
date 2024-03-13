import "./services/fastboot";
import { FastBoot } from "./-private";

declare global {
    const FastBoot: FastBoot | undefined;
}

export {};
