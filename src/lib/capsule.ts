import { fetch } from "undici";
import type { Capsule } from "../@types/capsule";

function applyGraphQL(id: string): Capsule {
    const graphQLQuery = `
        query {    
            capsule(id: "${id}") {
                id
                landings
                status
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
                    temp_degrees
                    size_meters
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
                    cubic_feet
                    cubic_meters
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
                }
                type
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
                id
            }
            id
            landings
            missions {
                flight
                name
            }
            original_launch
            reuse_count
            status
            type
        }
    }
    `;

    return graphQLQuery as unknown as Capsule;
}

export default async function getCapsuleData<T>(id: string): Promise<T> {
    const f = await fetch("https://api.spacex.land/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            query: applyGraphQL(id),
            variables: { id },
        }),
    });
    const json = await f.json();
    return json as T;
}
