export function WAY_81(runtime) {

    const scores = SCORE_81(runtime);

    let best = scores[0];

    for (const s of scores)
        if (s.score > best.score)
            best = s;

    return {
        bestCombo: best.combo,
        bestScore: best.score
    };
}
