import * as React from "react";
import Error from "next/error";

interface WithFooProps {
    foo: string;
}

const result = <Error statusCode={404} />;

class MyError extends Error<WithFooProps> {
    static getInitialProps() {
        return { statusCode: 404, foo: 'bar'};
    }

    render() {
        const { statusCode, foo } = this.props;
        return <div>{statusCode} {foo}</div>;
    }
}
