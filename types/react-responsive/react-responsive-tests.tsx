import * as React from "react";
import MediaQuery, {
    toQuery
} from "react-responsive";

class QueryTests extends React.Component {
    render() {
        return (
            <div>
                <div>Device Test!</div>
                <MediaQuery minDeviceWidth={1224}>
                    <div>You are a desktop or laptop</div>
                    <MediaQuery minDeviceWidth={1824}>
                        <div>You also have a huge screen</div>
                    </MediaQuery>
                    <MediaQuery maxWidth={1224}>
                        <div>You are sized like a tablet or mobile phone though</div>
                    </MediaQuery>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1224}>
                    <div>You are a tablet or mobile phone</div>
                </MediaQuery>
                <MediaQuery orientation="portrait">
                    <div>You are portrait</div>
                </MediaQuery>
                <MediaQuery orientation="landscape">
                    <div>You are landscape</div>
                </MediaQuery>
                <MediaQuery minResolution="2dppx">
                    <div>You are retina</div>
                </MediaQuery>
                <MediaQuery query="(min-device-width: 1224px)">
                    <div>You are a desktop or laptop</div>
                    <MediaQuery query="(min-device-width: 1824px)">
                        <div>You also have a huge screen</div>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 1224px)">
                        <div>You are sized like a tablet or mobile phone though</div>
                    </MediaQuery>
                </MediaQuery>
            </div>
        );
    }
}

const ChildrenPropTest: React.FC<React.PropsWithChildren<{}>> = ({ children }) => <MediaQuery minWidth={992} children={children} />;

class PropsTests extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery minDeviceWidth={700} component="ul">
                    <li>Item 1</li>
                    <li>Item 2</li>
                </MediaQuery>
                <MediaQuery minDeviceWidth={700} component={ChildrenPropTest}>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </MediaQuery>
                <MediaQuery minDeviceWidth={700} component={QueryTests}>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </MediaQuery>
                <MediaQuery minDeviceWidth={1200} className="some-class">
                    <div>Wrapped</div>
                    <div>Content</div>
                </MediaQuery>
                <MediaQuery style={{textTransform: 'uppercase'}} all={true}>
                    uppercase me!
                </MediaQuery>
                <MediaQuery minDeviceWidth={1224}
                            values={{ aspectRatio: '4/3',
                                      deviceAspectRatio: '4/3',
                                      height: '1600px',
                                      deviceHeight: 1600,
                                      width: 1600,
                                      deviceWidth: '1600px',
                                      color: true,
                                      colorIndex: true,
                                      monochrome: false,
                                      resolution: 1,
                                      orientation: 'portrait',
                                      scan: 'progressive',
                                      type: 'print'
                                    }}>
                    Values supplied for SSR
                </MediaQuery>
            </div>
        );
    }
}

class FunctionChildrenTest extends React.Component {
    render() {
        return (
            <MediaQuery minDeviceWidth={700}>
                {(matches: boolean) => {
                    if (matches) {
                        return <div>Media query matches!</div>;
                    } else {
                        return <div>Media query does not match!</div>;
                    }
                }}
            </MediaQuery>
        );
    }
}

class CallbackTest extends React.Component {
    onBeforeChange = (matches: boolean): void => {
        if (matches) {
            // do something
        }
    }

    onChange = (matches: boolean): void => {
        if (matches) {
            // do something else
        }
    }

    render() {
        return (
            <MediaQuery minDeviceWidth={700}
                        onBeforeChange={this.onBeforeChange}
                        onChange={this.onChange}>
                Media query matches!
            </MediaQuery>
        );
    }
}

const queryStrTest: string = toQuery({
    type: 'print',
    screen: true,
    minHeight: 666
});
