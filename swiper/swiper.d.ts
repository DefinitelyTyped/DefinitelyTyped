// Type definitions for Swiper 3.3.0
// Project: http://www.idangero.us/swiper
// Definitions by: Travis Brown <https://github.com/warriorrocker>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class Swiper {
	constructor(container: string, options?: ISwiperOptions);
	constructor(container: Element, options?: ISwiperOptions);

	// Properties
	params: ISwiperOptions;
	container: any;
	wrapper: any;
	slides: Array<any>;
	bullets: any;
	width: number;
	height: number;
	translate: number;
	progress: number;
	activeIndex: number;
	previousIndex: number;
	isBeginning: boolean;
	isEnd: boolean;
	autoplaying: boolean;
	animating: boolean;
	touches: any;
	clickedIndex: number;
	clickedSlide: any;
	plugins: any;

	// Methods
	slideNext(runCallbacks?: boolean, speed?: number): void;
	slidePrev(runCallbacks?: boolean, speed?: number): void;
	slideTo(index: number, speed?: number, runCallbacks?: boolean): void;
	update(updateTranslate?: boolean): void;
	updateContainerSize(): void;
	updateSlidesSize(): void;
	updateProgress(): void;
	updatePagination(): void;
	updateClasses(): void;
	onResize(): void;
	detachEvents(): void;
	attachEvents(): void;
	startAutoplay(): void;
	stopAutoplay(): void;
	destroy(deleteInstance?: boolean, cleanupStyles?: boolean): void;
	appendSlide(slides: any): void;
	prependSlide(slides: any): void;
	removeSlide(slideIndex: number): void;
	removeSlide(slideIndex: Array<number>): void;
	removeAllSlides(): void;
	setWrapperTranslate(translate: string): void;
	getWrapperTranslate(): void;
	on(callback: string, handler: any): void;
	once(callback: string, handler: any): void;
	off(callback: string): void;
	lockSwipeToNext(): void;
	unlockSwipeToNext(): void;
	lockSwipeToPrev(): void;
	unlockSwipeToPrev(): void;
	lockSwipes(): void;
	unlockSwipes(): void;
	disableMousewheelControl(): void;
	enableMousewheelControl(): void;
	disableKeyboardControl(): void;
	enableKeyboardControl(): void;
}

interface ISwiperOptions {
	// Parameters
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
	autoplayStopOnLast?: boolean;
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
	fade?: ISwiperEffectFadeOptions;
	cube?: ISwiperEffectCubeOptions;
	coverflow?: ISwiperEffectCoverflowOptions;
	flip?: ISwiperEffectFlipOptions;

	// Parallax
	parallax?: boolean;

	// Slids Grid
	spaceBetween?: number;
	slidesPerView?: any;
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
	iOSEdgeSwipeThreshold?: boolean;

	// Touch Resistance
	resistance?: boolean;
	resistanceRatio?: number;

	// Clicks
	preventClicks?: boolean;
	preventClicksPropagation?: boolean;
	slideToClickedSlide?: boolean;

	// Swiper No swiping
	allowSwipeToPrev?: boolean;
	allowSwipeToNext?: boolean;
	noSwiping?: boolean;
	noSwipingClass?: string;
	swipeHandler?: any;

	// Pagination
	pagination?: any;
	paginationType?: string;
	paginationHide?: boolean;
	paginationClickable?: boolean;
	paginationElement?: string;
	paginationBulletRender?: (index: number, className: string) => void;
	paginationFractionRender?: (swiper: Swiper, currentClassName: string, totalClassName: string) => void;
	paginationProgressRender?: (swiper: Swiper, progressbarClass: string) => void;
	paginationCustomRender?: (swiper: Swiper, current: number, total: number) => void;

	// Navigation Buttons
	nextButton?: any;
	prevButton?: any;

	// Accessibility
	a11y?: boolean;
	prevSlideMessage?: string;
	nextSlideMessage?: string;
	firstSlideMessage?: string;
	lastSlideMessage?: string;
	paginationBulletMessage?: string;

	// Scrollbar
	scrollbar?: any;
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
	lazyLoadingInPrevNextAmount?: number;
	lazyLoadingOnTransitionStart?: boolean;

	// Loop
	loop?: boolean;
	loopAdditionalSlides?: number;
	loopedSlides?: number;

	// Controller
	control?: Swiper;
	controlInverse?: boolean;
	controlBy?: string;

	// Observer
	observer?: boolean;
	observeParents?: boolean;

	// Breakpoints
	breakpoints?: ISwiperBreakpointOptions;

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
	onTouchStart?: (swiper: Swiper, event: Event) => void;
	onTouchMove?: (swiper: Swiper, event: Event) => void;
	onTouchMoveOpposite?: (swiper: Swiper, event: Event) => void;
	onSliderMove?: (swiper: Swiper, event: Event) => void;
	onTouchEnd?: (swiper: Swiper, event: Event) => void;
	onClick?: (swiper: Swiper, event: Event) => void;
	onTap?: (swiper: Swiper, event: Event) => void;
	onDoubleTap?: (swiper: Swiper, event: Event) => void;
	onImagesReady?: (swiper: Swiper) => void;
	onProgress?: (swiper: Swiper, progress: number) => void;
	onReachBeginning?: (swiper: Swiper) => void;
	onReachEnd?: (swiper: Swiper) => void;
	onDestroy?: (swiper: Swiper) => void;
	onSetTranslate?: (swiper: Swiper, translate: string) => void;
	onSetTransition?: (swiper: Swiper, transition: string) => void;
	onAutoplay?: (swiper: Swiper) => void;
	onAutoplayStart?: (swiper: Swiper) => void;
	onAutoplayStop?: (swiper: Swiper) => void;
	onLazyImageLoad?: (swiper: Swiper, slide: number, image: string) => void;
	onLazyImageReady?: (swiper: Swiper, slide: number, image: string) => void;

	// Namespace
	slideClass?: string;
	slideActiveClass?: string;
	slideVisibleClass?: string;
	slideDuplicateClass?: string;
	slideNextClass?: string;
	slidePrevClass?: string;
	wrapperClass?: string;
	bulletClass?: string;
	bulletActiveClass?: string;
	paginationHiddenClass?: string;
	paginationCurrentClass?: string;
	paginationTotalClass?: string;
	paginationProgressbarClass?: string;
	buttonDisabledClass?: string;
}

interface ISwiperEffectFadeOptions {
	crossFade?: boolean;
}

interface ISwiperEffectCubeOptions {
	slideShadows?: boolean;
	shadow?: boolean;
	shadowOffset?: number;
	shadowScale?: number;
}

interface ISwiperEffectCoverflowOptions {
	rotate?: number;
	stretch?: number;
	depth?: number;
	modifier?: number;
	slideShadows?: boolean;
}

interface ISwiperEffectFlipOptions {
	slideShadows?: boolean;
	limitRotation?: boolean;
}

interface ISwiperBreakpointOptions {
	[n: number]: ISwiperOptions;
}
