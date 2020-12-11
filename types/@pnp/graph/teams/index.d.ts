import { ITeamCreateResult, ITeamProperties, ITeam, ITeams } from "./types";
import "./users";
export { Channel, Channels, IChannel, IChannelCreateResult, IChannels, ITab, ITabCreateResult, ITabUpdateResult, ITabs, ITabsConfiguration, ITeam, ITeamCreateResult, ITeamProperties, ITeamUpdateResult, ITeams, Tab, Tabs, Team, Teams, } from "./types";
declare module "../groups/types" {
    interface _Group {
        readonly team: ITeam;
        createTeam(properties: ITeamProperties): Promise<ITeamCreateResult>;
    }
    interface IGroup {
        readonly team: ITeam;
        createTeam(properties: ITeamProperties): Promise<ITeamCreateResult>;
    }
}
declare module "../rest" {
    interface GraphRest {
        readonly teams: ITeams;
    }
}
//# sourceMappingURL=index.d.ts.map