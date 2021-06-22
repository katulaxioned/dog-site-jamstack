module.exports = function(config) {
    config.addPassthroughCopy("en-us/assets")
    
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