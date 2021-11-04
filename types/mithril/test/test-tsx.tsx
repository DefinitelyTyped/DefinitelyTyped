import * as m from 'mithril';

interface Attrs {
    id: number;
    text: string;
}

const PojoComp: m.Component<Attrs> = {
    view: ({attrs}) => <p class="abc">{attrs.text}</p>
};

class ClassComp implements m.ClassComponent<Attrs> {
    view({attrs}: m.Vnode<Attrs>) {
        return <p class="abc">{attrs.text}</p>;
    }
}

function ClosureComp(): m.Component<Attrs> {
    return {
        view: ({attrs}) => <p class="abc">{attrs.text}</p>
    };
}

function testRender() {
    return [
        <ClassComp id={1} text="Title 1"/>,
        // <PojoComp id={2} text="Title 2"/>,  <- won't compile
        // <ClosureComp id={3} text="Title 3"/>  <- won't compile
    ];
}

function testChildren() {
    return <div class="parent">
        <div class="child1">one</div>
        <div class="child2">two</div>
    </div>;
}
