// Type definitions for synaptic 1.0.8
// Project: https://github.com/cazala/synaptic
// Definitions by: Markus Peloso <https://github.com/ToastHawaii/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var Neuron: typeof Synaptic.Neuron;
declare var Layer: typeof Synaptic.Layer;
declare var Network: typeof Synaptic.Network;
declare var Architect: typeof Synaptic.Architect;
declare var Trainer: typeof Synaptic.Trainer;

declare module "synaptic" {
    export = Synaptic;
}

declare namespace Synaptic {
    namespace Neuron {
        type SquashingFunction = (x: number, derivate: boolean) => number;

        namespace squash {
            const LOGISTIC: SquashingFunction;
            const TANH: SquashingFunction;
            const IDENTITY: SquashingFunction;
            const HLIM: SquashingFunction;
            const ReLU: SquashingFunction;
        }

        class Connection {
            ID: number;
            from: number;
            to: number;
            weight: number;
            gain: number;
            gater: Neuron;

            constructor(from: number, to: number, weight?: number);

            static uid(): number;
        }

        var connection: typeof Connection;
    }

    /**
     * Neurons are the basic unit of the neural network. They can be connected together, or used to gate connections between other neurons.
     */
    class Neuron {
        /**
         * By default, a neuron uses a Logistic Sigmoid as its squashing/activation function.
         * @default LOGISTIC
         */
        public squash: Neuron.SquashingFunction;

        /**
         * By default, a neuron uses a random bias.
         * @default random
         */
        public bias: number;

        /**
         * Neurons are the basic unit of the neural network. They can be connected together, or used to gate connections between other neurons.
         */
        public constructor();

        /**
         * A neuron can project a connection to another neuron. Neurons can also self-connect.
         * @param neuron
         */
        public project(neuron: Neuron): Neuron.Connection;

        /**
         * A neuron can project a connection to another neuron. Neurons can also self-connect.
         * @param neuron
         * @param weight
         */
        public project(neuron: Neuron, weight: number): Neuron.Connection;

        /**
         * A neuron can gate a connection between two neurons, or a neuron's self-connection. This allows you to create second order neural network architectures.
         * @param connection
         */
        public gate(connection: Neuron.Connection): void;

        /**
         * When a neuron activates, it computes its state from all its input connections and squashes it using its activation function, and returns the output (activation).
         */
        public activate(): number;

        /**
         * When a neuron activates, it computes its state from all its input connections and squashes it using its activation function, and returns the output (activation).
         * @param activation You can provide the activation as a parameter (useful for neurons in the input layer. it has to be a float between 0 and 1).
         */
        public activate(activation: number): number;

        /**
         * After an activation, you can teach the neuron what should have been the correct output (a.k.a. train). This is done by backpropagating the error.
         * @param learningRate a learning rate
         * @param targetValue a target value (float between 0 and 1)
         */
        public propagate(learningRate: number, targetValue: number): void;

        /**
         * Returns true or false whether the neuron is self-connected or not.
         */
        public selfconnected(): boolean;

        /**
         * Returns true or false whether the neuron is connected to another neuron (parameter).
         * @param neuron
         */
        public connected(neuron?: any): { result: any; connection: any } | boolean;

        /**
         * Clears all the traces (the neuron forgets it's context, but the connections remain intact).
         */
        public clear(): void;

        /**
         * All the connections are randomized and the traces are cleared.
         */
        public reset(): void;

        /**
         * Hardcodes the behavior of the neuron into an optimized function.
         * @param optimized
         * @param layer
         */
        public optimize(optimized?: any, layer?: any): {
            memory: any;
            neurons: any;
            inputs: any;
            outputs: any;
            targets: any;
            variables: any;
            activation_sentences: any;
            trace_sentences: any;
            propagation_sentences: any;
            layers: any;
        };

        public static uid(): number;

        public static quantity(): { neurons: number; connections: number; };
    }

    namespace Layer {
        /**
         * Types of connections.
         */
        enum connectionType {
            /**
             * It connects every neuron from layer A, to every neuron in layer B.
             */
            ALL_TO_ALL,

            /**
             * It connects each neuron from layer A, to one neuron in layer B. Both layers must be the same size in order to work.
             */
            ONE_TO_ONE,

            /**
             * Useful only in self-connections. It connects every neuron from a layer to all the other neurons in that same layer, except with itself. If this connectionType is used in a connection between different layers, it produces the same result as ALL_TO_ALL.
             */
            ALL_TO_ELSE
        }

        /**
         * Represents a connection from one layer to another, and keeps track of its weight and gain.
         */
        class LayerConnection {
            public ID: number;
            public from: any;
            public to: any;
            public selfconnection: any;
            public type: any;
            public connections: any;
            public list: any;
            public size: any;
            public gatedfrom: any;

            static uid(): number;
        }

        var connection: typeof LayerConnection;

        /**
         * Types of gates.
         */
        enum gateType {
            /**
             * If layer C is gating connections between layer A and B, all the neurons from C gate all the input connections to B.
             */
            INPUT,

            /**
             * If layer C is gating connections between layer A and B, all the neurons from C gate all the output connections from A.
             */
            OUTPUT,

            /**
             * If layer C is gating connections between layer A and B, each neuron from C gates one connection from A to B. This is useful for gating self-connected layers. To use this kind of gateType, A, B and C must be the same size.
             */
            ONE_TO_ONE
        }

        interface Options {
            label?: any;
            squash?: Neuron.SquashingFunction;
            bias?: number;
        }
    }

    /**
     * Normally you won't work with single neurons, but use Layers instead. A layer is basically an array of neurons, they can do pretty much the same things as neurons do, but it makes the programming process faster.
     */
    class Layer {
        public size: number;
        public list: Neuron[];
        public label: any;
        public connectedTo: any;

        /**
         * Normally you won't work with single neurons, but use Layers instead. A layer is basically an array of neurons, they can do pretty much the same things as neurons do, but it makes the programming process faster.
         * @param numberOfNeurons the number of neurons in that layer
         */
        public constructor(numberOfNeurons: number);

        /**
         * A layer can project a connection to another layer. Layers can also self-connect.
         * NOTE: If not specified, the connection type is always Layer.connectionType.ALL_TO_ALL when connecting two different layers, and is Layer.connectionType.ONE_TO_ONE when connecting a layer to itself (ie myLayer.project(myLayer)).
         * @param layer
         */
        public project(layer: Layer | Network): Layer.LayerConnection;

        /**
         * A layer can project a connection to another layer. Layers can also self-connect.
         * @param layer
         * @param connectionType
         */
        public project(layer: Layer | Network, connectionType: Layer.connectionType): Layer.LayerConnection;

        /**
         * A layer can project a connection to another layer. Layers can also self-connect.
         * @param layer
         * @param connectionType
         * @param weights
         */
        public project(layer: Layer | Network, connectionType: Layer.connectionType, weights: any): Layer.LayerConnection;

        /**
         * A layer can gate a connection between two other layers, or a layers's self-connection.
         * @param connection
         * @param gateType
         */
        public gate(connection: Layer.LayerConnection, gateType: Layer.gateType): void;

        /**
         * When a layer activates, it just activates all the neurons in that layer in order, and returns an array with the outputs.
         */
        public activate(): number[];

        /**
         * When a layer activates, it just activates all the neurons in that layer in order, and returns an array with the outputs.
         * @param activation It accepts an array of activations as parameter (for input layers).
         */
        public activate(activation: number[]): number[];

        /**
         * After an activation, you can teach the layer what should have been the correct output (a.k.a. train). This is done by backpropagating the error.
         * @param learningRate a learning rate
         * @param targetValue a target value (array of floats between 0 and 1)
         */
        public propagate(learningRate: number, targetValue: number[]): void;

        /**
         * True or false whether the whole layer is self-connected or not.
         */
        public selfconnected(): boolean;

        /**
         * True of false whether the layer is connected to another layer (parameter) or not.
         * @param layer
         */
        public connected(layer: any): any;

        /**
         * Clears all the neurons in the layer.
         */
        public clear(): void;

        /**
         * Resets all the neurons in the layer.
         */
        public reset(): void;

        /**
         * Adds a neuron to the layer.
         * @param neuron
         */
        public add(neuron: any): void;

        /**
         * Set the squashing function and bias of all the neurons in a layer.
         * @param options
         */
        public set(options: Layer.Options): this;

        /**
         * Returns an array with all the neurons in the layer, in activation order.
         */
        public neurons(): Neuron[];
    }

    namespace Network {
        interface Options {
            input: Layer;
            hidden: Layer[];
            output: Layer;
        }

        interface Optimized {
            memory: Float64Array;
            ownership: (memoryBuffer: Float64Array) => void;
        }
    }

    /**
     * Networks are basically an array of layers. They have an input layer, a number of hidden layers, and an output layer.
     */
    class Network {
        public layer: Network.Options;

        public optimized: Network.Optimized;

        /**
         * Networks are basically an array of layers. They have an input layer, a number of hidden layers, and an output layer.
         */
        public constructor();
        /**
         * Networks are basically an array of layers. They have an input layer, a number of hidden layers, and an output layer.
         * @param options
         */
        public constructor(options: Network.Options);

        /**
         * A network can project a connection to another, or gate a connection between two others networks in the same way Layers do.
         * NOTE: If not specified, the connection type is always Layer.connectionType.ALL_TO_ALL.
         * @param otherNetwork
         */
        public project(otherNetwork: Network | Layer): Layer.LayerConnection;

        /**
         * A network can project a connection to another, or gate a connection between two others networks in the same way Layers do.
         * @param otherNetwork
         * @param connectionType
         */
        public project(otherNetwork: Network | Layer, connectionType: Layer.connectionType): Layer.LayerConnection;

        /**
         * A network can project a connection to another, or gate a connection between two others networks in the same way Layers do.
         * @param otherNetwork
         * @param connectionType
         * @param weights
         */
        public project(otherNetwork: Network | Layer, connectionType: Layer.connectionType, weights: any): Layer.LayerConnection;

        /**
         * A Network can gate a connection between two other Networks or Layers, or a Layers's self-connection.
         * @param layerConnection
         * @param gateType
         */
        public gate(layerConnection: Layer.LayerConnection, gateType: Layer.gateType): void;

        /**
         * When a network is activated, an input must be provided to activate the input layer, then all the hidden layers are activated in order, and finally the output layer is activated and its activation is returned.
         * @param activation
         */
        public activate(activation: number[]): number[];

        /**
         * You can provide a target value and a learning rate to a network and backpropagate the error from the output layer to all the hidden layers in reverse order until reaching the input layer.
         * @param learningRate
         * @param targetValue
         */
        public propagate(learningRate: number, targetValue: number[]): void;

        /**
         * Networks can be stored as JSON's.
         */
        public toJSON(): string;

        /**
         * Creates a static String to store the source code of the functions that are identical for all the workers (train, _trainSet, test).
         * @returns Source code that can train a network inside a worker.
         */
        public static getWorkerSharedFunctions(): string;

        /**
         * Rebuild a network that has been stored in a json using the method toJSON().
         */
        public static fromJSON(exported: string): Network;

        /**
         * The network can be converted into a WebWorker. This feature doesn't work in node.js, and it's not supported on every browser (it must support Blob).
         * @returns Return a HTML5 WebWorker specialized on training the network stored in `memory`. Train based on the given dataSet and options. The worker returns the updated `memory` when done.
         */
        public worker(): Worker;

        /**
         * The network can be converted into a WebWorker. This feature doesn't work in node.js, and it's not supported on every browser (it must support Blob).
         * @returns Return a HTML5 WebWorker specialized on training the network stored in `memory`. Train based on the given dataSet and options. The worker returns the updated `memory` when done.
         */
        public worker(memory?: any, set?: any, options?: any): Worker;

        /**
         * Export the topology into dot language which can be visualized as graphs using dot.
         * @param edgeConnection
         */
        toDot(edgeConnection?: any): { code: string; link: string };

        /**
         * The network can be exported to a single javascript Function. This can be useful when your network is already trained and you just need to use it, since the standalone functions is just one javascript function with an array and operations within, with no dependencies on Synaptic or any other library.
         * @returns Returns a function that works as the activation of the network and can be used without depending on the library.
         */
        public standalone(): (inputs: number[]) => number[];

        /**
         * A network can be cloned to a completely new instance, with the same connections and traces.
         * @returns Returns a copy of the network.
         */
        public clone(): Network;

        /**
         * Return an array with all the neurons in the network, in activation order.
         */
        public neurons(): number[];

        /**
         * The method set(layers) receives an object with layers in the same format as the constructor of Network and sets them as the layers of the Network, this is useful when you are extending the Network class to create your own architectures.
         * @param options
         */
        public set(options: Network.Options): void;

        /**
         * Returns number of inputs of the network.
         */
        public inputs(): number;

        /**
         * Returns number of outputs of hte network.
         */
        public outputs(): number;

        public setOptimize(optimize: any): void;

        /**
         * Restores all the values from the optimized network the their respective objects in order to manipulate the network.
         */
        public restore(): any | void;

        /**
         * Hardcodes the behaviour of the whole network into a single optimized function.
         */
        public optimize(): void;

        /**
         * Clear all elegibility traces and extended elegibility traces (the network forgets its context, but not what was trained).
         */
        public clear(): void;

        /**
         * Reset all weights and clear all traces (ends up like a new network).
         */
        public reset(): void;
    }

    /**
     * The Architect contains built-in architectures, ready to use.
     */
    namespace Architect {
        /**
         * This architecture allows you to create multilayer perceptrons, also known as feed-forward neural networks. They consist of a sequence of layers, each fully connected to the next one.
         */
        class Perceptron extends Network {
            public trainer: Trainer;

            /**
             * This architecture allows you to create multilayer perceptrons, also known as feed-forward neural networks. They consist of a sequence of layers, each fully connected to the next one.
             * @param numberOfNeurons You have to provide a minimum of 3 layers (input, hidden and output), but you can use as many hidden layers as you wish.
             */
            public constructor(...numberOfNeurons: number[]);
        }

        /**
         * The long short-term memory is an architecture well-suited to learn from experience to classify, process and predict time series when there are very long time lags of unknown size between important events.
         */
        class LSTM extends Network {
            public trainer: Trainer;

            /**
             * The long short-term memory is an architecture well-suited to learn from experience to classify, process and predict time series when there are very long time lags of unknown size between important events.
             * @param numberOfNeurons To use this architecture you have to set at least one input layer, one memory block assembly (consisting of four layers: input gate, memory cell, forget gate and output gate), and an output layer. Also you can set many layers of memory blocks.
             */
            public constructor(...numberOfNeurons: number[]);
        }

        /**
         * The Liquid architecture allows you to create Liquid State Machines. In these networks, neurons are randomly connected to each other. The recurrent nature of the connections turns the time varying input into a spatio-temporal pattern of activations in the network nodes.
         */
        class Liquid extends Network {
            public trainer: Trainer;

            /**
             * The Liquid architecture allows you to create Liquid State Machines. In these networks, neurons are randomly connected to each other. The recurrent nature of the connections turns the time varying input into a spatio-temporal pattern of activations in the network nodes.
             * @param input  The size of the input layer.
             * @param pool The size of the pool.
             * @param output The size of the output layer.
             * @param connections The number of random connections in the pool.
             * @param gates The number of random gates among the connections.
             */
            public constructor(input: number, pool: number, output: number, connections: number, gates: number);
        }

        /**
         * The Hopfield architecture serves as content-addressable memory. They are trained to remember patterns and then when feeding new patterns to the network it returns the most similar one from the patterns it was trained to remember.
         */
        class Hopfield extends Network {
            /**
             * The Hopfield architecture serves as content-addressable memory. They are trained to remember patterns and then when feeding new patterns to the network it returns the most similar one from the patterns it was trained to remember.
             * @param patternSize Pattern size in bits.
             */
            public constructor(patternSize: number);

            /**
             * Teach the network two different patterns.
             * @param patterns
             */
            public learn(patterns: [number[], number[]]): any;

            /**
             * Feed new patterns to the network and it will return the most similar to the ones it was trained to remember.
             * @param pattern
             */
            public feed(pattern: number[]): number[];
        }
    }

    namespace Trainer {
        interface TrainingPair {
            input: number[];
            output: number[];
        }

        type TrainingSet = TrainingPair[];

        interface TrainingOptions {
            /**
             * Learning rate to train the network. It can be a static rate (just a number), dynamic (an array of numbers, which will transition from one to the next one according to the number of iterations) or a callback function: (iterations, error) => rate.
             */
            rate?: number | number[] | ((iterations: number, error: number) => number);

            /**
             * Maximum number of iterations.
             */
            iterations?: number;

            /**
             * Minimum error.
             */
            error?: number;

            /**
             * If true, the training set is shuffled after every iteration, this is useful for training data sequences which order is not meaningful to networks with context memory, like LSTM's.
             */
            shuffle?: boolean;

            /**
             * You can set what cost function to use for the training, there are three built-in cost functions (Trainer.cost.CROSS_ENTROPY, Trainer.cost.MSE and Trainer.cost.BINARY) to choose from cross-entropy or mean squared error. You can also use you own cost function(targetValues, outputValues).
             */
            cost?: CostFunction;

            /**
             * This commands the trainer to console.log the error and iterations every X number of iterations.
             */
            log?: number;

            /**
             * You can create custom scheduled tasks that will be executed every X number of iterations. It can be used to create custom logs, or to compute analytics based on the data passed to the task (data object includes error, iterations and the current learning rate). If the returned value of the task is true, the training will be aborted. This can be used to create special conditions to stop the training (i.e. if the error starts to increase).
             */
            schedule?: TrainingScheduleOptions;
        }

        interface TrainingScheduleDoData {
            error: any;

            iterations: any;

            /**
             * The current learning rate.
             */
            rate: any;
        }

        interface TrainingScheduleOptions {
            every: number;
            do: (data: TrainingScheduleDoData) => boolean | void;
        }

        type CostFunction = (targetValues: number[], outputValues: number[]) => number;

        namespace cost {
            const CROSS_ENTROPY: CostFunction;
            const MSE: CostFunction;
            const BINARY: CostFunction;
        }

        interface TrainingResult {
            error: number;
            iterations: number;
            time: number;
        }

        interface XOROptions {
            iterations?: number;
            log?: number;
            shuffle?: boolean;
            cost?: CostFunction;
        }

        interface DSROptions {
            targets?: number[];
            distractors?: number[];
            prompts?: number[];
            length?: number;
            success?: number;
            iterations?: number;
            rate?: number;
            log?: number;
            schedule?: TrainingScheduleOptions;
            cost?: CostFunction;
        }

        interface DSRTrainingResult {
            error: number;
            iterations: number;
            time: number;
            success: any;
        }

        interface ERGOptions {
            iterations?: number;
            error?: number;
            rate?: number;
            log?: number;
            cost?: CostFunction;
        }

        interface ERGTrainingResult {
            error: number;
            iterations: number;
            time: number;
            test: any;
            generate: any;
        }
    }

    /**
     * The Trainer makes it easier to train any set to any network, no matter its architecture. The trainer also contains built-in tasks to test the performance of your network.
     */
    class Trainer {
        /**
         * The Trainer makes it easier to train any set to any network, no matter its architecture. The trainer also contains built-in tasks to test the performance of your network.
         * @param network
         */
        public constructor(network: Network);

        /**
         * This method allows you to train any training set to a Network.
         * @param trainingSet
         * @returns When the training is done this method returns an object with the error, the iterations, and the elapsed time of the training.
         */
        public train(trainingSet: Trainer.TrainingSet): Trainer.TrainingResult;

        /**
         * This method allows you to train any training set to a Network.
         * @param trainingSet
         * @param trainingOptions
         * @returns When the training is done this method returns an object with the error, the iterations, and the elapsed time of the training.
         */
        public train(trainingSet: Trainer.TrainingSet, trainingOptions: Trainer.TrainingOptions): Trainer.TrainingResult;

        /**
         * This method allows you to train any training set to a Network.
         * @param trainingSet
         * @returns When the training is done this method returns an object with the error, the iterations, and the elapsed time of the training.
         */
        public trainAsync(trainingSet: Trainer.TrainingSet): Promise<Trainer.TrainingResult>;

        /**
         * This method allows you to train any training set to a Network.
         * @param trainingSet
         * @param trainingOptions
         * @returns When the training is done this method returns an object with the error, the iterations, and the elapsed time of the training.
         */
        public trainAsync(trainingSet: Trainer.TrainingSet, trainingOptions: Trainer.TrainingOptions): Promise<Trainer.TrainingResult>;

        /**
         * This method accepts the same arguments as train(dataSet, options). It will iterate over the dataSet, activating the network.
         * @param trainingSet
         * @returns It returns the elapsed time and the error (by default, the MSE, but you can specify the cost function in the options, same way as in train()).
         */
        public test(trainingSet: Trainer.TrainingSet): Trainer.TrainingResult;

        /**
         * This method accepts the same arguments as train(dataSet, options). It will iterate over the dataSet, activating the network.
         * @param trainingSet
         * @param trainingOptions
         * @returns It returns the elapsed time and the error (by default, the MSE, but you can specify the cost function in the options, same way as in train()).
         */
        public test(trainingSet: Trainer.TrainingSet, trainingOptions: Trainer.TrainingOptions): Trainer.TrainingResult;

        /**
         * This method accepts the same arguments as train(dataSet, options). It will iterate over the dataSet, activating the network.
         * @param trainingSet
         * @param trainingOptions
         * @returns It returns the elapsed time and the error (by default, the MSE, but you can specify the cost function in the options, same way as in train()).
         */
        public test(trainingSet: Trainer.TrainingSet, trainingOptions: Trainer.TrainingOptions): Trainer.TrainingResult;

        /**
         * This method trains an XOR to the network, is useful when you are experimenting with different architectures and you want to test and compare their performances.
         */
        public XOR(): Trainer.TrainingResult;

        /**
         * This method trains an XOR to the network, is useful when you are experimenting with different architectures and you want to test and compare their performances.
         * @param options
         */
        public XOR(options: Trainer.XOROptions): Trainer.TrainingResult;

        /**
         * This method trains the network to complete a Discrete Sequence Recall, which is a task for testing context memory in neural networks.
         */
        public DSR(): Trainer.DSRTrainingResult;

        /**
         * This method trains the network to complete a Discrete Sequence Recall, which is a task for testing context memory in neural networks.
         * @param options
         */
        public DSR(options: Trainer.DSROptions): Trainer.DSRTrainingResult;

        /**
         * This method trains the network to pass an Embedded Reber Grammar test.
         */
        public ERG(): Trainer.ERGTrainingResult;

        /**
         * This method trains the network to pass an Embedded Reber Grammar test.
         * @param options
         */
        public ERG(options: Trainer.ERGOptions): Trainer.ERGTrainingResult;

        /**
         * This test challenges the network to complete a timing task.
         * @param options
         */
        public timingTask(options?: any): { train: any; test: any };
    }
}
