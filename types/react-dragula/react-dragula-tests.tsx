import React = require('react');
import reactDragula = require('react-dragula');
import { Drake } from 'dragula';

function DraggableItemss() {
    const draggableContainer = React.useRef<HTMLDivElement>(null);
    const [drake, setDrake] = React.useState<Drake | null>(null);

    React.useEffect(() => {
        if (draggableContainer.current) {
            setDrake(
                reactDragula([draggableContainer.current], {
                    moves: (_el, _container, handle) => {
                        if (!handle) {
                            return false;
                        }

                        return Boolean(handle.closest('.draggable'));
                    },
                }),
            );
        }
    }, [draggableContainer.current]);

    React.useEffect(() => {
        if (drake) {
            drake.on('dragend', e => {
                console.log('dragend');
            });
        }
    }, [drake]);

    return (
        <div ref={draggableContainer}>
            <div className="draggable">drag me 1</div>
            <div>don't drag me</div>
            <div className="draggable">drag me 2</div>
            <div className="draggable">drag me 3</div>
        </div>
    );
}
