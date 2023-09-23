import { text } from "estimated-read-time";
const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan laoreet massa, quis fringilla nunc ornare eu.
Suspendisse arcu turpis, luctus id tortor quis, aliquam pellentesque magna. Mauris at lacinia libero.
Maecenas efficitur dolor velit, egestas elementum purus aliquam ac. In rutrum magna non dui ultrices, eget varius tortor interdum.
Curabitur non dolor neque. Pellentesque volutpat nisl dui, sit amet eleifend neque porta a. Proin nec consequat augue.
Proin vel eros dapibus diam facilisis eleifend eu lobortis velit. Aenean justo diam, lobortis a felis ac, elementum rutrum nulla.
Quisque aliquam congue leo, a congue dui vehicula non. Maecenas vehicula erat ut odio dignissim finibus. Proin ut leo elit.
Nam nec purus vel est ullamcorper feugiat. Nam a arcu elit. Vivamus id felis eros.
`;
let result;
result = text(lorem);
