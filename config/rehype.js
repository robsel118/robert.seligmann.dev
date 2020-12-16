const rehypeToc = require("@jsdevtools/rehype-toc")

module.exports = [
  [
    rehypeToc,
    {
      cssClasses: {
        toc: "toc", 
        link: "page-link", 
      }
    }
  ]
]