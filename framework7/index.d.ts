// Type definitions for Framework7
// Project: https://github.com/nolimits4web/template7/
// Definitions by: JasonKleban <https://github.com/JasonKleban/Framework7.d.ts>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="dom7.d.ts" />

declare namespace Framework7 {
	interface PageCallbackObject {
		trigger(): void;
		remove(): void;
	}

	interface Framework7Options {
		// Material Theme (Material theme only)
		material?: boolean;
		materialPageLoadDelay?: number;
		materialRipple?: boolean;
		materialRippleElements?: string;
		materialPreloaderHtml?: string;
		
		// Caching
		cache?: boolean;
		cacheDuration?: number;
		cacheIgnore?: string[];
		cacheIgnoreGetParameters?: boolean;
		
		// Fast clicks library
		fastClicks?: boolean;
		fastClicksDelayBetweenClicks?: number;
		fastClicksDistanceThreshold?: number;
		activeState?: boolean;
		activeStateElemets?: string;
		tapHold?: boolean;
		tapHoldDelay?: number;
		tapHoldPreventClicks?: boolean;
		
		// Navigation / Router
		router?: boolean;
		ajaxLinks?: string;
		dynamicPageUrl?: string;
		uniqueHistory?: boolean;
		uniqueHistoryIgnoreGetParameters?: boolean;
		externalLinks?: string;
		allowDuplicateUrls?: boolean;
		animateNavBackIcon?: boolean;
		animatePages?: boolean;
		preloadPreviousPage?: boolean;
		preroute?: (view, options) => void;
		preprocess?: (content?: any, url?: string, next?: (resultContent: any) => void) => void;
		
		// Push State
		pushState?: boolean;
		pushStateSeparator?: string;
		pushStateRoot?: string;
		pushStateNoAnimation?: boolean;
		pushStatePreventOnLoad?: boolean;
		
		// Swipe back (iOS theme only)
		swipeBackPage?: boolean;
		swipeBackPageThreshold?: number;
		swipeBackPageActiveArea?: number;
		swipeBackPageAnimateShadow?: boolean;
		swipeBackPageAnimateOpacity?: boolean;
		
		// Sortable Lists
		sortable?: boolean;
		
		// Swipeout
		swipeout?: boolean;
		swipeoutNoFollow?: boolean;
		
		// Side Panels
		swipePanel?: string;
		swipePanelCloseOpposite?: boolean;
		swipePanelOnlyClose?: boolean;
		swipePanelActiveArea?: number;
		swipePanelNoFollow?: boolean;
		swipePanelThreshold?: number;
		panelsCloseByOutside?: boolean;
		
		// Modals
		modalTitle?: string;
		modalButtonOk?: string;
		modalButtonCancel?: string;
		modalPreloaderTitle?: string;
		modalCloseByOutside?: boolean;
		actionsCloseByOutside?: boolean;
		popupCloseByOutside?: boolean;
		modalTemplate?: string;
		modalActionsTemplate?: string;
		modalActionsToPopoverTemplate?: string;
		modalUsernamePlaceholder?: string;
		modalPasswordPlaceholder?: string;
		modalStack?: boolean;
		
		// Smart Select
		smartSelectOpenIn?: string;
		smartSelectBackTemplate?: string;
		smartSelectPopupCloseTemplate?: string;
		smartSelectBackText?: string;
		smartSelectPopupCloseText?: string;
		smartSelectPickerCloseText?: string;
		smartSelectSearchbar?: boolean;
		smartSelectBackOnSelect?: boolean;
		smartSelectFormTheme?: string;
		smartSelectNavbarTheme?: string;
		
		// Navbars / Toolbars
		hideNavbarOnPageScroll?: boolean;
		hideToolbarOnPageScroll?: boolean;
		hideTabbarOnPageScroll?: boolean;
		showBarsOnPageScrollEnd?: boolean;
		showBarsOnPageScrollTop?: boolean;
		scrollTopOnNavbarClick?: boolean;
		
		// Images Lazy Load
		imagesLazyLoadThreshold?: number;
		imagesLazyLoadSequential?: boolean;
		imagesLazyLoadPlaceholder?: string;
		
		// Notifications
		notificationTitle?: string;
		notificationSubtitle?: string;
		notificationMedia?: string;
		notificationHold?: number;
		notificationCloseOnClick?: boolean;
		notificationCloseIcon?: boolean;
		notificationCloseButtonText?: string;
		
		// Status Bar (iOS theme only)
		statusbarOverlay?: boolean;
		scrollTopOnStatusbarClick?: boolean;
		
		// Template7
		template7Pages?: boolean;
		template7Data?: any;
		precompileTemplates?: boolean;
		templates?: any;
		
		// Page Callbacks
		onPageBeforeInit?: (pageName: string, callback: (page: PageData) => void) => PageCallbackObject;
		onPageInit?: (pageName: string, callback: (page: PageData) => void) => PageCallbackObject;
		onPageBeforeAnimation?: (pageName: string, callback: (page: PageData) => void) => PageCallbackObject;
		onPageAfterAnimation?: (pageName: string, callback: (page: PageData) => void) => PageCallbackObject;
		onPageBeforeRemove?: (pageName: string, callback: (page: PageData) => void) => PageCallbackObject;
		onPageBack?: (pageName: string, callback: (page: PageData) => void) => PageCallbackObject;
		onPageAfterBack?: (pageName: string, callback: (page: PageData) => void) => PageCallbackObject;
		
		// Ajax Callbacks
		onAjaxStart?: (xhr: Dom7.Dom7XHR) => void;
		onAjaxComplete?: (xhr: Dom7.Dom7XHR) => void;
		
		// Namespace
		/** 
		* Class name for your View element -
		* Attention! If you change following class names you will also need to change them in CSS! */
		viewClass?: string;
		/** 
		* Class name for your Main View element -
		* Attention! If you change following class names you will also need to change them in CSS! */
		viewMainClass?: string;
		/** 
		* Class name for your Views element -
		* Attention! If you change following class names you will also need to change them in CSS! */
		viewsClass?: string;
		
		// Init
		init?: boolean;
	}

	interface ModalButton {
		text?: string;
		bold?: boolean;
		close?: boolean;
		onClick?: () => void;
	}

	interface ActionSheetButton {
		text?: string;
		bold?: boolean;
		colo: string;
		bg: string;
		label: boolean;
		disabled: boolean;
		onClick?: () => void;
	}

	interface ModelOptions {
		title?: string;
		text?: string;
		afterText?: string;
		buttons: string[];
		verticalButtons: boolean;
		onClick: (modal: HTMLElement, index: number) => void;
	}

	interface Modal {

	}

	interface SearchBarOptions {
		searchList?: string | HTMLElement;
		searchIn?: string;
		found?: string | HTMLElement;
		notFoud?: string | HTMLElement;
		overlay?: string | HTMLElement;
		ignore?: string;
		customSearch?: boolean;
		removeDiacritics?: boolean;
		hideDividers?: boolean;
		hideGroups?: boolean;
		// Callbacks
		onSearch?: (query: string) => void;
		onEnable?: (query: string) => void;
		onDisable?: (query: string) => void;
		onClear?: (query: string) => void;
	}

	interface SearchBar {
		params: SearchBarOptions;
		query: string;
		searchList: Dom7.Dom7;
		container: Dom7.Dom7;
		input: Dom7.Dom7;
		active: boolean;

		search(query: string): void;
		enable(): void;
		disable(): void;
		clear(): void;
		destroy(): void;
	}

	interface ViewParameters {
		dynamicNavbar?: boolean;
		url?: string;
		domCache?: boolean;
		linksView?: string | View;
		
		// Navigation
		uniqueHistory?: boolean;
		uniqueHistoryIgnoreGetParameters?: boolean;
		allowDuplicateUrls?: boolean;
		animatePages?: boolean;
		preloadPreviousPage?: boolean;
		reloadPages?: boolean;
		preroute?: (view, options) => void;
		preprocess?: (content, url, next) => void;
		
		// Swipe back (iOS theme only)
		swipeBackPage?: boolean;
		swipeBackPageThreshold?: number;
		swipeBackPageActiveArea?: number;
		swipeBackPageAnimateShadow?: boolean;
		swipeBackPageAnimateOpacity?: boolean;
		
		// Callbacks (iOS theme only)
		onSwipeBackMove?: (callbackData: any) => void;
		onSwipeBackBeforeChange?: (callbackData: any) => void;
		onSwipeBackAfterChange?: (callbackData: any) => void;
		onSwipeBackBeforeReset?: (callbackData: any) => void;
		onSwipeBackAfterReset?: (callbackData: any) => void;
	}

	interface RouterOptions {
		url?: string;
		content?: string | HTMLElement | Dom7.Dom7 | HTMLElement[];
		pageName?: string;
		template?: (template: any) => void;
		context?: any;
		contextName?: string;
		query?: any;
		force?: boolean;
		ignoreCache?: boolean;
		animatePages?: boolean;
		reload?: boolean;
		reloadPrevious?: boolean;
		pushState?: boolean;
	}

	interface VirtualListOptions {
		items?: any[];
		rowsBefore?: number;
		rowsAfter?: number;
		cols?: number;
		height?: number | { (item: any): number };
		template?: string | Function;
		renderItem?: (index: number, item: any) => HTMLElement;
		dynamicHeightBufferSize?: number;
		cache?: boolean;
		updatableScroll?: boolean;
		showFilteredItemsOnly?: boolean;
		
		// Search
		searchByItem?: (query: string, index: number, item: any) => boolean;
		searchAll?: (query: string, items: any[]) => number[];
		
		// Callbacks
		onItemBeforeInsert?: (list: VirtualList, item: any) => void;
		onBeforeClear?: (list: VirtualList, fragment: DocumentFragment) => void;
		onItemsBeforeInsert?: (list: VirtualList, fragment: DocumentFragment) => void;
		onItemsAfterInsert?: (list: VirtualList, fragment: DocumentFragment) => void;
	}

	interface VirtualList {
		items: any[];
		filteredItems: any[];
		domCache: any;
		params: VirtualListOptions;
		listBlock: Dom7.Dom7;
		pageContent: Dom7.Dom7;
		currentFromIndex: number;
		currentToIndex: number;
		reachEnd: boolean;

		filterItems(indexes: number[]): VirtualList;
		resetFilter(): VirtualList;
		appendItem(item: any): VirtualList;
		appendItems(items: any[]): VirtualList;
		prependItem(item: any): VirtualList;
		prependItems(items: any[]): VirtualList;
		replaceItem(index: number, item: any): VirtualList;
		replaceAllItems(items: any[]): VirtualList;
		moveItem(oldIndex: number, newIndex: number): VirtualList;
		insertItemBefore(index: number, item: any): VirtualList;
		deleteItem(index: number): VirtualList;
		deleteItems(indexes: number[]): VirtualList;
		deleteAllItems(): VirtualList;
		clearCache(): VirtualList;
		destroy(): void;
		update(): VirtualList;
		scrollToItem(index: number): VirtualList;
	}

	interface Router {
		load(options: RouterOptions): void;
		back(options: RouterOptions): void;
		loadPage(url: string): void;
		loadContent(content: string | HTMLElement | Dom7.Dom7 | HTMLElement[]): void;
		reloadPage(url: string): void;
		reloadContent(content: string | HTMLElement | Dom7.Dom7 | HTMLElement[]): void;
		reloadPreviousPage(url: string): void;
		reloadPreviousContent(content: string | HTMLElement | Dom7.Dom7 | HTMLElement[]): void;
		refreshPage(): void;
		refreshPreviousPage(): void;
	}

	interface PageData {
		name?: string;
		url?: string;
		query?: any;
		view?: View;
		container?: HTMLElement;
		from?: string;
		navbarInnerContainer?: HTMLElement;
		swipeBack?: boolean;
		context?: any;
		fromPage?: any;
	}

	interface View {
		params: ViewParameters;
		history: string[];
		contentCache: any;
		url: string;
		pagesContainer: HTMLElement;
		activePage: PageData;
		main: boolean;
		router: Router;

		hideNavbar(): void;
		showNavbar(): void;
		hideToolbar(): void;
		showToolbar(): void;
		destroy(): void;
	}

	interface PhotoBrowserOptions {
		photos?: { html?: string; url?: string; caption?: string }[]
		initialSlide?: number;
		spaceBetween?: number;
		speed?: number;
		zoom?: boolean;
		maxZoom?: number;
		minZoom?: number;
		exposition?: boolean;
		expositionHideCaptions?: boolean;
		swipeToClose?: boolean;
		view?: View;
		type?: string;
		loop?: boolean;
		theme?: string;
		captionsTheme?: string;
		navbar?: boolean;
		toolbar?: boolean;
		backLinkText?: string;
		ofText?: string;
		
		// Lazy Loading
		lazyLoading?: boolean;
		lazyLoadingInPrevNext?: boolean;
		lazyLoadingOnTransitionStart?: boolean;
		
		// Templates
		template?: string;
		navbarTemplate?: string;
		toolbarTemplate?: string;
		photoTemplate?: string;
		photoLazyTemplate?: string;
		objectTemplate?: string;
		captionTemplate?: string;
		
		// Callbacks
		onOpen?: (photobrowser) => void;
		onClose?: (photobrowser) => void;
		onSwipeToClose?: (photobrowser) => void;
		
		// Swiper Callbacks
		onSlideChangeStart?: (swiper) => void;
		onSlideChangeEnd?: (swiper) => void;
		onTransitionStart?: (swiper) => void;
		onTransitionEnd?: (swiper) => void;
		onClick?: (swiper, event) => void;
		onTap?: (swiper, event) => void;
		onDoubleTap?: (swiper, event) => void;
		onLazyImageLoad?: (swiper, slide, image) => void;
		onLazyImageReady?: (swiper, slide, image) => void;
	}

	interface PhotoBrowser {
		swiper: Swiper;
		container: string | HTMLElement | Dom7.Dom7
		exposed: boolean;
		activeSlideIndex: number;
		params: PhotoBrowserOptions;

		open(index: number): void;
		close(): void;
		toggleZoom(): void;
		toggleExposition(): void;
		enableExposition(): void;
		disableExposition(): void;
	}

	interface AutocompleteOptions {
		openIn?: string;
		source?: (autocomplete, query, render) => void;
		limit?: number;
		preloader?: boolean;
		preloaderColor?: string;
		valueProperty?: string;
		textProperty?: string;
		
		// Standalone Autocomplete Parameters
		opener?: string | HTMLElement;
		popupCloseText?: string;
		backText?: string;
		pageTitle?: string;
		searchbarPlaceholderText?: string;
		searchbarCancelText?: string;
		notFoundText?: string;
		multiple?: boolean;
		backOnSelect?: boolean;
		navbarTheme?: string;
		formTheme?: string;
		
		// Dropdown Autocomplete Parameters
		input?: string | HTMLElement;
		dropdownPlaceholderText?: string;
		updateInputValueOnSelect?: boolean;
		expandInput?: boolean;
		
		// Callbacks
		onChange?: (autocomplete: Autocomplete, value: any[]) => void;
		onOpen?: (autocomplete: Autocomplete) => void;
		onClose?: (autocomplete: Autocomplete) => void;
		
		// Templates
		navbarTemplate?: string;
		itemTemplate?: string;
		dropdownTemplate?: string;
		dropdownItemTemplate?: string;
		dropdownPlaceholderTemplate?: string;
	}

	interface Autocomplete {
		params: AutocompleteOptions;
		value: any[];
		opened: boolean;
		dropdown: Dom7.Dom7;
		popup: Dom7.Dom7;

		open(): Autocomplete;
		close(): Autocomplete;
		showPreloader(): Autocomplete;
		hidePreloader(): Autocomplete;
		destroy(): void;
	}

	interface PickerColumnOptions {
		values?: string[];
		displayValues?: string[];
		cssClass?: string;
		textAlign?: string;
		width?: number;
		divider?: boolean;
		content?: string;
		
		// Callbacks
		onChange?: (p: Picker, value: string, displayValue: string) => void;
	}

	interface PickerColumn {
		container: Dom7.Dom7;
		items: Dom7.Dom7;
		value: any;
		displayValue: any;
		activeIndex: number;

		setValue(value: any, duration: number): void;
		replaceValues(values: any[], displayValues: any[]): void;
	}

	interface PickerOptions {
		// Common Picker Modal Component Parameters
		container?: string | HTMLElement;
		input?: string | HTMLElement;
		scrollToInput?: boolean;
		inputReadOnly?: boolean;
		convertToPopover?: boolean;
		onlyOnPopover?: boolean;
		cssClass?: string;
		closeByOutsideClick?: boolean;
		toolbar?: boolean;
		toolbarCloseText?: string;
		toolbarTemplate?: string;
		
		// Specific Picker Parameters
		rotateEffect?: boolean;
		momentumRatio?: number;
		updateValuesOnMomentum?: boolean;
		updateValuesOnTouchmove?: boolean;
		value?: any[];
		formatValue?: (p: Picker, values: any[], displayValues: string[]) => string;
		cols?: PickerColumn[];
		
		// Callbacks
		onChange?: (p: Picker, values, displayValues) => void;
		onOpen?: (p: Picker) => void;
		onClose?: (p: Picker) => void;

	}

	interface Picker {
		params: PickerOptions;
		value: any[];
		displayValue: any[];
		opened: boolean;
		inline: boolean;
		cols: PickerColumn[];
		container: Dom7.Dom7;

		setValue(values: any[], duration: number): Picker;
		open(): Picker;
		close(): Picker;
		destroy(): void;
	}

	type DateRange = Date | Date[] | { (d: Date): boolean } | { from: Date; to: Date; };
	interface RangeClass {
		cssClass: string;
		range: DateRange;
	}

	interface CalendarOptions {
		// Common Picker Modal Component Parameters
		container?: string | HTMLElement;
		input?: string | HTMLElement;
		scrollToInput?: boolean;
		inputReadOnly?: boolean;
		convertToPopover?: boolean;
		onlyOnPopover?: boolean;
		cssClass?: string;
		closeByOutsideClick?: boolean;
		toolbar?: boolean;
		toolbarCloseText?: string;
		toolbarTemplate?: string;
		
		// Specific Calendar Parameters
		value?: Date[];
		disabled?: DateRange;
		events?: DateRange;
		rangesClasses?: RangeClass[];
		formatValue?: (p: Calendar, values: Date[]) => string;
		monthNames?: string[];
		monthNamesShort?: string[];
		dayNames?: string[];
		dayNamesShort?: string[];
		updateValuesOnTouchmove?: boolean;
		firstDay?: number;
		weekendDays?: string[];
		dateFormat?: string;
		multiple?: boolean;
		rangePicker?: boolean;
		direction?: string;
		minDate?: Date;
		maxDate?: Date;
		touchmove?: boolean;
		animate?: boolean;
		closeOnSelect?: boolean;
		weekHeader?: boolean;
		monthPicker?: boolean;
		monthPickerTemplate?: string;
		yearPicker?: boolean;
		yearPickerTemplate?: string;
		
		// Callbacks
		onChange?: (p: Calendar, values: Date[], displayValues: string[]) => void;
		onMonthAdd?: (p: Calendar, monthContainer: HTMLElement) => void;
		onDayClick?: (p: Calendar, dayContainer: HTMLElement, year: number, month: number, day: number) => void;
		onMonthYearChangeStart?: (p: Calendar, year: number, month: number) => void;
		onMonthYearChangeEnd?: (p: Calendar, year: number, month: number) => void;
		onOpen?: (p: Calendar) => void;
		onClose?: (p: Calendar) => void;
	}

	interface Calendar {
		params: CalendarOptions;
		value: Date[];
		opened: boolean;
		inline: boolean;
		cols: PickerColumn[];
		container: Dom7.Dom7;

		setValue(values: Date[]): Calendar;
		nextMonth(duration: number): Calendar;
		prevMonth(duration: number): Calendar;
		nextYear(): Calendar;
		prevYear(): Calendar;
		setYearMonth(year: number, month: number, duration: number): Calendar;
		open(): Calendar;
		close(): Calendar;
		destroy(): Calendar;
	}

	interface MessageOptions {
		text?: string;
		name?: string;
		avatar?: string;
		type?: string;
		label?: string;
		day?: string;
		time?: string;
	}

	interface Message {
	}

	interface MessagesOptions {
		autoLayout: boolean;
		newMessagesFirst: boolean;
		messages: Message[];
		messageTemplate: string;
	}

	interface Messages {
		params: MessagesOptions;
		container: Dom7.Dom7;

		addMessage(messageParameters: MessageOptions, method: string, animate: boolean): HTMLElement;
		appendMessage(messageParameters: MessageOptions, animate: boolean): HTMLElement;
		prependMessage(messageParameters: MessageOptions, animate: boolean): HTMLElement;
		addMessages(messages: Message[], method: string, animate: boolean): HTMLElement[];
		removeMessage(message: Message): boolean;
		removeMessages(messages: Message[]): boolean;
		scrollMessages(): void;
		layout(): void;
		clean(): void;
		destroy(): void;
	}

	interface MessageBarOptions {
		maxHeight?: number;
	}

	interface MessageBar {
		params: MessageBarOptions;
		container: Dom7.Dom7;
		textarea: HTMLTextAreaElement;

		value(): string;
		value(newValue?: string): MessageBar;
	}

	interface NotificationOptions {
		title?: string;
		subtitle?: string;
		media?: string;
		hold?: number;
		closeIcon?: boolean;
		button?: { text: string, color: string, close: boolean };
		closeOnClick?: boolean;
		additionalClass?: string;
		custom?: string;
		onClick?: () => void;
		onClose?: () => void;
	}
}

declare namespace Swiper {
	interface SwiperOptions {
		initialSlide?: number;
		direction?: string;
		speed?: number;
		setWrapperSize?: boolean;
		virtualTranslate?: boolean;
		width?: number;
		height?: number;
		autoHeight?: boolean;
		roundLengths?: boolean;
		nested?: boolean;
		
		// Autoplay
		autoplay?: number;
		autoplayDisableOnInteraction?: boolean;
		
		// Progress
		watchSlidesProgress?: boolean;
		watchSlidesVisibility?: boolean;
		
		// Freemode
		freeMode?: boolean;
		freeModeMomentum?: boolean;
		freeModeMomentumRatio?: number;
		freeModeMomentumBounce?: boolean;
		freeModeMomentumBounceRatio?: number;
		freeModeMinimumVelocity?: number;
		freeModeSticky?: boolean;
		
		// Effects
		effect?: string;
		fade?: any;
		cube?: any;
		coverflow?: any;
		
		// Parallax
		parallax?: boolean;
		
		// Slides grid
		spaceBetween?: number;
		slidesPerView?: number | string;
		slidesPerColumn?: number;
		slidesPerColumnFill?: string;
		slidesPerGroup?: number;
		centeredSlides?: boolean;
		slidesOffsetBefore?: number;
		slidesOffsetAfter?: number;
		
		// Grab Cursor
		grabCursor?: boolean;
		
		// Touches
		touchEventsTarget?: string;
		touchRatio?: number;
		touchAngle?: number;
		simulateTouch?: boolean;
		shortSwipes?: boolean;
		longSwipes?: boolean;
		longSwipesRatio?: number;
		longSwipesMs?: number;
		followFinger?: boolean;
		onlyExternal?: boolean;
		threshold?: number;
		touchMoveStopPropagation?: boolean;
		iOSEdgeSwipeDetection?: boolean;
		iOSEdgeSwipeThreshold?: number;
		
		// Touch Resistance
		resistance?: boolean;
		resistanceRatio?: number;
		
		// Clicks
		preventClicks?: boolean;
		preventClicksPropagation?: boolean;
		slideToClickedSlide?: boolean;
		
		// Swiping / No swiping
		allowSwipeToPrev?: boolean;
		allowSwipeToNext?: boolean;
		noSwiping?: boolean;
		noSwipingClass?: string;
		swipeHandler?: string | HTMLElement;
		
		// Pagination
		pagination?: string | HTMLElement;
		paginationHide?: boolean;
		paginationClickable?: boolean;
		paginationElement?: string;
		paginationBulletRender?: (index: number, className: string) => string;
		
		// Navigation Buttons
		nextButton?: string | HTMLElement;
		prevButton?: string | HTMLElement;
		
		// Accessibility
		a11y?: boolean
		prevSlideMessage?: string;
		nextSlideMessage?: string;
		firstSlideMessage?: string;
		lastSlideMessage?: string;
		paginationBulletMessage?: string;
		
		// Scollbar
		scrollbar?: string | HTMLElement;
		scrollbarHide?: boolean;
		scrollbarDraggable?: boolean;
		scrollbarSnapOnRelease?: boolean;
		
		// Keyboard / Mousewheel
		keyboardControl?: boolean;
		mousewheelControl?: boolean;
		mousewheelForceToAxis?: boolean;
		mousewheelReleaseOnEdges?: boolean;
		mousewheelInvert?: boolean;
		mousewheelSensitivity?: number;
		
		// Hash Navigation
		hashnav?: boolean;
		
		// Images
		preloadImages?: boolean;
		updateOnImagesReady?: boolean;
		lazyLoading?: boolean;
		lazyLoadingInPrevNext?: boolean;
		lazyLoadingOnTransitionStart?: boolean;
		
		// Loop
		loop?: boolean;
		loopAdditionalSlides?: number;
		loopedSlides?: number;
		
		// Controller
		control?: Swiper | Swiper[];
		controlInverse?: boolean;
		controlBy?: string;
		
		// Observer
		observer?: boolean;
		observeParents?: boolean;
		
		// Breakpoints
		breakpoints?: any;
		
		// Callbacks
		runCallbacksOnInit?: boolean;
		onInit?: (swiper: Swiper) => void;
		onSlideChangeStart?: (swiper: Swiper) => void;
		onSlideChangeEnd?: (swiper: Swiper) => void;
		onSlideNextStart?: (swiper: Swiper) => void;
		onSlideNextEnd?: (swiper: Swiper) => void;
		onSlidePrevStart?: (swiper: Swiper) => void;
		onSlidePrevEnd?: (swiper: Swiper) => void;
		onTransitionStart?: (swiper: Swiper) => void;
		onTransitionEnd?: (swiper: Swiper) => void;
		onTouchStart?: (swiper: Swiper, event: string) => void;
		onTouchMove?: (swiper: Swiper, event: string) => void;
		onTouchMoveOpposite?: (swiper: Swiper, event: string) => void;
		onSliderMove?: (swiper: Swiper, event: string) => void;
		onTouchEnd?: (swiper: Swiper, event: string) => void;
		onClick?: (swiper: Swiper, event: string) => void;
		onTap?: (swiper: Swiper, event: string) => void;
		onDoubleTap?: (swiper: Swiper, event: string) => void;
		onImagesReady?: (swiper: Swiper) => void;
		onProgress?: (swiper: Swiper, progress: number) => void;
		onReachBeginning?: (swiper: Swiper) => void;
		onReachEnd?: (swiper: Swiper) => void;
		onDestroy?: (swiper: Swiper) => void;
		onSetTranslate?: (swiper: Swiper, translate: boolean) => void;
		onSetTransition?: (swiper: Swiper, transition) => void;
		onAutoplayStart?: (swiper: Swiper) => void;
		onAutoplayStop?: (swiper: Swiper) => void;
		onLazyImageLoad?: (swiper: Swiper, slide: number, image: HTMLElement) => void;
		onLazyImageReady?: (swiper: Swiper, slide: number, image: HTMLElement) => void;
		
		// Namespace
		slideClass?: string
		slideActiveClass?: string
		slideVisibleClass?: string
		slideDuplicateClass?: string
		slideNextClass?: string
		slidePrevClass?: string
		wrapperClass?: string
		bulletClass?: string
		bulletActiveClass?: string
		paginationHiddenClass?: string
		buttonDisabledClass?: string
	}
}

declare class Swiper {
	constructor(swiperContainer: string | HTMLElement | Dom7.Dom7, parameters: Swiper.SwiperOptions);
	
	params: Swiper.SwiperOptions;
	container: Dom7.Dom7;
	wrapper: Dom7.Dom7;
	slides: Dom7.Dom7;
	bullets: Dom7.Dom7;
	width: number;
	height: number;
	translate: string;
	progress: number;
	activeIndex: number;
	previousIndex: number;
	isBeginning: boolean
	isEnd: boolean
	autoplaying: boolean
	animating: boolean
	touches: { startX: number; startY: number; currentX: number; currentY: number; diff: any };
	clickedIndex: number;
	clickedSlide: HTMLElement;

	slideNext(runCallbacks?: boolean,  speed?: number): Swiper;
	slidePrev(runCallbacks?: boolean,  speed?: number): Swiper;
	slideTo(index,  speed?: number,  runCallbacks?: boolean): Swiper;
	update(updateTranslate?: boolean): Swiper;
	onResize(): Swiper;
	detachEvents(): Swiper;
	attachEvents(): Swiper;
	startAutoplay(): Swiper;
	stopAutoplay(): Swiper;
	destroy(deleteInstance?: boolean, cleanupStyles?: boolean): Swiper;
	appendSlide(... slides: Array<HTMLElement | string>): Swiper;
	prependSlide(... slides: Array<HTMLElement | string>): Swiper;
	removeSlide(slideIndex?: number): Swiper;
	removeAllSlides(): Swiper;
	setWrapperTranslate(translate?: string): Swiper;
	getWrapperTranslate(): Swiper;
	on(callback: string, handler: () => void): Swiper;
	once(callback: string, handler: () => void): Swiper;
	off(callback: string): Swiper;
	lockSwipeToNext(): Swiper;
	unlockSwipeToNext(): Swiper;
	lockSwipeToPrev(): Swiper;
	unlockSwipeToPrev(): Swiper;
	lockSwipes(): Swiper;
	unlockSwipes(): Swiper;
	disableMousewheelControl(): Swiper;
	enableMousewheelControl(): Swiper;
	disableKeyboardControl(): Swiper;
	enableKeyboardControl(): Swiper;
}

declare class Framework7 {
	constructor(options?: Framework7.Framework7Options);
	
	//device info
	android: boolean;
	androidChrome: boolean;
	ios: boolean;
	ipad: boolean;
	iphone: boolean;
	pixelRatio: number;
	statusBar: boolean;
	os: string;
	osVersion: string;
		
	// Views
	views: Framework7.View[]
	addView(selector: string | HTMLElement | Dom7.Dom7, parameters: Framework7.ViewParameters) : Framework7.View;
	getCurrentView(index?: number): Framework7.View | Framework7.View[];
	
	// Search Bar
	searchbar(searchbarContainer: string | HTMLElement | Dom7.Dom7, parameters): Framework7.SearchBar;
	
	// Side panels
	openPanel(position: string);
	closePanel();
	
	// Overlays
	alert(text: string, callbackOk?: () => void): Framework7.Modal;
	alert(text: string, title?: string, callbackOk?: () => void): Framework7.Modal;
	confirm(text: string, callbackOk?: () => void, callbackCancel?: () => void): Framework7.Modal;
	confirm(text: string, title?: string, callbackOk?: () => void, callbackCancel?: () => void): Framework7.Modal;
	prompt(text: string, callbackOk?: (input: string) => void, callbackCancel?: (input: string) => void): Framework7.Modal;
	prompt(text: string, title?: string, callbackOk?: (input: string) => void, callbackCancel?: (input: string) => void): Framework7.Modal;
	modalLogin(text: string, callbackOk?: (username: string, password: string) => void, callbackCancel?: (username: string, password: string) => void): Framework7.Modal;
	modalLogin(text: string, title?: string, callbackOk?: (username: string, password: string) => void, callbackCancel?: (username: string, password: string) => void): Framework7.Modal;
	modalPassword(text: string, callbackOk?: (password: string) => void, callbackCancel?: (password: string) => void): Framework7.Modal;
	modalPassword(text: string, title?: string, callbackOk?: (password: string) => void, callbackCancel?: (password: string) => void): Framework7.Modal;
	showPreloader(title: string): void;
	hidePreloader(): void;
	showIndicator(): void;
	hideIndicator(): void;
	model(options: Framework7.ModelOptions): Framework7.Modal;
	popup(content: HTMLElement | string | Dom7.Dom7, removeOnClose?: boolean): Framework7.Modal;
	popover(content: HTMLElement | string | Dom7.Dom7, target: HTMLElement | string | Dom7.Dom7, removeOnClose?: boolean): Framework7.Modal;
	closeModal(modal: Framework7.Modal | HTMLElement | string): void;
	actions(groups: Framework7.ActionSheetButton[][]): void;
	actions(buttons: Framework7.ActionSheetButton[]): HTMLElement;
	actions(target: HTMLElement | string | Dom7.Dom7, groups: Framework7.ActionSheetButton[][]): void;
	actions(target: HTMLElement | string | Dom7.Dom7, buttons: Framework7.ActionSheetButton[]): HTMLElement;
	loginScreen(): HTMLElement;
	pickerModal(picker: HTMLElement | string | Dom7.Dom7, removeOnClose?: boolean): HTMLElement;
	
	// Progress Bars
	setProgressbar(container: HTMLElement | string | Dom7.Dom7, progress: number, speed: number): void;
	hideProgressbar(container: HTMLElement | string | Dom7.Dom7): void;
	showProgressbar(container: HTMLElement | string | Dom7.Dom7, color: string): void;
	showProgressbar(progress: number, color: string): void;
	showProgressbar(container: HTMLElement | string | Dom7.Dom7, progress: number, color: string): void;
	showProgressbar(): void;
	
	// Swipeout
	swipeoutOpen(el: HTMLElement | string | Dom7.Dom7, direction: string, callback: Function): void;
	swipeoutClose(el: HTMLElement | string | Dom7.Dom7, callback: Function): void;
	swipeoutDelete(el: HTMLElement | string | Dom7.Dom7, callback: Function): void;
	swipeoutOpenedEl: HTMLElement;
	
	// Sortable List
	sortableOpen(sortableContainer: HTMLElement | string | Dom7.Dom7): void;
	sortableClose(sortableContainer: HTMLElement | string | Dom7.Dom7): void;
	sortableToggle(sortableContainer: HTMLElement | string | Dom7.Dom7): void;
	
	// Virtual List
	virtualList(listBlockContainer: HTMLElement | string | Dom7.Dom7, parameters: Framework7.VirtualListOptions): Framework7.VirtualList;
	
	// Accordian
	accordionOpen(item: HTMLElement | string | Dom7.Dom7);
	accordionClose(item: HTMLElement | string | Dom7.Dom7);
	accordionToggle(item: HTMLElement | string | Dom7.Dom7);
	
	// SmartSelect
	smartSelectOpen(smartSelect: HTMLElement | string | Dom7.Dom7): void;
	smartSelectAddOption(select: HTMLElement | string | Dom7.Dom7, optionHTML: string, index: number): void;
	
	// Forms
	formToJSON(form: HTMLElement | string | Dom7.Dom7): any;
	formFromJSON(form: HTMLElement | string | Dom7.Dom7, formData: Object): void;
	formGetData(formId: string): void;
	formDeleteData(formId: string): void;
	formStoreData(formId: string, formJSON: Object): void;
	
	// Tabs
	showTab(tab: HTMLElement | string | Dom7.Dom7): boolean;
	
	// Swiper
	swiper(swiperContainer: string | HTMLElement | Dom7.Dom7, parameters?: Swiper.SwiperOptions): Swiper;
	
	// Photo Browser
	photoBrowser(parameters: Framework7.PhotoBrowserOptions): Framework7.PhotoBrowser;
	
	// Autocomplete
	autocomplete(parameters: Framework7.AutocompleteOptions): Framework7.Autocomplete;
	
	// Picker
	picker(parameters: Framework7.PickerOptions): Framework7.Picker;
	
	// Calendar/Datepicker
	calendar(parameters: Framework7.CalendarOptions): Framework7.Calendar;
	
	// Pull to Refresh
	pullToRefreshDone(ptrContent: string | HTMLElement | Dom7.Dom7);
	pullToRefreshTrigger(ptrContent: string | HTMLElement | Dom7.Dom7);
	destroyPullToRefresh(ptrContent: string | HTMLElement | Dom7.Dom7);
	initPullToRefresh(ptrContent: string | HTMLElement | Dom7.Dom7);
	
	// Infinite Scroll
	attachInfiniteScroll(container: string | HTMLElement | Dom7.Dom7);
	detachInfiniteScroll(container: string | HTMLElement | Dom7.Dom7);
	
	// Messages
	messages(messagesContainer: string | HTMLElement | Dom7.Dom7, parameters: Framework7.MessagesOptions): Framework7.Messages;
	messagebar(messagebarContainer: string | HTMLElement | Dom7.Dom7, parameters: Framework7.MessageBarOptions): Framework7.MessageBar;
	
	// Notifications
	addNotification(parameters: Framework7.NotificationOptions);
	closeNotification(notificationElement: string | HTMLElement | Dom7.Dom7);
	
	// not documented
	onPageBeforeInit(pageName: string, callback: (page: Framework7.PageData) => void): Framework7.PageCallbackObject;
	onPageInit(pageName: string, callback: (page: Framework7.PageData) => void): Framework7.PageCallbackObject;
	onPageBeforeAnimation(pageName: string, callback: (page: Framework7.PageData) => void): Framework7.PageCallbackObject;
	onPageAfterAnimation(pageName: string, callback: (page: Framework7.PageData) => void): Framework7.PageCallbackObject;
	onPageBeforeRemove(pageName: string, callback: (page: Framework7.PageData) => void): Framework7.PageCallbackObject;
	onPageBack(pageName: string, callback: (page: Framework7.PageData) => void): Framework7.PageCallbackObject;
	onPageAfterBack(pageName: string, callback: (page: Framework7.PageData) => void): Framework7.PageCallbackObject;
}

declare module "Framework7" {
	export = Framework7;
}