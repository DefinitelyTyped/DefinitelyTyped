import { CycloneDXBom } from "cyclonedx";
import { sbom1_2 } from "./cyclonedx_v1_2-tests";
import { sbom1_3 } from "./cyclonedx_v1_3-tests";
import { sbom1_4 } from "./cyclonedx_v1_4-tests";

const boms: CycloneDXBom[] = [
    sbom1_2,
    sbom1_3,
    sbom1_4,
];
