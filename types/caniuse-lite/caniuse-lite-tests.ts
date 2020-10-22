import {
    agents, features, feature, Agent, Feature, PackedFeature, StatsByAgentID, SupportStatusByVersion, SupportStatus
} from "caniuse-lite";

const chrome: Agent | undefined = agents.chrome;
if (chrome !== undefined) {
    const browser: string = chrome.browser;
    const prefix: string = chrome.prefix;
    const prefixExceptions: any = chrome.prefix_exceptions;
    const usageGlobal: { [version: string]: number | undefined } = chrome.usage_global;
    const releaseDate: { [version: string]: number | undefined } = chrome.release_date;
    const versions: Array<string | null> = chrome.versions;
    consume(browser, prefix, prefixExceptions, usageGlobal, releaseDate, versions);
}

const unpackedFeatures = Object.keys(features).map((id: string) => {
    const packed: PackedFeature = features[id];
    const unpacked: Feature = feature(packed);

    const status: string = unpacked.status;
    const title: string = unpacked.title;
    const stats: StatsByAgentID = unpacked.stats;
    Object.keys(stats).forEach((agentID: string) => {
        const byVersion: SupportStatusByVersion = stats[agentID];
        Object.keys(byVersion).forEach(version => {
            const supportStatus: SupportStatus = byVersion[version];
            consume(supportStatus);
        });

        const supportStatusByVersion: SupportStatusByVersion = stats[agentID];
        const agent: Agent = agents[agentID]!;
        return {
            feature: unpacked,
            agent,
            versions: Object.keys(supportStatusByVersion).map(version => {
                return {
                    version,
                    releaseDate: agent.release_date[version],
                    [`feature_${id}`]: supportStatusByVersion[version]
                };
            })
        };
    });
});

function consume(...anything: any[]): void {
    // ...
}
