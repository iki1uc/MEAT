/* -----------------------------------------
   MEAT_WAY — Wegweiser
----------------------------------------- */
export function MEAT_WAY(meat) {

    const score =
        (meat.start.pulse * 3) +
        (Object.keys(meat.start.ion).length * 2) +
        (Object.keys(meat.start.echo).length * 1);

    return {
        bestDir: score > 5 ? "SYN" : "VEC",
        bestScore: score
    };
}

/* -----------------------------------------
   MEAT_SCORE — Grundmessung
----------------------------------------- */
export function MEAT_SCORE(meat) {
    return {
        pulse: meat.start.pulse,
        ionCount: Object.keys(meat.start.ion).length,
        echoCount: Object.keys(meat.start.echo).length
    };
}

/* -----------------------------------------
   ARC_MEAT_PANEL — Dashboard‑Panel
----------------------------------------- */
export function ARC_MEAT_PANEL(meat) {
    return {
        mode: meat.mode,
        start: meat.start,
        options: meat.options,
        sequence: meat.sequence,
        timestamp: meat.timestamp
    };
}

/* -----------------------------------------
   MEAT_METRIC — erweiterte Messung
----------------------------------------- */
export function MEAT_METRIC(meat) {

    return {
        pulse: meat.start.pulse,
        ionCount: Object.keys(meat.start.ion).length,
        miaCount: Object.keys(meat.start.mia).length,
        echoCount: Object.keys(meat.start.echo).length,

        synPower:
            (meat.options.SYN.fusion ?? 0) +
            (meat.options.SYN.resonance ?? 0),

        vecPower:
            (meat.options.VEC.pulse ?? 0) +
            (meat.options.VEC.warp ?? 0) +
            (meat.options.VEC.charge ?? 0),

        flxPower:
            (meat.options.FLX.amplitude ?? 0) +
            (meat.options.FLX.res
