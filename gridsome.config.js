// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'CoMuCO-ESMS',
  siteUrl: 'https://comuco-esms.netlify.app/',
  plugins: [
    {
      use: 'gridsome-plugin-matomo',
      options: {
        host: '//stats.passis.fr',
        siteId: 2
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/docs/*','/recrutement/*'],
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'People',
        path: './content/team/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Job',
        path: './content/jobs/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Challenge',
        path: './content/commandoux/*.md',
        refs: {
          team: 'People',
          profil1: 'People',
          profil2: 'People',
        },
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Article',
        path: './content/articles/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
        },
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Action',
        path: './content/actions/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
        },
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'GooseStep',
        path: './content/goose/steps/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'GooseCard',
        path: './content/goose/cards/*.md',
        refs: {
          step: 'GooseStep'
        },
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'DiagFlashCat',
        path: './content/diag/cat/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'DiagFlashCriterion',
        path: './content/diag/*.md',
        refs: {
          cat: 'DiagFlashCat'
        },
      }
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [
          'en-gb',
          'fr-fr'
        ],
        pathAliases: {
          'en-gb': 'en',
          'fr-fr': 'fr'
        },
        fallbackLocale: 'en-gb', // fallback language
        defaultLocale: 'fr-fr', // default language
        rewriteDefaultLanguage: false,
        messages: {
          'en-gb': require('./src/locales/en-gb.json'), // Messages files
          'fr-fr': require('./src/locales/fr-fr.json'),
        },
      },
    },
  ],
  transformers: {
    remark: {
      autolinkHeadings: false,
      plugins: [
        'remark-attr',
        [
          'gridsome-plugin-remark-container',
          {
            customTypes: {
              steps: {
                 keyword: 'steps',
                 customBlock: true,
                 tagName: 'div',
                 properties: {
                   class: 'steps'
                 }
               },
            },
            useDefaultTypes: false,
            tag: ':::',
            icons: 'none',
            classMaster: 'md'
          }
        ]
      ]
    }
  },
  templates: {
    People: '/equipe/:id',
    Job: '/recrutement/:slug',
    Challenge: '/commando-ux/:slug',
    Article: '/articles/:slug',
    Action: '/actions/:slug',
    Tag: '/tag/:id',
  },
  prefetch: {
    mask: '^$', // example - disable all prefetch
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
}
