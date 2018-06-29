/**
 * Requests
 */
import {
  get,
  live,
  TeamsRequestObject,
  AwardsRequestObject,
  EventsRequestObject,
  RankingsRequestObject,
  SeasonRankingsRequestObject,
  SkillsRequestObject,
  MatchesRequestObject,
  TeamsResponseObject,
  AwardsResponseObject,
  EventsResponseObject,
  RankingsResponseObject,
  SeasonRankingsResponseObject,
  SkillsResponseObject,
  MatchesResponseObject,
  size,
  cache
} from "./index";

get("teams", { number: "3796B" });
get("awards", { order: 1 });
get("events", { loc_venue: "J.L. Mann High School" });
get("matches", { redscore: 23 });
get("rankings", { wp: 23 });
get("season_rankings", { vrating: 1 });
get("skills", { attempts: 1 });

size("teams", { number: "3796B" });
size("awards", { order: 1 });
size("events", { loc_venue: "J.L. Mann High School" });
size("matches", { redscore: 23 });
size("rankings", { wp: 23 });
size("season_rankings", { vrating: 1 });
size("skills", { attempts: 1 });

let teams = live("teams", { number: "3796B" });
let teams_params: TeamsRequestObject = {};
let teams_current: TeamsResponseObject[] = teams.current();
teams.params(teams_params);
teams.on("fetch", (item: TeamsResponseObject[]) => {});
teams.on("prefetch", (results: TeamsResponseObject[]) => {});
teams.on("item", (item: TeamsResponseObject) => {});
teams.close();

let awards = live("awards", { order: 1 });
let awards_params: AwardsRequestObject = {};
let awards_current: AwardsResponseObject[] = awards.current();
awards.params(awards_params);
awards.on("fetch", (item: AwardsResponseObject[]) => {});
awards.on("prefetch", (results: AwardsResponseObject[]) => {});
awards.on("item", (item: AwardsResponseObject) => {});
awards.close();

let events = live("events", { loc_venue: "J.L. Mann High School" });
let events_params: EventsRequestObject = {};
let events_current: EventsResponseObject[] = events.current();
events.params(events_params);
events.on("fetch", (item: EventsResponseObject[]) => {});
events.close();

let matches = live("matches", { team: "3796B" });
let matches_params: MatchesRequestObject = {};
let matches_current: MatchesResponseObject[] = matches.current();
matches.params(matches_params);
matches.on("fetch", (item: MatchesResponseObject[]) => {});
matches.on("prefetch", (results: MatchesResponseObject[]) => {});
matches.on("item", (item: MatchesResponseObject) => {});
matches.close();

let skills = live("skills", { rank: 23 });
let skills_params: SkillsRequestObject = {};
let skills_current: SkillsResponseObject[] = skills.current();
skills.params(skills_params);
skills.on("fetch", (item: SkillsResponseObject[]) => {});
skills.on("prefetch", (results: SkillsResponseObject[]) => {});
skills.on("item", (item: SkillsResponseObject) => {});
skills.close();

let rankings = live("rankings", { team: "3796N" });
let rankings_params: RankingsRequestObject = {};
let rankings_current: RankingsResponseObject[] = rankings.current();
rankings.params(rankings_params);
rankings.on("fetch", (item: RankingsResponseObject[]) => {});
rankings.on("prefetch", (results: RankingsResponseObject[]) => {});
rankings.on("item", (item: RankingsResponseObject) => {});
rankings.close();

let season_rankings = live("season_rankings", { team: "3796N" });
let season_rankings_params: SeasonRankingsRequestObject = {};
let season_rankings_current: SeasonRankingsResponseObject[] = season_rankings.current();
season_rankings.params(season_rankings_params);
season_rankings.on("fetch", (item: SeasonRankingsResponseObject[]) => {});
season_rankings.on("prefetch", (results: SeasonRankingsResponseObject[]) => {});
season_rankings.on("item", (item: SeasonRankingsResponseObject) => {});
season_rankings.close();
