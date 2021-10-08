import MyMDXComponent from './MyComponent.mdx';
import MyMDComponent from './MyComponent.md';
import MyMarkdownComponent from './MyComponent.markdown';
import MyMDownComponent from './MyComponent.mdown';
import MyMKDNComponent from './MyComponent.mkdn';
import MyMKDComponent from './MyComponent.mkd';
import MyMKDownComponent from './MyComponent.mkdown';
import MyRonComponent from './MyComponent.ron';

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

// $ExpectType TestElementType
<MyMarkdownComponent />;

// $ExpectType TestElementType
<MyMarkdownComponent the="answer" to={{life: 'the'}} universe={() => 'and'} everything={42} />;

// $ExpectType TestElementType
<MyMDownComponent />;

// $ExpectType TestElementType
<MyMDownComponent the="answer" to={{life: 'the'}} universe={() => 'and'} everything={42} />;

// $ExpectType TestElementType
<MyMKDNComponent />;

// $ExpectType TestElementType
<MyMKDNComponent the="answer" to={{life: 'the'}} universe={() => 'and'} everything={42} />;

// $ExpectType TestElementType
<MyMKDComponent />;

// $ExpectType TestElementType
<MyMKDComponent the="answer" to={{life: 'the'}} universe={() => 'and'} everything={42} />;

// $ExpectType TestElementType
<MyMKDownComponent />;

// $ExpectType TestElementType
<MyMKDownComponent the="answer" to={{life: 'the'}} universe={() => 'and'} everything={42} />;

// $ExpectType TestElementType
<MyRonComponent />;

// $ExpectType TestElementType
<MyRonComponent the="answer" to={{life: 'the'}} universe={() => 'and'} everything={42} />;
