import {
    DataTableTranslationKey,
    TableBatchActionsTranslationKey,
    TableHeaderTranslationKey,
    TableToolbarTranslationKey,
} from '../lib/components/DataTable';
import { ListBoxFieldTranslationKey } from '../lib/components/ListBox/ListBoxField';
import { ListBoxMenuIconTranslationKey } from '../lib/components/ListBox/ListBoxMenuIcon';
import { ListBoxSelectionTranslationKey } from '../lib/components/ListBox/ListBoxSelection';
import { NumberInputTranslationKey } from '../lib/components/NumberInput';
import { SideNavTranslationKey } from '../lib/components/UIShell/SideNav';

export type CarbonTranslationKey =
    DataTableTranslationKey
    | ListBoxFieldTranslationKey
    | ListBoxMenuIconTranslationKey
    | ListBoxSelectionTranslationKey
    | NumberInputTranslationKey
    | SideNavTranslationKey
    | TableBatchActionsTranslationKey
    | TableHeaderTranslationKey
    | TableToolbarTranslationKey;
