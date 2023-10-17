declare namespace ymaps {
    interface IClassConstructor<T> {
        new(): T;
    }

    type ControlSingleKey =
        | "fullscreenControl"
        | "geolocationControl"
        | "routeEditor"
        | "rulerControl"
        | "searchControl"
        | "trafficControl"
        | "typeSelector"
        | "zoomControl";
    type ControlSetKey = "smallMapDefaultSet" | "mediumMapDefaultSet" | "largeMapDefaultSet" | "default";
    type ControlKey = ControlSingleKey | ControlSetKey;

    type OverlayKey =
        | "default#placemark"
        | "default#pin"
        | "default#circle"
        | "default#rectangle"
        | "default#polyline"
        | "default#polygon"
        | "hotspot#placemark"
        | "hotspot#circle"
        | "hotspot#rectangle"
        | "hotspot#polyline"
        | "hotspot#polygon"
        | "html#balloon"
        | "html#hint"
        | "html#placemark"
        | "html#rectangle"
        | string
        | IClassConstructor<IOverlay>
        | ((
            geometry: IPixelLineStringGeometry,
            data: IDataManager | object,
            options: object,
        ) => Promise<string | IClassConstructor<IOverlay>>);
    type InteractivityModelKey =
        | "default#opaque"
        | "default#geoObject"
        | "default#layer"
        | "default#transparent"
        | "default#silent"
        | string;

    type PresetWithTextKey =
        | "islands#blueIcon"
        | "islands#darkGreenIcon"
        | "islands#redIcon"
        | "islands#violetIcon"
        | "islands#darkOrangeIcon"
        | "islands#blackIcon"
        | "islands#nightIcon"
        | "islands#yellowIcon"
        | "islands#darkBlueIcon"
        | "islands#greenIcon"
        | "islands#pinkIcon"
        | "islands#orangeIcon"
        | "islands#grayIcon"
        | "islands#lightBlueIcon"
        | "islands#brownIcon"
        | "islands#oliveIcon";
    type PresetWithTextStretchyKey =
        | "islands#blueStretchyIcon"
        | "islands#darkGreenStretchyIcon"
        | "islands#redStretchyIcon"
        | "islands#violetStretchyIcon"
        | "islands#darkOrangeStretchyIcon"
        | "islands#blackStretchyIcon"
        | "islands#nightStretchyIcon"
        | "islands#yellowStretchyIcon"
        | "islands#darkBlueStretchyIcon"
        | "islands#greenStretchyIcon"
        | "islands#pinkStretchyIcon"
        | "islands#orangeStretchyIcon"
        | "islands#grayStretchyIcon"
        | "islands#lightBlueStretchyIcon"
        | "islands#brownStretchyIcon"
        | "islands#oliveStretchyIcon";
    type PresetDotKey =
        | "islands#blueDotIcon"
        | "islands#darkGreenDotIcon"
        | "islands#redDotIcon"
        | "islands#violetDotIcon"
        | "islands#darkOrangeDotIcon"
        | "islands#blackDotIcon"
        | "islands#nightDotIcon"
        | "islands#yellowDotIcon"
        | "islands#darkBlueDotIcon"
        | "islands#greenDotIcon"
        | "islands#pinkDotIcon"
        | "islands#orangeDotIcon"
        | "islands#grayDotIcon"
        | "islands#lightBlueDotIcon"
        | "islands#brownDotIcon"
        | "islands#oliveDotIcon";
    type PresetCircleKey =
        | "islands#blueCircleIcon"
        | "islands#darkGreenCircleIcon"
        | "islands#redCircleIcon"
        | "islands#violetCircleIcon"
        | "islands#darkOrangeCircleIcon"
        | "islands#blackCircleIcon"
        | "islands#nightCircleIcon"
        | "islands#yellowCircleIcon"
        | "islands#darkBlueCircleIcon"
        | "islands#greenCircleIcon"
        | "islands#pinkCircleIcon"
        | "islands#orangeCircleIcon"
        | "islands#grayCircleIcon"
        | "islands#lightBlueCircleIcon"
        | "islands#brownCircleIcon"
        | "islands#oliveCircleIcon";
    type PresetCircleDotKey =
        | "islands#blueCircleDotIcon"
        | "islands#darkGreenCircleDotIcon"
        | "islands#redCircleDotIcon"
        | "islands#violetCircleDotIcon"
        | "islands#darkOrangeCircleDotIcon"
        | "islands#blackCircleDotIcon"
        | "islands#nightCircleDotIcon"
        | "islands#yellowCircleDotIcon"
        | "islands#darkBlueCircleDotIcon"
        | "islands#greenCircleDotIcon"
        | "islands#pinkCircleDotIcon"
        | "islands#orangeCircleDotIcon"
        | "islands#grayCircleDotIcon"
        | "islands#lightBlueCircleDotIcon"
        | "islands#brownCircleDotIcon"
        | "islands#oliveCircleDotIcon";
    type PresetWithIconKey =
        | "islands#blueAirportIcon"
        | "islands#blueAttentionIcon"
        | "islands#blueAutoIcon"
        | "islands#blueBarIcon"
        | "islands#blueBarberIcon"
        | "islands#blueBeachIcon"
        | "islands#blueBicycleIcon"
        | "islands#blueBicycle2Icon"
        | "islands#blueBookIcon"
        | "islands#blueCarWashIcon"
        | "islands#blueChristianIcon"
        | "islands#blueCinemaIcon"
        | "islands#blueCircusIcon"
        | "islands#blueCourtIcon"
        | "islands#blueDeliveryIcon"
        | "islands#blueDiscountIcon"
        | "islands#blueDogIcon"
        | "islands#blueEducationIcon"
        | "islands#blueEntertainmentCenterIcon"
        | "islands#blueFactoryIcon"
        | "islands#blueFamilyIcon"
        | "islands#blueFashionIcon"
        | "islands#blueFoodIcon"
        | "islands#blueFuelStationIcon"
        | "islands#blueGardenIcon"
        | "islands#blueGovernmentIcon"
        | "islands#blueHeartIcon"
        | "islands#blueHomeIcon"
        | "islands#blueHotelIcon"
        | "islands#blueHydroIcon"
        | "islands#blueInfoIcon"
        | "islands#blueLaundryIcon"
        | "islands#blueLeisureIcon"
        | "islands#blueMassTransitIcon"
        | "islands#blueMedicalIcon"
        | "islands#blueMoneyIcon"
        | "islands#blueMountainIcon"
        | "islands#blueNightClubIcon"
        | "islands#blueObservationIcon"
        | "islands#blueParkIcon"
        | "islands#blueParkingIcon"
        | "islands#bluePersonIcon"
        | "islands#bluePocketIcon"
        | "islands#bluePoolIcon"
        | "islands#bluePostIcon"
        | "islands#blueRailwayIcon"
        | "islands#blueRapidTransitIcon"
        | "islands#blueRepairShopIcon"
        | "islands#blueRunIcon"
        | "islands#blueScienceIcon"
        | "islands#blueShoppingIcon"
        | "islands#blueSouvenirsIcon"
        | "islands#blueSportIcon"
        | "islands#blueStarIcon"
        | "islands#blueTheaterIcon"
        | "islands#blueToiletIcon"
        | "islands#blueUnderpassIcon"
        | "islands#blueVegetationIcon"
        | "islands#blueVideoIcon"
        | "islands#blueWasteIcon"
        | "islands#blueWaterParkIcon"
        | "islands#blueWaterwayIcon"
        | "islands#blueWorshipIcon"
        | "islands#blueZooIcon";
    type PresetWithIconCircleKey =
        | "islands#blueHomeCircleIcon"
        | "islands#blueScienceCircleIcon"
        | "islands#blueAirportCircleIcon"
        | "islands#blueAttentionCircleIcon"
        | "islands#blueAutoCircleIcon"
        | "islands#blueBarCircleIcon"
        | "islands#blueBarberCircleIcon"
        | "islands#blueBeachCircleIcon"
        | "islands#blueBicycleCircleIcon"
        | "islands#blueBicycle2CircleIcon"
        | "islands#blueBookCircleIcon"
        | "islands#blueCarWashCircleIcon"
        | "islands#blueChristianCircleIcon"
        | "islands#blueCinemaCircleIcon"
        | "islands#blueCircusCircleIcon"
        | "islands#blueCourtCircleIcon"
        | "islands#blueDeliveryCircleIcon"
        | "islands#blueDiscountCircleIcon"
        | "islands#blueDogCircleIcon"
        | "islands#blueEducationCircleIcon"
        | "islands#blueEntertainmentCenterCircleIcon"
        | "islands#blueFactoryCircleIcon"
        | "islands#blueFamilyCircleIcon"
        | "islands#blueFashionCircleIcon"
        | "islands#blueFoodCircleIcon"
        | "islands#blueFuelStationCircleIcon"
        | "islands#blueGardenCircleIcon"
        | "islands#blueGovernmentCircleIcon"
        | "islands#blueHeartCircleIcon"
        | "islands#blueHotelCircleIcon"
        | "islands#blueHydroCircleIcon"
        | "islands#blueInfoCircleIcon"
        | "islands#blueLaundryCircleIcon"
        | "islands#blueLeisureCircleIcon"
        | "islands#blueMassTransitCircleIcon"
        | "islands#blueMedicalCircleIcon"
        | "islands#blueMoneyCircleIcon"
        | "islands#blueMountainCircleIcon"
        | "islands#blueNightClubCircleIcon"
        | "islands#blueObservationCircleIcon"
        | "islands#blueParkCircleIcon"
        | "islands#blueParkingCircleIcon"
        | "islands#bluePersonCircleIcon"
        | "islands#bluePocketCircleIcon"
        | "islands#bluePoolCircleIcon"
        | "islands#bluePostCircleIcon"
        | "islands#blueRailwayCircleIcon"
        | "islands#blueRapidTransitCircleIcon"
        | "islands#blueRepairShopCircleIcon"
        | "islands#blueRunCircleIcon"
        | "islands#blueShoppingCircleIcon"
        | "islands#blueSouvenirsCircleIcon"
        | "islands#blueSportCircleIcon"
        | "islands#blueStarCircleIcon"
        | "islands#blueTheaterCircleIcon"
        | "islands#blueToiletCircleIcon"
        | "islands#blueUnderpassCircleIcon"
        | "islands#blueVegetationCircleIcon"
        | "islands#blueVideoCircleIcon"
        | "islands#blueWasteCircleIcon"
        | "islands#blueWaterParkCircleIcon"
        | "islands#blueWaterwayCircleIcon"
        | "islands#blueWorshipCircleIcon"
        | "islands#blueZooCircleIcon";
    type PresetPictogramKey = "islands#geolocationIcon";
    type PresetClusterKey =
        | "islands#blueClusterIcons"
        | "islands#invertedBlueClusterIcons"
        | "islands#redClusterIcons"
        | "islands#invertedRedClusterIcons"
        | "islands#darkOrangeClusterIcons"
        | "islands#invertedDarkOrangeClusterIcons"
        | "islands#nightClusterIcons"
        | "islands#invertedNightClusterIcons"
        | "islands#darkBlueClusterIcons"
        | "islands#invertedDarkBlueClusterIcons"
        | "islands#pinkClusterIcons"
        | "islands#invertedPinkClusterIcons"
        | "islands#grayClusterIcons"
        | "islands#invertedGrayClusterIcons"
        | "islands#brownClusterIcons"
        | "islands#invertedBrownClusterIcons"
        | "islands#darkGreenClusterIcons"
        | "islands#invertedDarkGreenClusterIcons"
        | "islands#violetClusterIcons"
        | "islands#invertedVioletClusterIcons"
        | "islands#blackClusterIcons"
        | "islands#invertedBlackClusterIcons"
        | "islands#yellowClusterIcons"
        | "islands#invertedYellowClusterIcons"
        | "islands#greenClusterIcons"
        | "islands#invertedGreenClusterIcons"
        | "islands#orangeClusterIcons"
        | "islands#invertedOrangeClusterIcons"
        | "islands#lightBlueClusterIcons"
        | "islands#invertedLightBlueClusterIcons"
        | "islands#oliveClusterIcons"
        | "islands#invertedOliveClusterIcons";

    type PresetKey =
        | PresetWithTextKey
        | PresetWithTextStretchyKey
        | PresetDotKey
        | PresetCircleKey
        | PresetCircleDotKey
        | PresetWithIconKey
        | PresetWithIconCircleKey
        | PresetPictogramKey
        | PresetClusterKey
        | string; // option.presetStorage
    // [number, number]
    // [[number, number], [number, number]]

    type IconLayoutKey = "default#image" | "default#imageWithContent" | string;
    type ClusterLayoutKey =
        | "cluster#balloonTwoColumns"
        | "cluster#balloonCarousel"
        | "cluster#balloonAccordion"
        | string;
    type ClusterContentLayoutKey =
        | "cluster#balloonTwoColumnsItemContent"
        | "cluster#balloonCarouselItemContent"
        | "cluster#balloonAccordionItemContent"
        | string;

    type EventMap = GlobalEventHandlersEventMap;

    namespace behavior {
        class DblClickZoom implements IBehavior {
            constructor(options?: IDblClickZoomOptions);

            events: IEventManager;
            options: IOptionManager;

            disable(): void;

            enable(): void;

            isEnabled(): boolean;

            getParent(): IControlParent | null;

            setParent(parent: IControlParent): this;
        }

        interface IDblClickZoomOptions extends IMapMarginOptions {
            centering?: boolean | undefined;
            duration?: number | undefined;
        }

        class Drag implements IBehavior {
            constructor(options?: IDragOptions);

            events: IEventManager;
            options: IOptionManager;

            disable(): void;

            enable(): void;

            isEnabled(): boolean;

            getParent(): null | IControlParent;

            setParent(parent: IControlParent): this;
        }

        interface IDragOptions {
            actionCursor?: string | undefined;
            cursor?: string | undefined;
            inertia?: boolean | undefined;
            inertiaDuration?: number | undefined;
            tremor?: number | undefined;
        }

        class LeftMouseButtonMagnifier implements IBehavior {
            constructor(options?: ILeftMouseButtonMagnifierOptions);

            events: IEventManager;
            options: IOptionManager;

            disable(): void;

            enable(): void;

            isEnabled(): boolean;

            getParent(): null | IControlParent;

            setParent(parent: IControlParent): this;
        }

        interface ILeftMouseButtonMagnifierOptions {
            actionCursor?: string | undefined;
            cursor?: string | undefined;
            duration?: number | undefined;
        }

        class MultiTouch implements IBehavior {
            constructor(options?: IMultiTouchOptions);

            events: IEventManager;
            options: IOptionManager;

            disable(): void;

            enable(): void;

            isEnabled(): boolean;

            getParent(): null | IControlParent;

            setParent(parent: IControlParent): this;
        }

        interface IMultiTouchOptions {
            tremor?: number | undefined;
        }

        class RightMouseButtonMagnifier implements IBehavior {
            constructor(options?: IRightMouseButtonMagnifierOptions);

            events: IEventManager;
            options: IOptionManager;

            disable(): void;

            enable(): void;

            isEnabled(): boolean;

            getParent(): null | IControlParent;

            setParent(parent: IControlParent): this;
        }

        interface IRightMouseButtonMagnifierOptions {
            actionCursor?: string | undefined;
            duration?: number | undefined;
        }

        class RouteEditor implements IBehavior {
            events: IEventManager;
            options: IOptionManager;

            disable(): void;

            enable(): void;

            isEnabled(): boolean;

            getParent(): null | IControlParent;

            setParent(parent: IControlParent): this;

            getRoute(): router.Route;

            getState(): string;

            setState(state: string | null): void;
        }

        class Ruler implements IBehavior {
            constructor(options?: IRulerOptions);

            events: IEventManager;
            options: IOptionManager;

            disable(): void;

            enable(): void;

            isEnabled(): boolean;

            getParent(): null | IControlParent;

            setParent(parent: IControlParent): this;

            close(): boolean;

            getState(): string;

            setState(state: string | null): void;
        }

        interface IRulerOptions {
            balloonAutoPan?: boolean | undefined;
        }

        class ScrollZoom implements IBehavior {
            constructor(options?: IScrollZoomOptions);

            events: IEventManager;
            options: IOptionManager;

            disable(): void;

            enable(): void;

            isEnabled(): boolean;

            getParent(): null | IControlParent;

            setParent(parent: IControlParent): this;
        }

        interface IScrollZoomOptions {
            maximumDelta?: number | undefined;
            speed?: number | undefined;
        }

        const storage: util.Storage;
    }

    namespace clusterer {
        class Balloon implements IBalloonManager<Clusterer> {
            constructor(clusterer: Clusterer);

            events: IEventManager;

            autoPan(): Promise<Clusterer>;

            close(force?: boolean): Promise<Clusterer>;

            destroy(): void;

            getData(): object | null;

            getOptions(): IOptionManager | null;

            getOverlay(): Promise<IOverlay | null>;

            getOverlaySync(): IOverlay | null;

            getPosition(): number[] | null;

            isOpen(): boolean;

            open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<Clusterer>;

            setData(data: object | string | HTMLElement): Promise<Clusterer>;

            setOptions(options: object): Promise<Clusterer>;

            setPosition(position: number[]): Promise<Clusterer>;
        }

        class Hint implements IHintManager<Clusterer> {
            constructor(clusterer: Clusterer);

            events: IEventManager;

            close(force?: boolean): Promise<Clusterer>;

            destroy(): void;

            getData(): object | null;

            getOptions(): IOptionManager | null;

            getOverlay(): Promise<IOverlay | null>;

            getOverlaySync(): IOverlay | null;

            getPosition(): number[] | null;

            isOpen(): boolean;

            open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<Clusterer>;

            setData(data: object | string | HTMLElement): Promise<Clusterer>;

            setOptions(options: object): Promise<Clusterer>;

            setPosition(position: number[]): Promise<Clusterer>;
        }
    }

    namespace collection {
        class Item implements IChildOnMap, ICustomizable, IEventEmitter, IParentOnMap {
            constructor(options?: object);

            events: IEventManager;
            options: IOptionManager;

            getParent(): null | IControlParent;

            setParent(parent: IControlParent): this;

            getMap(): Map;

            onAddToMap(map: Map): void;

            onRemoveFromMap(oldMap: Map): void;
        }
    }

    namespace control {
        class Button implements ICustomizable, ISelectableControl {
            constructor(parameters?: IButtonParameters | string);

            options: IOptionManager;
            events: IEventManager;
            data: data.Manager;
            state: data.Manager;

            deselect(): void;

            disable(): void;

            enable(): void;

            isEnabled(): boolean;

            isSelected(): boolean;

            select(): void;

            getParent(): null | IControlParent;

            setParent(parent: IControlParent): this;
        }

        interface IBaseButtonParametersOptions {
            adjustMapMargin?: boolean | undefined;
            float?: "none" | "left" | "right" | undefined;
            floatIndex?: number | undefined;
            layout?: IClassConstructor<ISelectableControlLayout> | string | undefined;
            maxWidth?: number[][] | number[] | number | undefined;
            position?: {
                bottom?: number | string | undefined;
                left?: number | string | undefined;
                right?: number | string | undefined;
                top?: number | string | undefined;
            } | undefined;
            visible?: boolean | undefined;
        }

        interface IButtonParameters {
            data?: {
                content?: string | undefined;
                image?: string | undefined;
                title?: string | undefined;
            } | undefined;
            options?:
                | IBaseButtonParametersOptions & {
                    selectOnClick?: boolean | undefined;
                    size?: "auto" | "small" | "medium" | "large" | undefined;
                }
                | undefined;
            state?: {
                enabled?: boolean | undefined;
                selected?: boolean | undefined;
            } | undefined;
        }

        class FullscreenControl extends Button {
            constructor(parameters?: IFullscreenControlParameters);

            enterFullscreen(): void;

            exitFullscreen(): void;
        }

        interface IFullscreenControlParameters {
            data?: {
                title?: string | undefined;
            } | undefined;
            options?:
                | IBaseButtonParametersOptions & {
                    collapseOnBlur?: boolean | undefined;
                    expandOnClick?: boolean | undefined;
                    popupFloat?: "left" | "right" | undefined;
                }
                | undefined;
            state?: {
                expanded?: boolean | undefined;
            } | undefined;
        }

        class GeolocationControl extends Button {
            constructor(parameters?: IGeolocationControlParameters);
        }

        interface IGeolocationControlParameters extends IButtonParameters {
            data?: {
                image?: string | undefined;
                title?: string | undefined;
            } | undefined;
            options?: IBaseButtonParametersOptions | undefined;
        }

        class ListBox implements ICollection, IControl, ICustomizable {
            constructor(parameters?: IListBoxParameters);

            events: IEventManager;
            options: IOptionManager;
            data: data.Manager;
            state: data.Manager;

            add(object: object): this;

            getIterator(): IIterator;

            remove(object: object): this;

            getParent(): null | IControlParent;

            setParent(parent: IControlParent): this;
        }

        interface IListBoxParameters extends IButtonParameters {
            options?:
                | IBaseButtonParametersOptions & {
                    noPlacemark?: boolean | undefined;
                }
                | undefined;
        }

        class ListBoxItem implements ICustomizable, ISelectableControl {
            constructor(parameters?: IListBoxItemParameters);

            options: IOptionManager;
            events: IEventManager;
            data: data.Manager;
            state: data.Manager;

            deselect(): void;

            disable(): void;

            enable(): void;

            isEnabled(): boolean;

            isSelected(): boolean;

            select(): void;

            getParent(): null | IControlParent;

            setParent(parent: IControlParent): this;

            getMap(): Map;
        }

        interface IListBoxItemParameters {
            data?: {
                content?: string | undefined;
            } | undefined;
            options?: {
                layout?: string | IClassConstructor<ISelectableControlLayout> | undefined;
                selectableLayout?: string | IClassConstructor<ISelectableControlLayout> | undefined;
                selectOnClick?: boolean | undefined;
                separatorLayout?: string | IClassConstructor<ISelectableControlLayout> | undefined;
                type?: "selectable" | "separator" | undefined;
                visible?: boolean | undefined;
            } | undefined;
            state?: {
                selected?: boolean | undefined;
            } | undefined;
        }

        class Manager {
            constructor(map: Map, controls?: Array<string | IControl>, options?: IManagerOptions);

            events: event.Manager;
            options: option.Manager;
            state: data.Manager;

            add(control: IControl | ControlKey, options?: IManagerControlOptions): this;

            each(callback: (control: IControl) => void, context?: object): this;

            get(index: number | string): IControl | null;

            getChildElement(control: IControl): Promise<HTMLElement>;

            getContainer(): HTMLElement;

            getMap(): Map;

            indexOf(childToFind: IControl | string): number;

            remove(control: IControl | string): this;
        }

        interface IManagerOptions {
            margin?: number | undefined;
            pane?: IPane | undefined;
            states?: string[] | undefined;
        }

        interface IManagerControlOptions {
            float?: "none" | "left" | "right" | undefined;
            floatIndex?: number | undefined;
            position?: {
                bottom?: number | string | undefined;
                left?: number | string | undefined;
                right?: number | string | undefined;
                top?: number | string | undefined;
            } | undefined;
        }

        class RouteButton implements IControl, ICustomizable {
            constructor(parameters?: IRouteButtonParameters);

            events: IEventManager;
            options: IOptionManager;
            routePanel: IRoutePanel;

            getParent(): null | IControlParent;

            setParent(parent: IControlParent): this;
        }

        interface IRouteButtonParameters {
            options?: {
                adjustMapMargin?: boolean | undefined;
                collapseOnBlur?: boolean | undefined;
                float?: "none" | "left" | "right" | undefined;
                floatIndex?: number | undefined;
                popupAnimate?: boolean | undefined;
                popupFloat?: "auto" | "left" | "right" | undefined;
                popupWidth?: string | undefined;
                position?: {
                    bottom?: number | string | undefined;
                    left?: number | string | undefined;
                    right?: number | string | undefined;
                    top?: number | string | undefined;
                } | undefined;
                size?: "auto" | "small" | "medium" | "large" | undefined;
                visible?: boolean | undefined;
            } | undefined;
            state?: {
                expanded?: boolean | undefined;
            } | undefined;
        }

        class RouteEditor extends Button {
            constructor(parameters?: IRouteEditorParameters);

            getRoute(): router.Route;
        }

        interface IRouteEditorParameters {
            data?: {
                image?: string | undefined;
                title?: string | undefined;
            } | undefined;
            options?: IBaseButtonParametersOptions | undefined;
            state?: {} | undefined;
        }

        class RoutePanel implements IControl, ICustomizable {
            constructor(parameters?: IRoutePanelParameters);

            events: IEventManager;
            options: IOptionManager;
            routePanel: IRoutePanel;

            getParent(): null | IControlParent;

            setParent(parent: IControlParent): this;
        }

        interface IRoutePanelParameters {
            options?: {
                autofocus?: boolean;
                float?: "none" | "left" | "right";
                floatIndex?: number;
                maxWidth?: string;
                position?: {
                    bottom?: number | string;
                    left?: number | string;
                    right?: number | string;
                    top?: number | string;
                };
                showHeader?: boolean;
                title?: string;
                visible?: boolean;
            };
            state?: {};
        }

        class RulerControl extends Button {
            constructor(parameters?: IRulerControlParameters);
        }

        interface IRulerControlParameters {
            data?: {} | undefined;
            options?: {
                adjustMapMargin?: boolean | undefined;
                position?: {
                    bottom?: number | string | undefined;
                    left?: number | string | undefined;
                    right?: number | string | undefined;
                    top?: number | string | undefined;
                } | undefined;
                scaleLine?: boolean | undefined;
                visible?: boolean | undefined;
            } | undefined;
            state?: {} | undefined;
        }

        class SearchControl implements IControl, ICustomizable {
            constructor(parameters?: ISearchControlParameters);

            events: IEventManager;
            options: IOptionManager;
            state: data.Manager;

            getParent(): null | IControlParent;

            setParent(parent: IControlParent): this;

            clear(): void;

            getMap(): Map;

            getRequestString(): string;

            getResponseMetaData(): object;

            getResult(index: number): Promise<object>;

            getResultsArray(): object[];

            getResultsCount(): number;

            getSelectedIndex(): number;

            hideResult(): void;

            search(request: string): Promise<void>;

            showResult(index: number): this;
        }

        interface ISearchControlParameters {
            data?: {} | undefined;
            options?: {
                adjustMapMargin?: boolean | undefined;
                boundedBy?: number[][] | undefined;
                fitMaxWidth?: boolean | undefined;
                float?: "none" | "left" | "right" | undefined;
                floatIndex?: number | undefined;
                formLayout?: string | IClassConstructor<ILayout> | undefined;
                kind?: "house" | "street" | "metro" | "district" | "locality" | undefined;
                layout?: string | IClassConstructor<ISearchControlLayout> | undefined;
                maxWidth?: number[][] | number[] | number | undefined;
                noCentering?: boolean | undefined;
                noPlacemark?: boolean | undefined;
                noPopup?: boolean | undefined;
                noSelect?: boolean | undefined;
                noSuggestPanel?: boolean | undefined;
                placeholderContent?: string | undefined;
                popupItemLayout?: string | IClassConstructor<ILayout> | undefined;
                popupLayout?: string | IClassConstructor<ILayout> | undefined;
                position?: {
                    bottom?: number | string | undefined;
                    left?: number | string | undefined;
                    right?: number | string | undefined;
                    top?: number | string | undefined;
                } | undefined;
                provider?: IGeocodeProvider | "yandex#map" | "yandex#search" | undefined;
                searchCoordOrder?: "latlong" | "longlat" | undefined;
                size?: "auto" | "small" | "medium" | "large" | undefined;
                strictBounds?: boolean | undefined;
                suppressYandexSearch?: boolean | undefined;
                useMapBounds?: boolean | undefined;
                zoomMargin?: number | undefined;
                visible?: boolean | undefined;
            } | undefined;
            state?: {} | undefined;
        }

        class ZoomControl implements IControl, ICustomizable {
            constructor(parameters?: IZoomControlParameters);

            events: IEventManager;
            options: IOptionManager;
            state: data.Manager;

            getParent(): null | IControlParent;

            setParent(parent: IControlParent): this;

            clear(): void;

            getMap(): Map;

            getRequestString(): string;

            getResponseMetaData(): object;

            getResult(index: number): Promise<object>;

            getResultsArray(): object[];

            getResultsCount(): number;

            getSelectedIndex(): number;

            hideResult(): void;

            search(request: string): Promise<void>;

            showResult(index: number): this;
        }

        interface IZoomControlParameters {
            options?: {
                adjustMapMargin?: boolean | undefined;
                position?: {
                    top?: number | string | "auto" | undefined;
                    right?: number | string | "auto" | undefined;
                    bottom?: number | string | "auto" | undefined;
                    left?: number | string | "auto" | undefined;
                } | undefined;
                size?: "small" | "large" | "auto" | undefined;
                visible?: boolean | undefined;
                zoomDuration?: number | undefined;
                zoomStep?: number | undefined;
            } | undefined;
        }

        class TypeSelector extends ListBox {
            constructor(parameters?: ITypeSelectorParameters);
        }

        interface ITypeSelectorParameters {
            options?: {
                panoramasItemMode: "on" | "off" | "ifMercator";
            } | undefined;
        }
    }

    namespace data {
        class Manager implements IDataManager, IFreezable {
            constructor(data?: object);

            events: IEventManager;

            get(path: string, defaultValue?: object): object;

            getAll(): object;

            set(path: object | string, value: object | number | string | null | undefined): this;

            setAll(): this;

            unset(path: object | string): this;

            unsetAll(): this;

            freeze(): IFreezable;

            isFrozen(): boolean;

            unfreeze(): IFreezable;

            add(
                types: string[][] | string[] | string,
                callback: (event: object | IEvent) => void,
                context?: object,
                priority?: number,
            ): this;

            getParent(): IEventManager | null;

            group(): IEventGroup;

            remove(
                types: string[][] | string[] | string,
                callback: (event: object | IEvent) => void,
                context?: object,
                priority?: number,
            ): this;

            setParent(parent: IEventManager | null): this;

            fire(type: string, eventObject: object | IEvent): this;
        }
    }

    namespace domEvent {
        interface manager {
            add<K extends keyof EventMap>(
                htmlElement: HTMLElement | Document,
                types: K,
                callback: (event: EventMap[K]) => void,
                context?: object,
                capture?: boolean,
            ): this;
            add(
                htmlElement: HTMLElement | Document,
                types: string[] | string,
                callback: (event: any) => void,
                context?: object,
                capture?: boolean,
            ): this;

            group(htmlElement: HTMLElement | Document, capture?: boolean): event.Group;

            remove(
                htmlElement: HTMLElement | Document,
                types: string[] | string,
                callback: ((event: any) => void) | string,
                context?: object,
                capture?: boolean,
            ): this;
        }
    }

    namespace event {
        class Group implements IEventGroup {
            events: IEventManager;

            add<K extends keyof EventMap>(
                types: K,
                callback: (event: EventMap[K] | IEvent) => void,
                context?: object,
                priority?: number,
            ): this;
            add(
                types: string[][] | string[] | string,
                callback: (event: object | IEvent) => void,
                context?: object,
                priority?: number,
            ): this;

            remove(
                types: string[][] | string[] | string,
                callback: (event: object | IEvent) => void,
                context?: object,
                priority?: number,
            ): this;

            removeAll(): this;

            getLength(): number;
        }

        class Manager<TargetGeometry extends {} = {}> implements IEventManager<TargetGeometry> {
            constructor(
                params?: {
                    context?: object | undefined;
                    controllers?: IEventWorkflowController[] | undefined;
                    parent?: IEventManager | undefined;
                },
            );

            add<K extends keyof EventMap>(
                types: K,
                callback: (event: IEvent<EventMap[K], TargetGeometry>) => void,
                context?: object,
                priority?: number,
            ): this;
            add(
                types: string[][] | string[] | string,
                callback: (event: IEvent<{}, TargetGeometry>) => void,
                context?: object,
                priority?: number,
            ): this;

            getParent(): IEventManager | null;

            group(): IEventGroup;

            remove(
                types: string[][] | string[] | string,
                callback: (event: object | IEvent) => void,
                context?: object,
                priority?: number,
            ): this;

            setParent(parent: IEventManager | null): this;

            fire(type: string, eventObject: object | IEvent): this;

            createEventObject(type: string, event: object, target: object): Event;

            once(
                types: string[][] | string[] | string,
                callback: (event: IEvent) => any,
                context?: object,
                priority?: number,
            ): this;
        }

        class Mapper implements IEventTrigger {
            constructor(
                targetEventManager: IEventManager,
                mappingTable: Record<string, ((event: IEvent) => IEvent | null) | boolean>,
            );

            fire(type: string, eventObject?: object | IEvent): this;
        }
    }

    namespace geometry {
        namespace base {
            class LineString implements IBaseLineStringGeometry {
                events: IEventManager;

                static fromEncodedCoordinates(encodedCoordinates: string): geometry.LineString;

                static toEncodedCoordinates(geometry: geometry.LineString): string;

                getBounds(): number[][] | null;

                getType(): string;

                get(index: number): number[];

                getChildGeometry(index: number): IPointGeometryAccess;

                getClosest(anchorPosition: number[]): object;

                getCoordinates(): number[][];

                getLength(): number;

                insert(index: number, coordinates: number[][]): ILineStringGeometryAccess;

                remove(index: number): number[];

                remove(
                    types: string[][] | string[] | string,
                    callback: (event: object | IEvent) => void,
                    context?: object,
                    priority?: number,
                ): this;

                set(index: number, coordinates: number[]): ILineStringGeometryAccess;

                setCoordinates(coordinates: number[][]): ILineStringGeometryAccess;

                splice(index: number, length: number): number[][];

                freeze(): IFreezable;

                isFrozen(): boolean;

                unfreeze(): IFreezable;

                add(
                    types: string[][] | string[] | string,
                    callback: (event: object | IEvent) => void,
                    context?: object,
                    priority?: number,
                ): this;

                getParent(): object | null;

                group(): IEventGroup;

                setParent(parent: IEventManager | null): this;

                fire(type: string, eventObject: object | IEvent): this;
            }

            class Point implements IBasePointGeometry {
                events: IEventManager;

                getBounds(): number[][] | null;

                getType(): string;

                getCoordinates(): number[] | null;

                setCoordinates(coordinates: number[] | null): this;
            }

            class Polygon implements IBasePointGeometry {
                constructor(coordinates?: number[][][], fillRule?: "evenOdd" | "nonZero");

                events: IEventManager;

                static fromEncodedCoordinates(encodedCoordinates: string): Polygon;
                static toEncodedCoordinates(geometry: Polygon): string;

                contains(position: number[]): boolean;

                freeze(): IFreezable;

                get(index: number): number[][];

                getBounds(): number[][] | null;

                getChildGeometry(index: number): ILinearRingGeometryAccess;

                getClosest(anchorPosition: number[]): object;

                getCoordinates(): number[] | null;

                getFillRule(): "evenOdd" | "nonZero";

                getLength(): number;

                getType(): string;

                insert(index: number, path: number[][]): IPolygonGeometryAccess;

                isFrozen(): boolean;

                remove(index: number): ILinearRingGeometryAccess;

                set(index: number, path: number[][]): IPolygonGeometryAccess;

                setCoordinates(coordinates: number[] | null): this;

                setFillRule(fillRule: "evenOdd" | "nonZero"): IPolygonGeometryAccess;

                splice(index: number, number: number): ILinearRingGeometryAccess[];

                unfreeze(): IFreezable;
            }
        }

        class LineString implements ILineStringGeometry {
            constructor(coordinates?: number[][], options?: {
                coordRendering?: "shortestPath" | "straightPath" | undefined;
                geodesic?: boolean | undefined;
                pixelRendering?: "jumpy" | "static" | undefined;
                projection?: IProjection | undefined;
                simplification?: boolean | undefined;
            });

            events: IEventManager;
            options: IOptionManager;

            static fromEncodedCoordinates(encodedCoordinates: string): LineString;
            static toEncodedCoordinates(geometry: LineString): string;

            getMap(): Map | null;

            getPixelGeometry(options?: object): IPixelGeometry;

            setMap(map: Map): void;

            getBounds(): number[][] | null;

            getType(): string;

            get(index: number): number[];

            getChildGeometry(index: number): IPointGeometryAccess;

            getClosest(anchorPosition: number[]): object;

            getCoordinates(): number[][];

            getLength(): number;

            insert(index: number, coordinates: number[][]): ILineStringGeometryAccess;

            remove(index: number): number[];

            remove(
                types: string[][] | string[] | string,
                callback: (event: object | IEvent) => void,
                context?: object,
                priority?: number,
            ): this;

            set(index: number, coordinates: number[]): ILineStringGeometryAccess;

            setCoordinates(coordinates: number[][]): ILineStringGeometryAccess;

            splice(index: number, length: number): number[][];

            freeze(): IFreezable;

            isFrozen(): boolean;

            unfreeze(): IFreezable;

            add(
                types: string[][] | string[] | string,
                callback: (event: object | IEvent) => void,
                context?: object,
                priority?: number,
            ): this;

            getParent(): object | null;

            group(): IEventGroup;

            setParent(parent: IEventManager | null): this;

            fire(type: string, eventObject: object | IEvent): this;
        }

        class Point implements IPointGeometry {
            constructor(coordinates?: number[] | null);

            options: IOptionManager;
            events: IEventManager;

            getMap(): Map | null;

            getPixelGeometry(options?: object): IPixelGeometry;

            setMap(map: Map): void;

            getBounds(): number[][] | null;

            getType(): string;

            getCoordinates(): number[] | null;

            setCoordinates(coordinates: number[] | null): this;
        }

        class Polygon implements IPolygonGeometry {
            constructor(coordinates?: number[][][], fillRule?: "evenOdd" | "nonZero", options?: object);

            events: IEventManager;
            options: IOptionManager;

            static fromEncodedCoordinates(encodedCoordinates: string): Polygon;
            static toEncodedCoordinates(geometry: Polygon): string;

            add(
                types: string[][] | string[] | string,
                callback: (event: object | IEvent) => void,
                context?: object,
                priority?: number,
            ): this;

            contains(position: number[]): boolean;

            fire(type: string, eventObject: object | IEvent): this;

            freeze(): IFreezable;

            get(index: number): number[][];

            getBounds(): number[][] | null;

            getChildGeometry(index: number): ILinearRingGeometryAccess;

            getClosest(anchorPosition: number[]): object;

            getCoordinates(): number[][][];

            getFillRule(): "evenOdd" | "nonZero";

            getLength(): number;

            getMap(): Map | null;

            getParent(): object | null;

            getPixelGeometry(options?: object): IPixelGeometry;

            getType(): string;

            group(): IEventGroup;

            insert(index: number, path: number[][]): IPolygonGeometryAccess;

            isFrozen(): boolean;

            remove(index: number): ILinearRingGeometryAccess;

            set(index: number, path: number[][]): IPolygonGeometryAccess;

            setCoordinates(coordinates: number[][][]): IPolygonGeometryAccess;

            setFillRule(fillRule: "evenOdd" | "nonZero"): IPolygonGeometryAccess;

            setMap(map: Map): void;

            setParent(parent: object | null): this;

            splice(index: number, number: number): ILinearRingGeometryAccess[];

            unfreeze(): IFreezable;
        }

        namespace pixel {
            class Circle implements IPixelCircleGeometry {
                constructor(
                    coordinates: number[] | null,
                    radius: number,
                    metaData?: object,
                );

                events: IEventManager;

                equals(geometry: IPixelGeometry): boolean;

                getBounds(): number[][] | null;

                getCoordinates(): number[];

                getMetaData(): object;

                getRadius(): number;

                getType(): string;

                scale(factor: number): IPixelGeometry;

                shift(offset: number[]): IPixelGeometry;
            }

            class LineString implements IPixelLineStringGeometry {
                constructor(coordinates: number[][], metaData?: object);

                events: IEventManager;

                equals(geometry: IPixelGeometry): boolean;

                getBounds(): number[][] | null;

                getClosest(anchorPosition: number[]): object;

                getCoordinates(): number[][];

                getLength(): number;

                getMetaData(): object;

                getType(): string;

                scale(factor: number): IPixelGeometry;

                shift(offset: number[]): IPixelGeometry;
            }

            class MultiLineString implements IPixelMultiLineGeometry {
                constructor(coordinates: number[][][], metaData?: object);

                events: IEventManager;

                equals(geometry: IPixelGeometry): boolean;

                getBounds(): number[][] | null;

                getClosest(anchorPosition: number[]): object;

                getCoordinates(): number[][][];

                getLength(): number;

                getMetaData(): object;

                getType(): string;

                scale(factor: number): IPixelGeometry;

                shift(offset: number[]): IPixelGeometry;
            }

            class MultiPolygon implements IPixelMultiPolygonGeometry {
                constructor(
                    coordinates: number[][][][],
                    fillRule: "evenOdd" | "nonZero",
                    metaData?: object,
                );

                events: IEventManager;

                contains(position: number[]): boolean;

                equals(geometry: IPixelGeometry): boolean;

                getBounds(): number[][] | null;

                getClosest(anchorPosition: number[]): object;

                getCoordinates(): number[][][][];

                getFillRule(): "evenOdd" | "nonZero";

                getLength(): number;

                getMetaData(): object;

                getType(): string;

                scale(factor: number): IPixelGeometry;

                shift(offset: number[]): IPixelGeometry;
            }

            class Point implements IPixelPointGeometry {
                constructor(position: number[] | null, metaData?: object);

                events: IEventManager;

                equals(geometry: IPixelGeometry): boolean;

                getBounds(): number[][] | null;

                getCoordinates(): number[];

                getMetaData(): object;

                getType(): string;

                scale(factor: number): IPixelGeometry;

                shift(offset: number[]): IPixelGeometry;
            }

            class Polygon implements IPixelPolygonGeometry {
                constructor(
                    coordinates: number[][][],
                    fillRule: "evenOdd" | "nonZero",
                    metaData?: object,
                );

                events: IEventManager;

                contains(position: number[]): boolean;

                equals(geometry: IPixelGeometry): boolean;

                getBounds(): number[][] | null;

                getClosest(anchorPosition: number[]): object;

                getCoordinates(): number[][][];

                getFillRule(): "evenOdd" | "nonZero";

                getLength(): number;

                getMetaData(): object;

                getType(): string;

                scale(factor: number): IPixelGeometry;

                shift(offset: number[]): IPixelGeometry;
            }

            class Rectangle implements IPixelRectangleGeometry {
                constructor(coordinates: number[][] | null, metaData?: object);

                events: IEventManager;

                equals(geometry: IPixelGeometry): boolean;

                getBounds(): number[][] | null;

                getClosest(anchorPosition: number[]): object;

                getCoordinates(): number[][];

                getMetaData(): object;

                getType(): string;

                scale(factor: number): IPixelGeometry;

                shift(offset: number[]): IPixelGeometry;
            }
        }
    }

    namespace geometryEditor {
        class Circle implements IGeometryEditor {
            constructor(geometry: ICircleGeometry, options?: object);

            events: IEventManager;
            geometry: IGeometry;
            options: IOptionManager;
            state: IDataManager;

            startDrawing(): vow.Promise;

            startEditing(): void;

            stopDrawing(): vow.Promise;

            stopEditing(): void;
        }

        class LineString implements IGeometryEditor {
            constructor(geometry: ILineStringGeometry, options?: object);

            events: IEventManager;
            geometry: IGeometry;
            options: IOptionManager;
            state: IDataManager;

            getModel(): vow.Promise;

            getModelSync(): model.RootLineString | null;

            getView(): vow.Promise;

            getViewSync(): view.Path | null;

            startDrawing(): vow.Promise;

            startEditing(): vow.Promise;

            startFraming(): vow.Promise;

            stopDrawing(): void;

            stopEditing(): void;

            stopFraming(): void;
        }

        namespace model {
            class ChildLinearRing extends ChildLineString {}

            class ChildLineString implements IGeometryEditorChildModel {
                editor: IGeometryEditor;
                events: IEventManager;
                geometry: IBaseGeometry;

                destroy(): void;

                getAllVerticesNumber(): number;

                getEdgeModels(): Edge[];

                getIndex(): number;

                getParent(): IGeometryEditorModel;

                getPixels(): number[];

                getVertexModels(): ChildVertex[];

                setIndex(index: number): void;

                setPixels(pixels: number[]): void;

                spliceVertices(start: number, deleteCount: number): number[][];
            }

            class ChildVertex implements IGeometryEditorChildModel {
                editor: IGeometryEditor;
                events: IEventManager;
                geometry: IBaseGeometry;

                destroy(): void;

                getAllVerticesNumber(): number;

                getIndex(): number;

                getNextVertex(): ChildVertex | null;

                getParent(): IGeometryEditorModel;

                getPixels(): number[];

                getPrevVertex(): ChildVertex | null;

                setGlobalPixels(pixels: number[]): void;

                setIndex(index: number): void;

                setNextVertex(nextVertex: ChildVertex): void;

                setPixels(pixels: number[]): void;

                setPrevVertex(prevVertex: ChildVertex): void;
            }

            class Edge implements IGeometryEditorRootModel {
                events: IEventManager;

                destroy(): void;

                getNextVertex(): ChildVertex | null;

                getPixels(): number[];

                getPrevVertex(): ChildVertex | null;

                setNextVertex(nextVertex: ChildVertex): void;

                setPrevVertex(prevVertex: ChildVertex): void;
            }

            class EdgeGeometry implements IGeometry {
                events: IEventManager;
                options: IOptionManager;

                getBounds(): number[][] | null;

                getMap(): Map | null;

                getPixelGeometry(options?: object): IPixelGeometry;

                getType(): string;

                setMap(map: Map): void;
            }

            class RootLineString implements IGeometryEditorRootModel {
                events: IEventManager;

                destroy(): void;

                getAllVerticesNumber(): number;

                getPixels(): number[];

                getVertexModels(): ChildVertex[];

                spliceVertices(start: number, deleteCount: number): number[][];
            }

            class RootPolygon implements IGeometryEditorRootModel {
                events: IEventManager;

                destroy(): void;

                getAllVerticesNumber(): number;

                getPathModels(): ChildLinearRing[];

                getPixels(): number[];

                splicePaths(start: number, deleteCount: number): number[][];
            }
        }

        class Point implements IGeometryEditor {
            events: IEventManager;
            geometry: IGeometry;
            options: IOptionManager;
            state: IDataManager;

            startDrawing(): vow.Promise;

            startEditing(): void;

            stopDrawing(): vow.Promise;

            stopEditing(): void;
        }

        class Polygon implements IGeometryEditor {
            constructor(geometry: IPolygonGeometry, options: object);

            events: IEventManager;
            geometry: IGeometry;
            options: IOptionManager;
            state: IDataManager;

            getModel(): vow.Promise;

            getModelSync(): model.RootPolygon | null;

            getView(): vow.Promise;

            getViewSync(): view.MultiPath | null;

            startDrawing(): vow.Promise;

            startEditing(): vow.Promise;

            startFraming(): vow.Promise;

            stopDrawing(): void;

            stopEditing(): void;

            stopFraming(): void;
        }

        namespace view {
            class Edge {
                getPlacemark(): GeoObject;
            }

            class MultiPath {
                getEdgePlacemarks(): GeoObjectCollection;

                getPathViews(): Path[];

                getVertexPlacemarks(): GeoObjectCollection;
            }

            class Path {
                getEdgePlacemarks(): GeoObjectCollection;

                getEdgeViews(): Edge[];

                getVertexPlacemarks(): GeoObjectCollection;

                getVertexViews(): Vertex[];
            }

            class Vertex {
                getPlacemark(): GeoObject;
            }
        }
    }

    namespace geoObject {
        class Balloon implements IBalloonManager<GeoObject> {
            constructor(geoObject: GeoObject);

            events: IEventManager;

            autoPan(): Promise<GeoObject>;

            close(force?: boolean): Promise<GeoObject>;

            destroy(): void;

            getData(): object | null;

            getOptions(): IOptionManager | null;

            getOverlay(): Promise<IOverlay | null>;

            getOverlaySync(): IOverlay | null;

            getPosition(): number[] | null;

            isOpen(): boolean;

            open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<GeoObject>;

            setData(data: object | string | HTMLElement): Promise<GeoObject>;

            setOptions(options: object): Promise<GeoObject>;

            setPosition(position: number[]): Promise<GeoObject>;
        }

        class Hint implements IHintManager<GeoObject> {
            constructor(geoObject: GeoObject);

            events: IEventManager;

            close(force?: boolean): Promise<GeoObject>;

            destroy(): void;

            getData(): object | null;

            getOptions(): IOptionManager | null;

            getOverlay(): Promise<IOverlay | null>;

            getOverlaySync(): IOverlay | null;

            getPosition(): number[] | null;

            isOpen(): boolean;

            open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<GeoObject>;

            setData(data: object | string | HTMLElement): Promise<GeoObject>;

            setOptions(options: object): Promise<GeoObject>;

            setPosition(position: number[]): Promise<GeoObject>;
        }

        class Sequence implements IGeoObject, IGeoObjectSequence {
            constructor(geoObject: GeoObject);

            geometry: IGeometry | null;
            properties: IDataManager;
            state: IDataManager;
            events: IEventManager;
            options: IOptionManager;

            getOverlay(): Promise<IOverlay | null>;

            getOverlaySync(): IOverlay | null;

            getParent(): null | IControlParent;

            setParent(parent: IControlParent): this;

            getMap(): Map;

            each(callback: (geoObject: IGeoObject) => void, context?: object): void;

            get(index: number): IGeoObject;

            getBounds(): number[][] | null;

            getIterator(): IIterator;

            getLength(): number;

            getPixelBounds(): number[][] | null;

            indexOf(geoObject: IGeoObject): number;
        }
    }

    namespace layout {
        namespace templateBased {
            class Base implements ILayout {
                constructor(data: object);

                events: IEventManager;

                destroy(): void;

                getData(): object;

                getParentElement(): HTMLElement;

                getShape(): IShape | null;

                isEmpty(): boolean;

                setData(data: object): void;

                setParentElement(parent: HTMLElement | null): this;

                build(): void;

                clear(): void;

                onSublayoutSizeChange(sublayoutInfo: object, nodeSizeByContent: object): void;

                rebuild(): void;
            }
        }

        class Image implements ILayout {
            events: IEventManager;

            destroy(): void;

            getData(): object;

            getParentElement(): HTMLElement;

            getShape(): IShape | null;

            isEmpty(): boolean;

            setData(data: object): void;

            setParentElement(parent: HTMLElement | null): void;
        }

        interface IImageOptionsWithIconPrefix {
            iconImageClipRect?: number[][] | undefined;
            iconImageHref?: string | undefined;
            iconImageOffset?: number[] | undefined;
            iconImageSize?: number[] | undefined;
            iconShape?: IShape | object | null | undefined;
        }

        class ImageWithContent extends Image {}

        interface IImageWithContentOptionsWithIconPrefix extends IImageOptionsWithIconPrefix {
            iconContentLayout?: IClassConstructor<ILayout> | string | undefined;
            iconContentOffset?: number[] | undefined;
            iconContentSize?: number[] | undefined;
        }

        class PieChart extends templateBased.Base {}

        interface IPieChartOptionsWithIconPrefix {
            iconPieChartCaptionMaxWidth?: number | undefined;
            iconPieChartCoreFillStyle?: string | undefined;
            iconPieChartCoreRadius?: number | (() => number) | undefined;
            iconPieChartStrokeStyle?: string | undefined;
            iconPieChartStrokeWidth?: number | undefined;
        }

        const storage: util.Storage;
    }

    namespace map {
        namespace action {
            class Manager implements IEventEmitter {
                constructor(map: Map);

                events: IEventManager;

                breakTick(): void;

                execute(action: IMapAction): void;

                getCurrentState(): object;

                getMap(): Map;

                setCorrection(userFunction: () => void): void;

                stop(): void;
            }
        }

        namespace behavior {
            class Manager implements ICustomizable, IEventEmitter, IParentOnMap {
                constructor(map: Map, behaviors?: string[][] | string[], options?: object);

                options: IOptionManager;
                events: IEventManager;

                getMap(): Map;

                disable(behaviors: string[][] | string[] | string): this;

                enable(behaviors: string[][] | string[] | string): this;

                get(behaviorName: string): IBehavior;

                isEnabled(behaviorName: string): boolean;
            }
        }

        namespace layer {
            class Manager implements ILayer, IMapObjectCollection {
                constructor(map: Map, options?: {
                    trafficImageZIndex?: number | undefined;
                    trafficInfoZIndex?: number | undefined;
                    trafficJamZIndex?: number | undefined;
                });

                events: IEventManager;
                options: IOptionManager;

                getParent(): null | IControlParent;

                setParent(parent: IControlParent): this;

                add(object: object): this;

                each(callback: (layer: ILayer) => void, context?: object): void;

                getIterator(): IIterator;

                remove(object: object): this;

                getMap(): Map;

                getAll(): Array<Collection<Layer>>;
            }
        }

        namespace margin {
            class Accessor {
                constructor(screenArea: object);

                getArea(): object;

                remove(): this;

                setArea(screenArea: object): this;
            }

            class Manager {
                constructor(map: Map);

                addArea(screenArea: object): Accessor;

                destroy(): this;

                getMargin(): number[];

                getOffset(): number[];

                setDefaultMargin(margin: number[][] | number[] | number): void;
            }
        }

        namespace pane {
            class Manager {
                constructor(map: Map);

                append(key: string, pane: IPane): void;

                destroy(): void;

                get(key: string): IPane | null;

                getLower(): string;

                getUpper(): string;

                insertBefore(key: string, pane: IPane, referenceKey: string): void;

                remove(pane: IPane): void;
            }
        }

        class Balloon implements IBalloonManager<Balloon> /*, IBalloonSharingManager*/ {
            constructor(map: Map);

            events: IEventManager;

            autoPan(): Promise<Balloon>;

            close(force?: boolean): Promise<Balloon>;

            destroy(): void;

            getData(): object | null;

            getOptions(): IOptionManager | null;

            getOverlay(): Promise<IOverlay | null>;

            getOverlaySync(): IOverlay | null;

            getPosition(): number[] | null;

            isOpen(): boolean;

            open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<Balloon>;

            setData(data: object | string | HTMLElement): Promise<Balloon>;

            setOptions(options: object): Promise<Balloon>;

            setPosition(position: number[]): Promise<Balloon>;
        }

        class Container implements IDomEventEmitter {
            constructor(parentElement: string | HTMLElement);

            events: IEventManager;

            enterFullscreen(): void;

            exitFullscreen(): void;

            fitToViewport(preservePixelPosition?: boolean): void;

            getElement(): HTMLElement;

            getOffset(): number[];

            getParentElement(): HTMLElement;

            getSize(): number[];

            isFullscreen(): boolean;
        }

        class Converter {
            constructor(map: Map);

            globalToPage(globalPixelPoint: number[]): number[];

            pageToGlobal(pagePixelPoint: number[]): number[];
        }

        class Copyrights {
            constructor(map: Map);

            add(customCopyrights: string | HTMLElement | Array<string | HTMLElement>): ICopyrightsAccessor;

            addProvider(provider: ICopyrightsProvider): this;

            get(point?: number[], zoom?: number): Promise<Array<string | HTMLElement>>;

            getPromoLink(): string;

            removeProvider(provider: ICopyrightsProvider): this;
        }

        class GeoObjects implements IGeoObjectCollection {
            constructor(map: Map, options?: object);

            options: IOptionManager;
            events: IEventManager;

            add(child: IGeoObject | ObjectManager, index?: number): this;

            each(callback: (object: IGeoObject) => void, context?: object): void;

            get(index: number): IGeoObject;

            getBounds(): number[][] | null;

            getIterator(): IIterator;

            getLength(): number;

            getPixelBounds(): number[][] | null;

            indexOf(object: IGeoObject): number;

            remove(child: IGeoObject | ObjectManager): this;

            removeAll(): this;

            set(index: number, child: IGeoObject): this;

            splice(index: number, length: number): this;

            getMap(): Map;
        }

        class Hint implements IHintManager<Hint> /*, IHintSharingManager*/ {
            constructor(map: Map);

            events: IEventManager;

            close(force?: boolean): Promise<Hint>;

            destroy(): void;

            getData(): object | null;

            getOptions(): IOptionManager | null;

            getOverlay(): Promise<IOverlay | null>;

            getOverlaySync(): IOverlay | null;

            getPosition(): number[] | null;

            isOpen(): boolean;

            open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<Hint>;

            setData(data: object | string | HTMLElement): Promise<Hint>;

            setOptions(options: object): Promise<Hint>;

            setPosition(position: number[]): Promise<Hint>;
        }

        class ZoomRange implements IEventEmitter {
            constructor(map: Map, constraints: number[]);

            events: IEventManager;

            get(coords?: number[]): Promise<number[]>;

            getCurrent(): number[];
        }
    }

    namespace multiRouter {
        namespace driving {
            class Path implements IGeoObject {
                geometry: IGeometry | null;
                properties: data.Manager;
                state: IDataManager;
                model: PathModel;
                events: IEventManager;
                options: IOptionManager;

                getOverlay(): Promise<IOverlay | null>;

                getOverlaySync(): IOverlay | null;

                getParent(): object | null;

                setParent(parent: object): this;

                getMap(): Map;

                getSegments(): GeoObjectCollection;
            }

            class PathModel implements IEventEmitter {
                events: IEventManager;
                properties: data.Manager;
                route: RouteModel;

                destroy(): void;

                getSegments(): SegmentModel[];

                getType(): string;

                update(pathJson: object): void;
            }

            class Route implements IGeoObject {
                geometry: IGeometry | null;
                properties: IDataManager;
                state: IDataManager;
                events: IEventManager;
                options: IOptionManager;

                getOverlay(): Promise<IOverlay | null>;

                getOverlaySync(): IOverlay | null;

                getParent(): object | null;

                setParent(parent: object): this;

                getMap(): Map;

                getPaths(): GeoObjectCollection;
            }

            class RouteModel implements IEventEmitter {
                events: IEventManager;
                multiRoute: MultiRouteModel;
                properties: data.Manager;

                destroy(): void;

                getPaths(): PathModel[];

                update(routeJson: object): void;

                getType(): string;
            }

            class Segment implements IGeoObject {
                geometry: IGeometry | null;
                properties: data.Manager;
                state: IDataManager;
                events: IEventManager;
                options: IOptionManager;

                getOverlay(): Promise<IOverlay | null>;

                getOverlaySync(): IOverlay | null;

                getParent(): object | null;

                setParent(parent: object): this;

                getMap(): Map;
            }

            class SegmentModel implements IEventEmitter {
                events: IEventManager;
                geometry: geometry.base.LineString;
                path: PathModel;

                destroy(): void;

                getType(): string;

                getViaPoints(): ViaPointModel[];

                update(segmentJson: object): void;
            }
        }

        namespace masstransit {
            class Path implements IGeoObject {
                geometry: IGeometry | null;
                properties: data.Manager;
                state: IDataManager;
                events: IEventManager;
                options: IOptionManager;
                model: PathModel;

                getOverlay(): Promise<IOverlay | null>;

                getOverlaySync(): IOverlay | null;

                getParent(): object | null;

                setParent(parent: object): this;

                getMap(): Map;

                getSegmentMarkers(): GeoObjectCollection;

                getSegments(): GeoObjectCollection;
            }

            class PathModel implements IEventEmitter {
                events: IEventManager;
                properties: data.Manager;
                route: RouteModel;

                destroy(): void;

                getSegments(): Array<TransferSegmentModel | TransportSegmentModel | WalkSegmentModel>;

                getType(): string;

                update(pathJson: object): void;
            }

            class Route implements IGeoObject {
                geometry: IGeometry | null;
                properties: data.Manager;
                model: RouteModel;
                state: IDataManager;
                events: IEventManager;
                options: IOptionManager;

                getOverlay(): Promise<IOverlay | null>;

                getOverlaySync(): IOverlay | null;

                getParent(): object | null;

                setParent(parent: object): this;

                getMap(): Map;

                getPaths(): GeoObjectCollection;
            }

            class RouteModel implements IEventEmitter {
                events: IEventManager;
                multiRoute: MultiRouteModel;
                properties: data.Manager;

                destroy(): void;

                getPaths(): PathModel[];

                getType(): string;

                update(routeJson: object): void;
            }

            class StopModel implements IEventEmitter {
                events: IEventManager;
                geometry: geometry.base.Point;
                properties: data.Manager;
                segment: TransportSegmentModel;

                update(stopJson: object): void;
            }

            class TransferSegment implements IGeoObject {
                geometry: IGeometry | null;
                properties: data.Manager;
                state: IDataManager;
                events: IEventManager;
                options: IOptionManager;
                model: TransferSegmentModel;

                getOverlay(): Promise<IOverlay | null>;

                getOverlaySync(): IOverlay | null;

                getParent(): object | null;

                setParent(parent: object): this;

                getMap(): Map;
            }

            class TransferSegmentModel implements IEventEmitter {
                events: IEventManager;
                geometry: geometry.base.LineString;
                path: PathModel;
                properties: data.Manager;

                destroy(segmentJson: object): void;

                getType(): string;
            }

            class TransportSegment implements IGeoObject {
                geometry: IGeometry | null;
                properties: data.Manager;
                state: IDataManager;
                events: IEventManager;
                options: IOptionManager;
                model: TransportSegmentModel;

                getOverlay(): Promise<IOverlay | null>;

                getOverlaySync(): IOverlay | null;

                getParent(): object | null;

                setParent(parent: object): this;

                getMap(): Map;
            }

            class TransportSegmentModel implements IEventEmitter {
                events: IEventManager;
                geometry: geometry.base.LineString;
                path: PathModel;
                properties: data.Manager;

                destroy(): void;

                getStops(): StopModel[];

                getType(): string;

                update(segmentJson: object): void;
            }

            class WalkSegment implements IGeoObject {
                geometry: IGeometry | null;
                properties: data.Manager;
                state: IDataManager;
                events: IEventManager;
                options: IOptionManager;
                model: WalkSegmentModel;

                getOverlay(): Promise<IOverlay | null>;

                getOverlaySync(): IOverlay | null;

                getParent(): object | null;

                setParent(parent: object): this;

                getMap(): Map;
            }

            class WalkSegmentModel implements IEventEmitter {
                events: IEventManager;
                geometry: geometry.base.LineString;
                path: PathModel;
                properties: data.Manager;

                destroy(): void;

                getType(): string;
            }
        }

        class EditorAddon implements ICustomizable, IEventEmitter {
            options: IOptionManager;
            events: IEventManager;
            state: data.Manager;

            isActive(): boolean;

            start(state: object): void;

            stop(): void;
        }

        class MultiRoute implements IGeoObject {
            constructor(model: MultiRouteModel | IMultiRouteModelJson, options?: {
                activeRouteAutoSelection?: boolean | undefined;
                boundsAutoApply?: boolean | undefined;
                dragUpdateInterval?: string | number | undefined;
                preventDragUpdate?: boolean | undefined;
                useMapMargin?: boolean | undefined;
                zoomMargin?: number[][] | number[] | number | undefined;
                [index: string]: any;
            });

            editor: EditorAddon;
            model: MultiRouteModel;
            geometry: IGeometry | null;
            properties: IDataManager;
            state: IDataManager;
            events: IEventManager;
            options: IOptionManager;

            getOverlay(): Promise<IOverlay | null>;

            getOverlaySync(): IOverlay | null;

            getParent(): object | null;

            setParent(parent: object): this;

            getMap(): Map;

            getActiveRoute(): driving.Route | masstransit.Route | null;

            getBounds(): number[][] | null;

            getPixelBounds(): number[][] | null;

            getRoutes(): GeoObjectCollection;

            getViaPoints(): GeoObjectCollection;

            getWayPoints(): GeoObjectCollection;

            setActiveRoute(route: driving.Route | masstransit.Route | null): void;
        }

        class MultiRouteModel implements IEventEmitter {
            constructor(referencePoints: IMultiRouteReferencePoint[], params?: IMultiRouteParams);

            events: IEventManager;
            properties: data.Manager;

            destroy(): void;

            getAllPoints(): Array<WayPointModel | ViaPointModel>;

            getJson(): object;

            getParams(): IMultiRouteParams;

            getPoints(): Array<WayPointModel | ViaPointModel>;

            getReferencePointIndexes(): object;

            getReferencePoints(): IMultiRouteReferencePoint[];

            getRoutes(): driving.RouteModel[] | masstransit.RouteModel[];

            getViaPoints(): ViaPointModel[];

            getWayPoints(): WayPointModel[];

            setParams(params: IMultiRouteParams, extend?: boolean, clearRequests?: boolean): void;

            setReferencePoints(
                referencePoints: IMultiRouteReferencePoint[],
                viaIndexes?: number[],
                clearRequests?: boolean,
            ): void;
        }

        class ViaPoint implements IGeoObject {
            geometry: IGeometry | null;
            properties: data.Manager;
            state: IDataManager;
            events: IEventManager;
            options: IOptionManager;

            getOverlay(): Promise<IOverlay | null>;

            getOverlaySync(): IOverlay | null;

            getParent(): object | null;

            setParent(parent: object): this;

            getMap(): Map;
        }

        class ViaPointModel implements IEventEmitter {
            events: IEventManager;
            geometry: geometry.base.Point;
            multiRoute: MultiRouteModel;
            properties: data.Manager;

            destroy(): void;

            getReferencePoint(): object;

            getReferencePointIndex(): number;

            setReferencePoint(referencePoint: object): void;

            update(viaPointJson: object): void;
        }

        class WayPoint implements IGeoObject {
            geometry: IGeometry | null;
            properties: data.Manager;
            state: IDataManager;
            events: IEventManager;
            options: IOptionManager;
            model: WayPointModel;

            getOverlay(): Promise<IOverlay | null>;

            getOverlaySync(): IOverlay | null;

            getParent(): object | null;

            setParent(parent: object): this;

            getMap(): Map;
        }

        class WayPointModel implements IEventEmitter {
            events: IEventManager;
            geometry: geometry.base.Point;
            multiRoute: MultiRouteModel;
            properties: data.Manager;

            destroy(): void;

            getReferencePoint(): object;

            getReferencePointIndex(): number;

            setReferencePoint(referencePoint: object): void;

            update(wayPointJson: object): void;
        }
    }

    namespace option {
        class Manager implements IOptionManager {
            constructor(options?: object, parent?: IOptionManager, name?: string);

            events: IEventManager;

            get(key: string, defaultValue: object): object;

            getAll(): object;

            getName(): string;

            getNative(key: string): object;

            resolve(key: string, name?: string): object;

            set(key: object | string, value?: object | number | string | null): this;

            unset(keys: string[][] | string[] | string): this;

            unsetAll(): this;

            setName(name: string): void;

            getParent(): null | IOptionManager;

            setParent(parent: IOptionManager): this;

            freeze(): IFreezable;

            isFrozen(): boolean;

            unfreeze(): IFreezable;

            add(
                types: string[][] | string[] | string,
                callback: (event: object | IEvent) => void,
                context?: object,
                priority?: number,
            ): this;

            group(): IEventGroup;

            remove(
                types: string[][] | string[] | string,
                callback: (event: object | IEvent) => void,
                context?: object,
                priority?: number,
            ): this;

            fire(type: string, eventObject: object | IEvent): this;
        }

        const presetStorage: util.Storage;
    }

    namespace pane {
        class EventsPane implements IEventPane {
            constructor(map: Map, params: {
                className?: string;
                css?: CSSStyleDeclaration;
                patch?: {
                    selectable?: boolean;
                };
                transparent?: boolean;
                checkContextMenu?: boolean;
                zIndex?: number;
            });

            events: IEventManager;

            destroy(): void;

            getElement(): HTMLElement;

            getMap(): Map;

            getOverflow(): "visible" | "hidden";

            getZIndex(): number;
        }

        class MovablePane implements IContainerPane {
            constructor(map: Map, params: {
                css?: CSSStyleDeclaration;
                margin?: number;
                overflow?: "hidden" | "visible";
                zIndex?: number;
            });

            events: IEventManager;

            destroy(): void;

            fromClientPixels(clientPixelPoint: number[]): number[];

            getElement(): HTMLElement;

            getMap(): Map;

            getOverflow(): "visible" | "hidden";

            getZIndex(): number;

            getZoom(): number;

            toClientPixels(globalPixelPoint: number[]): number[];
        }

        class StaticPane implements IContainerPane {
            constructor(map: Map, params: {
                css?: CSSStyleDeclaration;
                margin?: number;
                overflow?: "visible" | "hidden";
                zIndex?: number;
            });

            events: IEventManager;

            destroy(): void;

            fromClientPixels(clientPixelPoint: number[]): number[];

            getElement(): HTMLElement;

            getMap(): Map;

            getOverflow(): "visible" | "hidden";

            getZIndex(): number;

            getZoom(): number;

            toClientPixels(globalPixelPoint: number[]): number[];
        }
    }

    namespace panorama {
        type Layer = "yandex#panorama" | "yandex#airPanorama";

        class Base implements IPanorama {
            getAngularBBox(): number[];

            getConnectionArrows(): IPanoramaConnectionArrow[];

            getConnectionMarkers(): IPanoramaConnectionMarker[];

            getConnections(): IPanoramaConnectionMarker[];

            getCoordSystem(): ICoordSystem;

            getDefaultDirection(): number[];

            getDefaultSpan(): number[];

            getGraph(): IPanoramaGraph | null;

            getMarkers(): IPanoramaMarker[];

            getName(): string;

            getPosition(): number[];

            getThoroughfares(): IPanoramaConnectionArrow[];

            getTileLevels(): IPanoramaTileLevel[];

            getTileSize(): number[];

            validate(): void;

            static createPanorama(params: {
                angularBBox: number[];
                coordSystem?: ICoordSystem | undefined;
                name?: string | undefined;
                position: number[];
                tilesLevels: IPanoramaTileLevel[];
                tileSize: number[];
            }): IPanorama;

            static getMarkerPositionFromDirection(
                panorama: IPanorama,
                direction: number[],
                distance: number,
            ): number[];
        }

        function createPlayer(element: HTMLElement | string, point: number[], options?: {
            direction?: number[] | string | undefined;
            layer?: Layer | undefined;
            span?: number[] | string | undefined;
        }): Promise<Player>;

        function isSupported(): boolean;

        function locate(point: number[], options?: { layer?: Layer | undefined }): Promise<IPanorama[]>;

        class Manager implements IEventEmitter {
            events: IEventManager;

            closePlayer(): void;

            disableLookup(): void;

            enableLookup(): void;

            getPlayer(): Player;

            isLookupEnabled(): boolean;

            openPlayer(panorama: IPanorama[] | number): Promise<void>;
        }

        class Player implements IEventEmitter {
            constructor(element: HTMLElement | string, panorama: IPanorama, options?: {
                autoFitToViewport?: "none" | "ifNull" | "always" | undefined;
                controls?: string[] | undefined;
                direction?: number[] | string | undefined;
                hotkeysEnabled?: boolean | undefined;
                scrollZoomBehavior?: boolean | undefined;
                span?: number[] | string | undefined;
                suppressMapOpenBlock?: boolean | undefined;
            });

            events: IEventManager;

            destroy(): void;

            fitToViewport(): void;

            getDirection(): number[];

            getPanorama(): IPanorama;

            getSpan(): number[];

            lookAt(point: number[]): this;

            moveTo(point: number[], options?: {
                direction?: number[] | string | undefined;
                layer?: Layer | undefined;
                span?: number[] | string | undefined;
            }): Promise<void>;

            setDirection(direction: number[] | string): this;

            setPanorama(panorama: IPanorama): this;

            setSpan(span: number[] | string): this;
        }
    }

    namespace router {
        class Editor implements ICustomizable, IEventEmitter {
            options: IOptionManager;
            events: IEventManager;

            start(options?: {
                addViaPoints?: boolean | undefined;
                addWayPoints?: boolean | undefined;
                editViaPoints?: boolean | undefined;
                editWayPoints?: boolean | undefined;
                removeViaPoints?: boolean | undefined;
                removeWayPoints?: boolean | undefined;
            }): void;

            stop(): void;
        }

        abstract class Route implements IGeoObject {
            geometry: IGeometry | null;
            properties: IDataManager;
            state: IDataManager;
            events: IEventManager;
            options: IOptionManager;
            editor: Editor;

            getOverlay(): Promise<IOverlay | null>;

            getOverlaySync(): IOverlay | null;

            getParent(): null | IControlParent;

            setParent(parent: IControlParent): this;

            getMap(): Map;

            getHumanJamsTime(): string;

            getHumanLength(): string;

            getHumanTime(): string;

            getJamsTime(): number;

            getLength(): number;

            getPaths(): GeoObjectCollection;

            getTime(): number;

            getViaPoints(): GeoObjectCollection;

            getWayPoints(): GeoObjectCollection;
        }
    }

    namespace shape {
        class Circle implements IShape {
            constructor(
                pixelGeometry: IPixelCircleGeometry,
                params?: {
                    fill?: boolean | undefined;
                    outline?: boolean | undefined;
                    strokeWidth?: number | undefined;
                },
            );

            contains(position: number[]): boolean;

            equals(shape: IShape): boolean;

            getBounds(): number[][] | null;

            getGeometry(): IPixelGeometry;

            getType(): string;

            scale(factor: number): IShape;

            shift(offset: number[]): IShape;
        }

        class LineString implements IShape {
            constructor(
                pixelGeometry: IPixelLineStringGeometry,
                params?: {
                    strokeWidth?: number | undefined;
                },
            );

            contains(position: number[]): boolean;

            equals(shape: IShape): boolean;

            getBounds(): number[][] | null;

            getGeometry(): IPixelGeometry;

            getType(): string;

            scale(factor: number): IShape;

            shift(offset: number[]): IShape;
        }

        class MultiPolygon implements IShape {
            constructor(
                pixelGeometry: IPixelMultiPolygonGeometry,
                params?: {
                    fill?: boolean | undefined;
                    outline?: boolean | undefined;
                    strokeWidth?: number | undefined;
                },
            );

            contains(position: number[]): boolean;

            equals(shape: IShape): boolean;

            getBounds(): number[][] | null;

            getGeometry(): IPixelGeometry;

            getType(): string;

            scale(factor: number): IShape;

            shift(offset: number[]): IShape;
        }

        class Polygon implements IShape {
            constructor(
                pixelGeometry: IPixelPolygonGeometry,
                params?: {
                    fill?: boolean | undefined;
                    outline?: boolean | undefined;
                    strokeWidth?: number | undefined;
                },
            );

            contains(position: number[]): boolean;

            equals(shape: IShape): boolean;

            getBounds(): number[][] | null;

            getGeometry(): IPixelGeometry;

            getType(): string;

            scale(factor: number): IShape;

            shift(offset: number[]): IShape;
        }

        class Rectangle implements IShape {
            constructor(
                geometry: IPixelRectangleGeometry,
                params?: {
                    fill?: boolean | undefined;
                    outline?: boolean | undefined;
                    strokeWidth?: number | undefined;
                },
            );

            contains(position: number[]): boolean;

            equals(shape: IShape): boolean;

            getBounds(): number[][] | null;

            getGeometry(): IPixelGeometry;

            getType(): string;

            scale(factor: number): IShape;

            shift(offset: number[]): IShape;
        }
    }

    interface meta {
        coordinatesOrder: "latlong" | "longlat";
        countryCode: string;
        languageCode: string;
        mode: "release" | "debug";
        ns: typeof ymaps;
        version: string;
    }

    class Balloon extends Popup<Balloon> implements IBaloon<Balloon>, IBalloonManager<Balloon> {
        constructor(map: Map, options?: IBalloonOptions);

        getData(): object;

        close(force?: boolean): Promise<Balloon>;

        getParent(): Balloon | null;

        setParent(parent: Balloon): this;

        autoPan(): Promise<Balloon>;

        freeze(): IFreezable;

        isFrozen(): boolean;

        unfreeze(): IFreezable;

        add(
            types: string[][] | string[] | string,
            callback: (event: object | IEvent) => void,
            context?: object,
            priority?: number,
        ): this;

        group(): IEventGroup;

        remove(
            types: string[][] | string[] | string,
            callback: (event: object | IEvent) => void,
            context?: object,
            priority?: number,
        ): this;

        fire(type: string, eventObject: object | IEvent): this;

        destroy(): void;

        getOptions(): IOptionManager | null;

        setOptions(options: object): Promise<Balloon>;
    }

    interface IBalloonOptions {
        autoPan?: boolean | undefined;
        autoPanCheckZoomRange?: boolean | undefined;
        autoPanDuration?: number | undefined;
        autoPanMargin?: number | number[] | undefined;
        autoPanUseMapMargin?: boolean | undefined;
        closeButton?: boolean | undefined;
        closeTimeout?: number | undefined;
        contentLayout?: IClassConstructor<ILayout> | string | undefined;
        interactivityModel?: InteractivityModelKey | undefined;
        layout?: IClassConstructor<ILayout> | string | undefined;
        maxHeight?: number | undefined;
        maxWidth?: number | undefined;
        minHeight?: number | undefined;
        minWidth?: number | undefined;
        offset?: number[] | undefined;
        openTimeout?: number | undefined;
        pane?: string | undefined;
        panelContentLayout?: IClassConstructor<ILayout> | string | undefined;
        panelMaxHeightRatio?: number | undefined;
        panelMaxMapArea?: number | undefined;
        shadow?: boolean | undefined;
        shadowLayout?: IClassConstructor<ILayout> | string | undefined;
        shadowOffset?: number[] | undefined;
        zIndex?: string | undefined;
    }

    interface IBalloonOptionsWithBalloonPrefix {
        balloonContent?: string | undefined;
        balloonAutoPan?: boolean | undefined;
        balloonAutoPanCheckZoomRange?: boolean | undefined;
        balloonAutoPanDuration?: number | undefined;
        balloonAutoPanMargin?: number | number[] | undefined;
        balloonAutoPanUseMapMargin?: boolean | undefined;
        balloonCloseButton?: boolean | undefined;
        balloonCloseTimeout?: number | undefined;
        balloonContentLayout?: IClassConstructor<ILayout> | string | undefined;
        balloonInteractivityModel?: InteractivityModelKey | undefined;
        balloonLayout?: IClassConstructor<ILayout> | string | undefined;
        balloonMaxHeight?: number | undefined;
        balloonMaxWidth?: number | undefined;
        balloonMinHeight?: number | undefined;
        balloonMinWidth?: number | undefined;
        balloonOffset?: number[] | undefined;
        balloonOpenTimeout?: number | undefined;
        balloonPane?: string | undefined;
        balloonPanelContentLayout?: IClassConstructor<ILayout> | string | undefined;
        balloonPanelMaxHeightRatio?: number | undefined;
        balloonPanelMaxMapArea?: number | undefined;
        balloonShadow?: boolean | undefined;
        balloonShadowLayout?: IClassConstructor<ILayout> | string | undefined;
        balloonShadowOffset?: number[] | undefined;
        balloonZIndex?: string | undefined;
    }

    class Circle implements GeoObject<ICircleGeometry> {
        constructor(
            geometry: ICircleGeometry[][][][] | number[][] | object,
            properties?: object | IDataManager,
            options?: ICircleOptions,
        );

        balloon: geoObject.Balloon;
        editor: IGeometryEditor;
        hint: geoObject.Hint;
        events: event.Manager;
        options: option.Manager;
        properties: data.Manager;
        state: data.Manager;

        geometry: ICircleGeometry | null;
        indices: ArrayBuffer;
        vertices: ArrayBuffer;

        getOverlay(): Promise<IOverlay | null>;

        getOverlaySync(): IOverlay | null;

        getParent(): null | IControlParent;

        setParent(parent: IControlParent): this;

        getMap(): Map;
    }

    interface ICircleOptions {
        circleOverlay?:
            | string
            | ((geometry: IPixelCircleGeometry, data: object, options: object) => Promise<IOverlay>)
            | undefined;
        cursor?: string | undefined;
        draggable?: boolean | undefined;
        fill?: boolean | undefined;
        fillColor?: string | undefined;
        fillImageHref?: string | undefined;
        fillMethod?: "stretch" | "tile" | undefined;
        fillOpacity?: number | undefined;
        hasBalloon?: boolean | undefined;
        hasHint?: boolean | undefined;
        hideIconOnBalloonOpen?: boolean | undefined;
        interactiveZIndex?: boolean | undefined;
        interactivityModel?: InteractivityModelKey | undefined;
        opacity?: number | undefined;
        openBalloonOnClick?: boolean | undefined;
        openEmptyBalloon?: boolean | undefined;
        openEmptyHint?: boolean | undefined;
        openHintOnHover?: boolean | undefined;
        outline?: boolean | undefined;
        pane?: string | undefined;
        strokeColor?: string[][] | string[] | string | undefined;
        strokeOpacity?: number[][] | number[] | number | undefined;
        strokeStyle?: string[][][] | object[][] | string[] | object[] | string | object | undefined;
        strokeWidth?: number[][] | number[] | number | undefined;
        syncOverlayInit?: boolean | undefined;
        useMapMarginInDragging?: boolean | undefined;
        visible?: boolean | undefined;
        zIndex?: number | undefined;
        zIndexActive?: number | undefined;
        zIndexDrag?: number | undefined;
        zIndexHover?: number | undefined;
    }

    class Clusterer implements IChildOnMap, ICustomizable, IEventEmitter, IParentOnMap {
        constructor(options?: IClustererOptions);

        balloon: clusterer.Balloon;
        // balloonopen:
        // balloonclose:
        events: IEventManager;
        hint: clusterer.Hint;
        options: IOptionManager;

        add(objects: IGeoObject | IGeoObject[]): this;

        createCluster(center: number[], geoObjects: IGeoObject[]): IGeoObject;

        getBounds(): number[][] | null;

        getClusters(): IGeoObject[];

        getGeoObjects(): IGeoObject[];

        getMap(): Map;

        getObjectState(geoObject: IGeoObject): { isShown: boolean; cluster: Cluster; isClustered: boolean };

        getParent(): IParentOnMap | null;

        remove(objects: IGeoObject | IGeoObject[]): this;

        removeAll(): this;

        setParent(parent: IParentOnMap | null): this;
    }

    interface Cluster {
        id: string;
        geometry: IGeometry;
        properties: {
            geoObjects: IGeoObject[];
            [k: string]: any;
        };
        options: IOptionManager;
    }

    interface IClustererOptionsInject {
        gridSize?: number | undefined;
        groupByCoordinates?: boolean | undefined;
        margin?: number[] | number | undefined;
        maxZoom?: number[] | number | undefined;
        minClusterSize?: number | undefined;
        preset?: PresetKey | undefined;
        showInAlphabeticalOrder?: boolean | undefined;
        useMapMargin?: boolean | undefined;
        viewportMargin?: number[] | number | undefined;
        zoomMargin?: number[] | number | undefined;
    }

    interface IClustererOptions extends IClustererOptionsInject {
        hasBalloon?: boolean | undefined;
        hasHint?: boolean | undefined;
    }

    class ClusterPlacemark implements IGeoObject, collection.Item {
        constructor(
            geometry: number[] | object | IPointGeometry,
            properties: IClusterPlacemarkProperties,
            options?: IClusterPlacemarkOptions,
        );

        geometry: IGeometry | null;
        properties: IDataManager;
        events: IEventManager;
        options: IOptionManager;
        state: data.Manager;

        getOverlay(): Promise<IOverlay | null>;

        getOverlaySync(): IOverlay | null;

        getParent(): null | IControlParent;

        setParent(parent: IControlParent): this;

        getMap(): Map;

        onAddToMap(map: Map): void;

        onRemoveFromMap(oldMap: Map): void;

        getBounds(): number[][] | null;

        getGeoObjects(): IGeoObject[];
    }

    interface IClusterPlacemarkProperties extends IDataManager {
        geoObjects: IGeoObject[];
    }

    interface IClusterPlacemarkOptions {
        balloonContentLayout?: IClassConstructor<ILayout> | ClusterLayoutKey | undefined;
        balloonContentLayoutHeight?: number | undefined;
        balloonContentLayoutWidth?: number | undefined;
        balloonItemContentLayout?: ILayout | ClusterContentLayoutKey | undefined;
        balloonPanelContentLayout?: IClassConstructor<ILayout> | ClusterLayoutKey | undefined;
        cursor?: string | undefined;
        disableClickZoom?: boolean | undefined;
        hideIconOnBalloonOpen?: boolean | undefined;
        iconColor?: string | undefined;
        iconContentLayout?: string | IClassConstructor<ILayout> | undefined;
        iconLayout?: string | IClassConstructor<ILayout> | undefined;
        icons?:
            | Array<{
                href: string;
                size: number[];
                offset: number[];
                shape?: IShape | IGeometryJson | undefined;
            }>
            | undefined;
        iconShape?: IGeometryJson | undefined;
        interactivityModel?: InteractivityModelKey | undefined;
        numbers?: number[] | undefined;
        openBalloonOnClick?: boolean | undefined;
        openEmptyHint?: boolean | undefined;
        openHintOnHover?: boolean | undefined;
        zIndexHover?: number | undefined;
    }

    interface IClusterPlacemarkOptionsWithClusterPrefix {
        clusterBalloonContentLayout?: IClassConstructor<ILayout> | ClusterLayoutKey | undefined;
        clusterBalloonContentLayoutHeight?: number | undefined;
        clusterBalloonContentLayoutWidth?: number | undefined;
        clusterBalloonItemContentLayout?: ILayout | ClusterContentLayoutKey | undefined;
        clusterBalloonPanelContentLayout?: IClassConstructor<ILayout> | ClusterLayoutKey | undefined;
        clusterCursor?: string | undefined;
        clusterDisableClickZoom?: boolean | undefined;
        clusterHideIconOnBalloonOpen?: boolean | undefined;
        clusterIconColor?: string | undefined;
        clusterIconContentLayout?: IClassConstructor<ILayout> | string | undefined;
        clusterIconLayout?: IClassConstructor<ILayout> | string | undefined;
        clusterIcons?:
            | Array<{
                href: string;
                size: number[];
                offset: number[];
                shape?: IShape | IGeometryJson | undefined;
            }>
            | undefined;
        clusterIconShape?: IGeometryJson | undefined;
        clusterInteractivityModel?: InteractivityModelKey | undefined;
        clusterNumbers?: number[] | undefined;
        clusterOpenBalloonOnClick?: boolean | undefined;
        clusterOpenEmptyHint?: boolean | undefined;
        clusterOpenHintOnHover?: boolean | undefined;
        clusterZIndexHover?: number | undefined;
    }

    class Collection<T = {}> implements ICollection, collection.Item {
        constructor(options?: object);

        events: IEventManager;
        options: IOptionManager;

        add(object: object): this;

        getIterator(): IIterator;

        remove(object: object): this;

        getParent(): null | IControlParent;

        setParent(parent: IControlParent): this;

        getMap(): Map;

        onAddToMap(map: Map): void;

        onRemoveFromMap(oldMap: Map): void;

        filter(filterFunction: (object: object) => boolean): object[];

        get(index: number): object;

        getAll(): T[];

        getLength(): number;

        indexOf(childToFind: object): number;

        removeAll(): this;
    }

    class Event<OriginalEvent = {}, TargetGeometry = {}> implements IEvent<OriginalEvent, TargetGeometry> {
        constructor(originalEvent: object, sourceEvent: IEvent);

        allowMapEvent(): void;

        callMethod(name: string): void;

        get<T extends OriginalEvent, K extends keyof T = keyof T>(name: K): T[K];
        get(name: string): any;

        getSourceEvent(): IEvent<OriginalEvent, TargetGeometry> | null;

        isDefaultPrevented(): boolean;

        isImmediatePropagationStopped(): boolean;

        isMapEventAllowed(): boolean;

        isPropagationStopped(): boolean;

        preventDefault(): boolean;

        stopImmediatePropagation(): boolean;

        stopPropagation(): boolean;

        originalEvent: {
            domEvent: {
                originalEvent: OriginalEvent;
            };
            target: {
                geometry?: TargetGeometry | undefined;
            };
        };
    }

    class DomEvent<OriginalEvent = {}, TargetGeometry = {}> implements IDomEvent<OriginalEvent, TargetGeometry> {
        constructor(originalEvent: DomEvent, type?: object);

        allowMapEvent(): void;

        callMethod(name: string): void;

        get<T extends OriginalEvent, K extends keyof T = keyof T>(name: K): T[K];
        get(name: string): any;

        getSourceEvent(): IDomEvent<OriginalEvent, TargetGeometry>;

        isDefaultPrevented(): boolean;

        isImmediatePropagationStopped(): boolean;

        isMapEventAllowed(): boolean;

        isPropagationStopped(): boolean;

        preventDefault(): boolean;

        stopImmediatePropagation(): boolean;

        stopPropagation(): boolean;

        originalEvent: {
            domEvent: {
                originalEvent: OriginalEvent;
            };
            target: {
                geometry?: TargetGeometry | undefined;
            };
        };
    }

    class GeoObject<T = IGeometry, TargetGeometry extends {} = {}> implements IGeoObject<T> {
        constructor(feature?: IGeoObjectFeature, options?: IGeoObjectOptions);

        geometry: T | null;
        balloon: geoObject.Balloon;
        editor: IGeometryEditor;
        hint: geoObject.Hint;
        events: event.Manager<TargetGeometry>;
        options: option.Manager;
        properties: data.Manager;
        state: data.Manager;

        getOverlay(): Promise<IOverlay | null>;

        getOverlaySync(): IOverlay | null;

        getParent(): null | IControlParent;

        setParent(parent: IControlParent): this;

        getMap(): Map;
    }

    class GeocodeResult implements IGeoObject {
        events: IEventManager;
        geometry: IGeometry | null;
        options: IOptionManager;
        properties: IDataManager;
        state: IDataManager;

        getAddressLine(): string;
        getAdministrativeAreas(): ReadonlyArray<string>;
        getCountry(): string | null;
        getCountryCode(): string | null;
        getLocalities(): ReadonlyArray<string>;
        getMap(): Map;
        getOverlay(): Promise<IOverlay | null>;
        getOverlaySync(): IOverlay | null;
        getParent(): object | null;
        getPremise(): string | null;
        getPremiseNumber(): string | null;
        getThoroughfare(): string | null;
        setParent(parent: object | null): this;
    }

    interface IGeoObjectFeature {
        geometry?: IGeometry | IGeometryJson | undefined;
        properties?: IDataManager | object | undefined;
    }

    interface IGeoObjectOptions extends ICircleOptions, IBalloonOptionsWithBalloonPrefix {
        iconCaptionMaxWidth?: number | undefined;
        iconColor?: string | undefined;
        iconContentLayout?: string | IClassConstructor<ILayout> | undefined;
        iconContentOffset?: number[] | undefined;
        iconContentPadding?: number[] | undefined;
        iconContentSize?: number[] | undefined;
        iconImageClipRect?: number[][] | undefined;
        iconImageHref?: string | undefined;
        iconImageOffset?: number[] | undefined;
        iconImageShape?: IShape | null | undefined;
        iconImageSize?: number[] | undefined;
        iconLayout?: string | IClassConstructor<ILayout> | undefined;
        iconMaxHeight?: number | undefined;
        iconMaxWidth?: number | undefined;
        iconOffset?: number[] | undefined;
        iconShadow?: boolean | undefined;
        iconShadowImageClipRect?: number[][] | undefined;
        iconShadowImageHref?: string | undefined;
        iconShadowImageOffset?: number[] | undefined;
        iconShadowImageSize?: number[] | undefined;
        iconShadowLayout?: string | IClassConstructor<ILayout> | undefined;
        iconShadowOffset?: number[] | undefined;
        lineStringOverlay?: OverlayKey | undefined;
        pointOverlay?: OverlayKey | undefined;
        polygonOverlay?: OverlayKey | undefined;
        preset?: PresetKey | undefined;
        rectangleOverlay?: OverlayKey | undefined;
        setMapCursorInDragging?: boolean | undefined;
    }

    class GeoObjectCollection implements IGeoObject, IGeoObjectCollection {
        constructor(feature?: {
            children?: IGeoObject[] | undefined;
            geometry?: IGeometry | object | undefined;
            properties?: IDataManager | object | undefined;
        }, options?: object);

        geometry: IGeometry | null;
        properties: IDataManager;
        state: IDataManager;
        events: IEventManager;
        options: IOptionManager;

        getOverlay(): Promise<IOverlay | null>;

        getOverlaySync(): IOverlay | null;

        getParent(): null | IControlParent;

        setParent(parent: IControlParent): this;

        getMap(): Map;

        add(child: IGeoObject, index?: number): this;

        each(callback: (object: IGeoObject) => void, context?: object): void;

        get(index: number): IGeoObject;

        getBounds(): number[][] | null;

        getIterator(): IIterator;

        getLength(): number;

        getPixelBounds(): number[][] | null;

        indexOf(object: IGeoObject): number;

        remove(child: IGeoObject): this;

        removeAll(): this;

        set(index: number, child: IGeoObject): this;

        splice(index: number, length: number): this;

        toArray(): IGeoObject[];
    }

    class Layer implements ILayer, IParentOnMap, IPositioningContext {
        constructor(tileUrlTemplate: string | ((tileNumber: number[], tileZoom: number) => string));

        events: IEventManager;
        options: IOptionManager;

        fromClientPixels(clientPixelPoint: number[]): number[];

        getZoom(): number;

        toClientPixels(globalPixelPoint: number[]): number[];

        getParent(): null | IControlParent;

        setParent(parent: IControlParent): this;

        getMap(): Map;

        getAlias(): string;

        getElement(): HTMLElement;
    }

    class Map implements IDomEventEmitter {
        constructor(parentElement: HTMLElement | string, state: IMapState, options?: IMapOptions);

        action: map.action.Manager;
        balloon: map.Balloon;
        behaviors: map.behavior.Manager;
        container: map.Container;
        controls: control.Manager;
        converter: map.Converter;
        copyrights: map.Copyrights;
        cursors: util.cursor.Manager;
        events: event.Manager;
        geoObjects: map.GeoObjects;
        hint: map.Hint;
        layers: map.layer.Manager;
        margin: map.margin.Manager;
        options: option.Manager;
        panes: map.pane.Manager;
        zoomRange: map.ZoomRange;

        destroy(): void;

        getBounds(options?: IMapMarginOptions): number[][];

        getCenter(options?: IMapMarginOptions): number[];

        getGlobalPixelCenter(options?: IMapMarginOptions): number[];

        getPanoramaManager(): Promise<panorama.Manager>;

        getType(): string | MapType;

        getZoom(): number;

        panTo(center: number[] | object[], options?: IMapPanOptions): Promise<void>;

        setBounds(bounds: number[][], options?: IMapBoundsOptions): Promise<void>;

        setCenter(center: number[], zoom?: number, options?: IMapPositionOptions): Promise<void>;

        setGlobalPixelCenter(globalPixelCenter: number[], zoom?: number, options?: IMapPositionOptions): Promise<void>;

        setType(type: string | MapType, options?: IMapCheckZoomRangeOptions): Promise<void>;

        setZoom(zoom: number, options?: IMapZoomOptions): Promise<void>;
    }

    class MapEvent<OriginalEvent = {}, TargetGeometry = {}> extends Event<OriginalEvent, TargetGeometry> {
        get(name: string): any;
        get(name: "coords" | "globalPixels" | "pagePixels" | "clientPixels"): [number, number];
        get(name: "domEvent"): DomEvent<OriginalEvent, TargetGeometry> | undefined;
    }

    interface IMapMarginOptions {
        useMapMargin?: boolean | undefined;
    }

    interface IMapCheckZoomRangeOptions {
        checkZoomRange?: boolean | undefined;
    }

    interface IMapZoomOptions extends IMapMarginOptions, IMapCheckZoomRangeOptions {
        duration?: number | undefined;
    }

    interface IMapPositionOptions extends IMapZoomOptions {
        timingFunction?: string | undefined;
    }

    interface IMapBoundsOptions extends IMapPositionOptions {
        preciseZoom?: boolean | undefined;
        zoomMargin?: number[][] | number[] | undefined;
    }

    interface IMapPanOptions extends IMapPositionOptions {
        delay?: number | undefined;
        flying?: boolean | undefined;
        safe?: boolean | undefined;
    }

    class MapType {
        constructor(name: string, layers: Array<IClassConstructor<Layer> | string>);
    }

    interface IMapState {
        behaviors?: string[] | undefined;
        bounds?: number[][] | undefined;
        center?: number[] | undefined;
        controls?:
            | Array<
                | string
                | control.ZoomControl
                | control.RulerControl
                | control.TypeSelector
            >
            | undefined;
        margin?: number[][] | number[] | undefined;
        type?: "yandex#map" | "yandex#satellite" | "yandex#hybrid" | undefined;
        zoom?: number | undefined;
    }

    interface IMapOptions {
        autoFitToViewport?: "none" | "ifNull" | "always" | undefined;
        avoidFractionalZoom?: boolean | undefined;
        exitFullscreenByEsc?: boolean | undefined;
        fullscreenZIndex?: number | undefined;
        mapAutoFocus?: boolean | undefined;
        maxAnimationZoomDifference?: number | undefined;
        maxZoom?: number | undefined;
        minZoom?: number | undefined;
        nativeFullscreen?: boolean | undefined;
        projection?: IProjection | undefined;
        restrictMapArea?: boolean | number[][] | undefined;
        suppressMapOpenBlock?: boolean | undefined;
        suppressObsoleteBrowserNotifier?: boolean | undefined;
        yandexMapAutoSwitch?: boolean | undefined;
        yandexMapDisablePoiInteractivity?: boolean | undefined;

        copyrightLogoVisible?: boolean | undefined;
        copyrightProvidersVisible?: boolean | undefined;
        copyrightUaVisible?: boolean | undefined;
    }

    class Placemark extends GeoObject<IPointGeometry, geometry.Point> {
        constructor(
            geometry: number[] | object | IPointGeometry,
            properties: object | IDataManager,
            options?: IPlacemarkOptions,
        );
    }

    interface IPlacemarkOptions
        extends
            IBalloonOptionsWithBalloonPrefix,
            layout.IImageWithContentOptionsWithIconPrefix,
            layout.IPieChartOptionsWithIconPrefix
    {
        preset?: PresetKey | undefined;
        iconColor?: string | undefined;
        iconLayout?: IClassConstructor<ILayout> | IconLayoutKey | undefined;

        cursor?: string | undefined;
        draggable?: boolean | undefined;
        hasBalloon?: boolean | undefined;
        hasHint?: boolean | undefined;
        hideIconOnBalloonOpen?: boolean | undefined;
        iconOffset?: number[] | undefined;
        iconShape?: IGeometryJson | null | undefined;
        interactiveZIndex?: boolean | undefined;
        interactivityModel?: InteractivityModelKey | undefined;
        openBalloonOnClick?: boolean | undefined;
        openEmptyBalloon?: boolean | undefined;
        openEmptyHint?: boolean | undefined;
        openHintOnHover?: boolean | undefined;
        pane?: string | undefined;
        pointOverlay?:
            | string
            | ((geometry: IPixelPointGeometry, data?: IDataManager, options?: object) => vow.Promise)
            | undefined;
        syncOverlayInit?: boolean | undefined;
        useMapMarginInDragging?: boolean | undefined;
        visible?: boolean | undefined;
        zIndex?: number | undefined;
        zIndexActive?: number | undefined;
        zIndexDrag?: number | undefined;
        zIndexHover?: number | undefined;
    }

    class Polygon extends GeoObject<IPolygonGeometry> {
        constructor(
            geometry: number[][][] | object | IPolygonGeometry,
            properties?: object | IDataManager,
            options?: IPolygonOptions,
        );
    }

    interface IPolygonOptions {
        cursor?: string | undefined;
        draggable?: boolean | undefined;
        fill?: boolean | undefined;
        fillColor?: string | undefined;
        fillImageHref?: string | undefined;
        fillMethod?: "stretch" | "tile" | undefined;
        fillOpacity?: number | undefined;
        hasBalloon?: boolean | undefined;
        hasHint?: boolean | undefined;
        interactiveZIndex?: boolean | undefined;
        interactivityModel?: InteractivityModelKey | undefined;
        opacity?: number | undefined;
        openBalloonOnClick?: boolean | undefined;
        openEmptyBalloon?: boolean | undefined;
        openEmptyHint?: boolean | undefined;
        openHintOnHover?: boolean | undefined;
        outline?: boolean | undefined;
        pane?: string | undefined;
        polygonOverlay?: string | undefined;
        strokeColor?: string | string[] | undefined;
        strokeOpacity?: number | number[] | undefined;
        strokeStyle?: string | string[] | object | object[] | undefined;
        strokeWidth?: number | number[] | undefined;
        syncOverlayInit?: boolean | undefined;
        useMapMarginInDragging?: boolean | undefined;
        visible?: boolean | undefined;
        zIndex?: number | undefined;
        zIndexActive?: number | undefined;
        zIndexDrag?: number | undefined;
        zIndexHover?: number | undefined;
    }

    class Polyline extends GeoObject<ILineStringGeometry> {
        constructor(
            geometry: number[][] | object | ILineStringGeometry,
            properties?: object | IDataManager,
            options?: IPolylineOptions,
        );
    }

    interface IPolylineOptions {
        cursor?: string | undefined;
        draggable?: boolean | undefined;
        hasBalloon?: boolean | undefined;
        hasHint?: boolean | undefined;
        interactiveZIndex?: boolean | undefined;
        interactivityModel?: InteractivityModelKey | undefined;
        lineStringOverlay?: (() => object | string) | undefined;
        opacity?: number | undefined;
        openBalloonOnClick?: boolean | undefined;
        openEmptyBalloon?: boolean | undefined;
        openEmptyHint?: boolean | undefined;
        openHintOnHover?: boolean | undefined;
        pane?: string | undefined;
        strokeColor?: string | string[] | undefined;
        strokeOpacity?: number | number[] | undefined;
        strokeStyle?: string | string[] | object | object[] | undefined;
        strokeWidth?: number | number[] | undefined;
        syncOverlayInit?: boolean | undefined;
        useMapMarginInDragging?: boolean | undefined;
        visible?: boolean | undefined;
        zIndex?: number | undefined;
        zIndexActive?: number | undefined;
        zIndexDrag?: number | undefined;
        zIndexHover?: number | undefined;
    }

    class Popup<T> implements IPopup<T> {
        constructor(map: Map, options?: IPopupOptions);

        options: IOptionManager;
        events: IEventManager;

        close(force?: boolean): Promise<T>;

        getData(): object;

        getOverlay(): Promise<IOverlay>;

        getOverlaySync(): IOverlay;

        getPosition(): number[];

        isOpen(): boolean;

        open(position: number[], data: object | string | HTMLElement): Promise<T>;

        setData(data: object | string | HTMLElement): Promise<T>;

        setPosition(position: number[]): Promise<T>;
    }

    interface IPopupOptions {
        closeTimeout?: number | undefined;
        interactivityModel?: InteractivityModelKey | undefined;
        openTimeout?: number | undefined;
        pane?: IPane | string | undefined;
        projection?: IProjection | undefined;
        zIndex?: number | undefined;
    }

    function ready(
        successCallback?: () => any | IReadyObject,
        errorCallback?: () => any,
        context?: object,
    ): Promise<void>;

    /**
     * Processes geocoding requests. The request result can be provided in JSON format or as a GeoObjectCollection object.
     * @param request The address for which coordinates need to be obtained (forward geocoding), or the coordinates for which the address needs to be determined (reverse geocoding).
     * @param options Options.
     */
    function geocode(request: string | ReadonlyArray<number>, options?: IGeocodeOptions): Promise<IGeocodeResult>;

    interface IGeocodeOptions {
        /**
         * A rectangular area on the map, where the object being searched for is presumably located.
         */
        boundedBy?: ReadonlyArray<ReadonlyArray<number>>;

        /**
         * If true, JSON is passed to the handler function. Otherwise, the handler function is passed an object containing the geoObjects field with the geocoding results as GeoObjectCollection.
         * When geocoding using the 'yandex#map' geocoder, the collection contains GeocodeResult objects.
         */
        json?: boolean;

        /**
         * Type of toponym (only for reverse geocoding).
         */
        kind?: "house" | "street" | "metro" | "district" | "locality";

        /**
         * Geocoding provider
         */
        provider?: IGeocodeProvider | "yandex#map";

        /**
         * Maximum number of results to be returned.
         */
        results?: number;

        /**
         * Determines how to interpret the coordinates in the request.
         */
        searchCoordOrder?: "longlat" | "latlong";

        /**
         * Number of results that must be skipped.
         */
        skip?: number;

        /**
         * Search only inside the area defined by the "boundedBy" option.
         */
        strictBounds?: boolean;
    }

    interface IGeocodeResult {
        /**
         *  Geocoding results.
         */
        geoObjects: GeoObjectCollection;
    }

    namespace geolocation {
        /**
         * Tries to determine the user's location. Returns the promise object, which will either be confirmed by the object with the field geoObjects or rejected with an error message.
         * The geoObjects field is an instance of GeoObjectCollection. The object that indicates the user's current location will be added to the collection.
         * @param options Options.
         */
        function get(options?: IGeolocationOptions): Promise<IGeolocationResult>;

        interface IGeolocationOptions {
            /**
             * If true, geocode the user position automatically; if false, return as it is.
             * If automatic geocoding is used, the object marking the user's current position has the same structure as the result of executing geocode.
             */
            autoReverseGeocode?: boolean;

            /**
             * If true, the map center and zoom level are adjusted automatically to show the current location of the user; if false, nothing happens.
             */
            mapStateAutoApply?: boolean;

            /**
             * Geolocation provider. Accepted values:
             *  'yandex' - geolocation according to the Yandex data, based on the user IP-address;
             *  'browser' - built-in browser geolocation;
             *  'auto' - try to locate the user by all means available and then choose the best value.
             */
            provider?: "yandex" | "browser" | "auto";

            /**
             * The response time, in milliseconds.
             */
            timeout?: number;

            /**
             * Whether to account for map margins map.margin.Manager when automatically centering and zooming the map.
             */
            useMapMargin?: boolean;
        }

        interface IGeolocationResult {
            /**
             * Geolocation results.
             */
            geoObjects: GeoObjectCollection;
        }
    }

    /**
     * Processes requests for search suggestions.
     * Returns a promise object that is either rejected with an error,
     * or confirmed by an array of objects in the format { displayName: "Mitishi, Moscow region", value: "Russia, Moscow region, Mitishi " }.
     * The displayName field represents the toponym in a user-friendly way,
     * and the value field represents the value which should be inserted into the search field after the user selects the suggestion.
     * @param request Request string.
     * @param options Options.
     */
    function suggest(request: string, options?: ISuggestOptions): Promise<ISuggestResult[]>;

    interface ISuggestResult {
        /**
         * Represents the toponym in a user-friendly way.
         */
        displayName: string;

        /**
         * Represents the value which should be inserted into the search field after the user selects the suggestion.
         */
        value: string;

        /**
         * Array of ranges for highlighting to show which part of the result matched the query.
         * The range for highlighting is an array of two numbers: the indexes of the starting and ending symbols of the range.
         */
        hl: number[][];

        type: string;
    }

    interface ISuggestProvider {
        suggest(request: string, options?: Omit<ISuggestOptions, "provider">): Promise<ISuggestResult[]>;
    }

    interface ISuggestOptions {
        /**
         * A rectangular area on the map, where the object being searched for is presumably located. Must be set as an array, such as [[30, 40], [50, 50]].
         */
        boundedBy?: number[][];

        /**
         * Search suggestion provider. You can use the 'yandex#map' built-in search suggestion provider for map objects, or specify your own.
         */
        provider?: ISuggestProvider | string;

        /**
         * Maximum number of results to be returned.
         */
        results?: number;
    }

    interface IReadyObject {
        require?: string[] | undefined;
        context?: object | undefined;

        successCallback?(): void;

        errorCallback?(): void;
    }

    namespace template {
        const filtersStorage: util.Storage;
    }

    namespace templateLayoutFactory {
        function createClass<O extends {} = {}, S extends {} = {}>(
            template: string,
            overrides?: O,
            staticMethods?: S,
        ): IClassConstructor<layout.templateBased.Base & O & S>;
    }

    namespace util {
        namespace bounds {
            function areIntersecting(bounds1: number[][], bounds2: number[][], projection?: IProjection): boolean;
            function containsBounds(outer: number[][], inner: number[][], projection?: IProjection): boolean;
            function containsPoint(bounds: number[][], point: number[], projection?: IProjection): boolean;
            function fromBounds(sourceBounds: number[][][], projection?: IProjection): number[][];
            function fromGlobalPixelBounds(
                pixelBounds: number[][],
                zoom: number,
                projection?: IProjection,
            ): number[][];
            function fromPoints(points: number[][], projection?: IProjection): number[][];
            function getCenter(bounds: number[][], projection?: IProjection): number[];
            function getCenterAndZoom(
                bounds: number[][],
                containerSize: number[],
                projection?: IProjection,
                params?: { inscribe: boolean; margin: number | number[]; preciseZoom: boolean },
            ): {
                center: number[][];
                zoom: number;
            };
            function getIntersections(
                bounds1: number[][],
                bounds2: number[][],
                projection?: IProjection,
            ): number[][][];
            function getSize(bounds: number[][], projection?: IProjection): number[];
            function toGlobalPixelBounds(
                geoBounds: number[][],
                zoom: number,
                projection?: IProjection,
            ): number[][];
        }

        namespace cursor {
            class Accessor {
                constructor(key: string);

                getKey(): string;

                remove(): void;

                setKey(): void;
            }

            class Manager {
                constructor(element: HTMLElement);

                push(key: string): Accessor;
            }
        }

        class Storage {
            add(key: string, object: object): this;

            get(key: string | object): object | string;

            remove(key: string): object;
        }
    }

    namespace vow {
        class Deferred {
            promise(): Promise;

            reject(reason: object): void;

            resolve(value: object): void;
        }

        class Promise {
            constructor(resolver?: () => void);

            done(
                onFulfilled?: (...args: any[]) => void,
                onRejected?: (err?: Error | any) => void,
                onProgress?: (...args: any[]) => void,
                ctx?: object,
            ): void;

            spread(
                onFulfilled?: (...args: any[]) => void,
                onRejected?: (err?: Error | any) => void,
                ctx?: object,
            ): Promise;

            then(
                onFulfilled?: (...args: any[]) => void,
                onRejected?: (err?: Error | any) => void,
                onProgress?: (...args: any[]) => void,
                ctx?: object,
            ): Promise;

            valueOf(): object;
        }
    }

    /*Interfaces*/

    interface IBaloon<T> extends IPopup<T>, ICustomizable, IChild<T>, IFreezable {
        autoPan(): Promise<T>;
    }

    interface IBalloonManager<T> extends IPopupManager<T> {
        autoPan(): Promise<T>;
    }

    interface IBaseGeometry extends IEventEmitter {
        getBounds(): number[][] | null;

        getType(): string;
    }

    interface IBaseLineStringGeometry extends IBaseGeometry, ILineStringGeometryAccess {
    }

    interface IBasePointGeometry extends IBaseGeometry, IPointGeometryAccess {
    }

    interface IBasePolygonGeometry extends IBaseGeometry, IPolygonGeometryAccess {
    }

    interface IBehavior extends IChildOnMap, ICustomizable {
        disable(): void;

        enable(): void;

        isEnabled(): boolean;
    }

    interface IChild<T> extends IEventEmitter {
        getParent(): object | null;

        setParent(parent: object | null): this;
    }

    interface IChildOnMap extends IChild<IControlParent> {
    }

    interface ICircleGeometry extends ICircleGeometryAccess, IGeometry {
    }

    interface ICircleGeometryAccess extends IFreezable {
        contains(position: number[]): boolean;

        getClosest(anchorPosition: number[]): object;

        getCoordinates(): number[] | null;

        getRadius(): number;

        setCoordinates(coordinates: number[] | null): this;

        setRadius(radius: number): this;
    }

    interface ICollection extends IEventEmitter {
        add(object: object): this;

        getIterator(): IIterator;

        remove(object: object): this;
    }

    interface IContainerPane extends IPane, IPositioningContext {}

    interface IControl extends IChildOnMap { // tslint:disable-line no-empty-interface
        // new (options?: object);
    }

    interface IControlParent extends IParentOnMap {
        getChildElement(child: IControl): Promise<HTMLElement>;
    }

    interface ICoordSystem {
        getDistance(point1: number[], point2: number[]): number;

        solveDirectProblem(startPoint: number[], direction: number[], distance: number): object;

        solveInverseProblem(startPoint: number[], endPoint: number[], reverseDirection?: boolean): object;
    }

    interface ICopyrightsAccessor extends ICopyrightsProvider { // tslint:disable-line no-empty-interface
    }

    interface ICopyrightsProvider extends IEventEmitter {
        getCopyrights(coords: number[], zoom: number): Promise<Array<string | HTMLElement>>;

        remove(): void;

        setCopyrights(copyrights: string | HTMLElement | Array<string | HTMLElement>): void;
    }

    interface ICustomizable extends IEventEmitter {
        options: IOptionManager;
    }

    interface IDataManager extends IEventEmitter {
        get(path: string, defaultValue: object): object;
    }

    interface IDomEventEmitter extends IEventEmitter { // tslint:disable-line no-empty-interface
    }

    interface IEvent<OriginalEvent = {}, TargetGeometry = {}> {
        allowMapEvent(): void;

        callMethod(name: string): void;

        get<T extends OriginalEvent, K extends keyof T = keyof T>(name: K): T[K];

        get(name: "type"): string;
        get(name: "objectId"): string | undefined;
        get(name: "newZoom" | "oldZoom"): number | undefined;

        get(name: string): any;

        getSourceEvent(): IEvent<OriginalEvent, TargetGeometry> | null;

        isDefaultPrevented(): boolean;

        isImmediatePropagationStopped(): boolean;

        isMapEventAllowed(): boolean;

        isPropagationStopped(): boolean;

        preventDefault(): boolean;

        stopImmediatePropagation(): boolean;

        stopPropagation(): boolean;

        originalEvent: {
            domEvent: {
                originalEvent: OriginalEvent;
            };
            target: {
                geometry?: TargetGeometry | undefined;
            };
        };
    }

    interface IDomEvent<OriginalEvent = {}, TargetGeometry = {}> extends IEvent<OriginalEvent, TargetGeometry> {
        getSourceEvent(): IDomEvent<OriginalEvent, TargetGeometry>;
    }

    interface IEventController {
        onStartListening?(events: IEventManager, type: string): void;

        onStopListening?(events: IEventManager, type: string): void;
    }

    interface IEventEmitter {
        events: IEventManager;
    }

    interface IEventGroup {
        add<K extends keyof EventMap>(
            types: K,
            callback: (event: EventMap[K] | IEvent) => void,
            context?: object,
            priority?: number,
        ): this;
        add(
            types: string[][] | string[] | string,
            callback: (event: object | IEvent) => void,
            context?: object,
            priority?: number,
        ): this;

        remove(
            types: string[][] | string[] | string,
            callback: (event: object | IEvent) => void,
            context?: object,
            priority?: number,
        ): this;

        removeAll(): this;
    }

    interface IEventManager<TargetGeometry = {}> extends IEventTrigger {
        add<K extends keyof EventMap>(
            types: K,
            callback: (event: IEvent<EventMap[K], TargetGeometry>) => void,
            context?: object,
            priority?: number,
        ): this;
        add(
            types: string[][] | string[] | string,
            callback: (event: IEvent) => void,
            context?: object,
            priority?: number,
        ): this;

        getParent(): object | null;

        group(): IEventGroup;

        remove(
            types: string[][] | string[] | string,
            callback: (event: object | IEvent) => void,
            context?: object,
            priority?: number,
        ): this;

        setParent(parent: object | null): this;
    }

    interface IEventPane extends IDomEventEmitter, IPane {}

    interface IEventTrigger {
        fire(type: string, eventObject?: object | IEvent): this;
    }

    interface IEventWorkflowController extends IEventController {
        onAfterEventFiring?(events: IEventManager, type: string, event?: IEvent): void;

        onBeforeEventFiring?(events: IEventManager, type: string, event?: IEvent): void;
    }

    interface IExpandableControlLayout extends ILayout { // tslint:disable-line no-empty-interface
    }

    interface IFreezable {
        events: IEventManager;

        freeze(): IFreezable;

        isFrozen(): boolean;

        unfreeze(): IFreezable;
    }

    interface IGeocodeProvider {
        geocode(
            request: string,
            options?: {
                boundedBy?: number[][] | undefined;
                results?: number | undefined;
                skip?: number | undefined;
                strictBounds?: boolean | undefined;
            },
        ): Promise<object>;

        suggest(
            request: string,
            options?: {
                boundedBy?: number[][] | undefined;
                results?: number | undefined;
                strictBounds?: boolean | undefined;
            },
        ): Promise<object>;
    }

    interface IGeometry extends IBaseGeometry, ICustomizable {
        getMap(): Map | null;

        getPixelGeometry(options?: object): IPixelGeometry;

        setMap(map: Map): void;
    }

    interface IGeometryEditor extends ICustomizable, IEventEmitter {
        geometry: IGeometry;
        state: IDataManager;

        startEditing(): void;

        stopEditing(): void;
    }

    interface IGeometryEditorChildModel extends IGeometryEditorModel {
        editor: IGeometryEditor;
        geometry: IBaseGeometry;

        getParent(): IGeometryEditorModel;

        setPixels(pixels: number[]): void;
    }

    interface IGeometryEditorModel extends IEventEmitter {
        destroy(): void;

        getPixels(): number[];
    }

    interface IGeometryEditorRootModel extends IGeometryEditorModel { // tslint:disable-line no-empty-interface
    }

    interface IGeometryJson {
        type: string;
    }

    interface IGeoObject<T = IGeometry> extends IChildOnMap, ICustomizable, IDomEventEmitter, IParentOnMap {
        geometry: T | null;
        properties: IDataManager;
        state: IDataManager;

        getOverlay(): Promise<IOverlay | null>;

        getOverlaySync(): IOverlay | null;
    }

    interface IGeoObjectCollection extends ICustomizable, IEventEmitter, IParentOnMap {
        add(child: IGeoObject, index?: number): this;

        each(callback: (object: IGeoObject) => void, context?: object): void;

        get(index: number): IGeoObject;

        getBounds(): number[][] | null;

        getIterator(): IIterator;

        getLength(): number;

        getPixelBounds(): number[][] | null;

        indexOf(object: IGeoObject): number;

        remove(child: IGeoObject): this;

        removeAll(): this;

        set(index: number, child: IGeoObject): this;

        splice(index: number, length: number): this;
    }

    interface IGeoObjectSequence extends ICustomizable, IEventEmitter, IParentOnMap {
        each(callback: (geoObject: IGeoObject) => void, context?: object): void;

        get(index: number): IGeoObject;

        getBounds(): number[][] | null;

        getIterator(): IIterator;

        getLength(): number;

        getPixelBounds(): number[][] | null;

        indexOf(geoObject: IGeoObject): number;
    }

    interface IHintManager<T> extends IPopupManager<T> {
    }

    interface IIterator {
        getNext(): object | null;
    }

    interface ILayer extends IChildOnMap, ICustomizable, IEventEmitter {
        getBrightness?(): number;

        getCopyrights?(coords: number[], zoom: number): Promise<Array<string | HTMLElement>>;

        getZoomRange?(point: number[]): Promise<number[]>;
    }

    interface ILayout extends IDomEventEmitter {
        // new (data: object);
        destroy(): void;

        getData(): object;

        getParentElement(): HTMLElement;

        getShape(): IShape | null;

        isEmpty(): boolean;

        setData(data: object): void;

        setParentElement(parent: HTMLElement | null): void;
    }

    interface ILinearRingGeometryAccess extends IFreezable {
        contain(position: number): boolean;

        freeze(): IFreezable;

        get(index: number): number[];

        getChildGeometry(index: number): IPointGeometryAccess;

        getClosest(anchorPosition: number[]): object;

        getCoordinates(): number[][];

        getFillRule(): string;

        getLength(): number;

        insert(index: number, coordinates: number[]): ILinearRingGeometryAccess;

        isFrozen(): boolean;

        remove(index: number): number[];

        set(index: number, coordinates: number[]): ILinearRingGeometryAccess;

        setCoordinates(coordinates: number[][]): ILinearRingGeometryAccess;

        setFillRule(fillRule: string): ILinearRingGeometryAccess;

        splice(index: number, number: number): number[][];

        unfreeze(): IFreezable;
    }

    interface ILineStringGeometry extends IGeometry, ILineStringGeometryAccess {
    }

    interface ILineStringGeometryAccess extends IFreezable {
        get(index: number): number[];

        getChildGeometry(index: number): IPointGeometryAccess;

        getClosest(anchorPosition: number[]): object;

        getCoordinates(): number[][];

        getLength(): number;

        insert(index: number, coordinates: number[][]): ILineStringGeometryAccess;

        remove(index: number): number[];

        set(index: number, coordinates: number[]): ILineStringGeometryAccess;

        setCoordinates(coordinates: number[][]): ILineStringGeometryAccess;

        splice(index: number, length: number): number[][];
    }

    interface IMapAction extends IEventEmitter {
        begin(mapActionManager: map.action.Manager): void;

        end(): void;
    }

    interface IMapObjectCollection extends ICollection, ICustomizable, IParentOnMap {
    }

    interface IMultiRouteModelJson {
        params: IMultiRouteParams;
        referencePoints: IMultiRouteReferencePoint[];
    }

    interface IMultiRouteParams {
        avoidTrafficJams?: boolean | undefined;
        boundedBy?: number[][] | null | undefined;
        requestSendInterval?: string | number | undefined;
        results?: number | undefined;
        reverseGeocoding?: boolean | undefined;
        routingMode?: "auto" | "masstransit" | "pedestrian" | undefined;
        searchCoordOrder?: string | undefined;
        strictBounds?: boolean | undefined;
        viaIndexes?: number[] | undefined;
    }

    type IMultiRouteReferencePoint = string | number[] | geometry.Point;

    interface IOptionManager extends IChild<IOptionManager>, IEventEmitter, IFreezable {
        get(key: string, defaultValue: object): object;

        getAll(): object;

        getName(): string;

        getNative(key: string): object;

        resolve(key: string, name?: string): object;

        setName(name: string): void;
    }

    interface IOverlay extends ICustomizable, IDomEventEmitter {
        getData(): object;

        getGeometry(): IPixelGeometry;

        getMap(): Map | null;

        getShape(): IShape | null;

        isEmpty(): boolean;

        setData(data: object): void;

        setGeometry(geometry: IPixelGeometry): void;

        setMap(map: Map | null): void;
    }

    interface IPane extends IEventEmitter {
        destroy(): void;

        getElement(): HTMLElement;

        getMap(): Map;

        getOverflow(): "visible" | "hidden";

        getZIndex(): number;
    }

    interface IPanorama {
        getAngularBBox(): number[];

        getConnectionArrows(): IPanoramaConnectionArrow[];

        getConnectionMarkers(): IPanoramaConnectionMarker[];

        getCoordSystem(): ICoordSystem;

        getDefaultDirection(): number[];

        getDefaultSpan(): number[];

        getGraph(): IPanoramaGraph | null;

        getMarkers(): IPanoramaMarker[];

        getName(): string;

        getPosition(): number[];

        getTileLevels(): IPanoramaTileLevel[];

        getTileSize(): number[];
    }

    interface IPanoramaConnection {
        getConnectedPanorama(): Promise<IPanorama>;
    }

    interface IPanoramaConnectionArrow extends IPanoramaConnection {
        properties: data.Manager;

        getDirection(): number[];

        getPanorama(): IPanorama;
    }

    interface IPanoramaConnectionMarker extends IPanoramaConnection, IPanoramaMarker {
    }

    interface IPanoramaGraph {
        getEdges(): IPanoramaGraphEdge[];

        getNodes(): IPanoramaGraphEdge[];

        getPanorama(): IPanorama;
    }

    interface IPanoramaGraphEdge {
        getEndNodes(): IPanoramaGraphNode[];
    }

    interface IPanoramaGraphNode {
        getConnectedPanorama(): Promise<IPanorama>;
    }

    interface IPanoramaMarker {
        properties: data.Manager;

        getIconSet(): Promise<IPanoramaMarkerIconSet>;

        getPanorama(): IPanorama;

        getPosition(): number[];
    }

    interface IPanoramaMarkerIcon {
        image: HTMLCanvasElement | HTMLImageElement;
        offset: number[];
    }

    interface IPanoramaMarkerIconSet {
        default: IPanoramaMarkerIcon | null;
        expanded: IPanoramaMarkerIcon | null;
        expandedHovered: IPanoramaMarkerIcon | null;
        hovered: IPanoramaMarkerIcon | null;
    }

    interface IPanoramaTileLevel {
        getImageSize(): number[];

        getTileUrl(x: number, y: number): string;
    }

    interface IParentOnMap {
        getMap(): Map;
    }

    interface IPixelCircleGeometry extends IPixelGeometry {
        getCoordinates(): number[];

        getRadius(): number;
    }

    interface IPixelLineStringGeometry extends IPixelGeometry {
        getClosest(anchorPosition: number[]): object;

        getCoordinates(): number[][];

        getLength(): number;
    }

    interface IPixelPointGeometry extends IPixelGeometry {
        getCoordinates(): number[];
    }

    interface IPixelMultiLineGeometry extends IPixelGeometry {
        getClosest(anchorPosition: number[]): object;

        getCoordinates(): number[][][];

        getLength(): number;
    }

    interface IPixelMultiPolygonGeometry extends IPixelGeometry {
        contains(position: number[]): boolean;

        getClosest(anchorPosition: number[]): object;

        getCoordinates(): number[][][][];

        getFillRule(): "evenOdd" | "nonZero";

        getLength(): number;
    }

    interface IPixelPolygonGeometry extends IPixelGeometry {
        contains(position: number[]): boolean;

        getClosest(anchorPosition: number[]): object;

        getCoordinates(): number[][][];

        getFillRule(): "evenOdd" | "nonZero";

        getLength(): number;
    }

    interface IPixelRectangleGeometry extends IPixelGeometry {
        getClosest(anchorPosition: number[]): object;

        getCoordinates(): number[][];
    }

    interface IPixelGeometry extends IBaseGeometry {
        equals(geometry: IPixelGeometry): boolean;

        getMetaData(): object;

        scale(factor: number): IPixelGeometry;

        shift(offset: number[]): IPixelGeometry;
    }

    interface IPointGeometry extends IGeometry, IPointGeometryAccess {
    }

    interface IPointGeometryAccess {
        getCoordinates(): number[] | null;

        setCoordinates(coordinates: number[] | null): this;
    }

    interface IPolygonGeometry extends IGeometry, IPolygonGeometryAccess {
    }

    interface IPolygonGeometryAccess extends IFreezable {
        contains(position: number[]): boolean;

        get(index: number): number[][];

        getChildGeometry(index: number): ILinearRingGeometryAccess;

        getClosest(anchorPosition: number[]): object;

        getCoordinates(): number[][][];

        getFillRule(): string;

        getLength(): number;

        insert(index: number, path: number[][]): IPolygonGeometryAccess;

        remove(index: number): ILinearRingGeometryAccess;

        set(index: number, path: number[][]): IPolygonGeometryAccess;

        setCoordinates(coordinates: number[][][]): IPolygonGeometryAccess;

        setFillRule(fillRule: string): IPolygonGeometryAccess;

        splice(index: number, number: number): ILinearRingGeometryAccess[];
    }

    interface IPopup<T> extends ICustomizable, IEventEmitter {
        close(force?: boolean): Promise<T>;

        getData(): object;

        getOverlay(): Promise<IOverlay>;

        getOverlaySync(): IOverlay;

        getPosition(): number[];

        isOpen(): boolean;

        open(position: number[], data: object | string | HTMLElement): Promise<T>;

        setData(data: object | string | HTMLElement): Promise<T>;

        setPosition(position: number[]): Promise<T>;
    }

    interface IPopupManager<T> extends IEventEmitter {
        close(force?: boolean): Promise<T>;

        destroy(): void;

        getData(): object | null;

        getOptions(): IOptionManager | null;

        getOverlay(): Promise<IOverlay | null>;

        getOverlaySync(): IOverlay | null;

        getPosition(): number[] | null;

        isOpen(): boolean;

        open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<T>;

        setData(data: object | string | HTMLElement): Promise<T>;

        setOptions(options: object): Promise<T>;

        setPosition(position: number[]): Promise<T>;
    }

    interface IPositioningContext {
        fromClientPixels(clientPixelPoint: number[]): number[];

        getZoom(): number;

        toClientPixels(globalPixelPoint: number[]): number[];
    }

    interface IProjection {
        fromGlobalPixels(globalPixelPoint: number[], zoom: number): number[];

        getCoordSystem(): ICoordSystem;

        isCycled(): boolean[];

        toGlobalPixels(coordPoint: number[], zoom: number): number[];
    }

    interface IRoutePanel {
        options: IOptionManager;
        state: IDataManager;

        getRoute(): multiRouter.MultiRoute;
        getRouteAsync(): Promise<multiRouter.MultiRoute>;

        switchPoints(): void;
    }

    interface ISearchControlLayout extends IExpandableControlLayout { // tslint:disable-line no-empty-interface
    }

    interface ISelectableControl extends IControl {
        deselect(): void;

        disable(): void;

        enable(): void;

        isEnabled(): boolean;

        isSelected(): boolean;

        select(): void;
    }

    interface ISelectableControlLayout extends ILayout { // tslint:disable-line no-empty-interface
    }

    interface IShape {
        contains(position: number[]): boolean;

        equals(shape: IShape): boolean;

        getBounds(): number[][] | null;

        getGeometry(): IPixelGeometry;

        getType(): string;

        scale(factor: number): IShape;

        shift(offset: number[]): IShape;
    }

    class Monitor {
        constructor(dataManager: IDataManager | IOptionManager);
        add(
            name: string[] | string,
            changeCallback: (event: object | IEvent) => void,
            context?: any,
            params?: any,
        ): Monitor;
        forceChange(): Monitor;
        get(name: string): any;
        remove(name: string): Monitor;
        removeAll(): Monitor;
    }

    interface IObjectManagerOptions extends IClustererOptionsInject, IClusterPlacemarkOptionsWithClusterPrefix {
        clusterize?: boolean | undefined;
        syncOverlayInit?: boolean | undefined;
        viewportMargin?: number[] | number | undefined;

        geoObjectOpenBalloonOnClick?: boolean | undefined;
    }

    class ObjectManager implements ICustomizable, IEventEmitter, IGeoObject, IParentOnMap {
        constructor(options: IObjectManagerOptions);

        clusters: objectManager.ClusterCollection;

        events: IEventManager;

        geometry: IGeometry | null;

        objects: objectManager.ObjectCollection;

        options: IOptionManager;

        properties: IDataManager;

        state: IDataManager;

        add(objects: object | object[] | string): this;

        getBounds(): number[][] | null;

        getFilter(): string | ((object: object | string) => boolean) | null;

        getMap(): Map;

        getObjectState(
            id: string,
        ): {
            found: boolean;
            isShown: boolean;
            cluster?: Cluster | undefined;
            isClustered: boolean;
            isFilteredOut: boolean;
        };

        getOverlay(): Promise<IOverlay | null>;

        getOverlaySync(): IOverlay | null;

        getParent(): IParentOnMap | null;

        getPixelBounds(): number[][] | null;

        remove(objects: object | object[] | string): this;

        removeAll(): this;

        setFilter(filer: (object: object | string) => boolean): void;

        setParent(parent: IParentOnMap | null): this;
    }

    namespace objectManager {
        class Balloon implements Omit<IBalloonManager<map.Balloon>, "open"> {
            events: IEventManager;

            autoPan(): Promise<ymaps.Balloon>;

            close(force?: boolean): Promise<ymaps.Balloon>;

            destroy(): void;

            getData(): object | null;

            getOptions(): IOptionManager | null;

            getOverlay(): Promise<IOverlay | null>;

            getOverlaySync(): IOverlay | null;

            getPosition(): number[] | null;

            isOpen(): boolean;

            open(objectId: object | string, anchorPixelPosition?: boolean): Promise<ymaps.Balloon>;

            setData(data: object | string | HTMLElement): Promise<ymaps.Balloon>;

            setOptions(options: object): Promise<ymaps.Balloon>;

            setPosition(position: number[]): Promise<ymaps.Balloon>;
        }

        class ClusterCollection implements ICustomizable, IEventEmitter {
            balloon: Balloon;

            events: IEventManager;

            hint: Hint;

            options: option.Manager;

            state: data.Manager;

            getAll(): object[];

            getById(id: string | null | undefined): Cluster | null;

            getIterator(): IIterator;

            getLength(): number;

            getObjectManager(): ObjectManager;

            setClusterOptions(objectId: string, options: object): ObjectCollection;
        }

        class Hint implements Omit<IHintManager<map.Hint>, "open"> {
            events: IEventManager;

            close(force?: boolean): Promise<map.Hint>;

            destroy(): void;

            getData(): object | null;

            getOptions(): IOptionManager | null;

            getOverlay(): Promise<IOverlay | null>;

            getOverlaySync(): IOverlay | null;

            getPosition(): number[] | null;

            isOpen(): boolean;

            open(objectId: object | string, position?: number[]): Promise<map.Hint>;

            setData(data: object | string | HTMLElement): Promise<map.Hint>;

            setOptions(options: object): Promise<map.Hint>;

            setPosition(position: number[]): Promise<map.Hint>;
        }

        class ObjectCollection implements ICollection, ICustomizable {
            options: option.Manager;

            events: IEventManager;

            add(object: object): this;

            each(callback: (object: object) => void, context?: object): void;

            getById(id: string | null | undefined): object | null;

            getIterator(): IIterator;

            remove(object: object): this;

            setObjectOptions(objectId: string, options: object): ObjectCollection;
        }
    }

    namespace modules {
        type ResolveCallbackFunction = (provide: (module: any, error?: any) => void, ...depends: any[]) => void;

        function define(
            module: string,
            depends?: string[],
            resolveCallback?: ResolveCallbackFunction,
            context?: object,
        ): typeof modules;
        function define(module: string, resolveCallback?: ResolveCallbackFunction, context?: object): typeof modules;

        function require(modules: string | string[]): vow.Promise;

        function isDefined(module: string): boolean;
    }

    class Hotspot implements IHotspot {
        constructor(shape: IShape, zIndex?: number);

        events: IEventManager;
    }

    interface IHotspot extends IDomEventEmitter {
        events: IEventManager;
    }
}

export = ymaps;
export as namespace ymaps;
