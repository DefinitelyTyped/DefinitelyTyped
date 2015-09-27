// Type definitions for mendixmodelsdk v0.0.1
// Project: http://www.mendix.com
// Definitions by: Mendix <https://github.com/mendix>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "{}"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright {yyyy} {name of copyright owner}

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/


/// <reference path="../mobservable/mobservable.d.ts" />
declare module "mendixmodelsdk" {
    module sdk {
        module internal {
            /**
             * The `references` sub module contains all classes that handle/wrap references,
             * as a special cases of property value/settings.
             */
            module references {
                /**
                 * Abstract base class for both {@link ReferenceByName by-name} and {@link ReferenceById by-id} references
                 * to elements of type `T`, which are observed.
                 */
                class AbstractReference<T extends elements.IAbstractElement> implements properties.IObservable {
                    owner: elements.AbstractElement;
                    protected isResolved: boolean;
                    protected target: Mobservable.IObservableValue<T>;
                    protected isResolving: boolean;
                    protected referenceId: string;
                    /**
                     * Constructs and returns a new reference instance, that is owned (by a property of) an abstract element.
                     */
                    constructor(owner: elements.AbstractElement);
                    /**
                     * Registers an observer in the form of a callback with this references and fires that callback
                     * immediately if the reference is already resolved.
                     * Used by properties to observe this reference, so that storage and logical updates can be applied.
                     */
                    observe(callback: (newValue: T, oldValue: T) => void, fireImmediately?: boolean): common.IVoidCallback;
                    /**
                     * Returns the value of the wrapped reference.
                     */
                    get(): T;
                    /**
                     * Sets the value of the wrapped reference, taking care of resolution and life cycle.
                     */
                    set(newValue: T): void;
                    /**
                     * Sets only the raw target id, without trying to resolve that.
                     */
                    updateWithRawValue(value: string): void;
                    protected registerRef(): void;
                    protected unregisterRef(): void;
                    resolve(): boolean;
                    dispose(): void;
                }
                class ByIdReference<T extends elements.AbstractElement> extends AbstractReference<T> {
                    set(newValue: T): void;
                    get(): T;
                    resolve(): boolean;
                }
                class ByNameReference<T extends elements.IAbstractElement> extends AbstractReference<T> {
                    private targetType;
                    constructor(owner: elements.AbstractElement, targetType: string);
                    resolve(): boolean;
                    /**
                     * The target does no longer exist, but the stored reference should stay the same.
                     */
                    unresolve(): void;
                    dispose(): void;
                    qualifiedName(): string;
                }
            }
        }
    }
}
declare module "mendixmodelsdk" {
    module sdk {
        module internal {
            /**
             * The `structures` sub module contains all interfaces and classes related to the **structures** concept.
             */
            module structures {
                type IContainer = units.IStructuralUnit | elements.IAbstractElement;
                type Container = units.StructuralUnit | elements.AbstractElement;
                /**
                 * "Something" that contains properties.
                 * Concrete sub types: MxElement, MxStructuralUnit, MxModelUnit.
                 * Abstract sub types: MxAbstractElement, MxAbstractUnit.
                 *
                 * Each unit in the model is guaranteed to exist only once in memory.
                 */
                interface IStructure {
                    id: string;
                    typeName: string;
                    container: IContainer;
                    isLoaded: boolean;
                    /**
                     * Unit that owns/contains this thing.
                     */
                    unit: units.IAbstractUnit;
                    load<T extends IStructure>(callback?: (elem: T) => void): any;
                    load<T extends IStructure>(): T;
                    /**
                     * Renders the structure as plain JSON (without observables magic).
                     * This is intended for debugging and development convenience.
                     * Note that the resulting object is not of the interface type corresponding to this structure.
                     */
                    toPlainJson(): Object;
                }
                class Structure implements IStructure {
                    id: string;
                    typeName: string;
                    container: Container;
                    /**
                     * These deltas where created before the create delta of this element was submitted to the server.
                     * As soon as this happens, the queue is processed and should stay empty.
                     * Each element is either an delta, or a new child that was added under a specific property.
                     */
                    constructor(isCreatingNewInstance: boolean, _model: model.Model, container: Container, json: transport.IStructureJson, isPartial: boolean);
                    unit: units.IAbstractUnit;
                    isLoaded: boolean;
                    /**
                     * Asserts that the complete element is available, and not just its public part.
                     */
                    /**
                     * Should be called after deserialisation / remote updates, to make sure all references are bound to their actual value.
                     */
                    /**
                     * If the name of a model element changes, this might effect currently broken references-by-name, so let's process those.
                     */
                    /**
                     * Housekeeping: a child of ours was deleted, so let's find the part that contained it and update that part.
                     */
                    /**
                     * This model element is no longer part of the model, and can be cleaned up.
                     */
                    /**
                     * Update an existing (probably partial) interface with real contents received from the server.
                     */
                    /**
                     * Sends the change delta in case a simple property has changed.
                     */
                    /**
                     * Sends the delete in case that we were removed from the model.
                     */
                    /**
                     * Deletes a model from the model.
                     * This will automatically remove the item from its model parent,
                     * and update incoming references and send server changes.
                     */
                    delete(): void;
                    /**
                     * Transforms a IModelElement interface into a ModelElement class.
                     * (Those are technically already the same, but this function makes sure its properties are available).
                     *
                     * - If invoked without callback, it checks whether the properties are available or throw;
                     * - If invoked with callback, it will fetch the data from the server if needed, and then invoke the callback.
                     */
                    load<T extends Structure>(callback?: (elem: T) => void): any;
                    load<T extends Structure>(): T;
                    toPlainJson(): Object;
                }
            }
        }
    }
}
declare module "mendixmodelsdk" {
    module sdk {
        module internal {
            /**
             * The `instances` module contains various classes and functions
             * related to elements, specifically: (abstract) elements.
             */
            module elements {
                /**
                 * Abstract elements are structures that are referable by name.
                 * Sub types: (I)Element and (I)ModelUnit.
                 */
                interface IAbstractElement extends structures.IStructure {
                    isLoaded: boolean;
                    qualifiedName: string;
                    container: structures.IContainer;
                }
                /**
                 * See {@link IAbstractElement}.
                 */
                class AbstractElement extends structures.Structure implements IAbstractElement {
                    constructor(isCreatingNewInstance: boolean, model: model.Model, container: structures.Container, json: transport.IStructureJson, isPartial: boolean);
                    /**
                     * Checks whether all properties are available at the moment
                     *  - if false, a fetch is required to access these properties.
                     */
                    isLoaded: boolean;
                    /**
                     * Calculates the fully qualified name of this element,
                     * by visiting all parents that have $isNamespace set to `true`.
                     */
                    qualifiedName: string;
                    /**
                     * Transforms a IElement interface into a Element class, fetching the containing unit if necessary.
                     * (Those are technically already the same, but this function makes sure its properties are available.)
                     *
                     * - If invoked without callback, it checks whether the properties are available or it will throw;
                     * - If invoked with callback, it will fetch the data from the server if needed, and then invoke the callback.
                     */
                    load<T extends AbstractElement>(callback?: (elem: T) => void): any;
                    load<T extends AbstractElement>(): T;
                    /**
                     * updateElementsContainer recursively sets the unit to which this elements belong
                     * During deserialization this is not needed, but if used in the SDK, we only can set the unit once
                     * an element is actually added to the tree (buy pushing / assigning it to some part property)
                     */
                    /**
                     * Adds a back reference, i.e. a reference pointing to us,
                     * which needs to be informed of changes to this element (including deletion).
                     */
                    /**
                     * Removes the given back reference.
                     */
                    delete(): void;
                }
                /**
                 * An element (short for: "model element") lives inside a unit
                 * and contains (per being an IStructure) property values.
                 */
                interface IElement extends IAbstractElement {
                }
                class Element extends AbstractElement implements IElement {
                    container: AbstractElement;
                    constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
                    unit: units.ModelUnit;
                    /**
                     * Checks whether all attributes are available ATM
                     *  -  if false, a fetch is required to access these properties.
                     */
                    isLoaded: boolean;
                    /**
                     * Sends the appropriate create delta to the server, and also sends all pending deltas,
                     * after this element has been assigned to some parent.
                     */
                    /**
                     * Sends the appropriate create delta to the server
                     * after this element has been moved to a new parent.
                     */
                }
            }
        }
    }
}
declare module "mendixmodelsdk" {
    module sdk {
        module internal {
            /**
             * The `instances` module contains various classes and functions
             * which revolve around creating/maintaining/updating actual model contents.
             */
            module instances {
                /**
                 * Generic type alias for `Mobservable.IObservableArray<T>`.
                 */
                interface IList<T> extends Mobservable.IObservableArray<T> {
                }
                /**
                 * Base class for enumerations in the meta model.
                 * Literals of an enumeration are generated as public static constants of the generated sub class
                 * which are instances of the generated sub class.
                 */
                class IEnum {
                    protected qualifiedTsTypeName: string;
                    constructor(_name: string);
                    name: string;
                    toString(): string;
                    qualifiedTsLiteralName(): string;
                }
                /**
                 * Given some a (normalised) JSON representation of a unit,
                 * creates an instance of the corresponding `unit.AbstractUnit` sub class (structural/model)
                 * and populates that from the JSON.
                 * Should only be called if this unit was not already in memory.
                 */
                function abstractUnitJsonToInstance(model: model.Model, json: transport.IAbstractUnitJson, isPartial: boolean): units.AbstractUnit;
                /**
                 * Given some a (normalised) JSON representation of a model element,
                 * creates an instance of the corresponding `elements.Element`
                 * and populates that from the JSON.
                 * Will update existing elements if this element was created before.
                 */
                function modelElementJsonToInstance(unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): elements.Element;
            }
        }
    }
}
declare module "mendixmodelsdk" {
    module sdk {
        module internal {
            /**
             * The `units` module contains interfaces and base classes related to the concept of **units**.
             * For more information on this concept, see the README of this repository, under "About Mendix models".
             */
            module units {
                /**
                 * An abstract unit is a vertex, and usually: a node, in the project tree, i.e. a macro-level construct.
                 * Examples are: modules, folders, microflows, pages.
                 * This interface is implemented by {@link AbstractUnit}.
                 */
                interface IAbstractUnit extends structures.IStructure {
                    /**
                     * The parent unit of this unit.
                     */
                    container: IStructuralUnit;
                    /**
                     * The name of the property of the parent's type which owns this unit.
                     */
                    /**
                     * The {@link modelstore.IModelStore model store} holding the project/Mendix model this unit abides in.
                     */
                    /**
                     * Whether this unit has been completely loaded and does not consist of the unit's interface
                     *  (which corresponds to the unit being partial).
                     */
                    isLoaded: boolean;
                    /**
                     * Whether this unit is currently being loaded.
                     */
                    /**
                     * Registers a callback taking this unit as argument, to be executed after the unit has been mark
                     * as completely loaded.
                     */
                    /**
                     * Mark this unit as having been loaded.
                     */
                    /**
                     * Mark this unit as being loaded.
                     */
                }
                /**
                 * Base class for implementations of {@link IAbstractUnit}.
                 */
                class AbstractUnit extends structures.Structure implements IAbstractUnit {
                    container: StructuralUnit;
                    constructor(isCreatingNewInstance: boolean, model: model.Model, container: StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
                    /**
                     * Checks whether all attributes are available at this instant;
                     * if false, a fetch is required to access these properties.
                     */
                    isLoaded: boolean;
                    /**
                     * Sends the create delta for this unit and all pending deltas.
                     */
                }
                /**
                 * A structural unit is a node (not a leaf) in the project tree.
                 * Examples: folders & modules.
                 */
                interface IStructuralUnit extends IAbstractUnit {
                }
                /**
                 * Implementation of {@link IStructuralUnit}.
                 */
                class StructuralUnit extends AbstractUnit implements IStructuralUnit {
                    constructor(isCreatingNewInstance: boolean, model: model.Model, container: StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
                    unit: StructuralUnit;
                }
                /**
                 * Model Units
                 *
                 * A model unit is a leaf (not a node) in the project tree and the root containing model {@link elements.Element} elements.
                 * It is both a(n abstract) unit as well as "model element-like" by virtue of being an MxAbstractElement,
                 * but minus the following features of MxElement:
                 *  public - a model unit is public by nature
                 *  container - a model unit is itself the root of the tree of elements it contains
                 *
                 * A unit acts as scope to resolve by-id references and keeps a cache of elements it owns.
                 */
                interface IModelUnit extends IAbstractUnit, elements.IAbstractElement {
                    container: IStructuralUnit;
                    moduleName: string;
                }
                interface IElementsCache {
                    [id: string]: elements.AbstractElement;
                }
                /**
                 * Implementation of {@link IModelUnit}.
                 */
                class ModelUnit extends elements.AbstractElement implements IModelUnit {
                    container: StructuralUnit;
                    constructor(isCreatingNewInstance: boolean, model: model.Model, container: StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
                    unit: ModelUnit;
                    isLoaded: boolean;
                    /**
                     * Returns the module name of the model unit, which is the first section of the qualified name.
                     */
                    moduleName: string;
                }
            }
        }
    }
}
declare module "mendixmodelsdk" {
    module sdk {
        module internal {
            /**
             * The `properties` sub module contains all interfaces and classes
             * required for handling and wrapping property values/settings.
             */
            module properties {
                /**
                 * Standard interface for an observable object.
                 */
                interface IObservable {
                    observe(listener: any, fire: any): () => void;
                }
                /**
                 * Abstract base wrapper for property values/settings.
                 * All values/settings of ModelElement-s are wrapped in the appropriate way.
                 * This is particularly important for reference values which require additional magic.
                 */
                class AbstractProperty<T, P extends IObservable> {
                    protected parent: structures.Structure;
                    protected name: string;
                    protected isPublic: boolean;
                    handle: () => void;
                    observableValue: P;
                    /**
                     * initialValue is default value except parts and GUID-typed primitives.
                     * (by-id/name references do not have default values.)
                     */
                    constructor(parent: structures.Structure, name: string, isPublic: boolean, initialValue: T, ...moreArgs: any[]);
                    /**
                     * Initialize should return something that is observable.
                     * The property will observe this internal structure
                     * and make sure changes are pushed to the server whenever needed, in its onChange event.
                     */
                    initialize(value: T, ...moreConstructorArgs: any[]): P;
                    fireOnChange(): void;
                    onChange(...args: any[]): void;
                    get(): T;
                    set(newValue: T): void;
                    updateWithRawValue(value: any): void;
                    assertLoaded(): void;
                    resolveReferences(): void;
                    dispose(): void;
                }
                /**
                 * All primitive types.
                 * Note: must match exactly with MxPrimitiveTypeEnum!
                 */
                enum PrimitiveTypeEnum {
                    Integer = 0,
                    String = 1,
                    Boolean = 2,
                    Double = 3,
                    DateTime = 4,
                    Guid = 5,
                    Point = 6,
                    Size = 7,
                    Color = 8,
                    Blob = 9,
                }
                class PrimitiveProperty<T> extends AbstractProperty<T, Mobservable.IObservableValue<T>> {
                    private defaultValue;
                    private primitiveType;
                    initialize(defaultValue: T, primitiveType: PrimitiveTypeEnum): Mobservable.IObservableValue<T>;
                    get(): T;
                    set(newValue: T): void;
                    updateWithRawValue(value: T): void;
                    onChange(newValue: T, oldValue: T): void;
                }
                /**
                 * Primitive-typed property values list.
                 */
                class PrimitiveListProperty<T> extends AbstractProperty<T[], Mobservable.IObservableArray<T>> {
                    initialize(initialItems: T[]): Mobservable.IObservableArray<T>;
                    get(): Mobservable.IObservableArray<T>;
                    set(newValue: T[]): void;
                    updateWithRawValue(value: T[]): void;
                    onChange(change: Mobservable.IArraySplice<T> | Mobservable.IArrayChange<T>): void;
                    toRawChangeValue(value: T): any;
                }
                /**
                 * A property value that is an enum literal.
                 */
                class EnumProperty<T extends instances.IEnum> extends PrimitiveProperty<T> {
                    private initialValue;
                    protected enumType: new (key: string) => instances.IEnum;
                    constructor(parent: structures.Structure, name: string, isPublic: boolean, initialValue: T, enumType: new (key: string) => instances.IEnum);
                    updateWithRawValue(value: any): void;
                    onChange(newValue: any, oldValue: any): void;
                }
                /**
                 * A property value that is a list of enum literals.
                 */
                class EnumListProperty<T extends instances.IEnum> extends PrimitiveListProperty<T> {
                    private initialValue;
                    protected enumType: new (key: string) => instances.IEnum;
                    constructor(parent: structures.Structure, name: string, isPublic: boolean, initialValue: T[], enumType: new (key: string) => instances.IEnum);
                    updateWithRawValue(value: any): void;
                    toRawChangeValue(value: T): any;
                }
                /**
                 * A property value that is a (model) element.
                 * Will detect when children are moved, added, deleted and sends the appropriate deltas.
                 */
                class PartProperty<T extends elements.Element> extends AbstractProperty<T, Mobservable.IObservableValue<T>> {
                    protected parent: elements.AbstractElement;
                    private hasDefaultValue;
                    initialize(value: T, hasDefaultValue: boolean): Mobservable.IObservableValue<T>;
                    get(): T;
                    set(newValue: any): void;
                    updateWithRawValue(value: any): void;
                    onChange(newValue: elements.Element, oldValue: elements.Element): void;
                    resolveReferences(): void;
                    updateElementContainer(unit: units.ModelUnit): void;
                    dispose(): void;
                }
                /**
                 * A property value that is a list of (model) elements.
                 * Will detect when children are moved, added, deleted and sends the appropriate deltas.
                 */
                class PartListProperty<T extends elements.Element> extends AbstractProperty<T[], Mobservable.IObservableArray<T>> {
                    parent: elements.AbstractElement;
                    initialize(initialItems: T[]): Mobservable.IObservableArray<T>;
                    get(): Mobservable.IObservableArray<T>;
                    set(newValue: T[]): void;
                    updateWithRawValue(value: any): void;
                    onChange(changeData: Mobservable.IArrayChange<T> | Mobservable.IArraySplice<T>): void;
                    processChildRemoval(element: T): void;
                    processChildAddition(index: number): void;
                    resolveReferences(): void;
                    updateElementContainer(unit: units.ModelUnit): void;
                    removeChild(child: T): boolean;
                    dispose(): void;
                }
                /**
                 * Property value that references a (model) element by name.
                 */
                class ByNameReferenceProperty<T extends elements.IAbstractElement> extends AbstractProperty<T, references.ByNameReference<T>> {
                    private targetType;
                    parent: elements.AbstractElement;
                    constructor(parent: elements.AbstractElement, name: string, isPublic: boolean, initialValue: T, targetType: string);
                    initialize(value: T, targetType: string): references.ByNameReference<T>;
                    get(): T;
                    set(newValue: T): void;
                    updateWithRawValue(value: string): void;
                    resolveReferences(): void;
                    onChange(newValue: T, oldValue: T): void;
                    qualifiedName(): string;
                    dispose(): void;
                }
                /**
                 * Property value that references zero or more (model) elements by name.
                 *
                 * The reference list is only used internally, and externally a view of the referencelist that returns the real objects is exposed.
                 * So, the flow is either:
                 *  [server] -> [internal ref list (observable)] -> [update view]
                 * or:
                 *  [Sdk] -> [view] -- onchange ---> [internal ref list] --- onChange event ---> [send delta's]
                 *
                 * For simplicity sake referencesByName should be considered immutable here (TODO: they should be in general?), so that their internal value
                 * doesn't need to be observed.
                 */
                class ByNameReferenceListProperty<T extends elements.IAbstractElement> extends AbstractProperty<T[], Mobservable.IObservableArray<references.ByNameReference<T>>> {
                    private targetType;
                    parent: elements.AbstractElement;
                    private viewList;
                    private viewListDisposer;
                    constructor(parent: elements.AbstractElement, name: string, isPublic: boolean, value: T[], targetType: string);
                    initialize(value: T[]): Mobservable.IObservableArray<references.ByNameReference<T>>;
                    get(): instances.IList<T>;
                    set(newElements: T[]): void;
                    updateWithRawValue(qualifiedNames: string[]): void;
                    resolveReferences(): void;
                    qualifiedNames(): string[];
                    dispose(): void;
                    supressViewEvents: boolean;
                    replaceViewItems(newItems: T[]): void;
                    onChange(changeData: Mobservable.IArrayChange<references.ByNameReference<T>> | Mobservable.IArraySplice<references.ByNameReference<T>>): void;
                    toRawChangeValue(reference: references.ByNameReference<T>): any;
                }
                /**
                 * Property value that references a (model) element by id.
                 */
                class ByIdReferenceProperty<T extends elements.AbstractElement> extends AbstractProperty<T, references.ByIdReference<T>> {
                    parent: elements.AbstractElement;
                    initialize(value: T): references.ByIdReference<T>;
                    get(): T;
                    set(value: T): void;
                    updateWithRawValue(value: string): void;
                    resolveReferences(): void;
                    onChange(newValue: T, oldValue: T): void;
                    dispose(): void;
                }
                /**
                 * Property value that is a derived value.
                 */
                class DerivedProperty<T> extends AbstractProperty<T, Mobservable.IObservableValue<T>> {
                    constructor(parent: structures.Structure, name: string, isPublic: boolean, value: T, targetRefType?: string);
                    initialize(value: any): Mobservable.IObservableValue<any>;
                    get(): T;
                    set(value: T): void;
                    updateWithRawValue(value: any): void;
                    qualifiedName(): string;
                    dispose(): void;
                }
                /**
                 * Property value that is a list of derived values.
                 */
                class DerivedListProperty<T> extends AbstractProperty<T[], Mobservable.IObservableArray<T>> {
                    constructor(parent: structures.Structure, name: string, isPublic: boolean, value: T[], targetRefType?: string);
                    initialize(value: T[]): Mobservable.IObservableArray<T>;
                    get(): instances.IList<T>;
                    set(value: T[]): void;
                    updateWithRawValue(value: any): void;
                    qualifiedNames(): string[];
                    dispose(): void;
                }
                /**
                 * Value of a property owned by a structural unit.
                 */
                class StructuralChildProperty<T> extends AbstractProperty<T, Mobservable.IObservableValue<T>> {
                    constructor(parent: units.StructuralUnit, name: string, isPublic: boolean, value: T, targetRefType?: string);
                    initialize(value: T): Mobservable.IObservableValue<T>;
                    get(): T;
                    set(value: T): void;
                    updateWithRawValue(value: any): void;
                    dispose(): void;
                }
                /**
                 * Property instance that wraps a list of structural units.
                 */
                class StructuralChildListProperty<T> extends AbstractProperty<T[], Mobservable.IObservableArray<T>> {
                    constructor(parent: units.StructuralUnit, name: string, isPublic: boolean, value: T[], targetRefType?: string);
                    initialize(value: T[]): Mobservable.IObservableArray<T>;
                    get(): instances.IList<T>;
                    set(value: T[]): void;
                    updateWithRawValue(value: any): void;
                    dispose(): void;
                }
            }
        }
    }
}
declare module "mendixmodelsdk" {
    module sdk {
        module internal {
            /**
             * Types defined in this `transport` module express JSON serialisation and are shared with the Model API Server.
             * Some types (points, deltas) are used verbatim through the rest of the SDK.
             */
            module transport {
                /**
                 * The contents of the `MetaData` table (which always contains one row) in the MPR contained in the working copy's MPK.
                 * This is useful to determine product version and to be able to re-export the MPR as part of an MPK
                 * that can be read in by the Business Modeler.
                 */
                interface IMprMetaData {
                }
                /**
                 * The meta data for a working copy (- not for the MPR).
                 */
                interface IWorkingCopyMetaData {
                    name: string;
                    description: string;
                    avatarUrl: string;
                }
                /**
                 * The representation of a working copy.
                 */
                interface IWorkingCopy {
                    id: string;
                    metaData: IWorkingCopyMetaData;
                    /**
                     * OpenIDs of all users that are granted access.
                     */
                    members: string[];
                    /**
                     * The name of the MPR file within the working copy's MPK, relative to its root.
                     * This will typically but not necessarily equal `project.mpr`.
                     */
                    mprFileName: string;
                    mprMetaData: IMprMetaData;
                }
                /**
                 * The base interface of any "structure", i.e. either any unit or an element within a model unit.
                 */
                interface IStructureJson {
                    $Type: string;
                    $ID: string;
                }
                /**
                 * The base serialisation structure of a unit, i.e. either a structural or a model unit.
                 */
                interface IAbstractUnitJson extends IStructureJson {
                    contents: {
                        [key: string]: any;
                    };
                    containerId: string;
                    containmentName: string;
                }
                /**
                 * The base interface of an (model) element (within a model unit).
                 * (It extends {@link IStructureJson} with a general map structure to hold arbitrary properties.)
                 */
                interface IAbstractElementJson extends IStructureJson {
                    [key: string]: any;
                }
                /**
                 * The base interface for any delta.
                 */
                interface IDelta {
                    /**
                     * The type of the delta, which can be one of deltas.deltas.DeltaTypes, as a string.
                     * This type determines the rest of the JSON serialisation:<br/>
                     *  "CREATE_ELEMENT" &rarr; ICreateElementDelta,<br/>
                     *  "UPDATE_PROPERTY_VALUE" &rarr; IUpdatePropertyValueDelta,<br/>
                     *  "MOVE_ELEMENT" &rarr; IMoveElementDelta,<br/>
                     *  "DELETE_ELEMENT" &rarr; IDeleteElementDelta,<br/>
                     *  "CREATE_UNIT" &rarr; ICreateUnitDelta.
                     */
                    deltaType: string;
                    /**
                     * The ID of the unit (containing an element or property value) to which the delta is to be applied.
                     */
                    unitId: string;
                }
                /**
                 * Base interface for deltas acting on/in elements.
                 */
                interface IElementDelta extends IDelta {
                    elementId: string;
                }
                /**
                 * A delta to create an element.
                 */
                interface ICreateElementDelta extends IElementDelta {
                    /**
                     * The ID of the parent element to create the new element in.
                     */
                    parentId: string;
                    /**
                     * The name of the property to create the new element on/in.
                     * This must a property of PART kind with an element type compatible with `elementType`.
                     */
                    parentPropertyName: string;
                    /**
                     * The qualified name of the type of element to create.
                     */
                    elementType: string;
                }
                /**
                 * Information returned from a successful creation of an element.
                 */
                interface ICreateElementDeltaResult {
                    /**
                     * The index of a listy property to which the element was added,
                     * or -1 if the property is not listy.
                     */
                    additionIndex: number;
                }
                /**
                 * A delta to change the value of a property of an element,
                 * in a way that's specific by the "_mutator_"" given.
                 */
                interface IUpdatePropertyValueDelta extends IElementDelta {
                    propertyName: string;
                    mutator: IMutator;
                }
                /**
                 * Base interface for mutators acting on a property's value.
                 */
                interface IMutator {
                    /**
                     * The type of the mutator, which can be one of deltas.deltas.MutatorTypes, as a string.
                     * This type determines the rest of the JSON serialisation:<br/>
                     *  "CHANGE" &rarr; IChangeMutator,<br/>
                     *  "ADD" &rarr; IAddMutator,<br/>
                     *  "REMOVE" &rarr; IRemoveMutator,<br/>
                     *  "MOVE" &rarr; IMoveMutator.<br/>
                     */
                    mutatorType: string;
                }
                /**
                 * Sets the value of the whole property (if non-listy),
                 * or a specific item (if listy - which item is indicated by `updateIndex`) to the given `value`.
                 */
                interface IChangeMutator extends IMutator {
                    value: any;
                    updateIndex?: number;
                }
                /**
                 * Adds the given `value` to a listy property,
                 * either at the end if `insertionIndex` is not set,
                 * or at the indicated index, shifting any and all subsequent items "down".
                 */
                interface IAddMutator extends IMutator {
                    value: any;
                    insertionIndex?: number;
                }
                /**
                 * Removes the item of a listy property with the given `removalIndex`,
                 * shifting any and all subsequent items "up".
                 */
                interface IRemoveMutator extends IMutator {
                    removalIndex: number;
                }
                /**
                 * Moves the item of listy property at the given `fromIndex` to the given `toIndex`,
                 * reshuffling all other items accordingly.
                 */
                interface IMoveMutator extends IMutator {
                    fromIndex: number;
                    toIndex: number;
                }
                /**
                 * Information returned from a successful update of a property value.
                 */
                interface IUpdatePropertyValueDeltaResult {
                }
                /**
                 * A delta to move an element from one parent element to another.
                 */
                interface IMoveElementDelta extends IElementDelta {
                    /**
                     * The ID of the parent element to move the element indicated by `elementId` to.
                     */
                    newParentId: string;
                    /**
                     * The name of the property of the new parent element to put the element-to-move in/on.
                     */
                    newParentPropertyName: string;
                    /**
                     * If the indicated new property is listy, `newIndex` is the index where the element-to-move will end up.
                     * If not set, the element-to-move will be added at the end.
                     */
                    newIndex?: number;
                }
                /**
                 * Information returned from a successful move of an element.
                 */
                interface IMoveElementDeltaResult {
                    /**
                     * The ID of the parent element the element-to-move was removed from.
                     */
                    oldParentId: string;
                    /**
                     * The name of the property of the parent element the element-to-move was removed from.
                     */
                    oldParentPropertyName: string;
                    /**
                     * If the old property is listy, this was the index of the element-to-move within that list,
                     * or -1 otherwise.
                     */
                    oldIndex: number;
                    /**
                     * If the new property is listy, this is the index of the moved element within that list,
                     * or -1 otherwise.
                     */
                    newIndex: number;
                }
                /**
                 * A delta to delete an element, including all its contained properties and children.
                 */
                interface IDeleteElementDelta extends IElementDelta {
                }
                /**
                 * Information returned from a successful deletion of an element.
                 */
                interface IDeleteElementDeltaResult {
                    /** The ID of the parent element from which the element was removed. */
                    parentId: string;
                    /**
                     * The name of the property that contained the element.
                     */
                    propertyName: string;
                    /**
                     * The zero-based index at which the element was found,
                     * if it resided inside a listy property; otherwise: -1.
                     */
                    removalIndex: number;
                }
                /**
                 * A delta to create a (structural or model) unit.
                 */
                interface ICreateUnitDelta extends IDelta {
                    /**
                     * The ID of the containing unit.
                     * (This relates to the project tree.)
                     */
                    containerId: string;
                    /**
                     * The name of the property of the containing unit which will contain the unit-to-create.
                     * (This relates to the project tree.)
                     */
                    containmentName: string;
                    /**
                     * The qualified name of the type of unit to create.
                     */
                    contentType: string;
                }
                /**
                 * Information returned from a successful creation of a unit.
                 */
                interface ICreateUnitDeltaResult {
                }
            }
        }
    }
}
declare module "mendixmodelsdk" {
    /**
     * Module containing several often-used interfaces.
     */
    module common {
        /**
         * Representation of a point.
         */
        interface IPoint {
            x: number;
            y: number;
        }
        /**
         * Representation of a size, e.g. of an entity box.
         */
        interface ISize {
            width: number;
            height: number;
        }
        /**
         * Representation of an RGB color.
         */
        interface IColor {
            red: number;
            green: number;
            blue: number;
        }
        /**
         * Unification of the {@link IPoint} and {@link ISize} types.
         */
        interface IDimension extends IPoint, ISize {
        }
        /**
         * Callback interface returning nothing, not even an error.
         */
        interface IVoidCallback {
            (): void;
        }
        /**
         * Callback interface returning an error at most.
         */
        interface IErrorCallback {
            (err: any): void;
        }
        /**
         * Callback interface returning data of some type `T`.
         */
        interface ICallback<T> {
            (data: T): void;
        }
    }
}
declare module "mendixmodelsdk" {
    module sdk {
        /**
         * The `utils` module contains various utility interfaces and functions.
         */
        module utils {
            /**
             * Generates a random UUID to set the ID of an element or unit to.
             * There is no intrinsic ID collision detection/avoidance mechanism but it's good enough in practice.
             */
            function randomUuid(): any;
            /**
             * Flattens an array of arrays of items of type `T`, returning a single array
             * that consists of the concatenation of the original arrays.
             * This is especially useful for arrays of arrays of observables since the `lodash`
             * doesn't handle these correctly.
             */
            function flatten<T>(array: T[][]): T[];
            /**
             * Combines the given `parts` and returns them as an URL, avoiding duplicate slashes.
             */
            function combineUrl(...parts: string[]): string;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Projects`.
     */
    module projects {
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project relevant section in reference guide}
         */
        interface IProject extends units.IStructuralUnit {
            load(): Project;
            load(callback: (element: Project) => void): any;
            projectDocuments: instances.IList<IProjectDocument>;
            modules: instances.IList<IModule>;
            projectConversion: IProjectConversion;
            isSystemProject: boolean;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project relevant section in reference guide}
         */
        class Project extends units.StructuralUnit implements IProject {
            static typeName: string;
            projectDocuments: instances.IList<ProjectDocument>;
            modules: instances.IList<Module>;
            projectConversion: ProjectConversion;
            isSystemProject: boolean;
            constructor(container: units.IStructuralUnit);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project relevant section in reference guide}
         */
        interface IProjectDocument extends units.IModelUnit {
            container: IProject;
            load(): ProjectDocument;
            load(callback: (element: ProjectDocument) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project relevant section in reference guide}
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ProjectDocument extends units.ModelUnit implements IProjectDocument {
            static typeName: string;
            container: Project;
            constructor(container: IProject);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IFolderBase extends units.IStructuralUnit {
            load(): FolderBase;
            load(callback: (element: FolderBase) => void): any;
            folders: instances.IList<IFolder>;
            documents: instances.IList<IDocument>;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class FolderBase extends units.StructuralUnit implements IFolderBase {
            static typeName: string;
            folders: instances.IList<Folder>;
            documents: instances.IList<Document>;
            constructor(container: units.IStructuralUnit);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/howto50/Add+documents+to+a+module relevant section in reference guide}
         */
        interface IFolder extends IFolderBase {
            container: IFolderBase;
            load(): Folder;
            load(callback: (element: Folder) => void): any;
            name: string;
        }
        /**
         * See: {@link https://world.mendix.com/display/howto50/Add+documents+to+a+module relevant section in reference guide}
         */
        class Folder extends FolderBase implements IFolder {
            static typeName: string;
            container: FolderBase;
            name: string;
            constructor(container: IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Modules relevant section in reference guide}
         */
        interface IModule extends IFolderBase {
            container: IProject;
            load(): Module;
            load(callback: (element: Module) => void): any;
            sortIndex: number;
            name: string;
            domainModel: domainmodels.IDomainModel;
            moduleSecurity: security.IModuleSecurity;
            fromAppStore: boolean;
            appStoreGuid: string;
            appStoreVersionGuid: string;
            appStoreVersion: string;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Modules relevant section in reference guide}
         */
        class Module extends FolderBase implements IModule {
            static typeName: string;
            container: Project;
            sortIndex: number;
            name: string;
            domainModel: domainmodels.DomainModel;
            moduleSecurity: security.ModuleSecurity;
            fromAppStore: boolean;
            appStoreGuid: string;
            appStoreVersionGuid: string;
            appStoreVersion: string;
            constructor(container: IProject);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IModuleDocument extends units.IModelUnit {
            container: IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: FolderBase;
            constructor(container: IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends IModuleDocument {
            container: IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends ModuleDocument implements IDocument {
            static typeName: string;
            container: FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IOneTimeConversionMarker extends elements.IElement {
            container: IProjectConversion;
            load(): OneTimeConversionMarker;
            load(callback: (element: OneTimeConversionMarker) => void): any;
        }
        class OneTimeConversionMarker extends elements.Element implements IOneTimeConversionMarker {
            static typeName: string;
            container: ProjectConversion;
            name: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IProjectConversion extends units.IModelUnit {
            container: IProject;
            load(): ProjectConversion;
            load(callback: (element: ProjectConversion) => void): any;
        }
        class ProjectConversion extends units.ModelUnit implements IProjectConversion {
            static typeName: string;
            container: Project;
            markers: instances.IList<OneTimeConversionMarker>;
            constructor(container: IProject);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        class ConversionState extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Start: ConversionState;
            static SetAppstoreModules: ConversionState;
            static UpdateAppstoreModules: ConversionState;
            static SolveModelerErrors: ConversionState;
            static FixJavaCode: ConversionState;
            static FixIntegrationJavaCode: ConversionState;
            static DeployToEclipse: ConversionState;
            static MigrateJavaLibs: ConversionState;
            static RemoveUnusedJars: ConversionState;
            static CopyRuntimeJars: ConversionState;
            static Finished: ConversionState;
        }
        class HashAlgorithmType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static BCrypt: HashAlgorithmType;
            static SSHA256: HashAlgorithmType;
            static SSHA: HashAlgorithmType;
            static SHA256: HashAlgorithmType;
            static SHA1: HashAlgorithmType;
            static MD5: HashAlgorithmType;
        }
        class SecurityLevel extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static CheckNothing: SecurityLevel;
            static CheckFormsAndMicroflows: SecurityLevel;
            static CheckEverything: SecurityLevel;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Microflows`.
     */
    module microflows {
        /**
         * TODO
         */
        interface IMicroflowAction extends elements.IElement {
            container: IActionActivity;
            load(): MicroflowAction;
            load(callback: (element: MicroflowAction) => void): any;
        }
        /**
         * TODO
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class MicroflowAction extends elements.Element implements IMicroflowAction {
            static typeName: string;
            container: ActionActivity;
            errorHandlingType: ErrorHandlingType;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO: Missing in ref guide ?
         */
        interface IAppServiceCallAction extends IMicroflowAction {
            container: IActionActivity;
            load(): AppServiceCallAction;
            load(callback: (element: AppServiceCallAction) => void): any;
        }
        /**
         * TODO: Missing in ref guide ?
         */
        class AppServiceCallAction extends MicroflowAction implements IAppServiceCallAction {
            static typeName: string;
            container: ActionActivity;
            appServiceAction: appservices.IAppServiceAction;
            appServiceActionQualifiedName: string;
            parameterMappings: instances.IList<AppServiceCallParameterMapping>;
            useVariable: boolean;
            outputVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO: Missing in ref guide ?
         */
        interface IAppServiceCallParameterMapping extends elements.IElement {
            container: IAppServiceCallAction;
            load(): AppServiceCallParameterMapping;
            load(callback: (element: AppServiceCallParameterMapping) => void): any;
        }
        /**
         * TODO: Missing in ref guide ?
         */
        class AppServiceCallParameterMapping extends elements.Element implements IAppServiceCallParameterMapping {
            static typeName: string;
            container: AppServiceCallAction;
            parameter: appservices.IAppServiceActionParameter;
            parameterQualifiedName: string;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            argument: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Call+Web+Service relevant section in reference guide}
         */
        interface IWebServiceCallAction extends IMicroflowAction {
            container: IActionActivity;
            load(): WebServiceCallAction;
            load(callback: (element: WebServiceCallAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Call+Web+Service relevant section in reference guide}
         */
        class WebServiceCallAction extends MicroflowAction implements IWebServiceCallAction {
            static typeName: string;
            container: ActionActivity;
            importedWebService: webservices.IImportedWebService;
            importedWebServiceQualifiedName: string;
            serviceName: string;
            operationName: string;
            useRequestTimeOut: boolean;
            timeOut: number;
            sendNullValueChoice: NullValueOption;
            requestHeaderHandling: RequestHandling;
            requestBodyHandling: RequestHandling;
            resultHandling: ResultHandling;
            httpConfiguration: HttpConfiguration;
            isValidationRequired: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IRequestHandling extends elements.IElement {
            container: IWebServiceCallAction;
            load(): RequestHandling;
            load(callback: (element: RequestHandling) => void): any;
        }
        /**
         * TODO
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class RequestHandling extends elements.Element implements IRequestHandling {
            static typeName: string;
            container: WebServiceCallAction;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        /**
         * TODO
         */
        interface IAdvancedRequestHandling extends IRequestHandling {
            container: IWebServiceCallAction;
            load(): AdvancedRequestHandling;
            load(callback: (element: AdvancedRequestHandling) => void): any;
        }
        /**
         * TODO
         */
        class AdvancedRequestHandling extends RequestHandling implements IAdvancedRequestHandling {
            static typeName: string;
            container: WebServiceCallAction;
            parameterMappings: instances.IList<WebServiceOperationAdvancedParameterMapping>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IHttpConfiguration extends elements.IElement {
            container: IWebServiceCallAction;
            load(): HttpConfiguration;
            load(callback: (element: HttpConfiguration) => void): any;
        }
        class HttpConfiguration extends elements.Element implements IHttpConfiguration {
            static typeName: string;
            container: WebServiceCallAction;
            overrideLocation: boolean;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            customLocation: string;
            useAuthentication: boolean;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            httpAuthenticationUserName: string;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            authenticationPassword: string;
            headerEntries: instances.IList<HttpHeaderEntry>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IHttpHeaderEntry extends elements.IElement {
            container: IHttpConfiguration;
            load(): HttpHeaderEntry;
            load(callback: (element: HttpHeaderEntry) => void): any;
        }
        /**
         * TODO
         */
        class HttpHeaderEntry extends elements.Element implements IHttpHeaderEntry {
            static typeName: string;
            container: HttpConfiguration;
            key: string;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            value: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IImportMappingCall extends elements.IElement {
            container: IResultHandling;
            load(): ImportMappingCall;
            load(callback: (element: ImportMappingCall) => void): any;
        }
        /**
         * TODO
         */
        class ImportMappingCall extends elements.Element implements IImportMappingCall {
            static typeName: string;
            container: ResultHandling;
            mapping: importmappings.IImportMapping;
            mappingQualifiedName: string;
            mappingArgumentVariableName: string;
            range: Range;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Import+XML relevant section in reference guide}
         */
        interface IImportXmlAction extends IMicroflowAction {
            container: IActionActivity;
            load(): ImportXmlAction;
            load(callback: (element: ImportXmlAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Import+XML relevant section in reference guide}
         */
        class ImportXmlAction extends MicroflowAction implements IImportXmlAction {
            static typeName: string;
            container: ActionActivity;
            xmlDocumentVariableName: string;
            resultHandling: ResultHandling;
            isValidationRequired: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IResultHandling extends elements.IElement {
            load(): ResultHandling;
            load(callback: (element: ResultHandling) => void): any;
        }
        /**
         * TODO
         */
        class ResultHandling extends elements.Element implements IResultHandling {
            static typeName: string;
            importMappingCall: ImportMappingCall;
            storeInVariable: boolean;
            outputVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface ICustomRequestHandling extends IRequestHandling {
            container: IWebServiceCallAction;
            load(): CustomRequestHandling;
            load(callback: (element: CustomRequestHandling) => void): any;
        }
        /**
         * TODO
         */
        class CustomRequestHandling extends RequestHandling implements ICustomRequestHandling {
            static typeName: string;
            container: WebServiceCallAction;
            template: StringTemplate;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IMappingRequestHandling extends IRequestHandling {
            container: IWebServiceCallAction;
            load(): MappingRequestHandling;
            load(callback: (element: MappingRequestHandling) => void): any;
        }
        /**
         * TODO
         */
        class MappingRequestHandling extends RequestHandling implements IMappingRequestHandling {
            static typeName: string;
            container: WebServiceCallAction;
            mapping: exportmappings.IExportMapping;
            mappingQualifiedName: string;
            mappingArgumentVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface ISimpleRequestHandling extends IRequestHandling {
            container: IWebServiceCallAction;
            load(): SimpleRequestHandling;
            load(callback: (element: SimpleRequestHandling) => void): any;
        }
        /**
         * TODO
         */
        class SimpleRequestHandling extends RequestHandling implements ISimpleRequestHandling {
            static typeName: string;
            container: WebServiceCallAction;
            parameterMappings: instances.IList<WebServiceOperationSimpleParameterMapping>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Export+XML relevant section in reference guide}
         */
        interface IExportXmlAction extends IMicroflowAction {
            container: IActionActivity;
            load(): ExportXmlAction;
            load(callback: (element: ExportXmlAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Export+XML relevant section in reference guide}
         */
        class ExportXmlAction extends MicroflowAction implements IExportXmlAction {
            static typeName: string;
            container: ActionActivity;
            mapping: exportmappings.IExportMapping;
            mappingQualifiedName: string;
            mappingArgumentVariableName: string;
            outputMethod: OutputMethod;
            isValidationRequired: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IOutputMethod extends elements.IElement {
            container: IExportXmlAction;
            load(): OutputMethod;
            load(callback: (element: OutputMethod) => void): any;
        }
        /**
         * TODO
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class OutputMethod extends elements.Element implements IOutputMethod {
            static typeName: string;
            container: ExportXmlAction;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        /**
         * TODO
         */
        interface IFileDocumentExport extends IOutputMethod {
            container: IExportXmlAction;
            load(): FileDocumentExport;
            load(callback: (element: FileDocumentExport) => void): any;
        }
        /**
         * TODO
         */
        class FileDocumentExport extends OutputMethod implements IFileDocumentExport {
            static typeName: string;
            container: ExportXmlAction;
            targetDocumentVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IVariableExport extends IOutputMethod {
            container: IExportXmlAction;
            load(): VariableExport;
            load(callback: (element: VariableExport) => void): any;
        }
        /**
         * TODO
         */
        class VariableExport extends OutputMethod implements IVariableExport {
            static typeName: string;
            container: ExportXmlAction;
            outputVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IWebServiceOperationAdvancedParameterMapping extends elements.IElement {
            container: IAdvancedRequestHandling;
            load(): WebServiceOperationAdvancedParameterMapping;
            load(callback: (element: WebServiceOperationAdvancedParameterMapping) => void): any;
        }
        /**
         * TODO
         */
        class WebServiceOperationAdvancedParameterMapping extends elements.Element implements IWebServiceOperationAdvancedParameterMapping {
            static typeName: string;
            container: AdvancedRequestHandling;
            isChecked: boolean;
            parameterName: string;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            argument: string;
            mapping: exportmappings.IExportMapping;
            mappingQualifiedName: string;
            mappingArgumentVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IWebServiceOperationSimpleParameterMapping extends elements.IElement {
            container: ISimpleRequestHandling;
            load(): WebServiceOperationSimpleParameterMapping;
            load(callback: (element: WebServiceOperationSimpleParameterMapping) => void): any;
        }
        /**
         * TODO
         */
        class WebServiceOperationSimpleParameterMapping extends elements.Element implements IWebServiceOperationSimpleParameterMapping {
            static typeName: string;
            container: SimpleRequestHandling;
            isChecked: boolean;
            parameterName: string;
            /**
             * The value of this property is conceptually of type Mappings$ElementPath.
             */
            parameterPath: string;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            argument: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Close+Form relevant section in reference guide}
         */
        interface ICloseFormAction extends IMicroflowAction {
            container: IActionActivity;
            load(): CloseFormAction;
            load(callback: (element: CloseFormAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Close+Form relevant section in reference guide}
         */
        class CloseFormAction extends MicroflowAction implements ICloseFormAction {
            static typeName: string;
            container: ActionActivity;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Download+File relevant section in reference guide}
         */
        interface IDownloadFileAction extends IMicroflowAction {
            container: IActionActivity;
            load(): DownloadFileAction;
            load(callback: (element: DownloadFileAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Download+File relevant section in reference guide}
         */
        class DownloadFileAction extends MicroflowAction implements IDownloadFileAction {
            static typeName: string;
            container: ActionActivity;
            fileDocumentVariableName: string;
            showFileInBrowser: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDocumentTemplateParameterMapping extends elements.IElement {
            container: IGenerateDocumentAction;
            load(): DocumentTemplateParameterMapping;
            load(callback: (element: DocumentTemplateParameterMapping) => void): any;
        }
        class DocumentTemplateParameterMapping extends elements.Element implements IDocumentTemplateParameterMapping {
            static typeName: string;
            container: GenerateDocumentAction;
            widgetName: string;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            argument: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Generate+Document relevant section in reference guide}
         */
        interface IGenerateDocumentAction extends IMicroflowAction {
            container: IActionActivity;
            load(): GenerateDocumentAction;
            load(callback: (element: GenerateDocumentAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Generate+Document relevant section in reference guide}
         */
        class GenerateDocumentAction extends MicroflowAction implements IGenerateDocumentAction {
            static typeName: string;
            container: ActionActivity;
            parameterMappings: instances.IList<DocumentTemplateParameterMapping>;
            fileVariableName: string;
            languageVariableName: string;
            documentType: TargetDocumentType;
            languageSetting: LanguageSettingType;
            documentTemplate: documenttemplates.IDocumentTemplate;
            documentTemplateQualifiedName: string;
            overrideTopMargin: boolean;
            overrideBottomMargin: boolean;
            overrideLeftMargin: boolean;
            overrideRightMargin: boolean;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            marginLeftInInch: string;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            marginRightInInch: string;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            marginTopInInch: string;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            marginBottomInInch: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Show+Home+Page TODO: Page does not exist, should be created.}
         */
        interface IShowHomePageAction extends IMicroflowAction {
            container: IActionActivity;
            load(): ShowHomePageAction;
            load(callback: (element: ShowHomePageAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Show+Home+Page TODO: Page does not exist, should be created.}
         */
        class ShowHomePageAction extends MicroflowAction implements IShowHomePageAction {
            static typeName: string;
            container: ActionActivity;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Show+Message relevant section in reference guide}
         */
        interface IShowMessageAction extends IMicroflowAction {
            container: IActionActivity;
            load(): ShowMessageAction;
            load(callback: (element: ShowMessageAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Show+Message relevant section in reference guide}
         */
        class ShowMessageAction extends MicroflowAction implements IShowMessageAction {
            static typeName: string;
            container: ActionActivity;
            template: TextTemplate;
            type: ShowMessageType;
            blocking: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Show+Page relevant section in reference guide}
         */
        interface IShowPageAction extends IMicroflowAction {
            container: IActionActivity;
            load(): ShowPageAction;
            load(callback: (element: ShowPageAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Show+Page relevant section in reference guide}
         */
        class ShowPageAction extends MicroflowAction implements IShowPageAction {
            static typeName: string;
            container: ActionActivity;
            pageSettings: pages.PageSettings;
            passedObjectVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Validation+Feedback relevant section in reference guide}
         */
        interface IValidationFeedbackAction extends IMicroflowAction {
            container: IActionActivity;
            load(): ValidationFeedbackAction;
            load(callback: (element: ValidationFeedbackAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Validation+Feedback relevant section in reference guide}
         */
        class ValidationFeedbackAction extends MicroflowAction implements IValidationFeedbackAction {
            static typeName: string;
            container: ActionActivity;
            feedbackTemplate: TextTemplate;
            objectVariableName: string;
            /**
             * See: {@link https://world.mendix.com/display/refguide5/Validation+Feedback See 'Member' section in reference guide}
             */
            attribute: domainmodels.IAttribute;
            attributeQualifiedName: string;
            /**
             * See: {@link https://world.mendix.com/display/refguide5/Validation+Feedback See 'Member' section in reference guide}
             */
            association: domainmodels.IAssociationBase;
            associationQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO: Abstract
         */
        interface IMicroflowObject extends elements.IElement {
            container: IMicroflowObjectCollection;
            load(): MicroflowObject;
            load(callback: (element: MicroflowObject) => void): any;
        }
        /**
         * TODO: Abstract
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class MicroflowObject extends elements.Element implements IMicroflowObject {
            static typeName: string;
            container: MicroflowObjectCollection;
            relativeMiddlePoint: common.IPoint;
            size: common.ISize;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO: abstract element
         */
        interface IActivity extends IMicroflowObject {
            container: IMicroflowObjectCollection;
            load(): Activity;
            load(callback: (element: Activity) => void): any;
        }
        /**
         * TODO: abstract element
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Activity extends MicroflowObject implements IActivity {
            static typeName: string;
            container: MicroflowObjectCollection;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Activities relevant section in reference guide}
         */
        interface IActionActivity extends IActivity {
            container: IMicroflowObjectCollection;
            load(): ActionActivity;
            load(callback: (element: ActionActivity) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Activities relevant section in reference guide}
         */
        class ActionActivity extends Activity implements IActionActivity {
            static typeName: string;
            container: MicroflowObjectCollection;
            action: MicroflowAction;
            caption: string;
            autoGenerateCaption: boolean;
            backgroundColor: ActionActivityColor;
            documentation: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Aggregate+List relevant section in reference guide}
         */
        interface IAggregateListAction extends IMicroflowAction {
            container: IActionActivity;
            load(): AggregateListAction;
            load(callback: (element: AggregateListAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Aggregate+List relevant section in reference guide}
         */
        class AggregateListAction extends MicroflowAction implements IAggregateListAction {
            static typeName: string;
            container: ActionActivity;
            inputListVariableName: string;
            attribute: domainmodels.IAttribute;
            attributeQualifiedName: string;
            aggregateFunction: AggregateFunctionEnum;
            outputVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Annotation relevant section in reference guide}
         */
        interface IAnnotation extends IMicroflowObject {
            container: IMicroflowObjectCollection;
            load(): Annotation;
            load(callback: (element: Annotation) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Annotation relevant section in reference guide}
         */
        class Annotation extends MicroflowObject implements IAnnotation {
            static typeName: string;
            container: MicroflowObjectCollection;
            caption: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO abstract
         */
        interface IFlow extends elements.IElement {
            container: IMicroflowBase;
            load(): Flow;
            load(callback: (element: Flow) => void): any;
        }
        /**
         * TODO abstract
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Flow extends elements.Element implements IFlow {
            static typeName: string;
            container: MicroflowBase;
            origin: MicroflowObject;
            destination: MicroflowObject;
            originConnectionIndex: number;
            destinationConnectionIndex: number;
            originBezierVector: common.ISize;
            destinationBezierVector: common.ISize;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Annotation+Flow relevant section in reference guide}
         */
        interface IAnnotationFlow extends IFlow {
            container: IMicroflowBase;
            load(): AnnotationFlow;
            load(callback: (element: AnnotationFlow) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Annotation+Flow relevant section in reference guide}
         */
        class AnnotationFlow extends Flow implements IAnnotationFlow {
            static typeName: string;
            container: MicroflowBase;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IRetrieveSource extends elements.IElement {
            container: IRetrieveAction;
            load(): RetrieveSource;
            load(callback: (element: RetrieveSource) => void): any;
        }
        /**
         * TODO
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class RetrieveSource extends elements.Element implements IRetrieveSource {
            static typeName: string;
            container: RetrieveAction;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IAssociationRetrieveSource extends IRetrieveSource {
            container: IRetrieveAction;
            load(): AssociationRetrieveSource;
            load(callback: (element: AssociationRetrieveSource) => void): any;
        }
        /**
         * TODO
         */
        class AssociationRetrieveSource extends RetrieveSource implements IAssociationRetrieveSource {
            static typeName: string;
            container: RetrieveAction;
            startVariableName: string;
            association: domainmodels.IAssociationBase;
            associationQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IListOperation extends elements.IElement {
            container: IListOperationAction;
            load(): ListOperation;
            load(callback: (element: ListOperation) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ListOperation extends elements.Element implements IListOperation {
            static typeName: string;
            container: ListOperationAction;
            listVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IBinaryListOperation extends IListOperation {
            container: IListOperationAction;
            load(): BinaryListOperation;
            load(callback: (element: BinaryListOperation) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class BinaryListOperation extends ListOperation implements IBinaryListOperation {
            static typeName: string;
            container: ListOperationAction;
            secondListOrObjectName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Break+Event relevant section in reference guide}
         */
        interface IBreakEvent extends IMicroflowObject {
            container: IMicroflowObjectCollection;
            load(): BreakEvent;
            load(callback: (element: BreakEvent) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Break+Event relevant section in reference guide}
         */
        class BreakEvent extends MicroflowObject implements IBreakEvent {
            static typeName: string;
            container: MicroflowObjectCollection;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface ICaseValue extends elements.IElement {
            container: ISequenceFlow;
            load(): CaseValue;
            load(callback: (element: CaseValue) => void): any;
        }
        /**
         * TODO
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class CaseValue extends elements.Element implements ICaseValue {
            static typeName: string;
            container: SequenceFlow;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Cast+Object relevant section in reference guide}
         */
        interface ICastAction extends IMicroflowAction {
            container: IActionActivity;
            load(): CastAction;
            load(callback: (element: CastAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Cast+Object relevant section in reference guide}
         */
        class CastAction extends MicroflowAction implements ICastAction {
            static typeName: string;
            container: ActionActivity;
            outputVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IChangeMembersAction extends IMicroflowAction {
            container: IActionActivity;
            load(): ChangeMembersAction;
            load(callback: (element: ChangeMembersAction) => void): any;
        }
        /**
         * TODO
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ChangeMembersAction extends MicroflowAction implements IChangeMembersAction {
            static typeName: string;
            container: ActionActivity;
            items: instances.IList<MemberChange>;
            refreshInClient: boolean;
            commit: CommitEnum;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Change+Object relevant section in reference guide}
         */
        interface IChangeObjectAction extends IChangeMembersAction {
            container: IActionActivity;
            load(): ChangeObjectAction;
            load(callback: (element: ChangeObjectAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Change+Object relevant section in reference guide}
         */
        class ChangeObjectAction extends ChangeMembersAction implements IChangeObjectAction {
            static typeName: string;
            container: ActionActivity;
            changeVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IMemberChange extends elements.IElement {
            container: IChangeMembersAction;
            load(): MemberChange;
            load(callback: (element: MemberChange) => void): any;
        }
        /**
         * TODO
         */
        class MemberChange extends elements.Element implements IMemberChange {
            static typeName: string;
            container: ChangeMembersAction;
            attribute: domainmodels.IAttribute;
            attributeQualifiedName: string;
            association: domainmodels.IAssociationBase;
            associationQualifiedName: string;
            type: ChangeActionItemType;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            value: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Change+List relevant section in reference guide}
         */
        interface IChangeListAction extends IMicroflowAction {
            container: IActionActivity;
            load(): ChangeListAction;
            load(callback: (element: ChangeListAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Change+List relevant section in reference guide}
         */
        class ChangeListAction extends MicroflowAction implements IChangeListAction {
            static typeName: string;
            container: ActionActivity;
            changeVariableName: string;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            value: string;
            type: ChangeListActionType;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Change+Variable relevant section in reference guide}
         */
        interface IChangeVariableAction extends IMicroflowAction {
            container: IActionActivity;
            load(): ChangeVariableAction;
            load(callback: (element: ChangeVariableAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Change+Variable relevant section in reference guide}
         */
        class ChangeVariableAction extends MicroflowAction implements IChangeVariableAction {
            static typeName: string;
            container: ActionActivity;
            changeVariableName: string;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            value: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Commit+Object(s) relevant section in reference guide}
         */
        interface ICommitAction extends IMicroflowAction {
            container: IActionActivity;
            load(): CommitAction;
            load(callback: (element: CommitAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Commit+Object(s) relevant section in reference guide}
         */
        class CommitAction extends MicroflowAction implements ICommitAction {
            static typeName: string;
            container: ActionActivity;
            withEvents: boolean;
            commitVariableName: string;
            refreshInClient: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO: also described in ImporrtXmlAction and CallWebServiceAction
         */
        interface IRange extends elements.IElement {
            load(): Range;
            load(callback: (element: Range) => void): any;
        }
        /**
         * TODO: also described in ImporrtXmlAction and CallWebServiceAction
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Range extends elements.Element implements IRange {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        /**
         * TODO: also described in ImporrtXmlAction and CallWebServiceAction
         */
        interface IConstantRange extends IRange {
            load(): ConstantRange;
            load(callback: (element: ConstantRange) => void): any;
        }
        /**
         * TODO: also described in ImporrtXmlAction and CallWebServiceAction
         */
        class ConstantRange extends Range implements IConstantRange {
            static typeName: string;
            singleObject: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IContains extends IBinaryListOperation {
            container: IListOperationAction;
            load(): Contains;
            load(callback: (element: Contains) => void): any;
        }
        class Contains extends BinaryListOperation implements IContains {
            static typeName: string;
            container: ListOperationAction;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Continue+Event relevant section in reference guide}
         */
        interface IContinueEvent extends IMicroflowObject {
            container: IMicroflowObjectCollection;
            load(): ContinueEvent;
            load(callback: (element: ContinueEvent) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Continue+Event relevant section in reference guide}
         */
        class ContinueEvent extends MicroflowObject implements IContinueEvent {
            static typeName: string;
            container: MicroflowObjectCollection;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Persistent+Create+Object relevant section in reference guide}
         */
        interface IDeprecatedCreateAction extends IMicroflowAction {
            container: IActionActivity;
            load(): DeprecatedCreateAction;
            load(callback: (element: DeprecatedCreateAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Persistent+Create+Object relevant section in reference guide}
         */
        class DeprecatedCreateAction extends MicroflowAction implements IDeprecatedCreateAction {
            static typeName: string;
            container: ActionActivity;
            entity: domainmodels.IEntity;
            entityQualifiedName: string;
            refreshInClient: boolean;
            outputVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Create+Object relevant section in reference guide}
         */
        interface ICreateObjectAction extends IChangeMembersAction {
            container: IActionActivity;
            load(): CreateObjectAction;
            load(callback: (element: CreateObjectAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Create+Object relevant section in reference guide}
         */
        class CreateObjectAction extends ChangeMembersAction implements ICreateObjectAction {
            static typeName: string;
            container: ActionActivity;
            entity: domainmodels.IEntity;
            entityQualifiedName: string;
            outputVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Create+List relevant section in reference guide}
         */
        interface ICreateListAction extends IMicroflowAction {
            container: IActionActivity;
            load(): CreateListAction;
            load(callback: (element: CreateListAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Create+List relevant section in reference guide}
         */
        class CreateListAction extends MicroflowAction implements ICreateListAction {
            static typeName: string;
            container: ActionActivity;
            entity: domainmodels.IEntity;
            entityQualifiedName: string;
            outputVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Create+Variable relevant section in reference guide}
         */
        interface ICreateVariableAction extends IMicroflowAction {
            container: IActionActivity;
            load(): CreateVariableAction;
            load(callback: (element: CreateVariableAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Create+Variable relevant section in reference guide}
         */
        class CreateVariableAction extends MicroflowAction implements ICreateVariableAction {
            static typeName: string;
            container: ActionActivity;
            variableName: string;
            /**
             * The value of this property is conceptually of type Common$DataType.
             */
            variableDataType: string;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            initialValue: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO: also described in ImporrtXmlAction and CallWebServiceAction
         */
        interface ICustomRange extends IRange {
            load(): CustomRange;
            load(callback: (element: CustomRange) => void): any;
        }
        /**
         * TODO: also described in ImporrtXmlAction and CallWebServiceAction
         */
        class CustomRange extends Range implements ICustomRange {
            static typeName: string;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            limitExpression: string;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            offsetExpression: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IDatabaseRetrieveSource extends IRetrieveSource {
            container: IRetrieveAction;
            load(): DatabaseRetrieveSource;
            load(callback: (element: DatabaseRetrieveSource) => void): any;
        }
        /**
         * TODO
         */
        class DatabaseRetrieveSource extends RetrieveSource implements IDatabaseRetrieveSource {
            static typeName: string;
            container: RetrieveAction;
            entity: domainmodels.IEntity;
            entityQualifiedName: string;
            range: Range;
            /**
             * The value of this property is conceptually of type XPathConstraints$XPathConstraint.
             */
            xPathConstraint: string;
            sortItemList: SortItemList;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Delete+Object(s) relevant section in reference guide}
         */
        interface IDeleteAction extends IMicroflowAction {
            container: IActionActivity;
            load(): DeleteAction;
            load(callback: (element: DeleteAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Delete+Object(s) relevant section in reference guide}
         */
        class DeleteAction extends MicroflowAction implements IDeleteAction {
            static typeName: string;
            container: ActionActivity;
            deleteVariableName: string;
            refreshInClient: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/End+Event relevant section in reference guide}
         */
        interface IEndEvent extends IMicroflowObject {
            container: IMicroflowObjectCollection;
            load(): EndEvent;
            load(callback: (element: EndEvent) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/End+Event relevant section in reference guide}
         */
        class EndEvent extends MicroflowObject implements IEndEvent {
            static typeName: string;
            container: MicroflowObjectCollection;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            returnValue: string;
            documentation: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IEnumerationCase extends ICaseValue {
            container: ISequenceFlow;
            load(): EnumerationCase;
            load(callback: (element: EnumerationCase) => void): any;
        }
        /**
         * TODO
         */
        class EnumerationCase extends CaseValue implements IEnumerationCase {
            static typeName: string;
            container: SequenceFlow;
            value: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IListEquals extends IBinaryListOperation {
            container: IListOperationAction;
            load(): ListEquals;
            load(callback: (element: ListEquals) => void): any;
        }
        class ListEquals extends BinaryListOperation implements IListEquals {
            static typeName: string;
            container: ListOperationAction;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Error+Event relevant section in reference guide}
         */
        interface IErrorEvent extends IMicroflowObject {
            container: IMicroflowObjectCollection;
            load(): ErrorEvent;
            load(callback: (element: ErrorEvent) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Error+Event relevant section in reference guide}
         */
        class ErrorEvent extends MicroflowObject implements IErrorEvent {
            static typeName: string;
            container: MicroflowObjectCollection;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Merge relevant section in reference guide}
         */
        interface IExclusiveMerge extends IMicroflowObject {
            container: IMicroflowObjectCollection;
            load(): ExclusiveMerge;
            load(callback: (element: ExclusiveMerge) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Merge relevant section in reference guide}
         */
        class ExclusiveMerge extends MicroflowObject implements IExclusiveMerge {
            static typeName: string;
            container: MicroflowObjectCollection;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Exclusive+Split relevant section in reference guide}
         */
        interface IExclusiveSplit extends IMicroflowObject {
            container: IMicroflowObjectCollection;
            load(): ExclusiveSplit;
            load(callback: (element: ExclusiveSplit) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Exclusive+Split relevant section in reference guide}
         */
        class ExclusiveSplit extends MicroflowObject implements IExclusiveSplit {
            static typeName: string;
            container: MicroflowObjectCollection;
            splitCondition: SplitCondition;
            caption: string;
            errorHandlingType: ErrorHandlingType;
            documentation: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO : Abstract
         */
        interface ISplitCondition extends elements.IElement {
            container: IExclusiveSplit;
            load(): SplitCondition;
            load(callback: (element: SplitCondition) => void): any;
        }
        /**
         * TODO : Abstract
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class SplitCondition extends elements.Element implements ISplitCondition {
            static typeName: string;
            container: ExclusiveSplit;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IExpressionSplitCondition extends ISplitCondition {
            container: IExclusiveSplit;
            load(): ExpressionSplitCondition;
            load(callback: (element: ExpressionSplitCondition) => void): any;
        }
        class ExpressionSplitCondition extends SplitCondition implements IExpressionSplitCondition {
            static typeName: string;
            container: ExclusiveSplit;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            expression: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IInspectAttribute extends IListOperation {
            container: IListOperationAction;
            load(): InspectAttribute;
            load(callback: (element: InspectAttribute) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class InspectAttribute extends ListOperation implements IInspectAttribute {
            static typeName: string;
            container: ListOperationAction;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            expression: string;
            attribute: domainmodels.IAttribute;
            attributeQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IFilter extends IInspectAttribute {
            container: IListOperationAction;
            load(): Filter;
            load(callback: (element: Filter) => void): any;
        }
        class Filter extends InspectAttribute implements IFilter {
            static typeName: string;
            container: ListOperationAction;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IFind extends IInspectAttribute {
            container: IListOperationAction;
            load(): Find;
            load(callback: (element: Find) => void): any;
        }
        class Find extends InspectAttribute implements IFind {
            static typeName: string;
            container: ListOperationAction;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IHead extends IListOperation {
            container: IListOperationAction;
            load(): Head;
            load(callback: (element: Head) => void): any;
        }
        class Head extends ListOperation implements IHead {
            static typeName: string;
            container: ListOperationAction;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IInheritanceCase extends ICaseValue {
            container: ISequenceFlow;
            load(): InheritanceCase;
            load(callback: (element: InheritanceCase) => void): any;
        }
        /**
         * TODO
         */
        class InheritanceCase extends CaseValue implements IInheritanceCase {
            static typeName: string;
            container: SequenceFlow;
            value: domainmodels.IEntity;
            valueQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Inheritance+Split relevant section in reference guide}
         */
        interface IInheritanceSplit extends IMicroflowObject {
            container: IMicroflowObjectCollection;
            load(): InheritanceSplit;
            load(callback: (element: InheritanceSplit) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Inheritance+Split relevant section in reference guide}
         */
        class InheritanceSplit extends MicroflowObject implements IInheritanceSplit {
            static typeName: string;
            container: MicroflowObjectCollection;
            splitVariableName: string;
            caption: string;
            documentation: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IIntersect extends IBinaryListOperation {
            container: IListOperationAction;
            load(): Intersect;
            load(callback: (element: Intersect) => void): any;
        }
        class Intersect extends BinaryListOperation implements IIntersect {
            static typeName: string;
            container: ListOperationAction;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Java+Action+Call relevant section in reference guide}
         */
        interface IJavaActionCallAction extends IMicroflowAction {
            container: IActionActivity;
            load(): JavaActionCallAction;
            load(callback: (element: JavaActionCallAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Java+Action+Call relevant section in reference guide}
         */
        class JavaActionCallAction extends MicroflowAction implements IJavaActionCallAction {
            static typeName: string;
            container: ActionActivity;
            javaAction: javaactions.IJavaAction;
            javaActionQualifiedName: string;
            parameterMappings: instances.IList<JavaActionParameterMapping>;
            outputVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IJavaActionParameterMapping extends elements.IElement {
            container: IJavaActionCallAction;
            load(): JavaActionParameterMapping;
            load(callback: (element: JavaActionParameterMapping) => void): any;
        }
        class JavaActionParameterMapping extends elements.Element implements IJavaActionParameterMapping {
            static typeName: string;
            container: JavaActionCallAction;
            parameter: javaactions.IJavaActionParameter;
            parameterQualifiedName: string;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            argument: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/List+Operation relevant section in reference guide}
         */
        interface IListOperationAction extends IMicroflowAction {
            container: IActionActivity;
            load(): ListOperationAction;
            load(callback: (element: ListOperationAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/List+Operation relevant section in reference guide}
         */
        class ListOperationAction extends MicroflowAction implements IListOperationAction {
            static typeName: string;
            container: ActionActivity;
            operation: ListOperation;
            outputVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Log+Message relevant section in reference guide}
         */
        interface ILogMessageAction extends IMicroflowAction {
            container: IActionActivity;
            load(): LogMessageAction;
            load(callback: (element: LogMessageAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Log+Message relevant section in reference guide}
         */
        class LogMessageAction extends MicroflowAction implements ILogMessageAction {
            static typeName: string;
            container: ActionActivity;
            level: LogLevel;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            node: string;
            messageTemplate: StringTemplate;
            includeLatestStackTrace: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Loop relevant section in reference guide}
         */
        interface ILoopedActivity extends IActivity {
            container: IMicroflowObjectCollection;
            load(): LoopedActivity;
            load(callback: (element: LoopedActivity) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Loop relevant section in reference guide}
         */
        class LoopedActivity extends Activity implements ILoopedActivity {
            static typeName: string;
            container: MicroflowObjectCollection;
            objectCollection: MicroflowObjectCollection;
            iteratedListVariableName: string;
            loopVariableName: string;
            errorHandlingType: ErrorHandlingType;
            documentation: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO: Abstract
         */
        interface IMicroflowBase extends projects.IDocument {
            container: projects.IFolderBase;
            load(): MicroflowBase;
            load(callback: (element: MicroflowBase) => void): any;
            /**
             * The value of this property is conceptually of type Common$DataType.
             */
            returnType: string;
        }
        /**
         * TODO: Abstract
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class MicroflowBase extends projects.Document implements IMicroflowBase {
            static typeName: string;
            container: projects.FolderBase;
            objectCollection: MicroflowObjectCollection;
            flows: instances.IList<Flow>;
            /**
             * The value of this property is conceptually of type Common$DataType.
             */
            returnType: string;
            applyEntityAccess: boolean;
            markAsUsed: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Microflows relevant section in reference guide}
         */
        interface IMicroflow extends IMicroflowBase {
            container: projects.IFolderBase;
            load(): Microflow;
            load(callback: (element: Microflow) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Microflows relevant section in reference guide}
         */
        class Microflow extends MicroflowBase implements IMicroflow {
            static typeName: string;
            container: projects.FolderBase;
            allowedModuleRoles: instances.IList<security.IModuleRole>;
            allowedModuleRolesQualifiedNames: string[];
            allowConcurrentExecution: boolean;
            concurrenyErrorMessage: texts.Text;
            concurrencyErrorMicroflow: IMicroflow;
            concurrencyErrorMicroflowQualifiedName: string;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMicroflowCall extends elements.IElement {
            container: IMicroflowCallAction;
            load(): MicroflowCall;
            load(callback: (element: MicroflowCall) => void): any;
        }
        class MicroflowCall extends elements.Element implements IMicroflowCall {
            static typeName: string;
            container: MicroflowCallAction;
            microflow: IMicroflow;
            microflowQualifiedName: string;
            parameterMappings: instances.IList<MicroflowCallParameterMapping>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Microflow+Call relevant section in reference guide}
         */
        interface IMicroflowCallAction extends IMicroflowAction {
            container: IActionActivity;
            load(): MicroflowCallAction;
            load(callback: (element: MicroflowCallAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Microflow+Call relevant section in reference guide}
         */
        class MicroflowCallAction extends MicroflowAction implements IMicroflowCallAction {
            static typeName: string;
            container: ActionActivity;
            microflowCall: MicroflowCall;
            useReturnVariable: boolean;
            outputVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMicroflowCallParameterMapping extends elements.IElement {
            container: IMicroflowCall;
            load(): MicroflowCallParameterMapping;
            load(callback: (element: MicroflowCallParameterMapping) => void): any;
        }
        class MicroflowCallParameterMapping extends elements.Element implements IMicroflowCallParameterMapping {
            static typeName: string;
            container: MicroflowCall;
            parameter: IMicroflowParameter;
            parameterQualifiedName: string;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            argument: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO: artificial object
         */
        interface IMicroflowObjectCollection extends elements.IElement {
            load(): MicroflowObjectCollection;
            load(callback: (element: MicroflowObjectCollection) => void): any;
        }
        /**
         * TODO: artificial object
         */
        class MicroflowObjectCollection extends elements.Element implements IMicroflowObjectCollection {
            static typeName: string;
            objects: instances.IList<MicroflowObject>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMicroflowParameterBase extends elements.IElement {
            container: IMicroflowBase;
            load(): MicroflowParameterBase;
            load(callback: (element: MicroflowParameterBase) => void): any;
            name: string;
            /**
             * The value of this property is conceptually of type Common$DataType.
             */
            type: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class MicroflowParameterBase extends elements.Element implements IMicroflowParameterBase {
            static typeName: string;
            container: MicroflowBase;
            name: string;
            /**
             * The value of this property is conceptually of type Common$DataType.
             */
            type: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Parameter relevant section in reference guide}
         */
        interface IMicroflowParameter extends IMicroflowParameterBase {
            container: IMicroflow;
            load(): MicroflowParameter;
            load(callback: (element: MicroflowParameter) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Parameter relevant section in reference guide}
         */
        class MicroflowParameter extends MicroflowParameterBase implements IMicroflowParameter {
            static typeName: string;
            container: Microflow;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Parameter relevant section in reference guide}
         */
        interface IRuleParameter extends IMicroflowParameterBase {
            container: IRule;
            load(): RuleParameter;
            load(callback: (element: RuleParameter) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Parameter relevant section in reference guide}
         */
        class RuleParameter extends MicroflowParameterBase implements IRuleParameter {
            static typeName: string;
            container: Rule;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMicroflowParameterObject extends IMicroflowObject {
            container: IMicroflowObjectCollection;
            load(): MicroflowParameterObject;
            load(callback: (element: MicroflowParameterObject) => void): any;
        }
        class MicroflowParameterObject extends MicroflowObject implements IMicroflowParameterObject {
            static typeName: string;
            container: MicroflowObjectCollection;
            name: string;
            /**
             * The value of this property is conceptually of type Common$DataType.
             */
            type: string;
            documentation: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface INoCase extends ICaseValue {
            container: ISequenceFlow;
            load(): NoCase;
            load(callback: (element: NoCase) => void): any;
        }
        /**
         * TODO
         */
        class NoCase extends CaseValue implements INoCase {
            static typeName: string;
            container: SequenceFlow;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Retrieve relevant section in reference guide}
         */
        interface IRetrieveAction extends IMicroflowAction {
            container: IActionActivity;
            load(): RetrieveAction;
            load(callback: (element: RetrieveAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Retrieve relevant section in reference guide}
         */
        class RetrieveAction extends MicroflowAction implements IRetrieveAction {
            static typeName: string;
            container: ActionActivity;
            retrieveSource: RetrieveSource;
            outputVariableName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Rollback+Object relevant section in reference guide}
         */
        interface IRollbackAction extends IMicroflowAction {
            container: IActionActivity;
            load(): RollbackAction;
            load(callback: (element: RollbackAction) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Rollback+Object relevant section in reference guide}
         */
        class RollbackAction extends MicroflowAction implements IRollbackAction {
            static typeName: string;
            container: ActionActivity;
            rollbackVariableName: string;
            refreshInClient: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Rules relevant section in reference guide}
         */
        interface IRule extends IMicroflowBase {
            container: projects.IFolderBase;
            load(): Rule;
            load(callback: (element: Rule) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Rules relevant section in reference guide}
         */
        class Rule extends MicroflowBase implements IRule {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IRuleCall extends elements.IElement {
            container: IRuleSplitCondition;
            load(): RuleCall;
            load(callback: (element: RuleCall) => void): any;
        }
        /**
         * TODO
         */
        class RuleCall extends elements.Element implements IRuleCall {
            static typeName: string;
            container: RuleSplitCondition;
            rule: IRule;
            ruleQualifiedName: string;
            parameterMappings: instances.IList<RuleCallParameterMapping>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IRuleCallParameterMapping extends elements.IElement {
            container: IRuleCall;
            load(): RuleCallParameterMapping;
            load(callback: (element: RuleCallParameterMapping) => void): any;
        }
        /**
         * TODO
         */
        class RuleCallParameterMapping extends elements.Element implements IRuleCallParameterMapping {
            static typeName: string;
            container: RuleCall;
            parameter: IRuleParameter;
            parameterQualifiedName: string;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            argument: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IRuleSplitCondition extends ISplitCondition {
            container: IExclusiveSplit;
            load(): RuleSplitCondition;
            load(callback: (element: RuleSplitCondition) => void): any;
        }
        class RuleSplitCondition extends SplitCondition implements IRuleSplitCondition {
            static typeName: string;
            container: ExclusiveSplit;
            ruleCall: RuleCall;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Sequence+Flow relevant section in reference guide}
         */
        interface ISequenceFlow extends IFlow {
            container: IMicroflowBase;
            load(): SequenceFlow;
            load(callback: (element: SequenceFlow) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Sequence+Flow relevant section in reference guide}
         */
        class SequenceFlow extends Flow implements ISequenceFlow {
            static typeName: string;
            container: MicroflowBase;
            caseValue: CaseValue;
            isErrorHandler: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ISort extends IListOperation {
            container: IListOperationAction;
            load(): Sort;
            load(callback: (element: Sort) => void): any;
        }
        class Sort extends ListOperation implements ISort {
            static typeName: string;
            container: ListOperationAction;
            sortItemList: SortItemList;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface ISortItem extends elements.IElement {
            container: ISortItemList;
            load(): SortItem;
            load(callback: (element: SortItem) => void): any;
        }
        /**
         * TODO
         */
        class SortItem extends elements.Element implements ISortItem {
            static typeName: string;
            container: SortItemList;
            /**
             * The value of this property is conceptually of type Paths$AttributePath.
             */
            attributePath: string;
            sortOrder: SortOrderEnum;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface ISortItemList extends elements.IElement {
            load(): SortItemList;
            load(callback: (element: SortItemList) => void): any;
        }
        /**
         * TODO
         */
        class SortItemList extends elements.Element implements ISortItemList {
            static typeName: string;
            items: instances.IList<SortItem>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Start+Event relevant section in reference guide}
         */
        interface IStartEvent extends IMicroflowObject {
            container: IMicroflowObjectCollection;
            load(): StartEvent;
            load(callback: (element: StartEvent) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Start+Event relevant section in reference guide}
         */
        class StartEvent extends MicroflowObject implements IStartEvent {
            static typeName: string;
            container: MicroflowObjectCollection;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ITemplate extends elements.IElement {
            load(): Template;
            load(callback: (element: Template) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Template extends elements.Element implements ITemplate {
            static typeName: string;
            arguments: instances.IList<TemplateArgument>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface IStringTemplate extends ITemplate {
            load(): StringTemplate;
            load(callback: (element: StringTemplate) => void): any;
        }
        /**
         * TODO
         */
        class StringTemplate extends Template implements IStringTemplate {
            static typeName: string;
            text: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ISubtract extends IBinaryListOperation {
            container: IListOperationAction;
            load(): Subtract;
            load(callback: (element: Subtract) => void): any;
        }
        class Subtract extends BinaryListOperation implements ISubtract {
            static typeName: string;
            container: ListOperationAction;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ITail extends IListOperation {
            container: IListOperationAction;
            load(): Tail;
            load(callback: (element: Tail) => void): any;
        }
        class Tail extends ListOperation implements ITail {
            static typeName: string;
            container: ListOperationAction;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface ITemplateArgument extends elements.IElement {
            container: ITemplate;
            load(): TemplateArgument;
            load(callback: (element: TemplateArgument) => void): any;
        }
        /**
         * TODO
         */
        class TemplateArgument extends elements.Element implements ITemplateArgument {
            static typeName: string;
            container: Template;
            /**
             * The value of this property is conceptually of type MicroflowExpressions$MicroflowExpression.
             */
            expression: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * TODO
         */
        interface ITextTemplate extends ITemplate {
            load(): TextTemplate;
            load(callback: (element: TextTemplate) => void): any;
        }
        /**
         * TODO
         */
        class TextTemplate extends Template implements ITextTemplate {
            static typeName: string;
            text: texts.Text;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IUnion extends IBinaryListOperation {
            container: IListOperationAction;
            load(): Union;
            load(callback: (element: Union) => void): any;
        }
        class Union extends BinaryListOperation implements IUnion {
            static typeName: string;
            container: ListOperationAction;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        class NullValueOption extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static SendAsNil: NullValueOption;
            static LeaveOutElement: NullValueOption;
        }
        class LanguageSettingType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static CurrentUser: LanguageSettingType;
            static ProjectDefault: LanguageSettingType;
            static Variable: LanguageSettingType;
        }
        class TargetDocumentType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static HTML: TargetDocumentType;
            static PDF: TargetDocumentType;
            static DOCX: TargetDocumentType;
            static DOC: TargetDocumentType;
            static RTF: TargetDocumentType;
            static ODT: TargetDocumentType;
        }
        class ShowMessageType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Information: ShowMessageType;
            static Warning: ShowMessageType;
            static Error: ShowMessageType;
        }
        class ActionActivityColor extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Default: ActionActivityColor;
            static Red: ActionActivityColor;
            static Orange: ActionActivityColor;
            static Yellow: ActionActivityColor;
            static Green: ActionActivityColor;
            static Blue: ActionActivityColor;
            static Purple: ActionActivityColor;
            static Gray: ActionActivityColor;
        }
        class AggregateFunctionEnum extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Sum: AggregateFunctionEnum;
            static Average: AggregateFunctionEnum;
            static Count: AggregateFunctionEnum;
            static Minimum: AggregateFunctionEnum;
            static Maximum: AggregateFunctionEnum;
        }
        class ChangeActionItemType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Set: ChangeActionItemType;
            static Add: ChangeActionItemType;
            static Remove: ChangeActionItemType;
        }
        class ChangeListActionType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Set: ChangeListActionType;
            static Add: ChangeListActionType;
            static Remove: ChangeListActionType;
            static Clear: ChangeListActionType;
        }
        class CommitEnum extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Yes: CommitEnum;
            static YesWithoutEvents: CommitEnum;
            static No: CommitEnum;
        }
        class ErrorHandlingType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Rollback: ErrorHandlingType;
            static Custom: ErrorHandlingType;
            static CustomWithoutRollBack: ErrorHandlingType;
            static Continue: ErrorHandlingType;
        }
        class LogLevel extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Trace: LogLevel;
            static Debug: LogLevel;
            static Info: LogLevel;
            static Warning: LogLevel;
            static Error: LogLevel;
            static Critical: LogLevel;
        }
        class SortOrderEnum extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Ascending: SortOrderEnum;
            static Descending: SortOrderEnum;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `WebServices`.
     */
    module webservices {
        interface IDataMember extends elements.IElement {
            load(): DataMember;
            load(callback: (element: DataMember) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class DataMember extends elements.Element implements IDataMember {
            static typeName: string;
            isLockedByContract: boolean;
            exposedName: string;
            isOptionalByContract: boolean;
            isOptional: boolean;
            isNillableByContract: boolean;
            isNillable: boolean;
            isKey: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDataEntityBase extends IDataMember {
            load(): DataEntityBase;
            load(callback: (element: DataEntityBase) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class DataEntityBase extends DataMember implements IDataEntityBase {
            static typeName: string;
            childMembers: instances.IList<DataMember>;
            entity: domainmodels.IEntity;
            entityQualifiedName: string;
            exposedItemName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDataAssociation extends IDataEntityBase {
            container: IDataEntityBase;
            load(): DataAssociation;
            load(callback: (element: DataAssociation) => void): any;
        }
        class DataAssociation extends DataEntityBase implements IDataAssociation {
            static typeName: string;
            container: DataEntityBase;
            associationByContract: appservices.MsdAssociation;
            association: domainmodels.IAssociationBase;
            associationQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDataAttribute extends IDataMember {
            container: IDataEntityBase;
            load(): DataAttribute;
            load(callback: (element: DataAttribute) => void): any;
        }
        class DataAttribute extends DataMember implements IDataAttribute {
            static typeName: string;
            container: DataEntityBase;
            attributeByContract: appservices.MsdAttribute;
            attribute: domainmodels.IAttribute;
            attributeQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDataEntity extends IDataEntityBase {
            load(): DataEntity;
            load(callback: (element: DataEntity) => void): any;
        }
        class DataEntity extends DataEntityBase implements IDataEntity {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Imported+Web+Services relevant section in reference guide}
         */
        interface IImportedWebService extends projects.IDocument {
            container: projects.IFolderBase;
            load(): ImportedWebService;
            load(callback: (element: ImportedWebService) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Imported+Web+Services relevant section in reference guide}
         */
        class ImportedWebService extends projects.Document implements IImportedWebService {
            static typeName: string;
            container: projects.FolderBase;
            wsdlDescription: WsdlDescription;
            wsdlUrl: string;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IOperationInfo extends elements.IElement {
            container: IServiceInfo;
            load(): OperationInfo;
            load(callback: (element: OperationInfo) => void): any;
        }
        class OperationInfo extends elements.Element implements IOperationInfo {
            static typeName: string;
            container: ServiceInfo;
            requestHeaderRpcElement: RpcOperationElement;
            requestBodyRpcElement: RpcOperationElement;
            responseBodyRpcElement: RpcOperationElement;
            requestHeaderPartEncoding: PartEncoding;
            requestBodyPartEncodings: instances.IList<PartEncoding>;
            name: string;
            documentation: string;
            soapAction: string;
            requestHeaderElementName: string;
            requestHeaderEncoded: boolean;
            requestBodyEncoded: boolean;
            requestBodyElementName: string;
            responseBodyElementName: string;
            allowSimpleMappingInheritance: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IPartEncoding extends elements.IElement {
            container: IOperationInfo;
            load(): PartEncoding;
            load(callback: (element: PartEncoding) => void): any;
        }
        class PartEncoding extends elements.Element implements IPartEncoding {
            static typeName: string;
            container: OperationInfo;
            partName: string;
            partXsdType: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IPublishedServiceBase extends projects.IDocument {
            container: projects.IFolderBase;
            load(): PublishedServiceBase;
            load(callback: (element: PublishedServiceBase) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class PublishedServiceBase extends projects.Document implements IPublishedServiceBase {
            static typeName: string;
            container: projects.FolderBase;
            versionedServices: instances.IList<VersionedService>;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Published+App+Services relevant section in reference guide}
         */
        interface IPublishedAppService extends IPublishedServiceBase {
            container: projects.IFolderBase;
            load(): PublishedAppService;
            load(callback: (element: PublishedAppService) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Published+App+Services relevant section in reference guide}
         */
        class PublishedAppService extends PublishedServiceBase implements IPublishedAppService {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IPublishedOperation extends elements.IElement {
            container: IVersionedService;
            load(): PublishedOperation;
            load(callback: (element: PublishedOperation) => void): any;
        }
        class PublishedOperation extends elements.Element implements IPublishedOperation {
            static typeName: string;
            container: VersionedService;
            parameters: instances.IList<PublishedParameter>;
            dataEntity: DataEntity;
            isLockedByContract: boolean;
            name: string;
            image: images.IImage;
            imageQualifiedName: string;
            description: string;
            documentation: string;
            microflow: microflows.IMicroflow;
            microflowQualifiedName: string;
            returnTypeNameByContract: string;
            returnTypeSpecificationByContract: string;
            entityExposedNameByContract: string;
            entityExposedName: string;
            returnTypeIsOptional: boolean;
            returnTypeIsNillable: boolean;
            returnType: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IPublishedParameter extends elements.IElement {
            container: IPublishedOperation;
            load(): PublishedParameter;
            load(callback: (element: PublishedParameter) => void): any;
        }
        class PublishedParameter extends elements.Element implements IPublishedParameter {
            static typeName: string;
            container: PublishedOperation;
            parameterByContract: appservices.MsdMicroflowParameter;
            dataEntity: DataEntity;
            isLockedByContract: boolean;
            parameter: microflows.IMicroflowParameter;
            parameterQualifiedName: string;
            entityExposedName: string;
            isOptionalByContract: boolean;
            isOptional: boolean;
            isNillable: boolean;
            entityExposedItemNameByContract: string;
            entityExposedItemName: string;
            type: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Published+Web+Services relevant section in reference guide}
         */
        interface IPublishedWebService extends IPublishedServiceBase {
            container: projects.IFolderBase;
            load(): PublishedWebService;
            load(callback: (element: PublishedWebService) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Published+Web+Services relevant section in reference guide}
         */
        class PublishedWebService extends PublishedServiceBase implements IPublishedWebService {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IRpcMessagePartElement extends elements.IElement {
            container: IRpcOperationElement;
            load(): RpcMessagePartElement;
            load(callback: (element: RpcMessagePartElement) => void): any;
        }
        class RpcMessagePartElement extends elements.Element implements IRpcMessagePartElement {
            static typeName: string;
            container: RpcOperationElement;
            partName: string;
            typeName: string;
            elementName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IRpcOperationElement extends elements.IElement {
            container: IOperationInfo;
            load(): RpcOperationElement;
            load(callback: (element: RpcOperationElement) => void): any;
        }
        class RpcOperationElement extends elements.Element implements IRpcOperationElement {
            static typeName: string;
            container: OperationInfo;
            messagePartElements: instances.IList<RpcMessagePartElement>;
            name: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IServiceInfo extends elements.IElement {
            container: IWsdlDescription;
            load(): ServiceInfo;
            load(callback: (element: ServiceInfo) => void): any;
        }
        class ServiceInfo extends elements.Element implements IServiceInfo {
            static typeName: string;
            container: WsdlDescription;
            operations: instances.IList<OperationInfo>;
            name: string;
            documentation: string;
            portName: string;
            location: string;
            soapVersion: SoapVersion;
            locationConstant: constants.IConstant;
            locationConstantQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Published+Web+Services relevant section in reference guide}
         */
        interface IVersionedService extends elements.IElement {
            container: IPublishedServiceBase;
            load(): VersionedService;
            load(callback: (element: VersionedService) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Published+Web+Services relevant section in reference guide}
         */
        class VersionedService extends elements.Element implements IVersionedService {
            static typeName: string;
            container: PublishedServiceBase;
            operations: instances.IList<PublishedOperation>;
            enumerationsByContract: appservices.MsdEnumerationContainer;
            documentation: string;
            targetNamespace: string;
            headerAuthentication: integration.HeaderAuthentication;
            isLockedByContract: boolean;
            headerImportMapping: importmappings.IImportMapping;
            headerImportMappingQualifiedName: string;
            headerMicroflow: microflows.IMicroflow;
            headerMicroflowQualifiedName: string;
            versionNumber: number;
            caption: string;
            description: string;
            appServiceState: AppServiceState;
            image: images.IImage;
            imageQualifiedName: string;
            validate: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IWsdlDescription extends elements.IElement {
            load(): WsdlDescription;
            load(callback: (element: WsdlDescription) => void): any;
        }
        class WsdlDescription extends elements.Element implements IWsdlDescription {
            static typeName: string;
            wsdlEntries: instances.IList<WsdlEntry>;
            schemaEntries: instances.IList<xmlschemas.MxXmlSchemaEntry>;
            services: instances.IList<ServiceInfo>;
            targetNamespace: string;
            importsHaveLocations: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IWsdlEntry extends elements.IElement {
            container: IWsdlDescription;
            load(): WsdlEntry;
            load(callback: (element: WsdlEntry) => void): any;
        }
        class WsdlEntry extends elements.Element implements IWsdlEntry {
            static typeName: string;
            container: WsdlDescription;
            location: string;
            contents: string;
            localizedLocationFormat: string;
            localizedContentsFormat: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        class AppServiceState extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Draft: AppServiceState;
            static Consumable: AppServiceState;
            static Deprecated: AppServiceState;
        }
        class SoapVersion extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Soap11: SoapVersion;
            static Soap12: SoapVersion;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import instances = internal.instances;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Integration`.
     */
    module integration {
        class AppServiceLocationEnum extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Default: AppServiceLocationEnum;
            static Constant: AppServiceLocationEnum;
            static Parameter: AppServiceLocationEnum;
        }
        class ElementType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Undefined: ElementType;
            static Inheritance: ElementType;
            static Choice: ElementType;
            static Object: ElementType;
            static Value: ElementType;
            static Sequence: ElementType;
            static All: ElementType;
        }
        class HeaderAuthentication extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static None: HeaderAuthentication;
            static UsernamePassword: HeaderAuthentication;
            static Custom: HeaderAuthentication;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `XmlSchemas`.
     */
    module xmlschemas {
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/XML+Schemas relevant section in reference guide}
         */
        interface IMxXmlSchema extends projects.IDocument {
            container: projects.IFolderBase;
            load(): MxXmlSchema;
            load(callback: (element: MxXmlSchema) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/XML+Schemas relevant section in reference guide}
         */
        class MxXmlSchema extends projects.Document implements IMxXmlSchema {
            static typeName: string;
            container: projects.FolderBase;
            schemaEntries: instances.IList<MxXmlSchemaEntry>;
            filePath: string;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMxXmlSchemaEntry extends elements.IElement {
            load(): MxXmlSchemaEntry;
            load(callback: (element: MxXmlSchemaEntry) => void): any;
        }
        class MxXmlSchemaEntry extends elements.Element implements IMxXmlSchemaEntry {
            static typeName: string;
            targetNamespace: string;
            location: string;
            contents: string;
            localizedLocationFormat: string;
            localizedContentsFormat: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        class XmlPrimitiveType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Unknown: XmlPrimitiveType;
            static Boolean: XmlPrimitiveType;
            static Date: XmlPrimitiveType;
            static Time: XmlPrimitiveType;
            static DateTime: XmlPrimitiveType;
            static Decimal: XmlPrimitiveType;
            static Float: XmlPrimitiveType;
            static Integer: XmlPrimitiveType;
            static Binary: XmlPrimitiveType;
            static String: XmlPrimitiveType;
            static AnyType: XmlPrimitiveType;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `AppServices`.
     */
    module appservices {
        interface IAppServiceAction extends elements.IElement {
            container: IConsumedAppService;
            load(): AppServiceAction;
            load(callback: (element: AppServiceAction) => void): any;
            parameters: instances.IList<IAppServiceActionParameter>;
            name: string;
        }
        class AppServiceAction extends elements.Element implements IAppServiceAction {
            static typeName: string;
            container: ConsumedAppService;
            parameters: instances.IList<AppServiceActionParameter>;
            microflow: microflows.IMicroflow;
            microflowQualifiedName: string;
            returnType: string;
            returnTypeCanBeEmpty: boolean;
            name: string;
            imageString: string;
            caption: string;
            description: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IAppServiceActionParameter extends elements.IElement {
            container: IAppServiceAction;
            load(): AppServiceActionParameter;
            load(callback: (element: AppServiceActionParameter) => void): any;
            name: string;
        }
        class AppServiceActionParameter extends elements.Element implements IAppServiceActionParameter {
            static typeName: string;
            container: AppServiceAction;
            name: string;
            type: string;
            canBeEmpty: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Consumed+App+Services relevant section in reference guide}
         */
        interface IConsumedAppService extends projects.IDocument {
            container: projects.IFolderBase;
            load(): ConsumedAppService;
            load(callback: (element: ConsumedAppService) => void): any;
            actions: instances.IList<IAppServiceAction>;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Consumed+App+Services relevant section in reference guide}
         */
        class ConsumedAppService extends projects.Document implements IConsumedAppService {
            static typeName: string;
            container: projects.FolderBase;
            actions: instances.IList<AppServiceAction>;
            msd: Msd;
            fromAppStore: boolean;
            appStoreGuid: string;
            appStoreVersionGuid: string;
            appStoreVersion: string;
            appServiceLocation: integration.AppServiceLocationEnum;
            locationConstant: constants.IConstant;
            locationConstantQualifiedName: string;
            useTimeOut: boolean;
            timeOut: number;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMsd extends elements.IElement {
            container: IConsumedAppService;
            load(): Msd;
            load(callback: (element: Msd) => void): any;
        }
        class Msd extends elements.Element implements IMsd {
            static typeName: string;
            container: ConsumedAppService;
            version: MsdVersion;
            metadata: MsdMetadata;
            domainModel: MsdDomainModel;
            enumerations: MsdEnumerationContainer;
            wsdlDescription: webservices.WsdlDescription;
            wsdlString: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMsdAssociation extends elements.IElement {
            load(): MsdAssociation;
            load(callback: (element: MsdAssociation) => void): any;
        }
        class MsdAssociation extends elements.Element implements IMsdAssociation {
            static typeName: string;
            name: string;
            guid: string;
            parentEntityName: string;
            childEntityName: string;
            associationType: string;
            associationOwner: string;
            parentDeleteBehavior: string;
            childDeleteBehavior: string;
            associationKind: string;
            parentX: number;
            parentY: number;
            childX: number;
            childY: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMsdAttribute extends elements.IElement {
            load(): MsdAttribute;
            load(callback: (element: MsdAttribute) => void): any;
        }
        class MsdAttribute extends elements.Element implements IMsdAttribute {
            static typeName: string;
            name: string;
            guid: string;
            attributeType: string;
            enumerationName: string;
            defaultValue: string;
            length: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMsdDomainModel extends elements.IElement {
            container: IMsd;
            load(): MsdDomainModel;
            load(callback: (element: MsdDomainModel) => void): any;
        }
        class MsdDomainModel extends elements.Element implements IMsdDomainModel {
            static typeName: string;
            container: Msd;
            entities: instances.IList<MsdEntity>;
            associations: instances.IList<MsdAssociation>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMsdEntity extends elements.IElement {
            container: IMsdDomainModel;
            load(): MsdEntity;
            load(callback: (element: MsdEntity) => void): any;
        }
        class MsdEntity extends elements.Element implements IMsdEntity {
            static typeName: string;
            container: MsdDomainModel;
            attributes: instances.IList<MsdAttribute>;
            name: string;
            guid: string;
            generalizationName: string;
            persistable: boolean;
            locationX: number;
            locationY: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMsdEnumeration extends elements.IElement {
            container: IMsdEnumerationContainer;
            load(): MsdEnumeration;
            load(callback: (element: MsdEnumeration) => void): any;
        }
        class MsdEnumeration extends elements.Element implements IMsdEnumeration {
            static typeName: string;
            container: MsdEnumerationContainer;
            values: instances.IList<MsdEnumerationValue>;
            name: string;
            guid: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMsdEnumerationContainer extends elements.IElement {
            load(): MsdEnumerationContainer;
            load(callback: (element: MsdEnumerationContainer) => void): any;
        }
        class MsdEnumerationContainer extends elements.Element implements IMsdEnumerationContainer {
            static typeName: string;
            msdEnumerations: instances.IList<MsdEnumeration>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMsdEnumerationValue extends elements.IElement {
            container: IMsdEnumeration;
            load(): MsdEnumerationValue;
            load(callback: (element: MsdEnumerationValue) => void): any;
        }
        class MsdEnumerationValue extends elements.Element implements IMsdEnumerationValue {
            static typeName: string;
            container: MsdEnumeration;
            translations: instances.IList<MsdText>;
            name: string;
            guid: string;
            base64image: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMsdMetadata extends elements.IElement {
            container: IMsd;
            load(): MsdMetadata;
            load(callback: (element: MsdMetadata) => void): any;
        }
        class MsdMetadata extends elements.Element implements IMsdMetadata {
            static typeName: string;
            container: Msd;
            microflows: instances.IList<MsdMicroflow>;
            name: string;
            documentation: string;
            version: number;
            publishDateTime: string;
            serviceGuid: string;
            versionGuid: string;
            instanceGuid: string;
            supportedProtocols: instances.IList<string>;
            headerAuthentication: string;
            caption: string;
            imageBase64: string;
            description: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMsdMicroflow extends elements.IElement {
            container: IMsdMetadata;
            load(): MsdMicroflow;
            load(callback: (element: MsdMicroflow) => void): any;
        }
        class MsdMicroflow extends elements.Element implements IMsdMicroflow {
            static typeName: string;
            container: MsdMetadata;
            parameters: instances.IList<MsdMicroflowParameter>;
            name: string;
            documentation: string;
            imageBase64: string;
            description: string;
            returnType: string;
            systemEntityType: string;
            returnTypeSpecification: string;
            returnTypeCanBeEmpty: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMsdMicroflowParameter extends elements.IElement {
            load(): MsdMicroflowParameter;
            load(callback: (element: MsdMicroflowParameter) => void): any;
        }
        class MsdMicroflowParameter extends elements.Element implements IMsdMicroflowParameter {
            static typeName: string;
            name: string;
            type: string;
            typeSpecification: string;
            systemEntityType: string;
            canBeEmpty: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMsdText extends elements.IElement {
            container: IMsdEnumerationValue;
            load(): MsdText;
            load(callback: (element: MsdText) => void): any;
        }
        class MsdText extends elements.Element implements IMsdText {
            static typeName: string;
            container: MsdEnumerationValue;
            languageCode: string;
            caption: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMsdVersion extends elements.IElement {
            container: IMsd;
            load(): MsdVersion;
            load(callback: (element: MsdVersion) => void): any;
        }
        class MsdVersion extends elements.Element implements IMsdVersion {
            static typeName: string;
            container: Msd;
            version: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Mappings`.
     */
    module mappings {
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMappingDocument extends projects.IDocument {
            container: projects.IFolderBase;
            load(): MappingDocument;
            load(callback: (element: MappingDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class MappingDocument extends projects.Document implements IMappingDocument {
            static typeName: string;
            container: projects.FolderBase;
            rootMappingelements: instances.IList<ObjectMappingElement>;
            mxXmlSchema: xmlschemas.IMxXmlSchema;
            mxXmlSchemaQualifiedName: string;
            rootElementName: string;
            importedWebService: webservices.IImportedWebService;
            importedWebServiceQualifiedName: string;
            serviceName: string;
            operationName: string;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMappingElement extends elements.IElement {
            load(): MappingElement;
            load(callback: (element: MappingElement) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class MappingElement extends elements.Element implements IMappingElement {
            static typeName: string;
            documentation: string;
            elementType: integration.ElementType;
            path: string;
            minOccurs: number;
            maxOccurs: number;
            nillable: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMappingMicroflowCall extends elements.IElement {
            container: IObjectMappingElement;
            load(): MappingMicroflowCall;
            load(callback: (element: MappingMicroflowCall) => void): any;
        }
        class MappingMicroflowCall extends elements.Element implements IMappingMicroflowCall {
            static typeName: string;
            container: ObjectMappingElement;
            parameterMappings: instances.IList<MappingMicroflowParameter>;
            microflow: microflows.IMicroflow;
            microflowQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMappingMicroflowParameter extends elements.IElement {
            container: IMappingMicroflowCall;
            load(): MappingMicroflowParameter;
            load(callback: (element: MappingMicroflowParameter) => void): any;
        }
        class MappingMicroflowParameter extends elements.Element implements IMappingMicroflowParameter {
            static typeName: string;
            container: MappingMicroflowCall;
            parameter: microflows.IMicroflowParameter;
            parameterQualifiedName: string;
            levelOfParent: number;
            valueElementPath: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IObjectMappingElement extends IMappingElement {
            load(): ObjectMappingElement;
            load(callback: (element: ObjectMappingElement) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ObjectMappingElement extends MappingElement implements IObjectMappingElement {
            static typeName: string;
            mappingMicroflowCall: MappingMicroflowCall;
            children: instances.IList<MappingElement>;
            entity: domainmodels.IEntity;
            entityQualifiedName: string;
            association: domainmodels.IAssociationBase;
            associationQualifiedName: string;
            objectHandling: importmappings.ObjectHandlingEnum;
            objectHandlingBackup: importmappings.ObjectHandlingBackupEnum;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IValueMappingElement extends IMappingElement {
            container: IObjectMappingElement;
            load(): ValueMappingElement;
            load(callback: (element: ValueMappingElement) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ValueMappingElement extends MappingElement implements IValueMappingElement {
            static typeName: string;
            container: ObjectMappingElement;
            xmlDataType: string;
            isKey: boolean;
            isXmlAttribute: boolean;
            isContent: boolean;
            attribute: domainmodels.IAttribute;
            attributeQualifiedName: string;
            converter: microflows.IMicroflow;
            converterQualifiedName: string;
            expectedContentTypes: string;
            maxLength: number;
            fractionDigits: number;
            totalDigits: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ExportMappings`.
     */
    module exportmappings {
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMappingDocument extends projects.IDocument {
            container: projects.IFolderBase;
            load(): MappingDocument;
            load(callback: (element: MappingDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class MappingDocument extends projects.Document implements IMappingDocument {
            static typeName: string;
            container: projects.FolderBase;
            rootMappingelements: instances.IList<mappings.ObjectMappingElement>;
            mxXmlSchema: xmlschemas.IMxXmlSchema;
            mxXmlSchemaQualifiedName: string;
            rootElementName: string;
            importedWebService: webservices.IImportedWebService;
            importedWebServiceQualifiedName: string;
            serviceName: string;
            operationName: string;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Domain-to-XML+Mappings relevant section in reference guide}
         */
        interface IExportMapping extends mappings.IMappingDocument {
            container: projects.IFolderBase;
            load(): ExportMapping;
            load(callback: (element: ExportMapping) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Domain-to-XML+Mappings relevant section in reference guide}
         */
        class ExportMapping extends mappings.MappingDocument implements IExportMapping {
            static typeName: string;
            container: projects.FolderBase;
            parameterName: string;
            parameterTypeName: string;
            isHeader: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMappingElement extends elements.IElement {
            load(): MappingElement;
            load(callback: (element: MappingElement) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class MappingElement extends elements.Element implements IMappingElement {
            static typeName: string;
            documentation: string;
            elementType: integration.ElementType;
            path: string;
            minOccurs: number;
            maxOccurs: number;
            nillable: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IObjectMappingElement extends mappings.IMappingElement {
            load(): ObjectMappingElement;
            load(callback: (element: ObjectMappingElement) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ObjectMappingElement extends mappings.MappingElement implements IObjectMappingElement {
            static typeName: string;
            mappingMicroflowCall: mappings.MappingMicroflowCall;
            children: instances.IList<mappings.MappingElement>;
            entity: domainmodels.IEntity;
            entityQualifiedName: string;
            association: domainmodels.IAssociationBase;
            associationQualifiedName: string;
            objectHandling: importmappings.ObjectHandlingEnum;
            objectHandlingBackup: importmappings.ObjectHandlingBackupEnum;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IExportObjectMappingElement extends mappings.IObjectMappingElement {
            load(): ExportObjectMappingElement;
            load(callback: (element: ExportObjectMappingElement) => void): any;
        }
        class ExportObjectMappingElement extends mappings.ObjectMappingElement implements IExportObjectMappingElement {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IValueMappingElement extends mappings.IMappingElement {
            container: mappings.IObjectMappingElement;
            load(): ValueMappingElement;
            load(callback: (element: ValueMappingElement) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ValueMappingElement extends mappings.MappingElement implements IValueMappingElement {
            static typeName: string;
            container: mappings.ObjectMappingElement;
            xmlDataType: string;
            isKey: boolean;
            isXmlAttribute: boolean;
            isContent: boolean;
            attribute: domainmodels.IAttribute;
            attributeQualifiedName: string;
            converter: microflows.IMicroflow;
            converterQualifiedName: string;
            expectedContentTypes: string;
            maxLength: number;
            fractionDigits: number;
            totalDigits: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IExportValueMappingElement extends mappings.IValueMappingElement {
            container: mappings.IObjectMappingElement;
            load(): ExportValueMappingElement;
            load(callback: (element: ExportValueMappingElement) => void): any;
        }
        class ExportValueMappingElement extends mappings.ValueMappingElement implements IExportValueMappingElement {
            static typeName: string;
            container: mappings.ObjectMappingElement;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ImportMappings`.
     */
    module importmappings {
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMappingDocument extends projects.IDocument {
            container: projects.IFolderBase;
            load(): MappingDocument;
            load(callback: (element: MappingDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class MappingDocument extends projects.Document implements IMappingDocument {
            static typeName: string;
            container: projects.FolderBase;
            rootMappingelements: instances.IList<mappings.ObjectMappingElement>;
            mxXmlSchema: xmlschemas.IMxXmlSchema;
            mxXmlSchemaQualifiedName: string;
            rootElementName: string;
            importedWebService: webservices.IImportedWebService;
            importedWebServiceQualifiedName: string;
            serviceName: string;
            operationName: string;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/XML-to-domain+Mappings relevant section in reference guide}
         */
        interface IImportMapping extends mappings.IMappingDocument {
            container: projects.IFolderBase;
            load(): ImportMapping;
            load(callback: (element: ImportMapping) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/XML-to-domain+Mappings relevant section in reference guide}
         */
        class ImportMapping extends mappings.MappingDocument implements IImportMapping {
            static typeName: string;
            container: projects.FolderBase;
            parameterEntity: domainmodels.IEntity;
            parameterEntityQualifiedName: string;
            useSubtransactionsForMicroflows: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMappingElement extends elements.IElement {
            load(): MappingElement;
            load(callback: (element: MappingElement) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class MappingElement extends elements.Element implements IMappingElement {
            static typeName: string;
            documentation: string;
            elementType: integration.ElementType;
            path: string;
            minOccurs: number;
            maxOccurs: number;
            nillable: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IObjectMappingElement extends mappings.IMappingElement {
            load(): ObjectMappingElement;
            load(callback: (element: ObjectMappingElement) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ObjectMappingElement extends mappings.MappingElement implements IObjectMappingElement {
            static typeName: string;
            mappingMicroflowCall: mappings.MappingMicroflowCall;
            children: instances.IList<mappings.MappingElement>;
            entity: domainmodels.IEntity;
            entityQualifiedName: string;
            association: domainmodels.IAssociationBase;
            associationQualifiedName: string;
            objectHandling: ObjectHandlingEnum;
            objectHandlingBackup: ObjectHandlingBackupEnum;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IImportObjectMappingElement extends mappings.IObjectMappingElement {
            load(): ImportObjectMappingElement;
            load(callback: (element: ImportObjectMappingElement) => void): any;
        }
        class ImportObjectMappingElement extends mappings.ObjectMappingElement implements IImportObjectMappingElement {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IValueMappingElement extends mappings.IMappingElement {
            container: mappings.IObjectMappingElement;
            load(): ValueMappingElement;
            load(callback: (element: ValueMappingElement) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ValueMappingElement extends mappings.MappingElement implements IValueMappingElement {
            static typeName: string;
            container: mappings.ObjectMappingElement;
            xmlDataType: string;
            isKey: boolean;
            isXmlAttribute: boolean;
            isContent: boolean;
            attribute: domainmodels.IAttribute;
            attributeQualifiedName: string;
            converter: microflows.IMicroflow;
            converterQualifiedName: string;
            expectedContentTypes: string;
            maxLength: number;
            fractionDigits: number;
            totalDigits: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IImportValueMappingElement extends mappings.IValueMappingElement {
            container: mappings.IObjectMappingElement;
            load(): ImportValueMappingElement;
            load(callback: (element: ImportValueMappingElement) => void): any;
        }
        class ImportValueMappingElement extends mappings.ValueMappingElement implements IImportValueMappingElement {
            static typeName: string;
            container: mappings.ObjectMappingElement;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        class ObjectHandlingBackupEnum extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Create: ObjectHandlingBackupEnum;
            static Ignore: ObjectHandlingBackupEnum;
            static Error: ObjectHandlingBackupEnum;
        }
        class ObjectHandlingEnum extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Create: ObjectHandlingEnum;
            static Find: ObjectHandlingEnum;
            static Custom: ObjectHandlingEnum;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Rest`.
     */
    module rest {
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IPublishedRestServiceBase extends projects.IDocument {
            container: projects.IFolderBase;
            load(): PublishedRestServiceBase;
            load(callback: (element: PublishedRestServiceBase) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class PublishedRestServiceBase extends projects.Document implements IPublishedRestServiceBase {
            static typeName: string;
            container: projects.FolderBase;
            resources: instances.IList<PublishedRestResource>;
            namespaceName: string;
            path: string;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IPublishedOdataService extends IPublishedRestServiceBase {
            container: projects.IFolderBase;
            load(): PublishedOdataService;
            load(callback: (element: PublishedOdataService) => void): any;
        }
        class PublishedOdataService extends PublishedRestServiceBase implements IPublishedOdataService {
            static typeName: string;
            container: projects.FolderBase;
            allowedRoleIds: instances.IList<security.IModuleRole>;
            allowedRoleIdsQualifiedNames: string[];
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IPublishedRestResource extends elements.IElement {
            container: IPublishedRestServiceBase;
            load(): PublishedRestResource;
            load(callback: (element: PublishedRestResource) => void): any;
        }
        class PublishedRestResource extends elements.Element implements IPublishedRestResource {
            static typeName: string;
            container: PublishedRestServiceBase;
            dataEntity: webservices.DataEntity;
            path: string;
            usePaging: boolean;
            pageSize: number;
            returnType: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IPublishedRestService extends IPublishedRestServiceBase {
            container: projects.IFolderBase;
            load(): PublishedRestService;
            load(callback: (element: PublishedRestService) => void): any;
        }
        class PublishedRestService extends PublishedRestServiceBase implements IPublishedRestService {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Settings`.
     */
    module settings {
        interface ICertificate extends elements.IElement {
            container: IProjectSettings;
            load(): Certificate;
            load(callback: (element: Certificate) => void): any;
        }
        class Certificate extends elements.Element implements ICertificate {
            static typeName: string;
            container: ProjectSettings;
            type: CertificateType;
            data: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IConstantValue extends elements.IElement {
            container: IServerConfiguration;
            load(): ConstantValue;
            load(callback: (element: ConstantValue) => void): any;
        }
        class ConstantValue extends elements.Element implements IConstantValue {
            static typeName: string;
            container: ServerConfiguration;
            constant: constants.IConstant;
            constantQualifiedName: string;
            value: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ICustomSetting extends elements.IElement {
            container: IServerConfiguration;
            load(): CustomSetting;
            load(callback: (element: CustomSetting) => void): any;
        }
        class CustomSetting extends elements.Element implements ICustomSetting {
            static typeName: string;
            container: ServerConfiguration;
            name: string;
            value: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IProjectSettingsPart extends elements.IElement {
            container: IProjectSettings;
            load(): ProjectSettingsPart;
            load(callback: (element: ProjectSettingsPart) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ProjectSettingsPart extends elements.Element implements IProjectSettingsPart {
            static typeName: string;
            container: ProjectSettings;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IIntegrationProjectSettingsPart extends IProjectSettingsPart {
            container: IProjectSettings;
            load(): IntegrationProjectSettingsPart;
            load(callback: (element: IntegrationProjectSettingsPart) => void): any;
        }
        class IntegrationProjectSettingsPart extends ProjectSettingsPart implements IIntegrationProjectSettingsPart {
            static typeName: string;
            container: ProjectSettings;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project relevant section in reference guide}
         */
        interface IProjectDocument extends units.IModelUnit {
            container: projects.IProject;
            load(): ProjectDocument;
            load(callback: (element: ProjectDocument) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project relevant section in reference guide}
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ProjectDocument extends units.ModelUnit implements IProjectDocument {
            static typeName: string;
            container: projects.Project;
            constructor(container: projects.IProject);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project+Settings relevant section in reference guide}
         */
        interface IProjectSettings extends projects.IProjectDocument {
            container: projects.IProject;
            load(): ProjectSettings;
            load(callback: (element: ProjectSettings) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project+Settings relevant section in reference guide}
         */
        class ProjectSettings extends projects.ProjectDocument implements IProjectSettings {
            static typeName: string;
            container: projects.Project;
            languages: instances.IList<texts.Language>;
            settingsParts: instances.IList<ProjectSettingsPart>;
            configurations: instances.IList<ServerConfiguration>;
            certificates: instances.IList<Certificate>;
            hashAlgorithm: projects.HashAlgorithmType;
            roundingMode: RoundingMode;
            conversionState: projects.ConversionState;
            skipJarAnalyzerStep: boolean;
            afterStartupMicroflow: microflows.IMicroflow;
            afterStartupMicroflowQualifiedName: string;
            beforeShutdownMicroflow: microflows.IMicroflow;
            beforeShutdownMicroflowQualifiedName: string;
            healthCheckMicroflow: microflows.IMicroflow;
            healthCheckMicroflowQualifiedName: string;
            defaultLanguageCode: string;
            firstDayOfWeek: FirstDayOfWeekEnum;
            defaultTimeZoneCode: string;
            scheduledEventTimeZoneCode: string;
            allowUserMultipleSessions: boolean;
            lowerCaseMicroflowVariables: boolean;
            constructor(container: projects.IProject);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IServerConfiguration extends elements.IElement {
            container: IProjectSettings;
            load(): ServerConfiguration;
            load(callback: (element: ServerConfiguration) => void): any;
        }
        class ServerConfiguration extends elements.Element implements IServerConfiguration {
            static typeName: string;
            container: ProjectSettings;
            customSettings: instances.IList<CustomSetting>;
            constantValues: instances.IList<ConstantValue>;
            name: string;
            applicationRootUrl: string;
            portOnlyLocal: boolean;
            adminPortOnlyLocal: boolean;
            portNumber: number;
            adminPortNumber: number;
            maxJavaHeapSize: number;
            emulateCloudSecurity: boolean;
            extraJvmParameters: string;
            databaseType: DatabaseType;
            databaseUrl: string;
            databaseName: string;
            databaseUseIntegratedSecurity: boolean;
            databaseUserName: string;
            databasePassword: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        class CertificateType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Authority: CertificateType;
            static Client: CertificateType;
        }
        class DatabaseType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Hsqldb: DatabaseType;
            static SqlServer: DatabaseType;
            static MySql: DatabaseType;
            static Oracle: DatabaseType;
            static PostgreSql: DatabaseType;
        }
        class FirstDayOfWeekEnum extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Default: FirstDayOfWeekEnum;
            static Sunday: FirstDayOfWeekEnum;
            static Monday: FirstDayOfWeekEnum;
            static Tuesday: FirstDayOfWeekEnum;
            static Wednesday: FirstDayOfWeekEnum;
            static Thursday: FirstDayOfWeekEnum;
            static Friday: FirstDayOfWeekEnum;
            static Saturday: FirstDayOfWeekEnum;
        }
        class RoundingMode extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static HalfUp: RoundingMode;
            static HalfEven: RoundingMode;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Pages`.
     */
    module pages {
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Pages relevant section in reference guide}
         */
        interface IFormBase extends projects.IDocument {
            container: projects.IFolderBase;
            load(): FormBase;
            load(callback: (element: FormBase) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Pages relevant section in reference guide}
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class FormBase extends projects.Document implements IFormBase {
            static typeName: string;
            container: projects.FolderBase;
            canvasWidth: number;
            canvasHeight: number;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Page relevant section in reference guide}
         */
        interface IPage extends IFormBase {
            container: projects.IFolderBase;
            load(): Page;
            load(callback: (element: Page) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Page relevant section in reference guide}
         */
        class Page extends FormBase implements IPage {
            static typeName: string;
            container: projects.FolderBase;
            layoutCall: LayoutCall;
            title: texts.Text;
            class: string;
            style: string;
            allowedRoles: instances.IList<security.IModuleRole>;
            allowedRolesQualifiedNames: string[];
            popupWidth: number;
            popupHeight: number;
            popupResizable: boolean;
            markAsUsed: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Layout relevant section in reference guide}
         */
        interface ILayout extends IFormBase {
            container: projects.IFolderBase;
            load(): Layout;
            load(callback: (element: Layout) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Layout relevant section in reference guide}
         */
        class Layout extends FormBase implements ILayout {
            static typeName: string;
            container: projects.FolderBase;
            widget: Widget;
            layoutCall: LayoutCall;
            layoutType: LayoutType;
            mainPlaceholder: ILayoutParameter;
            mainPlaceholderQualifiedName: string;
            acceptButtonPlaceholder: ILayoutParameter;
            acceptButtonPlaceholderQualifiedName: string;
            cancelButtonPlaceholder: ILayoutParameter;
            cancelButtonPlaceholderQualifiedName: string;
            useMainPlaceholderForPopups: boolean;
            class: string;
            style: string;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ILayoutCall extends elements.IElement {
            load(): LayoutCall;
            load(callback: (element: LayoutCall) => void): any;
        }
        class LayoutCall extends elements.Element implements ILayoutCall {
            static typeName: string;
            layout: ILayout;
            layoutQualifiedName: string;
            arguments: instances.IList<LayoutCallArgument>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ILayoutCallArgument extends elements.IElement {
            container: ILayoutCall;
            load(): LayoutCallArgument;
            load(callback: (element: LayoutCallArgument) => void): any;
        }
        class LayoutCallArgument extends elements.Element implements ILayoutCallArgument {
            static typeName: string;
            container: LayoutCall;
            parameterName: string;
            widget: Widget;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ILayoutParameter extends elements.IElement {
            container: ILayout;
            load(): LayoutParameter;
            load(callback: (element: LayoutParameter) => void): any;
            name: string;
        }
        class LayoutParameter extends elements.Element implements ILayoutParameter {
            static typeName: string;
            container: Layout;
            name: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Pages relevant section in reference guide}
         */
        interface IWidget extends elements.IElement {
            load(): Widget;
            load(callback: (element: Widget) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Pages relevant section in reference guide}
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Widget extends elements.Element implements IWidget {
            static typeName: string;
            name: string;
            class: string;
            style: string;
            tabIndex: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Placeholder relevant section in reference guide}
         */
        interface IPlaceholder extends IWidget {
            load(): Placeholder;
            load(callback: (element: Placeholder) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Placeholder relevant section in reference guide}
         */
        class Placeholder extends Widget implements IPlaceholder {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IClientAction extends elements.IElement {
            load(): ClientAction;
            load(callback: (element: ClientAction) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ClientAction extends elements.Element implements IClientAction {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface INoClientAction extends IClientAction {
            load(): NoClientAction;
            load(callback: (element: NoClientAction) => void): any;
        }
        class NoClientAction extends ClientAction implements INoClientAction {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IPageClientAction extends IClientAction {
            load(): PageClientAction;
            load(callback: (element: PageClientAction) => void): any;
        }
        class PageClientAction extends ClientAction implements IPageClientAction {
            static typeName: string;
            pageSettings: PageSettings;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMicroflowClientAction extends IClientAction {
            load(): MicroflowClientAction;
            load(callback: (element: MicroflowClientAction) => void): any;
        }
        class MicroflowClientAction extends ClientAction implements IMicroflowClientAction {
            static typeName: string;
            microflowSettings: MicroflowSettings;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Opening+Pages relevant section in reference guide}
         */
        interface IPageSettings extends elements.IElement {
            load(): PageSettings;
            load(callback: (element: PageSettings) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Opening+Pages relevant section in reference guide}
         */
        class PageSettings extends elements.Element implements IPageSettings {
            static typeName: string;
            page: IPage;
            pageQualifiedName: string;
            formTitle: texts.Text;
            location: FormLocation;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Starting+Microflows relevant section in reference guide}
         */
        interface IMicroflowSettings extends elements.IElement {
            load(): MicroflowSettings;
            load(callback: (element: MicroflowSettings) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Starting+Microflows relevant section in reference guide}
         */
        class MicroflowSettings extends elements.Element implements IMicroflowSettings {
            static typeName: string;
            microflow: microflows.IMicroflow;
            microflowQualifiedName: string;
            useAllPages: boolean;
            progressBar: ProgressBarType;
            progressMessage: texts.Text;
            asynchronous: boolean;
            formValidations: FormValidations;
            confirmationInfo: ConfirmationInfo;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IConfirmationInfo extends elements.IElement {
            container: IMicroflowSettings;
            load(): ConfirmationInfo;
            load(callback: (element: ConfirmationInfo) => void): any;
        }
        class ConfirmationInfo extends elements.Element implements IConfirmationInfo {
            static typeName: string;
            container: MicroflowSettings;
            question: texts.Text;
            proceedButtonCaption: texts.Text;
            cancelButtonCaption: texts.Text;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IConditionallyVisibleWidget extends IWidget {
            load(): ConditionallyVisibleWidget;
            load(callback: (element: ConditionallyVisibleWidget) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ConditionallyVisibleWidget extends Widget implements IConditionallyVisibleWidget {
            static typeName: string;
            conditionalVisibilitySettings: ConditionalVisibilitySettings;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Label relevant section in reference guide}
         */
        interface ILabel extends IConditionallyVisibleWidget {
            load(): Label;
            load(callback: (element: Label) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Label relevant section in reference guide}
         */
        class Label extends ConditionallyVisibleWidget implements ILabel {
            static typeName: string;
            caption: texts.Text;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Image relevant section in reference guide}
         */
        interface IStaticImageViewer extends IConditionallyVisibleWidget {
            load(): StaticImageViewer;
            load(callback: (element: StaticImageViewer) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Image relevant section in reference guide}
         */
        class StaticImageViewer extends ConditionallyVisibleWidget implements IStaticImageViewer {
            static typeName: string;
            image: images.IImage;
            imageQualifiedName: string;
            widthUnit: ImageSizeUnit;
            heightUnit: ImageSizeUnit;
            width: number;
            height: number;
            clickAction: ClientAction;
            responsive: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Container relevant section in reference guide}
         */
        interface IDivContainer extends IConditionallyVisibleWidget {
            load(): DivContainer;
            load(callback: (element: DivContainer) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Container relevant section in reference guide}
         */
        class DivContainer extends ConditionallyVisibleWidget implements IDivContainer {
            static typeName: string;
            widget: Widget;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IVerticalFlow extends IWidget {
            load(): VerticalFlow;
            load(callback: (element: VerticalFlow) => void): any;
        }
        class VerticalFlow extends Widget implements IVerticalFlow {
            static typeName: string;
            widgets: instances.IList<Widget>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IConditionallyEditableWidget extends IConditionallyVisibleWidget {
            load(): ConditionallyEditableWidget;
            load(callback: (element: ConditionallyEditableWidget) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ConditionallyEditableWidget extends ConditionallyVisibleWidget implements IConditionallyEditableWidget {
            static typeName: string;
            conditionalEditabilitySettings: ConditionalEditabilitySettings;
            editable: EditableEnum;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IInputWidget extends IConditionallyEditableWidget {
            load(): InputWidget;
            load(callback: (element: InputWidget) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class InputWidget extends ConditionallyEditableWidget implements IInputWidget {
            static typeName: string;
            label: texts.Text;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMemberWidget extends IInputWidget {
            load(): MemberWidget;
            load(callback: (element: MemberWidget) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class MemberWidget extends InputWidget implements IMemberWidget {
            static typeName: string;
            /**
             * The value of this property is conceptually of type Paths$AttributePath.
             */
            attributePath: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IAttributeWidget extends IMemberWidget {
            load(): AttributeWidget;
            load(callback: (element: AttributeWidget) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class AttributeWidget extends MemberWidget implements IAttributeWidget {
            static typeName: string;
            required: boolean;
            requiredMessage: texts.Text;
            onChangeMicroflowSettings: MicroflowSettings;
            onEnterMicroflowSettings: MicroflowSettings;
            onLeaveMicroflowSettings: MicroflowSettings;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IAttributeWidgetWithPlaceholder extends IAttributeWidget {
            load(): AttributeWidgetWithPlaceholder;
            load(callback: (element: AttributeWidgetWithPlaceholder) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class AttributeWidgetWithPlaceholder extends AttributeWidget implements IAttributeWidgetWithPlaceholder {
            static typeName: string;
            placeholder: texts.Text;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ITextWidget extends IAttributeWidgetWithPlaceholder {
            load(): TextWidget;
            load(callback: (element: TextWidget) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class TextWidget extends AttributeWidgetWithPlaceholder implements ITextWidget {
            static typeName: string;
            maxLengthCode: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Text+Box relevant section in reference guide}
         */
        interface ITextBox extends ITextWidget {
            load(): TextBox;
            load(callback: (element: TextBox) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Text+Box relevant section in reference guide}
         */
        class TextBox extends TextWidget implements ITextBox {
            static typeName: string;
            inputMask: string;
            formattingInfo: FormattingInfo;
            isPasswordBox: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Text+Area relevant section in reference guide}
         */
        interface ITextArea extends ITextWidget {
            load(): TextArea;
            load(callback: (element: TextArea) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Text+Area relevant section in reference guide}
         */
        class TextArea extends TextWidget implements ITextArea {
            static typeName: string;
            numberOfLines: number;
            counterMessage: texts.Text;
            textTooLongMessage: texts.Text;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Check+Box relevant section in reference guide}
         */
        interface ICheckBox extends IAttributeWidget {
            load(): CheckBox;
            load(callback: (element: CheckBox) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Check+Box relevant section in reference guide}
         */
        class CheckBox extends AttributeWidget implements ICheckBox {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Date+Picker relevant section in reference guide}
         */
        interface IDatePicker extends IAttributeWidgetWithPlaceholder {
            load(): DatePicker;
            load(callback: (element: DatePicker) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Date+Picker relevant section in reference guide}
         */
        class DatePicker extends AttributeWidgetWithPlaceholder implements IDatePicker {
            static typeName: string;
            formattingInfo: FormattingInfo;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IFormattingInfo extends elements.IElement {
            load(): FormattingInfo;
            load(callback: (element: FormattingInfo) => void): any;
        }
        class FormattingInfo extends elements.Element implements IFormattingInfo {
            static typeName: string;
            decimalPrecision: number;
            groupDigits: boolean;
            enumFormat: EnumFormat;
            dateFormat: DateFormat;
            customDateFormat: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IConditionalSettings extends elements.IElement {
            load(): ConditionalSettings;
            load(callback: (element: ConditionalSettings) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ConditionalSettings extends elements.Element implements IConditionalSettings {
            static typeName: string;
            attribute: domainmodels.IAttribute;
            attributeQualifiedName: string;
            conditions: instances.IList<enumerations.Condition>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IConditionalVisibilitySettings extends IConditionalSettings {
            load(): ConditionalVisibilitySettings;
            load(callback: (element: ConditionalVisibilitySettings) => void): any;
        }
        class ConditionalVisibilitySettings extends ConditionalSettings implements IConditionalVisibilitySettings {
            static typeName: string;
            moduleRoles: instances.IList<security.IModuleRole>;
            moduleRolesQualifiedNames: string[];
            ignoreSecurity: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IConditionalEditabilitySettings extends IConditionalSettings {
            container: IConditionallyEditableWidget;
            load(): ConditionalEditabilitySettings;
            load(callback: (element: ConditionalEditabilitySettings) => void): any;
        }
        class ConditionalEditabilitySettings extends ConditionalSettings implements IConditionalEditabilitySettings {
            static typeName: string;
            container: ConditionallyEditableWidget;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Table relevant section in reference guide}
         */
        interface ITable extends IConditionallyVisibleWidget {
            load(): Table;
            load(callback: (element: Table) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Table relevant section in reference guide}
         */
        class Table extends ConditionallyVisibleWidget implements ITable {
            static typeName: string;
            cells: instances.IList<TableCell>;
            columns: instances.IList<TableColumn>;
            widthUnit: UnitEnum;
            rows: instances.IList<TableRow>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ITableCell extends elements.IElement {
            container: ITable;
            load(): TableCell;
            load(callback: (element: TableCell) => void): any;
        }
        class TableCell extends elements.Element implements ITableCell {
            static typeName: string;
            container: Table;
            class: string;
            style: string;
            isHeader: boolean;
            widget: Widget;
            leftColumnIndex: number;
            topRowIndex: number;
            width: number;
            height: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ITableColumn extends elements.IElement {
            container: ITable;
            load(): TableColumn;
            load(callback: (element: TableColumn) => void): any;
        }
        class TableColumn extends elements.Element implements ITableColumn {
            static typeName: string;
            container: Table;
            width: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ITableRow extends elements.IElement {
            container: ITable;
            load(): TableRow;
            load(callback: (element: TableRow) => void): any;
        }
        class TableRow extends elements.Element implements ITableRow {
            static typeName: string;
            container: Table;
            class: string;
            style: string;
            conditionalVisibilitySettings: ConditionalVisibilitySettings;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IEntityWidget extends IConditionallyVisibleWidget {
            load(): EntityWidget;
            load(callback: (element: EntityWidget) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class EntityWidget extends ConditionallyVisibleWidget implements IEntityWidget {
            static typeName: string;
            dataSource: DataSource;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+Sources relevant section in reference guide}
         */
        interface IDataSource extends elements.IElement {
            container: IEntityWidget;
            load(): DataSource;
            load(callback: (element: DataSource) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+Sources relevant section in reference guide}
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class DataSource extends elements.Element implements IDataSource {
            static typeName: string;
            container: EntityWidget;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IEntityPathSource extends IDataSource {
            container: IEntityWidget;
            load(): EntityPathSource;
            load(callback: (element: EntityPathSource) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class EntityPathSource extends DataSource implements IEntityPathSource {
            static typeName: string;
            container: EntityWidget;
            /**
             * The value of this property is conceptually of type Paths$EntityPath.
             */
            entityPath: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMicroflowSource extends IDataSource {
            container: IEntityWidget;
            load(): MicroflowSource;
            load(callback: (element: MicroflowSource) => void): any;
        }
        class MicroflowSource extends DataSource implements IMicroflowSource {
            static typeName: string;
            container: EntityWidget;
            microflowSettings: MicroflowSettings;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IListenTargetWidget extends IEntityWidget {
            load(): ListenTargetWidget;
            load(callback: (element: ListenTargetWidget) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ListenTargetWidget extends EntityWidget implements IListenTargetWidget {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IAssociationSource extends IEntityPathSource {
            container: IEntityWidget;
            load(): AssociationSource;
            load(callback: (element: AssociationSource) => void): any;
        }
        class AssociationSource extends EntityPathSource implements IAssociationSource {
            static typeName: string;
            container: EntityWidget;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+View relevant section in reference guide}
         */
        interface IDataView extends IEntityWidget {
            load(): DataView;
            load(callback: (element: DataView) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+View relevant section in reference guide}
         */
        class DataView extends EntityWidget implements IDataView {
            static typeName: string;
            widget: Widget;
            editable: boolean;
            showControlBar: boolean;
            closeOnSaveOrCancel: boolean;
            useSchema: boolean;
            noEntityMessage: texts.Text;
            labelWidth: number;
            controlBar: DataViewControlBar;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IControlBar extends elements.IElement {
            load(): ControlBar;
            load(callback: (element: ControlBar) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ControlBar extends elements.Element implements IControlBar {
            static typeName: string;
            items: instances.IList<ControlBarItem>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+View+Control+Bar relevant section in reference guide}
         */
        interface IDataViewControlBar extends IControlBar {
            container: IDataView;
            load(): DataViewControlBar;
            load(callback: (element: DataViewControlBar) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+View+Control+Bar relevant section in reference guide}
         */
        class DataViewControlBar extends ControlBar implements IDataViewControlBar {
            static typeName: string;
            container: DataView;
            closeButton: ControlBarItem;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDataViewSource extends IEntityPathSource {
            container: IEntityWidget;
            load(): DataViewSource;
            load(callback: (element: DataViewSource) => void): any;
        }
        class DataViewSource extends EntityPathSource implements IDataViewSource {
            static typeName: string;
            container: EntityWidget;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IListenTargetSource extends IDataSource {
            container: IEntityWidget;
            load(): ListenTargetSource;
            load(callback: (element: ListenTargetSource) => void): any;
        }
        class ListenTargetSource extends DataSource implements IListenTargetSource {
            static typeName: string;
            container: EntityWidget;
            listenTarget: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IControlBarItem extends elements.IElement {
            load(): ControlBarItem;
            load(callback: (element: ControlBarItem) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ControlBarItem extends elements.Element implements IControlBarItem {
            static typeName: string;
            name: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IControlBarButton extends IControlBarItem {
            load(): ControlBarButton;
            load(callback: (element: ControlBarButton) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ControlBarButton extends ControlBarItem implements IControlBarButton {
            static typeName: string;
            caption: ClientTemplate;
            tooltip: texts.Text;
            icon: Icon;
            class: string;
            style: string;
            conditionalVisibilitySettings: ConditionalVisibilitySettings;
            buttonStyle: ButtonStyle;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDataViewControlBarButton extends IControlBarButton {
            container: IControlBar;
            load(): DataViewControlBarButton;
            load(callback: (element: DataViewControlBarButton) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class DataViewControlBarButton extends ControlBarButton implements IDataViewControlBarButton {
            static typeName: string;
            container: ControlBar;
            tabIndex: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+View+Cancel+Button relevant section in reference guide}
         */
        interface IDataViewCancelButton extends IDataViewControlBarButton {
            container: IControlBar;
            load(): DataViewCancelButton;
            load(callback: (element: DataViewCancelButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+View+Cancel+Button relevant section in reference guide}
         */
        class DataViewCancelButton extends DataViewControlBarButton implements IDataViewCancelButton {
            static typeName: string;
            container: ControlBar;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+View+Close+Button relevant section in reference guide}
         */
        interface IDataViewCloseButton extends IDataViewControlBarButton {
            container: IControlBar;
            load(): DataViewCloseButton;
            load(callback: (element: DataViewCloseButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+View+Close+Button relevant section in reference guide}
         */
        class DataViewCloseButton extends DataViewControlBarButton implements IDataViewCloseButton {
            static typeName: string;
            container: ControlBar;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+view+action+button relevant section in reference guide}
         */
        interface IDataViewActionButton extends IDataViewControlBarButton {
            container: IControlBar;
            load(): DataViewActionButton;
            load(callback: (element: DataViewActionButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+view+action+button relevant section in reference guide}
         */
        class DataViewActionButton extends DataViewControlBarButton implements IDataViewActionButton {
            static typeName: string;
            container: ControlBar;
            action: ClientAction;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+View+Save+Button relevant section in reference guide}
         */
        interface IDataViewSaveButton extends IDataViewControlBarButton {
            container: IControlBar;
            load(): DataViewSaveButton;
            load(callback: (element: DataViewSaveButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+View+Save+Button relevant section in reference guide}
         */
        class DataViewSaveButton extends DataViewControlBarButton implements IDataViewSaveButton {
            static typeName: string;
            container: ControlBar;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/List+View relevant section in reference guide}
         */
        interface IListView extends IListenTargetWidget {
            load(): ListView;
            load(callback: (element: ListView) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/List+View relevant section in reference guide}
         */
        class ListView extends ListenTargetWidget implements IListView {
            static typeName: string;
            widget: Widget;
            pageSize: number;
            clickAction: ClientAction;
            editable: boolean;
            templates: instances.IList<ListViewTemplate>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IListViewTemplate extends elements.IElement {
            container: IListView;
            load(): ListViewTemplate;
            load(callback: (element: ListViewTemplate) => void): any;
        }
        class ListViewTemplate extends elements.Element implements IListViewTemplate {
            static typeName: string;
            container: ListView;
            specialization: domainmodels.IEntity;
            specializationQualifiedName: string;
            widget: Widget;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IListViewDatabaseSource extends IEntityPathSource {
            container: IEntityWidget;
            load(): ListViewDatabaseSource;
            load(callback: (element: ListViewDatabaseSource) => void): any;
        }
        class ListViewDatabaseSource extends EntityPathSource implements IListViewDatabaseSource {
            static typeName: string;
            container: EntityWidget;
            /**
             * The value of this property is conceptually of type Paths$AttributePath.
             */
            searchPaths: instances.IList<string>;
            sortBar: GridSortBar;
            /**
             * The value of this property is conceptually of type XPathConstraints$XPathConstraint.
             */
            xPathConstraint: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Sort+Bar relevant section in reference guide}
         */
        interface IGridSortBar extends elements.IElement {
            load(): GridSortBar;
            load(callback: (element: GridSortBar) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Sort+Bar relevant section in reference guide}
         */
        class GridSortBar extends elements.Element implements IGridSortBar {
            static typeName: string;
            sortItems: instances.IList<GridSortItem>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IGridSortItem extends elements.IElement {
            container: IGridSortBar;
            load(): GridSortItem;
            load(callback: (element: GridSortItem) => void): any;
        }
        class GridSortItem extends elements.Element implements IGridSortItem {
            static typeName: string;
            container: GridSortBar;
            /**
             * The value of this property is conceptually of type Paths$AttributePath.
             */
            attributePath: string;
            sortDirection: SortDirection;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Button+Widgets relevant section in reference guide}
         */
        interface IButton extends IConditionallyVisibleWidget {
            load(): Button;
            load(callback: (element: Button) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Button+Widgets relevant section in reference guide}
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Button extends ConditionallyVisibleWidget implements IButton {
            static typeName: string;
            caption: ClientTemplate;
            tooltip: texts.Text;
            icon: Icon;
            renderType: RenderType;
            buttonStyle: ButtonStyle;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IStaticOrDynamicString extends elements.IElement {
            container: ILinkButton;
            load(): StaticOrDynamicString;
            load(callback: (element: StaticOrDynamicString) => void): any;
        }
        class StaticOrDynamicString extends elements.Element implements IStaticOrDynamicString {
            static typeName: string;
            container: LinkButton;
            isDynamic: boolean;
            value: string;
            /**
             * The value of this property is conceptually of type Paths$AttributePath.
             */
            attribute: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Back+Button relevant section in reference guide}
         */
        interface IBackButton extends IButton {
            load(): BackButton;
            load(callback: (element: BackButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Back+Button relevant section in reference guide}
         */
        class BackButton extends Button implements IBackButton {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Cancel+Button relevant section in reference guide}
         */
        interface ICancelButton extends IButton {
            load(): CancelButton;
            load(callback: (element: CancelButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Cancel+Button relevant section in reference guide}
         */
        class CancelButton extends Button implements ICancelButton {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Sign+Out+Button relevant section in reference guide}
         */
        interface ILogoutButton extends IButton {
            load(): LogoutButton;
            load(callback: (element: LogoutButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Sign+Out+Button relevant section in reference guide}
         */
        class LogoutButton extends Button implements ILogoutButton {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Action+Button relevant section in reference guide}
         */
        interface IActionButton extends IButton {
            load(): ActionButton;
            load(callback: (element: ActionButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Action+Button relevant section in reference guide}
         */
        class ActionButton extends Button implements IActionButton {
            static typeName: string;
            action: ClientAction;
            disabledDuringAction: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/New+Button relevant section in reference guide}
         */
        interface INewButton extends IButton {
            load(): NewButton;
            load(callback: (element: NewButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/New+Button relevant section in reference guide}
         */
        class NewButton extends Button implements INewButton {
            static typeName: string;
            entity: domainmodels.IEntity;
            entityQualifiedName: string;
            pageSettings: PageSettings;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Save+Button relevant section in reference guide}
         */
        interface ISaveButton extends IButton {
            load(): SaveButton;
            load(callback: (element: SaveButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Save+Button relevant section in reference guide}
         */
        class SaveButton extends Button implements ISaveButton {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IClientTemplate extends elements.IElement {
            load(): ClientTemplate;
            load(callback: (element: ClientTemplate) => void): any;
        }
        class ClientTemplate extends elements.Element implements IClientTemplate {
            static typeName: string;
            template: texts.Text;
            parameters: instances.IList<ClientTemplateParameter>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IClientTemplateParameter extends elements.IElement {
            container: IClientTemplate;
            load(): ClientTemplateParameter;
            load(callback: (element: ClientTemplateParameter) => void): any;
        }
        class ClientTemplateParameter extends elements.Element implements IClientTemplateParameter {
            static typeName: string;
            container: ClientTemplate;
            /**
             * The value of this property is conceptually of type Paths$AttributePath.
             */
            attributePath: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IGrid extends IListenTargetWidget {
            load(): Grid;
            load(callback: (element: Grid) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Grid extends ListenTargetWidget implements IGrid {
            static typeName: string;
            isControlBarVisible: boolean;
            isPagingEnabled: boolean;
            selectionMode: GridSelectionMode;
            selectFirst: boolean;
            defaultButtonTrigger: ClickTypeType;
            refreshTime: number;
            controlBar: GridControlBar;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IColumnGrid extends IGrid {
            load(): ColumnGrid;
            load(callback: (element: ColumnGrid) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ColumnGrid extends Grid implements IColumnGrid {
            static typeName: string;
            columns: instances.IList<GridColumn>;
            numberOfRows: number;
            showEmptyRows: boolean;
            widthUnit: UnitEnum;
            tooltipPage: IPage;
            tooltipPageQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ISearchField extends IControlBarItem {
            container: IControlBar;
            load(): SearchField;
            load(callback: (element: SearchField) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class SearchField extends ControlBarItem implements ISearchField {
            static typeName: string;
            container: ControlBar;
            caption: texts.Text;
            type: SearchFieldType;
            defaultValue: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ISingleSearchField extends ISearchField {
            container: IControlBar;
            load(): SingleSearchField;
            load(callback: (element: SingleSearchField) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class SingleSearchField extends SearchField implements ISingleSearchField {
            static typeName: string;
            container: ControlBar;
            /**
             * The value of this property is conceptually of type Paths$AttributePath.
             */
            attributePath: string;
            operator: SearchFieldOperator;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Comparison+Search+Field relevant section in reference guide}
         */
        interface IComparisonSearchField extends ISingleSearchField {
            container: IControlBar;
            load(): ComparisonSearchField;
            load(callback: (element: ComparisonSearchField) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Comparison+Search+Field relevant section in reference guide}
         */
        class ComparisonSearchField extends SingleSearchField implements IComparisonSearchField {
            static typeName: string;
            container: ControlBar;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IGridBaseSource extends IEntityPathSource {
            container: IEntityWidget;
            load(): GridBaseSource;
            load(callback: (element: GridBaseSource) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class GridBaseSource extends EntityPathSource implements IGridBaseSource {
            static typeName: string;
            container: EntityWidget;
            sortBar: GridSortBar;
            searchBar: SearchBar;
            searchBarType: SearchBarTypeEnum;
            waitForSearch: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IGridDatabaseSource extends IGridBaseSource {
            container: IEntityWidget;
            load(): GridDatabaseSource;
            load(callback: (element: GridDatabaseSource) => void): any;
        }
        class GridDatabaseSource extends GridBaseSource implements IGridDatabaseSource {
            static typeName: string;
            container: EntityWidget;
            /**
             * The value of this property is conceptually of type XPathConstraints$XPathConstraint.
             */
            xPathConstraint: string;
            applyContext: boolean;
            removeAllFromContext: boolean;
            removeFromContextIds: instances.IList<domainmodels.IEntity>;
            removeFromContextIdsQualifiedNames: string[];
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+Grid relevant section in reference guide}
         */
        interface IDataGrid extends IColumnGrid {
            load(): DataGrid;
            load(callback: (element: DataGrid) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+Grid relevant section in reference guide}
         */
        class DataGrid extends ColumnGrid implements IDataGrid {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IGridControlBarButton extends IControlBarButton {
            load(): GridControlBarButton;
            load(callback: (element: GridControlBarButton) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class GridControlBarButton extends ControlBarButton implements IGridControlBarButton {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Add+Button relevant section in reference guide}
         */
        interface IDataGridAddButton extends IGridControlBarButton {
            container: IControlBar;
            load(): DataGridAddButton;
            load(callback: (element: DataGridAddButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Add+Button relevant section in reference guide}
         */
        class DataGridAddButton extends GridControlBarButton implements IDataGridAddButton {
            static typeName: string;
            container: ControlBar;
            pageSettings: PageSettings;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Export+To+CSV+Button relevant section in reference guide}
         */
        interface IDataGridExportToCSVButton extends IGridControlBarButton {
            container: IControlBar;
            load(): DataGridExportToCSVButton;
            load(callback: (element: DataGridExportToCSVButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Export+To+CSV+Button relevant section in reference guide}
         */
        class DataGridExportToCSVButton extends GridControlBarButton implements IDataGridExportToCSVButton {
            static typeName: string;
            container: ControlBar;
            maxNumberOfRows: number;
            decimalSeparator: string;
            groupSeparator: string;
            delimiter: string;
            generateExcelHint: boolean;
            useGridDateFormat: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Export+To+Excel+Button relevant section in reference guide}
         */
        interface IDataGridExportToExcelButton extends IGridControlBarButton {
            container: IControlBar;
            load(): DataGridExportToExcelButton;
            load(callback: (element: DataGridExportToExcelButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Export+To+Excel+Button relevant section in reference guide}
         */
        class DataGridExportToExcelButton extends GridControlBarButton implements IDataGridExportToExcelButton {
            static typeName: string;
            container: ControlBar;
            maxNumberOfRows: number;
            useExcelDateType: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Remove+Button relevant section in reference guide}
         */
        interface IDataGridRemoveButton extends IGridControlBarButton {
            container: IControlBar;
            load(): DataGridRemoveButton;
            load(callback: (element: DataGridRemoveButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Remove+Button relevant section in reference guide}
         */
        class DataGridRemoveButton extends GridControlBarButton implements IDataGridRemoveButton {
            static typeName: string;
            container: ControlBar;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Drop-Down+Widget relevant section in reference guide}
         */
        interface IDropDown extends IAttributeWidget {
            load(): DropDown;
            load(callback: (element: DropDown) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Drop-Down+Widget relevant section in reference guide}
         */
        class DropDown extends AttributeWidget implements IDropDown {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Drop+Down+Button relevant section in reference guide}
         */
        interface IDropDownButton extends IButton {
            load(): DropDownButton;
            load(callback: (element: DropDownButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Drop+Down+Button relevant section in reference guide}
         */
        class DropDownButton extends Button implements IDropDownButton {
            static typeName: string;
            items: instances.IList<DropDownButtonItem>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IActionItem extends elements.IElement {
            container: IConditionallyVisibleWidget;
            load(): ActionItem;
            load(callback: (element: ActionItem) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ActionItem extends elements.Element implements IActionItem {
            static typeName: string;
            container: ConditionallyVisibleWidget;
            action: ClientAction;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDropDownButtonItem extends IActionItem {
            container: IDropDownButton;
            load(): DropDownButtonItem;
            load(callback: (element: DropDownButtonItem) => void): any;
        }
        class DropDownButtonItem extends ActionItem implements IDropDownButtonItem {
            static typeName: string;
            container: DropDownButton;
            caption: texts.Text;
            image: images.IImage;
            imageQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Drop-down+Search+Field relevant section in reference guide}
         */
        interface IDropDownSearchField extends ISingleSearchField {
            container: IControlBar;
            load(): DropDownSearchField;
            load(callback: (element: DropDownSearchField) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Drop-down+Search+Field relevant section in reference guide}
         */
        class DropDownSearchField extends SingleSearchField implements IDropDownSearchField {
            static typeName: string;
            container: ControlBar;
            sortBar: GridSortBar;
            /**
             * The value of this property is conceptually of type XPathConstraints$XPathConstraint.
             */
            xPathConstraint: string;
            allowMultipleSelect: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Image+Viewer relevant section in reference guide}
         */
        interface IDynamicImageViewer extends IEntityWidget {
            load(): DynamicImageViewer;
            load(callback: (element: DynamicImageViewer) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Image+Viewer relevant section in reference guide}
         */
        class DynamicImageViewer extends EntityWidget implements IDynamicImageViewer {
            static typeName: string;
            defaultImage: images.IImage;
            defaultImageQualifiedName: string;
            widthUnit: ImageSizeUnit;
            heightUnit: ImageSizeUnit;
            width: number;
            height: number;
            responsive: boolean;
            showAsThumbnail: boolean;
            onClickBehavior: OnClickBehavior;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Text relevant section in reference guide}
         */
        interface IDynamicText extends IConditionallyVisibleWidget {
            load(): DynamicText;
            load(callback: (element: DynamicText) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Text relevant section in reference guide}
         */
        class DynamicText extends ConditionallyVisibleWidget implements IDynamicText {
            static typeName: string;
            content: ClientTemplate;
            renderMode: TextRenderMode;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/File+Manager relevant section in reference guide}
         */
        interface IFileManager extends IInputWidget {
            load(): FileManager;
            load(callback: (element: FileManager) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/File+Manager relevant section in reference guide}
         */
        class FileManager extends InputWidget implements IFileManager {
            static typeName: string;
            allowedExtensions: string;
            type: FileManagerType;
            maxFileSize: number;
            showFileInBrowser: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IPageForSpecialization extends elements.IElement {
            container: IGridEditButton;
            load(): PageForSpecialization;
            load(callback: (element: PageForSpecialization) => void): any;
        }
        class PageForSpecialization extends elements.Element implements IPageForSpecialization {
            static typeName: string;
            container: GridEditButton;
            entity: domainmodels.IEntity;
            entityQualifiedName: string;
            pageSettings: PageSettings;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Image+Property relevant section in reference guide}
         */
        interface IIcon extends elements.IElement {
            load(): Icon;
            load(callback: (element: Icon) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Image+Property relevant section in reference guide}
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Icon extends elements.Element implements IIcon {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IGlyphIcon extends IIcon {
            load(): GlyphIcon;
            load(callback: (element: GlyphIcon) => void): any;
        }
        class GlyphIcon extends Icon implements IGlyphIcon {
            static typeName: string;
            code: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Grid+action+button relevant section in reference guide}
         */
        interface IGridActionButton extends IGridControlBarButton {
            container: IControlBar;
            load(): GridActionButton;
            load(callback: (element: GridActionButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Grid+action+button relevant section in reference guide}
         */
        class GridActionButton extends GridControlBarButton implements IGridActionButton {
            static typeName: string;
            container: ControlBar;
            action: ClientAction;
            maintainSelectionAfterMicroflow: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Columns relevant section in reference guide}
         */
        interface IGridColumn extends elements.IElement {
            container: IColumnGrid;
            load(): GridColumn;
            load(callback: (element: GridColumn) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Columns relevant section in reference guide}
         */
        class GridColumn extends elements.Element implements IGridColumn {
            static typeName: string;
            container: ColumnGrid;
            name: string;
            caption: texts.Text;
            /**
             * The value of this property is conceptually of type Paths$AttributePath.
             */
            attributePath: string;
            formattingInfo: FormattingInfo;
            showTooltip: boolean;
            aggregateCaption: texts.Text;
            aggregateFunction: AggregateFunction;
            editable: boolean;
            width: number;
            class: string;
            style: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Control+Bar relevant section in reference guide}
         */
        interface IGridControlBar extends IControlBar {
            container: IGrid;
            load(): GridControlBar;
            load(callback: (element: GridControlBar) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Control+Bar relevant section in reference guide}
         */
        class GridControlBar extends ControlBar implements IGridControlBar {
            static typeName: string;
            container: Grid;
            searchButton: GridSearchButton;
            defaultButton: ControlBarItem;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Delete+Button relevant section in reference guide}
         */
        interface IGridDeleteButton extends IGridControlBarButton {
            container: IControlBar;
            load(): GridDeleteButton;
            load(callback: (element: GridDeleteButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Delete+Button relevant section in reference guide}
         */
        class GridDeleteButton extends GridControlBarButton implements IGridDeleteButton {
            static typeName: string;
            container: ControlBar;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Deselect+All+Button relevant section in reference guide}
         */
        interface IGridDeselectAllButton extends IGridControlBarButton {
            container: IControlBar;
            load(): GridDeselectAllButton;
            load(callback: (element: GridDeselectAllButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Deselect+All+Button relevant section in reference guide}
         */
        class GridDeselectAllButton extends GridControlBarButton implements IGridDeselectAllButton {
            static typeName: string;
            container: ControlBar;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Edit+Button relevant section in reference guide}
         */
        interface IGridEditButton extends IGridControlBarButton {
            container: IControlBar;
            load(): GridEditButton;
            load(callback: (element: GridEditButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Edit+Button relevant section in reference guide}
         */
        class GridEditButton extends GridControlBarButton implements IGridEditButton {
            static typeName: string;
            container: ControlBar;
            pageSettings: PageSettings;
            pagesForSpecializations: instances.IList<PageForSpecialization>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Grid+New+Button relevant section in reference guide}
         */
        interface IGridNewButton extends IGridControlBarButton {
            container: IControlBar;
            load(): GridNewButton;
            load(callback: (element: GridNewButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Grid+New+Button relevant section in reference guide}
         */
        class GridNewButton extends GridControlBarButton implements IGridNewButton {
            static typeName: string;
            container: ControlBar;
            entity: domainmodels.IEntity;
            entityQualifiedName: string;
            editLocation: NewButtonEditLocation;
            pageSettings: PageSettings;
            isPersistent: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Search+Button relevant section in reference guide}
         */
        interface IGridSearchButton extends IGridControlBarButton {
            load(): GridSearchButton;
            load(callback: (element: GridSearchButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Search+Button relevant section in reference guide}
         */
        class GridSearchButton extends GridControlBarButton implements IGridSearchButton {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Select+All+Button relevant section in reference guide}
         */
        interface IGridSelectAllButton extends IGridControlBarButton {
            container: IControlBar;
            load(): GridSelectAllButton;
            load(callback: (element: GridSelectAllButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Select+All+Button relevant section in reference guide}
         */
        class GridSelectAllButton extends GridControlBarButton implements IGridSelectAllButton {
            static typeName: string;
            container: ControlBar;
            selectionType: SelectionType;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Group+Box relevant section in reference guide}
         */
        interface IGroupBox extends IConditionallyVisibleWidget {
            load(): GroupBox;
            load(callback: (element: GroupBox) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Group+Box relevant section in reference guide}
         */
        class GroupBox extends ConditionallyVisibleWidget implements IGroupBox {
            static typeName: string;
            caption: ClientTemplate;
            collapsible: GroupBoxCollapsible;
            widget: Widget;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Header relevant section in reference guide}
         */
        interface IHeader extends IWidget {
            load(): Header;
            load(callback: (element: Header) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Header relevant section in reference guide}
         */
        class Header extends Widget implements IHeader {
            static typeName: string;
            leftWidget: Widget;
            rightWidget: Widget;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ISplitPane extends IWidget {
            load(): SplitPane;
            load(callback: (element: SplitPane) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class SplitPane extends Widget implements ISplitPane {
            static typeName: string;
            firstWidget: Widget;
            secondWidget: Widget;
            animatedResize: boolean;
            height: number;
            position: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Horizontal+Split+Pane relevant section in reference guide}
         */
        interface IHorizontalSplitPane extends ISplitPane {
            load(): HorizontalSplitPane;
            load(callback: (element: HorizontalSplitPane) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Horizontal+Split+Pane relevant section in reference guide}
         */
        class HorizontalSplitPane extends SplitPane implements IHorizontalSplitPane {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IImageIcon extends IIcon {
            load(): ImageIcon;
            load(callback: (element: ImageIcon) => void): any;
        }
        class ImageIcon extends Icon implements IImageIcon {
            static typeName: string;
            image: images.IImage;
            imageQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Image+Uploader relevant section in reference guide}
         */
        interface IImageUploader extends IInputWidget {
            load(): ImageUploader;
            load(callback: (element: ImageUploader) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Image+Uploader relevant section in reference guide}
         */
        class ImageUploader extends InputWidget implements IImageUploader {
            static typeName: string;
            allowedExtensions: string;
            thumbnailSize: common.ISize;
            maxFileSize: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IImageViewerSource extends IEntityPathSource {
            container: IEntityWidget;
            load(): ImageViewerSource;
            load(callback: (element: ImageViewerSource) => void): any;
        }
        class ImageViewerSource extends EntityPathSource implements IImageViewerSource {
            static typeName: string;
            container: EntityWidget;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IAssociationWidget extends IMemberWidget {
            load(): AssociationWidget;
            load(callback: (element: AssociationWidget) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class AssociationWidget extends MemberWidget implements IAssociationWidget {
            static typeName: string;
            selectorSource: SelectorSource;
            selectPageSettings: PageSettings;
            onChangeMicroflowSettings: MicroflowSettings;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Input+Reference+Set+Selector relevant section in reference guide}
         */
        interface IInputReferenceSetSelector extends IAssociationWidget {
            load(): InputReferenceSetSelector;
            load(callback: (element: InputReferenceSetSelector) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Input+Reference+Set+Selector relevant section in reference guide}
         */
        class InputReferenceSetSelector extends AssociationWidget implements IInputReferenceSetSelector {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Layout+Grid relevant section in reference guide}
         */
        interface ILayoutGrid extends IConditionallyVisibleWidget {
            load(): LayoutGrid;
            load(callback: (element: LayoutGrid) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Layout+Grid relevant section in reference guide}
         */
        class LayoutGrid extends ConditionallyVisibleWidget implements ILayoutGrid {
            static typeName: string;
            width: ContainerWidth;
            rows: instances.IList<LayoutGridRow>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ILayoutGridColumn extends elements.IElement {
            container: ILayoutGridRow;
            load(): LayoutGridColumn;
            load(callback: (element: LayoutGridColumn) => void): any;
        }
        class LayoutGridColumn extends elements.Element implements ILayoutGridColumn {
            static typeName: string;
            container: LayoutGridRow;
            weight: number;
            widget: Widget;
            class: string;
            style: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ILayoutGridRow extends elements.IElement {
            container: ILayoutGrid;
            load(): LayoutGridRow;
            load(callback: (element: LayoutGridRow) => void): any;
        }
        class LayoutGridRow extends elements.Element implements ILayoutGridRow {
            static typeName: string;
            container: LayoutGrid;
            columns: instances.IList<LayoutGridColumn>;
            conditionalVisibilitySettings: ConditionalVisibilitySettings;
            class: string;
            style: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Link+Button relevant section in reference guide}
         */
        interface ILinkButton extends IButton {
            load(): LinkButton;
            load(callback: (element: LinkButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Link+Button relevant section in reference guide}
         */
        class LinkButton extends Button implements ILinkButton {
            static typeName: string;
            linkType: LinkType;
            address: StaticOrDynamicString;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Menu+Widgets relevant section in reference guide}
         */
        interface IMenuWidget extends IWidget {
            load(): MenuWidget;
            load(callback: (element: MenuWidget) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Menu+Widgets relevant section in reference guide}
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class MenuWidget extends Widget implements IMenuWidget {
            static typeName: string;
            menuSource: MenuSource;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Menu+Bar relevant section in reference guide}
         */
        interface IMenuBar extends IMenuWidget {
            load(): MenuBar;
            load(callback: (element: MenuBar) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Menu+Bar relevant section in reference guide}
         */
        class MenuBar extends MenuWidget implements IMenuBar {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMenuSource extends elements.IElement {
            container: IMenuWidget;
            load(): MenuSource;
            load(callback: (element: MenuSource) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class MenuSource extends elements.Element implements IMenuSource {
            static typeName: string;
            container: MenuWidget;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IMenuDocumentSource extends IMenuSource {
            container: IMenuWidget;
            load(): MenuDocumentSource;
            load(callback: (element: MenuDocumentSource) => void): any;
        }
        class MenuDocumentSource extends MenuSource implements IMenuDocumentSource {
            static typeName: string;
            container: MenuWidget;
            menu: menus.IMenuDocument;
            menuQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Navigation+List relevant section in reference guide}
         */
        interface INavigationList extends IConditionallyVisibleWidget {
            load(): NavigationList;
            load(callback: (element: NavigationList) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Navigation+List relevant section in reference guide}
         */
        class NavigationList extends ConditionallyVisibleWidget implements INavigationList {
            static typeName: string;
            items: instances.IList<NavigationListItem>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface INavigationListItem extends IActionItem {
            container: INavigationList;
            load(): NavigationListItem;
            load(callback: (element: NavigationListItem) => void): any;
        }
        class NavigationListItem extends ActionItem implements INavigationListItem {
            static typeName: string;
            container: NavigationList;
            widget: Widget;
            class: string;
            style: string;
            conditionalVisibilitySettings: ConditionalVisibilitySettings;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface INavigationSource extends IMenuSource {
            container: IMenuWidget;
            load(): NavigationSource;
            load(callback: (element: NavigationSource) => void): any;
        }
        class NavigationSource extends MenuSource implements INavigationSource {
            static typeName: string;
            container: MenuWidget;
            deviceType: navigation.DeviceType;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Navigation+Tree relevant section in reference guide}
         */
        interface INavigationTree extends IMenuWidget {
            load(): NavigationTree;
            load(callback: (element: NavigationTree) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Navigation+Tree relevant section in reference guide}
         */
        class NavigationTree extends MenuWidget implements INavigationTree {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IOnClickBehavior extends elements.IElement {
            container: IDynamicImageViewer;
            load(): OnClickBehavior;
            load(callback: (element: OnClickBehavior) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class OnClickBehavior extends elements.Element implements IOnClickBehavior {
            static typeName: string;
            container: DynamicImageViewer;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IOnClickEnlarge extends IOnClickBehavior {
            container: IDynamicImageViewer;
            load(): OnClickEnlarge;
            load(callback: (element: OnClickEnlarge) => void): any;
        }
        class OnClickEnlarge extends OnClickBehavior implements IOnClickEnlarge {
            static typeName: string;
            container: DynamicImageViewer;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IOnClickMicroflow extends IOnClickBehavior {
            container: IDynamicImageViewer;
            load(): OnClickMicroflow;
            load(callback: (element: OnClickMicroflow) => void): any;
        }
        class OnClickMicroflow extends OnClickBehavior implements IOnClickMicroflow {
            static typeName: string;
            container: DynamicImageViewer;
            microflowSettings: MicroflowSettings;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IOnClickNothing extends IOnClickBehavior {
            container: IDynamicImageViewer;
            load(): OnClickNothing;
            load(callback: (element: OnClickNothing) => void): any;
        }
        class OnClickNothing extends OnClickBehavior implements IOnClickNothing {
            static typeName: string;
            container: DynamicImageViewer;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Range+Search+Field relevant section in reference guide}
         */
        interface IRangeSearchField extends ISearchField {
            container: IControlBar;
            load(): RangeSearchField;
            load(callback: (element: RangeSearchField) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Range+Search+Field relevant section in reference guide}
         */
        class RangeSearchField extends SearchField implements IRangeSearchField {
            static typeName: string;
            container: ControlBar;
            /**
             * The value of this property is conceptually of type Paths$AttributePath.
             */
            lowerBound: string;
            /**
             * The value of this property is conceptually of type Paths$AttributePath.
             */
            upperBound: string;
            includeLower: boolean;
            includeUpper: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Reference+Selector relevant section in reference guide}
         */
        interface IReferenceSelector extends IAssociationWidget {
            load(): ReferenceSelector;
            load(callback: (element: ReferenceSelector) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Reference+Selector relevant section in reference guide}
         */
        class ReferenceSelector extends AssociationWidget implements IReferenceSelector {
            static typeName: string;
            required: boolean;
            requiredMessage: texts.Text;
            renderMode: ReferenceSelectorRenderModeType;
            gotoPageSettings: PageSettings;
            formattingInfo: FormattingInfo;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Reference+Set+Selector relevant section in reference guide}
         */
        interface IReferenceSetSelector extends IColumnGrid {
            load(): ReferenceSetSelector;
            load(callback: (element: ReferenceSetSelector) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Reference+Set+Selector relevant section in reference guide}
         */
        class ReferenceSetSelector extends ColumnGrid implements IReferenceSetSelector {
            static typeName: string;
            onChangeMicroflowSettings: MicroflowSettings;
            /**
             * The value of this property is conceptually of type Paths$EntityPath.
             */
            constrainedBy: instances.IList<string>;
            /**
             * The value of this property is conceptually of type XPathConstraints$XPathConstraint.
             */
            xPathConstraint: string;
            removeAllFromContext: boolean;
            removeFromContextEntities: instances.IList<domainmodels.IEntity>;
            removeFromContextEntitiesQualifiedNames: string[];
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IReferenceSetSource extends IGridBaseSource {
            container: IEntityWidget;
            load(): ReferenceSetSource;
            load(callback: (element: ReferenceSetSource) => void): any;
        }
        class ReferenceSetSource extends GridBaseSource implements IReferenceSetSource {
            static typeName: string;
            container: EntityWidget;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Scroll+Container relevant section in reference guide}
         */
        interface IScrollContainer extends IWidget {
            load(): ScrollContainer;
            load(callback: (element: ScrollContainer) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Scroll+Container relevant section in reference guide}
         */
        class ScrollContainer extends Widget implements IScrollContainer {
            static typeName: string;
            center: ScrollContainerRegion;
            left: ScrollContainerRegion;
            right: ScrollContainerRegion;
            top: ScrollContainerRegion;
            bottom: ScrollContainerRegion;
            layoutMode: LayoutModeType;
            widthMode: SizeMode;
            width: number;
            alignment: AlignmentEnum;
            scrollBehavior: ScrollBehavior;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IScrollContainerRegion extends elements.IElement {
            container: IScrollContainer;
            load(): ScrollContainerRegion;
            load(callback: (element: ScrollContainerRegion) => void): any;
        }
        class ScrollContainerRegion extends elements.Element implements IScrollContainerRegion {
            static typeName: string;
            container: ScrollContainer;
            widget: Widget;
            sizeMode: SizeMode;
            size: number;
            class: string;
            style: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Search+Bar relevant section in reference guide}
         */
        interface ISearchBar extends IControlBar {
            container: IGridBaseSource;
            load(): SearchBar;
            load(callback: (element: SearchBar) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Search+Bar relevant section in reference guide}
         */
        class SearchBar extends ControlBar implements ISearchBar {
            static typeName: string;
            container: GridBaseSource;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Select+Button relevant section in reference guide}
         */
        interface ISelectButton extends IGridControlBarButton {
            container: IControlBar;
            load(): SelectButton;
            load(callback: (element: SelectButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Select+Button relevant section in reference guide}
         */
        class SelectButton extends GridControlBarButton implements ISelectButton {
            static typeName: string;
            container: ControlBar;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ISelectorSource extends elements.IElement {
            container: IAssociationWidget;
            load(): SelectorSource;
            load(callback: (element: SelectorSource) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class SelectorSource extends elements.Element implements ISelectorSource {
            static typeName: string;
            container: AssociationWidget;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface ISelectorDatabaseSource extends ISelectorSource {
            container: IAssociationWidget;
            load(): SelectorDatabaseSource;
            load(callback: (element: SelectorDatabaseSource) => void): any;
        }
        class SelectorDatabaseSource extends SelectorSource implements ISelectorDatabaseSource {
            static typeName: string;
            container: AssociationWidget;
            sortBar: GridSortBar;
            /**
             * The value of this property is conceptually of type XPathConstraints$XPathConstraint.
             */
            xPathConstraint: string;
            /**
             * The value of this property is conceptually of type Paths$EntityPath.
             */
            constrainedBy: instances.IList<string>;
            applyContext: boolean;
            removeAllFromContext: boolean;
            removeFromContextEntities: instances.IList<domainmodels.IEntity>;
            removeFromContextEntitiesQualifiedNames: string[];
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ISelectorMicroflowSource extends ISelectorSource {
            container: IAssociationWidget;
            load(): SelectorMicroflowSource;
            load(callback: (element: SelectorMicroflowSource) => void): any;
        }
        class SelectorMicroflowSource extends SelectorSource implements ISelectorMicroflowSource {
            static typeName: string;
            container: AssociationWidget;
            dataSourceMicroflowSettings: MicroflowSettings;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Sidebar+Toggle+Button relevant section in reference guide}
         */
        interface ISidebarToggleButton extends IButton {
            load(): SidebarToggleButton;
            load(callback: (element: SidebarToggleButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Sidebar+Toggle+Button relevant section in reference guide}
         */
        class SidebarToggleButton extends Button implements ISidebarToggleButton {
            static typeName: string;
            region: SidebarToggleRegion;
            mode: SidebarToggleMode;
            initiallyOpen: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Simple+Menu+Bar relevant section in reference guide}
         */
        interface ISimpleMenuBar extends IMenuWidget {
            load(): SimpleMenuBar;
            load(callback: (element: SimpleMenuBar) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Simple+Menu+Bar relevant section in reference guide}
         */
        class SimpleMenuBar extends MenuWidget implements ISimpleMenuBar {
            static typeName: string;
            orientation: SimpleMenuBarOrientation;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Snippet relevant section in reference guide}
         */
        interface ISnippet extends IFormBase {
            container: projects.IFolderBase;
            load(): Snippet;
            load(callback: (element: Snippet) => void): any;
            entity: domainmodels.IEntity;
            entityQualifiedName: string;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Snippet relevant section in reference guide}
         */
        class Snippet extends FormBase implements ISnippet {
            static typeName: string;
            container: projects.FolderBase;
            entity: domainmodels.IEntity;
            entityQualifiedName: string;
            widget: Widget;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ISnippetCall extends elements.IElement {
            container: ISnippetCallWidget;
            load(): SnippetCall;
            load(callback: (element: SnippetCall) => void): any;
        }
        class SnippetCall extends elements.Element implements ISnippetCall {
            static typeName: string;
            container: SnippetCallWidget;
            snippet: ISnippet;
            snippetQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Snippet+Call relevant section in reference guide}
         */
        interface ISnippetCallWidget extends IWidget {
            load(): SnippetCallWidget;
            load(callback: (element: SnippetCallWidget) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Snippet+Call relevant section in reference guide}
         */
        class SnippetCallWidget extends Widget implements ISnippetCallWidget {
            static typeName: string;
            snippetCall: SnippetCall;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Tab+Container relevant section in reference guide}
         */
        interface ITabContainer extends IConditionallyVisibleWidget {
            load(): TabContainer;
            load(callback: (element: TabContainer) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Tab+Container relevant section in reference guide}
         */
        class TabContainer extends ConditionallyVisibleWidget implements ITabContainer {
            static typeName: string;
            tabPages: instances.IList<TabPage>;
            defaultPage: TabPage;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Tab+Page relevant section in reference guide}
         */
        interface ITabPage extends elements.IElement {
            container: ITabContainer;
            load(): TabPage;
            load(callback: (element: TabPage) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Tab+Page relevant section in reference guide}
         */
        class TabPage extends elements.Element implements ITabPage {
            static typeName: string;
            container: TabContainer;
            name: string;
            caption: texts.Text;
            refreshOnShow: boolean;
            conditionalVisibilitySettings: ConditionalVisibilitySettings;
            widget: Widget;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Template+Grid relevant section in reference guide}
         */
        interface ITemplateGrid extends IGrid {
            load(): TemplateGrid;
            load(callback: (element: TemplateGrid) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Template+Grid relevant section in reference guide}
         */
        class TemplateGrid extends Grid implements ITemplateGrid {
            static typeName: string;
            contents: TemplateGridContents;
            numberOfRows: number;
            numberOfColumns: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ITemplateGridContents extends elements.IElement {
            container: ITemplateGrid;
            load(): TemplateGridContents;
            load(callback: (element: TemplateGridContents) => void): any;
        }
        class TemplateGridContents extends elements.Element implements ITemplateGridContents {
            static typeName: string;
            container: TemplateGrid;
            widget: Widget;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Page+Title relevant section in reference guide}
         */
        interface ITitle extends IConditionallyVisibleWidget {
            load(): Title;
            load(callback: (element: Title) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Page+Title relevant section in reference guide}
         */
        class Title extends ConditionallyVisibleWidget implements ITitle {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Vertical+Split+Pane relevant section in reference guide}
         */
        interface IVerticalSplitPane extends ISplitPane {
            load(): VerticalSplitPane;
            load(callback: (element: VerticalSplitPane) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Vertical+Split+Pane relevant section in reference guide}
         */
        class VerticalSplitPane extends SplitPane implements IVerticalSplitPane {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IProjectSettingsPart extends elements.IElement {
            container: settings.IProjectSettings;
            load(): ProjectSettingsPart;
            load(callback: (element: ProjectSettingsPart) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ProjectSettingsPart extends elements.Element implements IProjectSettingsPart {
            static typeName: string;
            container: settings.ProjectSettings;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IWebUIProjectSettingsPart extends settings.IProjectSettingsPart {
            container: settings.IProjectSettings;
            load(): WebUIProjectSettingsPart;
            load(callback: (element: WebUIProjectSettingsPart) => void): any;
        }
        class WebUIProjectSettingsPart extends settings.ProjectSettingsPart implements IWebUIProjectSettingsPart {
            static typeName: string;
            container: settings.ProjectSettings;
            theme: string;
            feedbackWidgetUpdated: boolean;
            useModernUI: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        class FormLocation extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Content: FormLocation;
            static Popup: FormLocation;
            static ModalPopup: FormLocation;
        }
        class ProgressBarType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static None: ProgressBarType;
            static NonBlocking: ProgressBarType;
            static Blocking: ProgressBarType;
        }
        class FormValidations extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static None: FormValidations;
            static Widget: FormValidations;
            static All: FormValidations;
        }
        class EnumFormat extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Text: EnumFormat;
            static Image: EnumFormat;
        }
        class DateFormat extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Date: DateFormat;
            static Time: DateFormat;
            static DateTime: DateFormat;
            static Custom: DateFormat;
        }
        class EditableEnum extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Always: EditableEnum;
            static Never: EditableEnum;
            static Conditional: EditableEnum;
        }
        class UnitEnum extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Weight: UnitEnum;
            static Pixels: UnitEnum;
        }
        class SortDirection extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Ascending: SortDirection;
            static Descending: SortDirection;
        }
        class RenderType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Button: RenderType;
            static Link: RenderType;
        }
        class ButtonStyle extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Default: ButtonStyle;
            static Inverse: ButtonStyle;
            static Primary: ButtonStyle;
            static Info: ButtonStyle;
            static Success: ButtonStyle;
            static Warning: ButtonStyle;
            static Danger: ButtonStyle;
        }
        class AggregateFunction extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static None: AggregateFunction;
            static Average: AggregateFunction;
            static Maximum: AggregateFunction;
            static Minimum: AggregateFunction;
            static Sum: AggregateFunction;
            static Count: AggregateFunction;
        }
        class AlignmentEnum extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Left: AlignmentEnum;
            static Center: AlignmentEnum;
            static Right: AlignmentEnum;
        }
        class ClickTypeType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Single: ClickTypeType;
            static Double: ClickTypeType;
        }
        class ContainerWidth extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static FullWidth: ContainerWidth;
            static FixedWidth: ContainerWidth;
        }
        class FileManagerType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Upload: FileManagerType;
            static Download: FileManagerType;
            static Both: FileManagerType;
        }
        class GridSelectionMode extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static None: GridSelectionMode;
            static Single: GridSelectionMode;
            static SingleAndMaintain: GridSelectionMode;
            static Multi: GridSelectionMode;
            static SimpleMulti: GridSelectionMode;
        }
        class GroupBoxCollapsible extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static No: GroupBoxCollapsible;
            static YesInitiallyExpanded: GroupBoxCollapsible;
            static YesInitiallyCollapsed: GroupBoxCollapsible;
        }
        class ImageSizeUnit extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Auto: ImageSizeUnit;
            static Pixels: ImageSizeUnit;
            static Percentage: ImageSizeUnit;
        }
        class LayoutModeType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Headline: LayoutModeType;
            static Sidebar: LayoutModeType;
        }
        class LayoutType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Responsive: LayoutType;
            static Tablet: LayoutType;
            static Phone: LayoutType;
            static ModalPopup: LayoutType;
            static Popup: LayoutType;
            static Legacy: LayoutType;
        }
        class LinkType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Web: LinkType;
            static Email: LinkType;
            static Call: LinkType;
            static Text: LinkType;
        }
        class MobileFooterType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static None: MobileFooterType;
            static MenuBar: MobileFooterType;
            static Custom: MobileFooterType;
        }
        class NewButtonEditLocation extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static InlineAtTop: NewButtonEditLocation;
            static InlineAtBottom: NewButtonEditLocation;
            static Form: NewButtonEditLocation;
        }
        class ReferenceSelectorRenderModeType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Form: ReferenceSelectorRenderModeType;
            static DropDown: ReferenceSelectorRenderModeType;
        }
        class RenderModeType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Button: RenderModeType;
            static Link: RenderModeType;
        }
        class ScrollBehavior extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static PerRegion: ScrollBehavior;
            static FullWidget: ScrollBehavior;
        }
        class SearchBarTypeEnum extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static None: SearchBarTypeEnum;
            static FoldableOpen: SearchBarTypeEnum;
            static FoldableClosed: SearchBarTypeEnum;
            static AlwaysOpen: SearchBarTypeEnum;
        }
        class SearchFieldOperator extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Contains: SearchFieldOperator;
            static StartsWith: SearchFieldOperator;
            static Greater: SearchFieldOperator;
            static GreaterOrEqual: SearchFieldOperator;
            static Equal: SearchFieldOperator;
            static NotEqual: SearchFieldOperator;
            static SmallerOrEqual: SearchFieldOperator;
            static Smaller: SearchFieldOperator;
        }
        class SearchFieldType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Normal: SearchFieldType;
            static Hidden: SearchFieldType;
            static ReadOnly: SearchFieldType;
        }
        class SelectionType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static SelectPage: SelectionType;
            static SelectAll: SelectionType;
        }
        class SidebarToggleMode extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static PushContentAside: SidebarToggleMode;
            static SlideOverContent: SidebarToggleMode;
            static ShrinkContent: SidebarToggleMode;
        }
        class SidebarToggleRegion extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Left: SidebarToggleRegion;
            static Right: SidebarToggleRegion;
        }
        class SimpleMenuBarOrientation extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Horizontal: SimpleMenuBarOrientation;
            static Vertical: SimpleMenuBarOrientation;
        }
        class SizeMode extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Auto: SizeMode;
            static Pixels: SizeMode;
            static Percentage: SizeMode;
        }
        class TableCellRenderModeType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Default: TableCellRenderModeType;
            static Header: TableCellRenderModeType;
            static Title: TableCellRenderModeType;
        }
        class TextRenderMode extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Text: TextRenderMode;
            static Paragraph: TextRenderMode;
            static H1: TextRenderMode;
            static H2: TextRenderMode;
            static H3: TextRenderMode;
            static H4: TextRenderMode;
            static H5: TextRenderMode;
            static H6: TextRenderMode;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `CustomWidgets`.
     */
    module customwidgets {
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Pages relevant section in reference guide}
         */
        interface IWidget extends elements.IElement {
            load(): Widget;
            load(callback: (element: Widget) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Pages relevant section in reference guide}
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Widget extends elements.Element implements IWidget {
            static typeName: string;
            name: string;
            class: string;
            style: string;
            tabIndex: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ICustomWidget extends pages.IWidget {
            load(): CustomWidget;
            load(callback: (element: CustomWidget) => void): any;
        }
        class CustomWidget extends pages.Widget implements ICustomWidget {
            static typeName: string;
            type: CustomWidgetType;
            object: WidgetObject;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ICustomWidgetType extends elements.IElement {
            container: ICustomWidget;
            load(): CustomWidgetType;
            load(callback: (element: CustomWidgetType) => void): any;
        }
        class CustomWidgetType extends elements.Element implements ICustomWidgetType {
            static typeName: string;
            container: CustomWidget;
            widgetId: string;
            needsEntityContext: boolean;
            name: string;
            description: string;
            phoneGapEnabled: boolean;
            objectType: WidgetObjectType;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IWidgetEnumerationValue extends elements.IElement {
            container: IWidgetValueType;
            load(): WidgetEnumerationValue;
            load(callback: (element: WidgetEnumerationValue) => void): any;
        }
        class WidgetEnumerationValue extends elements.Element implements IWidgetEnumerationValue {
            static typeName: string;
            container: WidgetValueType;
            key: string;
            caption: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IWidgetObject extends elements.IElement {
            load(): WidgetObject;
            load(callback: (element: WidgetObject) => void): any;
        }
        class WidgetObject extends elements.Element implements IWidgetObject {
            static typeName: string;
            type: WidgetObjectType;
            properties: instances.IList<WidgetProperty>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IWidgetObjectType extends elements.IElement {
            load(): WidgetObjectType;
            load(callback: (element: WidgetObjectType) => void): any;
        }
        class WidgetObjectType extends elements.Element implements IWidgetObjectType {
            static typeName: string;
            propertyTypes: instances.IList<WidgetPropertyType>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IWidgetProperty extends elements.IElement {
            container: IWidgetObject;
            load(): WidgetProperty;
            load(callback: (element: WidgetProperty) => void): any;
        }
        class WidgetProperty extends elements.Element implements IWidgetProperty {
            static typeName: string;
            container: WidgetObject;
            type: WidgetPropertyType;
            value: WidgetValue;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IWidgetPropertyType extends elements.IElement {
            container: IWidgetObjectType;
            load(): WidgetPropertyType;
            load(callback: (element: WidgetPropertyType) => void): any;
        }
        class WidgetPropertyType extends elements.Element implements IWidgetPropertyType {
            static typeName: string;
            container: WidgetObjectType;
            key: string;
            category: string;
            caption: string;
            description: string;
            isDefault: boolean;
            valueType: WidgetValueType;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IWidgetReturnType extends elements.IElement {
            container: IWidgetValueType;
            load(): WidgetReturnType;
            load(callback: (element: WidgetReturnType) => void): any;
        }
        class WidgetReturnType extends elements.Element implements IWidgetReturnType {
            static typeName: string;
            container: WidgetValueType;
            type: WidgetReturnTypeEnum;
            isList: boolean;
            entityProperty: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IWidgetTranslation extends elements.IElement {
            container: IWidgetValueType;
            load(): WidgetTranslation;
            load(callback: (element: WidgetTranslation) => void): any;
        }
        class WidgetTranslation extends elements.Element implements IWidgetTranslation {
            static typeName: string;
            container: WidgetValueType;
            languageCode: string;
            text: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IWidgetValue extends elements.IElement {
            container: IWidgetProperty;
            load(): WidgetValue;
            load(callback: (element: WidgetValue) => void): any;
        }
        class WidgetValue extends elements.Element implements IWidgetValue {
            static typeName: string;
            container: WidgetProperty;
            type: WidgetValueType;
            primitiveValue: string;
            /**
             * The value of this property is conceptually of type Paths$EntityPath.
             */
            entityPath: string;
            /**
             * The value of this property is conceptually of type Paths$AttributePath.
             */
            attributePath: string;
            page: pages.IPage;
            pageQualifiedName: string;
            microflow: microflows.IMicroflow;
            microflowQualifiedName: string;
            image: images.IImage;
            imageQualifiedName: string;
            translatableValue: texts.Text;
            /**
             * The value of this property is conceptually of type XPathConstraints$XPathConstraint.
             */
            xPathConstraint: string;
            objects: instances.IList<WidgetObject>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IWidgetValueType extends elements.IElement {
            container: IWidgetPropertyType;
            load(): WidgetValueType;
            load(callback: (element: WidgetValueType) => void): any;
        }
        class WidgetValueType extends elements.Element implements IWidgetValueType {
            static typeName: string;
            container: WidgetPropertyType;
            type: WidgetValueTypeEnum;
            isList: boolean;
            entityProperty: string;
            allowNonPersistableEntities: boolean;
            isPath: IsPath;
            pathType: PathType;
            parameterIsList: boolean;
            multiline: boolean;
            defaultValue: string;
            required: boolean;
            attributeTypes: instances.IList<CustomWidgetAttributeType>;
            enumerationValues: instances.IList<WidgetEnumerationValue>;
            objectType: WidgetObjectType;
            returnType: WidgetReturnType;
            translations: instances.IList<WidgetTranslation>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        class CustomWidgetAttributeType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static AutoNumber: CustomWidgetAttributeType;
            static Binary: CustomWidgetAttributeType;
            static Boolean: CustomWidgetAttributeType;
            static Currency: CustomWidgetAttributeType;
            static DateTime: CustomWidgetAttributeType;
            static Enum: CustomWidgetAttributeType;
            static Float: CustomWidgetAttributeType;
            static HashString: CustomWidgetAttributeType;
            static Integer: CustomWidgetAttributeType;
            static Long: CustomWidgetAttributeType;
            static String: CustomWidgetAttributeType;
            static Decimal: CustomWidgetAttributeType;
        }
        class IsPath extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static No: IsPath;
            static Optional: IsPath;
            static Yes: IsPath;
        }
        class PathType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static None: PathType;
            static Reference: PathType;
            static ReferenceSet: PathType;
        }
        class WidgetReturnTypeEnum extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Void: WidgetReturnTypeEnum;
            static Boolean: WidgetReturnTypeEnum;
            static Integer: WidgetReturnTypeEnum;
            static Float: WidgetReturnTypeEnum;
            static DateTime: WidgetReturnTypeEnum;
            static String: WidgetReturnTypeEnum;
            static Object: WidgetReturnTypeEnum;
            static Decimal: WidgetReturnTypeEnum;
        }
        class WidgetValueTypeEnum extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Attribute: WidgetValueTypeEnum;
            static Boolean: WidgetValueTypeEnum;
            static Entity: WidgetValueTypeEnum;
            static EntityConstraint: WidgetValueTypeEnum;
            static Enumeration: WidgetValueTypeEnum;
            static Form: WidgetValueTypeEnum;
            static Image: WidgetValueTypeEnum;
            static Integer: WidgetValueTypeEnum;
            static Microflow: WidgetValueTypeEnum;
            static Object: WidgetValueTypeEnum;
            static String: WidgetValueTypeEnum;
            static TranslatableString: WidgetValueTypeEnum;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `DocumentTemplates`.
     */
    module documenttemplates {
        interface IWidget extends elements.IElement {
            load(): Widget;
            load(callback: (element: Widget) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Widget extends elements.Element implements IWidget {
            static typeName: string;
            name: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IAttributeWidget extends IWidget {
            load(): AttributeWidget;
            load(callback: (element: AttributeWidget) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class AttributeWidget extends Widget implements IAttributeWidget {
            static typeName: string;
            attributePath: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IConditionSettings extends elements.IElement {
            container: IMxTableRow;
            load(): ConditionSettings;
            load(callback: (element: ConditionSettings) => void): any;
        }
        class ConditionSettings extends elements.Element implements IConditionSettings {
            static typeName: string;
            container: MxTableRow;
            conditions: instances.IList<enumerations.Condition>;
            attribute: domainmodels.IAttribute;
            attributeQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Columns+(document+template) relevant section in reference guide}
         */
        interface IDataGridCell extends elements.IElement {
            container: IDataGridColumn;
            load(): DataGridCell;
            load(callback: (element: DataGridCell) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Columns+(document+template) relevant section in reference guide}
         */
        class DataGridCell extends elements.Element implements IDataGridCell {
            static typeName: string;
            container: DataGridColumn;
            style: MxStyle;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Columns+(document+template) relevant section in reference guide}
         */
        interface IDataGridColumn extends elements.IElement {
            container: IMxDataGrid;
            load(): DataGridColumn;
            load(callback: (element: DataGridColumn) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Columns+(document+template) relevant section in reference guide}
         */
        class DataGridColumn extends elements.Element implements IDataGridColumn {
            static typeName: string;
            container: MxDataGrid;
            oddRowsCell: DataGridCell;
            evenRowsCell: DataGridCell;
            caption: texts.Text;
            formattingInfo: pages.FormattingInfo;
            style: MxStyle;
            attributePath: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Sort+Bar relevant section in reference guide}
         */
        interface IDocGridSortBar extends elements.IElement {
            container: IMxGrid;
            load(): DocGridSortBar;
            load(callback: (element: DocGridSortBar) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Sort+Bar relevant section in reference guide}
         */
        class DocGridSortBar extends elements.Element implements IDocGridSortBar {
            static typeName: string;
            container: MxGrid;
            sortItems: instances.IList<DocGridSortItem>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDocGridSortItem extends elements.IElement {
            container: IDocGridSortBar;
            load(): DocGridSortItem;
            load(callback: (element: DocGridSortItem) => void): any;
        }
        class DocGridSortItem extends elements.Element implements IDocGridSortItem {
            static typeName: string;
            container: DocGridSortBar;
            attributePath: string;
            sortOrder: pages.SortDirection;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Document+Templates relevant section in reference guide}
         */
        interface IDocumentTemplate extends projects.IDocument {
            container: projects.IFolderBase;
            load(): DocumentTemplate;
            load(callback: (element: DocumentTemplate) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Document+Templates relevant section in reference guide}
         */
        class DocumentTemplate extends projects.Document implements IDocumentTemplate {
            static typeName: string;
            container: projects.FolderBase;
            toplevels: instances.IList<Widget>;
            header: MxHeaderDropZone;
            footer: MxFooterDropZone;
            style: MxStyle;
            canvasWidth: number;
            pageWidth: string;
            pageHeight: string;
            pPI: number;
            marginLeftInInch: number;
            marginRightInInch: number;
            marginTopInInch: number;
            marginBottomInInch: number;
            showHeaderAndFooterOnFirstPage: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IEntityWidget extends IWidget {
            load(): EntityWidget;
            load(callback: (element: EntityWidget) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class EntityWidget extends Widget implements IEntityWidget {
            static typeName: string;
            entityPath: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Dynamic+Image+(document+template) relevant section in reference guide}
         */
        interface IDynamicImageViewer extends IEntityWidget {
            load(): DynamicImageViewer;
            load(callback: (element: DynamicImageViewer) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Dynamic+Image+(document+template) relevant section in reference guide}
         */
        class DynamicImageViewer extends EntityWidget implements IDynamicImageViewer {
            static typeName: string;
            image: images.IImage;
            imageQualifiedName: string;
            useThumbnail: boolean;
            width: number;
            height: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMxGrid extends IEntityWidget {
            load(): MxGrid;
            load(callback: (element: MxGrid) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class MxGrid extends EntityWidget implements IMxGrid {
            static typeName: string;
            style: MxStyle;
            sortBar: DocGridSortBar;
            cellSpacing: number;
            cellPadding: number;
            microflow: microflows.IMicroflow;
            microflowQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+Grid+(document+template) relevant section in reference guide}
         */
        interface IMxDataGrid extends IMxGrid {
            load(): MxDataGrid;
            load(callback: (element: MxDataGrid) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+Grid+(document+template) relevant section in reference guide}
         */
        class MxDataGrid extends MxGrid implements IMxDataGrid {
            static typeName: string;
            columns: instances.IList<DataGridColumn>;
            weights: instances.IList<number>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+View+(document+template) relevant section in reference guide}
         */
        interface IMxDataView extends IEntityWidget {
            load(): MxDataView;
            load(callback: (element: MxDataView) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+View+(document+template) relevant section in reference guide}
         */
        class MxDataView extends EntityWidget implements IMxDataView {
            static typeName: string;
            contents: MxDataViewDropZone;
            microflow: microflows.IMicroflow;
            microflowQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+View+(document+template) relevant section in reference guide}
         */
        interface IMxDataViewDropZone extends elements.IElement {
            container: IMxDataView;
            load(): MxDataViewDropZone;
            load(callback: (element: MxDataViewDropZone) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+View+(document+template) relevant section in reference guide}
         */
        class MxDataViewDropZone extends elements.Element implements IMxDataViewDropZone {
            static typeName: string;
            container: MxDataView;
            widget: Widget;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Dynamic+label+(document+template) relevant section in reference guide}
         */
        interface IMxDynamicLabel extends IAttributeWidget {
            load(): MxDynamicLabel;
            load(callback: (element: MxDynamicLabel) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Dynamic+label+(document+template) relevant section in reference guide}
         */
        class MxDynamicLabel extends AttributeWidget implements IMxDynamicLabel {
            static typeName: string;
            style: MxStyle;
            formattingInfo: pages.FormattingInfo;
            renderXHTML: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Footer+(document+template) relevant section in reference guide}
         */
        interface IMxFooterDropZone extends elements.IElement {
            container: IDocumentTemplate;
            load(): MxFooterDropZone;
            load(callback: (element: MxFooterDropZone) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Footer+(document+template) relevant section in reference guide}
         */
        class MxFooterDropZone extends elements.Element implements IMxFooterDropZone {
            static typeName: string;
            container: DocumentTemplate;
            widget: Widget;
            bottomMargin: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Header+(document+template) relevant section in reference guide}
         */
        interface IMxHeaderDropZone extends elements.IElement {
            container: IDocumentTemplate;
            load(): MxHeaderDropZone;
            load(callback: (element: MxHeaderDropZone) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Header+(document+template) relevant section in reference guide}
         */
        class MxHeaderDropZone extends elements.Element implements IMxHeaderDropZone {
            static typeName: string;
            container: DocumentTemplate;
            widget: Widget;
            topMargin: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Line+Break+(document+template) relevant section in reference guide}
         */
        interface IMxLineBreak extends IWidget {
            load(): MxLineBreak;
            load(callback: (element: MxLineBreak) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Line+Break+(document+template) relevant section in reference guide}
         */
        class MxLineBreak extends Widget implements IMxLineBreak {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Page+Break+(document+template) relevant section in reference guide}
         */
        interface IMxPageBreak extends IWidget {
            load(): MxPageBreak;
            load(callback: (element: MxPageBreak) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Page+Break+(document+template) relevant section in reference guide}
         */
        class MxPageBreak extends Widget implements IMxPageBreak {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Static+label+(document+template) relevant section in reference guide}
         */
        interface IMxStaticLabel extends IWidget {
            load(): MxStaticLabel;
            load(callback: (element: MxStaticLabel) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Static+label+(document+template) relevant section in reference guide}
         */
        class MxStaticLabel extends Widget implements IMxStaticLabel {
            static typeName: string;
            caption: texts.Text;
            style: MxStyle;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMxStyle extends elements.IElement {
            load(): MxStyle;
            load(callback: (element: MxStyle) => void): any;
        }
        class MxStyle extends elements.Element implements IMxStyle {
            static typeName: string;
            fontFamily: FontFamily;
            fontSize: number;
            bold: boolean;
            italic: boolean;
            fontColor: string;
            backgroundColor: string;
            overrideFontFamily: boolean;
            overrideFontSize: boolean;
            overrideBold: boolean;
            overrideItalic: boolean;
            overrideFontColor: boolean;
            overrideBackgroundColor: boolean;
            textAlign: TextAlign;
            customStyles: string;
            borderStyleTop: BorderStyle;
            borderStyleBottom: BorderStyle;
            borderStyleLeft: BorderStyle;
            borderStyleRight: BorderStyle;
            borderWidthTop: number;
            borderWidthBottom: number;
            borderWidthLeft: number;
            borderWidthRight: number;
            borderColorTop: string;
            borderColorBottom: string;
            borderColorLeft: string;
            borderColorRight: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Table+(document+template) relevant section in reference guide}
         */
        interface IMxTable extends IWidget {
            load(): MxTable;
            load(callback: (element: MxTable) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Table+(document+template) relevant section in reference guide}
         */
        class MxTable extends Widget implements IMxTable {
            static typeName: string;
            rows: instances.IList<MxTableRow>;
            style: MxStyle;
            columnWeights: instances.IList<number>;
            cellSpacing: number;
            cellPadding: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Cell+(document+template) relevant section in reference guide}
         */
        interface IMxTableCell extends elements.IElement {
            container: IMxTableRow;
            load(): MxTableCell;
            load(callback: (element: MxTableCell) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Cell+(document+template) relevant section in reference guide}
         */
        class MxTableCell extends elements.Element implements IMxTableCell {
            static typeName: string;
            container: MxTableRow;
            style: MxStyle;
            widget: Widget;
            colSpan: number;
            rowSpan: number;
            isPartOfSpan: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Row+(document+template) relevant section in reference guide}
         */
        interface IMxTableRow extends elements.IElement {
            container: IMxTable;
            load(): MxTableRow;
            load(callback: (element: MxTableRow) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Row+(document+template) relevant section in reference guide}
         */
        class MxTableRow extends elements.Element implements IMxTableRow {
            static typeName: string;
            container: MxTable;
            cells: instances.IList<MxTableCell>;
            conditionSettings: ConditionSettings;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Template+Grid+(document+template) relevant section in reference guide}
         */
        interface IMxTemplateGrid extends IMxGrid {
            load(): MxTemplateGrid;
            load(callback: (element: MxTemplateGrid) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Template+Grid+(document+template) relevant section in reference guide}
         */
        class MxTemplateGrid extends MxGrid implements IMxTemplateGrid {
            static typeName: string;
            oddRowsDropZone: MxTemplateGridDropZone;
            evenRowsDropZone: MxTemplateGridDropZone;
            numberOfColumns: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Template+Grid+(document+template) relevant section in reference guide}
         */
        interface IMxTemplateGridDropZone extends elements.IElement {
            container: IMxTemplateGrid;
            load(): MxTemplateGridDropZone;
            load(callback: (element: MxTemplateGridDropZone) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Template+Grid+(document+template) relevant section in reference guide}
         */
        class MxTemplateGridDropZone extends elements.Element implements IMxTemplateGridDropZone {
            static typeName: string;
            container: MxTemplateGrid;
            widget: Widget;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Title+(document+template) relevant section in reference guide}
         */
        interface IMxTitle extends IWidget {
            load(): MxTitle;
            load(callback: (element: MxTitle) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Title+(document+template) relevant section in reference guide}
         */
        class MxTitle extends Widget implements IMxTitle {
            static typeName: string;
            caption: texts.Text;
            style: MxStyle;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Static+Image+(document+template) relevant section in reference guide}
         */
        interface IStaticImageViewer extends IWidget {
            load(): StaticImageViewer;
            load(callback: (element: StaticImageViewer) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Static+Image+(document+template) relevant section in reference guide}
         */
        class StaticImageViewer extends Widget implements IStaticImageViewer {
            static typeName: string;
            image: images.IImage;
            imageQualifiedName: string;
            width: number;
            height: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        class BorderStyle extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static None: BorderStyle;
            static Dotted: BorderStyle;
            static Dashed: BorderStyle;
            static Solid: BorderStyle;
        }
        class FontFamily extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Courier: FontFamily;
            static Tahoma: FontFamily;
            static Times: FontFamily;
            static Helvetica: FontFamily;
            static Arial: FontFamily;
        }
        class TextAlign extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Left: TextAlign;
            static Right: TextAlign;
            static Center: TextAlign;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Navigation`.
     */
    module navigation {
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project relevant section in reference guide}
         */
        interface IProjectDocument extends units.IModelUnit {
            container: projects.IProject;
            load(): ProjectDocument;
            load(callback: (element: ProjectDocument) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project relevant section in reference guide}
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ProjectDocument extends units.ModelUnit implements IProjectDocument {
            static typeName: string;
            container: projects.Project;
            constructor(container: projects.IProject);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Navigation relevant section in reference guide}
         */
        interface INavigationDocument extends projects.IProjectDocument {
            container: projects.IProject;
            load(): NavigationDocument;
            load(callback: (element: NavigationDocument) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Navigation relevant section in reference guide}
         */
        class NavigationDocument extends projects.ProjectDocument implements INavigationDocument {
            static typeName: string;
            container: projects.Project;
            phoneProfile: NavigationProfile;
            tabletProfile: NavigationProfile;
            desktopProfile: NavigationProfile;
            constructor(container: projects.IProject);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface INavigationProfile extends elements.IElement {
            container: INavigationDocument;
            load(): NavigationProfile;
            load(callback: (element: NavigationProfile) => void): any;
        }
        class NavigationProfile extends elements.Element implements INavigationProfile {
            static typeName: string;
            container: NavigationDocument;
            type: DeviceType;
            enabled: boolean;
            homePage: HomePage;
            roleBasedHomePages: instances.IList<RoleBasedHomePage>;
            applicationTitle: string;
            menuItemCollection: menus.MenuItemCollection;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IHomePageBase extends elements.IElement {
            container: INavigationProfile;
            load(): HomePageBase;
            load(callback: (element: HomePageBase) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class HomePageBase extends elements.Element implements IHomePageBase {
            static typeName: string;
            container: NavigationProfile;
            page: pages.IPage;
            pageQualifiedName: string;
            microflow: microflows.IMicroflow;
            microflowQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IHomePage extends IHomePageBase {
            container: INavigationProfile;
            load(): HomePage;
            load(callback: (element: HomePage) => void): any;
        }
        class HomePage extends HomePageBase implements IHomePage {
            static typeName: string;
            container: NavigationProfile;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IRoleBasedHomePage extends IHomePageBase {
            container: INavigationProfile;
            load(): RoleBasedHomePage;
            load(callback: (element: RoleBasedHomePage) => void): any;
        }
        class RoleBasedHomePage extends HomePageBase implements IRoleBasedHomePage {
            static typeName: string;
            container: NavigationProfile;
            userRole: security.IUserRole;
            userRoleQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        class DeviceType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Desktop: DeviceType;
            static Tablet: DeviceType;
            static Phone: DeviceType;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Reports`.
     */
    module reports {
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Pages relevant section in reference guide}
         */
        interface IWidget extends elements.IElement {
            load(): Widget;
            load(callback: (element: Widget) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Pages relevant section in reference guide}
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Widget extends elements.Element implements IWidget {
            static typeName: string;
            name: string;
            class: string;
            style: string;
            tabIndex: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Report+Widgets relevant section in reference guide}
         */
        interface IReportWidget extends pages.IWidget {
            load(): ReportWidget;
            load(callback: (element: ReportWidget) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Report+Widgets relevant section in reference guide}
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ReportWidget extends pages.Widget implements IReportWidget {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Basic+Reports relevant section in reference guide}
         */
        interface IBasicReport extends IReportWidget {
            load(): BasicReport;
            load(callback: (element: BasicReport) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Basic+Reports relevant section in reference guide}
         */
        class BasicReport extends ReportWidget implements IBasicReport {
            static typeName: string;
            dataSet: datasets.IDataSet;
            dataSetQualifiedName: string;
            columns: instances.IList<BasicReportColumn>;
            aggregates: instances.IList<BasicReportAggregate>;
            showExportButton: boolean;
            zoomInfo: ReportZoomInfo;
            isPagingEnabled: boolean;
            pageSize: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IBasicReportAggregate extends elements.IElement {
            container: IBasicReport;
            load(): BasicReportAggregate;
            load(callback: (element: BasicReportAggregate) => void): any;
        }
        class BasicReportAggregate extends elements.Element implements IBasicReportAggregate {
            static typeName: string;
            container: BasicReport;
            caption: texts.Text;
            aggregateFunction: AggregateFunctionEnum;
            applicablePerColumn: instances.IList<boolean>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IBasicReportColumn extends elements.IElement {
            container: IBasicReport;
            load(): BasicReportColumn;
            load(callback: (element: BasicReportColumn) => void): any;
        }
        class BasicReportColumn extends elements.Element implements IBasicReportColumn {
            static typeName: string;
            container: BasicReport;
            caption: texts.Text;
            dataSetColumnName: string;
            width: number;
            alignment: pages.AlignmentEnum;
            format: ColumnFormat;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Report+Button relevant section in reference guide}
         */
        interface IReportButton extends pages.IWidget {
            load(): ReportButton;
            load(callback: (element: ReportButton) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Report+Button relevant section in reference guide}
         */
        class ReportButton extends pages.Widget implements IReportButton {
            static typeName: string;
            caption: texts.Text;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Report+Chart relevant section in reference guide}
         */
        interface IReportChart extends pages.IWidget {
            load(): ReportChart;
            load(callback: (element: ReportChart) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Report+Chart relevant section in reference guide}
         */
        class ReportChart extends pages.Widget implements IReportChart {
            static typeName: string;
            dataSet: datasets.IDataSet;
            dataSetQualifiedName: string;
            type: ChartType;
            seriess: instances.IList<ReportChartSeries>;
            xAxisCaption: texts.Text;
            yAxisCaption: texts.Text;
            xAxisColumn: string;
            xAxisFormat: ColumnFormat;
            yAxisPrecision: number;
            yAxisUseMinMax: boolean;
            yAxisMinimum: number;
            yAxisMaximum: number;
            aspectRatio: AspectRatio;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IReportChartSeries extends elements.IElement {
            container: IReportChart;
            load(): ReportChartSeries;
            load(callback: (element: ReportChartSeries) => void): any;
        }
        class ReportChartSeries extends elements.Element implements IReportChartSeries {
            static typeName: string;
            container: ReportChart;
            caption: texts.Text;
            dataSetColumn: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Date+Range+Field relevant section in reference guide}
         */
        interface IReportDateRangeField extends elements.IElement {
            container: IReportDateRangeSelector;
            load(): ReportDateRangeField;
            load(callback: (element: ReportDateRangeField) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Date+Range+Field relevant section in reference guide}
         */
        class ReportDateRangeField extends elements.Element implements IReportDateRangeField {
            static typeName: string;
            container: ReportDateRangeSelector;
            caption: texts.Text;
            type: DateRangeFieldEnum;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IReportParameter extends pages.IWidget {
            load(): ReportParameter;
            load(callback: (element: ReportParameter) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ReportParameter extends pages.Widget implements IReportParameter {
            static typeName: string;
            parameterName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Date+Range+Selector relevant section in reference guide}
         */
        interface IReportDateRangeSelector extends IReportParameter {
            load(): ReportDateRangeSelector;
            load(callback: (element: ReportDateRangeSelector) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Date+Range+Selector relevant section in reference guide}
         */
        class ReportDateRangeSelector extends ReportParameter implements IReportDateRangeSelector {
            static typeName: string;
            fields: instances.IList<ReportDateRangeField>;
            minYear: number;
            maxYear: number;
            fieldsPerRow: number;
            showFromToRange: boolean;
            fromCaption: texts.Text;
            toCaption: texts.Text;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Drop+Down relevant section in reference guide}
         */
        interface IReportDropDown extends IReportParameter {
            load(): ReportDropDown;
            load(callback: (element: ReportDropDown) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Drop+Down relevant section in reference guide}
         */
        class ReportDropDown extends ReportParameter implements IReportDropDown {
            static typeName: string;
            attribute: domainmodels.IAttribute;
            attributeQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Report+Pane relevant section in reference guide}
         */
        interface IReportPane extends pages.IWidget {
            load(): ReportPane;
            load(callback: (element: ReportPane) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Report+Pane relevant section in reference guide}
         */
        class ReportPane extends pages.Widget implements IReportPane {
            static typeName: string;
            parameterWidget: pages.Widget;
            reportWidget: pages.Widget;
            generateOnLoad: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IReportZoomInfo extends elements.IElement {
            container: IBasicReport;
            load(): ReportZoomInfo;
            load(callback: (element: ReportZoomInfo) => void): any;
        }
        class ReportZoomInfo extends elements.Element implements IReportZoomInfo {
            static typeName: string;
            container: BasicReport;
            targetPage: pages.IPage;
            targetPageQualifiedName: string;
            mappings: instances.IList<ReportZoomMapping>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IReportZoomMapping extends elements.IElement {
            container: IReportZoomInfo;
            load(): ReportZoomMapping;
            load(callback: (element: ReportZoomMapping) => void): any;
        }
        class ReportZoomMapping extends elements.Element implements IReportZoomMapping {
            static typeName: string;
            container: ReportZoomInfo;
            targetParameterName: string;
            sourceReportColumnName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        class AggregateFunctionEnum extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Sum: AggregateFunctionEnum;
            static Average: AggregateFunctionEnum;
            static Count: AggregateFunctionEnum;
            static Minimum: AggregateFunctionEnum;
            static Maximum: AggregateFunctionEnum;
        }
        class ColumnFormat extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Default: ColumnFormat;
            static MonthName: ColumnFormat;
            static WeekdayName: ColumnFormat;
        }
        class ChartType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static VerticalBars: ChartType;
            static VerticalBars3D: ChartType;
            static HorizontalBars: ChartType;
            static Lines: ChartType;
            static Area: ChartType;
        }
        class AspectRatio extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static SixteenToNine: AspectRatio;
            static ThreeToTwo: AspectRatio;
            static FourToThree: AspectRatio;
            static OneToOne: AspectRatio;
            static ThreeToFour: AspectRatio;
            static TwoToThree: AspectRatio;
            static NineToSixteen: AspectRatio;
        }
        class DateRangeFieldEnum extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Year: DateRangeFieldEnum;
            static Month: DateRangeFieldEnum;
            static Week: DateRangeFieldEnum;
            static Period: DateRangeFieldEnum;
            static Quarter: DateRangeFieldEnum;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Menus`.
     */
    module menus {
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Menu relevant section in reference guide}
         */
        interface IMenuDocument extends projects.IDocument {
            container: projects.IFolderBase;
            load(): MenuDocument;
            load(callback: (element: MenuDocument) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Menu relevant section in reference guide}
         */
        class MenuDocument extends projects.Document implements IMenuDocument {
            static typeName: string;
            container: projects.FolderBase;
            itemCollection: MenuItemCollection;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMenuItemContainer extends elements.IElement {
            load(): MenuItemContainer;
            load(callback: (element: MenuItemContainer) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class MenuItemContainer extends elements.Element implements IMenuItemContainer {
            static typeName: string;
            items: instances.IList<MenuItem>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMenuItemCollection extends IMenuItemContainer {
            load(): MenuItemCollection;
            load(callback: (element: MenuItemCollection) => void): any;
        }
        class MenuItemCollection extends MenuItemContainer implements IMenuItemCollection {
            static typeName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Menu+Item relevant section in reference guide}
         */
        interface IMenuItem extends IMenuItemContainer {
            container: IMenuItemContainer;
            load(): MenuItem;
            load(callback: (element: MenuItem) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Menu+Item relevant section in reference guide}
         */
        class MenuItem extends MenuItemContainer implements IMenuItem {
            static typeName: string;
            container: MenuItemContainer;
            caption: texts.Text;
            icon: pages.Icon;
            action: pages.ClientAction;
            documentation: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `DataSets`.
     */
    module datasets {
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+Sets relevant section in reference guide}
         */
        interface IDataSet extends projects.IDocument {
            container: projects.IFolderBase;
            load(): DataSet;
            load(callback: (element: DataSet) => void): any;
            parameters: instances.IList<IDataSetParameter>;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Data+Sets relevant section in reference guide}
         */
        class DataSet extends projects.Document implements IDataSet {
            static typeName: string;
            container: projects.FolderBase;
            source: DataSetSource;
            parameters: instances.IList<DataSetParameter>;
            dataSetAccess: DataSetAccess;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDataSetAccess extends elements.IElement {
            container: IDataSet;
            load(): DataSetAccess;
            load(callback: (element: DataSetAccess) => void): any;
        }
        class DataSetAccess extends elements.Element implements IDataSetAccess {
            static typeName: string;
            container: DataSet;
            moduleRoleAccessList: instances.IList<DataSetModuleRoleAccess>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDataSetColumn extends elements.IElement {
            container: IJavaDataSetSource;
            load(): DataSetColumn;
            load(callback: (element: DataSetColumn) => void): any;
        }
        class DataSetColumn extends elements.Element implements IDataSetColumn {
            static typeName: string;
            container: JavaDataSetSource;
            name: string;
            type: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDataSetConstraintAccess extends elements.IElement {
            container: IDataSetParameterAccess;
            load(): DataSetConstraintAccess;
            load(callback: (element: DataSetConstraintAccess) => void): any;
        }
        class DataSetConstraintAccess extends elements.Element implements IDataSetConstraintAccess {
            static typeName: string;
            container: DataSetParameterAccess;
            constraintText: string;
            enabled: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDataSetParameterConstraint extends elements.IElement {
            container: IDataSetParameter;
            load(): DataSetParameterConstraint;
            load(callback: (element: DataSetParameterConstraint) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class DataSetParameterConstraint extends elements.Element implements IDataSetParameterConstraint {
            static typeName: string;
            container: DataSetParameter;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDataSetDateTimeConstraint extends IDataSetParameterConstraint {
            container: IDataSetParameter;
            load(): DataSetDateTimeConstraint;
            load(callback: (element: DataSetDateTimeConstraint) => void): any;
        }
        class DataSetDateTimeConstraint extends DataSetParameterConstraint implements IDataSetDateTimeConstraint {
            static typeName: string;
            container: DataSetParameter;
            modifier: DateTimeIntervalModifier;
            length: DateTimeIntervalLength;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDataSetModuleRoleAccess extends elements.IElement {
            container: IDataSetAccess;
            load(): DataSetModuleRoleAccess;
            load(callback: (element: DataSetModuleRoleAccess) => void): any;
        }
        class DataSetModuleRoleAccess extends elements.Element implements IDataSetModuleRoleAccess {
            static typeName: string;
            container: DataSetAccess;
            parameterAccessList: instances.IList<DataSetParameterAccess>;
            moduleRole: security.IModuleRole;
            moduleRoleQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDataSetNumericConstraint extends IDataSetParameterConstraint {
            container: IDataSetParameter;
            load(): DataSetNumericConstraint;
            load(callback: (element: DataSetNumericConstraint) => void): any;
        }
        class DataSetNumericConstraint extends DataSetParameterConstraint implements IDataSetNumericConstraint {
            static typeName: string;
            container: DataSetParameter;
            begin: string;
            applyBegin: boolean;
            end: string;
            applyEnd: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDataSetObjectConstraint extends IDataSetParameterConstraint {
            container: IDataSetParameter;
            load(): DataSetObjectConstraint;
            load(callback: (element: DataSetObjectConstraint) => void): any;
        }
        class DataSetObjectConstraint extends DataSetParameterConstraint implements IDataSetObjectConstraint {
            static typeName: string;
            container: DataSetParameter;
            name: string;
            constraint: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDataSetParameter extends elements.IElement {
            container: IDataSet;
            load(): DataSetParameter;
            load(callback: (element: DataSetParameter) => void): any;
            name: string;
        }
        class DataSetParameter extends elements.Element implements IDataSetParameter {
            static typeName: string;
            container: DataSet;
            constraints: instances.IList<DataSetParameterConstraint>;
            name: string;
            type: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDataSetParameterAccess extends elements.IElement {
            container: IDataSetModuleRoleAccess;
            load(): DataSetParameterAccess;
            load(callback: (element: DataSetParameterAccess) => void): any;
        }
        class DataSetParameterAccess extends elements.Element implements IDataSetParameterAccess {
            static typeName: string;
            container: DataSetModuleRoleAccess;
            constraintAccessList: instances.IList<DataSetConstraintAccess>;
            parameterName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDataSetSource extends elements.IElement {
            container: IDataSet;
            load(): DataSetSource;
            load(callback: (element: DataSetSource) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class DataSetSource extends elements.Element implements IDataSetSource {
            static typeName: string;
            container: DataSet;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IJavaDataSetSource extends IDataSetSource {
            container: IDataSet;
            load(): JavaDataSetSource;
            load(callback: (element: JavaDataSetSource) => void): any;
        }
        class JavaDataSetSource extends DataSetSource implements IJavaDataSetSource {
            static typeName: string;
            container: DataSet;
            columns: instances.IList<DataSetColumn>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IOqlDataSetSource extends IDataSetSource {
            container: IDataSet;
            load(): OqlDataSetSource;
            load(callback: (element: OqlDataSetSource) => void): any;
        }
        class OqlDataSetSource extends DataSetSource implements IOqlDataSetSource {
            static typeName: string;
            container: DataSet;
            query: string;
            ignoreErrorsInQuery: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        class DateTimeIntervalLength extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Day: DateTimeIntervalLength;
            static Week: DateTimeIntervalLength;
            static Period: DateTimeIntervalLength;
            static Month: DateTimeIntervalLength;
            static Quarter: DateTimeIntervalLength;
            static Year: DateTimeIntervalLength;
        }
        class DateTimeIntervalModifier extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Last: DateTimeIntervalModifier;
            static This: DateTimeIntervalModifier;
            static Next: DateTimeIntervalModifier;
            static Past: DateTimeIntervalModifier;
            static Future: DateTimeIntervalModifier;
            static Always: DateTimeIntervalModifier;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Texts`.
     */
    module texts {
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Translatable+Texts relevant section in reference guide}
         */
        interface IText extends elements.IElement {
            load(): Text;
            load(callback: (element: Text) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Translatable+Texts relevant section in reference guide}
         */
        class Text extends elements.Element implements IText {
            static typeName: string;
            translations: instances.IList<Translation>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ITranslation extends elements.IElement {
            container: IText;
            load(): Translation;
            load(callback: (element: Translation) => void): any;
        }
        class Translation extends elements.Element implements ITranslation {
            static typeName: string;
            container: Text;
            languageCode: string;
            text: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project+Settings relevant section in reference guide}
         */
        interface ILanguage extends elements.IElement {
            container: settings.IProjectSettings;
            load(): Language;
            load(callback: (element: Language) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project+Settings relevant section in reference guide}
         */
        class Language extends elements.Element implements ILanguage {
            static typeName: string;
            container: settings.ProjectSettings;
            code: string;
            checkCompleteness: boolean;
            customDateFormat: string;
            customTimeFormat: string;
            customDateTimeFormat: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ISystemText extends elements.IElement {
            container: ISystemTextCollection;
            load(): SystemText;
            load(callback: (element: SystemText) => void): any;
        }
        class SystemText extends elements.Element implements ISystemText {
            static typeName: string;
            container: SystemTextCollection;
            text: Text;
            key: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project relevant section in reference guide}
         */
        interface IProjectDocument extends units.IModelUnit {
            container: projects.IProject;
            load(): ProjectDocument;
            load(callback: (element: ProjectDocument) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project relevant section in reference guide}
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ProjectDocument extends units.ModelUnit implements IProjectDocument {
            static typeName: string;
            container: projects.Project;
            constructor(container: projects.IProject);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/System+Texts relevant section in reference guide}
         */
        interface ISystemTextCollection extends projects.IProjectDocument {
            container: projects.IProject;
            load(): SystemTextCollection;
            load(callback: (element: SystemTextCollection) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/System+Texts relevant section in reference guide}
         */
        class SystemTextCollection extends projects.ProjectDocument implements ISystemTextCollection {
            static typeName: string;
            container: projects.Project;
            systemTexts: instances.IList<SystemText>;
            constructor(container: projects.IProject);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `JavaActions`.
     */
    module javaactions {
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Java+Actions relevant section in reference guide}
         */
        interface IJavaAction extends projects.IDocument {
            container: projects.IFolderBase;
            load(): JavaAction;
            load(callback: (element: JavaAction) => void): any;
            parameters: instances.IList<IJavaActionParameter>;
            returnType: string;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Java+Actions relevant section in reference guide}
         */
        class JavaAction extends projects.Document implements IJavaAction {
            static typeName: string;
            container: projects.FolderBase;
            parameters: instances.IList<JavaActionParameter>;
            returnType: string;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IJavaActionParameter extends elements.IElement {
            container: IJavaAction;
            load(): JavaActionParameter;
            load(callback: (element: JavaActionParameter) => void): any;
            name: string;
            type: string;
        }
        class JavaActionParameter extends elements.Element implements IJavaActionParameter {
            static typeName: string;
            container: JavaAction;
            name: string;
            type: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Constants`.
     */
    module constants {
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Constants relevant section in reference guide}
         */
        interface IConstant extends projects.IDocument {
            container: projects.IFolderBase;
            load(): Constant;
            load(callback: (element: Constant) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Constants relevant section in reference guide}
         */
        class Constant extends projects.Document implements IConstant {
            static typeName: string;
            container: projects.FolderBase;
            dataType: string;
            defaultValue: string;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ScheduledEvents`.
     */
    module scheduledevents {
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Scheduled+Events relevant section in reference guide}
         */
        interface IScheduledEvent extends projects.IDocument {
            container: projects.IFolderBase;
            load(): ScheduledEvent;
            load(callback: (element: ScheduledEvent) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Scheduled+Events relevant section in reference guide}
         */
        class ScheduledEvent extends projects.Document implements IScheduledEvent {
            static typeName: string;
            container: projects.FolderBase;
            startDateTime: string;
            timeZone: TimeZoneEnum;
            interval: number;
            intervalType: IntervalType;
            microflow: microflows.IMicroflow;
            microflowQualifiedName: string;
            enabled: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        class IntervalType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Second: IntervalType;
            static Minute: IntervalType;
            static Hour: IntervalType;
            static Day: IntervalType;
            static Week: IntervalType;
            static Month: IntervalType;
            static Year: IntervalType;
        }
        class TimeZoneEnum extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static UTC: TimeZoneEnum;
            static Server: TimeZoneEnum;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `RegularExpressions`.
     */
    module regularexpressions {
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Regular+Expressions relevant section in reference guide}
         */
        interface IRegularExpression extends projects.IDocument {
            container: projects.IFolderBase;
            load(): RegularExpression;
            load(callback: (element: RegularExpression) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Regular+Expressions relevant section in reference guide}
         */
        class RegularExpression extends projects.Document implements IRegularExpression {
            static typeName: string;
            container: projects.FolderBase;
            regEx: string;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Images`.
     */
    module images {
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Images relevant section in reference guide}
         */
        interface IImageCollection extends projects.IDocument {
            container: projects.IFolderBase;
            load(): ImageCollection;
            load(callback: (element: ImageCollection) => void): any;
            images: instances.IList<IImage>;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Images relevant section in reference guide}
         */
        class ImageCollection extends projects.Document implements IImageCollection {
            static typeName: string;
            container: projects.FolderBase;
            images: instances.IList<Image>;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IImage extends elements.IElement {
            container: IImageCollection;
            load(): Image;
            load(callback: (element: Image) => void): any;
            name: string;
        }
        class Image extends elements.Element implements IImage {
            static typeName: string;
            container: ImageCollection;
            name: string;
            /**
             * ?
             */
            imageData: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Security`.
     */
    module security {
        interface IAccessRuleContainerBase extends elements.IElement {
            container: IProjectSecurity;
            load(): AccessRuleContainerBase;
            load(callback: (element: AccessRuleContainerBase) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class AccessRuleContainerBase extends elements.Element implements IAccessRuleContainerBase {
            static typeName: string;
            container: ProjectSecurity;
            accessRules: instances.IList<domainmodels.AccessRule>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IDemoUser extends elements.IElement {
            container: IProjectSecurity;
            load(): DemoUser;
            load(callback: (element: DemoUser) => void): any;
        }
        class DemoUser extends elements.Element implements IDemoUser {
            static typeName: string;
            container: ProjectSecurity;
            userName: string;
            password: string;
            entity: domainmodels.IEntity;
            entityQualifiedName: string;
            userRoleIds: instances.IList<IUserRole>;
            userRoleIdsQualifiedNames: string[];
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IFileDocumentAccessRuleContainer extends IAccessRuleContainerBase {
            container: IProjectSecurity;
            load(): FileDocumentAccessRuleContainer;
            load(callback: (element: FileDocumentAccessRuleContainer) => void): any;
        }
        class FileDocumentAccessRuleContainer extends AccessRuleContainerBase implements IFileDocumentAccessRuleContainer {
            static typeName: string;
            container: ProjectSecurity;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IImageAccessRuleContainer extends IAccessRuleContainerBase {
            container: IProjectSecurity;
            load(): ImageAccessRuleContainer;
            load(callback: (element: ImageAccessRuleContainer) => void): any;
        }
        class ImageAccessRuleContainer extends AccessRuleContainerBase implements IImageAccessRuleContainer {
            static typeName: string;
            container: ProjectSecurity;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Module+Role relevant section in reference guide}
         */
        interface IModuleRole extends elements.IElement {
            container: IModuleSecurity;
            load(): ModuleRole;
            load(callback: (element: ModuleRole) => void): any;
            name: string;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Module+Role relevant section in reference guide}
         */
        class ModuleRole extends elements.Element implements IModuleRole {
            static typeName: string;
            container: ModuleSecurity;
            name: string;
            description: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Module+Security relevant section in reference guide}
         */
        interface IModuleSecurity extends units.IModelUnit {
            container: projects.IModule;
            load(): ModuleSecurity;
            load(callback: (element: ModuleSecurity) => void): any;
            moduleRoles: instances.IList<IModuleRole>;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Module+Security relevant section in reference guide}
         */
        class ModuleSecurity extends units.ModelUnit implements IModuleSecurity {
            static typeName: string;
            container: projects.Module;
            moduleRoles: instances.IList<ModuleRole>;
            constructor(container: projects.IModule);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IPasswordPolicySettings extends elements.IElement {
            container: IProjectSecurity;
            load(): PasswordPolicySettings;
            load(callback: (element: PasswordPolicySettings) => void): any;
        }
        class PasswordPolicySettings extends elements.Element implements IPasswordPolicySettings {
            static typeName: string;
            container: ProjectSecurity;
            minimumLength: number;
            requireMixedCase: boolean;
            requireSymbol: boolean;
            requireDigit: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project relevant section in reference guide}
         */
        interface IProjectDocument extends units.IModelUnit {
            container: projects.IProject;
            load(): ProjectDocument;
            load(callback: (element: ProjectDocument) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project relevant section in reference guide}
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ProjectDocument extends units.ModelUnit implements IProjectDocument {
            static typeName: string;
            container: projects.Project;
            constructor(container: projects.IProject);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project+Security relevant section in reference guide}
         */
        interface IProjectSecurity extends projects.IProjectDocument {
            container: projects.IProject;
            load(): ProjectSecurity;
            load(callback: (element: ProjectSecurity) => void): any;
            userRoles: instances.IList<IUserRole>;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Project+Security relevant section in reference guide}
         */
        class ProjectSecurity extends projects.ProjectDocument implements IProjectSecurity {
            static typeName: string;
            container: projects.Project;
            fileDocumentAccess: FileDocumentAccessRuleContainer;
            imageAccess: ImageAccessRuleContainer;
            passwordPolicySettings: PasswordPolicySettings;
            userRoles: instances.IList<UserRole>;
            demoUsers: instances.IList<DemoUser>;
            securityLevel: projects.SecurityLevel;
            checkSecurity: boolean;
            adminUserName: string;
            adminPassword: string;
            adminUserRoleName: string;
            enableDemoUsers: boolean;
            enableGuestAccess: boolean;
            guestUserRoleName: string;
            signInMicroflow: microflows.IMicroflow;
            signInMicroflowQualifiedName: string;
            constructor(container: projects.IProject);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/User+Role relevant section in reference guide}
         */
        interface IUserRole extends elements.IElement {
            container: IProjectSecurity;
            load(): UserRole;
            load(callback: (element: UserRole) => void): any;
            name: string;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/User+Role relevant section in reference guide}
         */
        class UserRole extends elements.Element implements IUserRole {
            static typeName: string;
            container: ProjectSecurity;
            guid: string;
            name: string;
            description: string;
            moduleRoleIds: instances.IList<IModuleRole>;
            moduleRoleIdsQualifiedNames: string[];
            manageAllRoles: boolean;
            manageableRoleIds: instances.IList<IUserRole>;
            manageableRoleIdsQualifiedNames: string[];
            manageUsersWithoutRoles: boolean;
            checkSecurity: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `DomainModels`.
     */
    module domainmodels {
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Domain+Model relevant section in reference guide}
         */
        interface IDomainModel extends projects.IModuleDocument {
            container: projects.IModule;
            load(): DomainModel;
            load(callback: (element: DomainModel) => void): any;
            entities: instances.IList<IEntity>;
            associations: instances.IList<IAssociation>;
            crossAssociations: instances.IList<ICrossAssociation>;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Domain+Model relevant section in reference guide}
         */
        class DomainModel extends projects.ModuleDocument implements IDomainModel {
            static typeName: string;
            container: projects.Module;
            documentation: string;
            entities: instances.IList<Entity>;
            annotations: instances.IList<Annotation>;
            associations: instances.IList<Association>;
            crossAssociations: instances.IList<CrossAssociation>;
            constructor(container: projects.IModule);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Entities relevant section in reference guide}
         */
        interface IEntity extends elements.IElement {
            container: IDomainModel;
            load(): Entity;
            load(callback: (element: Entity) => void): any;
            name: string;
            generalization: IGeneralizationBase;
            attributes: instances.IList<IAttribute>;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Entities relevant section in reference guide}
         */
        class Entity extends elements.Element implements IEntity {
            static typeName: string;
            container: DomainModel;
            name: string;
            dataStorageGuid: string;
            location: common.IPoint;
            documentation: string;
            generalization: GeneralizationBase;
            attributes: instances.IList<Attribute>;
            validationRules: instances.IList<ValidationRule>;
            eventHandlers: instances.IList<EventHandler>;
            indexes: instances.IList<Index>;
            accessRules: instances.IList<AccessRule>;
            image: images.IImage;
            imageQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IGeneralizationBase extends elements.IElement {
            container: IEntity;
            load(): GeneralizationBase;
            load(callback: (element: GeneralizationBase) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class GeneralizationBase extends elements.Element implements IGeneralizationBase {
            static typeName: string;
            container: Entity;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IGeneralization extends IGeneralizationBase {
            container: IEntity;
            load(): Generalization;
            load(callback: (element: Generalization) => void): any;
            generalization: IEntity;
            generalizationQualifiedName: string;
        }
        class Generalization extends GeneralizationBase implements IGeneralization {
            static typeName: string;
            container: Entity;
            generalization: IEntity;
            generalizationQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface INoGeneralization extends IGeneralizationBase {
            container: IEntity;
            load(): NoGeneralization;
            load(callback: (element: NoGeneralization) => void): any;
            persistable: boolean;
        }
        class NoGeneralization extends GeneralizationBase implements INoGeneralization {
            static typeName: string;
            container: Entity;
            hasChangedDate: boolean;
            hasCreatedDate: boolean;
            hasOwner: boolean;
            hasChangedBy: boolean;
            persistable: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Attributes relevant section in reference guide}
         */
        interface IAttribute extends elements.IElement {
            container: IEntity;
            load(): Attribute;
            load(callback: (element: Attribute) => void): any;
            name: string;
            type: IAttributeType;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Attributes relevant section in reference guide}
         */
        class Attribute extends elements.Element implements IAttribute {
            static typeName: string;
            container: Entity;
            name: string;
            dataStorageGuid: string;
            type: AttributeType;
            documentation: string;
            value: ValueType;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IValueType extends elements.IElement {
            container: IAttribute;
            load(): ValueType;
            load(callback: (element: ValueType) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ValueType extends elements.Element implements IValueType {
            static typeName: string;
            container: Attribute;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IStoredValue extends IValueType {
            container: IAttribute;
            load(): StoredValue;
            load(callback: (element: StoredValue) => void): any;
        }
        class StoredValue extends ValueType implements IStoredValue {
            static typeName: string;
            container: Attribute;
            defaultValue: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ICalculatedValue extends IValueType {
            container: IAttribute;
            load(): CalculatedValue;
            load(callback: (element: CalculatedValue) => void): any;
        }
        class CalculatedValue extends ValueType implements ICalculatedValue {
            static typeName: string;
            container: Attribute;
            microflow: microflows.IMicroflow;
            microflowQualifiedName: string;
            passEntity: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IAttributeType extends elements.IElement {
            container: IAttribute;
            load(): AttributeType;
            load(callback: (element: AttributeType) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class AttributeType extends elements.Element implements IAttributeType {
            static typeName: string;
            container: Attribute;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IBinaryAttributeType extends IAttributeType {
            container: IAttribute;
            load(): BinaryAttributeType;
            load(callback: (element: BinaryAttributeType) => void): any;
        }
        class BinaryAttributeType extends AttributeType implements IBinaryAttributeType {
            static typeName: string;
            container: Attribute;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IBooleanAttributeType extends IAttributeType {
            container: IAttribute;
            load(): BooleanAttributeType;
            load(callback: (element: BooleanAttributeType) => void): any;
        }
        class BooleanAttributeType extends AttributeType implements IBooleanAttributeType {
            static typeName: string;
            container: Attribute;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDateTimeAttributeType extends IAttributeType {
            container: IAttribute;
            load(): DateTimeAttributeType;
            load(callback: (element: DateTimeAttributeType) => void): any;
        }
        class DateTimeAttributeType extends AttributeType implements IDateTimeAttributeType {
            static typeName: string;
            container: Attribute;
            localizeDate: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IEnumerationAttributeType extends IAttributeType {
            container: IAttribute;
            load(): EnumerationAttributeType;
            load(callback: (element: EnumerationAttributeType) => void): any;
            enumeration: enumerations.IEnumeration;
            enumerationQualifiedName: string;
        }
        class EnumerationAttributeType extends AttributeType implements IEnumerationAttributeType {
            static typeName: string;
            container: Attribute;
            enumeration: enumerations.IEnumeration;
            enumerationQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IHashedStringAttributeType extends IAttributeType {
            container: IAttribute;
            load(): HashedStringAttributeType;
            load(callback: (element: HashedStringAttributeType) => void): any;
        }
        class HashedStringAttributeType extends AttributeType implements IHashedStringAttributeType {
            static typeName: string;
            container: Attribute;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IStringAttributeType extends IAttributeType {
            container: IAttribute;
            load(): StringAttributeType;
            load(callback: (element: StringAttributeType) => void): any;
        }
        class StringAttributeType extends AttributeType implements IStringAttributeType {
            static typeName: string;
            container: Attribute;
            length: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface INumericAttributeTypeBase extends IAttributeType {
            container: IAttribute;
            load(): NumericAttributeTypeBase;
            load(callback: (element: NumericAttributeTypeBase) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class NumericAttributeTypeBase extends AttributeType implements INumericAttributeTypeBase {
            static typeName: string;
            container: Attribute;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDecimalAttributeTypeBase extends INumericAttributeTypeBase {
            container: IAttribute;
            load(): DecimalAttributeTypeBase;
            load(callback: (element: DecimalAttributeTypeBase) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class DecimalAttributeTypeBase extends NumericAttributeTypeBase implements IDecimalAttributeTypeBase {
            static typeName: string;
            container: Attribute;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDecimalAttributeType extends IDecimalAttributeTypeBase {
            container: IAttribute;
            load(): DecimalAttributeType;
            load(callback: (element: DecimalAttributeType) => void): any;
        }
        class DecimalAttributeType extends DecimalAttributeTypeBase implements IDecimalAttributeType {
            static typeName: string;
            container: Attribute;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IFloatAttributeTypeBase extends IDecimalAttributeTypeBase {
            container: IAttribute;
            load(): FloatAttributeTypeBase;
            load(callback: (element: FloatAttributeTypeBase) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class FloatAttributeTypeBase extends DecimalAttributeTypeBase implements IFloatAttributeTypeBase {
            static typeName: string;
            container: Attribute;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IFloatAttributeType extends IFloatAttributeTypeBase {
            container: IAttribute;
            load(): FloatAttributeType;
            load(callback: (element: FloatAttributeType) => void): any;
        }
        class FloatAttributeType extends FloatAttributeTypeBase implements IFloatAttributeType {
            static typeName: string;
            container: Attribute;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface ICurrencyAttributeType extends IFloatAttributeTypeBase {
            container: IAttribute;
            load(): CurrencyAttributeType;
            load(callback: (element: CurrencyAttributeType) => void): any;
        }
        class CurrencyAttributeType extends FloatAttributeTypeBase implements ICurrencyAttributeType {
            static typeName: string;
            container: Attribute;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IIntegerAttributeTypeBase extends INumericAttributeTypeBase {
            container: IAttribute;
            load(): IntegerAttributeTypeBase;
            load(callback: (element: IntegerAttributeTypeBase) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class IntegerAttributeTypeBase extends NumericAttributeTypeBase implements IIntegerAttributeTypeBase {
            static typeName: string;
            container: Attribute;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IIntegerAttributeType extends IIntegerAttributeTypeBase {
            container: IAttribute;
            load(): IntegerAttributeType;
            load(callback: (element: IntegerAttributeType) => void): any;
        }
        class IntegerAttributeType extends IntegerAttributeTypeBase implements IIntegerAttributeType {
            static typeName: string;
            container: Attribute;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface ILongAttributeType extends IIntegerAttributeTypeBase {
            container: IAttribute;
            load(): LongAttributeType;
            load(callback: (element: LongAttributeType) => void): any;
        }
        class LongAttributeType extends IntegerAttributeTypeBase implements ILongAttributeType {
            static typeName: string;
            container: Attribute;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IAutoNumberAttributeType extends IIntegerAttributeTypeBase {
            container: IAttribute;
            load(): AutoNumberAttributeType;
            load(callback: (element: AutoNumberAttributeType) => void): any;
        }
        class AutoNumberAttributeType extends IntegerAttributeTypeBase implements IAutoNumberAttributeType {
            static typeName: string;
            container: Attribute;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Associations TODO: This is whre it belongs, but the word AssociationBase is never used}
         */
        interface IAssociationBase extends elements.IElement {
            container: IDomainModel;
            load(): AssociationBase;
            load(callback: (element: AssociationBase) => void): any;
            name: string;
            type: AssociationType;
            owner: AssociationOwner;
            parent: IEntity;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Associations TODO: This is whre it belongs, but the word AssociationBase is never used}
         *
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class AssociationBase extends elements.Element implements IAssociationBase {
            static typeName: string;
            container: DomainModel;
            name: string;
            dataStorageGuid: string;
            type: AssociationType;
            owner: AssociationOwner;
            deleteBehavior: AssociationDeleteBehavior;
            parent: Entity;
            documentation: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Associations relevant section in reference guide}
         */
        interface IAssociation extends IAssociationBase {
            container: IDomainModel;
            load(): Association;
            load(callback: (element: Association) => void): any;
            child: IEntity;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Associations relevant section in reference guide}
         */
        class Association extends AssociationBase implements IAssociation {
            static typeName: string;
            container: DomainModel;
            child: Entity;
            parentConnection: common.IPoint;
            childConnection: common.IPoint;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ICrossAssociation extends IAssociationBase {
            container: IDomainModel;
            load(): CrossAssociation;
            load(callback: (element: CrossAssociation) => void): any;
            child: IEntity;
            childQualifiedName: string;
        }
        class CrossAssociation extends AssociationBase implements ICrossAssociation {
            static typeName: string;
            container: DomainModel;
            child: IEntity;
            childQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IAssociationDeleteBehavior extends elements.IElement {
            container: IAssociationBase;
            load(): AssociationDeleteBehavior;
            load(callback: (element: AssociationDeleteBehavior) => void): any;
        }
        class AssociationDeleteBehavior extends elements.Element implements IAssociationDeleteBehavior {
            static typeName: string;
            container: AssociationBase;
            parentDeleteBehavior: DeletingBehavior;
            childDeleteBehavior: DeletingBehavior;
            parentErrorMessage: texts.Text;
            childErrorMessage: texts.Text;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Annotations relevant section in reference guide}
         */
        interface IAnnotation extends elements.IElement {
            container: IDomainModel;
            load(): Annotation;
            load(callback: (element: Annotation) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Annotations relevant section in reference guide}
         */
        class Annotation extends elements.Element implements IAnnotation {
            static typeName: string;
            container: DomainModel;
            caption: string;
            location: common.IPoint;
            width: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Access+Rules relevant section in reference guide}
         */
        interface IAccessRule extends elements.IElement {
            load(): AccessRule;
            load(callback: (element: AccessRule) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Access+Rules relevant section in reference guide}
         */
        class AccessRule extends elements.Element implements IAccessRule {
            static typeName: string;
            memberAccesses: instances.IList<MemberAccess>;
            moduleRoles: instances.IList<security.IModuleRole>;
            moduleRolesQualifiedNames: string[];
            documentation: string;
            allowCreate: boolean;
            allowDelete: boolean;
            defaultMemberAccessRights: MemberAccessRights;
            /**
             * The value of this property is conceptually of type XPathConstraints$XPathConstraint.
             */
            xPathConstraint: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMemberAccess extends elements.IElement {
            container: IAccessRule;
            load(): MemberAccess;
            load(callback: (element: MemberAccess) => void): any;
        }
        class MemberAccess extends elements.Element implements IMemberAccess {
            static typeName: string;
            container: AccessRule;
            attribute: IAttribute;
            attributeQualifiedName: string;
            association: IAssociationBase;
            associationQualifiedName: string;
            accessRights: MemberAccessRights;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Event+Handlers relevant section in reference guide}
         */
        interface IEventHandler extends elements.IElement {
            container: IEntity;
            load(): EventHandler;
            load(callback: (element: EventHandler) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Event+Handlers relevant section in reference guide}
         */
        class EventHandler extends elements.Element implements IEventHandler {
            static typeName: string;
            container: Entity;
            moment: ActionMoment;
            event: EventType;
            microflow: microflows.IMicroflow;
            microflowQualifiedName: string;
            raiseErrorOnFalse: boolean;
            passEventObject: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Indexes relevant section in reference guide}
         */
        interface IIndex extends elements.IElement {
            container: IEntity;
            load(): Index;
            load(callback: (element: Index) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Indexes relevant section in reference guide}
         */
        class Index extends elements.Element implements IIndex {
            static typeName: string;
            container: Entity;
            dataStorageGuid: string;
            attributes: instances.IList<IndexedAttribute>;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IIndexedAttribute extends elements.IElement {
            container: IIndex;
            load(): IndexedAttribute;
            load(callback: (element: IndexedAttribute) => void): any;
        }
        class IndexedAttribute extends elements.Element implements IIndexedAttribute {
            static typeName: string;
            container: Index;
            type: IndexedAttributeType;
            attribute: Attribute;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Validation+Rules relevant section in reference guide}
         */
        interface IValidationRule extends elements.IElement {
            container: IEntity;
            load(): ValidationRule;
            load(callback: (element: ValidationRule) => void): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Validation+Rules relevant section in reference guide}
         */
        class ValidationRule extends elements.Element implements IValidationRule {
            static typeName: string;
            container: Entity;
            attribute: IAttribute;
            attributeQualifiedName: string;
            errorMessage: texts.Text;
            ruleInfo: RuleInfo;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IRuleInfo extends elements.IElement {
            container: IValidationRule;
            load(): RuleInfo;
            load(callback: (element: RuleInfo) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class RuleInfo extends elements.Element implements IRuleInfo {
            static typeName: string;
            container: ValidationRule;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IEqualsToRuleInfo extends IRuleInfo {
            container: IValidationRule;
            load(): EqualsToRuleInfo;
            load(callback: (element: EqualsToRuleInfo) => void): any;
        }
        class EqualsToRuleInfo extends RuleInfo implements IEqualsToRuleInfo {
            static typeName: string;
            container: ValidationRule;
            useValue: boolean;
            equalsToValue: string;
            equalsToAttribute: IAttribute;
            equalsToAttributeQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IMaxLengthRuleInfo extends IRuleInfo {
            container: IValidationRule;
            load(): MaxLengthRuleInfo;
            load(callback: (element: MaxLengthRuleInfo) => void): any;
        }
        class MaxLengthRuleInfo extends RuleInfo implements IMaxLengthRuleInfo {
            static typeName: string;
            container: ValidationRule;
            maxLength: number;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IRangeRuleInfo extends IRuleInfo {
            container: IValidationRule;
            load(): RangeRuleInfo;
            load(callback: (element: RangeRuleInfo) => void): any;
        }
        class RangeRuleInfo extends RuleInfo implements IRangeRuleInfo {
            static typeName: string;
            container: ValidationRule;
            typeOfRange: RangeType;
            useMinValue: boolean;
            useMaxValue: boolean;
            minValue: string;
            maxValue: string;
            minAttribute: IAttribute;
            minAttributeQualifiedName: string;
            maxAttribute: IAttribute;
            maxAttributeQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IRegExRuleInfo extends IRuleInfo {
            container: IValidationRule;
            load(): RegExRuleInfo;
            load(callback: (element: RegExRuleInfo) => void): any;
        }
        class RegExRuleInfo extends RuleInfo implements IRegExRuleInfo {
            static typeName: string;
            container: ValidationRule;
            regularExpression: regularexpressions.IRegularExpression;
            regularExpressionQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface IRequiredRuleInfo extends IRuleInfo {
            container: IValidationRule;
            load(): RequiredRuleInfo;
            load(callback: (element: RequiredRuleInfo) => void): any;
        }
        class RequiredRuleInfo extends RuleInfo implements IRequiredRuleInfo {
            static typeName: string;
            container: ValidationRule;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IUniqueRuleInfo extends IRuleInfo {
            container: IValidationRule;
            load(): UniqueRuleInfo;
            load(callback: (element: UniqueRuleInfo) => void): any;
        }
        class UniqueRuleInfo extends RuleInfo implements IUniqueRuleInfo {
            static typeName: string;
            container: ValidationRule;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        class AssociationType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Reference: AssociationType;
            static ReferenceSet: AssociationType;
        }
        class AssociationOwner extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Default: AssociationOwner;
            static Both: AssociationOwner;
        }
        class DeletingBehavior extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static DeleteMeAndReferences: DeletingBehavior;
            static DeleteMeButKeepReferences: DeletingBehavior;
            static DeleteMeIfNoReferences: DeletingBehavior;
        }
        class MemberAccessRights extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static None: MemberAccessRights;
            static ReadOnly: MemberAccessRights;
            static ReadWrite: MemberAccessRights;
        }
        class ActionMoment extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Before: ActionMoment;
            static After: ActionMoment;
        }
        class EventType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Create: EventType;
            static Commit: EventType;
            static Delete: EventType;
            static RollBack: EventType;
        }
        class IndexedAttributeType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static Normal: IndexedAttributeType;
            static CreatedDate: IndexedAttributeType;
            static ChangedDate: IndexedAttributeType;
        }
        class RangeType extends instances.IEnum {
            protected qualifiedTsTypeName: string;
            static GreaterThanOrEqualTo: RangeType;
            static SmallerThanOrEqualTo: RangeType;
            static Between: RangeType;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import elements = internal.elements;
    import instances = internal.instances;
    import model = internal.model;
    import transport = internal.transport;
    import units = internal.units;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Enumerations`.
     */
    module enumerations {
        interface IModuleDocument extends units.IModelUnit {
            container: projects.IFolderBase;
            load(): ModuleDocument;
            load(callback: (element: ModuleDocument) => void): any;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class ModuleDocument extends units.ModelUnit implements IModuleDocument {
            static typeName: string;
            container: projects.FolderBase;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): Object;
        }
        interface IDocument extends projects.IModuleDocument {
            container: projects.IFolderBase;
            load(): Document;
            load(callback: (element: Document) => void): any;
            name: string;
        }
        /**
         * Warning: this class represents a non-instantiable concept in the meta model,
         * i.e. it is effectively abstract and you should _not_ try to instantiate this class directly,
         * but instantiate one of its (effectively concrete) sub classes.
         * Instantiating this class is not impossible, but there's no guarantee the result will be useful.
         */
        class Document extends projects.ModuleDocument implements IDocument {
            static typeName: string;
            container: projects.FolderBase;
            name: string;
            documentation: string;
            excluded: boolean;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Enumerations relevant section in reference guide}
         */
        interface IEnumeration extends projects.IDocument {
            container: projects.IFolderBase;
            load(): Enumeration;
            load(callback: (element: Enumeration) => void): any;
            values: instances.IList<IEnumerationValue>;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Enumerations relevant section in reference guide}
         */
        class Enumeration extends projects.Document implements IEnumeration {
            static typeName: string;
            container: projects.FolderBase;
            values: instances.IList<EnumerationValue>;
            constructor(container: projects.IFolderBase);
            constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean);
            toPlainJson(): any;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Enumerations relevant section in reference guide}
         */
        interface IEnumerationValue extends elements.IElement {
            container: IEnumeration;
            load(): EnumerationValue;
            load(callback: (element: EnumerationValue) => void): any;
            name: string;
        }
        /**
         * See: {@link https://world.mendix.com/display/refguide5/Enumerations relevant section in reference guide}
         */
        class EnumerationValue extends elements.Element implements IEnumerationValue {
            static typeName: string;
            container: Enumeration;
            name: string;
            caption: texts.Text;
            image: images.IImage;
            imageQualifiedName: string;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
        interface ICondition extends elements.IElement {
            load(): Condition;
            load(callback: (element: Condition) => void): any;
        }
        class Condition extends elements.Element implements ICondition {
            static typeName: string;
            attributeValue: string;
            editableVisible: boolean;
            constructor();
            constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean);
            toPlainJson(): any;
        }
    }
}
declare module "mendixmodelsdk" {
    module sdk {
        module internal {
            module model {
                interface IBaseModel {
                    allMicroflows(): microflows.IMicroflow[];
                    allMicroflowBases(): microflows.IMicroflowBase[];
                    allRules(): microflows.IRule[];
                    allImportedWebServices(): webservices.IImportedWebService[];
                    allPublishedAppServices(): webservices.IPublishedAppService[];
                    allPublishedServiceBases(): webservices.IPublishedServiceBase[];
                    allPublishedWebServices(): webservices.IPublishedWebService[];
                    allMxXmlSchemas(): xmlschemas.IMxXmlSchema[];
                    allConsumedAppServices(): appservices.IConsumedAppService[];
                    allMappingDocuments(): mappings.IMappingDocument[];
                    allExportMappings(): exportmappings.IExportMapping[];
                    allImportMappings(): importmappings.IImportMapping[];
                    allPublishedOdataServices(): rest.IPublishedOdataService[];
                    allPublishedRestServices(): rest.IPublishedRestService[];
                    allPublishedRestServiceBases(): rest.IPublishedRestServiceBase[];
                    allFormBases(): pages.IFormBase[];
                    allPages(): pages.IPage[];
                    allLayouts(): pages.ILayout[];
                    allSnippets(): pages.ISnippet[];
                    allDocumentTemplates(): documenttemplates.IDocumentTemplate[];
                    allNavigationDocuments(): navigation.INavigationDocument[];
                    allMenuDocuments(): menus.IMenuDocument[];
                    allDataSets(): datasets.IDataSet[];
                    allSystemTextCollections(): texts.ISystemTextCollection[];
                    allJavaActions(): javaactions.IJavaAction[];
                    allProjects(): projects.IProject[];
                    allProjectDocuments(): projects.IProjectDocument[];
                    allFolderBases(): projects.IFolderBase[];
                    allFolders(): projects.IFolder[];
                    allModules(): projects.IModule[];
                    allModuleDocuments(): projects.IModuleDocument[];
                    allDocuments(): projects.IDocument[];
                    allProjectConversions(): projects.IProjectConversion[];
                    allConstants(): constants.IConstant[];
                    allProjectSettings(): settings.IProjectSettings[];
                    allScheduledEvents(): scheduledevents.IScheduledEvent[];
                    allRegularExpressions(): regularexpressions.IRegularExpression[];
                    allImageCollections(): images.IImageCollection[];
                    allModuleSecurities(): security.IModuleSecurity[];
                    allProjectSecurities(): security.IProjectSecurity[];
                    allDomainModels(): domainmodels.IDomainModel[];
                    allEnumerations(): enumerations.IEnumeration[];
                }
                /**
                 * Class to find generated model units.
                 */
                class BaseModel {
                    allMicroflows(): microflows.IMicroflow[];
                    allMicroflowBases(): microflows.IMicroflowBase[];
                    allRules(): microflows.IRule[];
                    allImportedWebServices(): webservices.IImportedWebService[];
                    allPublishedAppServices(): webservices.IPublishedAppService[];
                    allPublishedServiceBases(): webservices.IPublishedServiceBase[];
                    allPublishedWebServices(): webservices.IPublishedWebService[];
                    allMxXmlSchemas(): xmlschemas.IMxXmlSchema[];
                    allConsumedAppServices(): appservices.IConsumedAppService[];
                    allMappingDocuments(): mappings.IMappingDocument[];
                    allExportMappings(): exportmappings.IExportMapping[];
                    allImportMappings(): importmappings.IImportMapping[];
                    allPublishedOdataServices(): rest.IPublishedOdataService[];
                    allPublishedRestServices(): rest.IPublishedRestService[];
                    allPublishedRestServiceBases(): rest.IPublishedRestServiceBase[];
                    allFormBases(): pages.IFormBase[];
                    allPages(): pages.IPage[];
                    allLayouts(): pages.ILayout[];
                    allSnippets(): pages.ISnippet[];
                    allDocumentTemplates(): documenttemplates.IDocumentTemplate[];
                    allNavigationDocuments(): navigation.INavigationDocument[];
                    allMenuDocuments(): menus.IMenuDocument[];
                    allDataSets(): datasets.IDataSet[];
                    allSystemTextCollections(): texts.ISystemTextCollection[];
                    allJavaActions(): javaactions.IJavaAction[];
                    allProjects(): projects.IProject[];
                    allProjectDocuments(): projects.IProjectDocument[];
                    allFolderBases(): projects.IFolderBase[];
                    allFolders(): projects.IFolder[];
                    allModules(): projects.IModule[];
                    allModuleDocuments(): projects.IModuleDocument[];
                    allDocuments(): projects.IDocument[];
                    allProjectConversions(): projects.IProjectConversion[];
                    allConstants(): constants.IConstant[];
                    allProjectSettings(): settings.IProjectSettings[];
                    allScheduledEvents(): scheduledevents.IScheduledEvent[];
                    allRegularExpressions(): regularexpressions.IRegularExpression[];
                    allImageCollections(): images.IImageCollection[];
                    allModuleSecurities(): security.IModuleSecurity[];
                    allProjectSecurities(): security.IProjectSecurity[];
                    allDomainModels(): domainmodels.IDomainModel[];
                    allEnumerations(): enumerations.IEnumeration[];
                }
                interface IByNameReferenceResolver {
                    findLayoutByQualifiedName(qname: string): pages.ILayout;
                    findAppServiceActionParameterByQualifiedName(qname: string): appservices.IAppServiceActionParameter;
                    findImportMappingByQualifiedName(qname: string): importmappings.IImportMapping;
                    findJavaActionByQualifiedName(qname: string): javaactions.IJavaAction;
                    findMicroflowByQualifiedName(qname: string): microflows.IMicroflow;
                    findSnippetByQualifiedName(qname: string): pages.ISnippet;
                    findMenuDocumentByQualifiedName(qname: string): menus.IMenuDocument;
                    findRuleParameterByQualifiedName(qname: string): microflows.IRuleParameter;
                    findLayoutParameterByQualifiedName(qname: string): pages.ILayoutParameter;
                    findMicroflowParameterByQualifiedName(qname: string): microflows.IMicroflowParameter;
                    findPageByQualifiedName(qname: string): pages.IPage;
                    findMxXmlSchemaByQualifiedName(qname: string): xmlschemas.IMxXmlSchema;
                    findAssociationBaseByQualifiedName(qname: string): domainmodels.IAssociationBase;
                    findAppServiceActionByQualifiedName(qname: string): appservices.IAppServiceAction;
                    findExportMappingByQualifiedName(qname: string): exportmappings.IExportMapping;
                    findUserRoleByQualifiedName(qname: string): security.IUserRole;
                    findRegularExpressionByQualifiedName(qname: string): regularexpressions.IRegularExpression;
                    findAttributeByQualifiedName(qname: string): domainmodels.IAttribute;
                    findEntityByQualifiedName(qname: string): domainmodels.IEntity;
                    findModuleRoleByQualifiedName(qname: string): security.IModuleRole;
                    findImportedWebServiceByQualifiedName(qname: string): webservices.IImportedWebService;
                    findDocumentTemplateByQualifiedName(qname: string): documenttemplates.IDocumentTemplate;
                    findRuleByQualifiedName(qname: string): microflows.IRule;
                    findDataSetByQualifiedName(qname: string): datasets.IDataSet;
                    findConstantByQualifiedName(qname: string): constants.IConstant;
                    findImageByQualifiedName(qname: string): images.IImage;
                    findJavaActionParameterByQualifiedName(qname: string): javaactions.IJavaActionParameter;
                    findEnumerationByQualifiedName(qname: string): enumerations.IEnumeration;
                }
            }
        }
    }
}
declare module "mendixmodelsdk" {
    module sdk {
        module internal {
            /**
             * The `deltas` module does not contain the interfaces for all deltas,
             * but it does contain (all) objects required for building and handling these.
             */
            module deltas {
                const DeltaTypes: {
                    CREATE_ELEMENT: string;
                    UPDATE_PROPERTY_VALUE: string;
                    MOVE_ELEMENT: string;
                    DELETE_ELEMENT: string;
                    CREATE_UNIT: string;
                };
                const MutatorTypes: {
                    CHANGE: string;
                    ADD: string;
                    REMOVE: string;
                    MOVE: string;
                };
                /**
                * A POTSO that wraps a delta and success/failure callbacks.
                */
                class DeltaRequest {
                    delta: transport.IDelta;
                    onSuccess: common.IVoidCallback;
                    onFailure: common.IErrorCallback;
                    constructor(delta: transport.IDelta, onSuccess?: common.IVoidCallback, onFailure?: common.IErrorCallback);
                }
                /**
                 * A simple queue implementation for deltas.
                 */
                class DeltaQueue {
                    private model;
                    private logToConsole;
                    private delay;
                    private maxDeltasPerBatch;
                    private queue;
                    private pending;
                    isClosing: boolean;
                    private closeCallback;
                    constructor(model: model.Model, logToConsole?: boolean);
                    /**
                     * Closes the "connection" with the Model API Server in the sense that
                     * pending delta requests are processed, and that afterwards the given
                     * `callback` will be called.
                     * This function can only be called once.
                     */
                    closeConnection(callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
                    /**
                     * Pushes the given `delta` on the queue for scheduling/processing.
                     */
                    push(delta: DeltaRequest): void;
                    /**
                     * Schedules the next delta for processing using JS's event queue/loop.
                     */
                    private schedule();
                    private processNext();
                }
            }
        }
    }
}
declare module "mendixmodelsdk" {
    module sdk {
        /**
         * Internal API of the mendixmodelsdk.
         *
         * DISCLAIMER: End-users of the sdk should never instantiate classes in this module, or in submodules of this module.
         * Anything in this module, or its submodules, can be removed, or have changed signature, between sdk-versions.
         */
        module internal {
            /**
             * The `modelapiclient` module provides typed communication with the Model API Server.
             */
            module modelapiclient {
                /**
                 * The IModelApiClient interface is used for forwarding calls to the underlying Mendix Model API.
                 * Implementations of this interface serve as fully-typed clients for the Model API Server.
                 * Default implementation: {@link ModelApiClientImpl}.
                 * Note that all its methods are asynchronous, with the last two arguments always being a (success) callback and an error callback,
                 * and we will only explain the "essential" arguments in their documentation.
                 */
                interface IModelApiClient {
                    createWorkingCopy(workingCopyInfo: configuration.ICreateWorkingCopyParameters, callback: common.ICallback<transport.IWorkingCopy>, errorCallback: common.IErrorCallback): any;
                    /**
                     * Loads all unit interfaces of the working copy indicated with `workingCopyId` as an array of normalised model JSON.
                     */
                    loadUnitInterfaces(workingCopyId: string, callback: common.ICallback<transport.IAbstractUnitJson[]>, errorCallback: common.IErrorCallback): any;
                    /**
                     * Retrieves the top-level working copy information/meta data for the working copy with given `workingCopyId`.
                     */
                    loadWorkingCopyMetaData(workingCopyId: string, callback: common.ICallback<transport.IWorkingCopy>, errorCallback: common.IErrorCallback): any;
                    deleteWorkingCopy(workingCopyId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): any;
                    grantAccess(workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): any;
                    revokeAccess(workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): any;
                    checkAccess(workingCopyId: string, memberOpenId: string, callback: common.ICallback<boolean>, errorCallback: common.IErrorCallback): any;
                    exportMpk(workingCopyId: string, outFilePath: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): any;
                    /**
                     * Retrieves a unit, as normalised model JSON, by working copy and unit ID.
                     */
                    fetchUnitById<T extends units.AbstractUnit>(workingCopyId: string, unitId: string, callback: common.ICallback<transport.IAbstractUnitJson>, errorCallback: common.IErrorCallback): any;
                    /**
                     * Sends a sequence of deltas on the working copy with the given `workingCopyId` to the Model API Server;
                     * batched if more than one is passed, as a single delta otherwise.
                     */
                    sendDeltas(workingCopyId: string, deltas: transport.IDelta[], callback: common.ICallback<Object>, errorCallback: common.IErrorCallback): any;
                }
                class ModelApiClientImpl implements IModelApiClient {
                    private transportation;
                    constructor(transportation: transportation.ITransportation);
                    createWorkingCopy(workingCopyInfo: configuration.ICreateWorkingCopyParameters, callback: common.ICallback<transport.IWorkingCopy>, errorCallback: common.IErrorCallback): void;
                    loadWorkingCopyMetaData(workingCopyId: string, callback: common.ICallback<transport.IWorkingCopy>, errorCallback: common.IErrorCallback): void;
                    loadUnitInterfaces(workingCopyId: string, callback: common.ICallback<transport.IAbstractUnitJson[]>, errorCallback: common.IErrorCallback): void;
                    deleteWorkingCopy(workingCopyId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
                    grantAccess(workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
                    revokeAccess(workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
                    checkAccess(workingCopyId: string, memberOpenId: string, callback: common.ICallback<boolean>, errorCallback: common.IErrorCallback): void;
                    exportMpk(workingCopyId: string, outFilePath: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
                    fetchUnitById<T extends units.AbstractUnit>(workingCopyId: string, unitId: string, callback: common.ICallback<transport.IAbstractUnitJson>, errorCallback: common.IErrorCallback): void;
                    sendDeltas(workingCopyId: string, deltas: transport.IDelta[], callback: common.ICallback<Object>, errorCallback: common.IErrorCallback): void;
                }
            }
        }
    }
}
declare module "mendixmodelsdk" {
    module sdk {
        /**
         * The `configuration` module allows the Model SDK user to configure
         * how to communicate with the Model API Server;
         * in particular w.r.t.: authentication, success/error handling, etc.
         */
        module configuration {
            /**
             * The credentials with which a trusted backend client (such as sprintr) connects to the Model API Server.
             */
            interface IBackendCredentials {
                username: string;
                password: string;
                /** The OpenID on behalf which the trusted backend service operates. */
                openid?: string;
            }
            interface ISdkCredentials {
                username: string;
                apikey: string;
            }
            /**
             * All the details of the connection that's been set up to the Model API Server.
             */
            interface ISdkConfig {
                credentials?: IBackendCredentials | ISdkCredentials;
                endPoint?: string;
                transportation?: internal.transportation.ITransportation;
                client?: sdk.internal.modelapiclient.IModelApiClient;
            }
            interface ICreateWorkingCopyParameters {
                name: string;
                description?: string;
                avatarUrl?: string;
                /**
                 * Path to the (template) MPK file.
                 */
                template: string;
            }
            function assertBackendAccess(config: ISdkConfig): void;
            function checkWorkingCopyId(workingCopyId: string): void;
            function checkCallbacks(callback: Function, errorCallback: Function): void;
        }
    }
}
declare module "mendixmodelsdk" {
    import internal = sdk.internal;
    import model = internal.model;
    /**
     * This interface exposes a single Mendix Model.
     * This interface contains the parts of the {@link Model} that are exposed through the SDK.
     */
    interface IModel extends model.IBaseModel, model.IByNameReferenceResolver {
        /**
         * Working copy id of the current opened model (read only)
         */
        id: string;
        /**
         * The actual contents of the model.
         */
        root: projects.IProject;
        /**
         * The meta data of the model.
         */
        metadata: internal.transport.IWorkingCopy;
        /**
         * Ends the connection with the Model API client.
         * Flushes any pending deltas and invokes the callback once complete.
         * (Errors will be handled through the default modelstore error handler.)
         */
        closeConnection(callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): any;
        /**
         * Deletes this model from the server, and the (SDK) client.
         * If you are altering the model before deleting it, make sure to call this method in the callback of {@link closeConnection}.
         *
         */
        deleteWorkingCopy(callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): any;
        /**
         * Exports this model as MPK.
         * If you are altering the model before running an export make sure to call this method in the callback of {@link closeConnection}.
         */
        exportMpk(outFilePath: string, callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): any;
        /**
         * Given a moduleName, returns a module name
         * (For modules, their qualified name equals their name)
         */
        findModuleByQualifiedName(qname: string): any;
        /**
         * Given an id, fetches a complete unit. The result might be returned from the cache.
         * Use this method if you have just a unit Id, otherwise, unit.fetch() is a simpler alternative.
         */
        fetchUnitById<T extends sdk.internal.units.IAbstractUnit>(id: string, callback: common.ICallback<T>, errorCallback?: common.IErrorCallback): any;
    }
    module sdk {
        module internal {
            module model {
                interface IUnitsCache {
                    [id: string]: units.IAbstractUnit;
                }
                /**
                 * Implementation of {@link IModel}.
                 */
                class Model extends BaseModel implements IModel {
                    metadata: transport.IWorkingCopy;
                    /**
                     * Map unitId -> unit, containing all units of this model, which could be partial(ly loaded).
                     */
                    /**
                     * Map unitType -> units[], containing all units of this model, per type, but not sorted in any particular order.
                     * Please extend the type whenever applicable, for convenience of the programmer.
                     */
                    constructor(_client: modelapiclient.IModelApiClient, _errorHandler: common.IErrorCallback, _connectionConfig: configuration.ISdkConfig);
                    closeConnection(callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
                    /**
                     * Instantiates a new Model that can communicate with the server for sending and receiving documents.
                     * Loading a Model will automatically fetches all unit interfaces for this working copy and invokes the (success) callback,
                     * or calls the errorHandler if this fails.
                     */
                    static create(client: modelapiclient.IModelApiClient, workingCopyInfo: configuration.ICreateWorkingCopyParameters, callback: common.ICallback<transport.IWorkingCopy>, errorCallback: common.IErrorCallback): void;
                    /**
                     * Instantiates a new working copy that can communicate with the server for sending and receiving documents.
                     * Reading a working copy will automatically fetch all unit interfaces for this working copy and invoke callback, or call the errorHandler if this fails.
                     */
                    static read(client: modelapiclient.IModelApiClient, workingCopyId: string, callback: (model: IModel) => void, errorCallback: common.IErrorCallback, connectionConfig: configuration.ISdkConfig): void;
                    id: string;
                    /**
                     * Returns the structural unit of type "Projects$Project" which is the project's root,
                     * cast to the appropriate type.
                     */
                    root: projects.IProject;
                    /**
                     * Registers the given `unit` in the cache(s).
                     */
                    /**
                     * Unregisters the given `unit` from the cache(s).
                     */
                    /**
                     * Fetches a complete unit. The result might be returned from the cache.
                     */
                    fetchUnitById<T extends units.IAbstractUnit>(id: string, callback: common.ICallback<T>, errorCallback?: common.IErrorCallback): void;
                    /**
                     * Loads all unit interfaces and caches them.
                     * This function cannot be called twice.
                     */
                    /**
                     * If a reference is broken, it should be registered here, so that it can be restored once model elements are renamed.
                     */
                    /**
                     * If a reference is no longer broken, it should be unregistered here.
                     */
                    /**
                     * If a model element changes its name, broken by-name references should be attempted to resolve.
                     *
                     * In the future this might be made smarter and less expensive, once that becomes an issue.
                     */
                    /**
                     * Deletes this working copy from the server, and the (SDK) client.
                     */
                    deleteWorkingCopy(callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
                    exportMpk(outFilePath: string, callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
                    /**
                     * Given an object type name and a qualified name, finds the corresponding element (or null if the reference is broken).
                     * Will always succeed for unbroken references,
                     * since all objects that are referred by name should be part of the public interface of the model.
                     *
                     * Example usage:
                     * 	`modelStore.resolveName(domainmodels.Attribute.typeName, "Expenses.Expense.Price");`
                     */
                    /**
                     * Resolver methods for references by name
                     */
                    /**
                     * Finds an item in a colleciton
                     */
                    findModuleByQualifiedName(name: string): projects.IModule;
                    findLayoutByQualifiedName(qname: string): pages.ILayout;
                    findJavaActionByQualifiedName(qname: string): javaactions.IJavaAction;
                    findMicroflowByQualifiedName(qname: string): microflows.IMicroflow;
                    findSnippetByQualifiedName(qname: string): pages.ISnippet;
                    findMenuDocumentByQualifiedName(qname: string): menus.IMenuDocument;
                    findLayoutParameterByQualifiedName(qname: string): pages.ILayoutParameter;
                    findMicroflowParameterByQualifiedName(qname: string): microflows.IMicroflowParameter;
                    findRuleParameterByQualifiedName(qname: string): microflows.IRuleParameter;
                    findPageByQualifiedName(qname: string): pages.IPage;
                    findAssociationBaseByQualifiedName(qname: string): domainmodels.IAssociationBase;
                    findEntityByQualifiedName(qname: string): domainmodels.IEntity;
                    findAttributeByQualifiedName(qname: string): domainmodels.IAttribute;
                    findAppServiceActionByQualifiedName(qname: string): appservices.IAppServiceAction;
                    findAppServiceActionParameterByQualifiedName(qname: string): appservices.IAppServiceActionParameter;
                    findMxXmlSchemaByQualifiedName(qname: string): xmlschemas.IMxXmlSchema;
                    findExportMappingByQualifiedName(qname: string): exportmappings.IExportMapping;
                    findImportMappingByQualifiedName(qname: string): importmappings.IImportMapping;
                    findUserRoleByQualifiedName(qname: string): security.IUserRole;
                    findRegularExpressionByQualifiedName(qname: string): regularexpressions.IRegularExpression;
                    findModuleRoleByQualifiedName(qname: string): security.IModuleRole;
                    findImportedWebServiceByQualifiedName(qname: string): webservices.IImportedWebService;
                    findDocumentTemplateByQualifiedName(qname: string): documenttemplates.IDocumentTemplate;
                    findRuleByQualifiedName(qname: string): microflows.IRule;
                    findDataSetByQualifiedName(qname: string): datasets.IDataSet;
                    findConstantByQualifiedName(qname: string): constants.IConstant;
                    findImageByQualifiedName(qname: string): images.IImage;
                    findJavaActionParameterByQualifiedName(qname: string): javaactions.IJavaActionParameter;
                    findEnumerationByQualifiedName(qname: string): enumerations.IEnumeration;
                }
            }
        }
    }
}
declare module "mendixmodelsdk" {
    import configuration = sdk.configuration;
    /**
     * Client class of the Mendix Model Sdk.
     * By instantiating this class with appropriate configuration, you can create and read working copies.
     */
    class ModelSdkClient {
        private connectionConfig;
        private client;
        constructor(connectionConfig: configuration.ISdkConfig);
        /**
         * Create a new working copy on the model server, and reads it for immediate editing.
         */
        createWorkingCopy(workingCopyParameters: configuration.ICreateWorkingCopyParameters, callback: common.ICallback<IModel>, errorCallback: common.IErrorCallback): void;
        /**
         * Reads a working copy on the model server so it can be edited.
         */
        openWorkingCopy(workingCopyId: string, callback: common.ICallback<IModel>, errorCallback: common.IErrorCallback): void;
        /**
         * Deletes this working copy from the server, and the (SDK) client.
         */
        deleteWorkingCopy(workingCopyId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
        /**
         * Grants access to the member specified to his/her OpenID on this working copy.
         */
        grantAccess(workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
        /**
         * Revokes access of the member specified to his/her OpenID on this working copy.
         */
        revokeAccess(workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
        /**
         * Returns whether the member specified to his/her OpenID has (been granted) access to this working copy.
         */
        checkAccess(workingCopyId: string, memberOpenId: string, callback: common.ICallback<boolean>, errorCallback: common.IErrorCallback): void;
        /**
         * Exports this working copy as MPK.
         */
        exportMpk(workingCopyId: string, outFilePath: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    }
}
declare module "mendixmodelsdk" {
    module sdk {
        module extras {
            function serializeToJs(unit: internal.units.AbstractUnit): string;
            /**
             * Class which allows to serialise a given model part as TypeScript code that constructs that model piece.
             * Limitations:
             *  - Can only do elements in one (model) unit.
             */
            class JavaScriptSerialiser {
                private unit;
                private unitVarName;
                private creations;
                private creationsById;
                private varNames;
                constructor(unit: internal.units.IAbstractUnit, unitVarName: string);
                schedule(structure: internal.structures.IStructure): void;
                source(): string;
                private creationAsSource(creation);
                private settingAsSource(varName, setting);
                private singleValueAsTsExpr(varName, setting, singleValue);
                private asCreation(structure);
            }
        }
    }
}
declare module "mendixmodelsdk" {
    module sdk {
        module internal {
            /**
             * The `transportation` module is responsible for performing requests on the (/a) Model API Server.
             */
            module transportation {
                /**
                 * Implementations of this interface are capable of placing a request with the Model API Server over HTTP.
                 * Default implementation: {@link RestTransportation}.
                 */
                interface ITransportation {
                    /**
                     * Fire off a HTTP request, with specified method, url, data, and success and failure callbacks.
                     */
                    request<T>(method: string, url: string, data: Object, success: common.ICallback<T>, failure: common.IErrorCallback): any;
                    requestMultipartBinaryFileUpload<T>(method: string, url: string, data: Object, filename: string, success: common.ICallback<T>, failure: common.IErrorCallback): any;
                    requestFileDownload<T>(method: string, url: string, success: common.ICallback<T>, failure: common.IErrorCallback): any;
                }
                /**
                 * Default implementation of {@link ITransportation} that communicates with the Model API Server over
                 * HTTP using Restler.
                 */
                class RestTransportation implements ITransportation {
                    private config;
                    constructor(config: configuration.ISdkConfig);
                    private sanitizedMethod(method);
                    private url(urlEndpoint);
                    private generateStandardOptions();
                    private handleRequest<T>(request, url, data, success, failure);
                    request<T>(method: string, url: string, data: Object, success: common.ICallback<T>, failure: common.IErrorCallback): void;
                    requestMultipartBinaryFileUpload<T>(method: string, url: string, data: Object, filename: string, success: common.ICallback<T>, failure: common.IErrorCallback): void;
                    requestFileDownload<T>(method: string, url: string, success: common.ICallback<T>, failure: common.IErrorCallback): void;
                }
            }
        }
    }
}
declare var mobservable: IMobservableStatic;
declare var global: any;
declare var require: {
    (id: string): any;
    resolve(id: string): string;
    cache: any;
    extensions: any;
    main: any;
};
declare var module: {
    exports: any;
    require(id: string): any;
    id: string;
    filename: string;
    loaded: boolean;
    parent: any;
    children: any[];
};

