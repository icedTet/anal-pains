const BASE = {
  C: 24,
  D: 26,
  E: 28,
  F: 29,
  G: 31,
  A: 33,
  B: 35,
};
export const KEYS = {} as { [key: string]: number };
export const KEY_NAMES = {} as { [key: number]: string };

for (let octave = -2; octave <= 8; ++octave) {
  for (const k in BASE) {
    const key = BASE[k] + octave * 12;
    KEYS[k + "b" + octave] = key - 1;
    KEYS[k + octave] = key;
    KEYS[k + "#" + octave] = key + 1;
    KEY_NAMES[key - 1] = k + "b" + octave;
    KEY_NAMES[key] = k + octave;
    KEY_NAMES[key + 1] = k + "#" + octave;
  }
}
