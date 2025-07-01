/// <reference types="jquery" />

import type FrappeDFBase from "../../common/frappe-df-base.d.ts";

/**
 * Controls
 * Documentation: {@link https://docs.frappe.io/framework/user/en/api/controls}
 */
declare global {
    namespace frappe {
        namespace ui {
            namespace form {
                /**
                 * Makes a frappe control based on df properties and appends into parent container.
                 * @param opts Object with parent (HTMLElement or JQuery) and df (field definition)
                 */
                function make_control(opts: {
                    parent: HTMLElement | JQuery<HTMLElement>;
                    df: FrappeDFBase;
                    render_input?: boolean;
                }): any;
            }
        }
    }
}
