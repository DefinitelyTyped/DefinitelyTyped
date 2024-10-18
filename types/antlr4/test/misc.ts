import AltDict from "antlr4/misc/AltDict";
import BitSet from "antlr4/misc/BitSet";
import HashCode from "antlr4/misc/HashCode";
import HashMap from "antlr4/misc/HashMap";
import HashSet from "antlr4/misc/HashSet";
import Interval from "antlr4/misc/Interval";
import IntervalSet from "antlr4/misc/IntervalSet";

// AltDict
const altDictInstance = new AltDict();
altDictInstance.get(""); // $ExpectType any
altDictInstance.set("", ""); // $ExpectType void
altDictInstance.values(); // $ExpectType any[]

// BitSet
const bitsetInstance = new BitSet();
bitsetInstance.data; // $ExpectType boolean[]
bitsetInstance.add(0); // $ExpectType void
bitsetInstance.or(bitsetInstance); // $ExpectType void
bitsetInstance.remove(0); // $ExpectType void
bitsetInstance.has(0); // $ExpectType boolean
bitsetInstance.values(); // $ExpectType string[]
bitsetInstance.minValue(); // $ExpectType number
bitsetInstance.hashCode(); // $ExpectType number
bitsetInstance.equals(bitsetInstance); // $ExpectType boolean
bitsetInstance.toString(); // $ExpectType string
bitsetInstance.length; // $ExpectType number

// HashCode
HashCode.hashStuff(0, 1, 2);
const hashCodeInstance = new HashCode();
hashCodeInstance.update(0, 1, 2); // $ExpectType void
hashCodeInstance.finish(); // $ExpectType number

// HashMap
const hashMapInstance = new HashMap();
new HashMap((_a: any) => 0);
new HashMap(undefined, (_b: any) => true);
new HashMap(
    (_a: any) => 0,
    (_b: any) => false,
);
hashMapInstance.data; // $ExpectType Record<string, any>
hashMapInstance.hashFunction; // $ExpectType (a: any) => number
hashMapInstance.equalsFunction; // $ExpectType (a: any, b: any) => boolean
hashMapInstance.set("", 0); // $ExpectType any
hashMapInstance.containsKey(""); // $ExpectType boolean
hashMapInstance.get(""); // $ExpectType any
hashMapInstance.entries(); // $ExpectType any[]
hashMapInstance.getKeys(); // $ExpectType any[]
hashMapInstance.getValues(); // $ExpectType any[]
hashMapInstance.toString(); // $ExpectType string
hashMapInstance.length; // $ExpectType number

// HashSet
const hashSetInstance = new HashSet();
new HashSet((_a: any) => 0);
new HashSet(undefined, (_b: any) => true);
new HashSet(
    (_a: any) => 0,
    (_b: any) => false,
);
hashSetInstance.data; // $ExpectType Record<string, any[]>
hashSetInstance.add(""); // $ExpectType any
hashSetInstance.has(""); // $ExpectType boolean
hashSetInstance.get(""); // $ExpectType any
hashSetInstance.values(); // $ExpectType any[]
hashSetInstance.toString(); // $ExpectType string
hashSetInstance.length; // $ExpectType number

// Interval
Interval.INVALID_INTERVAL; // $ExpectType Interval
const intervalInstance = new Interval(0, 0);
intervalInstance.start; // $ExpectType number
intervalInstance.stop; // $ExpectType number
intervalInstance.clone(); // $ExpectType Interval
intervalInstance.contains(0); // $ExpectType boolean
intervalInstance.toString(); // $ExpectType string
intervalInstance.length; // $ExpectType number

// IntervalSet
const intervalSetInstance = new IntervalSet();
intervalSetInstance.intervals; // $ExpectType Interval[] | null
intervalSetInstance.readOnly; // $ExpectType false
intervalSetInstance.first(); // $ExpectType number
intervalSetInstance.addOne(0); // $ExpectType void
intervalSetInstance.addRange(0, 0); // $ExpectType void
intervalSetInstance.addInterval(intervalInstance); // $ExpectType void
intervalSetInstance.addSet(intervalSetInstance); // $ExpectType IntervalSet
intervalSetInstance.reduce(0); // $ExpectType void
intervalSetInstance.complement(0, 0); // $ExpectType IntervalSet
intervalSetInstance.contains(0); // $ExpectType boolean
intervalSetInstance.removeRange(intervalInstance); // $ExpectType void
intervalSetInstance.removeOne(0); // $ExpectType void
intervalSetInstance.toString(); // $ExpectType string
intervalSetInstance.toString([""]); // $ExpectType string
intervalSetInstance.toString(undefined, [""]); // $ExpectType string
intervalSetInstance.toString(undefined, undefined, true); // $ExpectType string
intervalSetInstance.toString([""], [""], true); // $ExpectType string
intervalSetInstance.toCharString(); // $ExpectType string
intervalSetInstance.toIndexString(); // $ExpectType string
intervalSetInstance.toTokenString([""], [""]); // $ExpectType string
intervalSetInstance.elementName([""], [""], 0); // $ExpectType string
intervalSetInstance.length; // $ExpectType number
