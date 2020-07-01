import { ComponentType } from 'react';

import Notice from '../notice';

declare namespace Snackbar {
    interface Props {
        /**
         * An array of `Notice.Action` objects.
         */
        actions?: readonly Notice.Action[];
        className?: string;
        /**
         * Callback to be called when the snackbar is to be removed.
         */
        onRemove?(): void;
    }
}
declare const Snackbar: ComponentType<Snackbar.Props>;

export default Snackbar;
