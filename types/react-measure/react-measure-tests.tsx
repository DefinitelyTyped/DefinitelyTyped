import * as React from "react";
import * as Measure from "react-measure";

class Test extends React.Component {
    render() {
        return (
            <Measure accurate
                whitelist={["height", "width"]}
                onMeasure={this.onMeasure.bind(this) }
                >
                <div>test</div>
            </Measure>
        );
    }

    onMeasure(dimensions: Measure.Dimensions): void {
        dimensions.width;
        dimensions.height;
    }
}

class Test2 extends React.Component {
    render() {
        return (
            <Measure accurate
                whitelist={["height", "width"]}
                >
                {(dimensions: Measure.Dimensions) =>
                    <div>
                        <div>Height: {dimensions.height}</div>
                    </div>
                }
            </Measure>
        );
    }
}

function testHocComponent<T>(Component: React.ComponentClass<T>): React.ComponentClass<T> {
    return class extends React.Component<T> {
        render(): JSX.Element {
            return (
                <Measure onMeasure={this.handleDimensionChange}>
                    <Component {...this.props} />;
                </Measure>
            );
        }

        private handleDimensionChange = (dimensions: Measure.Dimensions) => {
            dimensions.width;
            dimensions.height;
        }
    };
}
