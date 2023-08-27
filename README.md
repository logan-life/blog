# Logan Ayliffe's BLog

The code that runs [my blog](https://loganayliffe.com). Based on the [eleventy-not-so-minimal-blog-starter](https://github.com/Mangamaui/eleventy-not-so-minimal-blog-starter)

To run:

```zsh
npm start
```

In debug mode:

```zsh
DEBUG=* npx eleventy
```

To build

```zsh
npm run build
```

### how to use image shortcode reference

```
{% image {src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c", alt: "A laptop with some lines of code on the screen", className: "image", widths: [300, 600] } %}
```
