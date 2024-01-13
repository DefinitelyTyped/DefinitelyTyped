import "karma";

declare module "karma" {
    interface CustomLauncher {
        /** run IE in emulation mode */
        "x-ua-compatible"?: string | undefined;
    }
}
