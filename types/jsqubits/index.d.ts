// Type definitions for jsqubits 1.1
// Project: https://github.com/davidbkemp/jsqubits
// Definitions by: kamakiri01 <https://github.com/kamakiri01>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export = jsqubits;

declare const jsqubits: ExternalJSQubitsStatic;

declare namespace jsqubits {
    namespace jsqubits {
        interface QState {
            numBits(): number;
            amplitude(basisState: string | number): Complex;
            each: (callBack: (stateWithAmplitude: StateWithAmplitude) => false | void) => void;

            multiply(amount: number | Complex): QState;
            add(qState: QState): QState;
            subtract(qState: QState): QState;
            tensorProduct(qState: QState): QState;
            kron: QState["tensorProduct"];

            controlledHadamard(
                controlBits: undefined | SingleQubitOperatorTargetQubits,
                targetBits: SingleQubitOperatorTargetQubits
            ): QState;
            hadamard(targetBits: SingleQubitOperatorTargetQubits): QState;

            controlledXRotation(
                controlBits: undefined | SingleQubitOperatorTargetQubits,
                targetBits: SingleQubitOperatorTargetQubits, angle: number
            ): QState;
            rotateX(targetBits: SingleQubitOperatorTargetQubits, angle: number): QState;
            controlledYRotation(
                controlBits: undefined | SingleQubitOperatorTargetQubits,
                targetBits: SingleQubitOperatorTargetQubits, angle: number
            ): QState;
            rotateY(targetBits: SingleQubitOperatorTargetQubits, angle: number): QState;
            controlledZRotation(
                controlBits: undefined | SingleQubitOperatorTargetQubits,
                targetBits: SingleQubitOperatorTargetQubits, angle: number
            ): QState;
            rotateZ(targetBits: SingleQubitOperatorTargetQubits, angle: number): QState;
            controlledR(
                controlBits: undefined | SingleQubitOperatorTargetQubits,
                targetBits: SingleQubitOperatorTargetQubits, angle: number
            ): QState;
            r(targetBits: SingleQubitOperatorTargetQubits, angle: number): QState;
            R: QState["r"];

            controlledX(controlBits: undefined | SingleQubitOperatorTargetQubits, targetBits: SingleQubitOperatorTargetQubits): QState;
            cnot: QState["controlledX"];
            x(targetBits: SingleQubitOperatorTargetQubits): QState;
            X: QState["x"];
            not: QState["x"];

            controlledY(controlBits: undefined | SingleQubitOperatorTargetQubits, targetBits: SingleQubitOperatorTargetQubits): QState;
            y(targetBits: SingleQubitOperatorTargetQubits): QState;
            Y: QState["y"];

            controlledZ(controlBits: undefined | SingleQubitOperatorTargetQubits, targetBits: SingleQubitOperatorTargetQubits): QState;
            z(targetBits: SingleQubitOperatorTargetQubits): QState;
            Z: QState["z"];

            controlledS(controlBits: undefined | SingleQubitOperatorTargetQubits, targetBits: SingleQubitOperatorTargetQubits): QState;
            s(targetBits: SingleQubitOperatorTargetQubits): QState;
            S: QState["s"];

            controlledT(controlBits: undefined | SingleQubitOperatorTargetQubits, targetBits: SingleQubitOperatorTargetQubits): QState;
            t(targetBits: SingleQubitOperatorTargetQubits): QState;
            T: QState["t"];

            controlledSwap(controlBits: undefined | SingleQubitOperatorTargetQubits, targetBit1: number, targetBit2: number): QState;
            swap(targetBit1: number, targetBit2: number): QState;

            /**
             * toffoli args is
             * (...controlBit: SingleQubitOperatorTargetQubits[], targetBit: SingleQubitOperatorTargetQubits)
             * but TypeScript3.4 cannot define this args.
             * welcome Pull Request.
             */
            toffoli(...args: SingleQubitOperatorTargetQubits[]): QState;

            controlledApplicationOfqBitOperator(
                controlBits: undefined | SingleQubitOperatorTargetQubits,
                targetBits: SingleQubitOperatorTargetQubits,
                operatorMatrix: Complex[][]
            ): QState;

            applyFunction(
                inputBits: SingleQubitOperatorTargetQubits,
                targetBits: SingleQubitOperatorTargetQubits,
                functionToApply: (input: number) => number
            ): QState;

            random: Math["random"];
            normalize(): QState;
            measure(bits: SingleQubitOperatorTargetQubits): Measurement;
            qft(targetBits: SingleQubitOperatorTargetQubits): QState;
            eql(other?: QState): boolean;
            toString(): string;
        }

        interface Complex {
            real: number;
            imaginary: number;
            add(other: number | Complex): Complex;
            multiply(other: number | Complex): Complex;
            conjugate(): Complex;
            toString(): string;
            inspect(): string;
            format(options?: { decimalPlaces?: number }): string;
            negate(): Complex;
            magnitude(): number;
            phase(): number;
            subtract(other: number | Complex): Complex;
            eql(other: number | Complex): boolean;
            closeTo(other: Complex): number;
        }

        interface Measurement {
            numBits: number;
            result: number;
            newState: QState;
            toString(): string;
            asBitString(): string;
        }

        interface StateWithAmplitude {
            numBits: number;
            index: number;
            amplitude: Complex;
            asNumber(): number;
            asBitString(): string;
        }
    }
}

interface ExternalJSQubitsStatic {
    jsqubits: JSQubitsStatic;
}

interface JSQubitsStatic {
    (bitString: string): jsqubits.jsqubits.QState;
    QState: QStateStatic;
    Complex: ComplexStatic;
    Measurement: MeasurementStatic;
    StateWithAmplitude: StateWithAmplitudeStatic;
    real: (real: number) => jsqubits.jsqubits.Complex;
    complex: (real: number, imaginary: number) => jsqubits.jsqubits.Complex;
    ZERO: ComplexStatic["ZERO"];
    ONE: jsqubits.jsqubits.Complex;
    ALL: "ALL";
    roundToZero: 0.0000001;
    QMath: JsqubitsmathStatic;
}

interface JsqubitsmathStatic {
    powerMod(x: number, y: number, m: number): number;
    powerFactor(n: number): number;
    gcd(a: number, b: number): number;
    lcm(a: number, b: number): number;
    continuedFraction(targetValue: number, precision: number): ContinuedFractionResult;
    findNullSpaceMod2(a: number[][], width: number[]): number[];
}

interface ContinuedFractionResult {
    quotients: number[];
    numerator: number;
    denominator: number;
}

interface QStateStatic {
    new (numBits: number, amplitudes?: jsqubits.jsqubits.Complex[]): jsqubits.jsqubits.QState;
    fromBits(bitString: string): jsqubits.jsqubits.QState;
    applyToOneBit(
        controlBits: number[],
        targetBit: number,
        operatorMatrix: jsqubits.jsqubits.Complex[][],
        qState: jsqubits.jsqubits.QState
    ): jsqubits.jsqubits.QState;
    applyOperatorMatrix(
            matrix: jsqubits.jsqubits.Complex[][],
            bitValue: number,
            amplitude: jsqubits.jsqubits.Complex
    ): jsqubits.jsqubits.Complex[];
}

interface ComplexStatic {
    ONE: jsqubits.jsqubits.Complex;
    ZERO: jsqubits.jsqubits.Complex;
    SQRT2: jsqubits.jsqubits.Complex;
    SQRT1_2: jsqubits.jsqubits.Complex;
    new (real: number, imaginary: number): jsqubits.jsqubits.Complex;
}

interface MeasurementStatic {
    new (numBits: number, result: number, newState: jsqubits.jsqubits.QState): jsqubits.jsqubits.Measurement;
}

interface StateWithAmplitudeStatic {
    new (numBits: number, index: number, amplitude: jsqubits.jsqubits.Complex): jsqubits.jsqubits.StateWithAmplitude;
}

interface BitsRange {
    from: number;
    to: number;
}

type SingleQubitOperatorTargetQubits = number | number[] | JSQubitsStatic["ALL"] | BitsRange;
