import PdfPrinter from 'pdfmake';
import JsxPdf from 'jsx-pdf';
import { createWriteStream } from 'fs';

const fonts = {
    Roboto: {
        normal: 'Roboto-Regular.ttf',
    },
};

const printer = new PdfPrinter(fonts);

const pdfDoc2 = printer.createPdfKitDocument(
    JsxPdf.renderPdf(
        <document defaultStyle={{ font: 'Roboto', fontSize: 12 }}>
            <content>This will appear in my PDF!</content>
        </document>,
    ),
);
pdfDoc2.pipe(createWriteStream('out.pdf'));
pdfDoc2.end();

// these are all from the README

const doc1 = (
    <document>
        <content>
            <stack color="red">
                <text>First red parahraph.</text>
                <text>Second red parahraph.</text>
            </stack>
            <text color="blue">Blue parahraph.</text>
        </content>
    </document>
);

const doc2 = (
    <document>
        <content>
            <columns columnGap={10}>
                <column width={100}>Fixed width column</column>
                <column width="10%">Percentage width column</column>
                <column width="auto">Column that adjusts width based on the content</column>
                <column width="*">Column that fills the remaining space</column>
            </columns>
        </content>
    </document>
);

const docWithOrderedList = (
    <document>
        <content>
            <ol reversed start={10} separator={['(', ')']} type="lower-roman">
                <text>Item 1</text>
                <text>Item 2</text>
                <text>Item 3</text>
            </ol>
        </content>
    </document>
);

const docWithUnorderedList = (
    <document>
        <content>
            <ul color="blue" markerColor="red" type="square">
                <text>Item 1</text>
                <text>Item 2</text>
                <text>Item 3</text>
            </ul>
        </content>
    </document>
);
const leftCellStyle = {
    color: 'grey',
};

const doc3 = (
    <document>
        <content>
            <table widths={[100, '*', 'auto']} headerRows={1} layout="headerLineOnly">
                <row>
                    <cell>Fixed width column</cell>
                    <cell>Column that fills the remaining space</cell>
                    <cell>Column that adjusts width based on the content</cell>
                </row>
                <row>
                    <cell {...leftCellStyle}>Cell 1.1</cell>
                    <cell>Cell 1.2</cell>
                    <cell>Cell 1.3</cell>
                </row>
                <row>
                    <cell {...leftCellStyle}>Cell 2.1</cell>
                    <cell>Cell 2.2</cell>
                    <cell>Cell 2.3</cell>
                </row>
            </table>
        </content>
    </document>
);

const doc4 = (
    <document>
        <content>
            <image src="/home/bob/photos/Bob.png" width={150} height={150} />
        </content>
    </document>
);

const doc5 = (
    <document>
        <content>
            <svg
                content={`
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle fill="red" cx="50" cy="50" r="50"/>
          </svg>
        `}
            />
        </content>
    </document>
);

const Greeting = ({ name }: { name: string }) => <text>Hello, {name}!</text>;

const doc6 = (
    <document>
        <content>
            <Greeting name="Bob" />
        </content>
    </document>
);

const GroupGreeting = ({ names }: { names: string[] }) => (
    <stack>
        {names.map(name => (
            <Greeting name={name} />
        ))}
    </stack>
);

const doc7 = (
    <document>
        <content>
            <GroupGreeting names={['Bob', 'Alice']} />
        </content>
    </document>
);

const Signature = () => <text>JSX-PDF, Inc.</text>;

const SignedGreeting = ({ name }: { name?: string }) => (
    <stack>
        {name && <Greeting name={name} />}
        <Signature />
    </stack>
);

const doc8 = (
    <document>
        <content>
            <SignedGreeting />
        </content>
    </document>
);

const AnonymousGreeting = () => <text>We don't know you.</text>;

const SignedGreeting2 = ({ name }: { name?: string }) => (
    <stack>
        {name ? <Greeting name={name} /> : <AnonymousGreeting />}
        <Signature />
    </stack>
);

const doc9 = (
    <document>
        <content>
            <SignedGreeting2 />
        </content>
    </document>
);

const SignedGreeting3 = ({ name }: { name?: string }) => {
    const greeting = name ? <Greeting name={name} /> : <AnonymousGreeting />;

    return (
        <stack>
            {greeting}
            <Signature />
        </stack>
    );
};

const doc10 = (
    <document pageSize="A4">
        <content>
            <SignedGreeting3 />
        </content>
    </document>
);

const doc11 = (
    <document
        pageMargins={[20, 20, 20, 20]}
        pageSize="A4"
        defaultStyle={{
            font: 'OpenSans',
        }}
        info={{
            author: 'Buzz Lightyear',
        }}
    >
        <header>Greeting</header>
        <content>Hello, Bob!</content>
        <footer>JSX-PDF, Inc.</footer>
    </document>
);

const doc12 = (
    <document>
        <header>
            {(currentPage: number, pageCount: number) => (
                <text>
                    Page {currentPage} of {pageCount}.
                </text>
            )}
        </header>
        <content>{/* ... */}</content>
    </document>
);

// @ts-expect-error image can't have children
const invalid1 = <image>children</image>;

// @ts-expect-error svg can't have children
const invalid1 = <svg>children</svg>;

// @ts-expect-error header doesn't accept props
const invalid1 = <header color="green">children</header>;
