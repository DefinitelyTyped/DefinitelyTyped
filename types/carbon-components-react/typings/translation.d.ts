import {
    DataTableTranslationKey,
    TableBatchActionsTranslationKey,
    TableHeaderTranslationKey,
    TableToolbarTranslationKey,
} from '../components/DataTable';
import { ListBoxFieldTranslationKey } from '../components/ListBox/ListBoxField';
import { ListBoxMenuIconTranslationKey } from '../components/ListBox/ListBoxMenuIcon';
import { ListBoxSelectionTranslationKey } from '../components/ListBox/ListBoxSelection';
import { NumberInputTranslationKey } from '../components/NumberInput';
import { SideNavTranslationKey } from '../components/UIShell/SideNav';

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
