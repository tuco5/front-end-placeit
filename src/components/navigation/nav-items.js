const NAV_ITEMS = [
  {
    id: 1,
    label: 'mockups',
    path: '/mockups',
    categories: [
      {
        id: 1,
        label: 'highlights',
        subCategories: [
          {
            id: 2,
            label: 'free mockups',
            path: '/free-templates',
          },
          {
            id: 3,
            label: 'st. patrick´s day mockups',
            path: '/apparel-mockups/?f_tags=st%20patricks%20day',
          },
          {
            id: 4,
            label: 'transparent background',
            path: '/transparent-mockup-templates',
          },
        ],
      },
      {
        id: 2,
        label: 'apparel',
        subCategories: [
          {
            id: 5,
            label: 'apparel',
            path: '/apparel-mockups',
          },
          {
            id: 6,
            label: 'face mask',
            path: '/print-on-demand?f_devices=Face%20Mask',
          },
          {
            id: 7,
            label: 'hats',
            path: '/hat-mockup-generator',
          },
        ],
      },
      {
        id: 3,
        label: 'digital',
        subCategories: [
          {
            id: 8,
            label: 'android',
            path: '/android-mockup-generator',
          },
          {
            id: 9,
            label: 'app demos',
            path: '/app-video-mockups',
          },
          {
            id: 10,
            label: 'macbooks',
            path: '/macbook-mockup-generator',
          },
        ],
      },
      {
        id: 4,
        label: 'print',
        subCategories: [
          {
            id: 11,
            label: 'books',
            path: '/book-mockup-generator',
          },
          {
            id: 12,
            label: 'business cards',
            path: '/business-card-mockups',
          },
          {
            id: 13,
            label: 'flyers',
            path: '/flyer-mockup-generator',
          },
        ],
      },
      {
        id: 5,
        label: 'print on demand',
        subCategories: [
          {
            id: 14,
            label: 'bags',
            path: '/print-on-demand?f_tags=Bags',
          },
          {
            id: 15,
            label: 'coffee mugs',
            path: '/print-on-demand?f_devices=Coffee%20Mug',
          },
          {
            id: 16,
            label: 'drinkware',
            path: '/print-on-demand?f_tags=drinkware',
          },
        ],
      },
      {
        id: 6,
        label: 'promotional',
        subCategories: [
          {
            id: 17,
            label: 'banners',
            path: '/banner-mockups',
          },
          {
            id: 18,
            label: 'billboards',
            path: '/banner-mockups?f_devices=Billboard',
          },
          {
            id: 19,
            label: 'facebook ads',
            path: '/facebook-ad-mockups',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'designs',
    path: '/design-templates',
    categories: [
      {
        id: 7,
        label: 'highlights',
        subCategories: [
          {
            id: 20,
            label: 'blank canvas',
            path: '/design-templates/stages/blank-canvas-designs',
          },
          {
            id: 21,
            label: 'feminist t-shirt designs',
            path: '/womens-day-templates?f_devices=T-Shirt%20Design',
          },
          {
            id: 22,
            label: 'free designs',
            path: '/free-templates?f_tags=Social%20Media',
          },
        ],
      },
      {
        id: 8,
        label: 'apparel & print',
        subCategories: [
          {
            id: 23,
            label: 'book covers',
            path: '/book-cover-designs',
          },
          {
            id: 24,
            label: 'business cards',
            path: '/online-business-card-maker',
          },
          {
            id: 25,
            label: 'flyers',
            path: '/flyer-templates',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: 'logos',
    path: '/logo-maker',
    categories: [
      {
        id: 9,
        label: 'highlights',
        subCategories: [
          {
            id: 26,
            label: 'animated logos',
            path: '/animated-logos',
          },
          {
            id: 27,
            label: 'free logos',
            path: '/free-templates?f_devices=Logo%20Maker',
          },
          {
            id: 28,
            label: 'twitch emote',
            path: '/logo-maker?industry=Twitch%20Emote',
          },
        ],
      },
      {
        id: 10,
        label: 'architecture & design',
        subCategories: [
          {
            id: 29,
            label: 'architects',
            path: '/logo-maker?industry=Architect&industryId=Architect',
          },
          {
            id: 30,
            label: 'designers',
            path: '/logo-maker?industry=Design&industryId=Design',
          },
          {
            id: 31,
            label: 'florist',
            path: '/logo-maker?industry=Florist&industryId=Florist',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: 'videos',
    path: '/video-maker',
    categories: [
      {
        id: 11,
        label: 'highlights',
        subCategories: [
          {
            id: 32,
            label: 'express video maker',
            path: '/express-video-maker',
          },
          {
            id: 33,
            label: 'free videos',
            path: '/free-templates?f_devices=Intro%20Maker%2CSlideshow%20Video%20Maker',
          },
          {
            id: 34,
            label: 'st. patrick´s day videos',
            path: '/social-media-templates?f_types=video&f_tags=St%20Patricks%20Day',
          },
        ],
      },
      {
        id: 12,
        label: 'gaming',
        subCategories: [
          {
            id: 35,
            label: 'animated logos',
            path: '/animated-logos',
          },
          {
            id: 36,
            label: 'twitch screens',
            path: '/stream-starting-soon-templates',
          },
          {
            id: 37,
            label: 'youtube videos',
            path: '/youtube-video-templates',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: 'gaming',
    path: '/gaming-templates',
    categories: [
      {
        id: 13,
        label: 'highlights',
        subCategories: [
          {
            id: 38,
            label: 'animated logos',
            path: '/gaming-templates?f_devices=Animated%20Logo',
          },
          {
            id: 39,
            label: 'fortnite-inspired templates',
            path: '/gaming-templates?f_tags=Fortnite',
          },
          {
            id: 40,
            label: 'gaming freebies',
            path: '/gaming-templates?sortby=free',
          },
        ],
      },
      {
        id: 14,
        label: 'merch',
        subCategories: [
          {
            id: 41,
            label: 'gaming mockups',
            path: '/gaming-templates?f_devices=T-Shirt',
          },
          {
            id: 42,
            label: 't-shirt designs',
            path: '/gaming-templates?f_devices=T-Shirt%20Design',
          },
        ],
      },
    ],
  },
];

export default NAV_ITEMS;
