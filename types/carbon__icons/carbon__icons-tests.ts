import { CarbonIconSize, CarbonIconMetadataOutput } from "@carbon/icons";
import * as metadata from "@carbon/icons/metadata";

metadata.icons.forEach(icon => {
    icon.name;
    icon.output.forEach(output => {
        output.moduleName;
        output.descriptor;
    });
});

const size: CarbonIconSize = 20;
const output: Pick<CarbonIconMetadataOutput, "filepath"> = { filepath: "" };
