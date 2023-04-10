import * as React from 'react';
import LoadingIndicator, { LoadingIndicatorColor, LoadingIndicatorProps } from 'react-loading-indicator';

export class LoadingIndicatorTest extends React.PureComponent {
    render(): JSX.Element {
        const color: LoadingIndicatorColor = {
            red: 224,
            green: 33,
            blue: 41,
            alpha: 1,
        };
        const props: LoadingIndicatorProps = {
            color,
            segments: 6,
        };
        return (
            <>
                default:
                <LoadingIndicator />
                custom color:
                <LoadingIndicator color={color} />
                more props:
                <LoadingIndicator {...props} />
            </>
        );
    }
}
