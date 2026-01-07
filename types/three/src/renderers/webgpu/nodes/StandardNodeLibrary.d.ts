import { LineBasicNodeMaterialNodeProperties } from "../../../materials/nodes/LineBasicNodeMaterial.js";
import { LineDashedNodeMaterialNodeProperties } from "../../../materials/nodes/LineDashedNodeMaterial.js";
import { MeshBasicNodeMaterialNodeProperties } from "../../../materials/nodes/MeshBasicNodeMaterial.js";
import { MeshLambertNodeMaterialNodeProperties } from "../../../materials/nodes/MeshLambertNodeMaterial.js";
import { MeshMatcapNodeMaterialNodeProperties } from "../../../materials/nodes/MeshMatcapNodeMaterial.js";
import { MeshNormalNodeMaterialNodeProperties } from "../../../materials/nodes/MeshNormalNodeMaterial.js";
import { MeshPhongNodeMaterialNodeProperties } from "../../../materials/nodes/MeshPhongNodeMaterial.js";
import { MeshPhysicalNodeMaterialNodeProperties } from "../../../materials/nodes/MeshPhysicalNodeMaterial.js";
import { MeshStandardNodeMaterialNodeProperties } from "../../../materials/nodes/MeshStandardNodeMaterial.js";
import { MeshToonNodeMaterialNodeProperties } from "../../../materials/nodes/MeshToonNodeMaterial.js";
import { PointsNodeMaterialNodeProperties } from "../../../materials/nodes/PointsNodeMaterial.js";
import { ShadowNodeMaterialNodeProperties } from "../../../materials/nodes/ShadowNodeMaterial.js";
import { SpriteNodeMaterialNodeProperties } from "../../../materials/nodes/SpriteNodeMaterial.js";
import NodeLibrary from "../../common/nodes/NodeLibrary.js";
/**
 * This version of a node library represents the standard version
 * used in {@link WebGPURenderer}. It maps lights, tone mapping
 * techniques and materials to node-based implementations.
 *
 * @private
 * @augments NodeLibrary
 */
declare class StandardNodeLibrary extends NodeLibrary {
    /**
     * Constructs a new standard node library.
     */
    constructor();
}
declare module "../../../materials/MeshPhongMaterial.js" {
    interface MeshPhongMaterialProperties extends MeshPhongNodeMaterialNodeProperties {
    }
}
declare module "../../../materials/MeshStandardMaterial.js" {
    interface MeshStandardMaterialProperties extends MeshStandardNodeMaterialNodeProperties {
    }
}
declare module "../../../materials/MeshPhysicalMaterial.js" {
    interface MeshPhysicalMaterialProperties extends MeshPhysicalNodeMaterialNodeProperties {
    }
}
declare module "../../../materials/MeshToonMaterial.js" {
    interface MeshToonMaterialProperties extends MeshToonNodeMaterialNodeProperties {
    }
}
declare module "../../../materials/MeshBasicMaterial.js" {
    interface MeshBasicMaterialProperties extends MeshBasicNodeMaterialNodeProperties {
    }
}
declare module "../../../materials/MeshLambertMaterial.js" {
    interface MeshLambertMaterialProperties extends MeshLambertNodeMaterialNodeProperties {
    }
}
declare module "../../../materials/MeshNormalMaterial.js" {
    interface MeshNormalMaterialProperties extends MeshNormalNodeMaterialNodeProperties {
    }
}
declare module "../../../materials/MeshMatcapMaterial.js" {
    interface MeshMatcapMaterialProperties extends MeshMatcapNodeMaterialNodeProperties {
    }
}
declare module "../../../materials/LineBasicMaterial.js" {
    interface LineBasicMaterialProperties extends LineBasicNodeMaterialNodeProperties {
    }
}
declare module "../../../materials/LineDashedMaterial.js" {
    interface LineDashedMaterialProperties extends LineDashedNodeMaterialNodeProperties {
    }
}
declare module "../../../materials/PointsMaterial.js" {
    interface PointsMaterialProperties extends PointsNodeMaterialNodeProperties {
    }
}
declare module "../../../materials/SpriteMaterial.js" {
    interface SpriteMaterialProperties extends SpriteNodeMaterialNodeProperties {
    }
}
declare module "../../../materials/ShadowMaterial.js" {
    interface ShadowMaterialProperties extends ShadowNodeMaterialNodeProperties {
    }
}
export default StandardNodeLibrary;
