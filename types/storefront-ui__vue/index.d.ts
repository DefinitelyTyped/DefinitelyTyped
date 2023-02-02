// Type definitions for @storefront-ui 0.7
// Project: https://github.com/vuestorefront/storefront-ui
// Definitions by:  Luïs De Zutter <https://github.com/ImLuze>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.5

import { VueConstructor } from 'vue';
import { Location } from 'vue-router';
import Glide = require('@glidejs/glide');

export type Icon =
    | 'add_to_cart'
    | 'added_to_cart'
    | 'empty_cart'
    | 'clock'
    | 'arrow_left'
    | 'arrow_right'
    | 'check'
    | 'chevron_down'
    | 'chevron_up'
    | 'chevron_left'
    | 'chevron_right'
    | 'cross'
    | 'heart'
    | 'heart_fill'
    | 'home'
    | 'home_fill'
    | 'menu'
    | 'search'
    | 'profile'
    | 'profile_fill'
    | 'newsletter'
    | 'info_circle'
    | 'info_shield'
    | 'mail'
    | 'marker'
    | 'more'
    | 'credits'
    | 'rewards'
    | 'shipping'
    | 'return'
    | 'safety'
    | 'star'
    | 'show_password'
    | 'phone'
    | 'drag'
    | 'list'
    | 'tiles'
    | 'filter'
    | 'account';
export type IconSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xl3' | 'xl4';
export type TypographySize = 'extra-small' | 'small' | 'regular' | 'big';
export type IconColor =
    | 'greenPrimary'
    | 'greenSecondary'
    | 'black'
    | 'darkSecondary'
    | 'grayPrimary'
    | 'graySecondary'
    | 'lightPrimary'
    | 'white'
    | 'redPrimary'
    | 'redSecondary'
    | 'yellowPrimary'
    | 'yellowSecondary'
    | 'bluePrimary'
    | 'blueSecondary';
export type Color = 'primary' | 'secondary' | 'light' | 'dark' | 'info' | 'success' | 'warning' | 'danger';

export interface Breadcrumb {
    link: string;
    text: string;
}

export interface Source {
    mobile?: { url: string } | undefined;
    desktop?: { url: string } | undefined;
    big?: { url: string } | undefined;
    zoom?: { url: string } | undefined;
}

export interface Image extends Source {
    alt: string;
}

export namespace SfBreadcrumbs {
    interface Props {
        breadcrumbs: Breadcrumb[];
    }

    interface Computed {
        last: number;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        computed: Computed;
    }
}

export namespace SfBullets {
    interface Props {
        total: number;
        current: number;
    }

    interface Computed {
        inactiveRight: number;
        inactiveLeft: number;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        computed: Computed;
    }
}

export namespace SfButton {
    interface Props {
        disabled: boolean;
    }

    interface Constructor extends VueConstructor {
        props: Props;
    }
}

export namespace SfCheckbox {
    interface Props {
        name: string;
        value: string | boolean;
        label: string;
        required: boolean;
        disabled: boolean;
        valid: boolean;
        selected: boolean | string[];
    }

    interface Computed {
        isChecked: boolean;
    }

    interface Methods {
        inputHandler: () => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfCircleIcon {
    interface Props {
        icon: Icon | Icon[];
        iconColor: IconColor;
        iconSize: IconSize;
        disabled: boolean;
        hasBadge: boolean;
        badgeLabel: string;
    }

    interface Constructor extends VueConstructor {
        props: Props;
    }
}

export namespace SfColor {
    interface Props {
        color: string;
        selected: boolean;
        hasBadge: boolean;
    }

    interface Computed {
        style: Record<string, string>;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        computed: Computed;
    }
}

export namespace SfHeading {
    interface Props {
        level: number;
        title: string;
        subTitle: string;
    }

    interface Computed {
        hasSubtitle: boolean;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        computed: Computed;
    }
}

export namespace SfIcon {
    interface Props {
        icon: Icon | Icon[];
        size: IconSize;
        color: IconColor;
        viewBox: string;
        hasBadge: boolean;
        badgeLabel: string;
    }

    interface Computed {
        isSFColors: boolean;
        isSFSizes: boolean;
        iconColorClass: string;
        iconSizeClass: string;
        iconCustomStyle: Record<string, string>;
        isSFIcons: boolean;
        iconViewBox: string;
        iconPaths: string | string[];
    }

    interface Constructor extends VueConstructor {
        props: Props;
        computed: Computed;
    }
}

export namespace SfImage {
    interface Props {
        src: string | Source;
        lazy: boolean;
        width: string | number;
        height: string | number;
        pictureBreakpoint: number;
        rootMargin: string;
        threshold: string | number;
    }

    interface Data {
        isLoaded: boolean;
    }

    interface Computed {
        isPicture: boolean;
        source: Source | null;
        noscript: string;
        size: {
            ['--_image-width']: Props['width'];
            ['--_image-height']: Props['height'];
        };
        hasOverlay: boolean;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        computed: Computed;
    }
}

export namespace SfInput {
    interface Props {
        value: string | number | null;
        label: string | null;
        name: string | null;
        type: string;
        valid: boolean;
        errorMessage: string | null;
        required: boolean;
        disabled: boolean;
        hasShowPassword: boolean;
    }

    interface Data {
        isPasswordVisible: boolean;
        inputType: string;
        isNumberTypeSafari: boolean;
    }

    interface Computed {
        listeners: Vue['$listeners'];
        isPassword: boolean;
    }

    interface Methods {
        switchVisibilityPassword: () => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfLink {
    interface Props {
        link: string | Location;
    }

    interface Computed {
        isExternal: boolean;
        isNativeLinkTag: boolean;
        urlTag: { href: Props['link'] } | { to: Props['link'] };
        linkComponentTag: 'a' | 'nuxt-link' | 'router-link';
    }

    interface Constructor extends VueConstructor {
        props: Props;
        computed: Computed;
    }
}

export namespace SfLoader {
    interface Props {
        loading: boolean;
    }

    interface Constructor extends VueConstructor {
        props: Props;
    }
}

export namespace SfOverlay {
    interface Props {
        transition: string;
        visible: boolean;
    }

    interface Computed {
        staticClass: string;
        className: string;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        computed: Computed;
    }
}

export namespace SfPrice {
    interface Props {
        regular: string | number | null;
        special: string | number | null;
    }

    interface Constructor extends VueConstructor {
        props: Props;
    }
}

export namespace SfProperty {
    interface Props {
        name: string;
        value: string | number;
    }

    interface Constructor extends VueConstructor {
        props: Props;
    }
}

export namespace SfQuantitySelector {
    interface Props {
        qty: number | string;
        disabled: boolean;
    }

    interface Constructor extends VueConstructor {
        props: Props;
    }
}

export namespace SfRating {
    interface Props {
        max: number;
        score: number;
    }

    interface Computed {
        finalScore: number;
        finalMax: number;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        computed: Computed;
    }
}

export namespace SfAddToCart {
    interface Props {
        disabled: boolean;
        qty: number | string;
    }

    interface Constructor extends VueConstructor {
        props: Props;
    }
}

export namespace SfAlert {
    interface Props {
        message: string;
        type: 'secondary' | 'info' | 'success' | 'warning' | 'danger';
    }

    interface Computed {
        icon: 'added_to_cart' | 'info_shield' | 'info_circle';
    }

    interface Constructor extends VueConstructor {
        props: Props;
        computed: Computed;
    }
}

export namespace SfBanner {
    interface Props {
        title: string;
        subtitle: string;
        description: string;
        buttonText: string;
        background: string;
        image: string | Source;
    }

    interface Computed {
        isMobile: boolean;
        mobileObserverClients: number;
        mobileObserverIsInitialized: boolean;
        style: {
            ['--_banner-background-image']: string;
            ['--_banner-background-desktop-image']: string;
            ['--_banner-background-color']: string;
        };
    }

    interface Constructor extends VueConstructor {
        props: Props;
        computed: Computed;
    }
}

export namespace SfBar {
    interface Props {
        title: string;
        back: boolean;
        close: boolean;
    }

    interface Constructor extends VueConstructor {
        props: Props;
    }
}

export namespace SfBottomModal {
    interface Props {
        isOpen: boolean;
        title: string;
    }

    interface Methods {
        close: () => void;
        keydownHandler: (e: KeyboardEvent) => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        methods: Methods;
    }
}

export namespace SfCallToAction {
    interface Props {
        title: string;
        buttonText: string;
        description: string;
        background: string;
        image: string | Source;
    }

    interface Computed {
        style: {
            ['--_call-to-action-background-image']: string;
            ['--_call-to-action-background-desktop-image']: string;
            ['--_call-to-action-background-color']: string;
        };
    }

    interface Constructor extends VueConstructor {
        props: Props;
        computed: Computed;
    }
}

export namespace SfCharacteristic {
    interface Props {
        colorIcon: IconColor;
        sizeIcon: IconSize;
        icon: Icon | Icon[];
        title: string;
        description: string;
    }

    interface Constructor extends VueConstructor {
        props: Props;
    }
}

export namespace SfDropdown {
    interface Props {
        isOpen: boolean;
        title: string;
    }

    interface Methods {
        close: () => void;
        keydownHandler: (e: KeyboardEvent) => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        methods: Methods;
    }
}

export namespace SfFilter {
    interface Props {
        label: string;
        count: string | number;
        selected: boolean;
        color: string;
    }

    interface Constructor extends VueConstructor {
        props: Props;
    }
}

export namespace SfGallery {
    interface Props {
        images: Image[];
        imageWidth: number | string;
        imageHeight: number | string;
        thumbWidth: number | string;
        thumbHeight: number | string;
        current: number;
        sliderOptions: Glide.Options;
        outsideZoom: boolean;
        enableZoom: boolean;
    }

    interface Data {
        positionStatic: object;
        eventHover: object;
        pictureSelected: string;
        glide: null;
        activeIndex: number;
        style: string;
    }

    interface Computed {
        mapPictures: Image[];
        updatedSliderOptions: Glide.Options;
    }

    interface Methods {
        positionObject: (index: number) => ClientRect | '';
        go: (index: number) => void;
        startZoom: (picture: Image) => void;
        moveZoom: ($event: any, index: number) => void;
        removeZoom: (index: number) => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfMenuItem {
    interface Props {
        label: string;
        icon: Icon;
        count: string | number;
    }

    interface Constructor extends VueConstructor {
        props: Props;
    }
}

export namespace SfModal {
    interface Props {
        title: string;
        visible: boolean;
        cross: boolean;
        overlay: boolean;
        persistent: boolean;
        transitionOverlay: boolean;
        transitionModal: string;
    }

    interface Data {
        staticClass: string | null;
        className: string | null;
    }

    interface Methods {
        close: () => void;
        checkPersistence: () => void;
        keydownHandler: (e: KeyboardEvent) => void;
        classHandler: () => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        methods: Methods;
    }
}

export namespace SfNotification {
    interface Props {
        visible: boolean;
        title: string;
        message: string;
        action: string;
        type: 'secondary' | 'info' | 'success' | 'warning' | 'danger';
    }

    interface Computed {
        icon: 'added_to_cart' | 'info_shield' | 'info_circle';
    }

    interface Methods {
        actionHandler: () => void;
        closeHandler: () => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfPagination {
    interface Props {
        total: number;
        visible: number;
        hasArrows: boolean;
        current: number;
        pageParamName: string;
    }

    interface Computed {
        hasRouter: boolean;
        compoenntIs: 'sf-link' | 'sf-button';
        currentPage: number;
        getPrev: number;
        canGoPrev: number;
        getNext: number;
        showFirst: boolean;
        showLast: boolean;
        listOfPageNumbers: number[];
        limitedPageNumbers: number[];
    }

    interface Methods {
        go: (page: any) => void;
        getLinkTo: (page: any) => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfProductOption {
    interface Props {
        label: string;
        color: string;
    }

    interface Constructor extends VueConstructor {
        props: Props;
    }
}

export namespace SfRadio {
    interface Props {
        name: string;
        value: string;
        label: string;
        details: string;
        description: string;
        required: boolean;
        disabled: boolean;
        selected: string;
    }

    interface Computed {
        isChecked: boolean;
    }

    interface Methods {
        inputHandler: () => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfReview {
    interface Props {
        author: string;
        date: string;
        message: string;
        rating: number | string | boolean;
        maxRating: number | string;
        charLimit: number | string;
        readMoreText: string;
        hideFullText: string;
    }

    interface Data {
        isOpen: boolean;
    }

    interface Computed {
        showButton: boolean;
        buttonText: string;
        finalMessage: string;
    }

    interface Methods {
        toggleMessage: () => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfScrollable {
    interface Props {
        maxContentHeight: string;
        showText: string;
        hideText: string;
    }

    interface Data {
        isHidden: boolean;
        hasScroll: boolean;
        contentEl: any;
    }

    interface Computed {
        style: {
            ['--_scrollable-max-height']: string | undefined;
        };
    }

    interface Methods {
        sizeCalc: () => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfSearchBar {
    interface Props {
        placeholder: string;
        value: string | number | null;
    }

    interface Constructor extends VueConstructor {
        props: Props;
    }
}

export namespace SfSection {
    interface Props {
        titleHeading: string;
        subtitleHeading: string;
        levelHeading: number;
    }

    interface Data {
        hasUnderlinedModifier: boolean;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
    }
}

export namespace SfSelect {
    interface Props {
        label: string;
        selected: string | number | object;
        size: number;
        required: boolean;
        valid: boolean;
        disabled: boolean;
        errorMessage: string;
    }

    interface Data {
        open: boolean;
        options: any[];
        indexes: object;
        optionHeight: number;
        focusedOption: string;
    }

    interface Computed {
        index: number;
        html: string;
        maxHeight: string;
        isActive: boolean;
        isSelected: boolean;
    }

    interface Methods {
        update: (index: number) => void;
        move: (payload: number) => void;
        enter: () => void;
        toggle: (event: MouseEvent) => void;
        openHandler: () => void;
        closeHandler: () => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfSlidingSection {
    interface Data {
        isActive: boolean;
        hasScrollLock: boolean;
        hammer: any;
        hasStaticHeight: boolean;
    }

    interface Computed {
        isMobile: boolean;
        mobileObserverClients: number;
        mobileObserverIsInitialized: boolean;
    }

    interface Methods {
        touchPreventDefault: (e: Event) => void;
        scrollLock: () => void;
        scrollUnlock: () => void;
        touchHandler: (event: Event) => void;
        closeHandler: () => void;
    }

    interface Constructor extends VueConstructor {
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfSteps {
    interface Props {
        active: number;
        canGoBack: boolean;
    }

    interface Data {
        steps: any[];
    }

    interface Computed {
        parsedSteps: any[];
        progress: {
            ['--_steps-progress-width']: string;
            ['--_steps-progress-active-step']: number;
        };
    }

    interface Methods {
        updateSteps: (step: any) => void;
        stepClick: (props: { index: number; disabled: boolean }) => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfSticky {
    interface Data {
        top: number;
        height: number;
        width: number;
        padding: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
        parentTop: number;
        parentHeight: number;
        scrollY: number;
        isSticky: boolean;
        isBound: boolean;
    }

    interface Computed {
        isIE: boolean;
        maxWidth: number;
        scrollBegin: number;
        scrollEnd: number;
    }

    interface Methods {
        scrollHandler: () => void;
        resizeHandler: () => void;
        toggleSticky: () => void;
        toggleBound: () => void;
        computedPadding: () => {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
    }

    interface Constructor extends VueConstructor {
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfAccordion {
    interface Props {
        open: string | string[];
        firstOpen: boolean;
        multiple: boolean;
        transition: string;
        showChevron: boolean;
    }

    interface Methods {
        setAsOpen: () => void;
        toggleHandler: (slotId: number) => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        methods: Methods;
    }
}

export namespace SfBannerGrid {
    interface Props {
        bannerGrid: number;
    }

    interface Constructor extends VueConstructor {
        props: Props;
    }
}

export namespace SfCarousel {
    interface Props {
        settings: Glide.Options;
    }

    interface Data {
        glide: any;
        defaultSettings: Glide.Options;
    }

    interface Computed {
        mergedOptions: Glide.Options;
    }

    interface Methods {
        go: (direct: 'prev' | 'next') => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfCollectedProduct {
    interface Props {
        image: string | Source;
        imageWidth: string | number;
        title: string;
        regularPrice: string | number;
        specialPrice: string | number;
        qty: string | number;
        link: string | Location;
    }

    interface Methods {
        removeHandler: () => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        methods: Methods;
    }
}

export namespace SfContentPages {
    interface Props {
        title: string;
        active: string;
    }

    interface Data {
        items: any[];
    }

    interface Computed {
        isMobile: boolean;
        mobileObserverClients: number;
        mobileObserverIsInitialized: boolean;
        categories: any[];
        isActive: boolean;
    }

    interface Methods {
        updatePage: (title: string) => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfFooter {
    interface Props {
        column: number;
        multiple: boolean;
    }

    interface Data {
        open: any[];
        items: any[];
    }

    interface Computed {
        isMobile: boolean;
        mobileObserverClients: number;
        mobileObserverIsInitialized: boolean;
        style: {
            ['--_footer-column-width']: string;
        };
    }

    interface Methods {
        toggle: (payload: any[]) => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfGroupedProduct {
    interface Props {
        settings: Glide.Options;
        hasCarousel: boolean;
    }

    interface Data {
        glide: any;
        defaultSettings: Glide.Options;
    }

    interface Computed {
        glideSettings: Glide.Options;
    }

    interface Methods {
        glideMount: () => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfHeader {
    interface Props {
        logo: string | Source;
        title: string;
        cartIcon: Icon | boolean;
        wishlistIcon: Icon | boolean;
        accountIcon: Icon | boolean;
        activeIcon: '' | 'account' | 'wishlist' | 'cart';
        searchPlaceholder: string;
        searchValue: string;
        cartItemsQty: string | number;
        isSticky: boolean;
    }

    interface Data {
        icons: Icon[];
        height: number;
        hidden: boolean;
        sticky: boolean;
        scrollDirection: any;
        lastScrollPosition: number;
        animationStart: any;
        animationLong: any;
        animationDuration: number;
    }

    interface Computed {
        isMobile: boolean;
        mobileObserverClients: number;
        mobileObserverIsInitialized: boolean;
        cartHasProducts: boolean;
        stickyHeight: {
            ['--_header-height']: string;
        };
    }

    interface Methods {
        animationhandler: (timestamp: number) => void;
        scrollHandler: () => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfHero {
    interface Props {
        sliderOptions: Glide.Options;
    }

    interface Data {
        glide: any;
        defaultOptions: Glide.Options;
    }

    interface Computed {
        mergedOptions: Glide.Options;
        numberOfPages: number;
        page: number;
    }

    interface Methods {
        go: (direct: 'prev' | 'next') => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfMegaMenu {
    interface Props {
        title: string;
        asideTitle: string;
        visible: boolean;
    }

    interface Data {
        active: string[];
        items: string[];
    }

    interface Computed {
        isMobile: boolean;
        mobileObserverClients: number;
        mobileObserverIsInitialized: boolean;
        isActive: boolean;
    }

    interface Methods {
        updateItems: (title: string) => void;
        change: (payload: any) => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfProductCard {
    interface Props {
        image: string | Source | Array<string | Source>;
        imageWidth: string | number;
        imageHeight: string | number;
        badgeLabel: string;
        badgeColor: Color | string;
        title: string;
        link: string | Location;
        linkTag: string;
        scoreRating: number | boolean;
        reviewsCount: string | number;
        maxRating: string | number;
        regularPrice: string | number | null;
        specialPrice: string | number | null;
        wishlistIcon: Icon | Icon[] | boolean;
        isOnWishlistIcon: Icon | Icon[];
        isOnWishlist: boolean;
        showAddToCartButton: boolean;
        addToCartDisabled: boolean;
    }

    interface Data {
        isAddingToCart: boolean;
    }

    interface Computed {
        isSFColors: boolean;
        badgeColorClass: string;
        currentWishlistIcon: Icon;
        showAddedToCartBadge: boolean;
        ariaLabel: 'Remove from wishlist' | 'Add to wishlist';
        wishlistIconClasses:
            | 'sf-button--pure sf-product-card__wishlist-icon'
            | 'sf-button--pure sf-product-card__wishlist-icon sf-product-card--on-wishlist';
        linkComponentTag: string;
    }

    interface Methods {
        toggleIsOnWishlist: () => void;
        onAddToCart: (event: Event) => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfProductCardHorizontal {
    interface Props {
        description: string;
        image: string | Source | Array<string | Source>;
        imageWidth: string | number;
        imageHeight: string | number;
        title: string;
        link: string | Location;
        linkTag: string | undefined;
        scoreRating: number | boolean;
        reviewsCount: number | boolean;
        maxRating: number | string;
        regularPrice: number | string | null;
        specialPrice: number | string | null;
        isAddedToCart: boolean;
        addToCartDisabled: boolean;
        wishlistIcon: Icon | Icon[] | boolean;
        isOnWishlistIcon: Icon | Icon[];
        isOnWishlist: boolean;
        qty: string | number;
    }

    interface Computed {
        currentWishlistIcon: Icon;
        ariaLabel: 'Remove from wishlist' | 'Add to wishlist';
        wishlistIconClasses:
            | 'sf-product-card-horizontal__wishlist-icon'
            | 'sf-product-card-horizontal__wishlist-icon sf-product-card-horizontal--on-wishlist';
        linkComponentTag: string;
    }

    interface Methods {
        toggleIsOnWishlist: () => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfSidebar {
    interface Props {
        title: string;
        subtitle: string;
        headingLevel: number;
        button: boolean;
        visible: boolean;
        overlay: boolean;
    }

    interface Data {
        position: string;
        staticClass: string;
        className: string;
    }

    interface Computed {
        visibleOverlay: boolean;
        transitionName: string;
        hasTop: boolean;
        hasBottom: boolean;
    }

    interface Methods {
        close: () => void;
        keydownHandler: (e: KeyboardEvent) => void;
        classHandler: () => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfStoreLocator {
    interface Props {
        tileServerUrl: string;
        tileServerAttribution: string;
        center: number[] | object;
        zoom: number;
        maxZoom: number;
        markerIconSize: number[];
        mapOptions: object;
        tileLayerOptions: object;
        markerOptions: object;
        flyToStoreZoom: number;
    }

    interface Data {
        loaded: boolean;
        userPosition: number[];
        mapReady: boolean;
        stores: any[];
    }

    interface Computed {
        computedMapOptions: object;
        internalCenter: number[] | object;
    }

    interface Methods {
        latLngEquality: (a: number, b: number) => boolean;
        registerStore: (store: any) => void;
        removeStore: (store: any) => void;
        onMapReady: (mapObject: any) => void;
        locateUser: () => void;
        locationFound: (location: any) => void;
        updateCenter: (latlng: any) => void;
        centerOn: (latlng: any) => void;
        getGeoDistance: (start: any, end: any) => number;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        data: () => Data;
        computed: Computed;
        methods: Methods;
    }
}

export namespace SfTable {
    interface Methods {
        updateColumnsCount: (columnsCount: number) => void;
    }

    interface Constructor extends VueConstructor {
        methods: Methods;
    }
}

export namespace SfTabs {
    interface Props {
        openTab: number;
        tabMaxContentHeight: string;
        tabShowText: string;
        tabHideText: string;
    }

    interface Methods {
        toggle: (id: string) => void;
        openChild: () => void;
    }

    interface Constructor extends VueConstructor {
        props: Props;
        methods: Methods;
    }
}

export const SfArrow: VueConstructor;
export const SfBadge: VueConstructor;
export const SfBreadcrumbs: SfBreadcrumbs.Constructor;
export const SfBullets: SfBullets.Constructor;
export const SfButton: SfButton.Constructor;
export const SfCheckbox: SfCheckbox.Constructor;
export const SfChevron: VueConstructor;
export const SfCircleIcon: SfCircleIcon.Constructor;
export const SfColor: SfColor.Constructor;
export const SfDivider: VueConstructor;
export const SfHeading: SfHeading.Constructor;
export const SfIcon: SfIcon.Constructor;
export const SfImage: SfImage.Constructor;
export const SfInput: SfInput.Constructor;
export const SfLink: SfLink.Constructor;
export const SfLoader: SfLoader.Constructor;
export const SfOverlay: SfOverlay.Constructor;
export const SfPrice: SfPrice.Constructor;
export const SfProperty: SfProperty.Constructor;
export const SfQuantitySelector: SfQuantitySelector.Constructor;
export const SfRating: SfRating.Constructor;
export const SfAddToCart: SfAddToCart.Constructor;
export const SfAlert: SfAlert.Constructor;
export const SfBanner: SfBanner.Constructor;
export const SfBar: SfBar.Constructor;
export const SfBottomModal: SfBottomModal.Constructor;
export const SfCallToAction: SfCallToAction.Constructor;
export const SfCharacteristic: SfCharacteristic.Constructor;
export const SfDropdown: SfDropdown.Constructor;
export const SfFilter: SfFilter.Constructor;
export const SfGallery: SfGallery.Constructor;
export const SfMenuItem: SfMenuItem.Constructor;
export const SfModal: SfModal.Constructor;
export const SfNotification: SfNotification.Constructor;
export const SfPagination: SfPagination.Constructor;
export const SfProductOption: SfProductOption.Constructor;
export const SfRadio: SfRadio.Constructor;
export const SfReview: SfReview.Constructor;
export const SfScrollable: SfScrollable.Constructor;
export const SfSearchBar: SfSearchBar.Constructor;
export const SfSection: SfSection.Constructor;
export const SfSelect: SfSelect.Constructor;
export const SfSlidingSection: SfSlidingSection.Constructor;
export const SfSteps: SfSteps.Constructor;
export const SfSticky: SfSticky.Constructor;
export const SfAccordion: SfAccordion.Constructor;
export const SfBannerGrid: SfBannerGrid.Constructor;
export const SfBottomNavigation: VueConstructor;
export const SfCarousel: SfCarousel.Constructor;
export const SfCollectedProduct: SfCollectedProduct.Constructor;
export const SfContentPages: SfContentPages.Constructor;
export const SfFooter: SfFooter.Constructor;
export const SfGroupedProduct: SfGroupedProduct.Constructor;
export const SfHeader: SfHeader.Constructor;
export const SfHero: SfHero.Constructor;
export const SfList: VueConstructor;
export const SfMegaMenu: SfMegaMenu.Constructor;
export const SfProductCard: SfProductCard.Constructor;
export const SfProductCardHorizontal: SfProductCardHorizontal.Constructor;
export const SfSidebar: SfSidebar.Constructor;
export const SfStoreLocator: SfStoreLocator.Constructor;
export const SfTable: SfTable.Constructor;
export const SfTabs: SfTabs.Constructor;
export const SfTopBar: VueConstructor;
