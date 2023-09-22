---
layout: tilLayout
title: How to make gifs from screen recordings using ffmpeg
date: 2023-08-08
topic: "ffmpeg"
---
Gifs can be a helpful way of supplementing documentation with visual examples. Here’s a workflow for doing so using MacOS and ffmpeg.

<!-- excerpt -->

***

- Install ffmpeg with homebrew

```bash
brew install ffmpeg
```

- Record movie using MacOS `Screenshot.app`

- Open recorded movie in `Preview.app` and trim as desired

- Create a palette file from the recorded movie to enhance quality:

```bash
ffmpeg -i input.mov -filter_complex "[0:v] palettegen" palette.png
```

- Use the input movie and the palette file to generate the gif and control the FPS and size.

```bash
ffmpeg -i input.mov -i palette.png -filter_complex "[0:v] fps=10,scale=1600:-1 [new];[new][1:v] paletteuse" input_1600W10FPS.gif
```

So far I find 10FPS and 1600width to be decent for everyday use, e.g. technical documentation in Confluence. Note that the scale parameter `1600:-1` sets the height at -1 in order to preserve aspect ratio.
