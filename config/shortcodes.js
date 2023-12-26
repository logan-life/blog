const Image = require("@11ty/eleventy-img");

const imageShortcode = async (imageObj = {}) => {
  const widths = imageObj.widths || [300, 600, 900, 1200];
  const className = imageObj.className || "image";

  const sizes = "(min-width: 100px) 50vw, 100vw";
  const metadata = await Image(imageObj.src, {
    formats: ["webp"],
    outputDir: "./_site/assets/images/generated/",
    urlPath: "/assets/images/generated/",
    widths: widths,
  });
  const alt = imageObj.alt;

  const imageAttributes = {
    class: className,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
};

const videoShortcode = async (videoObj = {}) => {
  const className = videoObj.className || "video";
  const width = videoObj.width || 640; // Default width
  const height = videoObj.height || 360; // Default height
  const src = videoObj.src || "";
  const type = videoObj.type || "video/mp4";

  const videoAttributes = {
    class: className,
    controls: true,
    loading: "lazy",
    decoding: "async",
    width,
    height,
  };

  return `<video ${Object.entries(videoAttributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ")}><source src="${src}" type="${type}"></video>`;
};

module.exports = {
  imageShortcode,
  videoShortcode,
};
