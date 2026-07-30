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
