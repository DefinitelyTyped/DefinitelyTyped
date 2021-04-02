import { CarbonPictogramSize, CarbonPictogramMetadataOutput } from "@carbon/pictograms";
import * as metadata from "@carbon/pictograms/metadata.json";

metadata.icons.forEach(icon => {
    icon.name;
    icon.output.forEach(output => {
        output.moduleName;
        output.descriptor;
    });
});

const size: CarbonPictogramSize = 64;
const output: Pick<CarbonPictogramMetadataOutput, "filepath"> = {
    filepath: "",
};
