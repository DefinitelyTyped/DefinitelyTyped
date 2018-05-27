///
///
import "./directives/annotation_tooltip";
import "./directives/dash_class";
import "./directives/confirm_click";
import "./directives/dash_edit_link";
import "./directives/dropdown_typeahead";
import "./directives/metric_segment";
import "./directives/misc";
import "./directives/ng_model_on_blur";
import "./directives/password_strength";
import "./directives/spectrum_picker";
import "./directives/tags";
import "./directives/value_select_dropdown";
import "./directives/plugin_component";
import "./directives/rebuild_on_change";
import "./directives/give_focus";
import './jquery_extended';
import './partials';
import './components/jsontree/jsontree';
import { grafanaAppDirective } from './components/grafana_app';
import { sideMenuDirective } from './components/sidemenu/sidemenu';
import { searchDirective } from './components/search/search';
import { infoPopover } from './components/info_popover';
import { colorPicker } from './components/colorpicker';
import { navbarDirective } from './components/navbar/navbar';
import { arrayJoin } from './directives/array_join';
import { liveSrv } from './live/live_srv';
import { Emitter } from './utils/emitter';
import { layoutSelector } from './components/layout_selector/layout_selector';
import { switchDirective } from './components/switch';
import { dashboardSelector } from './components/dashboard_selector';
import { queryPartEditorDirective } from './components/query_part/query_part_editor';
import { WizardFlow } from './components/wizard/wizard';
import 'app/core/controllers/all';
import 'app/core/services/all';
import 'app/core/routes/routes';
import './filters/filters';
import coreModule from './core_module';
import appEvents from './app_events';
import {
    default as colors,
    OK_COLOR,
    ALERTING_COLOR,
    NO_DATA_COLOR,
    DEFAULT_ANNOTATION_COLOR,
    REGION_FILL_ALPHA
} from './utils/colors';

import { assignModelProperties } from './utils/model_utils';
import { contextSrv } from './services/context_srv';
import { KeybindingSrv } from './services/keybindingSrv';
import { helpModal } from './components/help/help';
import { updateLegendValues } from './time_series2';
export {
    arrayJoin, coreModule, grafanaAppDirective, sideMenuDirective,
    navbarDirective, searchDirective, colorPicker, liveSrv, layoutSelector,
    switchDirective, infoPopover, Emitter, appEvents, dashboardSelector,
    queryPartEditorDirective, WizardFlow, colors, assignModelProperties,
    contextSrv, KeybindingSrv, helpModal, updateLegendValues
};
