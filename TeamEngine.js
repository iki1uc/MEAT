// TeamEngine.js — FINAL MEAT FIX

export function TeamEngine(runtime, meat) {

    return {
        mode: "team",

        PQ: {
            runtime,
            meat,
            timestamp: Date.now()
        },

        PP: {
            valid: meat.start.pulse > 0,
            strength: meat.options.VEC.pulse,
            optimized: meat.options.FLX.flux,
            direction: runtime.best81?.bestCombo ?? null
        }
    };
}
