import * as superfine from 'superfine';

// Strongly typed HTML element root.
superfine.patch(
    document.createElement('div'),
    <div onclick={e => console.log(e.clientX)}>
        <input type="number" value="3" min="2" max="5" disabled={false} onchange={e => {
            // TypeScript DOM library limitations prevent typing of e.target.value.
            console.log(e.target);
        }} />
        <svg onclick={e => {
            console.log(e.clientX);
        }}>
            <g>
                <rect></rect>
            </g>
            <g>
                <rect></rect>
                <rect />
                <text>example string</text>
                <text>example string</text>
                example string
                <rect key="example key a"></rect>
                <rect key="example key b"></rect>
            </g>
        </svg>
        <a href="#anything">
            <ul>
                <li></li>
            </ul>
            <ul>
                <li></li>
                <li />
                <li>example string</li>
                <li>example string</li>
                example string
                <li key="example key a"></li>
                <li key="example key b"></li>
            </ul>
        </a>
    </div>
);

// Strongly typed SVG element root.
superfine.patch(
    document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
    <svg onclick={e => {
        console.log(e.clientX);
    }}>
        <g>
            <rect></rect>
        </g>
        <g>
            <rect></rect>
            <rect />
            <text>example string</text>
            <text>example string</text>
            example string
            <rect key="example key a"></rect>
            <rect key="example key b"></rect>
        </g>
    </svg>
);
