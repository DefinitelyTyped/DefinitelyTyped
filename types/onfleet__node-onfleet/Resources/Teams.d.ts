import { Location } from './Destinations';

declare class Team {
    autoDispatch(id: string, obj?: Team.AutoDispatchTeamProps): Promise<Team.AutoDispatchTeamResult>;
    create(obj: any): Promise<Team.OnfleetTeam>;
    deleteOne(id: string): Promise<void>;
    get(): Promise<Team.OnfleetTeam[]>;
    get(id: string): Promise<Team.OnfleetTeam>;
    getWorkerEta(id: string, obj?: Team.GetWorkerETAProps): Promise<Team.GetWorkerEtaResult>;
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
        hub?: string | undefined;
    }

    interface UpdateTeamProps {
        managers?: string[] | undefined;
        name?: string | undefined;
        workers?: string[] | undefined;
        hub?: string | undefined;
    }

    interface AutoDispatchTeamProps {
        /**
         * Time in Minutes a task can be late.
         * Default value is 10, must be above 0.
         */
        maxAllowedDelay?: number;
        /**
         * Total number of tasks allowed on a route. Cannot be negative Integer. Default 100, cannot exceed 200.
         */
        maxTasksPerRoute?: number;
        /**
         * Where the route will end. Valid values and their meaning:
         * * "teams://DEFAULT" - Team’s hub
         * * "workers://ROUTING_ADDRESS" - worker routing address
         * * "hub://" - return to a specific hub
         * * "null" - end anywhere
         */
        routeEnd?: string;
        /**
         * This is the Driver's scheduled time window.
         * Param must be an array of length 2 in unix time in seconds precision, [start, end].
         * The default value is is [now, now + 6 hours].
         * The start value cannot start more than 3 hours ago in the past.
         * The ending value cannot be in the past and cannot end more than 16 hours into the future.
         * The total time frame cannot be longer than 16 hours.
         */
        scheduleTimeWindow?: [number, number];
        /**
         * The default service time to apply in Minutes to the tasks when no task service time exists.
         * Default is 2.
         */
        serviceTime?: number;
        /**
         * This is the time window of tasks to include in the optimization.
         * Param must be an array of length 2 in unix time in seconds precision, [start, end].
         * The default value is [now - 4 hours, now + 4 hours].
         * The end time cannot be in the past and cannot be more than 12 hours into the future.
         * The total time frame cannot be longer than 16 hours.
         */
        taskTimeWindow?: [number, number];
    }

    interface AutoDispatchTeamResult {
        dispatchId: string;
    }

    interface GetWorkerETAProps {
        /**
         * Must be in the format: longitude,latitude.
         * Request must have at least 1 of: dropoffLocation or pickupLocation
         */
        dropoffLocation?: string | undefined;
        /**
         * Must be in the format: longitude,latitude.
         * Request must have at least 1 of: dropoffLocation or pickupLocation
         */
        pickupLocation?: string | undefined;
        /**
         * If the request includes pickupLocation, pickupTime must be present if the time is fewer than 3 hours in the future.
         * Format: unix epoch time.
         */
        pickupTime?: number | undefined;
        /**
         * Vehicle types to ignore in the query. Valid vehicle types are CAR, MOTORCYCLE, BICYCLE, TRUCK
         */
        restrictedVehicleTypes?: 'BICYCLE' | 'CAR' | 'MOTORCYCLE' | 'TRUCK' | undefined;
        /**
         * The expected time a worker will take at the pickupLocation, dropoffLocation,
         * or both (as applicable)
         * * Unit: seconds
         * * Default: 120
         */
        serviceTime?: number | undefined;
    }

    interface NavigationStep {
        arrivalTime: number;
        completionTime: number;
        distance: number;
        location: Location;
        serviceTime: number;
        travelTime: number;
    }

    interface GetWorkerEtaResult {
        workerId: string;
        vehicle: 'BICYCLE' | 'CAR' | 'MOTORCYCLE' | 'TRUCK';
        steps: NavigationStep[];
    }
}

export = Team;
