/// <reference types="activex-interop" />

declare namespace OpenDSSengine {
    enum ActionCodes {
        dssActionClose = 2,
        dssActionLock = 4,
        dssActionNone = 0,
        dssActionOpen = 1,
        dssActionReset = 3,
        dssActionTapDown = 7,
        dssActionTapUp = 6,
        dssActionUnlock = 5,
    }

    enum CapControlModes {
        dssCapControlCurrent = 0,
        dssCapControlKVAR = 2,
        dssCapControlPF = 4,
        dssCapControlTime = 3,
        dssCapControlVoltage = 1,
    }

    enum LineUnits {
        dssLineUnitscm = 7,
        dssLineUnitsft = 5,
        dssLineUnitsinch = 6,
        dssLineUnitskFt = 2,
        dssLineUnitskm = 3,
        dssLineUnitsMaxnum = 9,
        dssLineUnitsmeter = 4,
        dssLineUnitsMiles = 1,
        dssLineUnitsmm = 8,
        dssLineUnitsNone = 0,
    }

    enum LoadModels {
        dssLoadConstI = 5,
        dssLoadConstPFixedQ = 6,
        dssLoadConstPFixedX = 7,
        dssLoadConstPQ = 1,
        dssLoadConstZ = 2,
        dssLoadCVR = 4,
        dssLoadMotor = 3,
        dssLoadZIPV = 8,
    }

    enum LoadStatus {
        dssLoadExempt = 2,
        dssLoadFixed = 1,
        dssLoadVariable = 0,
    }

    /** Modes for Monitors */
    enum MonitorModes {
        dssMagnitude = 32,
        dssPosOnly = 64,
        dssPower = 1,
        dssSequence = 16,
        dssStates = 3,
        dssTaps = 2,
        dssVI = 0,
    }

    enum Options {
        dssAddCap = 2,
        dssAddGen = 1,
        dssAdmittance = 2,
        dssControlOFF = -1,
        dssEvent = 1,
        dssGaussian = 1,
        dssLogNormal = 3,
        dssMultiphase = 0,
        dssNewtonSolve = 1,
        dssNormalSolve = 0,
        dssPositiveSeq = 1,
        dssPowerFlow = 1,
        dssStatic = 0,
        dssTime = 2,
        dssUniform = 2,
    }

    enum SolveModes {
        dssAutoAdd = 13,
        dssDaily = 1,
        dssDirect = 7,
        dssDutyCycle = 6,
        dssDynamic = 14,
        dssFaultStudy = 9,
        dssHarmonic = 15,
        dssLD1 = 4,
        dssLD2 = 12,
        dssMonte1 = 3,
        dssMonte2 = 10,
        dssMonte3 = 11,
        dssMonteFault = 8,
        dssPeakDay = 5,
        dssSnapShot = 0,
        dssYearly = 2,
    }

    /** ActiveClass Object */
    class ActiveClass {
        private "OpenDSSengine.ActiveClass_typekey": ActiveClass;
        private constructor();

        /** Returns name of active class. */
        readonly ActiveClassName: string;

        /** Use this property (Read only) for getting the name of the parent class' name of the active class */
        readonly ActiveClassParent: string;

        /** Variant array of strings consisting of all element names in the active class. */
        readonly AllNames: any;

        /** Number of elements in Active Class. Same as NumElements Property. */
        readonly Count: number;

        /**
         * Sets first element in the active class to be the active DSS object. If object is a CktElement, ActiveCktELment also points to this element. Returns 0
         * if none.
         */
        readonly First: number;

        /** Name of the Active Element of the Active Class */
        Name: string;

        /**
         * Sets next element in active class to be the active DSS object. If object is a CktElement, ActiveCktElement also points to this element.  Returns 0 if
         * no more.
         */
        readonly Next: number;

        /** Number of elements in this class. Same as Count property. */
        readonly NumElements: number;
    }

    /** Bus Object */
    class Bus {
        private "OpenDSSengine.Bus_typekey": Bus;
        private constructor();

        /** Returns an array with the names of all PCE connected to the active bus */
        readonly AllPCEatBus: any;

        /** Returns an array with the names of all PDE connected to the active bus */
        readonly AllPDEatBus: any;

        /** False=0 else True. Indicates whether a coordinate has been defined for this bus */
        readonly Coorddefined: boolean;

        /** Complex Double array of Sequence Voltages (0, 1, 2) at this Bus. */
        readonly CplxSeqVoltages: any;

        /** Accumulated customer outage durations */
        readonly Cust_Duration: number;

        /** Annual number of customer-interruptions from this bus */
        readonly Cust_Interrupts: number;

        /** Distance from energymeter (if non-zero) */
        readonly Distance: number;

        /** Returns a unique node number at the active bus to avoid node collisions and adds it to the node list for the bus. */
        GetUniqueNodeNumber(StartNumber: number): number;

        /** Average interruption duration, hr. */
        readonly Int_Duration: number;

        /** Short circuit currents at bus; Complex Array. */
        readonly Isc: any;

        /** Base voltage at bus in kV */
        readonly kVBase: number;

        /** Accumulated failure rate downstream from this bus; faults per year */
        readonly Lambda: number;

        /** Sets the GIS latitude assigned to this bus */
        Latitude: number;

        /** Variant Array of Strings: List of LINE elements connected to this bus. Complete name Line.xxxx */
        readonly LineList: any;

        /** Variant array of strings: Full Names of LOAD elelments connected to this bus. */
        readonly LoadList: any;

        /** Sets the longitude given to the active Bus  */
        Longitude: number;

        /** Total numbers of customers served downline from this bus */
        readonly N_Customers: number;

        /** Number of interruptions this bus per year */
        readonly N_interrupts: number;

        /** Name of Bus */
        readonly Name: string;

        /** Integer Array of Node Numbers defined at the bus in same order as the voltages. */
        readonly Nodes: any;

        /** Number of Nodes this bus. */
        readonly NumNodes: number;

        /** Returns Complex array of pu L-L voltages for 2- and 3-phase buses. Returns -1.0 for 1-phase bus. If more than 3 phases, returns only 3 phases. */
        readonly puVLL: any;

        /** Variant array of doubles containig voltage magnitude, angle pairs in per unit */
        readonly puVmagAngle: any;

        /** Complex Array of pu voltages at the bus. */
        readonly puVoltages: any;

        /** Integer ID of the feeder section in which this bus is located. */
        readonly SectionID: number;

        /** Double Array of sequence voltages at this bus. */
        readonly SeqVoltages: any;

        /** Total length of line downline from this bus, in miles. For recloser siting algorithm. */
        readonly TotalMiles: number;

        /**
         * For 2- and 3-phase buses, returns variant array of complex numbers represetin L-L voltages in volts. Returns -1.0 for 1-phase bus. If more than 3
         * phases, returns only first 3.
         */
        readonly VLL: any;

        /** Variant Array of doubles containing voltages in Magnitude (VLN), angle (deg)  */
        readonly VMagAngle: any;

        /** Open circuit voltage; Complex array. */
        readonly Voc: any;

        /** Complex array of voltages at this bus. */
        readonly Voltages: any;

        /** X Coordinate for bus (double) */
        x: number;

        /** Y coordinate for bus(double) */
        y: number;

        /** Complex array of Ysc matrix at bus. Column by column. */
        readonly YscMatrix: any;

        /** Complex Zero-Sequence short circuit impedance at bus. */
        readonly Zsc0: any;

        /** Variant array of doubles (complex) containing the complete 012 Zsc matrix */
        readonly ZSC012Matrix: any;

        /** Complex Positive-Sequence short circuit impedance at bus.. */
        readonly Zsc1: any;

        /** Complex array of Zsc matrix at bus. Column by column. */
        readonly ZscMatrix: any;

        /** Recomputes Zsc for active bus for present circuit configuration. */
        ZscRefresh(): boolean;
    }

    class Capacitors {
        private "OpenDSSengine.Capacitors_typekey": Capacitors;
        private constructor();

        /** Adds one step of the capacitor if available. If successful returns TRUE. */
        AddStep(): boolean;

        /** Variant array of strings with all Capacitor names in the circuit. */
        readonly AllNames: any;

        /** Number of Steps available in cap bank to be switched ON. */
        readonly AvailableSteps: number;

        /** Close all phases of all steps of the Capacitor */
        Close(): void;

        /** Number of Capacitor objects in active circuit. */
        readonly Count: number;

        /** Sets the first Capacitor active. Returns 0 if no more. */
        readonly First: number;

        /** Delta connection or wye?) for distributing and switching the total bank kVAR. */
        IsDelta: boolean;

        /** Bank kV rating. Use LL for 2 or 3 phases, or actual can rating for 1 phase. */
        kV: number;

        /** Total bank KVAR, distributed equally among phases and steps. */
        kvar: number;

        /** Sets the acitve Capacitor by Name. */
        Name: string;

        /** Sets the next Capacitor active. Returns 0 if no more. */
        readonly Next: number;

        /** Number of steps (default 1) for distributing and switching the total bank kVAR. */
        NumSteps: number;

        /** Open all steps, all phases of the Capacitor  */
        Open(): void;

        /** A variant array of  integer [0..numsteps-1] indicating state of each step. If value is -1 an error has occurred. */
        States: any;

        /** Subtract one capacitor step.  Returns False if no more steps. */
        SubtractStep(): boolean;
    }

    class CapControls {
        private "OpenDSSengine.CapControls_typekey": CapControls;
        private constructor();

        /** Variant array of strings with all CapControl names. */
        readonly AllNames: any;

        /** Name of the Capacitor that is controlled. */
        Capacitor: string;

        /** Number of CapControls in Active Circuit */
        readonly Count: number;

        /** Transducer ratio from pirmary current to control current. */
        CTratio: number;
        DeadTime: number;

        /** Time delay [s] to switch on after arming.  Control may reset before actually switching. */
        Delay: number;

        /** Time delay [s] before swithcing off a step. Control may reset before actually switching. */
        DelayOff: number;

        /** Sets the first CapControl as active. Return 0 if none. */
        readonly First: number;

        /** Type of automatic controller. */
        Mode: CapControlModes;

        /** Full name of the element that PT and CT are connected to. */
        MonitoredObj: string;

        /** Terminal number on the element that PT and CT are connected to. */
        MonitoredTerm: number;

        /** Sets a CapControl active by name. */
        Name: string;

        /** Gets the next CapControl in the circut. Returns 0 if none. */
        readonly Next: number;

        /** Threshold to switch off a step. See Mode for units. */
        OFFSetting: number;

        /** Threshold to arm or switch on a step.  See Mode for units. */
        ONSetting: number;

        /** Transducer ratio from primary feeder to control voltage. */
        PTratio: number;

        /** Force a Reset of this CapControl */
        Reset(): void;

        /** Enables Vmin and Vmax to override the control Mode */
        UseVoltOverride: boolean;

        /** With VoltOverride, swtich off whenever PT voltage exceeds this level. */
        Vmax: number;

        /** With VoltOverride, switch ON whenever PT voltage drops below this level. */
        Vmin: number;
    }

    /** Circuit Object */
    class Circuit {
        private "OpenDSSengine.Circuit_typekey": Circuit;
        private constructor();

        /** Return an interface to the active bus. */
        readonly ActiveBus: Bus;

        /** Returns interface to the Active Circuit element (same as ActiveElement). */
        readonly ActiveCktElement: CktElement;

        /** Returns interface to active class. */
        readonly ActiveClass: ActiveClass;

        /** Returns Interface to the Active DSS object, which could be either a circuit element or a general DSS element. */
        readonly ActiveDSSElement: DSSElement;

        /** Return an interface to the active circuit element */
        readonly ActiveElement: CktElement;

        /** Returns distance from each bus to parent EnergyMeter. Corresponds to sequence in AllBusNames. */
        readonly AllBusDistances: any;

        /** Array of strings containing names of all buses in circuit (see AllNodeNames). */
        readonly AllBusNames: any;

        /** Array of magnitudes (doubles) of voltages at all buses */
        readonly AllBusVmag: any;

        /** Double Array of all bus voltages (each node) magnitudes in Per unit */
        readonly AllBusVmagPu: any;

        /** Complex array of all bus, node voltages from most recent solution */
        readonly AllBusVolts: any;

        /** Array of total losses (complex) in each circuit element */
        readonly AllElementLosses: any;

        /** Vaiant array of strings containing Full Name of all elements. */
        readonly AllElementNames: any;

        /** Returns an array of distances from parent EnergyMeter for each Node. Corresponds to AllBusVMag sequence. */
        readonly AllNodeDistances: any;

        /** Returns an array of doubles representing the distances to parent EnergyMeter. Sequence of array corresponds to other node ByPhase properties. */
        AllNodeDistancesByPhase(Phase: number): any;

        /** Variant array of strings containing full name of each node in system in same order as returned by AllBusVolts, etc. */
        readonly AllNodeNames: any;

        /** Return variant array of strings of the node names for the By Phase criteria. Sequence corresponds to other ByPhase properties. */
        AllNodeNamesByPhase(Phase: number): any;

        /** Returns Array of doubles represent voltage magnitudes for nodes on the specified phase. */
        AllNodeVmagByPhase(Phase: number): any;

        /** Returns array of per unit voltage magnitudes for each node by phase */
        AllNodeVmagPUByPhase(Phase: number): any;

        /** Collection of Buses in the circuit. Index may be string or integer index (0 based). */
        Buses(Index: any): Bus;

        /** Interface to the active circuit's Capacitors collection. */
        readonly Capacitors: Capacitors;
        Capacity(Start: number, Increment: number): number;

        /** Returns interface to CapControls collection */
        readonly CapControls: CapControls;

        /** Collection of CktElements in Circuit */
        CktElements(idx: any): CktElement;

        /** Interface to the main Control Queue */
        readonly CtrlQueue: CtrlQueue;

        /** Disable a circuit element by name (removes from circuit but leave in database) */
        Disable(myName: string): void;
        readonly DSSim_Coms: DSSimComs;

        /** Activate (enable) a disabled device. */
        Enable(myName: string): void;

        /** Calls EndOfTimeStepCleanup in SolutionAlgs */
        EndOfTimeStepUpdate(): void;

        /** Sets First element of active class to be the Active element in the active circuit. Returns 0 if none. */
        FirstElement(): number;

        /** Sets the first Power Conversion (PC) element to be the active element. */
        FirstPCElement(): number;

        /** Sets the first Power Delivery (PD) element to be the active element. */
        FirstPDElement(): number;

        /** Return interface to Fuses  */
        readonly Fuses: Fuses;

        /** Returns a Generators Object interface */
        readonly Generators: Generators;

        /** Connect to GICSources Interface */
        readonly GICSources: GICSources;

        /** Interface to ISOURCE devices */
        readonly ISources: ISources;

        /** Access the Linecodes library in this circuit */
        readonly LineCodes: LineCodes;

        /** Complex total line losses in the circuit */
        readonly LineLosses: any;

        /** Returns Interface to Lines collection. */
        readonly Lines: Lines;

        /** Returns interface to Load element interface */
        readonly Loads: Loads;

        /** Interface to OpenDSS Load shapes currently defined. */
        readonly LoadShapes: LoadShapes;

        /** Total losses in active circuit, complex number (two-element array of double). */
        readonly Losses: any;

        /** Returns interface to Meters (EnergyMeter) collection. */
        readonly Meters: Meters;

        /** Returns interface to Monitors collection. */
        readonly Monitors: Monitors;

        /** Name of the active circuit. */
        readonly Name: string;

        /** Sets the next element of the active class to be the active element in the active circuit. Returns 0 if no more elements. */
        NextElement(): number;

        /** Gets next PC Element.  Returns 0 if no more. */
        NextPCElement(): number;

        /** Gets next PD Element. Returns 0 if no more. */
        NextPDElement(): number;

        /** Total number of Buses in the circuit. */
        readonly NumBuses: number;

        /** Number of CktElements in the circuit. */
        readonly NumCktElements: number;

        /** Total number of nodes in the circuit. */
        readonly NumNodes: number;

        /** Delivers a handler for the Parallel Dispatch interface */
        readonly Parallel: Parallel;

        /** Sets Parent PD element, if any, to be the active circuit element and returns index>0; Returns 0 if it fails or not applicable. */
        readonly ParentPDElement: number;

        /** Interface to PDElements collection */
        readonly PDElements: PDElements;

        /** Interface to PVSystems collection */
        readonly PVSystems: PVSystems;
        readonly Reclosers: Reclosers;

        /** Connect to the Circuit Reduction Interface */
        readonly ReduceCkt: ReduceCkt;

        /** Returns interfact to RegControls collection */
        readonly RegControls: RegControls;
        readonly Relays: Relays;

        /** Force all Meters and Monitors to take a sample. */
        Sample(): void;

        /** Force all meters and monitors to save their current buffers. */
        SaveSample(): void;

        /** Interface to Sensors in the Active Circuit. */
        readonly Sensors: Sensors;

        /** Sets Active bus by name. Ignores node list.  Returns bus index (zero based) compatible with AllBusNames and Buses collection. */
        SetActiveBus(BusName: string): number;

        /** Sets ActiveBus by Integer value.  0-based index compatible with SetActiveBus return value and AllBusNames indexing. Returns 0 if OK. */
        SetActiveBusi(BusIndex: number): number;

        /** Sets the active class by name.  Use FirstElement, NextElement to iterate through the class. Returns -1 if fails. */
        SetActiveClass(ClassName: string): number;

        /**
         * Sets the Active Circuit Element using the full object name (e.g. "generator.g1"). Returns -1 if not found. Else index to be used in CktElements
         * collection or AllElementNames.
         */
        SetActiveElement(FullName: string): number;

        /** Returns interface to Settings interface. */
        readonly Settings: Settings;

        /** Return an interface to the Solution object. */
        readonly Solution: Solution;

        /** Complex losses in all transformers designated to substations. */
        readonly SubstationLosses: any;

        /** Returns interface to SwtControls collection. */
        readonly SwtControls: SwtControls;

        /** System Y matrix (after a solution has been performed) */
        readonly SystemY: any;

        /** Interface to the active circuit's topology object. */
        readonly Topology: Topology;

        /** Total power, watts delivered to the circuit */
        readonly TotalPower: any;

        /** Returns interface to Transformers collection */
        readonly Transformers: Transformers;

        /** Forces update to all storage classes. Typically done after a solution. Done automatically in intrinsic solution modes. */
        UpdateStorage(): void;

        /** Vsources object collection */
        readonly Vsources: Vsources;

        /** Interface to XYCurves in active circuit. */
        readonly XYCurves: XYCurves;

        /** Variant array of doubles containing complex injection currents for the present solution. Is is the "I" vector of I=YV */
        readonly YCurrents: any;

        /** Variant array of strings containing the names of the nodes in the same order as the Y matrix */
        readonly YNodeOrder: any;

        /** Complex array of actual node voltages in same order as SystemY matrix. */
        readonly YNodeVarray: any;
    }

    /** CktElementObject */
    class CktElement {
        private "OpenDSSengine.CktElement_typekey": CktElement;
        private constructor();

        /** Variant array containing all property names of the active device. */
        readonly AllPropertyNames: any;

        /** Variant array of strings listing all the published variable names, if a PCElement. Otherwise, null string. */
        readonly AllVariableNames: any;

        /** Variant array of doubles. Values of state variables of active element if PC element. */
        readonly AllVariableValues: any;

        /** Variant array of strings. Get  Bus definitions to which each terminal is connected. 0-based array. */
        BusNames: any;

        /** Close the specified terminal and phase, if non-zero.  Else all conductors at terminal. */
        Close(Term: number, Phs: number): void;

        /** Full name of the i-th controller attached to this element. Ex: str = Controller(2).  See NumControls to determine valid index range */
        Controller(idx: number): string;

        /** Complex double array of Sequence Currents for all conductors of all terminals of active circuit element. */
        readonly CplxSeqCurrents: any;

        /** Complex double array of Sequence Voltage for all terminals of active circuit element. */
        readonly CplxSeqVoltages: any;

        /** Complex array of currents into each conductor of each terminal */
        readonly Currents: any;

        /** Currents in magnitude, angle format as a variant array of doubles. */
        readonly CurrentsMagAng: any;

        /** Display name of the object (not necessarily unique) */
        DisplayName: string;

        /** Emergency Ampere Rating for PD elements */
        EmergAmps: number;

        /** Boolean indicating that element is currently in the circuit. */
        Enabled: boolean;

        /** Name of the Energy Meter this element is assigned to. */
        readonly EnergyMeter: string;

        /** globally unique identifier for this object */
        readonly GUID: string;

        /** Pointer to this object */
        readonly Handle: number;

        /** True if a recloser, relay, or fuse controlling this ckt element. OCP = Overcurrent Protection  */
        readonly HasOCPDevice: boolean;

        /** This element has a SwtControl attached. */
        readonly HasSwitchControl: boolean;

        /** This element has a CapControl or RegControl attached. */
        readonly HasVoltControl: boolean;

        /** Boolean indicating if the specified terminal and, optionally, phase is open. */
        IsOpen(Term: number, Phs: number): boolean;

        /** Total losses in the element: two-element complex array */
        readonly Losses: any;

        /** Full Name of Active Circuit Element */
        readonly Name: string;

        /** Variant array of integer containing the node numbers (representing phases, for example) for each conductor of each terminal.  */
        readonly NodeOrder: any;

        /** Normal ampere rating for PD Elements */
        NormalAmps: number;

        /** Number of Conductors per Terminal */
        readonly NumConductors: number;

        /** Number of controls connected to this device. Use to determine valid range for index into Controller array. */
        readonly NumControls: number;

        /** Number of Phases */
        readonly NumPhases: number;

        /** Number of Properties this Circuit Element. */
        readonly NumProperties: number;

        /** Number of Terminals this Circuit Element */
        readonly NumTerminals: number;

        /** Index into Controller list of OCP Device controlling this CktElement */
        readonly OCPDevIndex: number;

        /** 0=None; 1=Fuse; 2=Recloser; 3=Relay;  Type of OCP controller device */
        readonly OCPDevType: number;

        /** Open the specified terminal and phase, if non-zero.  Else all conductors at terminal. */
        Open(Term: number, Phs: number): void;

        /** Complex array of losses by phase */
        readonly PhaseLosses: any;

        /** Complex array of powers into each conductor of each terminal */
        readonly Powers: any;

        /** Collection of Properties for this Circuit Element (0 based index, if numeric) */
        Properties(Indx: any): DSSProperty;

        /** Residual currents for each terminal: (mag, angle) */
        readonly Residuals: any;

        /** Double array of symmetrical component currents into each 3-phase terminal */
        readonly SeqCurrents: any;

        /** Double array of sequence powers into each 3-phase teminal */
        readonly SeqPowers: any;

        /** Double array of symmetrical component voltages at each 3-phase terminal */
        readonly SeqVoltages: any;

        /** Returns the total powers (complex) at ALL terminals of the active circuit element. */
        readonly TotalPowers: any;

        /** For PCElement, get the value of a variable by name. If Code>0 Then no variable by this name or not a PCelement. */
        Variable(MyVarName: string, Code: number): number;

        /** For PCElement, get the value of a variable by Index. If Code>0 Then no variable by this name or not a PCelement. */
        VariableByIndex(idx: number, Code: number): number;

        /** For PCElement, get the value of a variable by name. If Code>0 Then no variable by this name or not a PCelement. */
        VariableByName(MyVarName: string, Code: number): number;

        /** For PCElement, get the value of a variable by integer index. */
        Variablei(idx: number, Code: number): number;

        /** Gets the index of the active state variable if any, otherwise, returns -1 */
        VariableIdx: number;

        /** Gets the name of the active state variable if any, otherwise, returns and empty string */
        VariableName: string;

        /** Gets the  present value for the active state variable. If there no active variable, returns a error message. */
        VariableValue: number;

        /** Complex array of voltages at terminals */
        readonly Voltages: any;

        /** Voltages at each conductor in magnitude, angle form as variant array of doubles. */
        readonly VoltagesMagAng: any;

        /** YPrim matrix, column order, complex numbers (paired) */
        readonly Yprim: any;
    }

    /** CmathLib Object */
    class CmathLib {
        private "OpenDSSengine.CmathLib_typekey": CmathLib;
        private constructor();

        /** Return abs value of complex number given in real and imag doubles */
        cabs(RealPart: number, ImagPart: number): number;

        /** Returns the angle, in degrees, of a complex number specified as two doubles: Realpart and imagpart. */
        cdang(RealPart: number, ImagPart: number): number;

        /** Divide two complex number: (a1, b1)/(a2, b2). Returns variant array of two doubles representing complex result. */
        cdiv(a1: number, b1: number, a2: number, b2: number): any;

        /** Convert real and imaginary doubles to Variant array of doubles */
        cmplx(RealPart: number, ImagPart: number): any;

        /** Multiply two complex numbers: (a1, b1) * (a2, b2). Returns result as a variant array of two doubles. */
        cmul(a1: number, b1: number, a2: number, b2: number): any;

        /** Convert complex number to magnitude and angle, degrees. Returns variant array of two doubles. */
        ctopolardeg(RealPart: number, ImagPart: number): any;

        /** Convert magnitude, angle in degrees to a complex number. Returns Variant array of two doubles. */
        pdegtocomplex(magnitude: number, angle: number): any;
    }

    /** CtrlQueue */
    class CtrlQueue {
        private "OpenDSSengine.CtrlQueue_typekey": CtrlQueue;
        private constructor();

        /** Set the active action by index */
        readonly Action: number;

        /** Code for the active action. Long integer code to tell the control device what to do */
        readonly ActionCode: number;

        /** Clear the Action list. */
        ClearActions(): void;

        /** Clear control queue */
        ClearQueue(): void;

        /** Delete a control action from the DSS control queue by referencing the handle of the action */
        Delete(ActionHandle: number): void;

        /** Handle (User defined) to device that must act on the pending action. */
        readonly DeviceHandle: number;

        /** Do All Actions currently on the Control queue. Side effect: clears the queue */
        DoAllQueue(): void;

        /** Number of Actions on the current actionlist (that have been popped off the control queue by CheckControlActions) */
        readonly NumActions: number;

        /** Pops next action off the action list and makes it the active action. Returns zero if none. */
        readonly PopAction: number;

        /** Push a control action onto the DSS control queue by time, action code, and device handle (user defined). Returns Control Queue handle. */
        Push(Hour: number, Seconds: number, ActionCode: number, DeviceHandle: number): number;

        /** Variant array of strings containing the entire queue in CSV format */
        readonly Queue: any;

        /** Number of items on the OpenDSS control Queue */
        readonly QueueSize: number;

        /** Show entire control queue in CSV format */
        Show(): void;
    }

    /** DSS Main Object */
    class DSS {
        private "OpenDSSengine.DSS_typekey": DSS;
        private constructor();

        /** Returns interface to the active circuit. */
        readonly ActiveCircuit: Circuit;

        /** Returns interface to the active class. */
        readonly ActiveClass: ActiveClass;

        /** Default is TRUE. Use this to set to FALSE; Cannot reset to TRUE; */
        AllowForms: boolean;

        /** Collection of Circuit objects */
        Circuits(idx: any): Circuit;

        /** List of DSS intrinsic classes (names of the classes) */
        readonly Classes: any;

        /** Clears all circuit definitions. */
        ClearAll(): void;

        /** Returns an interface to the complex math library. */
        readonly CmathLib: CmathLib;

        /** DSS Data File Path.  Default path for reports, etc. from DSS */
        DataPath: string;

        /** Returns the path name for the default text editor. */
        readonly DefaultEditor: string;
        readonly DSSim_Coms: DSSimComs;

        /** Gets interface to the DSS Progress Meter */
        readonly DSSProgress: DSSProgress;

        /** Returns Error interface. */
        readonly Error: Error;

        /** Interface to the DSS Events */
        readonly Events: DSSEvents;

        /** Interface to DSS Executive commands and options */
        readonly Executive: DSS_Executive;

        /** Make a new circuit and return interface to active circuit. */
        NewCircuit(Name: string): Circuit;

        /** Number of Circuits currently defined */
        readonly NumCircuits: number;

        /** Number of DSS intrinsic classes */
        readonly NumClasses: number;

        /** Number of user-defined classes */
        readonly NumUserClasses: number;

        /** Returns interface to the OpenDSS Parser library for use by user-written programs. */
        readonly Parser: Parser;

        /** Resets DSS Initialization for restarts, etc from applets */
        Reset(): void;

        /** Sets the Active DSS Class for use with ActiveClass interface. Same as SetActiveClass in Circuit interface. */
        SetActiveClass(ClassName: string): number;

        /** Shows non-MDI child form of the Main DSS Edit Form */
        ShowPanel(): void;

        /** Validate the user and start the DSS. Returns TRUE if successful. */
        Start(Code: number): boolean;

        /** Returns the DSS Text (command-result) interface. */
        readonly Text: Text;

        /** List of user-defined classes */
        readonly UserClasses: any;

        /** Get version string for the DSS. */
        readonly Version: string;
    }

    /** DSS_Executive Object */
    class DSS_Executive {
        private "OpenDSSengine.DSS_Executive_typekey": DSS_Executive;
        private constructor();

        /** Get i-th command */
        Command(i: number): string;

        /** Get help string for i-th command */
        CommandHelp(i: number): string;

        /** Number of DSS Executive Commands */
        readonly NumCommands: number;

        /** Number of DSS Executive Options */
        readonly NumOptions: number;

        /** Get i-th option */
        Option(i: number): string;

        /** Get help string for i-th option */
        OptionHelp(i: number): string;

        /** Get present value of i-th option */
        OptionValue(i: number): string;
    }

    /** DSSElement Object */
    class DSSElement {
        private "OpenDSSengine.DSSElement_typekey": DSSElement;
        private constructor();

        /** Variant array of strings containing the names of all properties for the active DSS object. */
        readonly AllPropertyNames: any;

        /** Full Name of Active DSS Object (general element or circuit element). */
        readonly Name: string;

        /** Number of Properties for the active DSS object. */
        readonly NumProperties: number;

        /** Collection of properties for Active DSS object (general element or circuit element). */
        Properties(Indx: any): DSSProperty;
    }

    /** DSSEvents Object */
    class DSSEvents {
        private "OpenDSSengine.DSSEvents_typekey": DSSEvents;
        private constructor();
    }

    /** DSSimComs Object */
    class DSSimComs {
        private "OpenDSSengine.DSSimComs_typekey": DSSimComs;
        private constructor();

        /** This method delivers the voltage (complex) of the specified bus, this specification must be with a number (index) */
        BusVoltage(Index: number): any;

        /** This method delivers the voltage pu of the specified bus, this specification must be with a number (index) */
        BusVoltagepu(Index: number): any;
    }

    /** DSSProgress Object */
    class DSSProgress {
        private "OpenDSSengine.DSSProgress_typekey": DSSProgress;
        private constructor();

        /** Caption to appear on the bottom of the DSS Progress form. */
        readonly Caption: string;

        /** Closes (hides) DSS Progress form. */
        Close(): void;

        /** Percent progress to indicate [0..100] */
        readonly PctProgress: number;

        /** Shows progress form with null caption and progress set to zero. */
        Show(): void;
    }

    /** DSSProperty Object */
    class DSSProperty {
        private "OpenDSSengine.DSSProperty_typekey": DSSProperty;
        private constructor();

        /** Description of the property. */
        readonly Description: string;

        /** Name of Property */
        readonly Name: string;
        Val: string;
    }

    /** Error Object */
    class Error {
        private "OpenDSSengine.Error_typekey": Error;
        private constructor();

        /** Description of error for last operation */
        readonly Description: string;

        /** Error Number */
        readonly Number: number;
    }

    /** Fuses Object */
    class Fuses {
        private "OpenDSSengine.Fuses_typekey": Fuses;
        private constructor();

        /** Variant array of strings containing names of all Fuses in the circuit */
        readonly AllNames: any;

        /** Close all phases of the fuse. */
        Close(): void;

        /** Number of Fuse elements in the circuit */
        readonly Count: number;

        /** A fixed delay time in seconds added to the fuse blowing time determined by the TCC curve. Default is 0. */
        Delay: number;

        /** Set the first Fuse to be the active fuse. Returns 0 if none. */
        readonly First: number;

        /** Get/set active fuse by index into the list of fuses. 1 based: 1..count */
        idx: number;

        /** Current state of the fuses. TRUE if any fuse on any phase is blown. Else FALSE. */
        IsBlown(): boolean;

        /** Full name of the circuit element to which the fuse is connected. */
        MonitoredObj: string;

        /** Terminal number to which the fuse is connected. */
        MonitoredTerm: number;

        /** Get the name of the active Fuse element */
        Name: string;

        /** Advance the active Fuse element pointer to the next fuse. Returns 0 if no more fuses. */
        readonly Next: number;

        /** Variant array of strings indicating the normal state of each phase of the fuse. 0-based array. */
        NormalState: any;

        /** Number of phases, this fuse.  */
        readonly NumPhases: number;

        /** Manual opening of all phases of the fuse. */
        Open(): void;

        /** Multiplier or actual amps for the TCCcurve object. Defaults to 1.0.  Multipliy current values of TCC curve by this to get actual amps. */
        RatedCurrent: number;

        /** Reset fuse to normal state. */
        Reset(): void;

        /** Variant array of strings indicating the state of each phase of the fuse. 0-based array. */
        State: any;

        /** Full name of the circuit element switch that the fuse controls. Defaults to the MonitoredObj. */
        SwitchedObj: string;

        /** Number of the terminal containing the switch controlled by the fuse. */
        SwitchedTerm: number;

        /** Name of the TCCcurve object that determines fuse blowing. */
        TCCcurve: string;
    }

    /** Generators Object */
    class Generators {
        private "OpenDSSengine.Generators_typekey": Generators;
        private constructor();

        /** Array of names of all Generator objects. */
        readonly AllNames: any;

        /** Number of Generator Objects in Active Circuit */
        readonly Count: number;

        /** Sets first Generator to be active.  Returns 0 if none. */
        readonly First: number;

        /** Indicates whether the generator is forced ON regardles of other dispatch criteria. */
        ForcedON: boolean;

        /** Get/Set active Generator by index into generators list.  1..Count */
        idx: number;

        /** Voltage base for the active generator, kV */
        kV: number;

        /** kvar output for the active generator. Updates power factor based on present kW value. */
        kvar: number;

        /** kVA rating of the generator */
        kVArated: number;

        /** kW output for the active generator. kvar is updated for current power factor. */
        kW: number;

        /** Generator Model */
        Model: number;

        /** Sets a generator active by name. */
        Name: string;

        /** Sets next Generator to be active.  Returns 0 if no more. */
        readonly Next: number;

        /** Power factor (pos. = producing vars). Updates kvar based on present kW value. */
        PF: number;

        /** Number of phases */
        Phases: number;

        /** Array of Names of all generator energy meter registers */
        readonly RegisterNames: any;

        /** Array of valus in generator energy meter registers. */
        readonly RegisterValues: any;

        /** vmaxpu for Generator model */
        Vmaxpu: number;

        /** Vminpu for Generator model */
        Vminpu: number;
    }

    /** GICSources Object */
    class GICSources {
        private "OpenDSSengine.GICSources_typekey": GICSources;
        private constructor();

        /** All GICSourceNames */
        readonly AllNames: any;

        /** First bus name of GICSource (Created name) */
        readonly Bus1: string;

        /** Second bus name */
        readonly Bus2: string;
        readonly Count: number;

        /** Eastward E Field, V/km */
        EE: number;

        /** Northward E Field V/km */
        EN: number;

        /** Set first GIC Source Active */
        readonly First: number;

        /** Latitude of Bus1 (degrees) */
        Lat1: number;

        /** Latitude of Bus2 (degrees) */
        Lat2: number;

        /** Longitude of Bus1 */
        Lon1: number;

        /** Longitude of Bus2 (Degrees) */
        Lon2: number;
        Name: string;

        /** Set Next GICSource Active */
        readonly Next: number;
        Phases: number;

        /** Specify dc voltage directly */
        Volts: number;
    }

    /** ISource Object */
    class ISources {
        private "OpenDSSengine.ISources_typekey": ISources;
        private constructor();

        /** Variant array of strings containing names of all ISOURCE elements. */
        readonly AllNames: any;

        /** Get the magnitude of the ISOURCE in amps */
        Amps: number;

        /** Phase angle for ISOURCE, degrees */
        AngleDeg: number;

        /** Count: Number of ISOURCE elements. */
        readonly Count: number;

        /** Set the First ISOURCE to be active; returns Zero if none. */
        readonly First: number;

        /** The present frequency of the ISOURCE, Hz */
        Frequency: number;

        /** Get name of active ISOURCE */
        Name: string;

        /** Sets the next ISOURCE element to be the active one. Returns Zero if no more. */
        readonly Next: number;
    }

    /** LineCodes Object */
    class LineCodes {
        private "OpenDSSengine.LineCodes_typekey": LineCodes;
        private constructor();

        /** Variant array of strings with names of all devices */
        readonly AllNames: any;

        /** Zero-sequence capacitance, nF per unit length */
        C0: number;

        /** Positive-sequence capacitance, nF per unit length */
        C1: number;

        /** Capacitance matrix, nF per unit length */
        Cmatrix: any;

        /** Number of LineCodes */
        readonly Count: number;

        /** Emergency ampere rating */
        EmergAmps: number;
        readonly First: number;

        /** Flag denoting whether impedance data were entered in symmetrical components */
        readonly IsZ1Z0: boolean;

        /** Name of active LineCode */
        Name: string;
        readonly Next: number;

        /** Normal Ampere rating */
        NormAmps: number;

        /** Number of Phases */
        Phases: number;

        /** Zero-Sequence Resistance, ohms per unit length */
        R0: number;

        /** Positive-sequence resistance ohms per unit length */
        R1: number;

        /** Resistance matrix, ohms per unit length */
        Rmatrix: any;
        Units: number;

        /** Zero Sequence Reactance, Ohms per unit length */
        X0: number;

        /** Posiive-sequence reactance, ohms per unit length */
        X1: number;

        /** Reactance matrix, ohms per unit length */
        Xmatrix: any;
    }

    /** Lines Object */
    class Lines {
        private "OpenDSSengine.Lines_typekey": Lines;
        private constructor();

        /** Names of all Line Objects */
        readonly AllNames: any;

        /** Name of bus for terminal 1. */
        Bus1: string;

        /** Name of bus for terminal 2. */
        Bus2: string;

        /** Zero Sequence capacitance, nanofarads per unit length. */
        C0: number;

        /** Positive Sequence capacitance, nanofarads per unit length. */
        C1: number;
        Cmatrix: any;

        /** Number of Line objects in Active Circuit. */
        readonly Count: number;

        /** Emergency (maximum) ampere rating of Line. */
        EmergAmps: number;

        /** Invoking this property sets the first element active.  Returns 0 if no lines.  Otherwise, index of the line element. */
        readonly First: number;

        /** Line geometry code */
        Geometry: string;

        /** Length of line section in units compatible with the LineCode definition. */
        Length: number;

        /** Name of LineCode object that defines the impedances. */
        LineCode: string;

        /** Specify the name of the Line element to set it active. */
        Name: string;

        /** Creates a new Line and makes it the Active Circuit Element. */
        New(Name: string): number;

        /** Invoking this property advances to the next Line element active.  Returns 0 if no more lines.  Otherwise, index of the line element. */
        readonly Next: number;

        /** Normal ampere rating of Line. */
        NormAmps: number;

        /** Number of customers on this line section. */
        readonly NumCust: number;

        /** Sets Parent of the active Line to be the active line. Returns 0 if no parent or action fails. */
        readonly Parent: number;

        /** Number of Phases, this Line element. */
        Phases: number;

        /** Zero Sequence resistance, ohms per unit length. */
        R0: number;

        /** Positive Sequence resistance, ohms per unit length. */
        R1: number;

        /** Earth return resistance value used to compute line impedances at power frequency */
        Rg: number;

        /** Earth Resistivity, m-ohms */
        Rho: number;

        /** Resistance matrix (full), ohms per unit length. Variant array of doubles. */
        Rmatrix: any;

        /** Delivers the rating for the current season (in Amps)  if the SeasonalRatings option is active */
        readonly SeasonRating: number;

        /** Line spacing code */
        Spacing: string;

        /** Total Number of customers served from this line section. */
        readonly TotalCust: number;
        Units: number;

        /** Zero Sequence reactance ohms per unit length. */
        X0: number;

        /** Positive Sequence reactance, ohms per unit length. */
        X1: number;

        /** Earth return reactance value used to compute line impedances at power frequency */
        Xg: number;
        Xmatrix: any;

        /** Yprimitive: Does Nothing at present on Put; Dangerous */
        Yprim: any;
    }

    /** Loads Object */
    class Loads {
        private "OpenDSSengine.Loads_typekey": Loads;
        private constructor();

        /** Variant array of strings containing all Load names */
        readonly AllNames: any;

        /** Factor for allocating loads by connected xfkva */
        AllocationFactor: number;

        /** Factor relates average to peak kw.  Used for allocation with kwh and kwhdays/ */
        Cfactor: number;

        /** A code number used to separate loads by class or group. No effect on the solution. */
        Class: number;

        /** Number of Load objects in active circuit. */
        readonly Count: number;

        /** Name of a loadshape with both Mult and Qmult, for CVR factors as a function of time. */
        CVRcurve: string;

        /** Percent reduction in Q for percent reduction in V. Must be used with dssLoadModelCVR. */
        CVRvars: number;

        /** Percent reduction in P for percent reduction in V. Must be used with dssLoadModelCVR. */
        CVRwatts: number;

        /** Name of the loadshape for a daily load profile. */
        daily: string;

        /** Name of the loadshape for a duty cycle simulation. */
        duty: string;

        /** Set first Load element to be active; returns 0 if none. */
        readonly First: number;

        /** Name of the growthshape curve for yearly load growth factors. */
        Growth: string;

        /** Sets active load by index into load list. 1..Count */
        idx: number;

        /** Delta loads are connected line-to-line. */
        IsDelta: boolean;

        /** Set kV rating for active Load. For 2 or more phases set Line-Line kV. Else actual kV across terminals. */
        kV: number;

        /** Base load kva. Also defined kw and kvar or pf input, or load allocation by kwh or xfkva. */
        kva: number;

        /** Set kvar for active Load. Updates PF based in present kW. */
        kvar: number;

        /** Set kW for active Load. Updates kvar based on present PF. */
        kW: number;

        /** kwh billed for this period. Can be used with Cfactor for load allocation. */
        kwh: number;

        /** Length of kwh billing period for average demand calculation. Default 30. */
        kwhdays: number;

        /** The Load Model defines variation of P and Q with voltage. */
        Model: LoadModels;

        /** Set active load by name. */
        Name: string;

        /** Sets next Load element to be active; returns 0 of none else index of active load. */
        readonly Next: number;

        /** Number of customers in this load, defaults to one. */
        NumCust: number;

        /** Average percent of nominal load in Monte Carlo studies; only if no loadshape defined for this load. */
        PctMean: number;
        pctSeriesRL: number;

        /** Percent standard deviation for Monte Carlo load studies; if there is no loadshape assigned to this load. */
        PctStdDev: number;

        /** Set Power Factor for Active Load. Specify leading PF as negative. Updates kvar based on kW value */
        PF: number;

        /** Relative Weighting factor for the active LOAD */
        RelWeight: number;

        /** Neutral resistance for wye-connected loads. */
        Rneut: number;

        /** Name of the sensor monitoring this load. */
        readonly Sensor: string;

        /** Name of harmonic current spectrrum shape. */
        Spectrum: string;

        /** Response to load multipliers: Fixed (growth only), Exempt (no LD curve), Variable (all). */
        Status: LoadStatus;

        /** Maximum per-unit voltage to use the load model. Above this, constant Z applies. */
        Vmaxpu: number;

        /** Minimum voltage for unserved energy (UE) evaluation. */
        Vminemerg: number;

        /** Minimum voltage for energy exceeding normal (EEN) evaluations. */
        Vminnorm: number;

        /** Minimum voltage to apply the load model. Below this, constant Z is used. */
        Vminpu: number;

        /** Rated service transformer kVA for load allocation, using AllocationFactor. Affects kW, kvar, and pf. */
        xfkVA: number;

        /** Neutral reactance for wye-connected loads. */
        Xneut: number;

        /** Name of yearly duration loadshape */
        Yearly: string;

        /** Array of 7  doubles with values for ZIPV property of the LOAD object */
        ZIPV: any;
    }

    /** LoadShapes Object */
    class LoadShapes {
        private "OpenDSSengine.LoadShapes_typekey": LoadShapes;
        private constructor();

        /** Variant array of strings containing names of all Loadshape objects currently defined. */
        readonly AllNames: any;

        /** Number of Loadshape objects currently defined in Loadshape collection */
        readonly Count: number;

        /** Set the first loadshape active and return integer index of the loadshape. Returns 0 if none. */
        readonly First: number;

        /** Fixed interval time value, hours */
        HrInterval: number;

        /** Fixed Interval time value, in minutes */
        MinInterval: number;

        /** Get the Name of the active Loadshape */
        Name: string;

        /** Make a new Loadshape */
        New(Name: string): number;

        /** Advance active Loadshape to the next on in the collection. Returns 0 if no more loadshapes. */
        readonly Next: number;

        /** Normalize the P and Q curves based on either Pbase, Qbase or simply the peak value of the curve. */
        Normalize(): void;

        /** Get Number of points in active Loadshape. */
        Npts: number;

        /** Base for normalizing P curve. If left at zero, the peak value is used. */
        Pbase: number;

        /** Variant array of Doubles for the P multiplier in the Loadshape. */
        Pmult: any;

        /** Base for normalizing Q curve. If left at zero, the peak value is used. */
        Qbase: number;

        /** Variant array of doubles containing the Q multipliers. */
        Qmult: any;

        /** Fixed interval data time interval, seconds */
        Sinterval: number;

        /** Time array in hours correscponding to P and Q multipliers when the Interval=0. */
        TimeArray: any;

        /** T/F flag to let Loads know to use the actual value in the curve rather than use the value as a multiplier. */
        UseActual: boolean;
    }

    /** Meters Object */
    class Meters {
        private "OpenDSSengine.Meters_typekey": Meters;
        private constructor();

        /** Wide string list of all branches in zone of the active energymeter object. */
        readonly AllBranchesInZone: any;

        /** Variant array of names of all zone end elements. */
        readonly AllEndElements: any;

        /** Array of all energy Meter names */
        readonly AllNames: any;

        /** Array of doubles: set the phase allocation factors for the active meter. */
        AllocFactors: any;

        /** Average Repair time in this section of the meter zone */
        readonly AvgRepairTime: number;

        /** Set the magnitude of the real part of the Calculated Current (normally determined by solution) for the Meter to force some behavior on Load Allocation */
        CalcCurrent: any;

        /** Close All Demand Interval Files ( Necessary at the end of a run) */
        CloseAllDIFiles(): void;

        /** Number of Energy Meters in the Active Circuit */
        readonly Count: number;

        /** Number of branches in Active energymeter zone. (Same as sequencelist size) */
        readonly CountBranches: number;

        /** Number of zone end elements in the active meter zone. */
        readonly CountEndElements: number;

        /** Total customer interruptions for this Meter zone based on reliability calcs. */
        readonly CustInterrupts: number;

        /** Global Flag in the DSS to indicate if Demand Interval (DI) files have been properly opened. */
        readonly DIFilesAreOpen: boolean;

        /** Calculate SAIFI, etc. */
        DoReliabilityCalc(AssumeRestoration: boolean): void;

        /** Sum of Fault Rate time Repair Hrs in this section of the meter zone */
        readonly FaultRateXRepairHrs: number;

        /** Set the first energy Meter active. Returns 0 if none. */
        readonly First: number;

        /** Set Name of metered element */
        MeteredElement: string;

        /** set Number of Metered Terminal */
        MeteredTerminal: number;

        /** Get/Set the active meter  name. */
        Name: string;

        /** Sets the next energy Meter active.  Returns 0 if no more. */
        readonly Next: number;

        /** Number of branches (lines) in this section */
        readonly NumSectionBranches: number;

        /** Number of Customers in the active section. */
        readonly NumSectionCustomers: number;

        /** Number of feeder sections in this meter's zone */
        readonly NumSections: number;

        /** Type of OCP device. 1=Fuse; 2=Recloser; 3=Relay */
        readonly OCPDeviceType: number;

        /** Open Demand Interval (DI) files */
        OpenAllDIFiles(): void;

        /** Array of doubles to set values of Peak Current property */
        Peakcurrent: any;

        /** Array of strings containing the names of the registers. */
        readonly RegisterNames: any;

        /** Array of all the values contained in the Meter registers for the active Meter. */
        readonly RegisterValues: any;

        /** Resets registers of active Meter. */
        Reset(): void;

        /** Resets registers of all Meter objects. */
        ResetAll(): void;

        /** SAIDI for this meter's zone. Execute DoReliabilityCalc first. */
        readonly SAIDI: number;

        /** Returns SAIFI for this meter's Zone. Execute Reliability Calc method first. */
        readonly SAIFI: number;

        /** SAIFI based on kW rather than number of customers. Get after reliability calcs. */
        readonly SAIFIKW: number;

        /** Forces active Meter to take a sample. */
        Sample(): void;

        /** Causes all EnergyMeter objects to take a sample at the present time */
        SampleAll(): void;

        /** Saves meter register values. */
        Save(): void;

        /** Save All EnergyMeter objects */
        SaveAll(): void;

        /** SequenceIndex of the branch at the head of this section */
        readonly SectSeqIdx: number;

        /** Total Customers downline from this section */
        readonly SectTotalCust: number;

        /** Size of Sequence List */
        readonly SeqListSize: number;

        /**
         * Get/set Index into Meter's SequenceList that contains branch pointers in lexical order. Earlier index guaranteed to be upline from later index. Sets
         * PDelement active.
         */
        SequenceIndex: number;

        /** Sets the designated section active if the index is valiid. */
        SetActiveSection(SectIdx: number): void;

        /** Sum of the branch fault rates in this section of the meter's zone */
        readonly SumBranchFltRates: number;

        /** Total Number of customers in this zone (downline from the EnergyMeter) */
        readonly TotalCustomers: number;

        /** Totals of all registers of all meters */
        readonly Totals: any;

        /** Returns the list of all PCE within the area covered by the EM */
        readonly ZonePCE: any;
    }

    /** Monitors Object */
    class Monitors {
        private "OpenDSSengine.Monitors_typekey": Monitors;
        private constructor();

        /** Array of all Monitor Names */
        readonly AllNames: any;

        /** Byte Array containing monitor stream values. Make sure a "save" is done first (standard solution modes do this automatically) */
        readonly ByteStream: any;

        /**
         * Variant array of doubles for the specified channel  (usage: MyArray = DSSMonitor.Channel(i)) A Save or SaveAll  should be executed first. Done
         * automatically by most standard solution modes.
         */
        Channel(Index: number): any;

        /** Number of Monitors */
        readonly Count: number;

        /** Variant array of doubles containing frequency values for harmonics mode solutions; Empty for time mode solutions (use dblHour) */
        readonly dblFreq: any;

        /**
         * Variant array of doubles containgin time value in hours for time-sampled monitor values; Empty if frequency-sampled values for harmonics solution
         * (see dblFreq)
         */
        readonly dblHour: any;

        /** Full object name of element being monitored. */
        Element: string;

        /** Name of CSV file associated with active Monitor. */
        readonly FileName: string;

        /** Monitor File Version (integer) */
        readonly FileVersion: number;

        /** Sets the first Monitor active.  Returns 0 if no monitors. */
        readonly First: number;

        /** Header string;  Variant array of strings containing Channel names */
        readonly Header: any;

        /** Set Monitor mode (bitmask integer - see DSS Help) */
        Mode: number;

        /** Sets the active Monitor object by name */
        Name: string;

        /** Sets next monitor active.  Returns 0 if no more. */
        readonly Next: number;

        /** Number of Channels in the active Monitor */
        readonly NumChannels: number;

        /** Post-process monitor samples taken so far, e.g., Pst for mode=4 */
        Process(): void;

        /** All monitors post-process the data taken so far. */
        ProcessAll(): void;

        /** Size of each record in ByteStream (Integer). Same as NumChannels. */
        readonly RecordSize: number;

        /** Resets active Monitor object. */
        Reset(): void;

        /** Resets all Monitor Objects */
        ResetAll(): void;

        /** Causes active Monitor to take a sample. */
        Sample(): void;

        /** Causes all Monitors to take a sample of the present state */
        SampleAll(): void;

        /** Number of Samples in Monitor at Present */
        readonly SampleCount: number;

        /**
         * Causes active monitor to save its current sample buffer to its monitor stream. Then you can access the Bytestream or channel data. Most standard
         * solution modes do this automatically.
         */
        Save(): void;

        /** Save all Monitor buffers to their respective file streams. */
        SaveAll(): void;

        /** Converts monitor file to text and displays with text editor */
        Show(): void;

        /** Terminal number of element being monitored */
        Terminal: number;
    }

    class Parallel {
        private "OpenDSSengine.Parallel_typekey": Parallel;
        private constructor();

        /** Gets the ID of the Active Actor */
        ActiveActor: number;

        /** Sets ON/OFF (1/0) Parallel features of the Engine */
        ActiveParallel: number;

        /** Gets the CPU of the Active Actor */
        ActorCPU: number;

        /** Gets the progress of all existing actors in pct */
        readonly ActorProgress: any;

        /** Gets the status of each actor */
        readonly ActorStatus: any;

        /** Reads the values of the ConcatenateReports option (1=enabled, 0=disabled) */
        ConcatenateReports: number;

        /** Creates a New Actor */
        CreateActor(): void;

        /** Delivers the number of Cores of the local PC */
        readonly NumCores: number;

        /** Delivers the number of CPUs on the current PC */
        readonly NumCPUs: number;

        /** Gets the number of Actors created */
        readonly NumOfActors: number;

        /** Waits until all actors have finised their tasks */
        Wait(): void;
    }

    /** Parser Object */
    class Parser {
        private "OpenDSSengine.Parser_typekey": Parser;
        private constructor();

        /**
         * Default is FALSE. If TRUE parser automatically advances to next token after DblValue, IntValue, or StrValue. Simpler when you don't need to check for
         * parameter names.
         */
        AutoIncrement: boolean;

        /** Get String containing the the characters for Quoting in OpenDSS scripts. Matching pairs defined in EndQuote. Default is "'([{. */
        BeginQuote: string;

        /** String to be parsed. Loading this string resets the Parser to the beginning of the line. Then parse off the tokens in sequence. */
        CmdString: string;

        /** Return next parameter as a double. */
        readonly DblValue: number;

        /**
         * String defining hard delimiters used to separate token on the command string. Default is , and =. The = separates token name from token value. These
         * override whitesspace to separate tokens.
         */
        Delimiters: string;

        /** String containing characters, in order, that match the beginning quote characters in BeginQuote. Default is "')]} */
        EndQuote: string;

        /** Return next parameter as a long integer. */
        readonly IntValue: number;

        /**
         * Use this property to parse a Matrix token in OpenDSS format.  Returns square matrix of order specified. Order same as default Fortran order: column by
         * column.
         */
        Matrix(ExpectedOrder: number): any;

        /** Get next token and return tag name (before = sign) if any. See AutoIncrement. */
        readonly NextParam: string;

        /** Reset delimiters to their default values. */
        ResetDelimiters(): void;

        /** Return next parameter as a string */
        readonly StrValue: string;

        /** Use this property to parse a matrix token specified in lower triangle form. Symmetry is forced. */
        SymMatrix(ExpectedOrder: number): any;

        /** Returns token as variant array of doubles. For parsing quoted array syntax. */
        Vector(ExpectedSize: number): any;

        /** Get the characters used for White space in the command string.  Default is blank and Tab. */
        WhiteSpace: string;
    }

    /** PDElements Object */
    class PDElements {
        private "OpenDSSengine.PDElements_typekey": PDElements;
        private constructor();

        /** accummulated failure rate for this branch on downline */
        readonly AccumulatedL: number;

        /** Number of PD elements (including disabled elements) */
        readonly Count: number;

        /** Get/Set Number of failures per year. For LINE elements: Number of failures per unit length per year.  */
        FaultRate: number;

        /** Set the first enabled PD element to be the active element.  Returns 0 if none found. */
        readonly First: number;

        /** Number of the terminal of active PD element that is on the "from" side. This is set after the meter zone is determined. */
        readonly FromTerminal: number;

        /**
         * Variant boolean indicating of PD element should be treated as a shunt element rather than a series element. Applies to Capacitor and Reactor elements
         * in particular.
         */
        readonly IsShunt: boolean;

        /** Failure rate for this branch. Faults per year including length of line. */
        readonly Lambda: number;

        /** Get/Set name of active PD Element. Returns null string if active element is not PDElement type. */
        Name: string;

        /** Advance to the next PD element in the circuit. Enabled elements only. Returns 0 when no more elements. */
        readonly Next: number;

        /** Number of customers, this branch */
        readonly Numcustomers: number;

        /** Sets the parent PD element to be the active circuit element.  Returns 0 if no more elements upline. */
        readonly ParentPDElement: number;

        /** Get/Set percent of faults that are permanent (require repair). Otherwise, fault is assumed to be transient/temporary. */
        pctPermanent: number;

        /** Average repair time for this element in hours */
        RepairTime: number;

        /** Integer ID of the feeder section that this PDElement branch is part of */
        readonly SectionID: number;

        /** Total number of customers from this branch to the end of the zone */
        readonly TotalCustomers: number;

        /** Total miles of line from this element to the end of the zone. For recloser siting algorithm. */
        readonly TotalMiles: number;
    }

    /** PVSystems Object */
    class PVSystems {
        private "OpenDSSengine.PVSystems_typekey": PVSystems;
        private constructor();

        /** Vairant array of strings with all PVSystem names */
        readonly AllNames: any;

        /** Number of PVSystems */
        readonly Count: number;

        /** Set first PVSystem active; returns 0 if none. */
        readonly First: number;

        /** Get/set active PVSystem by index;  1..Count */
        idx: number;

        /** Get the present value of the Irradiance property in W/sq-m */
        Irradiance: number;

        /** Returns the current irradiance value for the active PVSystem. Use it to know what's the current irradiance value for the PV during a simulation. */
        readonly IrradianceNow: number;

        /** Get kvar value */
        kvar: number;

        /** Get Rated kVA of the PVSystem */
        kVArated: number;

        /** get kW output */
        readonly kW: number;

        /** Get the name of the active PVSystem */
        Name: string;

        /** Sets next PVSystem active; returns 0 if no more. */
        readonly Next: number;

        /** Get Power factor  */
        PF: number;

        /** Gets the rated max power of the PV array for 1.0 kW/sq-m irradiance and a user-selected array temperature of the active PVSystem. */
        Pmpp: number;

        /** Variant Array of PVSYSTEM energy meter register names */
        readonly RegisterNames: any;

        /** Variant array of doubles containing values in PVSystem registers. */
        readonly RegisterValues: any;

        /** Name of the sensor monitoring this element. */
        readonly Sensor: string;
    }

    /** Reclosers Object */
    class Reclosers {
        private "OpenDSSengine.Reclosers_typekey": Reclosers;
        private constructor();

        /** Variant array of strings with names of all Reclosers in Active Circuit */
        readonly AllNames: any;

        /** Close the switched object controlled by the recloser. Resets recloser to first operation. */
        Close(): void;

        /** Number of Reclosers in active circuit. */
        readonly Count: number;

        /** Set First Recloser to be Active Ckt Element. Returns 0 if none. */
        readonly First: number;

        /** Ground (3I0) instantaneous trip setting - curve multipler or actual amps. */
        GroundInst: number;

        /** Ground (3I0) trip multiplier or actual amps */
        GroundTrip: number;

        /** Get/Set the active Recloser by index into the recloser list.  1..Count */
        idx: number;

        /** Full name of object this Recloser is monitoring. */
        MonitoredObj: string;

        /** Terminal number of Monitored object for the Recloser  */
        MonitoredTerm: number;

        /** Get Name of active Recloser or set the active Recloser by name. */
        Name: string;

        /** Iterate to the next recloser in the circuit. Returns zero if no more. */
        readonly Next: number;

        /** Get normal state of recloser. */
        NormalState: ActionCodes;

        /** Number of fast shots */
        NumFast: number;

        /** Open recloser's controlled element and lock out the recloser. */
        Open(): void;

        /** Phase instantaneous curve multipler or actual amps */
        PhaseInst: number;

        /** Phase trip curve multiplier or actual amps */
        PhaseTrip: number;

        /** Variant Array of Doubles: reclose intervals, s, between shots. */
        readonly RecloseIntervals: any;

        /** Reset recloser to normal state. If open, lock out the recloser. If closed, resets recloser to first operation.   */
        Reset(): void;

        /** Number of shots to lockout (fast + delayed) */
        Shots: number;

        /**
         * Get/Set present state of recloser. If set to open, open recloser's controlled element and lock out the recloser. If set to close, close recloser's
         * controlled element and resets recloser to first operation.
         */
        State: ActionCodes;

        /** Full name of the circuit element that is being switched by the Recloser. */
        SwitchedObj: string;

        /** Terminal number of the controlled device being switched by the Recloser */
        SwitchedTerm: number;
    }

    /** Reduce Object */
    class ReduceCkt {
        private "OpenDSSengine.ReduceCkt_typekey": ReduceCkt;
        private constructor();

        /** Eliminate all 1-phase laterals in the circuit */
        Do1phLaterals(): void;
        DoBranchRemove(): void;

        /** Reduce Dangling Algorithm; branches with nothing connected */
        DoDangling(): void;

        /** Do Default Reduction algorithm */
        DoDefault(): void;
        DoLoopBreak(): void;
        DoParallelLines(): void;

        /** Do ShortLines algorithm: Set Zmag first if you don't want the default */
        DoShortLines(): void;
        DoSwitches(): void;

        /** Edit String for Remove Branches function */
        EditString: string;

        /** Name of Energymeter to use for reduction */
        EnergyMeter: string;

        /** Keep load flag (T/F) for Reduction options that remove branches */
        KeepLoad: boolean;

        /** Save present (reduced) circuit */
        SaveCircuit(CktName: string): void;

        /** Start element for Remove Branch functions */
        StartPDElement: string;

        /** Zmag for Short Line Reduction Algorithm */
        Zmag: number;
    }

    class RegControls {
        private "OpenDSSengine.RegControls_typekey": RegControls;
        private constructor();

        /** Variant array of strings containing all RegControl names */
        readonly AllNames: any;

        /** Number of RegControl objects in Active Circuit */
        readonly Count: number;

        /** CT primary ampere rating (secondary is 0.2 amperes) */
        CTPrimary: number;

        /** Time delay [s] after arming before the first tap change. Control may reset before actually changing taps. */
        Delay: number;

        /** Sets the first RegControl active. Returns 0 if none. */
        readonly First: number;

        /** Regulation bandwidth in forward direciton, centered on Vreg */
        ForwardBand: number;

        /** LDC R setting in Volts */
        ForwardR: number;

        /** Target voltage in the forward direction, on PT secondary base. */
        ForwardVreg: number;

        /** LDC X setting in Volts */
        ForwardX: number;

        /** Time delay is inversely adjusted, proportional to the amount of voltage outside the regulating band. */
        IsInverseTime: boolean;

        /** Regulator can use different settings in the reverse direction.  Usually not applicable to substation transformers. */
        IsReversible: boolean;

        /** Maximum tap change per iteration in STATIC solution mode. 1 is more realistic, 16 is the default for a faster soluiton. */
        MaxTapChange: number;

        /** Name of a remote regulated bus, in lieu of LDC settings */
        MonitoredBus: string;

        /** Get/set Active RegControl  name */
        Name: string;

        /** Sets the next RegControl active. Returns 0 if none. */
        readonly Next: number;

        /** PT ratio for voltage control settings */
        PTratio: number;

        /** Force Reset of this RegControl element */
        Reset(): void;

        /** Bandwidth in reverse direction, centered on reverse Vreg. */
        ReverseBand: number;

        /** Reverse LDC R setting in Volts. */
        ReverseR: number;

        /** Target voltage in the revese direction, on PT secondary base. */
        ReverseVreg: number;

        /** Reverse LDC X setting in volts. */
        ReverseX: number;

        /** Time delay [s] for subsequent tap changes in a set. Control may reset before actually changing taps. */
        TapDelay: number;
        TapNumber: number;

        /** Tapped winding number */
        TapWinding: number;

        /** Name of the transformer this regulator controls */
        Transformer: string;

        /** First house voltage limit on PT secondary base.  Setting to 0 disables this function. */
        VoltageLimit: number;

        /** Winding number for PT and CT connections */
        Winding: number;
    }

    /** Relays Object */
    class Relays {
        private "OpenDSSengine.Relays_typekey": Relays;
        private constructor();

        /** Variant array of strings containing names of all Relay elements */
        readonly AllNames: any;

        /** Close the switched object controlled by the relay. Resets relay to first operation. */
        Close(): void;

        /** Number of Relays in circuit */
        readonly Count: number;

        /** Set First Relay active. If none, returns 0. */
        readonly First: number;

        /** Get/Set active Relay by index into the Relay list. 1..Count */
        idx: number;

        /** Full name of object this Relay is monitoring. */
        MonitoredObj: string;

        /** Number of terminal of monitored element that this Relay is monitoring. */
        MonitoredTerm: number;

        /** Get name of active relay. */
        Name: string;

        /** Advance to next Relay object. Returns 0 when no more relays. */
        readonly Next: number;

        /** Get normal state of relay. */
        NormalState: ActionCodes;

        /** Open relay's controlled element and lock out the relay. */
        Open(): void;

        /** Reset relay to normal state. If open, lock out the relay. If closed, resets relay to first operation.   */
        Reset(): void;

        /**
         * Get/Set present state of relay. If set to open, open relay's controlled element and lock out the relay. If set to close, close relay's controlled
         * element and resets relay to first operation.
         */
        State: ActionCodes;

        /** Full name of element that will be switched when relay trips. */
        SwitchedObj: string;
        SwitchedTerm: number;
    }

    /** Sensors Object */
    class Sensors {
        private "OpenDSSengine.Sensors_typekey": Sensors;
        private constructor();

        /** Variant array of Sensor names. */
        readonly AllNames: any;

        /** Array of doubles for the allocation factors for each phase.  */
        readonly AllocationFactor: any;

        /** Number of Sensors in Active Circuit. */
        readonly Count: number;

        /** Array of doubles for the line current measurements; don't use with kWS and kVARS. */
        Currents: any;

        /** Sets the first sensor active. Returns 0 if none. */
        readonly First: number;

        /** True if measured voltages are line-line. Currents are always line currents. */
        IsDelta: boolean;

        /** Array of doubles for Q measurements. Overwrites Currents with a new estimate using kWS. */
        kVARS: any;

        /** Voltage base for the sensor measurements. LL for 2 and 3-phase sensors, LN for 1-phase sensors. */
        kVBase: number;

        /** Array of doubles for the LL or LN (depending on Delta connection) voltage measurements. */
        kVS: any;

        /** Array of doubles for P measurements. Overwrites Currents with a new estimate using kVARS. */
        kWS: any;

        /** Full Name of the measured element */
        MeteredElement: string;

        /** Number of the measured terminal in the measured element. */
        MeteredTerminal: number;

        /** Name of the active sensor. */
        Name: string;

        /** Sets the next Sensor active. Returns 0 if no more. */
        readonly Next: number;

        /** Assumed percent error in the Sensor measurement. Default is 1. */
        PctError: number;

        /** Clear the active Sensor. */
        Reset(): void;

        /** Clear all Sensors in the Active Circuit. */
        ResetAll(): void;

        /** True if voltage measurements are 1-3, 3-2, 2-1. */
        ReverseDelta: boolean;

        /** Weighting factor for this Sensor measurement with respect to other Sensors. Default is 1. */
        Weight: number;
    }

    /** Settings Object */
    class Settings {
        private "OpenDSSengine.Settings_typekey": Settings;
        private constructor();

        /** Sets all load allocation factors for all loads defined by XFKVA property to this value. */
        readonly AllocationFactors: number;

        /** {True | False*} Designates whether to allow duplicate names of objects */
        AllowDuplicates: boolean;

        /** List of Buses or (File=xxxx) syntax for the AutoAdd solution mode. */
        AutoBusList: string;

        /** {dssMultiphase * | dssPositiveSeq} IIndicate if the circuit model is positive sequence. */
        CktModel: number;

        /** {True | False*} Denotes whether to trace the control actions to a file. */
        ControlTrace: boolean;

        /** Per Unit maximum voltage for Emergency conditions. */
        EmergVmaxpu: number;

        /** Per Unit minimum voltage for Emergency conditions. */
        EmergVminpu: number;

        /** Integer array defining which energy meter registers to use for computing losses */
        LossRegs: any;

        /** Weighting factor applied to Loss register values. */
        LossWeight: number;

        /** Per Unit maximum voltage for Normal conditions. */
        NormVmaxpu: number;

        /** Per Unit minimum voltage for Normal conditions. */
        NormVminpu: number;

        /** Name of LoadShape object that serves as the source of price signal data for yearly simulations, etc. */
        PriceCurve: string;

        /** Price Signal for the Circuit */
        PriceSignal: number;

        /** {True | False *} Gets value of trapezoidal integration flag in energy meters. */
        Trapezoidal: boolean;

        /** Array of Integers defining energy meter registers to use for computing UE */
        UEregs: any;

        /** Weighting factor applied to UE register values. */
        UEweight: number;

        /** Array of doubles defining the legal voltage bases in kV L-L */
        VoltageBases: any;

        /** {True | False*}  Locks Zones on energy meters to prevent rebuilding if a circuit change occurs. */
        ZoneLock: boolean;
    }

    /** Solution Object */
    class Solution {
        private "OpenDSSengine.Solution_typekey": Solution;
        private constructor();

        /** Type of device to add in AutoAdd Mode: {dssGen (Default) | dssCap} */
        AddType: number;

        /** Base Solution algorithm: {dssNormalSolve | dssNewtonSolve} */
        Algorithm: number;

        /** Force building of the System Y matrix */
        BuildYMatrix(BuildOption: number, AllocateVI: number): void;
        readonly BusLevels: any;

        /** Capacitor kvar for adding capacitors in AutoAdd mode */
        Capkvar: number;

        /** The normal process for sampling and executing Control Actions and Fault Status and rebuilds Y if necessary. */
        CheckControls(): void;

        /** Executes status check on all fault objects defined in the circuit. */
        CheckFaultStatus(): void;

        /** Update storage, invcontrol, etc at end of time step */
        Cleanup(): void;

        /** Flag indicating the control actions are done. */
        ControlActionsDone: boolean;

        /** Value of the control iteration counter */
        ControlIterations: number;

        /** {dssStatic* | dssEvent | dssTime}  Modes for control devices */
        ControlMode: number;

        /** Flag to indicate whether the circuit solution converged */
        Converged: boolean;

        /** Hour as a double, including fractional part */
        dblHour: number;

        /** Default daily load shape (defaults to "Default") */
        DefaultDaily: string;

        /** Default Yearly load shape (defaults to "Default") */
        DefaultYearly: string;

        /** Pops control actions off the control queue and dispatches to the proper control element */
        DoControlActions(): void;

        /** Array of strings containing the Event Log */
        readonly EventLog: any;

        /** Call Cleanup, sample monitors, and increment time at end of time step. */
        FinishTimeStep(): void;

        /** Set the Frequency for next solution */
        Frequency: number;

        /** Generator kW for AutoAdd mode */
        GenkW: number;

        /** Default Multiplier applied to generators (like LoadMult) */
        GenMult: number;

        /** PF for generators in AutoAdd mode */
        GenPF: number;

        /** Set Hour for time series solutions. */
        Hour: number;
        readonly IncMatrix: any;
        readonly IncMatrixCols: any;
        readonly IncMatrixRows: any;

        /** Initializes some variables for snap shot power flow. SolveSnap does this automatically. */
        InitSnap(): void;

        /** Get/Set the Solution.IntervalHrs variable used for devices that integrate */
        IntervalHrs: number;

        /** Number of iterations taken for last solution. (Same as TotalIterations) */
        readonly Iterations: number;
        readonly Laplacian: any;

        /** Load-Duration Curve name for LD modes */
        LDCurve: string;

        /** Load Model: {dssPowerFlow (default) | dssAdmittance} */
        LoadModel: number;

        /** Default load multiplier applied to all non-fixed loads */
        LoadMult: number;

        /** Maximum allowable control iterations */
        MaxControlIterations: number;

        /** Max allowable iterations. */
        MaxIterations: number;

        /** Minimum number of iterations required for a power flow solution. */
        MinIterations: number;

        /** Set present solution mode (by a text code - see DSS Help) */
        Mode: number;

        /** ID (text) of the present solution mode */
        readonly ModeID: string;

        /** Max number of iterations required to converge at any control iteration of the most recent solution. */
        readonly MostIterationsDone: number;

        /** Number of solutions to perform for Monte Carlo and time series simulations */
        Number: number;

        /** Percent default  annual load growth rate */
        pctGrowth: number;

        /** Gets the time required to perform the latest solution (Read only) */
        readonly Process_Time: number;

        /** Randomization mode for random variables "Gaussian" or "Uniform" */
        Random: number;

        /** Sample controls and then process the control queue for present control mode and dispatch control actions */
        Sample_DoControlActions(): void;

        /** Executes a sampling of all intrinsic control devices, which push control actions onto the control queue. */
        SampleControlDevices(): void;

        /** Seconds from top of the hour. */
        Seconds: number;

        /** Execute solution for present solution mode. */
        Solve(): void;

        /** Solves the circuits for all the Actors created */
        SolveAll(): void;

        /** Executes a direct solution from the system Y matrix, ignoring compensation currents of loads, generators (includes Yprim only) */
        SolveDirect(): void;

        /** Similar to SolveSnap except no control actions are checked or executed */
        SolveNoControl(): void;

        /** Solves using present power flow method. Iterative solution rather than direct solution. */
        SolvePflow(): void;

        /** Executes a power flow solution (SolveNoControl) plus executes a CheckControlActions that executes any pending control actions. */
        SolvePlusControl(): void;

        /** Execute the snapshot power flow routine in the DSS that solves at the present state with control actions */
        SolveSnap(): void;

        /** Time step size in sec */
        StepSize: number;

        /** Set Stepsize in Hr */
        readonly StepsizeHr: number;

        /** Set Stepsize in minutes */
        readonly StepsizeMin: number;

        /** Flag that indicates if elements of the System Y have been changed by recent activity. */
        readonly SystemYChanged: boolean;

        /** Get the solution process time + sample time for time step */
        readonly Time_of_Step: number;

        /** Solution convergence tolerance. */
        Tolerance: number;

        /** Gets the accumulated time of the simulation */
        Total_Time: number;

        /** Total iterations including control iterations for most recent solution. */
        readonly Totaliterations: number;

        /** Set year for planning studies */
        Year: number;
    }

    /** Storages Object */
    class Storages {
        private "OpenDSSengine.Storages_typekey": Storages;
        private constructor();

        /** Vairant array of strings with all Storage element names */
        readonly AllNames: any;

        /** Number of Storage Elements */
        readonly Count: number;

        /** Set first Storage element active; returns 0 if none. */
        readonly First: number;

        /** Get/Set Active Storage element by index:  1.. Count */
        idx: number;

        /** Name of active Storage element */
        Name: string;

        /** Sets next Storageelement active; returns 0 if no more. */
        readonly Next: number;

        /** Per unit state of charge */
        puSOC: number;

        /** Variant Array of Storage element energy meter register names */
        readonly RegisterNames: any;

        /** Variant array of doubles containing values in Storage Elementregisters. */
        readonly RegisterValues: any;

        /** Get/set state: 0=Idling; 1=Discharging; -1=Charging; */
        State: number;
    }

    class SwtControls {
        private "OpenDSSengine.SwtControls_typekey": SwtControls;
        private constructor();

        /** Open or Close the switch. No effect if switch is locked.  However, Reset removes any lock and then closes the switch (shelf state). */
        Action: ActionCodes;

        /** Variant array of strings with all SwtControl names in the active circuit. */
        readonly AllNames: any;
        readonly Count: number;

        /** Time delay [s] betwen arming and opening or closing the switch.  Control may reset before actually operating the switch. */
        Delay: number;

        /** Sets the first SwtControl active. Returns 0 if no more. */
        readonly First: number;

        /** The lock prevents both manual and automatic switch operation. */
        IsLocked: boolean;

        /** Sets a SwtControl active by Name. */
        Name: string;

        /** Sets the next SwtControl active. Returns 0 if no more. */
        readonly Next: number;

        /** Get Normal state of switch */
        NormalState: ActionCodes;

        /** Force a reset of this switch to NormalState, unlocked. Unlocks switch and calls Reset function. */
        Reset(): void;

        /** Force switch to specified state */
        State: ActionCodes;

        /** Full name of the switched element. */
        SwitchedObj: string;

        /** Terminal number where the switch is located on the SwitchedObj */
        SwitchedTerm: number;
    }

    /** Text Object */
    class Text {
        private "OpenDSSengine.Text_typekey": Text;
        private constructor();

        /** Input command string for the DSS. */
        Command: string;

        /** Result string for the last command. */
        readonly Result: string;
    }

    /** Topology Object */
    class Topology {
        private "OpenDSSengine.Topology_typekey": Topology;
        private constructor();

        /** Returns index of the active branch */
        readonly ActiveBranch: number;

        /** Topological depth of the active branch */
        readonly ActiveLevel: number;

        /** Variant array of all isolated branch names. */
        readonly AllIsolatedBranches: any;

        /** Variant array of all isolated load names. */
        readonly AllIsolatedLoads: any;

        /** Variant array of all looped element names, by pairs. */
        readonly AllLoopedPairs: any;

        /** MOve back toward the source, return index of new active branch, or 0 if no more. */
        readonly BackwardBranch: number;

        /** Name of the active branch. */
        BranchName: string;
        BusName: string;

        /** Sets the first branch active, returns 0 if none. */
        readonly First: number;

        /** First load at the active branch, return index or 0 if none. */
        readonly FirstLoad: number;

        /** Move forward in the tree, return index of new active branch or 0 if no more */
        readonly ForwardBranch: number;

        /** Move to looped branch, return index or 0 if none. */
        readonly LoopedBranch: number;

        /** Sets the next branch active, returns 0 if no more. */
        readonly Next: number;

        /** Next load at the active branch, return index or 0 if no more. */
        readonly NextLoad: number;

        /** Number of isolated branches (PD elements and capacitors). */
        readonly NumIsolatedBranches: number;

        /** Number of isolated loads */
        readonly NumIsolatedLoads: number;

        /** Number of loops */
        readonly NumLoops: number;

        /** Move to directly parallel branch, return index or 0 if none. */
        readonly ParallelBranch: number;
    }

    class Transformers {
        private "OpenDSSengine.Transformers_typekey": Transformers;
        private constructor();

        /** Variant array of strings with all Transformer names in the active circuit. */
        readonly AllNames: any;

        /** Transformer Core Type: 0=shell;1 = 1-phase; 3= 3-leg; 5= 5-leg */
        CoreType: number;
        readonly Count: number;

        /** Sets the first Transformer active. Returns 0 if no more. */
        readonly First: number;

        /** Active Winding delta or wye connection? */
        IsDelta: boolean;

        /** Active Winding kV rating.  Phase-phase for 2 or 3 phases, actual winding kV for 1 phase transformer. */
        kV: number;

        /** Active Winding kVA rating. On winding 1, this also determines normal and emergency current ratings for all windings. */
        kva: number;

        /** Active Winding maximum tap in per-unit. */
        MaxTap: number;

        /** Active Winding minimum tap in per-unit. */
        MinTap: number;

        /** Sets a Transformer active by Name. */
        Name: string;

        /** Sets the next Transformer active. Returns 0 if no more. */
        readonly Next: number;

        /** Active Winding number of tap steps betwein MinTap and MaxTap. */
        NumTaps: number;

        /** Number of windings on this transformer. Allocates memory; set or change this property first. */
        NumWindings: number;

        /** Active Winding resistance in % */
        R: number;
        RdcOhms: number;

        /** Active Winding neutral resistance [ohms] for wye connections. Set less than zero for ungrounded wye. */
        Rneut: number;

        /** All winding currents in CSV string form like the WdgCurrents property */
        readonly strWdgCurrents: string;

        /** Active Winding tap in per-unit. */
        Tap: number;

        /** Active Winding Number from 1..NumWindings. Update this before reading or setting a sequence of winding properties (R, Tap, kV, kVA, etc.) */
        Wdg: number;

        /** All Winding currents (ph1, wdg1, wdg2,... ph2, wdg1, wdg2 ...) */
        readonly WdgCurrents: any;

        /** Complex array of voltages for active winding */
        readonly WdgVoltages: any;

        /** Name of an XfrmCode that supplies electircal parameters for this Transformer. */
        XfmrCode: string;

        /** Percent reactance between windings 1 and 2, on winding 1 kVA base. Use for 2-winding or 3-winding transformers. */
        Xhl: number;

        /** Percent reactance between windigns 1 and 3, on winding 1 kVA base.  Use for 3-winding transformers only. */
        Xht: number;

        /** Percent reactance between windings 2 and 3, on winding 1 kVA base. Use for 3-winding transformers only. */
        Xlt: number;

        /** Active Winding neutral reactance [ohms] for wye connections. */
        Xneut: number;
    }

    /** Vsources Object */
    class Vsources {
        private "OpenDSSengine.Vsources_typekey": Vsources;
        private constructor();

        /** Names of all Vsource objects in the circuit */
        readonly AllNames: any;

        /** Phase angle of first phase in degrees */
        AngleDeg: number;

        /** Source Voltage in kV */
        BasekV: number;

        /** Number of Vsource Object */
        readonly Count: number;

        /** Sets the first VSOURCE to be active; Returns 0 if none */
        readonly First: number;

        /** Source Frequency in Hz */
        Frequency: number;

        /** Get Active VSOURCE name */
        Name: string;

        /** Sets the next VSOURCE object to be active; returns zero if no more */
        readonly Next: number;

        /** Number of Phases */
        Phases: number;

        /** Source pu voltage. */
        pu: number;
    }

    /** XYCurves Object */
    class XYCurves {
        private "OpenDSSengine.XYCurves_typekey": XYCurves;
        private constructor();

        /** Number of XYCurve Objects */
        readonly Count: number;

        /** Sets first XYcurve object active; returns 0 if none. */
        readonly First: number;

        /** Name of active XYCurve Object */
        Name: string;

        /** Advances to next XYCurve object; returns 0 if no more objects of this class */
        readonly Next: number;

        /** Get/Set Number of points in X-Y curve */
        Npts: number;

        /** Set X value or get interpolated value after setting Y */
        x: number;

        /** Get/Set X values as a Variant array of doubles. Set Npts to max number expected if setting */
        Xarray: any;

        /** Factor to scale X values from original curve */
        Xscale: number;

        /** Amount to shift X value from original curve */
        Xshift: number;

        /** Y value for present X or set this value then get corresponding X */
        y: number;

        /** Get/Set Y values in curve; Set Npts to max number expected if setting */
        Yarray: any;

        /** Factor to scale Y values from original curve */
        Yscale: number;

        /** amount to shift Y valiue from original curve */
        Yshift: number;
    }
}

interface ActiveXObject {
    on(
        obj: OpenDSSengine.DSSEvents,
        event: "CheckControls" | "InitControls" | "StepControls",
        handler: (this: OpenDSSengine.DSSEvents, parameter: {}) => void,
    ): void;
    set(
        obj: OpenDSSengine.CktElement,
        propertyName: "VariableByIndex",
        parameterTypes: [number, number],
        newValue: number,
    ): void;
    set(
        obj: OpenDSSengine.CktElement,
        propertyName: "VariableByName",
        parameterTypes: [string, number],
        newValue: number,
    ): void;
}

interface ActiveXObjectNameMap {
    "OpenDSSengine.DSS": OpenDSSengine.DSS;
}
