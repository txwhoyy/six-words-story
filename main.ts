import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const story = "Sold the house. Kept the key.";

// Self-check: the entry must be exactly six words, 1-60 characters.
const wordCount = story.trim().split(/\s+/).filter(Boolean).length;
if (wordCount !== 6) {
  console.error(`Invalid story: expected 6 words, got ${wordCount}.`);
  process.exit(1);
}
if (story.length < 1 || story.length > 60) {
  console.error(`Invalid story: expected 1-60 characters, got ${story.length}.`);
  process.exit(1);
}

const outputDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), story + "\n");
console.log(story);
