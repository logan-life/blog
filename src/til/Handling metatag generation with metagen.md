---
layout: tilLayout
title: Automating metatag generation with metagen
topic: "metagen"
excerpt: "Just wrapped up implementing metagen to handle meta tag generation for my site. It's a really nice package that makes it easy to generate the correct meta tags for each page."
---

Just wrapped up implementing [metagen](https://metagendocs.netlify.app/docs/intro) to handle meta tag generation for my site. It's a really nice package that makes it easy to generate the correct meta tags for each page.

I'm using it in conjunction with [11ty](https://www.11ty.dev/) and [eleventy-plugin-metagen](https://www.npmjs.com/package/eleventy-plugin-metagen) to generate the tags at build time.

I created a file `metadata.json` with the following data:

```json
{
  "globalTitle": "Logan Ayliffe",
  "baseUrl": "https://www.loganayliffe.com/",
  "language": "en",
  "locale": "en_US",
  "generator": "eleventy",
  "globalType": "website",
  "site_name": "Logan Ayliffe",
  "globalDescription": "Exploring ideas and sharing projects related to the web, climate change, neurodiversity, immigrant life, and more.",
  "author": {
    "name": "Logan Ayliffe",
    "email": "lmayliffe@gmail.com"
  },
  "globalImage": "https://www.loganayliffe.com//assets/images/social-image.jpg",
  "globalImageAlt": "loganayliffe.com in white text in a green bubble. In the background are a variety of potted houseplants. ",
  "globalImageType": "image/jpg",
  "globalImageHeight": "680",
  "globalImageWidth": "1300",
  "twitterCardType": "summary_large_image",
  "twitterHandle": "logan_ayliffe",

  "blogFeed": {
    "url": "https://www.loganayliffe.com/blog-feed.xml",
    "title": "Logan Ayliffe Blog",
    "subtitle": "The feed for my blog, wherein I explore ideas and share projects related to the web, climate change, neurodiversity, immigrant life, and more."
  },
  "tilFeed": {
    "url": "https://www.loganayliffe.com/til-feed.xml",
    "title": "Logan Ayliffe TIL",
    "subtitle": "The feed for my TIL (Today I Learned) posts, wherein I share mostly work-related things I've learned."
  },
  "blogMetadata": {
    "articleType": "article"
  },
  "tilMetadata": {
    "articleType": "article"
  }
}
```

Then I added a metagen specific shortcode to my root layout template `pageLayout.njk`:

```njk
    title = title or metadata.globalTitle,
    desc = excerpt or metadata.globalDescription,
    type = type or metadata.globalType,
    img = image or metadata.globalImage,
    img_alt = imageAlt or metadata.globalImageAlt,
    url = page.url | url | absoluteUrl(metadata.baseUrl),
    name = metadata.author.name,
    generator = metadata.generator,
    site_name = metadata.globalTitle,
    twitter_card_type = metadata.twitterCardType,
    twitter_handle = metadata.twitterHandle
```

And bam! I have meta tags for each page that are generated at build time. I can also override the default values in the front matter of each page if I want to.

Here's an example of the meta tags generated for this page:

```njk
 {% metagen
    title = title or metadata.globalTitle,
    desc = excerpt or metadata.globalDescription,
    type = type or metadata.globalType,
    img = image or metadata.globalImage,
    img_alt = imageAlt or metadata.globalImageAlt,
    url = page.url | url | absoluteUrl(metadata.baseUrl),
    name = metadata.author.name,
    generator = metadata.generator,
    site_name = metadata.globalTitle,
    twitter_card_type = metadata.twitterCardType,
    twitter_handle = metadata.twitterHandle
 %}
```
