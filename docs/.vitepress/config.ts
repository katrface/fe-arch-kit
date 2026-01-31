import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru-RU',
  title: "FE Arch-kit",
  description: "Набор архитектурных решений для Frontend приложений",

  base: '/fe-arch-kit/',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/fe-arch-kit/logo.svg' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Каталог решений', link: '/todo' }
    ],

    sidebar: [
      {
        text: 'Введение',
        items: [
          { text: 'Что такое Fe Arch-kit', link: '/todo' },
          { text: 'Зачем Fe Arch-kit', link: '/motivation' },
          { text: 'Первые шаги', link: '/todo' },
        ]
      },
      {
        text: 'Пресеты архитектуры',
        items: [
          { text: 'FSD', link: '/todo' },
          { text: 'FEOD', link: '/todo' },
        ]
      },
      {
        text: 'Решения по структуре проекта',
        base: '/solutions',
        items: [
          { text: 'Слой app', link: '/app-layer' },
          { text: 'Слой pages', link: '/pages-layer' },
          { text: 'Слой widgets', link: '/widgets-layer' },
          { text: 'Слой shared', link: '/shared-layer' },
          { text: 'Слой api', link: '/api-layer' },
          { text: 'Public API', link: '/public-api' },
          { text: 'Mini-app', link: '/mini-app' },
          // { text: 'Срез по ограниченным контекстам', link: '/api-examples' },
          // { text: 'Слой domain', link: '/domain-layer' },
        ]
      },
      {
        text: 'Решения по требованиям',
        items: [
          { text: 'Runtime валидация', link: '/todo' },
          { text: 'Микрофронты', link: '/todo' },
        ]
      },
      {
        text: 'Теория',
        items: [
          { text: 'Черный ящик', link: '/theories/black-box' },
          { text: 'Горизонтальный слой', link: '/todo' },
          { text: 'Вертикальный срез', link: '/todo' },
          { text: 'DDD - контексты и их домены', link: '/todo' },
          { text: 'Самодостаточность компонента', link: '/todo' },
          { text: 'Бизнес логика', link: '/todo' },
          { text: 'UI логика', link: '/todo' },
          { text: 'Поток данных', link: '/todo' },
        ]
      },
    ],

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },

    outline: {
      label: 'На этой странице'
    },
    
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Наверх',
    darkModeSwitchLabel: 'Оформление',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему'

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },

  locales: {
    root: {
      label: 'Русский',
      lang: 'ru-RU',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
    },
  },

  markdown: {
    container: {
      tipLabel: 'ПОДСКАЗКА',
      warningLabel: 'ВНИМАНИЕ',
      dangerLabel: 'ОПАСНО',
      infoLabel: 'ИНФОРМАЦИЯ',
      detailsLabel: 'ПОДРОБНОСТИ'
    }
  },

  rewrites: {
    'ru/:rest*': ':rest*'
  },
})
