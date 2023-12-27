---
layout: articleLayout
title: ChatGPT Assist for Plant Care
category: "systems"
excerpt: "How I used ChatGPT to help me take care of my plants."
---

Large Language Models (LLMs) like ChatGPT have severe limitations and should be used with great caution. For certain tasks, they can save a huge amount of time. For an excellent overview of the current state of the art in LLMs, see Simon Willison's August 2023 talk [Catching up on the weird world of LLMs](https://simonwillison.net/2023/Aug/3/weird-world-of-llms/).

I love houseplants and I want my plants to thrive. I decided that I wanted to have a markdown file for each houseplant that contained the information implied by the following headings:

## Water

## Sun

## Soil

## Fertilizer

## Pruning

## Propagation

## Safety

## Common Problems

## Misc

Manually searching this information for the 17 different houseplant species required would take a long time. Thankfully, this turns out to be a great use case for ChatGPT.

Two things make this task a good fit for ChatGPT:

1. The information required, how to take care of a specific plant species, is well-known, well-documented, and does not require any special knowledge to understand. ChatGPT is not good at generating new information, but it is good at regurgitating information that it has seen before.

2. I wanted to get the data back in a particular format - plaintext with markdown headings. One of the major advantages of using ChatGPT is that it is pretty damn good at taking a schema and formatting data to match.

To try and get maximum value out of the effort, I did the first plant file myself. That way I had a fully specified example to provide to ChatGPT to use for inference. The method was simple: give it a plant file, tell it to use that format as the schema, then give it a new plant name and ask it to generate a file for that plant.

Et voila! I now have a markdown file for each of my houseplants that contains all the information I need to take care of them. I can easily add new plants to the list by just asking ChatGPT to generate a new file for a new plant.

Here's the plant files that ChatGPT spit out. I spent some time reviewing them and verifying some of the information. It is possible that there are some hallucinations or errors in there, but mostly the information seems to be correct. I'm pretty happy with the results!

### Houseplant Care Notes

1. [Cholorophytum Comosum - Spider Plant](</blog/houseplant-care-notes/Cholorophytum Comosum - Spider Plant>)
2. [Chrysalidocarpus lutescens - Areca Palm](</blog/houseplant-care-notes/Chrysalidocarpus lutescens - Areca Palm>)
3. [Ficus benjamina - Weeping Fig](</blog/houseplant-care-notes/Ficus benjamina - Weeping Fig>)
4. [Fittonia albivenis - Forest Flame](</blog/houseplant-care-notes/Fittonia albivenis - Forest Flame>)
5. [Hylocereus Undatus - Dragon Fruit](</blog/houseplant-care-notes/Hylocereus Undatus - Dragon Fruit>)
6. [Kalanchoe blossfeldiana - Flaming Katy](</blog/houseplant-care-notes/Kalanchoe blossfeldiana - Flaming Katy>)
7. [Ocimum basilicum - Purple Basil](</blog/houseplant-care-notes/Ocimum basilicum - Purple Basil>)
8. [Ocimum basilicum - Sweet Basil](</blog/houseplant-care-notes/Ocimum basilicum - Sweet Basil>)
9. [Peperomia Obtusifolia - Crocodile Tears](</blog/houseplant-care-notes/Peperomia Obtusifolia - Crocodile Tears>)
10. [Sansevieria (Dracaena 2017) Trifasciata - Snake Plant](</blog/houseplant-care-notes/Sansevieria (Dracaena 2017) Trifasciata - Snake Plant>)
11. [Schefflera arboricola - Dwarf Umbrella Tree](</blog/houseplant-care-notes/Schefflera arboricola - Dwarf Umbrella Tree>)
12. [Sedum Tornado - Stonecrop](</blog/houseplant-care-notes/Sedum Tornado - Stonecrop>)
13. [Senecio Cephalophorus - Mountain Fire](</blog/houseplant-care-notes/Senecio Cephalophorus - Mountain Fire>)
14. [Sinocrassula Yunnanensis - Chinese Jade](</blog/houseplant-care-notes/Sinocrassula Yunnanensis - Chinese Jade>)
15. [Strelitzia Nicolai - Bird of Paradise](</blog/houseplant-care-notes/Strelitzia Nicolai - Bird of Paradise>)
16. [Alocasia Wentii - Hardy Elephant Ear](</blog/houseplant-care-notes/Alocasia Wentii - Hardy Elephant Ear>)

<!-- /files/houseplant-care-notes/Alocasia Wentii - Hardy Elephant Ear.md
/files/houseplant-care-notes/Cholorophytum Comosum - Spider Plant.md
/files/houseplant-care-notes/Chrysalidocarpus lutescens - Areca Palm.md
/files/houseplant-care-notes/Ficus benjamina - Weeping Fig.md
/files/houseplant-care-notes/Fittonia albivenis - Forest Flame.md
/files/houseplant-care-notes/Hylocereus Undatus - Dragon Fruit.md
/files/houseplant-care-notes/Kalanchoe blossfeldiana - Flaming Katy.md
/files/houseplant-care-notes/Ocimum basilicum - Purple Basil.md
/files/houseplant-care-notes/Ocimum basilicum - Sweet Basil.md
/files/houseplant-care-notes/Peperomia Obtusifolia - Crocodile Tears.md
/files/houseplant-care-notes/Sansevieria (Dracaena 2017) Trifasciata - Snake Plant.md
/files/houseplant-care-notes/Schefflera arboricola - Dwarf Umbrella Tree.md
/files/houseplant-care-notes/Sedum Tornado - Stonecrop.md
/files/houseplant-care-notes/Senecio Cephalophorus - Mountain Fire.md
/files/houseplant-care-notes/Sinocrassula Yunnanensis - Chinese Jade.md
/files/houseplant-care-notes/Strelitzia Nicolai - Bird of Paradise.md -->
