import * as React from 'react';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';

class Test1 extends React.Component {
    render() {
        return (
            <SvgAnimatedLinearGradient
                duration={123}
                height={123}
                key="abc"
                primaryColor="#abc"
                secondaryColor="#abc"
                useNativeDriver={true}
                width={123}
                x1="123"
                x2="123"
                y1="123"
                y2="123"
            />
        );
    }
}

class Test2 extends React.Component {
    render() {
        return <SvgAnimatedLinearGradient />;
    }
}
