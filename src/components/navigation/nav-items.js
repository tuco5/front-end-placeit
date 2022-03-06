const NAV_ITEMS = [
  {
    id: '10000',
    label: 'mockups',
    path: '/mockups',
    categories: [
      {
        id: '10100',
        label: 'highlights',
        subCategories: [
          {
            id: '10101',
            label: 'free mockups',
            path: '/free-templates',
          },
          {
            id: '10102',
            label: 'st. patrick´s day mockups',
            path: '/apparel-mockups/?f_tags=st%20patricks%20day',
          },
          {
            id: '10103',
            label: 'transparent background',
            path: '/transparent-mockup-templates',
          },
        ],
      },
      {
        id: '10200',
        label: 'apparel',
        subCategories: [
          {
            id: '10201',
            label: 'apparel',
            path: '/apparel-mockups',
          },
          {
            id: '10202',
            label: 'face mask',
            path: '/print-on-demand?f_devices=Face%20Mask',
          },
          {
            id: '10203',
            label: 'hats',
            path: '/hat-mockup-generator',
          },
        ],
      },
    ],
  },
  {
    id: '20000',
    label: 'designs',
    path: '/design-templates',
    categories: [
      {
        id: '20100',
        label: 'highlights',
        subCategories: [
          {
            id: '20101',
            label: 'blank canvas',
            path: '/design-templates/stages/blank-canvas-designs',
          },
          {
            id: '20102',
            label: 'feminist t-shirt designs',
            path: '/womens-day-templates?f_devices=T-Shirt%20Design',
          },
          {
            id: '20103',
            label: 'free designs',
            path: '/free-templates?f_tags=Social%20Media',
          },
        ],
      },
      {
        id: '20200',
        label: 'apparel & print',
        subCategories: [
          {
            id: '20201',
            label: 'book covers',
            path: '/book-cover-designs',
          },
          {
            id: '20202',
            label: 'business cards',
            path: '/online-business-card-maker',
          },
          {
            id: '20203',
            label: 'flyers',
            path: '/flyer-templates',
          },
        ],
      },
    ],
  },
  {
    id: '30000',
    label: 'logos',
    path: '/logo-maker',
    categories: [
      {
        id: '30100',
        label: 'highlights',
        subCategories: [
          {
            id: '30101',
            label: 'animated logos',
            path: '/animated-logos',
          },
          {
            id: '30102',
            label: 'free logos',
            path: '/free-templates?f_devices=Logo%20Maker',
          },
          {
            id: '30103',
            label: 'twitch emote',
            path: '/logo-maker?industry=Twitch%20Emote',
          },
        ],
      },
      {
        id: '30200',
        label: 'architecture & design',
        subCategories: [
          {
            id: '30201',
            label: 'architects',
            path: '/logo-maker?industry=Architect&industryId=Architect',
          },
          {
            id: '30202',
            label: 'designers',
            path: '/logo-maker?industry=Design&industryId=Design',
          },
          {
            id: '30203',
            label: 'florist',
            path: '/logo-maker?industry=Florist&industryId=Florist',
          },
        ],
      },
    ],
  },
  {
    id: '40000',
    label: 'videos',
    path: '/video-maker',
    categories: [
      {
        id: '40100',
        label: 'highlights',
        subCategories: [
          {
            id: '40101',
            label: 'express video maker',
            path: '/express-video-maker',
          },
          {
            id: '40102',
            label: 'free videos',
            path: '/free-templates?f_devices=Intro%20Maker%2CSlideshow%20Video%20Maker',
          },
          {
            id: '40103',
            label: 'st. patrick´s day videos',
            path: '/social-media-templates?f_types=video&f_tags=St%20Patricks%20Day',
          },
        ],
      },
      {
        id: '40200',
        label: 'gaming',
        subCategories: [
          {
            id: '40201',
            label: 'animated logos',
            path: '/animated-logos',
          },
          {
            id: '40202',
            label: 'twitch screens',
            path: '/stream-starting-soon-templates',
          },
          {
            id: '40203',
            label: 'youtube videos',
            path: '/youtube-video-templates',
          },
        ],
      },
    ],
  },
  {
    id: '50000',
    label: 'gaming',
    path: '/gaming-templates',
    categories: [
      {
        id: '50100',
        label: 'highlights',
        subCategories: [
          {
            id: '50101',
            label: 'animated logos',
            path: '/gaming-templates?f_devices=Animated%20Logo',
          },
          {
            id: '50102',
            label: 'fortnite-inspired templates',
            path: '/gaming-templates?f_tags=Fortnite',
          },
          {
            id: '50103',
            label: 'gaming freebies',
            path: '/gaming-templates?sortby=free',
          },
        ],
      },
      {
        id: '50200',
        label: 'merch',
        subCategories: [
          {
            id: '50201',
            label: 'gaming mockups',
            path: '/gaming-templates?f_devices=T-Shirt',
          },
          {
            id: '50202',
            label: 't-shirt designs',
            path: '/gaming-templates?f_devices=T-Shirt%20Design',
          },
        ],
      },
    ],
  },
];

export default NAV_ITEMS;
