declare class Team {
  create(obj: any): Promise<Team.OnfleetTeam>;
  deleteOne(id: string): Promise<void>;
  get(): Promise<Team.OnfleetTeam[]>;
  get(id: string): Promise<Team.OnfleetTeam>;
  insertTask(id: string, obj: { tasks: string[] }): Promise<Team.OnfleetTeam>;
  update(id: string, obj: Team.UpdateTeamProps): Promise<Team.OnfleetTeam>;
}

declare namespace Team {
  interface OnfleetTeam {
    hub: string;
    id: string;
    managers: string[];
    name: string;
    timeCreated: number;
    timeLastModified: number;
    workers: string[];
  }

  /**
   * @prop managers - An array of managing administrator IDs.
   * @prop name - A unique name for the team.
   * @prop workers - An array of worker IDs.
   * @prop hub - Optional. The ID of the team's hub.
   */
  interface CreateTeamProps {
    managers: string[];
    name: string;
    workers: string[];
    hub?: string;
  }

  interface UpdateTeamProps {
    managers?: string[];
    name?: string;
    workers?: string[];
    hub?: string;
  }
}

export = Team;
