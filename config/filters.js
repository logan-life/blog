const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");

const readableDate = (dateObj) => {
  return DateTime.fromJSDate(dateObj, {
    zone: "Europe/Amsterdam",
  })
    .setLocale("en")
    .toLocaleString(DateTime.DATE_FULL);
};

const permalinkDate = (dateObj) => {
  return DateTime.fromJSDate(dateObj, {
    zone: "Europe/Amsterdam",
  }).toFormat("yyyy/MM/dd");
};

const md = (content) => {
  return markdownIt({ html: true }).render(content);
};

module.exports = {
  readableDate,
  md,
  permalinkDate,
};
