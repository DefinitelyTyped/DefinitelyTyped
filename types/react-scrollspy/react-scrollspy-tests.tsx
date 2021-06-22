import * as React from 'react';
import Scrollspy from 'react-scrollspy';

const items: string[] = ['section-1', 'section-2', 'section-3'];

function TestComponent() {
    return (
        <div>
            <div>
                <section id="section-1">section 1</section>
                <section id="section-2">section 2</section>
                <section id="section-3">section 3</section>
            </div>

            <Scrollspy items={items} currentClassName="is-current" onUpdate={el => console.log(el.id)}>
                <li>
                    <a href="#section-1">section 1</a>
                </li>
                <li>
                    <a href="#section-2">section 2</a>
                </li>
                <li>
                    <a href="#section-3">section 3</a>
                </li>
            </Scrollspy>
        </div>
    );
}
