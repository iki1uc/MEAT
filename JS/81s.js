// java.runtime
export function SCORE_81(runtime) {

    return runtime.combos.map(combo => ({
        combo,
        score:
            combo.X   * 10 +
            combo.Q   * 20 +
            combo.TMP * 30 +
            combo.RDY * 40
    }));
}
