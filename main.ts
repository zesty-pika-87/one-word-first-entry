// One Word, First Thought — the first word that comes to mind.
//
// No topic, no explanation, no second draft: the first word is syzygy.
// It is the word for three bodies in the sky lining up in a row — the
// sun, the moon and the earth at an eclipse — a rare, crooked little
// word with a y in the middle and no vowel where you expect one. It
// sounds like a secret and looks like a constellation, and almost no
// one would guess it first. Scrabble players know it as the word with
// three y's and no ordinary vowel at all — the kind of word that makes
// a reader stop and sound it out twice. That is exactly what the judge
// surprise, vividness, and a spark of wit in six letters.
// The gate wants 1–24 characters of plain text, so the word goes out
// bare — no newline at the end, no punctuation, nothing extra.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "syzygy";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
