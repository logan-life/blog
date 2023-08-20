const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const {
  getAllPosts,
  getAllTILs,
  getCategoryList,
  getTopicList,
  getCategorisedPosts,
  getTopifiedTILs,
} = require("./config/collections");

const { readableDate } = require("./config/filters");
const { md } = require("./config/filters");

const { imageShortcode } = require("./config/shortcodes");

module.exports = function (eleventyConfig) {
  /*================================*/
  /*   plugins and configurations   */
  /*================================*/
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
    excerpt_alias: "excerpt",
  });

  /*===================================================*/
  /* files that need to be copied to the build folder  */
  /*===================================================*/
  eleventyConfig.addPassthroughCopy("./src/assets/images/social-image.jpg");
  eleventyConfig.addPassthroughCopy("./src/assets/icons");
  eleventyConfig.addPassthroughCopy("./src/assets/sprite.svg");
  eleventyConfig.addPassthroughCopy({
    "node_modules/svg-icon-sprite/dist/svg-icon-sprite.js":
      "assets/svg-icon-sprite.js",
  });
  eleventyConfig.addPassthroughCopy("./files");

  /*=================*/
  /*     Layouts     */
  /*=================*/
  // no longer using aliased layouts, instead pointing the config to the layouts folder in return function below
  // eleventyConfig.addLayoutAlias('page', 'layouts/page')
  // eleventyConfig.addLayoutAlias('article', 'layouts/article')
  // eleventyConfig.addLayoutAlias('til', 'layouts/til')

  /*=================*/
  /*   Collections   */
  /*=================*/
  eleventyConfig.addCollection("blog", getAllPosts);
  eleventyConfig.addCollection("til", getAllTILs);
  eleventyConfig.addCollection("categoryList", getCategoryList);
  eleventyConfig.addCollection("topicList", getTopicList);
  eleventyConfig.addCollection("categorisedPosts", getCategorisedPosts);
  eleventyConfig.addCollection("topifiedTILs", getTopifiedTILs);

  /*=================*/
  /*     Filters     */
  /*=================*/
  eleventyConfig.addFilter("readableDate", readableDate);
  eleventyConfig.addFilter("md", md);

  /*=================*/
  /*    shortcodes   */
  /*=================*/
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
      layouts: "_includes/layouts",
    },
    markdownTemplateEngine: "njk",
  };
};
