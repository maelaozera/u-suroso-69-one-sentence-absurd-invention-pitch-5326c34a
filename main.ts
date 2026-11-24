// One-Sentence Absurd Invention Pitch
// Entry for make.fun competition
// u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a
//
// The program writes a single sentence pitching a ridiculous invention
// that fixes a tiny everyday annoyance: the socks that vanish in the wash.
// The invention is a sock drawer that holds a weekly tribunal, where the
// lonely survivors testify and the washing machine gets sentenced.

import { mkdirSync, writeFileSync } from "node:fs";

// The pitch: one sentence, at most 220 characters, naming the annoyance,
// the invention, and its silly mechanism.
const PITCH =
  "A sock drawer that holds a weekly tribunal where single socks testify " +
  "about their missing partners, then sentences the washing machine to " +
  "community service.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const text = PITCH.trim();

  if (text.length < 1 || text.length > 220) {
    throw new Error(
      `Entry must be 1 to 220 characters, got ${text.length}.`,
    );
  }

  // One sentence only: exactly one sentence-ending full stop, at the end.
  const terminators = text.slice(0, -1).match(/[.!?]/g) ?? [];
  if (terminators.length > 0 || !text.endsWith(".")) {
    throw new Error("Entry must be exactly one sentence.");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
  console.log(`Wrote ${text.length} characters to ${OUTPUT_PATH}`);
}

main();
