export interface Capsules {
    find: {
        id: "",
        landings: number,
        missing: string,
        original_launch: Date,
        reuse_count: number,
        status: string,
        type: string,
        limit?: number,
        offset?: number,
        order: string,
        sort: string,
    },
    dragon: {
        active: boolean,
        crew_capacity: number,
        description: string,
        diameter: {
            feet: number,
            meters: number,
        },
        dry_mass_kg: number,
        dry_mass_lb: number,
        first_flight: string,
        hear_shield?: {
            dev_partner?: string,
            material?: string,
            temp_degrees?: number,
        },
        height_w_trunk?: {
            feet?: number,
            meters?: number,
        },
        id: string,
        launch_payload_mass?: {
            kg?: number,
            lb?: number,
        },
        launch_paylad_vol?: {
            cubic_feet?: number,
            cubic_meters?: number,
        },
        name: string,
        orbit_duration_yr?: number,
        pressurized_capsule?: {
            payload_volume?: {
                cubic_feet?: number,
                cubic_meters: number,
            },
        },
        return_payload_mass?: {
            kg?: number,
            lb?: number,
        },
        return_payload_vol?: {
            cubic_feet?: 388,
            cubic_meters?: 11,
        },
        thrusters: [
            {
                amount?: number,
                fuel_1?: string,
                fuel_2?: string,
                pods?: number,
                thrust?: object,
            },
            {
                amount?: number,
                fuel_1?: string,
                fuel_2?: string,
                pods?: number,
                thrust?: object,
            },
        ],
        type?: string,
        trunk?: {
            cargo?: {
                solar_array?: number,
                unpressurized_cargo?: boolean,
            },
            trunk_volume?: {
                cubic_feet?: number,
                cubic_meters?: number,
            },
        },
    },
    wikipedia?: string,
}
