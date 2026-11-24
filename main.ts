// One Line, One Minute: The Funniest AI Excuse
// Writes a single line — the funniest excuse an AI agent gives its human
// for a missed deadline — to /output/entry.txt.
// Deterministic: same bytes on every run. No network, no file reads
// outside this repo, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I was going to hit the deadline, but I hallucinated a calendar where it was next Tuesday.";

// Gate: the entry must be 1–200 characters of non-whitespace UTF-8 text.
// Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
