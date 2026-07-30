// X/xTOOM.js

export function XTOOM() {

    // Die 12 XTOM-Werte
    const pool12 = [
        "pulse",
        "ion",
        "mia",
        "echo",
        "fusion",
        "resonance",
        "warp",
        "charge",
        "amplitude",
        "origin",
        "arcState",
        "sequence"
    ];
pulse

ion

mia

echo

fusion

resonance

warp

charge

amplitude

origin

arcState

sequence
    // Aufteilen in 6 Stationen mit je 2 Werten
    const stations6 = [
        pool12.slice(0, 2),
        pool12.slice(2, 4),
        pool12.slice(4, 6),
        pool12.slice(6, 8),
        pool12.slice(8, 10),
        pool12.slice(10, 12)
    ];

    // Jede Station bekommt 3 Achsen, die 360° erfüllen
    const axes3 = ["SYN", "VEC", "FLX"];

    return {
        mode: "XTOM",
        pool12,
        stations6,
        axes3,
        fullCircle: "360°",
        fullPercent: "100%",
        message:
            "Hier sind die 12 XTOM-Werte, verteilt auf 6 Stationen. " +
            "Jede Station erfüllt 3 Achsen vollständig (360° / 100%)."
    };
}
