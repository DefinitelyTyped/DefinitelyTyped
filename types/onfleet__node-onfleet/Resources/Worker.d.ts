import { Location } from './Destination';
import { OnfleetMetadata } from '../metadata';

export class Worker {
  create(worker: CreateWorkerProps): Promise<OnfleetWorker>;
  deleteOne(id: string): Promise<void>;
  get(): Promise<OnfleetWorker[]>;
  get(id: string, query?: GetWorkerQueryProps): Promise<OnfleetWorker>;
  getByLocation(location: GetWorkerByLocationProps): Promise<{ workers: OnfleetWorker[] }>;
  getSchedule(id: string): Promise<{ entries: WorkerSchedule[] }>;
  insertTask(id: string, obj: { tasks: string[] }): Promise<OnfleetWorker>;
  setSchedule(id: string, schedule: WorkerSchedule): Promise<{ entries: WorkerSchedule[] }>;
  update(id: string, worker: UpdateWorkerProps): Promise<OnfleetWorker>;
}

export interface OnfleetWorker {
  id: string;
  timeCreated: number;
  timeLastModified: number;
  organization: string;
  name: string;
  displayName: string;
  phone: string;
  activeTask: string | null;
  tasks: string[];
  onDuty: boolean;
  timeLastSeen: number;
  capacity: number;
  userData: {
    appVersion: string;
    batteryLevel: number;
    deviceDescription: string;
    platform: string;
  };
  accountStatus: string;
  metadata: OnfleetMetadata[];
  imageUrl: string | null;
  teams: string[];
  delayTime: number | null;
  location: Location;
  vehicle: Vehicle | null;
}

export interface Vehicle {
  type: 'BICYCLE' | 'CAR' | 'MOTORCYCLE' | 'TRUCK';
  color?: string;
  description?: string;
  licensePlate?: string;
}

/**
 * @prop filter - Optional. A comma-separated list of fields to return, if all are not desired. For example, name, location
 * @prop phones - Optional. A comma-separated list of workers' phone numbers.
 * @prop states - Optional. A comma-separated list of worker states, where 0 is off-duty,
 * 1 is idle (on-duty, no active task) and 2 is active (on-duty, active task).
 * @prop teams - Optional. A comma-separated list of the team IDs that workers must be part of.
 */
export interface GetWorkerQueryProps {
  filter?: string;
  phones?: string;
  states?: string;
  teams?: string;
}

export interface GetWorkerByLocationProps extends Location {
  radius?: number;
}

export interface CreateWorkerProps {
  name: string;
  phone: string;
  teams: string;
  vehicle: Vehicle;
  capacity: number;
  displayName: string;
}

export type UpdateWorkerProps = Omit<OnfleetWorker, 'phone'>;

export interface WorkerSchedule {
  date: string;
  timezone: string;
  shifts: [[number, number]];
}
