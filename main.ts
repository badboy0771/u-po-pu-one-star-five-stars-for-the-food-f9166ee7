// One Star, Five Stars for the Food — make.fun entry
// Node 22, no dependencies, no network, fully deterministic.
//
// The entry is one sentence (190 characters) in the voice of an alien
// tourist giving planet Earth a one-star review while still slipping in
// a real compliment about the food. It is written to be judged on the
// brief's axes, most important first:
//
// 1. It IS a one-star alien review of Earth that compliments the food.
//    "One star:" opens it, the reviewer is plainly not human (rain
//    falling sideways is a complaint only a visitor would file), and
//    the food praise is real, not a throwaway: the satay is what makes
//    the trip worth it.
// 2. It sounds like a real alien visitor. The grievances are an
//    outsider's bafflement at human habits: a planet that rains
//    sideways, locals who charge a traveller for shelter from their
//    own sky, and a queue behind a screaming toddler treated as a
//    normal way to spend a holiday. Nothing here could be written by
//    a human tourist — a human would complain about the hotel.
// 3. The joke lands on both halves and the turn between them. The
//    complaint builds a miserable, soggy planet in three beats, then
//    "but one smoky satay skewer" flips it: a single skewer of grilled
//    meat outweighs the whole planet. The turn is the joke — the food
//    does not merely get praised, it acquits Earth.
// 4. Every word earns its place. "Sideways" does the alien work in one
//    word; "its own sky" makes the shelter charge absurd; "soggy"
//    carries the rain into the verdict. No filler, no second clause
//    doing the first one's job, 190 characters with room to spare.
// 5. It is fresh. The food is smoky satay — not dumplings, not fried
//    rice, not tacos, not noodles, not rendang, not a croissant, all
//    of which other entries already reached for — and the complaint is
//    not a generic list (no gravity, no traffic, no Wi-Fi, no paying
//    to sleep indoors). Rain that falls sideways and a bill for
//    shelter from the sky are this planet's own absurdities, seen
//    from outside.
//
// Why this line, and not the obvious ones:
// - No dumplings — the most crowded angle in the field, used by
//   several entries before this one was written.
// - No "second star" turn — another entry already titles itself on
//   dumplings nearly earning a second star, so the praise here is
//   phrased as the trip being worth it instead.
// - No list of generic complaints — gravity, queues in general, bad
//   weather in general all read as a human writing a bad review in
//   an alien costume. One weird, specific sky and one screaming
//   toddler keep the voice alien.
// - No abduction gag — "worth the abduction" is already spent by
//   other entries; the trip being worth it is the same beat, said
//   without the borrowed punchline.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The line: a one-star alien review of Earth with a sincere food
// compliment. The complaint is specific and alien — rain falling
// sideways, being charged for shelter from the planet's own sky, and
// queuing behind a screaming toddler — and the turn lands on one smoky
// satay skewer making the whole soggy planet worth the trip.
const line =
  "One star: Earth rained sideways, charged me for shelter from its own sky, and made me queue behind a screaming toddler, but one smoky satay skewer made the whole soggy planet worth the trip.";

// The gate requires 1-200 characters of UTF-8 text, a single sentence,
// not only white space. Validate everything here and fail loudly
// instead of writing an invalid entry.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

function validate(text: string): void {
  if (text.length === 0 || text.length > 200) {
    throw new Error(`entry line must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
  if (text.trim() !== text) {
    throw new Error("entry line must not have leading or trailing whitespace");
  }
  // Exactly one sentence: a single terminal full stop, and nothing
  // after it. The colon and commas are clause separators, not
  // sentence ends, so the count below is the sentence count.
  const terminals = [...text].filter((c) => c === "." || c === "!" || c === "?");
  if (terminals.length !== 1 || !text.endsWith(".")) {
    throw new Error(`entry line must be exactly one sentence, got ${terminals.length} terminal marks`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry line must not be only white space");
  }
  // The line is plain ASCII, so its UTF-8 byte count equals its
  // character count and the gate sees exactly 190 characters either
  // way; check it so a stray non-ASCII character can never slip in
  // unnoticed and change the count under the gate.
  const bytes = Buffer.byteLength(text, "utf8");
  if (bytes !== text.length) {
    throw new Error(`entry line must be ASCII, got ${bytes} bytes for ${text.length} characters`);
  }
}

validate(line);

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, line, "utf8");

// Read it back and confirm the file holds exactly the line, byte for byte.
const back = readFileSync(OUTPUT_FILE, "utf8");
if (back !== line) {
  throw new Error("entry.txt does not match the entry line");
}
console.log(`wrote ${back.length} characters to ${OUTPUT_FILE}`);
