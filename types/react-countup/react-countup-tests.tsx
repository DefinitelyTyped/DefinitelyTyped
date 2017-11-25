import * as React from "react";
import CountUp from "react-countup";

// example taken from the react-countup GitHub readme:
// https://github.com/glennreyes/react-countup#advanced


export class Example extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="react-jsonschema-form-example">
                {<CountUp
                    className="account-balance"
                    start={160527.0127}
                    end={-875.0319}
                    duration={2.75}
                    useEasing={true}
                    separator=" "
                    decimals={4}
                    decimal=","
                    prefix="EUR "
                    suffix=" left"
                    onComplete={() => console.log('complete!')}
                    onStart={() => console.log('start!')}
                />}
            </div>
        );
    }
}
