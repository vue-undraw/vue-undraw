module.exports = {
  template: {
    favicon: 'https://vuejs.org/images/logo.png'
  },
  title: 'Vue Undraw',
  defaultExample: true,
  usageMode: 'expand',
  components: 'src/components/**/[A-Z]*.vue',
  theme: {
    maxWidth: '100%',
    sidebarWidth: 250,
    color: {
        link: '#5856d6',
        linkHover: 'rgb(70, 69, 171)',
        sidebarBackground: '#41B883',
        errorBackground: '#e22d44'
    }
  },
  styles: {
    StyleGuide: {
      root: {
        'text-rendering': 'optimizeLegibility',
        '-moz-osx-font-smoothing': 'grayscale',
        '-webkit-font-smoothing': 'antialiased'
      },
      sidebar: {},
      content: {
      },
      logo: {
        border: 'none',
        paddingBottom: 0
      }
    },
    Logo: {
      logo: {
        color: '#35485E',
        fontSize: 24,
        fontWeight: 200,
        textAlign: 'center'
      }
    },
    Playground: {
			preview: {
				paddingLeft: '1rem',
				paddingRight: '1rem',
				borderWidth: [[0, 0, 1, 0]],
        borderRadius: 0,
        backgroundColor: '#f4f4f4'
			},
		},
    Markdown: {
			pre: {
				border: 0,
				background: 'none',
			},
			code: {
				fontSize: 14,
			},
		},
    ComponentsList: {
      list: {
        '& ul': {
            paddingLeft: 0
        }
      },
      item: {
        'padding': '4px 0px',
        '& a': {
            'color': 'rgba(255, 255, 255, 0.9) !important',
            'fontWeight': 500,
            '&:hover': {
                textDecoration: 'underline',
                color: '#fff !important',
                cursor: 'pointer'
            }
        }
      },
      heading: {
        fontSize: '18px !important',
        fontWeight: '600 !important',
        color: '#fff !important'
      }
    }
  },
  styleguideDir: 'docs'
}
