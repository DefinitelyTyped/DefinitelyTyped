import * as React from 'react';
import DefaultIcon, { Icon, IconStack, IconProps } from 'react-fa';

export class ReactFATest extends React.Component {
    render() {
        const defaultProps = {
            name: 'flask',
            Component: 'div',
        };

        return (
            <div>
                <Icon { ...defaultProps } />
                <Icon { ...defaultProps } size='lg' />
                <Icon { ...defaultProps } spin />
                <Icon { ...defaultProps } rotate='90' />
                <Icon { ...defaultProps } flip='vertical' />
                <Icon { ...defaultProps } fixedWidth />
                <Icon { ...defaultProps } pulse />

                <Icon { ...defaultProps } className="test" onClick={ () => {} } />

                <DefaultIcon { ...defaultProps } />

                <IconStack size='lg'>
                    <Icon name='circle' stack='2x' />
                    <Icon name='flask' stack='1x' inverse />
                </IconStack>
            </div>
        );
    }
}
