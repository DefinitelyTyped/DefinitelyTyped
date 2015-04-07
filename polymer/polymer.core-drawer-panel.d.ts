// Type definitions for polymer's paper-toast
// Project: https://github.com/Polymer/core-drawer-panel
// Definitions by: Louis Grignon <https://github.com/lgrignon>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="polymer.d.ts"/>

declare module PolymerComponents {
	export module Core {
		export interface DrawerPanel extends PolymerElement, HTMLElement {
			/**
			 * Width of the drawer panel. default: '256px'
			 */
			drawerWidth: string;
	
			/**
			 * Max-width when the panel changes to narrow layout. default: '640px'
			 */
			responsiveWidth: string;
	
			/**
			 * The panel that is being selected. drawer for the drawer panel and main for the main panel. default: null
			 */
			selected: string;
	
			/**
			 * The panel to be selected when core-drawer-panel changes to narrow layout. default: 'main'
			 */
			defaultSelected: string;
	
			/**
			 * Returns true if the panel is in narrow layout. This is useful if you need to show/hide elements based on the layout. default: false
			 */
			narrow: boolean;
	
			/**
			 * If true, position the drawer to the right. default: false
			 */
			rightDrawer: boolean;
	
			/**
			 * If true, swipe to open/close the drawer is disabled. default: false
			 */
			disableSwipe: boolean;
	
			/**
			 * If true, ignore responsiveWidth setting and force the narrow layout. default: false
			 */
			forceNarrow: boolean;
	
			/**
			 * If true, swipe from the edge is disabled. default: false
			 */
			disableEdgeSwipe: boolean;
	
			/**
			 * Toggles the panel open and closed.
			 */
			togglePanel(): void;
	
			/**
			 * Opens the drawer.
			 */
			openDrawer(): void;
	
			/**
			 * Closes the drawer.
			 */
			closeDrawer(): void;
		}
	}
} 