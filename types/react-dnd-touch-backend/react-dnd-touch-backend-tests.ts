import * as ReactDnd from "react-dnd";
import TouchBackend from "react-dnd-touch-backend";

const component = () => null;

const dndComponent = ReactDnd.DragDropContext(TouchBackend)(component);
const dndComponentMouseEvents = ReactDnd.DragDropContext(TouchBackend({enableMouseEvents: true}))(component);
