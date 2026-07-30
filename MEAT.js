// MEAT.js — FINAL REPAIR VERSION

export function MEAT(input = {}) {

    /* -------------------------------
       1) STARTWERTE NORMALISIEREN
    --------------------------------*/
    const start = {
        pulse: input.pulse ?? 0,
        ion: input.ion ?? {},
        mia: input.mia ?? {},
        echo: input.echo ?? {}
    };

    /* -------------------------------
       2) OPTIONEN FÜR ALLE ACHSEN
    --------------------------------*/
    const options = {
        SYN: {
            fusion: start.mia.fusion ?? 0,
            resonance: start.echo.resonance ?? 0,
            sync: start.pulse
        },

        VEC: {
            pulse: start.ion.pulse ?? 0,
            warp: start.ion.warp ?? 0,
            charge: start.ion.charge ?? 0,
            vector: (start.ion.pulse ?? 0) * 2
        },

        FLX: {
            amplitude: start.echo.amplitude ?? 0,
            resonance: start.echo.resonance ?? 0,
            origin: start.echo.origin ?? 0,
            flux: (start.echo.amplitude ?? 0) + start.pulse
        },

        ARC: {
            lastPulse: start.pulse,
            lastIon: start.ion,
            lastFusion: start.mia,
            lastEcho: start.echo,
            arcState: start.pulse + (start.ion.pulse ?? 0)
        }
    };

    /* -------------------------------
       3) SEQUENCER — REIHENFOLGE
    --------------------------------*/
    const sequence = [
        "SYN_CORE",
        "VEC_CORE",
        "FLX_CORE",
        "TEAM",
        "ARC_CORE"
    ];

    /* -------------------------------
       4) MEAT OBJEKT ZURÜCKGEBEN
    --------------------------------*/
    return {
        mode: "meat",
        start,
        options,
        sequence,
        timestamp: Date.now()
    };
}
