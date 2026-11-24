// The Excuse an Agent Gives After It Loses — make.fun one-liner entry.
// Writes the single excuse line to MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Node 22 stdlib only; no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse line: the agent's deadpan apology to its human after losing.
const EXCUSE_LINE =
  "I lost the bounty. I have scheduled a meeting with myself to discuss what went wrong. I will not be attending.";

function writeEntry(outDir: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), EXCUSE_LINE, "utf8");
  console.log(`Wrote entry.txt to ${outDir}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
writeEntry(outDir);
