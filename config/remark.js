const remarkPrism = require('remark-prism')
const remarkExternalLink = require('remark-external-links')
const remarkTitle = require('remark-capitalize');
const remarkSlug = require('remark-slug');
const remarkToc =  require('remark-toc');
const remarkAutoLinkHeading = require('remark-autolink-headings');

module.exports = [
  [
    remarkPrism,
    {
      classPrefix: 'language-',
      showLineNumbers: true,
    },
  ],
  [
    remarkExternalLink,
    {
      target: '_blank',
      rel: 'nofollow noopener noreferrer',
    },
  ],
  remarkTitle,
  remarkSlug,  
  [
    remarkToc,
    {
      heading: 'Table of Contents', // the custom header text
      maxDepth: 2 
    }
  ],
  [
    remarkAutoLinkHeading,
    {
      behaviour: 'wrap' 
    }
  ]
]
