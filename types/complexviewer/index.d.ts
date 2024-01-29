import { ScaleOrdinal } from "d3-scale";

export as namespace complexviewer;

export const App: AppConstructor;

export interface App {
    features: Map<string, Feature>;
    interactors: Map<string, Interactor>;
    participants: Map<string, Participant>;
    complexes: Complex[];
    featureColors: ScaleOrdinal<string, string>;
    uncertainCategories: Set<string>;
    certainCategories: Set<string>;
    annotationSetsShown: Map<string, boolean>;
    defs: HTMLElement;
    tooltip: SVGElement;
    tooltip_bg: SVGElement;
    tooltip_subBg: SVGElement;
    hoverListeners: HoverListener[];
    expandListeners: ExpandListener[];
    STATES: {
        MOUSE_UP: 0;
        SELECT_PAN: 1;
        DRAGGING: 2;
    };
    barScales: number[];

    clear(): void;

    collapseProtein(): void;

    init(): void;

    zoomToExtent(): void;

    autoLayout(): void;

    getSVG(): string;

    readMIJSON(miJson: MIJson, expand: boolean): void;

    checkLinks(): void;

    setAllLinkCoordinates(): void;

    showTooltip(p: Point): void;

    setTooltip(text: any, color?: string): void;

    hideTooltip(): void;

    /**
     * @deprecated Use {@link showAnnotations} instead
     * @param annoChoice
     */
    setAnnotations(annoChoice: string): ColorKey;

    showAnnotations(annoChoice: string, show: boolean): ColorKey;

    updateAnnotations(): void;

    getColorKeyJson(): ColorKey;

    /**
     * Triggers {@link ExpandListener}
     */
    collapseAll(): void;

    /**
     * Triggers {@link ExpandListener}
     */
    expandAll(): void;

    /**
     * Triggers {@link ExpandListener}
     * @param moleculeSelected
     */
    expandAndCollapseSelection(moleculeSelected: string[]): void;

    addHoverListener(hoverListener: HoverListener): void;

    removeHoverListener(hoverListener: HoverListener): void;

    notifyHoverListener(): void;

    addExpandListener(expandListener: ExpandListener): void;

    removeExpandListener(expandListener: ExpandListener): void;

    notifyExpandListener(): void;

    getExpandedParticipants(): any[];

    downloadSVG(fileName: string): void;
}

export interface AppConstructor {
    new(networkDiv: HTMLElement, maxCountInitiallyExpanded?: number): App;

    readonly prototype: App;
}

export interface Point {
    x: number;
    Y: number;
}

export interface ColorKey {
    Complex: FeatureType[];

    [annotationSet: string]: FeatureType[];
}

export interface FeatureType {
    name: string;
    certain?: Color;
    uncertain?: Color;
}

export interface Color {
    color: string;
}

export type ExpandListener = (expandedParticipants: Participant[]) => void;
export type HoverListener = (interactorArr: Interactor[]) => void;

export interface Complex {
    id: string;

    initLink(naryLink: NAryLink): void;
}

export interface NAryLink {
    complex: Complex;
}

export interface Feature {
    id: string;
    name?: string;
    category?: string;
    type: Type;
    sequenceData: SequenceData[];
    linkedFeatures: string[];
    detmethod?: Detmethod;
}

export interface Annotation {
    description?: string;
    certain?: SVGElement;
    fuzzyStart?: SVGElement;
    fuzzyEnd?: SVGElement;
}

export interface IdentifiedProperty {
    id: string;
    name: string;
}

export type Type = IdentifiedProperty;
export type Detmethod = IdentifiedProperty;
export type SourceDatabase = IdentifiedProperty;
export type BioRole = IdentifiedProperty;
export type ExpRole = IdentifiedProperty;
export type IdentificationMethod = IdentifiedProperty;
export type InteractionType = IdentifiedProperty;

export interface Organism {
    taxid: string;
    common: string;
    scientific: string;
}

export interface Identifier {
    db: string;
    id: string;
}

export interface Host {
    taxid: string;
    common: string;
    scientific: string;
}

export interface Experiment {
    detmethod: Detmethod;
    host: Host;
    pubid: Identifier[];
    sourceDatabase: SourceDatabase;
    figures: string[];
}

export interface SequenceData {
    pos: string;
    interactorRef: string;
    participantRef: string;
}

export interface ParticipantData {
    id: string;
    interactorRef: string;
    bioRole: BioRole;
    expRole: ExpRole;
    identificationMethods: IdentificationMethod[];
    features: Feature[];
}

export interface Participant {
    object: "interactor" | "interaction";
    interactorRef: string;
    id: string;
    sequence: string;
    type: Type;
    organism: Organism;
    identifier: Identifier;
    label: string;
    interactionType: InteractionType;
    experiment: Experiment;
    identifiers: Identifier[];
    participants?: Participant[];
    annotationSets?: Map<string, Set<Annotation>>;
    json: ParticipantData;
}

export interface Interactor extends Participant {
    object: "interactor";
}

export interface MIJson {
    data: Participant[];
}
