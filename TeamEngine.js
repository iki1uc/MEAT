// TeamEngine.js
export function TeamEngine(meat, syn, vec, flx) {

    const PQ = {
        meat,
        syn,
        vec,
        flx,
        timestamp: Date.now()
    };

    const PP = {
        valid: Boolean(vec),
        strength: vec?.magnitude ?? null,
        optimized: flx?.flight ?? null
    };

    return {
        mode: "team",
        PQ,
        PP
    };
}
import { MULTILAYER } from "./multilayer.js";

const multi = await MULTILAYER();
const best = multi.layers[multi.way.bestDir];
export function TeamEngine(meat, syn, vec, flx){

    const multi = meat.multi; // multilayer system

    return {
        mode: "team",
        PQ: { meat, syn, vec, flx, multi },
        PP: {
            valid: Boolean(vec),
            strength: vec?.magnitude ?? null,
            optimized: flx?.flight ?? null,
            direction: multi.way.bestName
        }
    };
}
export function ARC_MEAT_PANEL(multi){
    return {
        mode: multi.mode,
        dirs: multi.dirs,
        layers: multi.layers,
        score: multi.score,
        way: multi.way,
        timestamp: multi.timestamp
    };
}
