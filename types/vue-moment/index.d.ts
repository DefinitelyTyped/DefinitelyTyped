import { Duration, DurationInputArg1, DurationInputArg2, Moment, MomentFormatSpecification, MomentInput } from "moment";
import { PluginObject } from "vue";

declare namespace VueMomentPlugin {
    interface Options {
        // The optional (self-maintained) moment instance
        moment?: Moment | undefined;
    }

    interface VueStatic extends Moment {
        (options: Options): void;
        (inp?: MomentInput, format?: MomentFormatSpecification, strict?: boolean): Moment;
        (inp?: MomentInput, format?: MomentFormatSpecification, language?: string, strict?: boolean): Moment;
        duration(inp?: DurationInputArg1, unit?: DurationInputArg2): Duration;
    }
}

declare module "vue/types/vue" {
    interface Vue {
        $moment: VueMomentPlugin.VueStatic;
    }
}

interface VueMoment extends PluginObject<undefined> {}

declare const VueMoment: VueMoment;
export = VueMoment;
