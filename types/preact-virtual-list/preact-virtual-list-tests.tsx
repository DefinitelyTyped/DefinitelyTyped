import {
    FunctionalComponent,
    Component,
    h } from "preact";
import VirtualList from "preact-virtual-list";

class TestClass extends Component<any> {
    render() {
        return (
            <div>
                <VirtualList
                    data={[1, 2, 3, 4]}
                    renderRow={(row: any) => <div>{row}</div>}
                    rowHeight={20}
                    overscanCount={5}
                />
            </div>
        );
    }
}

const TestFunction: FunctionalComponent<any> = (props: any) => {
    return (
        <div>
            <VirtualList
                data={[1, 2, 3]}
                renderRow={(row: any) => <div>{row}</div>}
                rowHeight={30}
            />
        </div>
    );
};
