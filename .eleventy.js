const markdownIt = require("markdown-it")
const markdownItAttrs = require("markdown-it-attrs")
const markdownItContainer = require("markdown-it-Container")


module.exports = function(config) {
    config.addPassthroughCopy("en-us/assets")

    let options = {
        html: true,
        breaks: true,
        linkify: true
      };

    let markdownLib = markdownIt(options)
    .use(markdownItAttrs)
    .use(markdownItContainer, "dogsrandom")
    .use(markdownItContainer, "about")

    config.setLibrary("md", markdownLib);
    
    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html","njk","md"], 
        dir: {
            input: ".",
            output: "_site",
            include: "_includes"
        }
    }
}