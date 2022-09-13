import * as React from 'react';
import CommandPalette, { Command } from 'react-command-palette';

const commands: Command[] = [
    {
        id: 1,
        color: 'pink',
        name: 'Foo',
        command() {
            document.location.href = `somepage.html?id=${this.id}&color=${this.color}`;
        },
    },
    {
        id: 1,
        color: 'pink',
        name: 'Bar',
        command() {
            document.location.href = `somepage.html?id=${this.id}&color=${this.color}`;
        },
    },
];

function RenderCommand({ id, color, name }: Command) {
    return (
        <div>
            <span>{id}</span>
            <span>{color}</span>
            <span>{name}</span>
        </div>
    );
}

<CommandPalette commands={commands} />;
<CommandPalette commands={commands} trigger="Click Me!" />;
<CommandPalette
    commands={commands}
    placeholder="Try typing '?st', '>st' or 'st'"
    defaultInputValue=">"
    filterSearchQuery={inputValue => inputValue.replace(/^(>|\?)/g, '')}
    open
    onChange={(inputValue, userQuery) => {
        alert(`The input was changed to:\n
            ${inputValue}\n
            \n
            The user typed:\n
            ${userQuery}
            `);
    }}
    onHighlight={suggestion => {
        console.log(`A suggested command was highlighted: \n
        ${JSON.stringify(suggestion)}
        `);
    }}
    onSelect={command => {
        alert(`A suggested command was selected: \n
        ${JSON.stringify(command)}
        `);
    }}
    onAfterOpen={() => {
        alert('The palette was opened.');
    }}
    onRequestClose={() => {
        alert('The palette was closed.');
    }}
    renderCommand={RenderCommand}
    theme={{
        modal: 'my-modal',
        overlay: 'my-overlay',
        container: 'my-container',
        header: 'my-header',
        content: 'my-content',
        input: 'my-input',
    }}
    trigger={<b>Click Me!</b>}
/>;
