export function verteiler(values) {
    return {
        SYN:   values[0] ?? null,
        VEC:   values[1] ?? null,
        FLX:   values[2] ?? null,
        ARC:   values[3] ?? null,
        TEAM:  values[4] ?? null,
        ANKER: values[5] ?? null
    };
}
