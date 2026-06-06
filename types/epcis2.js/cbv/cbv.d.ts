export default cbv;
declare namespace cbv {
    namespace bizSteps {
        const accepting: string;
        const arriving: string;
        const assembling: string;
        const collecting: string;
        const commissioning: string;
        const consigning: string;
        const creating_class_instance: string;
        const cycle_counting: string;
        const decommissioning: string;
        const departing: string;
        const destroying: string;
        const disassembling: string;
        const dispensing: string;
        const encoding: string;
        const entering_exiting: string;
        const holding: string;
        const inspecting: string;
        const installing: string;
        const killing: string;
        const loading: string;
        const other: string;
        const packing: string;
        const picking: string;
        const receiving: string;
        const removing: string;
        const repackaging: string;
        const repairing: string;
        const replacing: string;
        const reserving: string;
        const retail_selling: string;
        const sampling: string;
        const sensor_reporting: string;
        const shipping: string;
        const staging_outbound: string;
        const stock_taking: string;
        const stocking: string;
        const storing: string;
        const transporting: string;
        const unloading: string;
        const unpacking: string;
        const void_shipping: string;
    }
    namespace dispositions {
        const active: string;
        const available: string;
        const completeness_inferred: string;
        const completeness_verified: string;
        const conformant: string;
        const container_closed: string;
        const container_open: string;
        const damaged: string;
        const destroyed: string;
        const dispensed: string;
        const disposed: string;
        const encoded: string;
        const expired: string;
        const in_progress: string;
        const in_transit: string;
        const inactive: string;
        const mismatch_instance: string;
        const mismatch_class: string;
        const mismatch_quantity: string;
        const needs_replacement: string;
        const no_pedigree_match: string;
        const non_conformant: string;
        const non_sellable_other: string;
        const partially_dispensed: string;
        const recalled: string;
        const reserved: string;
        const retail_sold: string;
        const returned: string;
        const sellable_accessible: string;
        const sellable_not_accessible: string;
        const stolen: string;
        const unavailable: string;
        const unknown: string;
    }
    namespace businessTransactionTypes {
        const bol: string;
        const cert: string;
        const desadv: string;
        const inv: string;
        const pedigree: string;
        const po: string;
        const poc: string;
        const prodorder: string;
        const recadv: string;
        const rma: string;
        const testprd: string;
        const testres: string;
        const upevt: string;
    }
    namespace sourceDestinationTypes {
        const owning_party: string;
        const possessing_party: string;
        const location: string;
    }
    namespace errorReasonIdentifiers {
        const did_not_occur: string;
        const incorrect_data: string;
    }
    namespace sensorMeasurementTypes {
        const absolute_humidity: string;
        const absorbed_dose: string;
        const absorbed_dose_rate: string;
        const acceleration: string;
        const altitude: string;
        const amount_of_substance: string;
        const amount_of_substance_per_unit_volume: string;
        const angle: string;
        const angular_acceleration: string;
        const angular_momentum: string;
        const angular_velocity: string;
        const area: string;
        const capacitance: string;
        const conductance: string;
        const conductivity: string;
        const count: string;
        const density: string;
        const dimensionless: string;
        const dose_equivalent: string;
        const dose_equivalent_rate: string;
        const dynamic_viscosity: string;
        const electric_charge: string;
        const electric_current: string;
        const electric_current_density: string;
        const electric_field_strength: string;
        const energy: string;
        const exposure: string;
        const force: string;
        const frequency: string;
        const illuminance: string;
        const inductance: string;
        const irradiance: string;
        const kinematic_viscosity: string;
        const length: string;
        const linear_momentum: string;
        const luminance: string;
        const luminous_flux: string;
        const luminous_intensity: string;
        const magnetic_flux: string;
        const magnetic_flux_density: string;
        const magnetic_vector_potential: string;
        const mass: string;
        const mass_concentration: string;
        const mass_flow_rate: string;
        const mass_per_area_time: string;
        const memory_capacity: string;
        const molality_of_solute: string;
        const molar_energy: string;
        const molar_mass: string;
        const molar_volume: string;
        const power: string;
        const pressure: string;
        const radiant_flux: string;
        const radiant_intensity: string;
        const radioactivity: string;
        const relative_humidity: string;
        const resistance: string;
        const resistivity: string;
        const solid_angle: string;
        const specific_volume: string;
        const speed: string;
        const surface_density: string;
        const surface_tension: string;
        const temperature: string;
        const time: string;
        const torque: string;
        const voltage: string;
        const volume: string;
        const volume_flow_rate: string;
        const volume_fraction: string;
        const volumetric_flux: string;
        const wave_number: string;
    }
    namespace alarmTypes {
        const alarm_condition: string;
        const error_condition: string;
    }
    namespace actionTypes {
        export const observe: string;
        export const add: string;
        const _delete: string;
        export { _delete as delete };
    }
    namespace components {
        export const x: string;
        export const y: string;
        export const z: string;
        export const axial_distance: string;
        export const azimuth: string;
        export const height: string;
        export const spherical_radius: string;
        export const polar_angle: string;
        export const elevation_angle: string;
        export const easting: string;
        export const northing: string;
        export const latitude: string;
        export const longitude: string;
        const altitude_1: string;
        export { altitude_1 as altitude };
    }
}
