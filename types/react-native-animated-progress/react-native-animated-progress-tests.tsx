import AnimatedProgress from 'react-native-animated-progress';
import * as React from 'react';

const ProgressExample: React.FC = () => {
    const withoutProps = <AnimatedProgress />;
    const withFullProps = (
        <AnimatedProgress
            animated={true}
            backgroundColor="black"
            height={5}
            indeterminate={false}
            onCompletion={() => {}}
            progress={23}
            progressDuration={50}
            indeterminateDuration={35}
            trackColor="#ffffff"
        />
    );
    return (
        <div>
            {withoutProps}
            {withFullProps}
        </div>
    );
};
