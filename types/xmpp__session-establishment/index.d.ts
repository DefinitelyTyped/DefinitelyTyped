import { IQCaller } from "@xmpp/iq/caller.js";
import { Entity } from "@xmpp/middleware";
import { StreamFeatures } from "@xmpp/stream-features";

export default sessionEstablishment;

declare function sessionEstablishment<TEntity extends Entity>({
    iqCaller,
    streamFeatures,
}: {
    iqCaller: IQCaller<TEntity>;
    streamFeatures: StreamFeatures<TEntity>;
}): void;
