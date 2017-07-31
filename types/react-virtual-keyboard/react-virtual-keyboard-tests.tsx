import * as React from "react";
import Keyboard from "react-virtual-keyboard";
import { ReactKeyboardOptions, ReactNavigateOptions } from "react-virtual-keyboard";

const kbOptions: ReactKeyboardOptions = {
    language: ["en", "de"],
    display: {
		bksp   :  "\u2190",
		accept : `Confirm`,
        cancel : `Cancel`,
		meta1  : "#+-",
        space  : "Space",
        alt : `<i class="fa fa-globe" aria-hidden="true"/>`,
        s: `ABC`,
	},
    acceptValid: true,
    type: "input",
    layout: "custom",
    customLayout: {
		normal: [
			`a b c d e f g h i j k l m {bksp}`,
            `n o p q r s t u v x y z w {s}`,
			`1 2 3 4 5 6 7 8 9 0 . _ - {meta1}`,
			`{space} {alt}`,
			`{cancel}  {accept}`
		],
        shift: [
			`A B C D E F G H I J K L M {bksp}`,
            `N O P Q R S T U V X Y Z W {s}`,
			`1 2 3 4 5 6 7 8 9 0 . _ - {meta1}`,
			`{space} {alt}`,
			`{cancel}  {accept}`
		],
		meta1: [
			`@ / : ; ( ) \u20ac & \" ! ? ' \` {bksp}`,
            `[ ] { } # % ^ * + = ° ´ § {s}`,
            ` \\ | ~ < > $ \u00a3 \u00a5 - , ' ² ³ {meta1}`,
            `{space} {alt}`,
			`{cancel}  {accept}`
		],
        "alt-shift": [
            `A B C D E F G H I J K L M N O {bksp}`,
            `P Q R S T U V X Y Z W \u00df \u00dc \u00d6 \u00c4 {s}`,
			`1 2 3 4 5 6 7 8 9 0 . _ - \u0301 @ {meta1}`,
			`{space} {alt}`,
			`{cancel}  {accept}`
		],
        alt: [
            `a b c d e f g h i j k l m n o {bksp}`,
            `p q r s t u v x y z w \u00df \u00fc \u00f6 \u00e4 {s}`,
			`1 2 3 4 5 6 7 8 9 0 . _ - \u0301 @ {meta1}`,
			`{space} {alt}`,
			`{cancel}  {accept}`
		],
	},
    lockInput: true,
    alwaysOpen: true,
    appendLocally: true,
    color: "light",
    class: "sxcycx",
    updateOnChange: true,
    usePreview: false,
    tabNavigation: false,
};

const navOptions: ReactNavigateOptions = {
    position   : [0, 0],
    toggleMode : true,
    focusClass : "hasFocus",
    rowLooping : true,
  };

type kbEvent = () => void;

export interface Param  {
    cancel: kbEvent;
    accept: kbEvent;
    isFetching: boolean;
    password: string;
    err: string;
}

export default (param: Param) => {
    kbOptions.canceled = () => {
        param.cancel && param.cancel();
    };

    return (
        <Keyboard
            value={param.password}
            placeholder={"Enter Password Here..."}
            name="thetextareaname"
            onAccepted={param.accept}
            onChange={() => { } }
            options={kbOptions} />
        );
};
