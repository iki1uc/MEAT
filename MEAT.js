export function ARC_MEAT_PANEL(meat) {
    return {
        mode: meat.mode,
        dirs: meat.dirs,
        map: meat.map,
        way: MEAT_WAY(meat),
        options: MEAT_OPTIONS(meat),
        timestamp: meat.timestamp
    };
}
