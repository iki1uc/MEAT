// regel.js — MEAT_WAY REPAIR

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

// regel.js — MEAT_SCORE REPAIR

export function MEAT_SCORE(meat) {
    return {
        pulse: meat.start.pulse,
        ionCount: Object.keys(meat.start.ion).length,
        echoCount: Object.keys(meat.start.echo).length
    };
}
