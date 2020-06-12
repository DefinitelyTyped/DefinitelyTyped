import {
    DataTableTranslationKey,
    TableBatchActionsTranslationKey,
    TableHeaderTranslationKey,
    TableToolbarTranslationKey,
} from '../lib/components/DataTable';
import { ListBoxMenuIconTranslationKey } from '../lib/components/ListBox/ListBoxMenuIcon';
import { ListBoxSelectionTranslationKey } from '../lib/components/ListBox/ListBoxSelection';
import { NumberInputTranslationKey } from '../lib/components/NumberInput';
import { SideNavTranslationKey } from '../lib/components/UIShell/SideNav';
import { ProgressStepTranslationKey } from "../lib/components/ProgressIndicator";

export type CarbonTranslationKey =
    DataTableTranslationKey
    | ListBoxMenuIconTranslationKey
    | ListBoxSelectionTranslationKey
    | NumberInputTranslationKey
    | ProgressStepTranslationKey
    | SideNavTranslationKey
    | TableBatchActionsTranslationKey
    | TableHeaderTranslationKey
    | TableToolbarTranslationKey;
