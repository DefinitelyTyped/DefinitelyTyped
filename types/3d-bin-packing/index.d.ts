// Type definitions for 3d-bin-packing v1.1.2
// Project: https://github.com/betterwaysystems/packer
// Definitions by: Jeongho Nam <http://samchon.org>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="samchon" />

declare module "3d-bin-packing"
{
	export = bws.packer;
}

/// <reference types="samchon" />
/// <reference types="tstl" />
declare namespace bws.packer {
    export import library = samchon.library;
    export import protocol = samchon.protocol;
    function _Test(): void;
}
declare namespace boxologic {
    /**
     * <p> An abstract instance of boxologic. </p>
     *
     * <p> {@link st_Instance} represents a physical, tangible instance of 3-dimension. </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    abstract class Instance {
        /**
         * Width of the tangible instance, length on the X-axis in 3D.
         */
        width: number;
        /**
         * Height of the tangible instance, length on the Y-axis in 3D.
         */
        height: number;
        /**
         * Length of the tangible instance, length on the Z-axis in 3D.
         */
        length: number;
        /**
         * Width considering layout placement.
         */
        layout_width: number;
        /**
         * Height considering layout placement.
         */
        layout_height: number;
        /**
         * Length considering layout placement.
         */
        layout_length: number;
        /**
         * Volume, Width x Height x Length.
         */
        volume: number;
        /**
         * Construct from size members.
         *
         * @param width Width, length on the X-axis in 3D.
         * @param height Height, length on the Y-axis in 3D.
         * @param length Length, length on the Z-axis in 3D.
         */
        constructor(width: number, height: number, length: number);
    }
}
declare namespace boxologic {
    /**
     * A box, trying to pack into a {@link Pallet}.
     *
     * @author Bill Knechtel, <br>
     *		   Migrated and Refactored by Jeongho Nam <http://samchon.org>
     */
    class Box extends Instance {
        /**
         * Coordinate-X of the box placement in a {@link Pallet}.
         */
        cox: number;
        /**
         * Coordinate-Y of the box placement in a {@link Pallet}.
         */
        coy: number;
        /**
         * Coordinate-Z of the box placement in a {@link Pallet}.
         */
        coz: number;
        /**
         * Whether the {@link Box} is packed into a {@link Pallet}.
         */
        is_packed: boolean;
        overlapped_boxes: std.HashSet<Box>;
        /**
         * Construct from an instance.
         *
         * @param instance An instance adapts with.
         */
        constructor(instance: bws.packer.Instance);
        hit_test(obj: Box): boolean;
        private hit_test_single(obj);
        private hit_test_point(x, y, z);
    }
}
/**
 * <p> A set of programs that calculate the best fit for boxes on a pallet migrated from language C. </p>
 *
 * <ul>
 *	<li> Original Boxologic: https://github.com/exad/boxologic </li>
 * </ul>
 *
 * @author Bill Knechtel, <br>
 *		   Migrated and Refactored by Jeongho Nam <http://samchon.org>
 */
declare namespace boxologic {
    /**
     * <p> A facade class of boxologic. </p>
     *
     * <p> The Boxologic class dudcts the best solution of packing boxes to a pallet. </p>
     *
     * <ul>
     *	<li> Reference: https://github.com/exad/boxologic </li>
     * </ul>
     *
     * @author Bill Knechtel, <br>
     *		   Migrated and Refactored by Jeongho Nam <http://samchon.org>
     */
    class Boxologic {
        /**
         * A Wrapper to pack instances.
         */
        private wrapper;
        /**
         * Instances trying to put into the wrapper.
         */
        private instanceArray;
        /**
         * Instances failed to pack by overloading.
         */
        private leftInstances;
        /**
         * A pallet containing {@link Box boxes}.
         *
         * @see Wrapper
         */
        private pallet;
        /**
         * Boxes, trying to pack into the {@link pallet}.
         */
        private box_array;
        /**
         * Sum of all boxes' volume.
         */
        private total_box_volume;
        /**
         * <p> All different lengths of {@link box_array all box} dimensions along with evaluation values. </p>
         *
         * <p> In other word, the <i>layer_map</i> stores those entries; each {@link Boxbox}'s length on each
         * axis as a <i>key</i> (width, height or length) and evaluation value as a <i>value</i>. The evaluation
         * value means sum of minimum gaps between the key and other {@link Box boxes}' width, height and length
         * </p>
         *
         * <code>
         FOR i := 0 to box_array.size()
             WHILE key IN width, length and height in box_array[i]
             BEGIN
                value := 0
                FOR j to box_array.size()
                    value += min
                    (
                        abs(key - box_array[j].width),
                        abs(key - box_array[j].height),
                        abs(key - box_array[j].length)
                    )
                    layer_map.insert({key, value});
            END
         * </code>
         *
         * <ul>
         *	<li> key: A dimension value </li>
         *	<li> value: Evaluation weight value for the corresponding key. </li>
         * </ul>
         */
        private layer_map;
        /**
         * {@link List} of {@link Scrapped} instances, edges of layers under construction.
         *
         * @see Scrapped
         * @see scrap_min_z
         */
        private scrap_list;
        /**
         * The topology {@link Scrapped}, the edge of the current layer under construction.
         *
         * @see Scrapped
         * @see scrap_list
         */
        private scrap_min_z;
        /**
         * Index of the current {@link box}.
         */
        private cboxi;
        /**
         * Candidate {@link Box.layout_width layout_width} of the {@link cboxi current box}.
         */
        private cbox_layout_width;
        /**
         * Candidate {@link Box.layout_height layout_height} of the {@link cboxi current box}.
         */
        private cbox_layout_height;
        /**
         * Candidate {@link Box.layout_length layout_length} of the {@link cboxi current box}.
         */
        private cbox_layout_length;
        /**
         * Current layer's key on iteration.
         */
        private layer_thickness;
        /**
         * Previous layer's key had iterated.
         */
        private pre_layer;
        /**
         * Key of the unevened layer in the current packing layer.
         */
        private layer_in_layer;
        /**
         * Little Z, gotten from {@link Scrapped.cumz cumz} in {@link min_scrap_z}
         */
        private lilz;
        /**
         * Remained (unfilled) {@link Pallet.layout_height layout_height} of the {@link pallet}.
         */
        private remain_layout_height;
        /**
         * Remained (unfilled) {@link Pallet.layout_length layout_length} of the {@link pallet}.
         */
        private remain_layout_length;
        /**
         * Packed (filled) {@link Pallet.layout_height layout_height} of the {@link pallet}.
         */
        private packed_layout_height;
        /**
         * Packed {@link Pallet.vo1lume volume} of the {@lnk pallet}.
         */
        private packed_volume;
        private boxi;
        private bboxi;
        private boxx;
        private boxy;
        private boxz;
        private bboxx;
        private bboxy;
        private bboxz;
        private bfx;
        private bfy;
        private bfz;
        private bbfx;
        private bbfy;
        private bbfz;
        /**
         * <p> Whether the packing is on progress. </p>
         *
         * <p> The {@link packing} is a flag variable for terminating iterations in
         * {@link iterate_orientations iterate_orientations()}, who deducts the best packing solution. </p>
         */
        private packing;
        /**
         * Whether packing a layer is done.
         */
        private layer_done;
        /**
         * Whether the current packing layer is evened.
         */
        private evened;
        /**
         * Whether the best solution is deducted.
         */
        private packing_best;
        /**
         * Whether the utilization degree of pallet space is 100%.
         */
        private hundred_percent;
        /**
         * The best orientation of the pallet, which can deduct the {@link best_solution_volume}.
         */
        private best_orientation;
        /**
         * The best layer, which can deduct the {@link best_solution_volume}.
         */
        private best_layer;
        /**
         * The best volume, fit the best utilization degree of the pallet space.
         */
        private best_solution_volume;
        /**
         * Construct from a wrapper and instances.
         *
         * @param wrapper A Wrapper to pack instances.
         * @param instanceArray Instances trying to put into the wrapper.
         */
        constructor(wrapper: bws.packer.Wrapper, instanceArray: bws.packer.InstanceArray);
        /**
         * <p> Encode data </p>
         *
         * <p> Encodes {@link bws.packer Packer}'s data to be suitable for the
         * {@link boxologic Boxologic}'s parametric data. </p>
         */
        private encode();
        /**
         * <p> Decode data </p>
         *
         * <p> Decodes the Boxologic's optimization result data to be suitable for the Packer's own. </p>
         */
        private decode();
        private inspect_validity();
        /**
         * <p> Pack instances to the {@link wrapper}. </p>
         *
         * <p> The {@link Boxologic.pack} is an adaptor method between {@link bws.packer Packer} and
         * {@link boxologic}. It encodes data from {@link bws.packer Packer}, deducts the best packing
         * solution decodes the optimization result and returns it. </p>
         *
         * <p> The optimization result is returned as a {@link Pair} like below: </p>
         * <ul>
         *	<li> first: The {@link wrapper} with packed instances. </li>
         *	<li> second: {@link leftInstances Left instances failed to pack} by overloading. </li>
         * </ul>
         *
         * @return A pair of {@link wrapper} with packed instances and
         *		   {@link leftInstances instances failed to pack} by overloading.
         */
        pack(): std.Pair<bws.packer.Wrapper, bws.packer.InstanceArray>;
        /**
         * <p> Execute iterations by calling proper functions. </p>
         *
         * <p> Iterations are done and parameters of the best solution are found. </p>
         */
        private iterate_orientations();
        /**
         * Iterate a layer.
         *
         * @param thickness Thickness of the iterating layer.
         */
        private iterate_layer(thickness);
        /**
         * <p> Construct layers. </p>
         *
         * <p> Creates all possible layer heights by giving a weight value to each of them. </p>
         */
        private construct_layers();
        /**
         * <p> Packs the boxes found and arranges all variables and records properly. </p>
         *
         * <p> Update the linked list and the Boxlist[] array as a box is packed. </p>
         */
        private pack_layer();
        /**
         * Find the most proper layer height by looking at the unpacked boxes and
         * the remaining empty space available.
         */
        private find_layer(thickness);
        /**
         * <p> Determine the gap with the samllest z value in the current layer. </p>
         *
         * <p> Find the most proper boxes by looking at all six possible orientations,
         * empty space given, adjacent boxes, and pallet limits. </p>
         *
         * @param hmx Maximum available x-dimension of the current gap to be filled.
         * @param hy Current layer thickness value.
         * @param hmy Current layer thickness value.
         * @param hz Z-dimension of the current gap to be filled.
         * @param hmz Maximum available z-dimension to the current gap to be filled.
         */
        private find_box(hmx, hy, hmy, hz, hmz);
        /**
         * <p> Analyzes each unpacked {@link Box box} to find the best fitting one to the empty space. </p>
         *
         * <p> Used by {@link find_box find_box()} to analyze box dimensions. </p>
         *
         * @param x index of a {@link Box box} in the {@link box_array}.
         *
         * @param hmx Maximum available x-dimension of the current gap to be filled.
         * @param hy Current layer thickness value.
         * @param hmy Current layer thickness value.
         * @param hz Z-dimension of the current gap to be filled.
         * @param hmz Maximum available z-dimension to the current gap to be filled.
         *
         * @param dim1 X-dimension of the orientation of the box being examined.
         * @param dim2 Y-dimension of the orientation of the box being examined.
         * @param dim3 Z-dimension of the orientation of the box being examined.
         */
        private analyze_box(index, hmx, hy, hmy, hz, hmz, dim1, dim2, dim3);
        /**
         * After finding each box, the candidate boxes and the condition of the layer are examined.
         */
        private check_found();
        /**
         * After packing of each box, 100% packing condition is checked.
         */
        private volume_check();
        /**
         * <p> Find the first to be packed gap in the layer edge. </p>
         *
         * <p> Determine the gap with the {@link scrap_min_z smallest z} value in the current layer. </p>
         */
        private find_smallest_z();
        /**
         * <p> Determine {@link box_arrray boxes}. </p>
         *
         * <p> Using the parameters found, packs the best solution found and reports. </p>
         */
        private report_results();
        /**
         * <p> Determine a {@link Box}. </p>
         *
         * <p> Transforms the found co-ordinate system to the one entered by the user and write them to the
         * report. </p>
         */
        private write_box_file();
    }
}
declare namespace boxologic {
    /**
     * A pallet containing boxes.
     *
     * @author Bill Knechtel, <br>
     *		   Migrated and Refactored by Jeongho Nam <http://samchon.org>
     */
    class Pallet extends Instance {
        /**
         * Construct from a wrapper.
         *
         * @param wrapper A wrapper wrapping instances.
         */
        constructor(wrapper: bws.packer.Wrapper);
        /**
         * Set placement orientation.
         */
        set_orientation(orientation: number): void;
    }
}
declare namespace boxologic {
    /**
     * <p> Cumulated lengths of current layer. </p>
     *
     * <p> {@link Scrapped} represents an edge of the current layer under construction. </p>
     *
     * @author Bill Knechtel, <br>
     *		   Migrated and Refactored by Jeongho Nam <http://samchon.org>
     */
    class Scrap {
        /**
         * Cumulated length on the X-axis in 3D.
         */
        cumx: number;
        /**
         * Cumulated length on the Z-axis in 3D.
         */
        cumz: number;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Initialization Constructor.
         *
         * @param cumx Cumulated length on the x-axis.
         * @param cumz Cumulated length on the z-axis.
         */
        constructor(cumx: number, cumz: number);
    }
}
declare namespace bws.packer {
    /**
     * Bridge of {@link Packer} for {@link InstanceForm repeated instances}.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class PackerForm extends protocol.Entity {
        /**
         * Form of Instances to pack.
         */
        private instanceFormArray;
        /**
         * Type of Wrappers to be used.
         */
        private wrapperArray;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Initializer Constructor.
         *
         * @param instanceFormArray Form of Instances to pack.
         * @param wrapperArray Type of Wrappers to be used.
         */
        constructor(instanceFormArray: InstanceFormArray, wrapperArray: WrapperArray);
        construct(xml: library.XML): void;
        optimize(): WrapperArray;
        getInstanceFormArray(): InstanceFormArray;
        getWrapperArray(): WrapperArray;
        TAG(): string;
        toXML(): library.XML;
        toPacker(): Packer;
    }
    /**
     * An array of {@link InstanceForm} objects.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class InstanceFormArray extends protocol.EntityArrayCollection<InstanceForm> {
        /**
         * Default Constructor.
         */
        constructor();
        createChild(xml: library.XML): InstanceForm;
        TAG(): string;
        CHILD_TAG(): string;
        /**
         * Convert {@link InstanceForm} objects to {@link InstanceArray}.
         *
         * @return An array of instance containing repeated instances in {@link InstanceForm} objects.
         */
        toInstanceArray(): InstanceArray;
    }
    /**
     * <p> A repeated Instance. </p>
     *
     * <p> InstanceForm is an utility class for repeated {@link Instance}. It is designed for shrinking
     * volume of network message I/O by storing {@link count repeated count}. </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class InstanceForm extends protocol.Entity {
        /**
         * A duplicated Instance.
         */
        private instance;
        /**
         * Repeated count of the {@link instance}.
         */
        private count;
        /**
         * Default Constructor.
         */
        constructor(instance?: Instance, count?: number);
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        private createInstance(xml);
        key(): any;
        getInstance(): Instance;
        getCount(): number;
        setCount(val: number): void;
        $name: string;
        $width: string;
        $height: string;
        $length: string;
        $count: string;
        /**
         * @inheritdoc
         */
        TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
        /**
         * <p> Repeated {@link instance} to {@link InstanceArray}.
         *
         * @details
         * <p> Contains the {@link instance repeated instance} to an {@link InstanceArray} to make
         * {@link instance} to participate in the packing process. The returned {@link InstanceArray} will be
         * registered on {@link Packer.instanceArray}.
         *
         * @return An array of instance containing repeated {@link instance}.
         */
        toInstanceArray(): InstanceArray;
    }
}
declare namespace bws.packer {
    class WrapperArray extends protocol.EntityArrayCollection<Wrapper> {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @inheritdoc
         */
        createChild(xml: library.XML): Wrapper;
        /**
         * Get (calculate) price.
         */
        getPrice(): number;
        /**
         * Get (calculate) utilization rate.
         */
        getUtilization(): number;
        /**
         * @inheritdoc
         */
        TAG(): string;
        /**
         * @inheritdoc
         */
        CHILD_TAG(): string;
    }
}
declare namespace bws.packer {
    class GAWrapperArray extends WrapperArray {
        protected instanceArray: InstanceArray;
        protected result: std.HashMap<string, WrapperGroup>;
        private price;
        /**
         * @brief Validity of this sequence list.
         */
        private valid;
        /**
         * Construct from instances.
         *
         * @param instanceArray Instances to be wrapped.
         */
        constructor(instanceArray: InstanceArray);
        /**
         * @brief Copy Constructor.
         */
        constructor(genes: GAWrapperArray);
        private constructResult();
        /**
         * @brief Get optimization result.
         *
         * @return result map.
         */
        getResult(): std.HashMap<string, WrapperGroup>;
        less(obj: GAWrapperArray): boolean;
    }
}
declare namespace bws.packer {
    /**
     * An interface of physical 3D-instances.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    interface Instance extends protocol.IEntity {
        /**
         * Get name.
         */
        getName(): string;
        /**
         * Get width, length on the X-axis in 3D.
         */
        getWidth(): number;
        /**
         * Get height, length on the Y-axis in 3D.
         */
        getHeight(): number;
        /**
         * Get length, length on the Z-axis in 3D.
         */
        getLength(): number;
        /**
         * Get (calculate) volume.
         *
         * @return width x height x length
         */
        getVolume(): number;
        /**
         * Set name.
         */
        setName(val: string): void;
        /**
         * Set width, length on the X-axis in 3D.
         */
        setWidth(val: number): void;
        /**
         * Set height, length on the Y-axis in 3D.
         */
        setHeight(val: number): void;
        /**
         * Set length, length on the Z-axis in 3D.
         */
        setLength(val: number): void;
        /**
         * <p> A type, identifier of derived class. </p>
         *
         * <h4> Derived types </h4>
         * <ul>
         *	<li> {@link Product product} </li>
         *	<li> {@link Wrapper wrapper} </li>
         * <ul>
         */
        TYPE(): string;
    }
}
declare namespace bws.packer {
    /**
     * An array of Instance objects.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class InstanceArray extends protocol.EntityArray<Instance> {
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * @inheritdoc
         */
        createChild(xml: library.XML): Instance;
        /**
         * @inheritdoc
         */
        TAG(): string;
        /**
         * @inheritdoc
         */
        CHILD_TAG(): string;
    }
}
declare namespace bws.packer {
    /**
     * @brief Packer, a solver of 3d bin packing with multiple wrappers.
     *
     * @details
     * <p> Packer is a facade class supporting packing operations in user side. You can solve a packing problem
     * by constructing Packer class with {@link WrapperArray wrappers} and {@link InstanceArray instances} to
     * pack and executing {@link optimize Packer.optimize()} method. </p>
     *
     * <p> In background side, deducting packing solution, those algorithms are used. </p>
     * <ul>
     *	<li> <a href="http://betterwaysystems.github.io/packer/reference/AirForceBinPacking.pdf" target="_blank">
     *		Airforce Bin Packing; 3D pallet packing problem: A human intelligence-based heuristic approach </a>
     *	</li>
     *	<li> Genetic Algorithm </li>
     *	<li> Greedy and Back-tracking algorithm </li>
     * </ul>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class Packer extends protocol.Entity {
        /**
         * Candidate wrappers who can contain instances.
         */
        protected wrapperArray: WrapperArray;
        /**
         * Instances trying to pack into the wrapper.
         */
        protected instanceArray: InstanceArray;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from members.
         *
         * @param wrapperArray Candidate wrappers who can contain instances.
         * @param instanceArray Instances to be packed into some wrappers.
         */
        constructor(wrapperArray: WrapperArray, instanceArray: InstanceArray);
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * Get wrapperArray.
         */
        getWrapperArray(): WrapperArray;
        /**
         * Get instanceArray.
         */
        getInstanceArray(): InstanceArray;
        /**
         * <p> Deduct
         *
         */
        optimize(): WrapperArray;
        /**
         * @brief Initialize sequence list (gene_array).
         *
         * @details
         * <p> Deducts initial sequence list by such assumption: </p>
         *
         * <ul>
         *	<li> Cost of larger wrapper is less than smaller one, within framework of price per volume unit. </li>
         *	<ul>
         *		<li> Wrapper Larger: (price: $1,000, volume: 100cm^3 -> price per volume unit: $10 / cm^3) </li>
         *		<li> Wrapper Smaller: (price: $700, volume: 50cm^3 -> price per volume unit: $14 / cm^3) </li>
         *		<li> Larger's <u>cost</u> is less than Smaller, within framework of price per volume unit </li>
         *	</ul>
         * </ul>
         *
         * <p> Method {@link initGenes initGenes()} constructs {@link WrapperGroup WrapperGroups} corresponding
         * with the {@link wrapperArray} and allocates {@link instanceArray instances} to a {@link WrapperGroup},
         * has the smallest <u>cost</u> between containbles. </p>
         *
         * <p> After executing packing solution by {@link WrapperGroup.optimize WrapperGroup.optimize()}, trying to
         * {@link repack re-pack} each {@link WrapperGroup} to another type of {@link Wrapper}, deducts the best
         * solution between them. It's the initial sequence list of genetic algorithm. </p>
         *
         * @return Initial sequence list.
         */
        protected initGenes(): GAWrapperArray;
        /**
         * Try to repack each wrappers to another type.
         *
         * @param $wrappers Wrappers to repack.
         * @return Re-packed wrappers.
         */
        protected repack($wrappers: WrapperArray): WrapperArray;
        /**
         * @inheritdoc
         */
        TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
declare namespace bws.packer {
    /**
     * A product.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class Product extends protocol.Entity implements Instance {
        /**
         * <p> Name, key of the Product. </p>
         *
         * <p> The name must be unique because a name identifies a {@link Product}. </p>
         */
        protected name: string;
        /**
         * Width of the Product, length on the X-axis in 3D.
         */
        protected width: number;
        /**
         * Height of the Product, length on the Y-axis in 3D.
         */
        protected height: number;
        /**
         * Length of the Product, length on the Z-axis in 3D.
         */
        protected length: number;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Construct from members.
         *
         * @param name Name, identifier of the Product.
         * @param width Width, length on the X-axis in 3D.
         * @param height Height, length on the Y-axis in 3D.
         * @param length Length, length on the Z-axis in 3D.
         */
        constructor(name: string, width: number, height: number, length: number);
        /**
         * Key of a Product is its name.
         */
        key(): any;
        /**
         * @inheritdoc
         */
        getName(): string;
        /**
         * @inheritdoc
         */
        getWidth(): number;
        /**
         * @inheritdoc
         */
        getHeight(): number;
        /**
         * @inheritdoc
         */
        getLength(): number;
        /**
         * @inheritdoc
         */
        getVolume(): number;
        /**
         * @inheritdoc
         */
        setName(val: string): void;
        /**
         * @inheritdoc
         */
        setWidth(val: number): void;
        /**
         * @inheritdoc
         */
        setHeight(val: number): void;
        /**
         * @inheritdoc
         */
        setLength(val: number): void;
        /**
         * @inheritdoc
         */
        TYPE(): string;
        /**
         * @inheritdoc
         */
        TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
declare namespace bws.packer {
    /**
     * <p> Wrap represents an act wrap(ping). </p>
     *
     * <p> {@link Wrap} is a class represents an act wrapping an {@link Instance} to an {@link Wrapper}.
     * To represent the relationship, Wrap uses Bridge and Capsular patterns to links and intermediates
     * relationship between Wrapper and Instance. </p>
     *
     * <p> Wrap also helps packing optimization and 3d-visualization with its own members
     * {@link orientation} and position variables {@link x}, {@link y} and {@link z}. </p>
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class Wrap extends protocol.Entity {
        /**
         * A wrapper wrapping the {@link instance}.
         */
        protected wrapper: Wrapper;
        /**
         * An instance wrapped into the {@link wrapper}.
         */
        protected instance: Instance;
        /**
         * Coordinate-X of the instance placement in the wrapper.
         */
        protected x: number;
        /**
         * Coordinate-Y of the instance placement in the wrapper.
         */
        protected y: number;
        /**
         * Coordinate-Z of the instance placement in the wrapper.
         */
        protected z: number;
        /**
         * Placement orientation of wrapped {@link instance}.
         */
        protected orientation: number;
        /**
         * Construct from a Wrapper.
         *
         * @param wrapper A wrapper who will contain an instance.
         */
        constructor(wrapper: Wrapper);
        /**
         * Construct from a Wrapper and Instance with its position and default orientation 1.
         *
         * @param wrapper A wrapper who contains the instance.
         * @param instance An instance contained into the wrapper.
         * @param x Coordinate-X of the {@link instance} placement in the {@link wrapper}.
         * @param y Coordinate-Y of the {@link instance} placement in the {@link wrapper}.
         * @param z Coordinate-Z of the {@link instance} placement in the {@link wrapper}.
         */
        constructor(wrapper: Wrapper, instance: Instance, x: number, y: number, z: number);
        /**
         * Construct from a Wrapper and Instance with its position and orientation.
         *
         * @param wrapper A wrapper who contains the instance.
         * @param instance An instance contained into the wrapper.
         * @param x Coordinate-X of the {@link instance} placement in the {@link wrapper}.
         * @param y Coordinate-Y of the {@link instance} placement in the {@link wrapper}.
         * @param z Coordinate-Z of the {@link instance} placement in the {@link wrapper}.
         * @param orientation Placement orientation of wrapped {@link instance}.
         */
        constructor(wrapper: Wrapper, instance: Instance, x: number, y: number, z: number, orientation: number);
        /**
         * @inheritdoc
         */
        construct(xml: library.XML): void;
        /**
         * Factory method of wrapped Instance.
         *
         * @param type Type of contained Instance's type.
         */
        protected createInstance(type: string): Instance;
        /**
         * Set orientation.
         *
         * @param orientation Orientation code (1 to 6).
         */
        setOrientation(orientation: number): void;
        /**
         * Set position.
         *
         * @param x Coordinate-X of the instance placement in the wrapper.
         * @param y Coordinate-Y of the instance placement in the wrapper.
         * @param z Coordinate-Z of the instance placement in the wrapper.
         */
        setPosition(x: number, y: number, z: number): void;
        /**
         * @brief Estimate orientation by given size.
         *
         * @param width Width by placement.
         * @param height Height by placement.
         * @param length Length by placement.
         */
        estimateOrientation(width: number, height: number, length: number): void;
        /**
         * @brief Orientation change is occured in level of the packer.
         *
         * @details orientation Packer's new orientation.
         */
        changeWrapperOrientation(orientation: number): void;
        /**
         * Get wrapper.
         */
        getWrapper(): Wrapper;
        /**
         * Get instance.
         */
        getInstance(): Instance;
        /**
         * Get x.
         */
        getX(): number;
        /**
         * Get y.
         */
        getY(): number;
        /**
         * Get z.
         */
        getZ(): number;
        /**
         * Get orientation.
         */
        getOrientation(): number;
        /**
         * Get width.
         */
        getLayoutWidth(): number;
        /**
         * Get height.
         */
        getLayoutHeight(): number;
        /**
         * Get length.
         */
        getLength(): number;
        /**
         * Get volume.
         */
        getVolume(): number;
        readonly $instanceName: string;
        readonly $layoutScale: string;
        readonly $position: string;
        /**
         * @inheritdoc
         */
        TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
declare namespace bws.packer {
    /**
     * A wrapper wrapping instances.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class Wrapper extends protocol.EntityDeque<Wrap> implements Instance {
        /**
         * <p> Name, key of the Wrapper. </p>
         *
         * <p> The name represents a type of Wrapper and identifies the Wrapper. </p>
         */
        protected name: string;
        /**
         * Price, cost of using an Wrapper.
         */
        protected price: number;
        /**
         * Width of the Wrapper, length on the X-axis in 3D.
         */
        protected width: number;
        /**
         * Height of the Wrapper, length on the Y-axis in 3D.
         */
        protected height: number;
        /**
         * Length of the Wrapper, length on the Z-axis in 3D.
         */
        protected length: number;
        /**
         * <p> Thickness, margin of a Wrapper causes shrinkness of containable volume. </p>
         *
         * <p> The thickness reduces each dimension's containable size (dimension - 2*thickness),
         * so finally, it reduces total containable volume (-8 * thickness^3). </p>
         */
        protected thickness: number;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Copy Constructor.
         */
        constructor(wrapper: Wrapper);
        /**
         * Construct from members.
         *
         * @param name Name, identifier of a Wrapper.
         * @param price Price, issued cost for a type of the Wrapper.
         * @param width Width, dimensional length on the X-axis in 3D.
         * @param height Height, dimensional length on the Y-axis in 3D.
         * @param length Length, dimensional length on the Z-axis in 3D.
         * @param thickness A thickness causes shrinkness on containable volume.
         */
        constructor(name: string, price: number, width: number, height: number, length: number, thickness: number);
        /**
         * @inheritdoc
         */
        createChild(xml: library.XML): Wrap;
        /**
         * Key of a Wrapper is its name.
         */
        key(): any;
        /**
         * Get name.
         */
        getName(): string;
        /**
         * Get price.
         */
        getPrice(): number;
        /**
         * Get width, length on X-axis in 3D.
         */
        getWidth(): number;
        /**
         * Get height, length on Y-axis in 3D.
         */
        getHeight(): number;
        /**
         * Get length, length on Z-axis in 3D.
         */
        getLength(): number;
        /**
         * Get thickness.
         */
        getThickness(): number;
        /**
         * <p> Get (calculate) containable width, length on the X-axis in 3D. </p>
         *
         * <p> Calculates containable width considering the {@link thickness}. </p>
         *
         * @return width - (2 x thickness)
         */
        getContainableWidth(): number;
        /**
         * <p> Get (calculate) containable height, length on the Y-axis in 3D. </p>
         *
         * <p> Calculates containable height considering the {@link thickness}. </p>
         *
         * @return height - (2 x thickness)
         */
        getContainableHeight(): number;
        /**
         * <p> Get (calculate) containable length, length on the Z-axis in 3D. </p>
         *
         * <p> Calculates containable length considering the {@link thickness}. </p>
         *
         * @return length - (2 x thickness)
         */
        getContainableLength(): number;
        /**
         * <p> Get (calculate) volume. </p>
         *
         * <h4> Notice </h4>
         * <p> If {@link thickness} of the Wrapper is not 0, the volume does not mean containable volume.
         * In that case, use {@link containableVolume} instead. </p>
         *
         * @return width x height x length
         */
        getVolume(): number;
        /**
         * <p> Get (calculate) containable volume. </p>
         *
         * <p> Calculates containable volume considering the {@link thickness}. </p>
         *
         * @return volume - {(2 x thickness) ^ 3}
         */
        getContainableVolume(): number;
        /**
         * Get utilization ratio of containable volume.
         *
         * @return utilization ratio.
         */
        getUtilization(): number;
        equals(obj: Wrapper): boolean;
        /**
         * <p> Wrapper is enough greater? </p>
         *
         * <p> Test whether the Wrapper is enough greater than an Instance to contain. </p>
         *
         * @param instance An Instance to test.
         * @return Enough greater or not.
         */
        containable(instance: Instance): boolean;
        /**
         * @inheritdoc
         */
        setName(val: string): void;
        /**
         * Set price.
         */
        setPrice(val: number): void;
        /**
         * @inheritdoc
         */
        setWidth(val: number): void;
        /**
         * @inheritdoc
         */
        setHeight(val: number): void;
        /**
         * @inheritdoc
         */
        setLength(val: number): void;
        /**
         * Set thickness.
         */
        setThickness(val: number): void;
        $name: string;
        $price: string;
        $width: string;
        $height: string;
        $length: string;
        $thickness: string;
        readonly $scale: string;
        readonly $spaceUtilization: string;
        /**
         * @inheritdoc
         */
        TYPE(): string;
        /**
         * @inheritdoc
         */
        TAG(): string;
        /**
         * @inheritdoc
         */
        CHILD_TAG(): string;
        /**
         * @inheritdoc
         */
        toXML(): library.XML;
    }
}
declare namespace bws.packer {
    /**
     * A group of {@link Wrapper Wrappers} with same type.
     *
     * @author Jeongho Nam <http://samchon.org>
     */
    class WrapperGroup extends WrapperArray {
        /**
         * <p> A sample, standard of the WrapperGroup. </p>
         *
         * <p> The sample represents what type of Wrappers are grouped into the WrapperGroup. </p>
         */
        protected sample: Wrapper;
        /**
         * Allocated instances.
         */
        protected allocatedInstanceArray: InstanceArray;
        /**
         * Default Constructor.
         */
        constructor();
        /**
         * Copy Constructor.
         */
        constructor(wrapperGroup: WrapperGroup);
        /**
         * Construct from a sample.
         *
         * @param sample A sample, standard of the WrapperGroup.
         */
        constructor(sample: Wrapper);
        /**
         * Construct from members of the {@link sample}.
         *
         * @param name Name, identifier of the sample.
         * @param price Price, issued cost for a type of the sample.
         * @param width Width, dimensional length on the X-axis in 3D, of the sample.
         * @param height Height, dimensional length on the Y-axis in 3D, of the sample.
         * @param length Length, dimensional length on the Z-axis in 3D, of the sample.
         * @param thickness A thickness, causes shrinkness on containable volume, of the sample.
         */
        constructor(name: string, price: number, width: number, height: number, length: number, thickness: number);
        /**
         * Key of a WrapperGroup is dependent on its sample.
         */
        key(): any;
        /**
         * Get sample.
         */
        getSample(): Wrapper;
        /**
         * Get allocated instances.
         */
        getAllocatedInstanceArray(): InstanceArray;
        /**
         * Get (calculate) price.
         *
         * @return (Price of the sample) x (numbers of children Wrappers)
         */
        getPrice(): number;
        /**
         * @inheritdoc
         */
        getUtilization(): number;
        /**
         * <p> Allocate instance(s) to the WrapperGroup. </p>
         *
         * <p> Inspect the instance is enough small to be wrapped into an empty wrapper. If the instance
         * is enough small, registers the instance (or repeated instances) to the {@link reserveds} and
         * returns <code>true</code>. If the instance is too large to be capsuled, returns <code>false</code>. </p>
         *
         * <h4>Note</h4>
         * <p> The word <u>the instance is enough small to be wrapped into the empty wrapper</u> means
         * the instance can be contained into an empty, a new wrapper contaning nothing literally. </p>
         *
         * <p> In the method allocate(), it doesn't consider how many instances are wrapped into ordinary
         * wrapper and how much volumes are consumed.  </p>
         *
         * @param instance An Instance to allocate.
         * @param n Repeating number of the <i>instance</i>.
         *
         * @return Whether the instance is enough small to be wrapped into a (new) wrapper
         *		   of same type with the sample.
         */
        allocate(instance: Instance, n?: number): boolean;
        /**
         * <p> Run optimization in level of the group. </p>
         *
         * <p> The optimization routine begins by creating a {@link Wrapper} like the {@link sample}. Then
         * try to pack {@link allocatedInstanceArray allocated instances} to the {@link Wrapper} as a lot as
         * possible. If there're some {@link Wrappers} can't be packed by overloading, then create a new
         * {@link Wrapper} again and try to pack {@link allocatedInstanceArray instances} again, too. </p>
         *
         * <p> Repeats those steps until all {@link alloctedInstanceArray instances} are {@link Wrap packed}
         * so that there's not any {@link Instance instance} left. </p>
         *
         * <h4> Warning </h4>
         * <p> When call this {@link optimize optimize()} method, ordinary children {@link Wrapper} objects
         * in the {@link WrapperGroup} will be substituted with the newly optimized {@link Wrapper} objects. </p>
         */
        optimize(): void;
        /**
         * <p> Wrap allocated instances into <b>a new</b> {@link Wrapper}. </p>
         *
         * <p> {@link Wrap Wraps} instances to a new Wrapper which is copied from the sample. </p>
         * <p> After the wrapping is done, the new {@link Wrapper} is registered to the {@link WrapperGroup}
         * as a child and instances failed to wrap by overloading is returned. </p>
         *
         * @param instanceArray instances to {@link Wrap wrap} into <b>a new</b> {@link Wrapper}.
         *
         * @return Instances failed to {@link Wrap wrap} by overloading.
         * @see boxologic
         */
        private pack(instanceArray);
        /**
         * @inheritdoc
         */
        TAG(): string;
    }
}
