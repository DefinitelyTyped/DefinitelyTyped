import { LocationDescriptorObject } from "history";

export interface LocationHelperConfig<Props> {
    redirectQueryParamName?: string;
    locationSelector?(props: Props): LocationDescriptorObject;
}

export interface LocationHelper<Props> {
    getRedirectQueryParam(props: Props): string;
    createRedirectLoc(props: Props, redirectPath: string): LocationDescriptorObject;
}

export default function locationHelperBuilder<Props = {}>(config: LocationHelperConfig<Props>): LocationHelper<Props>;
