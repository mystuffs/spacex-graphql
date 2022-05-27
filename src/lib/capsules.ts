import { fetch } from "undici";

function applyGraphQLStruct(
    id: string,
    landings: number,
    mission: string,
    originalLaunch: Date,
    reuseCount: number,
    type: string,
    order: string,
    sort: string,
    limit?: number,
    offset?: number,
    ) {
        const graphQLQuery = `
        query {
            capsules(find: {
                id: "${id}",
                landings: ${landings},
                original_launch: ${originalLaunch},
                mission: ${mission},
                reuse_count: ${reuseCount},
                type: ${type}
            },
            limit: ${limit ?? 10},
            offset: ${offset ?? 10},
            order: ${order}
            ) {
              id
              dragon {
                active
                crew_capacity
                description
                diameter {
                    feet
                    meters
                }
                dry_mass_kg
                dry_mass_lb
                first_flight
                heat_shield {
                    dev_partner
                    material
                    size_meters
                    temp_degrees
                }
                height_w_trunk {
                    feet
                    meters
                }
                id
                launch_payload_mass {
                    kg
                    lb
                }
                launch_payload_vol {
                    cubic_meters
                    cubic_feet
                }
                name
                orbit_duration_yr
                pressurized_capsule {
                    payload_volume {
                        cubic_feet
                        cubic_meters
                    }
                }
                return_payload_mass {
                    kg
                    lb
                }
                return_payload_vol {
                    cubic_feet
                    cubic_meters
                }
                sidewall_angle_deg
                thrusters {
                    amount
                    fuel_1
                    fuel_2
                    pods
                    thrust {
                        kN
                        lbf
                    }
                    type
                }
                trunk {
                    cargo {
                        solar_array
                        unpressurized_cargo
                    }
                    trunk_volume {
                        cubic_feet
                        cubic_meters
                    }
                }
                type
                wikipedia
            }
        }
    }
    `;
}

export default async function getCapsulesData<T>(
    id: string,
    landings: number,
    mission: string,
    originalLaunch: Date,
    reuseCount: number,
    status: string,
    type: string,
    limit?: number,
    offset?: number,
    ): Promise<T> {
    const f = await fetch("https://api.spacex.land/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            query: applyGraphQLStruct(
                id,
                landings,
                mission,
                originalLaunch,
                reuseCount,
                status,
                type,
                limit,
                offset,
            ),
            variables: {
                id,
                landings,
                mission,
                originalLaunch,
                reuseCount,
                status,
                type,
                limit,
                offset,
            },
        }),
    });
    const json = await f.json();
    return json as T;
}
