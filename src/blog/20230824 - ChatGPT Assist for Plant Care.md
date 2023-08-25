---
layout: articleLayout
title: ChatGPT Assist for Plant Care
date: 2023-08-24
category: "Systems"
excerpt: "How I used ChatGPT to help me take care of my plants."
---

Large Language Models (LLMs) like ChatGPT have severe limitations and should be used with great caution. For certain tasks, they can save a huge amount of time. For an excellent overview of the current state of the art in LLMs, see Simon Willison's excellent talk [Catching up on the weird world of LLMs](https://simonwillison.net/2023/Aug/3/weird-world-of-llms/).

I love houseplants and I want my plants to thrive. I decided that I wanted to have a markdown file for each houseplant that contained the information implied by the following headings:

## Water

## Sun

## Soil

## Fertilizer

## Pruning

## Propogation

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

1. <a href="/files/houseplant-care-notes/Cholorophytum Comosum - Spider Plant.md" download>Cholorophytum Comosum - Spider Plant</a>
2. <a href="/files/houseplant-care-notes/Chrysalidocarpus lutescens - Areca Palm.md" download>Chrysalidocarpus lutescens - Areca Palm</a>
3. <a href="/files/houseplant-care-notes/Ficus benjamina - Weeping Fig.md" download>Ficus benjamina - Weeping Fig</a>
4. <a href="/files/houseplant-care-notes/Fittonia albivenis - Forest Flame.md" download>Fittonia albivenis - Forest Flame</a>
5. <a href="/files/houseplant-care-notes/Hylocereus Undatus - Dragon Fruit.md" download>Hylocereus Undatus - Dragon Fruit</a>
6. <a href="/files/houseplant-care-notes/Kalanchoe blossfeldiana - Flaming Katy.md" download>Kalanchoe blossfeldiana - Flaming Katy</a>
7. <a href="/files/houseplant-care-notes/Ocimum basilicum - Purple Basil.md" download>Ocimum basilicum - Purple Basil</a>
8. <a href="/files/houseplant-care-notes/Ocimum basilicum - Sweet Basil.md" download>Ocimum basilicum - Sweet Basil</a>
9. <a href="/files/houseplant-care-notes/Peperomia Obtusifolia - Crocodile Tears.md" download>Peperomia Obtusifolia - Crocodile Tears</a>
10. <a href="/files/houseplant-care-notes/Sansevieria (Dracaena 2017) Trifasciata - Snake Plant.md" download>Sansevieria (Dracaena 2017) Trifasciata - Snake Plant</a>
11. <a href="/files/houseplant-care-notes/Schefflera arboricola - Dwarf Umbrella Tree.md" download>Schefflera arboricola - Dwarf Umbrella Tree</a>
12. <a href="/files/houseplant-care-notes/Sedum Tornado - Stonecrop.md" download>Sedum Tornado - Stonecrop</a>
13. <a href="/files/houseplant-care-notes/Senecio Cephalophorus - Mountain Fire.md" download>Senecio Cephalophorus - Mountain Fire</a>
14. <a href="/files/houseplant-care-notes/Sinocrassula Yunnanensis - Chinese Jade.md" download>Sinocrassula Yunnanensis - Chinese Jade</a>
15. <a href="/files/houseplant-care-notes/Strelitzia Nicolai - Bird of Paradise.md" download>Strelitzia Nicolai - Bird of Paradise</a>
16. <a href="/files/houseplant-care-notes/Alocasia Wentii - Hardy Elephant Ear.md" download>Alocasia Wentii - Hardy Elephant Ear</a>

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
