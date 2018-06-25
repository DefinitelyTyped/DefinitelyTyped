declare namespace BPMNModdle {
  export type AdHocOrdering = 'Parallel' | 'Sequential';
  export type AssociationDirection = 'None' | 'One' | 'Both';
  export type ChoreographyLoopType =
    | 'None'
    | 'Standard'
    | 'MultiInstanceSequential'
    | 'MultiInstanceParallel';
  export type EventBasedGatewayType = 'Parallel' | 'Exclusive';
  export type GatewayDirection =
    | 'Unspecified'
    | 'Converging'
    | 'Diverging'
    | 'Mixed';
  export type ItemKind = 'Physical' | 'Information';
  export type MultiInstanceBehaviour = 'None' | 'One' | 'All' | 'Complex';
  export type ProcessType = 'None' | 'Public' | 'Private';
  export type RelationshipDirection = 'None' | 'Forward' | 'Backward' | 'Both';

  export interface TypeDerived {
    $type: ElementType;
  }
  export interface BaseElement extends TypeDerived {
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
  export interface RootElement extends BaseElement {}
  export interface Interface extends RootElement {
    name: string;
    operations: Operation[];
    implementationRef: string;
  }

  export interface Operation extends BaseElement {
    name: string;
    inMessageRef: Message;
    outMessageRef: Message;
    errorRef: ErrorElement;
    implementationRef: string;
  }

  export interface EndPoint extends RootElement {}
  export interface Auditing extends BaseElement {}
  export interface CallableElement extends RootElement {
    name: string;
    ioSpecification: InputOutputSpecification;
    supportedInterfaceRef: Interface;
    ioBinding: InputOutputBinding;
  }
  export interface ResourceRole extends BaseElement {
    name: string;
    resourceRef: Resource;
    ResourceParameterBindings: ResourceParameterBinding[];
    resourceAssignmentExpression: ResourceAssignmentExpression;
  }
  export interface GlobalTask extends CallableElement {
    resources: ResourceRole;
  }
  export interface Monitoring extends BaseElement {}
  export interface Performer extends ResourceRole {}
  export interface Process extends FlowElementsContainer, CallableElement {
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
  export interface LaneSet extends BaseElement {
    lanes: Lane[];
    name: string;
  }
  export interface Lane extends BaseElement {
    name: string;
    partitionElementRef: BaseElement;
    partitionElement: BaseElement;
    flowNodeRef: FlowNode[];
    childLaneSet: LaneSet;
  }
  export interface GlobalManualTask extends GlobalTask {}
  export interface ManualTask extends Task {}
  export interface UserTask extends Task {
    renderings: Rendering[];
    implementation: string;
  }
  export interface Rendering extends BaseElement {}
  export interface HumanPerformer extends Performer {}
  export interface PotentialOwner extends Performer {}
  export interface GlobalUserTask extends GlobalTask {
    implementation: string;
    renderings: Rendering;
  }
  export interface Gateway extends FlowNode {
    /**
     * @default Unspecified
     */
    gatewayDirection: GatewayDirection;
  }
  export interface EventBasedGateway extends Gateway {
    instantiate: boolean;
    /**
     * @default Exclusive
     */
    eventGatewayType: EventBasedGatewayType;
  }
  export interface ComplexGateway extends Gateway {
    activationCondition: Expression;
    default: SequenceFlow;
  }
  export interface ExclusiveGateway extends Gateway {
    default: SequenceFlow;
  }
  export interface InclusiveGateway extends Gateway {
    default: SequenceFlow;
  }
  export interface ParallelGateway extends Gateway {}
  export interface Relationship extends BaseElement {
    type: string;
    direction: RelationshipDirection;
    source: BaseElement[];
    target: BaseElement[];
  }
  export interface Extension extends TypeDerived {
    /**
     * @default false
     */
    mustUnderstand: boolean;
    definition: ExtensionDefinition;
  }
  export interface ExtensionDefinition extends TypeDerived {
    name: string;
    extensionAttributeDefinitions: ExtensionAttributeDefinition[];
  }
  export interface ExtensionAttributeDefinition extends TypeDerived {
    name: string;
    type: string;
    /**
     * @default false
     */
    isReference: boolean;
  }
  export interface ExtensionElements extends TypeDerived {
    valueRef: BaseElement;
    values: BaseElement[];
    extensionAttributeDefinition: ExtensionAttributeDefinition;
    [key: string]: any;
  }
  export interface Documentation extends BaseElement {
    text: string;
    /**
     * @default "text/plain"
     */
    textFormat: string;
  }
  export interface Event extends FlowNode, InteractionNode {
    properties: Property[];
  }
  export interface IntermediateCatchEvent extends CatchEvent {}
  export interface IntermediateThrowEvent extends ThrowEvent {}
  export interface EndEvent extends ThrowEvent {}
  export interface StartEvent extends CatchEvent {
    /**
     * @default true
     */
    isInterrupting: boolean;
  }
  export interface ThrowEvent extends Event {
    dataInputs: DataInput[];
    dataInputAssociations: DataInputAssociation[];
    inputSet: InputSet;
    eventDefinitions: EventDefinition[];
    eventDefinitionRef: EventDefinition[];
  }
  export interface CatchEvent extends Event {
    /**
     * @default false
     */
    parallelMultiple: boolean;
    dataOutputs: DataOutput[];
    dataOutputAssociations: DataOutputAssociation[];
    outputSet: OutputSet;
    eventDefinitions: EventDefinition[];
  }
  export interface BoundaryEvent extends CatchEvent {
    /**
     * @default true
     */
    cancelActivity: boolean;
    attachedToRef: Activity;
  }

  export interface EventDefinition extends RootElement {}
  export interface CancelEventDefinition extends EventDefinition {}
  export interface ErrorEventDefinition extends EventDefinition {
    errorRef: ErrorElement;
  }
  export interface TerminateEventDefinition extends EventDefinition {}
  export interface EscalationEventDefinition extends EventDefinition {
    escalationRef: Escalation;
  }
  export interface Escalation extends RootElement {
    structureRef: ItemDefinition;
    name: string;
    escalationCode: string;
  }
  export interface CompensateEventDefinition extends EventDefinition {
    waitForCompletion: boolean;
    activityRef: Activity;
  }
  export interface TimerEventDefinition extends EventDefinition {
    timeDate: Expression;
    timeCycle: Expression;
    timeDuration: Expression;
  }
  export interface LinkEventDefinition extends EventDefinition {
    name: string;
    target: LinkEventDefinition;
    source: LinkEventDefinition;
  }
  export interface MessageEventDefinition extends EventDefinition {
    nessageRef: Message;
    operationRef: Operation;
  }
  export interface ConditionalEventDefinition extends EventDefinition {
    condition: Expression;
  }
  export interface SignalEventDefinition extends EventDefinition {
    singalRef: Signal;
  }
  export interface Signal extends RootElement {
    structureRef: ItemDefinition;
    name: string;
  }
  export interface ImplicitThrowEvent extends ThrowEvent {}
  export interface DataState extends BaseElement {
    name: string;
  }
  export interface ItemAwareElement extends BaseElement {
    itemSubjectRef: ItemDefinition;
    dataState: DataState;
  }
  export interface DataAssociation extends BaseElement {
    assignment: Assignment;
    sourceRef: ItemAwareElement;
    targetRef: ItemAwareElement;
    transformation: FormalExpression;
  }
  export interface DataInput extends ItemAwareElement {
    name: string;
    /** @default false */
    isCollection: boolean;
    inputSetRef: InputSet;
    inputSetWithOptional: InputSet;
    inputSetWithWhileExecuting: InputSet;
  }
  export interface DataOutput extends ItemAwareElement {
    name: string;
    /**
     * @default false
     */
    isCollection: boolean;
    outputSetRef: InputSet[];
    outputSetWithOptional: InputSet[];
    outputSetWithWhileExecuting: InputSet[];
  }
  export interface InputSet extends BaseElement {
    name: string;
    dataInputRefs: DataInput[];
    optionalInputRefs: DataInput[];
    whileExecutingInputsRefs: DataInput[];
    outputSetRefs: OutputSet[];
  }
  export interface OutputSet extends BaseElement {
    dataOutputRefs: DataOutput[];
    name: string;
    inputSetRefs: InputSet[];
    optionalOutputRefs: DataOutput[];
    whileExecutingOutputREfs: DataOutput[];
  }
  export interface Property extends ItemAwareElement {
    name: string;
  }
  export interface DataInputAssociation extends DataAssociation {}
  export interface DataOutputAssociation extends DataAssociation {}
  export interface InputOutputSpecification extends BaseElement {
    dataInputs: DataInput[];
    dataOutputs: DataOutput[];
    inputSets: InputSet[];
    outputSets: OutputSet[];
  }
  export interface DataObject extends FlowElement, ItemAwareElement {
    /** @default false */
    isCollection: boolean;
  }
  export interface InputOutputBinding extends TypeDerived {
    inputDataRef: InputSet;
    outputDataRef: OutputSet;
    operationRef: Operation;
  }
  export interface Assignment extends BaseElement {
    from: Expression;
    to: Expression;
  }
  export interface DataStore extends RootElement, ItemAwareElement {
    name: String;
    capacity: number;
    isUnlimited: boolean;
  }
  export interface DataStoreReference extends FlowElement, ItemAwareElement {
    dataStoreRef: DataStore;
  }
  export interface DataObjectReference extends ItemAwareElement, FlowElement {
    dataObjectRef: DataObject;
  }
  export interface ConversationLink extends BaseElement {
    sourceRef: InteractionNode;
    targetRef: InteractionNode;
    name: string;
  }

  export interface ConversationAssociation extends ConversationNode {
    innerConversationNodeRef: ConversationNode;
    outerConversationNodeRef: ConversationNode;
  }
  export interface CallConversation extends ConversationNode {
    calledCollaborationRef: Collaboration;
    participantAssociations: ParticipantAssociation[];
  }
  export interface Conversation extends ConversationNode {}
  export interface SubConversation extends ConversationNode {
    conversationNodes: ConversationNode[];
  }
  export interface ConversationNode extends InteractionNode, BaseElement {
    name: string;
    participantRefs: Participant[];
    messageFlowRefs: MessageFlow[];
    correlationKeys: CorrelationKey[];
  }
  export interface GlobalConversation extends Collaboration {}
  export interface PartnerEntity extends RootElement {
    name: string;
    participantRef: Participant[];
  }
  export interface PartnerRole extends RootElement {
    name: string;
    participantRef: Participant[];
  }

  export interface CorrelationProperty extends RootElement {
    correlationPropertyRetrievalExpression: CorrelationPropertyRetrievalExpression;
    name: string;
    type: ItemDefinition;
  }
  export interface ErrorElement extends RootElement {
    structureRef: ItemDefinition;
    name: string;
    errorCode: string;
  }
  export interface CorrelationKey extends BaseElement {
    correlationPropertyRef: CorrelationProperty;
    name: string;
  }
  export interface Expression extends BaseElement {
    body: string;
  }
  export interface FormalExpression extends Expression {
    language: string;
    evaluatesToTypeRef: ItemDefinition;
  }
  export interface Message extends RootElement {
    name: string;
    itemRef: ItemDefinition;
  }
  export interface ItemDefinition extends RootElement {
    itemKind: ItemKind;
    structureRef: string;
    /** @default false */
    isCollection: boolean;
    import: Import;
  }
  export interface FlowElement extends RootElement {
    name?: string;
    auditing: Auditing;
    monitoring: Monitoring;
    categoryValueRef: CategoryValue[];
  }
  export interface SequenceFlow extends FlowElement {
    isImmediate: boolean;
    conditionExpression: Expression;
    sourceRef: FlowNode;
    targetRef: FlowNode;
  }
  export interface FlowElementsContainer extends BaseElement {
    laneSets: LaneSet[];
    flowElements: FlowElement[];
  }
  export interface FlowNode extends FlowElement {
    incoming: SequenceFlow[];
    outgoing: SequenceFlow[];
    lanes: Lane[];
  }
  export interface CorrelationPropertyRetrievalExpression extends BaseElement {
    messagePath: FormalExpression;
    messageRef: Message;
  }
  export interface CorrelationPropertyBinding extends BaseElement {
    dataPath: FormalExpression;
    correlationPropertyRef: CorrelationProperty;
  }
  export interface Resource extends RootElement {
    name: string;
    resourceParameters: ResourceParameter[];
  }
  export interface ResourceParameter extends BaseElement {
    name: string;
    isRequired: boolean;
    type: ItemDefinition;
  }
  export interface CorrelationSubscription extends BaseElement {
    correlationKeyRef: CorrelationKey;
    correlationPropertyBinding: CorrelationKey[];
  }
  export interface MessageFlow extends BaseElement {
    name: string;
    sourceRef: InteractionNode;
    targetRef: InteractionNode;
    messageRef: Message;
  }
  export interface MessageFlowAssociation extends BaseElement {
    innerMessageFlowRef: MessageFlow;
    outerMessageFlowRef: MessageFlow;
  }
  export interface InteractionNode extends TypeDerived {
    incomingConversationLinks: ConversationLink[];
    outgoingConversationLinks: ConversationLink[];
  }
  export interface Participant extends InteractionNode, BaseElement {
    name: string;
    interfaceRef: Interface[];
    participantMultiplicity: ParticipantMultiplicity;
    endPointRefs: EndPoint[];
    processRef: Process;
  }
  export interface ParticipantAssociation extends BaseElement {
    innerParticipantRef: Participant;
    outerParticipantRef: Participant;
  }
  export interface ParticipantMultiplicity extends BaseElement {
    minimum: number;
    maximum: number;
  }
  export interface Collaboration extends RootElement {
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
  export interface ChoreographyActivity extends FlowNode {
    participantRef: Participant[];
    initiatingParticipantRef: Participant;
    correlationKeys: CorrelationKey[];
    loopType: ChoreographyLoopType;
  }
  export interface CallChoreography extends ChoreographyActivity {
    calledChoreographyRef: Choreography;
    participantAssociations: ParticipantAssociation[];
  }
  export interface SubChoreography
    extends ChoreographyActivity,
      FlowElementsContainer {
    artifacts: Artifact[];
  }
  export interface ChoreographyTask extends ChoreographyActivity {
    messageFlowRef: MessageFlow[];
  }
  export interface Choreography extends FlowElementsContainer, Collaboration {}
  export interface GlobalChoreographyTask extends Choreography {
    initiatingParticipantRef: Participant;
  }
  export interface TextAnnotation extends Artifact {
    text: string;
    textFormat: string;
  }
  export interface Group extends Artifact {
    categoryValueRef: CategoryValue;
  }
  export interface Association extends Artifact {
    associationDirection: AssociationDirection;
    sourceRef: BaseElement;
    targetRef: BaseElement;
  }
  export interface Category extends RootElement {
    categoryValue: CategoryValue;
    name: string;
  }
  export interface Artifact extends BaseElement {}
  export interface CategoryValue extends BaseElement {
    categorizedFlowElements: FlowElement[];
    value: string;
  }
  export interface Activity extends FlowNode {
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
  export interface ServiceTask extends Task {
    implementation: string;
    operationRef: Operation;
  }
  export interface SubProcess
    extends Activity,
      FlowElementsContainer,
      InteractionNode {
    triggeredByEvent: boolean;
    artifacts: Artifact[];
  }
  export interface LoopCharacteristics extends BaseElement {}
  export interface MultiInstanceLoopCharacteristics
    extends LoopCharacteristics {
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
  export interface StandardLoopCharacteristics extends LoopCharacteristics {
    testBefore: boolean;
    loopCondition: Expression;
    loopMaximum: Expression;
  }
  export interface CallActivity extends Activity {
    calledElement: string;
  }
  export interface Task extends Activity, InteractionNode {}
  export interface SendTask extends Task {
    implementation: string;
    operationRef: Operation;
    messageRef: Message;
  }
  export interface ReceiveTask extends Task {
    implementation: string;
    instantiate: boolean;
    operationRef: Operation;
    messageRef: Message;
  }
  export interface ScriptTask extends Task {
    scriptFormat: string;
    script: string;
  }
  export interface BusinessRuleTask extends Task {
    implementation: string;
  }
  export interface AdHocSubProcess extends SubProcess {
    completionCondition: Expression;
    ordering: AdHocOrdering;
    cancelRemainingInstances: boolean;
  }
  export interface Transaction extends SubProcess {
    protocal: string;
    method: String;
  }
  export interface GlobalScriptTask extends GlobalTask {
    scriptLanguage: String;
    script: string;
  }
  export interface GlobalBusinessRuleTask extends GlobalTask {
    implementation: string;
  }
  export interface ComplexBehaviorDefinition extends BaseElement {
    condition: FormalExpression;
    event: ImplicitThrowEvent;
  }
  export interface ResourceParameterBinding extends TypeDerived {
    expression: Expression;
    parameterRef: ResourceParameter;
  }
  export interface ResourceAssignmentExpression extends BaseElement {
    expression: Expression;
  }
  export interface Import extends TypeDerived {
    importType: string;
    location: string;
    namespace: string;
  }
  export interface Definitions extends BaseElement {
    name: string;
    targetNamespace: string;
    expressionLanguage: string;
    typeLanguage: string;
    imports: Import[];
    extensions: Extension[];
    rootElements: RootElement[];
    diagrams: BPMNDiagram;
    exporter: string;
    relationship: Relationship[];
    exporterVersion: string;
  }
  export interface BPMNDiagram extends Diagram {
    plane: BPMNPlane;
    labelStyle: BPMNLabelStyle;
  }
  export interface BPMNPlane extends Plane {}
  export interface BPMNShape extends LabeledShape {}
  export interface BPMNEdge extends LabeledEdge {}
  export interface BPMNLabel extends Label {}
  export interface BPMNLabelStyle extends Style {}
  export interface Font extends TypeDerived {
    name: string;
    size: number;
    isBold: boolean;
    isItalic: boolean;
    isUnderline: boolean;
    isStrikeThrough: boolean;
  }
  export interface Point extends TypeDerived {
    x: number;
    y: number;
    width: number;
    height: number;
  }
  export interface Bounds extends TypeDerived {}
  export interface DiagramElement extends TypeDerived {}
  export interface Node extends TypeDerived {}
  export interface Edge extends TypeDerived {}
  export interface Diagram extends TypeDerived {}
  export interface Shape extends TypeDerived {}
  export interface Plane extends TypeDerived {}
  export interface LabeledEdge extends TypeDerived {}
  export interface LabeledShape extends TypeDerived {}
  export interface Label extends TypeDerived {}
  export interface Style extends TypeDerived {}
  export interface ColoredShape extends TypeDerived {}
  export interface ColoredEdge extends TypeDerived {}

  export interface ElementTypes {
    'bpmn:Interface': Interface;
    'bpmn:Operation': Operation;
    'bpmn:EndPoint': EndPoint;
    'bpmn:Auditing': Auditing;
    'bpmn:GlobalTask': GlobalTask;
    'bpmn:Monitoring': Monitoring;
    'bpmn:Performer': Performer;
    'bpmn:Process': Process;
    'bpmn:LaneSet': LaneSet;
    'bpmn:Lane': Lane;
    'bpmn:GlobalManualTask': GlobalManualTask;
    'bpmn:ManualTask': ManualTask;
    'bpmn:UserTask': UserTask;
    'bpmn:Rendering': Rendering;
    'bpmn:HumanPerformer': HumanPerformer;
    'bpmn:PotentialOwner': PotentialOwner;
    'bpmn:GlobalUserTask': GlobalUserTask;
    'bpmn:Gateway': Gateway;
    'bpmn:EventBasedGateway': EventBasedGateway;
    'bpmn:ComplexGateway': ComplexGateway;
    'bpmn:ExclusiveGateway': ExclusiveGateway;
    'bpmn:InclusiveGateway': InclusiveGateway;
    'bpmn:ParallelGateway': ParallelGateway;
    'bpmn:RootElement': RootElement;
    'bpmn:Relationship': Relationship;
    'bpmn:BaseElement': BaseElement;
    'bpmn:Extension': Extension;
    'bpmn:ExtensionDefinition': ExtensionDefinition;
    'bpmn:ExtensionAttributeDefinition': ExtensionAttributeDefinition;
    'bpmn:ExtensionElements': ExtensionElements;
    'bpmn:Documentation': Documentation;
    'bpmn:Event': Event;
    'bpmn:IntermediateCatchEvent': IntermediateCatchEvent;
    'bpmn:IntermediateThrowEvent': IntermediateThrowEvent;
    'bpmn:EndEvent': EndEvent;
    'bpmn:StartEvent': StartEvent;
    'bpmn:ThrowEvent': ThrowEvent;
    'bpmn:CatchEvent': CatchEvent;
    'bpmn:BoundaryEvent': BoundaryEvent;
    'bpmn:EventDefinition': EventDefinition;
    'bpmn:CancelEventDefinition': CancelEventDefinition;
    'bpmn:ErrorEventDefinition': ErrorEventDefinition;
    'bpmn:TerminateEventDefinition': TerminateEventDefinition;
    'bpmn:EscalationEventDefinition': EscalationEventDefinition;
    'bpmn:Escalation': Escalation;
    'bpmn:CompensateEventDefinition': CompensateEventDefinition;
    'bpmn:TimerEventDefinition': TimerEventDefinition;
    'bpmn:LinkEventDefinition': LinkEventDefinition;
    'bpmn:MessageEventDefinition': MessageEventDefinition;
    'bpmn:ConditionalEventDefinition': ConditionalEventDefinition;
    'bpmn:SignalEventDefinition': SignalEventDefinition;
    'bpmn:Signal': Signal;
    'bpmn:ImplicitThrowEvent': ImplicitThrowEvent;
    'bpmn:DataState': DataState;
    'bpmn:ItemAwareElement': ItemAwareElement;
    'bpmn:DataAssociation': DataAssociation;
    'bpmn:DataInput': DataInput;
    'bpmn:DataOutput': DataOutput;
    'bpmn:InputSet': InputSet;
    'bpmn:OutputSet': OutputSet;
    'bpmn:Property': Property;
    'bpmn:DataInputAssociation': DataInputAssociation;
    'bpmn:DataOutputAssociation': DataOutputAssociation;
    'bpmn:InputOutputSpecification': InputOutputSpecification;
    'bpmn:DataObject': DataObject;
    'bpmn:InputOutputBinding': InputOutputBinding;
    'bpmn:Assignment': Assignment;
    'bpmn:DataStore': DataStore;
    'bpmn:DataStoreReference': DataStoreReference;
    'bpmn:DataObjectReference': DataObjectReference;
    'bpmn:ConversationLink': ConversationLink;
    'bpmn:ConversationAssociation': ConversationAssociation;
    'bpmn:CallConversation': CallConversation;
    'bpmn:Conversation': Conversation;
    'bpmn:SubConversation': SubConversation;
    'bpmn:ConversationNode': ConversationNode;
    'bpmn:GlobalConversation': GlobalConversation;
    'bpmn:PartnerEntity': PartnerEntity;
    'bpmn:PartnerRole': PartnerRole;
    'bpmn:CorrelationProperty': CorrelationProperty;
    'bpmn:Error': ErrorElement;
    'bpmn:CorrelationKey': CorrelationKey;
    'bpmn:Expression': Expression;
    'bpmn:FormalExpression': FormalExpression;
    'bpmn:Message': Message;
    'bpmn:ItemDefinition': ItemDefinition;
    'bpmn:FlowElement': FlowElement;
    'bpmn:SequenceFlow': SequenceFlow;
    'bpmn:FlowElementsContainer': FlowElementsContainer;
    'bpmn:CallableElement': CallableElement;
    'bpmn:FlowNode': FlowNode;
    'bpmn:CorrelationPropertyRetrievalExpression': CorrelationPropertyRetrievalExpression;
    'bpmn:CorrelationPropertyBinding': CorrelationPropertyBinding;
    'bpmn:Resource': Resource;
    'bpmn:ResourceParameter': ResourceParameter;
    'bpmn:CorrelationSubscription': CorrelationSubscription;
    'bpmn:MessageFlow': MessageFlow;
    'bpmn:MessageFlowAssociation': MessageFlowAssociation;
    'bpmn:InteractionNode': InteractionNode;
    'bpmn:Participant': Participant;
    'bpmn:ParticipantAssociation': ParticipantAssociation;
    'bpmn:ParticipantMultiplicity': ParticipantMultiplicity;
    'bpmn:Collaboration': Collaboration;
    'bpmn:ChoreographyActivity': ChoreographyActivity;
    'bpmn:CallChoreography': CallChoreography;
    'bpmn:SubChoreography': SubChoreography;
    'bpmn:ChoreographyTask': ChoreographyTask;
    'bpmn:Choreography': Choreography;
    'bpmn:GlobalChoreographyTask': GlobalChoreographyTask;
    'bpmn:TextAnnotation': TextAnnotation;
    'bpmn:Group': Group;
    'bpmn:Association': Association;
    'bpmn:Category': Category;
    'bpmn:Artifact': Artifact;
    'bpmn:CategoryValue': CategoryValue;
    'bpmn:Activity': Activity;
    'bpmn:ServiceTask': ServiceTask;
    'bpmn:SubProcess': SubProcess;
    'bpmn:LoopCharacteristics': LoopCharacteristics;
    'bpmn:MultiInstanceLoopCharacteristics': MultiInstanceLoopCharacteristics;
    'bpmn:StandardLoopCharacteristics': StandardLoopCharacteristics;
    'bpmn:CallActivity': CallActivity;
    'bpmn:Task': Task;
    'bpmn:SendTask': SendTask;
    'bpmn:ReceiveTask': ReceiveTask;
    'bpmn:ScriptTask': ScriptTask;
    'bpmn:BusinessRuleTask': BusinessRuleTask;
    'bpmn:AdHocSubProcess': AdHocSubProcess;
    'bpmn:Transaction': Transaction;
    'bpmn:GlobalScriptTask': GlobalScriptTask;
    'bpmn:GlobalBusinessRuleTask': GlobalBusinessRuleTask;
    'bpmn:ComplexBehaviorDefinition': ComplexBehaviorDefinition;
    'bpmn:ResourceRole': ResourceRole;
    'bpmn:ResourceParameterBinding': ResourceParameterBinding;
    'bpmn:ResourceAssignmentExpression': ResourceAssignmentExpression;
    'bpmn:Import': Import;
    'bpmn:Definitions': Definitions;
    'bpmndi:BPMNDiagram': BPMNDiagram;
    'bpmndi:BPMNPlane': BPMNPlane;
    'bpmndi:BPMNShape': BPMNShape;
    'bpmndi:BPMNEdge': BPMNEdge;
    'bpmndi:BPMNLabel': BPMNLabel;
    'bpmndi:BPMNLabelStyle': BPMNLabelStyle;
    'dc:Boolean': Boolean;
    'dc:number': number;
    'dc:Real': any;
    'dc:String': String;
    'dc:Font': Font;
    'dc:Point': Point;
    'dc:Bounds': Bounds;
    'di:DiagramElement': DiagramElement;
    'di:Node': Node;
    'di:Edge': Edge;
    'di:Diagram': Diagram;
    'di:Shape': Shape;
    'di:Plane': Plane;
    'di:LabeledEdge': LabeledEdge;
    'di:LabeledShape': LabeledShape;
    'di:Label': Label;
    'di:Style': Style;
    'di:Extension': Extension;
    'bioc:ColoredShape': ColoredShape;
    'bioc:ColoredEdge': ColoredEdge;
  }

  export type ElementType = keyof ElementTypes;

  export interface Option {
    [key: string]: any;
  }

  export interface BPMNModdleConstructor {
    new (packages?: any, options?: Option): BPMNModdle;
  }

  export type ImportFn = (
    err: Error,
    defintions: Definitions,
    parseContext: any,
  ) => void;

  export interface Moddle {
    /**
     * Create an instance of the specified type.
     *
     * @method Moddle#create
     *
     * @example
     *
     * var foo = moddle.create('my:Foo');
     * var bar = moddle.create('my:Bar', { id: 'BAR_1' });
     *
     * @param  {String|Object} descriptor the type descriptor or name know to the model
     * @param  {Object} attrs   a number of attributes to initialize the model instance with
     * @return {Object}         model instance
     */
    create<T  = ElementTypes, K extends keyof T = keyof T>(
      descriptor: K,
      attrs?: any,
    ): T[K];
    create(descriptor: any, attrs?: any): BaseElement;

    /**
     * Returns the type representing a given descriptor
     *
     * @method Moddle#getType
     *
     * @example
     *
     * var Foo = moddle.getType('my:Foo');
     * var foo = new Foo({ 'id' : 'FOO_1' });
     *
     * @param  {String|Object} descriptor the type descriptor or name know to the model
     * @return {Object}         the type representing the descriptor
     */
    getType(descriptor: string | any): any;

    /**
     * Creates an any-element type to be used within model instances.
     *
     * This can be used to create custom elements that lie outside the meta-model.
     * The created element contains all the meta-data required to serialize it
     * as part of meta-model elements.
     *
     * @method Moddle#createAny
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
     * @param  {String} name  the name of the element
     * @param  {String} nsUri the namespace uri of the element
     * @param  {Object} [properties] a map of properties to initialize the instance with
     * @return {Object} the any type instance
     */
    createAny(name: string, nsUri: string, properties: any): any;

    /**
     * Returns a registered package by uri or prefix
     *
     * @return {Object} the package
     */
    getPackage(uriOrPrefix: any): any;

    /**
     * Returns a snapshot of all known packages
     *
     * @return {Object} the package
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

  export interface BPMNModdle extends Moddle {
    /**
     * Instantiates a BPMN model tree from a given xml string.
     *
     * @param xmlStr
     * XML String
     *
     * @param done
     * done callback
     */
    fromXML(xmlStr: string, done: ImportFn): void;

    /**
     * Instantiates a BPMN model tree from a given xml string.
     *
     * @param xmlStr
     * XML String
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
     * XML String
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
      done: ImportFn,
    ): void;
  }
}

declare module 'bpmn-moddle' {
  const BPMNModdle: BPMNModdle.BPMNModdleConstructor;
  export = BPMNModdle;
}
