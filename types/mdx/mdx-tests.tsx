// Make sure .md files can be imported as well.
import './md';

import MyMDXComponent from './MyComponent.mdx';
import MyMDComponent from './MyComponent.md';

interface TestElementType {
    foo: 'bar';
}

// A JSX implementation stub
declare function jsx(): TestElementType;

// A JSX test implementation type
declare global {
    namespace JSX {
        type Element = TestElementType;
    }
}

// $ExpectType TestElementType
<MyMDXComponent />;

// $ExpectType TestElementType
<MyMDXComponent the="answer" to={{life: 'the'}} universe={() => 'and'} everything={42} />;

// $ExpectType TestElementType
<MyMDComponent />;

// $ExpectType TestElementType
<MyMDComponent the="answer" to={{life: 'the'}} universe={() => 'and'} everything={42} />;
