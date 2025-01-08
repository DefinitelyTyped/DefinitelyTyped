import { Config, PluginCreator } from "tailwindcss/types/config";

declare const nightwind: {
    (): { handler: PluginCreator; config?: Config };
};

export = nightwind;
