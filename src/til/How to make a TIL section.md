---
layout: tilLayout
title: How to make a TIL section
date: 2023-07-31
topic: "11ty"
---

Getting up and running with 11ty and extending the default starter to include a TIL section.

<!-- excerpt -->

Inspired by the truly excellent and consistent TILs published by Simon Willison over at [til.simonwillison.net](https://til.simonwillison.net/), I wanted to add a TIL section to my own site.

I'm using the [11ty](https://www.11ty.dev/) static site generator, and I wanted to keep the TILs in the same repo as the rest of the site. I also wanted to keep the TILs in markdown files, and I wanted to be able to add tags to them.

I decided to avoid re-using the components and collections used for blogging to keep a clear separation between the two. This was trivially easy as it just involved duplicating the blog functional components and renaming them appropriately.

New files required:

- **til.njk** - the top level template for the TIL section at `/til/`. Pulls data from `collections.til` and passes it to the `til-list.njk` component.

- **topic.njk** - the template for the topic pages at `/til/{some topic}/`. Sets the `tils` object to the relevant topic and passes it to the `tilList.njk` component.

- **tilList.njk** - uses whatever data is stored in the `tils` object and displays it in a list.

- **topicNav.njk** - a component to display the list of topics and links to the topic pages for each.

- **tilLayout.njk** - a component to display the TIL content. This is the same as the `articleLayout.njk` component used for blog posts, but with the updated permalink structures.
