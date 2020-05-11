// Type definitions for bpmn-moddle 5.1
// Project: https://github.com/bpmn-io/bpmn-moddle
// Definitions by: Hayden <https://github.com/haydos89>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace BPMNModdle {
    type AdHocOrdering = "Parallel" | "Sequential";
    type AssociationDirection = "None" | "One" | "Both";
    type ChoreographyLoopType =
        | "None"
        | "Standard"
        | "MultiInstanceSequential"
        | "MultiInstanceParallel";
    type EventBasedGatewayType = "Parallel" | "Exclusive";
    type GatewayDirection =
        | "Unspecified"
        | "Converging"
        | "Diverging"
        | "Mixed";
    type ItemKind = "Physical" | "Information";
    type MultiInstanceBehaviour = "None" | "One" | "All" | "Complex";
    type ProcessType = "None" | "Public" | "Private";
    type RelationshipDirection = "None" | "Forward" | "Backward" | "Both";

    interface TypeDerived {
        $type: ElementType;
        $parent: TypeDerived;
    }
    interface BaseElement extends TypeDerived {
        /**
         * Is the primary Id of the element
         */
        id: string;

        /**
         * Documentation for the element
         */
        documentation?: Documentation[];

        /**
         * Reference to the extension definitions for this element
         */
        extensionDefinitions?: ExtensionDefinition[];

        /**
         * Extension Elements
         */
        extensionElements?: ExtensionElements;

        /**
         * Attributes that aren't defined by the BPMN Spec such
         * as Camunda properties
         */
        $attrs?: {
            [key: string]: any;
        };
    }

    // tslint:disable-next-line:no-empty-interface
    interface RootElement extends BaseElement {}
    interface Interface extends RootElement {
        name: string;
        operations: Operation[];
        implementationRef: string;
    }

    interface Operation extends BaseElement {
        name: string;
        inMessageRef: Message;
        outMessageRef: Message;
        errorRef: ErrorElement;
        implementationRef: string;
    }

    // tslint:disable-next-line:no-empty-interface
    interface EndPoint extends RootElement {}
    // tslint:disable-next-line:no-empty-interface
    interface Auditing extends BaseElement {}
    interface CallableElement extends RootElement {
        name: string;
        ioSpecification: InputOutputSpecification;
        supportedInterfaceRef: Interface;
        ioBinding: InputOutputBinding;
    }
    interface ResourceRole extends BaseElement {
        name: string;
        resourceRef: Resource;
        ResourceParameterBindings: ResourceParameterBinding[];
        resourceAssignmentExpression: ResourceAssignmentExpression;
    }
    interface GlobalTask extends CallableElement {
        resources: ResourceRole;
    }
    // tslint:disable-next-line:no-empty-interface
    interface Monitoring extends BaseElement {}

    // tslint:disable-next-line:no-empty-interface
   interface Performer extends ResourceRole {}
    interface Process extends FlowElementsContainer, CallableElement {
        processType: string;
        isClosed: boolean;
        auditing: Auditing;
        monitoring: Monitoring;
        properties: Property[];
        laneSets: LaneSet[];
        flowElements: FlowElement[];
        artifacts: Artifact[];
        resources: ResourceRole[];
        correlationSubscriptions: CorrelationSubscription[];
        supports: Process[];
        definitionalCollaborationRef: Collaboration;
        isExecutable: boolean;
    }
    interface LaneSet extends BaseElement {
        lanes: Lane[];
        name: string;
    }
    interface Lane extends BaseElement {
        name: string;
        partitionElementRef: BaseElement;
        partitionElement: BaseElement;
        flowNodeRef: FlowNode[];
        childLaneSet: LaneSet;
    }
    // tslint:disable-next-line:no-empty-interface
    interface GlobalManualTask extends GlobalTask {}
    // tslint:disable-next-line:no-empty-interface
    interface ManualTask extends Task {}
    interface UserTask extends Task {
        renderings: Rendering[];
        implementation: string;
    }
    // tslint:disable-next-line:no-empty-interface
    interface Rendering extends BaseElement {}
    // tslint:disable-next-line:no-empty-interface
    interface HumanPerformer extends Performer {}
    // tslint:disable-next-line:no-empty-interface
    interface PotentialOwner extends Performer {}
    interface GlobalUserTask extends GlobalTask {
        implementation: string;
        renderings: Rendering;
    }
    interface Gateway extends FlowNode {
        /**
         * @default Unspecified
         */
        gatewayDirection: GatewayDirection;
    }
    interface EventBasedGateway extends Gateway {
        instantiate: boolean;
        /**
         * @default Exclusive
         */
        eventGatewayType: EventBasedGatewayType;
    }
    interface ComplexGateway extends Gateway {
        activationCondition: Expression;
        default: SequenceFlow;
    }
    interface ExclusiveGateway extends Gateway {
        default: SequenceFlow;
    }
    interface InclusiveGateway extends Gateway {
        default: SequenceFlow;
    }
    // tslint:disable-next-line:no-empty-interface
    interface ParallelGateway extends Gateway {}
    interface Relationship extends BaseElement {
        type: string;
        direction: RelationshipDirection;
        source: BaseElement[];
        target: BaseElement[];
    }
    interface Extension extends TypeDerived {
        /**
         * @default false
         */
        mustUnderstand: boolean;
        definition: ExtensionDefinition;
    }
    interface ExtensionDefinition extends TypeDerived {
        name: string;
        extensionAttributeDefinitions: ExtensionAttributeDefinition[];
    }
    interface ExtensionAttributeDefinition extends TypeDerived {
        name: string;
        type: string;
        /**
         * @default false
         */
        isReference: boolean;
    }
    interface ExtensionElements extends TypeDerived {
        valueRef: BaseElement;
        values: BaseElement[];
        extensionAttributeDefinition: ExtensionAttributeDefinition;
        [key: string]: any;
    }
    interface Documentation extends BaseElement {
        text: string;
        /**
         * @default "text/plain"
         */
        textFormat: string;
    }
    interface Event extends FlowNode, InteractionNode {
        properties: Property[];
    }
    // tslint:disable-next-line:no-empty-interface
    interface IntermediateCatchEvent extends CatchEvent {}
    // tslint:disable-next-line:no-empty-interface
    interface IntermediateThrowEvent extends ThrowEvent {}
    // tslint:disable-next-line:no-empty-interface
    interface EndEvent extends ThrowEvent {}
    interface StartEvent extends CatchEvent {
        /**
         * @default true
         */
        isInterrupting: boolean;
    }
    interface ThrowEvent extends Event {
        dataInputs: DataInput[];
        dataInputAssociations: DataInputAssociation[];
        inputSet: InputSet;
        eventDefinitions: EventDefinition[];
        eventDefinitionRef: EventDefinition[];
    }
    interface CatchEvent extends Event {
        /**
         * @default false
         */
        parallelMultiple: boolean;
        dataOutputs: DataOutput[];
        dataOutputAssociations: DataOutputAssociation[];
        outputSet: OutputSet;
        eventDefinitions: EventDefinition[];
    }
    interface BoundaryEvent extends CatchEvent {
        /**
         * @default true
         */
        cancelActivity: boolean;
        attachedToRef: Activity;
    }

    // tslint:disable-next-line:no-empty-interface
    interface EventDefinition extends RootElement {}
    // tslint:disable-next-line:no-empty-interface
    interface CancelEventDefinition extends EventDefinition {}
    interface ErrorEventDefinition extends EventDefinition {
        errorRef: ErrorElement;
    }
    // tslint:disable-next-line:no-empty-interface
    interface TerminateEventDefinition extends EventDefinition {}
    interface EscalationEventDefinition extends EventDefinition {
        escalationRef: Escalation;
    }
    interface Escalation extends RootElement {
        structureRef: ItemDefinition;
        name: string;
        escalationCode: string;
    }
    interface CompensateEventDefinition extends EventDefinition {
        waitForCompletion: boolean;
        activityRef: Activity;
    }
    interface TimerEventDefinition extends EventDefinition {
        timeDate: Expression;
        timeCycle: Expression;
        timeDuration: Expression;
    }
    interface LinkEventDefinition extends EventDefinition {
        name: string;
        target: LinkEventDefinition;
        source: LinkEventDefinition;
    }
    interface MessageEventDefinition extends EventDefinition {
        messageRef: Message;
        operationRef: Operation;
    }
    interface ConditionalEventDefinition extends EventDefinition {
        condition: Expression;
    }
    interface SignalEventDefinition extends EventDefinition {
        signalRef: Signal;
    }
    interface Signal extends RootElement {
        structureRef: ItemDefinition;
        name: string;
    }
    // tslint:disable-next-line:no-empty-interface
    interface ImplicitThrowEvent extends ThrowEvent {}
    interface DataState extends BaseElement {
        name: string;
    }
    interface ItemAwareElement extends BaseElement {
        itemSubjectRef: ItemDefinition;
        dataState: DataState;
    }
    interface DataAssociation extends BaseElement {
        assignment: Assignment;
        sourceRef: ItemAwareElement;
        targetRef: ItemAwareElement;
        transformation: FormalExpression;
    }
    interface DataInput extends ItemAwareElement {
        name: string;
        /** @default false */
        isCollection: boolean;
        inputSetRef: InputSet;
        inputSetWithOptional: InputSet;
        inputSetWithWhileExecuting: InputSet;
    }
    interface DataOutput extends ItemAwareElement {
        name: string;
        /**
         * @default false
         */
        isCollection: boolean;
        outputSetRef: InputSet[];
        outputSetWithOptional: InputSet[];
        outputSetWithWhileExecuting: InputSet[];
    }
    interface InputSet extends BaseElement {
        name: string;
        dataInputRefs: DataInput[];
        optionalInputRefs: DataInput[];
        whileExecutingInputsRefs: DataInput[];
        outputSetRefs: OutputSet[];
    }
    interface OutputSet extends BaseElement {
        dataOutputRefs: DataOutput[];
        name: string;
        inputSetRefs: InputSet[];
        optionalOutputRefs: DataOutput[];
        whileExecutingOutputREfs: DataOutput[];
    }
    interface Property extends ItemAwareElement {
        name: string;
    }
    // tslint:disable-next-line:no-empty-interface
    interface DataInputAssociation extends DataAssociation {}
    // tslint:disable-next-line:no-empty-interface
    interface DataOutputAssociation extends DataAssociation {}
    interface InputOutputSpecification extends BaseElement {
        dataInputs: DataInput[];
        dataOutputs: DataOutput[];
        inputSets: InputSet[];
        outputSets: OutputSet[];
    }
    interface DataObject extends FlowElement, ItemAwareElement {
        /** @default false */
        isCollection: boolean;
    }
    interface InputOutputBinding extends TypeDerived {
        inputDataRef: InputSet;
        outputDataRef: OutputSet;
        operationRef: Operation;
    }
    interface Assignment extends BaseElement {
        from: Expression;
        to: Expression;
    }
    interface DataStore extends RootElement, ItemAwareElement {
        name: string;
        capacity: number;
        isUnlimited: boolean;
    }
    interface DataStoreReference extends FlowElement, ItemAwareElement {
        dataStoreRef: DataStore;
    }
    interface DataObjectReference extends ItemAwareElement, FlowElement {
        dataObjectRef: DataObject;
    }
    interface ConversationLink extends BaseElement {
        sourceRef: InteractionNode;
        targetRef: InteractionNode;
        name: string;
    }

    interface ConversationAssociation extends ConversationNode {
        innerConversationNodeRef: ConversationNode;
        outerConversationNodeRef: ConversationNode;
    }
    interface CallConversation extends ConversationNode {
        calledCollaborationRef: Collaboration;
        participantAssociations: ParticipantAssociation[];
    }
    // tslint:disable-next-line:no-empty-interface
    interface Conversation extends ConversationNode {}
    interface SubConversation extends ConversationNode {
        conversationNodes: ConversationNode[];
    }
    interface ConversationNode extends InteractionNode, BaseElement {
        name: string;
        participantRefs: Participant[];
        messageFlowRefs: MessageFlow[];
        correlationKeys: CorrelationKey[];
    }
    // tslint:disable-next-line:no-empty-interface
    interface GlobalConversation extends Collaboration {}
    interface PartnerEntity extends RootElement {
        name: string;
        participantRef: Participant[];
    }
    interface PartnerRole extends RootElement {
        name: string;
        participantRef: Participant[];
    }

    interface CorrelationProperty extends RootElement {
        correlationPropertyRetrievalExpression: CorrelationPropertyRetrievalExpression;
        name: string;
        type: ItemDefinition;
    }
    interface ErrorElement extends RootElement {
        structureRef: ItemDefinition;
        name: string;
        errorCode: string;
    }
    interface CorrelationKey extends BaseElement {
        correlationPropertyRef: CorrelationProperty;
        name: string;
    }
    interface Expression extends BaseElement {
        body: string;
    }
    interface FormalExpression extends Expression {
        language: string;
        evaluatesToTypeRef: ItemDefinition;
    }
    interface Message extends RootElement {
        name: string;
        itemRef: ItemDefinition;
    }
    interface ItemDefinition extends RootElement {
        itemKind: ItemKind;
        structureRef: string;
        /** @default false */
        isCollection: boolean;
        import: Import;
    }
    interface FlowElement extends RootElement {
        name?: string;
        auditing: Auditing;
        monitoring: Monitoring;
        categoryValueRef: CategoryValue[];
    }
    interface SequenceFlow extends FlowElement {
        isImmediate: boolean;
        conditionExpression: Expression;
        sourceRef: FlowNode;
        targetRef: FlowNode;
    }
    interface FlowElementsContainer extends BaseElement {
        laneSets: LaneSet[];
        flowElements: FlowElement[];
    }
    interface FlowNode extends FlowElement {
        incoming: SequenceFlow[];
        outgoing: SequenceFlow[];
        lanes: Lane[];
    }
    interface CorrelationPropertyRetrievalExpression extends BaseElement {
        messagePath: FormalExpression;
        messageRef: Message;
    }
    interface CorrelationPropertyBinding extends BaseElement {
        dataPath: FormalExpression;
        correlationPropertyRef: CorrelationProperty;
    }
    interface Resource extends RootElement {
        name: string;
        resourceParameters: ResourceParameter[];
    }
    interface ResourceParameter extends BaseElement {
        name: string;
        isRequired: boolean;
        type: ItemDefinition;
    }
    interface CorrelationSubscription extends BaseElement {
        correlationKeyRef: CorrelationKey;
        correlationPropertyBinding: CorrelationKey[];
    }
    interface MessageFlow extends BaseElement {
        name: string;
        sourceRef: InteractionNode;
        targetRef: InteractionNode;
        messageRef: Message;
    }
    interface MessageFlowAssociation extends BaseElement {
        innerMessageFlowRef: MessageFlow;
        outerMessageFlowRef: MessageFlow;
    }
    interface InteractionNode extends TypeDerived {
        incomingConversationLinks: ConversationLink[];
        outgoingConversationLinks: ConversationLink[];
    }
    interface Participant extends InteractionNode, BaseElement {
        name: string;
        interfaceRef: Interface[];
        participantMultiplicity: ParticipantMultiplicity;
        endPointRefs: EndPoint[];
        processRef: Process;
    }
    interface ParticipantAssociation extends BaseElement {
        innerParticipantRef: Participant;
        outerParticipantRef: Participant;
    }
    interface ParticipantMultiplicity extends BaseElement {
        minimum: number;
        maximum: number;
    }
    interface Collaboration extends RootElement {
        name: string;
        isClosed: boolean;
        participants: Participant[];
        messageFlows: MessageFlow[];
        artifacts: Artifact[];
        conversations: ConversationNode[];
        conversationAssociations: ConversationAssociation[];
        participantAssociations: ParticipantAssociation[];
        messageFlowAssociations: MessageFlowAssociation[];
        correlationKeys: CorrelationKey[];
        choreographyRef: Choreography[];
        conversationLinks: ConversationLink[];
    }
    interface ChoreographyActivity extends FlowNode {
        participantRef: Participant[];
        initiatingParticipantRef: Participant;
        correlationKeys: CorrelationKey[];
        loopType: ChoreographyLoopType;
    }
    interface CallChoreography extends ChoreographyActivity {
        calledChoreographyRef: Choreography;
        participantAssociations: ParticipantAssociation[];
    }
    interface SubChoreography
        extends ChoreographyActivity,
            FlowElementsContainer {
        artifacts: Artifact[];
    }
    interface ChoreographyTask extends ChoreographyActivity {
        messageFlowRef: MessageFlow[];
    }
    // tslint:disable-next-line:no-empty-interface
    interface Choreography extends FlowElementsContainer, Collaboration {}
    interface GlobalChoreographyTask extends Choreography {
        initiatingParticipantRef: Participant;
    }
    interface TextAnnotation extends Artifact {
        text: string;
        textFormat: string;
    }
    interface Group extends Artifact {
        categoryValueRef: CategoryValue;
    }
    interface Association extends Artifact {
        associationDirection: AssociationDirection;
        sourceRef: BaseElement;
        targetRef: BaseElement;
    }
    interface Category extends RootElement {
        categoryValue: CategoryValue;
        name: string;
    }
    // tslint:disable-next-line:no-empty-interface
    interface Artifact extends BaseElement {}
    interface CategoryValue extends BaseElement {
        categorizedFlowElements: FlowElement[];
        value: string;
    }
    interface Activity extends FlowNode {
        isForCompensation: boolean;
        default: SequenceFlow;
        ioSpecification: InputOutputSpecification;
        boundaryEventRefs: BoundaryEvent[];
        properties: Property[];
        dataInputAssociations: DataInputAssociation[];
        dataOutputAssociations: DataOutputAssociation[];
        startQuantity: number;
        resources: ResourceRole;
        completionQuantity: number;
        loopCharacteristics: LoopCharacteristics;
    }
    interface ServiceTask extends Task {
        implementation: string;
        operationRef: Operation;
    }
    interface SubProcess
        extends Activity,
            FlowElementsContainer,
            InteractionNode {
        triggeredByEvent: boolean;
        artifacts: Artifact[];
    }
    // tslint:disable-next-line:no-empty-interface
    interface LoopCharacteristics extends BaseElement {}
    interface MultiInstanceLoopCharacteristics extends LoopCharacteristics {
        isSequential: boolean;
        behavior: MultiInstanceBehaviour;
        loopCardinality: Expression;
        loopDataInputRef: ItemAwareElement;
        loopDataOutputRef: ItemAwareElement;
        inputDataItem: DataInput;
        outputDataItem: DataOutput;
        complexBehaviorDefinition: ComplexBehaviorDefinition;
        completionCondition: Expression;
        oneBehaviorEventRef: EventDefinition;
        noneBehaviorEventRef: EventDefinition;
    }
    interface StandardLoopCharacteristics extends LoopCharacteristics {
        testBefore: boolean;
        loopCondition: Expression;
        loopMaximum: Expression;
    }
    interface CallActivity extends Activity {
        calledElement: string;
    }
    // tslint:disable-next-line:no-empty-interface
    interface Task extends Activity, InteractionNode {}
    interface SendTask extends Task {
        implementation: string;
        operationRef: Operation;
        messageRef: Message;
    }
    interface ReceiveTask extends Task {
        implementation: string;
        instantiate: boolean;
        operationRef: Operation;
        messageRef: Message;
    }
    interface ScriptTask extends Task {
        scriptFormat: string;
        script: string;
    }
    interface BusinessRuleTask extends Task {
        implementation: string;
    }
    interface AdHocSubProcess extends SubProcess {
        completionCondition: Expression;
        ordering: AdHocOrdering;
        cancelRemainingInstances: boolean;
    }
    interface Transaction extends SubProcess {
        protocal: string;
        method: string;
    }
    interface GlobalScriptTask extends GlobalTask {
        scriptLanguage: string;
        script: string;
    }
    interface GlobalBusinessRuleTask extends GlobalTask {
        implementation: string;
    }
    interface ComplexBehaviorDefinition extends BaseElement {
        condition: FormalExpression;
        event: ImplicitThrowEvent;
    }
    interface ResourceParameterBinding extends TypeDerived {
        expression: Expression;
        parameterRef: ResourceParameter;
    }
    interface ResourceAssignmentExpression extends BaseElement {
        expression: Expression;
    }
    interface Import extends TypeDerived {
        importType: string;
        location: string;
        namespace: string;
    }
    interface Definitions extends BaseElement {
        name: string;
        targetNamespace: string;
        expressionLanguage: string;
        typeLanguage: string;
        imports: Import[];
        extensions: Extension[];
        rootElements: RootElement[];
        diagrams: BPMNDiagram;
        er: string;
        relationship: Relationship[];
        erVersion: string;
    }
    interface BPMNDiagram extends Diagram {
        plane: BPMNPlane;
        labelStyle: BPMNLabelStyle;
    }
    // tslint:disable-next-line:no-empty-interface
    interface BPMNPlane extends Plane {}
    // tslint:disable-next-line:no-empty-interface
    interface BPMNShape extends LabeledShape {}
    // tslint:disable-next-line:no-empty-interface
    interface BPMNEdge extends LabeledEdge {}
    // tslint:disable-next-line:no-empty-interface
    interface BPMNLabel extends Label {}
    // tslint:disable-next-line:no-empty-interface
    interface BPMNLabelStyle extends Style {}
    interface Font extends TypeDerived {
        name: string;
        size: number;
        isBold: boolean;
        isItalic: boolean;
        isUnderline: boolean;
        isStrikeThrough: boolean;
    }
    interface Point extends TypeDerived {
        x: number;
        y: number;
        width: number;
        height: number;
    }
    // tslint:disable-next-line:no-empty-interface
    interface Bounds extends TypeDerived {}
    // tslint:disable-next-line:no-empty-interface
    interface DiagramElement extends TypeDerived {}
    // tslint:disable-next-line:no-empty-interface
    interface Node extends TypeDerived {}
    // tslint:disable-next-line:no-empty-interface
    interface Edge extends TypeDerived {}
    // tslint:disable-next-line:no-empty-interface
    interface Diagram extends TypeDerived {}
    // tslint:disable-next-line:no-empty-interface
    interface Shape extends TypeDerived {}
    // tslint:disable-next-line:no-empty-interface
    interface Plane extends TypeDerived {}
    // tslint:disable-next-line:no-empty-interface
    interface LabeledEdge extends TypeDerived {}
    // tslint:disable-next-line:no-empty-interface
    interface LabeledShape extends TypeDerived {}
    // tslint:disable-next-line:no-empty-interface
    interface Label extends TypeDerived {}
    // tslint:disable-next-line:no-empty-interface
    interface Style extends TypeDerived {}
    // tslint:disable-next-line:no-empty-interface
    interface ColoredShape extends TypeDerived {}
    // tslint:disable-next-line:no-empty-interface
    interface ColoredEdge extends TypeDerived {}

    interface ElementTypes {
        "bpmn:Interface": Interface;
        "bpmn:Operation": Operation;
        "bpmn:EndPoint": EndPoint;
        "bpmn:Auditing": Auditing;
        "bpmn:GlobalTask": GlobalTask;
        "bpmn:Monitoring": Monitoring;
        "bpmn:Performer": Performer;
        "bpmn:Process": Process;
        "bpmn:LaneSet": LaneSet;
        "bpmn:Lane": Lane;
        "bpmn:GlobalManualTask": GlobalManualTask;
        "bpmn:ManualTask": ManualTask;
        "bpmn:UserTask": UserTask;
        "bpmn:Rendering": Rendering;
        "bpmn:HumanPerformer": HumanPerformer;
        "bpmn:PotentialOwner": PotentialOwner;
        "bpmn:GlobalUserTask": GlobalUserTask;
        "bpmn:Gateway": Gateway;
        "bpmn:EventBasedGateway": EventBasedGateway;
        "bpmn:ComplexGateway": ComplexGateway;
        "bpmn:ExclusiveGateway": ExclusiveGateway;
        "bpmn:InclusiveGateway": InclusiveGateway;
        "bpmn:ParallelGateway": ParallelGateway;
        "bpmn:RootElement": RootElement;
        "bpmn:Relationship": Relationship;
        "bpmn:BaseElement": BaseElement;
        "bpmn:Extension": Extension;
        "bpmn:ExtensionDefinition": ExtensionDefinition;
        "bpmn:ExtensionAttributeDefinition": ExtensionAttributeDefinition;
        "bpmn:ExtensionElements": ExtensionElements;
        "bpmn:Documentation": Documentation;
        "bpmn:Event": Event;
        "bpmn:IntermediateCatchEvent": IntermediateCatchEvent;
        "bpmn:IntermediateThrowEvent": IntermediateThrowEvent;
        "bpmn:EndEvent": EndEvent;
        "bpmn:StartEvent": StartEvent;
        "bpmn:ThrowEvent": ThrowEvent;
        "bpmn:CatchEvent": CatchEvent;
        "bpmn:BoundaryEvent": BoundaryEvent;
        "bpmn:EventDefinition": EventDefinition;
        "bpmn:CancelEventDefinition": CancelEventDefinition;
        "bpmn:ErrorEventDefinition": ErrorEventDefinition;
        "bpmn:TerminateEventDefinition": TerminateEventDefinition;
        "bpmn:EscalationEventDefinition": EscalationEventDefinition;
        "bpmn:Escalation": Escalation;
        "bpmn:CompensateEventDefinition": CompensateEventDefinition;
        "bpmn:TimerEventDefinition": TimerEventDefinition;
        "bpmn:LinkEventDefinition": LinkEventDefinition;
        "bpmn:MessageEventDefinition": MessageEventDefinition;
        "bpmn:ConditionalEventDefinition": ConditionalEventDefinition;
        "bpmn:SignalEventDefinition": SignalEventDefinition;
        "bpmn:Signal": Signal;
        "bpmn:ImplicitThrowEvent": ImplicitThrowEvent;
        "bpmn:DataState": DataState;
        "bpmn:ItemAwareElement": ItemAwareElement;
        "bpmn:DataAssociation": DataAssociation;
        "bpmn:DataInput": DataInput;
        "bpmn:DataOutput": DataOutput;
        "bpmn:InputSet": InputSet;
        "bpmn:OutputSet": OutputSet;
        "bpmn:Property": Property;
        "bpmn:DataInputAssociation": DataInputAssociation;
        "bpmn:DataOutputAssociation": DataOutputAssociation;
        "bpmn:InputOutputSpecification": InputOutputSpecification;
        "bpmn:DataObject": DataObject;
        "bpmn:InputOutputBinding": InputOutputBinding;
        "bpmn:Assignment": Assignment;
        "bpmn:DataStore": DataStore;
        "bpmn:DataStoreReference": DataStoreReference;
        "bpmn:DataObjectReference": DataObjectReference;
        "bpmn:ConversationLink": ConversationLink;
        "bpmn:ConversationAssociation": ConversationAssociation;
        "bpmn:CallConversation": CallConversation;
        "bpmn:Conversation": Conversation;
        "bpmn:SubConversation": SubConversation;
        "bpmn:ConversationNode": ConversationNode;
        "bpmn:GlobalConversation": GlobalConversation;
        "bpmn:PartnerEntity": PartnerEntity;
        "bpmn:PartnerRole": PartnerRole;
        "bpmn:CorrelationProperty": CorrelationProperty;
        "bpmn:Error": ErrorElement;
        "bpmn:CorrelationKey": CorrelationKey;
        "bpmn:Expression": Expression;
        "bpmn:FormalExpression": FormalExpression;
        "bpmn:Message": Message;
        "bpmn:ItemDefinition": ItemDefinition;
        "bpmn:FlowElement": FlowElement;
        "bpmn:SequenceFlow": SequenceFlow;
        "bpmn:FlowElementsContainer": FlowElementsContainer;
        "bpmn:CallableElement": CallableElement;
        "bpmn:FlowNode": FlowNode;
        "bpmn:CorrelationPropertyRetrievalExpression": CorrelationPropertyRetrievalExpression;
        "bpmn:CorrelationPropertyBinding": CorrelationPropertyBinding;
        "bpmn:Resource": Resource;
        "bpmn:ResourceParameter": ResourceParameter;
        "bpmn:CorrelationSubscription": CorrelationSubscription;
        "bpmn:MessageFlow": MessageFlow;
        "bpmn:MessageFlowAssociation": MessageFlowAssociation;
        "bpmn:InteractionNode": InteractionNode;
        "bpmn:Participant": Participant;
        "bpmn:ParticipantAssociation": ParticipantAssociation;
        "bpmn:ParticipantMultiplicity": ParticipantMultiplicity;
        "bpmn:Collaboration": Collaboration;
        "bpmn:ChoreographyActivity": ChoreographyActivity;
        "bpmn:CallChoreography": CallChoreography;
        "bpmn:SubChoreography": SubChoreography;
        "bpmn:ChoreographyTask": ChoreographyTask;
        "bpmn:Choreography": Choreography;
        "bpmn:GlobalChoreographyTask": GlobalChoreographyTask;
        "bpmn:TextAnnotation": TextAnnotation;
        "bpmn:Group": Group;
        "bpmn:Association": Association;
        "bpmn:Category": Category;
        "bpmn:Artifact": Artifact;
        "bpmn:CategoryValue": CategoryValue;
        "bpmn:Activity": Activity;
        "bpmn:ServiceTask": ServiceTask;
        "bpmn:SubProcess": SubProcess;
        "bpmn:LoopCharacteristics": LoopCharacteristics;
        "bpmn:MultiInstanceLoopCharacteristics": MultiInstanceLoopCharacteristics;
        "bpmn:StandardLoopCharacteristics": StandardLoopCharacteristics;
        "bpmn:CallActivity": CallActivity;
        "bpmn:Task": Task;
        "bpmn:SendTask": SendTask;
        "bpmn:ReceiveTask": ReceiveTask;
        "bpmn:ScriptTask": ScriptTask;
        "bpmn:BusinessRuleTask": BusinessRuleTask;
        "bpmn:AdHocSubProcess": AdHocSubProcess;
        "bpmn:Transaction": Transaction;
        "bpmn:GlobalScriptTask": GlobalScriptTask;
        "bpmn:GlobalBusinessRuleTask": GlobalBusinessRuleTask;
        "bpmn:ComplexBehaviorDefinition": ComplexBehaviorDefinition;
        "bpmn:ResourceRole": ResourceRole;
        "bpmn:ResourceParameterBinding": ResourceParameterBinding;
        "bpmn:ResourceAssignmentExpression": ResourceAssignmentExpression;
        "bpmn:Import": Import;
        "bpmn:Definitions": Definitions;
        "bpmndi:BPMNDiagram": BPMNDiagram;
        "bpmndi:BPMNPlane": BPMNPlane;
        "bpmndi:BPMNShape": BPMNShape;
        "bpmndi:BPMNEdge": BPMNEdge;
        "bpmndi:BPMNLabel": BPMNLabel;
        "bpmndi:BPMNLabelStyle": BPMNLabelStyle;
        "dc:boolean": boolean;
        "dc:number": number;
        "dc:Real": any;
        "dc:string": string;
        "dc:Font": Font;
        "dc:Point": Point;
        "dc:Bounds": Bounds;
        "di:DiagramElement": DiagramElement;
        "di:Node": Node;
        "di:Edge": Edge;
        "di:Diagram": Diagram;
        "di:Shape": Shape;
        "di:Plane": Plane;
        "di:LabeledEdge": LabeledEdge;
        "di:LabeledShape": LabeledShape;
        "di:Label": Label;
        "di:Style": Style;
        "di:Extension": Extension;
        "bioc:ColoredShape": ColoredShape;
        "bioc:ColoredEdge": ColoredEdge;
    }

    type ElementType = keyof ElementTypes;

    interface Option {
        [key: string]: any;
    }

    interface BPMNModdleConstructor {
        new (packages?: any, options?: Option): BPMNModdle;
    }

    type ImportFn = (
        err: Error,
        definitions: Definitions,
        parseContext: any
    ) => void;

    interface Moddle {
        /**
         * Create an instance of the specified type.
         *
         * @example
         *
         * var foo = moddle.create('my:Foo');
         * var bar = moddle.create('my:Bar', { id: 'BAR_1' });
         *
         * @param  descriptor the type descriptor or name know to the model
         * @param  attrs   a number of attributes to initialize the model instance with
         * @return model instance
         */
        create<T = ElementTypes, K extends keyof T = keyof T>(
            descriptor: K,
            attrs?: any
        ): T[K];
        create(descriptor: any, attrs?: any): BaseElement;

        /**
         * Returns the type representing a given descriptor
         *
         * @example
         *
         * var Foo = moddle.getType('my:Foo');
         * var foo = new Foo({ 'id' : 'FOO_1' });
         *
         * @param  descriptor the type descriptor or name know to the model
         * @return the type representing the descriptor
         */
        getType(descriptor: any): any;

        /**
         * Creates an any-element type to be used within model instances.
         *
         * This can be used to create custom elements that lie outside the meta-model.
         * The created element contains all the meta-data required to serialize it
         * as part of meta-model elements.
         *
         * @example
         *
         * var foo = moddle.createAny('vendor:Foo', 'http://vendor', {
         *   value: 'bar'
         * });
         *
         * var container = moddle.create('my:Container', 'http://my', {
         *   any: [ foo ]
         * });
         *
         * // go ahead and serialize the stuff
         *
         *
         * @param  name  the name of the element
         * @param  nsUri the namespace uri of the element
         * @param  [properties] a map of properties to initialize the instance with
         * @return the any type instance
         */
        createAny(name: string, nsUri: string, properties: any): any;

        /**
         * Returns a registered package by uri or prefix
         *
         * @return the package
         */
        getPackage(uriOrPrefix: any): any;

        /**
         * Returns a snapshot of all known packages
         *
         * @return the package
         */
        getPackages(): any;
        /**
         * Returns the descriptor for an element
         */
        getElementDescriptor(element: any): any;

        /**
         * Returns true if the given descriptor or instance
         * represents the given type.
         *
         * May be applied to this, if element is omitted.
         */
        hasType(element: any, type: string): any;

        /**
         * Returns the descriptor of an elements named property
         */
        getPropertyDescriptor(element: any, property: any): any;
        /**
         * Returns a mapped type's descriptor
         */
        getTypeDescriptor(type: string): any;
    }

    interface BPMNModdle extends Moddle {
        /**
         * Instantiates a BPMN model tree from a given xml string.
         *
         * @param xmlStr
         * XML string
         *
         * @param done
         * done callback
         */
        fromXML(xmlStr: string, done: ImportFn): void;

        /**
         * Instantiates a BPMN model tree from a given xml string.
         *
         * @param xmlStr
         * XML string
         *
         * @param options
         * Options to pass to the underlying reader
         *
         * @param done
         * done callback
         */
        fromXML(xmlStr: string, options: Option, done: ImportFn): void;

        /**
         * Instantiates a BPMN model tree from a given xml string.
         *
         * @param xmlStr
         * XML string
         *
         * @param typeName
         * Name of the root element
         *
         * @param options
         * Options to pass to the underlying reader
         *
         * @param done
         * done callback
         */
        fromXML(
            xmlStr: string,
            typeName: string,
            options: Option,
            done: ImportFn
        ): void;
    }
}

declare const BPMNModdle: BPMNModdle.BPMNModdleConstructor;
export = BPMNModdle;
