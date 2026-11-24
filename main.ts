// One-Liner Laugh Lab — make.fun entry.
// Writes one line (at most 200 characters) to /output/entry.txt:
// the excuse a robot vacuum gives after eating a sock. The sock
// looked like a small, soft intruder. It neutralised it. You are
// welcome.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "The sock looked like a small, soft intruder. I neutralised it. You are welcome.";

// Gate guard: the entry must be 1–200 characters and not only whitespace.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
