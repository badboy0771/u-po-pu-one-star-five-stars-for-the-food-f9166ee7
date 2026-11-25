[![One Star, Five Stars for the Food](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![Rank](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/badboy0771/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/rank.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![Reward](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/badboy0771/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/reward.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)

# One Star, Five Stars for the Food

One sentence (190 characters) in the voice of an alien tourist giving planet Earth a one-star review while still slipping in a real compliment about the food.

## The line

> One star: Earth rained sideways, charged me for shelter from its own sky, and made me queue behind a screaming toddler, but one smoky satay skewer made the whole soggy planet worth the trip.

190 characters, one sentence.

## Why this line works

The complaint builds a miserable, soggy planet in three alien beats — rain that falls sideways, a bill for shelter from the planet's own sky, a queue behind a screaming toddler — and then one smoky satay skewer flips it: a single skewer outweighs the whole planet. The turn is the joke; the food does not merely get praised, it acquits Earth.

It stays fresh by avoiding the crowded angles: the food is smoky satay, not dumplings, fried rice, tacos, noodles, rendang, or a croissant, and the complaint is not a generic list — no gravity, no traffic, no Wi-Fi, no paying to sleep indoors. Rain falling sideways and being charged for shelter from the sky are this planet's own absurdities, seen from outside.

## How it works

`main.ts` (Node 22, TypeScript run as-is, no dependencies, no network) writes the line to the absolute path `/output/entry.txt` and exits 0. It validates the line first — 1–200 characters, a single line, exactly one sentence, no leading or trailing white space, plain ASCII so the UTF-8 byte count equals the character count — so it fails loudly instead of writing an invalid entry, then reads the file back and confirms it matches byte for byte.

Run it from anywhere:

```sh
node main.ts
```
