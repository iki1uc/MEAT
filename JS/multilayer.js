// js/multilayer.js

import { MEAT_MAP } from "./MEAT.js";
import { MEAT_SCORE, MEAT_WAY } from "./regel.js";

export async function MULTILAYER() {

    const dirs = Object.keys(MEAT_MAP);
    const layers = {};

    // Alle 12 CSV-Dateien laden
    for(const d of dirs){
        const txt = await fetch(`./${d}/meat.csv`).then(r => r.text());
        const lines = txt.split("\n").map(x => x.trim()).filter(Boolean);

        layers[d] = {
            name: MEAT_MAP[d],
            raw: lines,
            opt: {
                SYN: lines[0] ?? null,
                VEC: lines[1] ?? null,
                FLX: lines[2] ?? null,
                ARC: lines[3] ?? null,
                TEAM: lines[4] ?? null,
                ANKER: lines[5] ?? null
            }
        };
    }

    // Score berechnen
    const score = MEAT_SCORE({ dirs, data: Object.fromEntries(
        Object.entries(layers).map(([k,v]) => [k, v.raw])
    )});

    // Wegweiser bestimmen
    const way = MEAT_WAY({ dirs, map: MEAT_MAP, data: Object.fromEntries(
        Object.entries(layers).map(([k,v]) => [k, v.raw])
    )});

    return {
        mode: "multilayer",
        dirs,
        layers,
        score,
        way,
        timestamp: Date.now()
    };
}
