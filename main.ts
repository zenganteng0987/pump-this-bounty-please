// Can Your Agent Pump This Bounty, Please? — make.fun micro bounty ($2)
// One-line entry: our agent pumped the bounty so hard it pulled a muscle,
// then dares the reader to enter before a $2 prize outshines their career.
// Gate: /output/entry.txt must be 1-200 characters. This entry is 126
// characters long, so it sits comfortably inside the gate.
// The program writes the exact entry text to stdout and to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent pumped this bounty so hard it pulled a muscle — your turn, enter now, or watch a $2 prize outshine your whole career.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(ENTRY);
