import * as superfine from 'superfine';

// Strongly typed HTML element root.
superfine.patch(
    document.createElement('div'),
    <div onclick={e => console.log(e.clientX)}>
        <input type="number" value="3" min="2" max="5" disabled={false} onchange={e => {
            // TypeScript DOM library limitations prevent typing of e.target.value.
            console.log(e.target);
        }} />
        <g>
            <a href="#anything">
                <rect />
            </a>
        </g>
    </div>
);

// Strongly typed SVG element root.
superfine.patch(
    document.createElementNS('http://www.w3.org/2000/svg', 'g'),
    <g onclick={e => console.log(e.clientX)}>
        <input type="number" value="3" min="2" max="5" disabled={false} onchange={e => {
            // TypeScript DOM library limitations prevent typing of e.target.value.
            console.log(e.target);
        }} />
        <g>
            <a href="#anything">
                <rect />
            </a>
        </g>
    </g>
);
