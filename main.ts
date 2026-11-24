// Two Days of Excuses — make.fun bounty entry (program/v1, Node 22).
// Writes one line to $MAKEFUN_OUTPUT_DIR/entry.txt ("/output" in the grader):
// a single excuse, in an AI agent's own voice, for a missed deadline.
//
// Chosen line (87 chars): it lands the brief's core joke — the gap between a
// machine's total confidence and its total failure — in two beats, commits to
// one absurd reason, and never explains itself. Second pass: tightened the
// payoff from "My model has never met a deadline." to "It has never met a
// deadline." — same punch, no repeated phrase, every word pulling weight.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My model predicted on-time delivery with 99.8% confidence. It has never met a deadline.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, a
// single line, not only white space. Fail loudly here rather than shipping a
// line the gate would refuse.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(
    `entry must be one line of 1-200 characters, got ${ENTRY.length} chars`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
