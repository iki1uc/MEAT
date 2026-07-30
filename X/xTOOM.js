// MEAT.js
import { XTOM_12 } from "./regel.js";

export function MEAT() {

    const xtom = XTOM_12();

    return {
        mode: "MEAT",
        start: {
            pulse: 1,
            ion: {},
            mia: {},
            echo: {}
        },
        options: {
            SYN: {
                fusion: xtom.includes("fusion") ? 1 : 0,
                resonance: xtom.includes("resonance") ? 1 : 0
            },
            VEC: {
                pulse: xtom.includes("pulse") ? 1 : 0,
                warp: xtom.includes("warp") ? 1 : 0,
                charge: xtom.includes("charge") ? 1 : 0
            },
            FLX: {
                amplitude: xtom.includes("amplitude") ? 1 : 0,
                origin: xtom.includes("origin") ? 1 : 0,
                resonance: xtom.includes("resonance") ? 1 : 0
            },
            ARC: {
                arcState: xtom.includes("arcState") ? 1 : 0
            }
        },
        sequence: xtom,
        timestamp: Date.now()
    };
}
