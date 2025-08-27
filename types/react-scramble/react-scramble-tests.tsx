import * as React from "react";
import Scramble from "react-scramble";

const ScrambleTest = () => {
    return (
        <>
            <Scramble
                steps={[
                    { action: "+", roll: 2, text: "Scramble", type: "all" },
                    { action: "+" },
                ]}
                text={"Scramble!"}
            />
            <Scramble
                steps={[
                    { action: "+" },
                ]}
                autoStart={true}
                bindMethod={({ start, pause }) => {
                    start(); // $ExpectType void
                    pause(); // $ExpectType void
                }}
                text={"Scramble!"}
                mouseEnterTrigger={"pause"}
                mouseLeaveTrigger={"pause"}
                noBreakSpace={false}
                preScramble
                speed={"fast"}
            />
        </>
    );
};
