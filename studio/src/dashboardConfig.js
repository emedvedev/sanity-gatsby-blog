export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f83ffee6ac59d34b4bca5ab',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-za8hwe4u',
                  apiId: '4a220d68-1053-4afe-8bb5-3013928bc8f5'
                },
                {
                  buildHookId: '5f83ffee55a733305d3bacc7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-iy2p8yt8',
                  apiId: '11fbda0c-7dce-4fd0-b9d4-197215eaf15a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/emedvedev/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-iy2p8yt8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
