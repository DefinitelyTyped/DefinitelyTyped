import * as React from "react";
import { KeyValue } from "react-key-value";

<KeyValue
    customAddButtonRenderer={(handleAddNew) => (
        <div>
            <a
                href="#"
                onClick={handleAddNew}
            >
                <span>+</span> Add new meta data
            </a>
        </div>
    )}
    onChange={(rows) => console.log(rows)}
/>;
