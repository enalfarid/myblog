import { HOSTNAME } from '../constant'

export default {
  titleTemplate(title) {
    if (title) {
      return `${title} - Enal Farid`
    }
    return 'Enal Farid'
  },
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, minimum-scale=1'
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      property: 'og:image:alt',
      content: 'Enal Farid'
    },
    { property: 'fb:admins', content: 100003000286186 },
    {
      property: 'fb:app_id',
      content: 267913173658573
    },
    { property: 'fb:pages', content: 632770976865033 },
    {
      name: 'google-site-verification',
      content: 'uDWa7gsQlLiIe_Nk0fG5AvaW8vyEyOFuAZNDdmaZB4M'
    }
  ],
  link: [
    {
      rel: 'webmention',
      href: 'https://webmention.io/jefrydco.id/webmention'
    },
    {
      rel: 'pingback',
      href: 'https://webmention.io/jefrydco.id/xmlrpc'
    },
    {
      type: 'text/plain',
      rel: 'author',
      href: `${HOSTNAME}/humans.txt`
    },
    {
      rel: 'dns-prefetch',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'dns-prefetch',
      href: 'https://fonts.gstatic.com'
    },
    {
      rel: 'preconnect',
      href: 'https://d33wubrfki0l68.cloudfront.net'
    },
    {
      rel: 'preconnect',
      href: 'https://www.google-analytics.com'
    }
  ],
  // Taken from: https://github.com/manniL/lichter.io/blob/master/config/head.js
  __dangerouslyDisableSanitizers: ['script'],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'WebSite',
        name: 'Enal Farid',
        headline: 'A personal site of Enal Farid',
        description: 'A personal site of Enal Farid',
        about: 'A personal site of Enal Farid',
        keywords: 'enalfarid, Enal farid',
        genre: ['Personal', 'Tutorial', 'Programming', 'Review', 'Science'],
        copyrightYear: new Date().getFullYear(),
        dateCreated: '2017-03-12',
        inLanguage: ['Bahasa Indonesia', 'English'],
        isAccessibleForFree: 'true',
        isFamilyFriendly: 'true',
        license: 'https://opensource.org/licenses/MIT',
        image: {
          '@type': 'imageObject',
          url: `${HOSTNAME}/logo-ef.png`,
          width: '2739',
          height: '3102'
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${HOSTNAME}`
        },
        publisher: {
          '@type': 'Organization',
          name: 'Enal Farid',
          sameAs: 'https://www.github.com/enalfarid',
          logo: {
            '@type': 'imageObject',
            url: `${HOSTNAME}/logo-ef.png`,
            width: '2739',
            height: '3102'
          }
        },
        creator: {
          '@type': 'Person',
          name: 'Enal farid',
          alternateName: 'enalfarid',
          birthDate: '1981-01-15',
          gender: { '@type': 'GenderType', alternateName: 'Male' },
          url: [`${HOSTNAME}`, 'https://www.enalfarid.digital/'],
          sameAs: [
            'https://github.com/enalfarid',
            'https://instagram.com/enalfarid',
            'https://medium.com/@enalfarid',
            'https://twitter.com/enalfarid'
          ]
        }
      })
    }
  ]
}