import type { ViewProps } from "react-native";
import {
    BubblingEventHandler,
    DirectEventHandler,
    Double,
    Float,
    Int32,
    UnsafeObject,
    WithDefault,
} from "react-native/Libraries/Types/CodegenTypes";
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";
import codegenNativeComponent, { NativeComponentType } from "react-native/Libraries/Utilities/codegenNativeComponent";

type Event = Readonly<{
    value: Double;
}>;

interface NativeProps extends ViewProps {
    string?: string | undefined;
    number?: number | undefined;
    boolean?: boolean | undefined;
    default?: WithDefault<"option1" | "option2", "option1"> | undefined;
    double?: Double | undefined;
    float?: Float | undefined;
    int32?: Int32 | undefined;
    unsafeObject?: UnsafeObject | undefined;
    onBubblingEventHandler?: BubblingEventHandler<Event> | undefined;
    onDirectEventHandler?: DirectEventHandler<Event> | undefined;
}

export type SampleViewType = NativeComponentType<NativeProps>;

interface NativeCommands {
    changeBackgroundColor: (
        viewRef: React.ElementRef<SampleViewType>,
        color: string,
    ) => void;
}

export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
    supportedCommands: ["changeBackgroundColor"],
});

export default codegenNativeComponent<NativeProps>("SampleView");
