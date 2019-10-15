import { Location } from './Destination';
import { OnfleetMetadata } from '../metadata';

export class Worker {
  get(): Promise<WorkerResult[]>;
  get(id: string): Promise<WorkerResult>;
  get(query: GetWorkerQueryProps): Promise<WorkerResult[]>;
  getByLocation(location: GetWorkerByLocationProps): Promise<{ workers: WorkerResult[] }>;
  getSchedule(id: string): Promise<{ entries: WorkerSchedule[] }>;
  create(worker: CreateWorkerProps): Promise<WorkerResult>;
  setSchedule(id: string, schedule: WorkerSchedule): Promise<{ entries: WorkerSchedule[] }>;
  update(id: string, worker: UpdateWorkerProps): Promise<WorkerResult>;
  insertTask(id: string, obj: { tasks: string[] }): Promise<WorkerResult>;
  deleteOne(id: string): Promise<void>;
}

interface OnfleetWorker {
  name: string;
  phone: string;
  teams: string;
  vehicle: Vehicle;
  capacity: number;
  displayName: string;
}

interface Vehicle {
  type: 'BICYCLE' | 'CAR' | 'MOTORCYCLE' | 'TRUCK';
  color?: string;
  description?: string;
  licensePlate?: string;
}

/**
 * @interface GetWorkerQueryProps
 * @prop filter - Optional. A comma-separated list of fields to return, if all are not desired. For example, name, location
 * @prop phones - Optional. A comma-separated list of workers' phone numbers.
 * @prop states - Optional. A comma-separated list of worker states, where 0 is off-duty,
 * 1 is idle (on-duty, no active task) and 2 is active (on-duty, active task).
 * @prop teams - Optional. A comma-separated list of the team IDs that workers must be part of.
 */
interface GetWorkerQueryProps {
  filter?: string;
  phones?: string;
  states?: string;
  teams?: string;
}

interface GetWorkerByLocationProps extends Location {
  radius?: number;
}

interface CreateWorkerProps extends OnfleetWorker { }

type UpdateWorkerProps = Omit<OnfleetWorker, 'phone'>

interface WorkerSchedule {
  date: string;
  timezone: string;
  shifts: [number, number][];
}

interface WorkerResult {
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
