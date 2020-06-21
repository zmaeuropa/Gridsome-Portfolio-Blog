// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',

  templates: {
    Tag: '/tag/:id'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs:{
          tags: {
            typeName: 'Tag',
            create: true
          }
        },
        

        remark: {
         
          // remark options
        }
      }
    },
  ],
  transformers: {
    remark: {
      // global remark options
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
