export class Team {
  create(obj: any): Promise<OnfleetTeam>;
  deleteOne(id: string): Promise<void>;
  get(): Promise<OnfleetTeam[]>;
  get(id: string): Promise<OnfleetTeam>;
  insertTask(id: string, obj: { tasks: string[] }): Promise<OnfleetTeam>;
  update(id: string, obj: UpdateTeamProps): Promise<OnfleetTeam>;
}

export interface OnfleetTeam {
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
export interface CreateTeamProps {
  managers: string[];
  name: string;
  workers: string[];
  hub?: string;
}

export interface UpdateTeamProps {
  managers?: string[];
  name?: string;
  workers?: string[];
  hub?: string;
}
