import MathJax from 'react-mathjax';
import React from 'react';

const tex = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`;

export class Component extends React.Component {
    render() {
        return (
            <MathJax.Provider>
                <div>
                    This is an inline math formula: <MathJax.Node inline formula={'a = b'} />
                    And a block one:
                    <MathJax.Node formula={tex} />
                </div>
            </MathJax.Provider>
        );
    }
}
