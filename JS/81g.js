// 81.js
export function GEN_81() {
    const s = [0, 1, 2];
    const combos = [];

    for (const X of s)
    for (const Q of s)
    for (const TMP of s)
    for (const RDY of s)
        combos.push({ X, Q, TMP, RDY });

    return combos;
}
