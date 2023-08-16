// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Maryna',
    lastname: 'Protsko',
  },
  position: 'Junior Fullstack JS Developer',
  salary: 'salary 600$ per month',
  address: 'Belgiumm, Brussels',
}

var footer = {
  social:{
    email:{
      text: 'marina.proczko@gmail.com',
      href: 'mailto:marina.proczko@gmail.com',
    },
    phone:{
      text: '+380505263160',
      href: 'tel:+380505263160',
    },
  
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },

}
// ================================================================
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summery',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },
      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
        
      },
    },
    footer,
    
    
   
    

  })

})
// ================================================================
//================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },
    header,
    main: {
     skills: [
      {
       name: 'HTML',
       point: 10,
       isTop: true,
      },
      {
        name: 'Handlebars',
        point: 10,
        isTop: true,
       },
      {
        name: 'VS Code & NPM',
        point: 9,
        isTop: false,
      },
      {
        name: 'Git & Terminal',
        point: 8,
       },
      {
        name: 'React.js',
        point: 0,
       },
      {
        name: 'PHP',
        point: null,
       },
    ],
    hobbies: [
      {
       name: 'Reading books',
       isMain: false,
       },
      {
       name: 'Swimming',
       isMain: true,
      },
      {
       name: 'game of checkers and chess',
       isMain: true,
      },
    ]
    },
    footer,
    
    
   
    

  })
})
// ================================================================
//================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },
    header,
    main: {
      education: [
        {
          name: 'Zaporizhzhya State Academy of Engineering:',
          speciality: 'Bachelors  degree in "Automation and Computer-Integrated Technologies"',
          period: 'from 01/09/1999 to 25/06/2003;',
             // bachelors: 'Bachelors  degree in "Automation and Computer-Integrated Technologies", from 01/09/1999 to 25/06/2003; ',
              //masters: 'Masters degree in "Automated process control" as well, from 01/09/2003 to 29/06/2004.',
          isEnd: true,
         },
         {
          name: 'Zaporizhzhya State Academy of Engineering:',
          speciality: 'Masters degree in "Automated process control"',
          period: 'from 01/09/2003 to 29/06/2004;',
          isEnd: true,
         },
         {
          name: 'Company SheCodes:',
          speciality: 'Course "SheCodes Basics"',
          period: 'from  27/06/2022 to 18/07/2022 (3 weeks);',
          point: 10,
          isEnd: true,
         },
         {
          name: 'Company SheCodes:',
          speciality: 'Course "SheCodes Plus"',
          period: 'from 01/08/2022 to 26/09/2022 (8 weeks);',
            
          point: 10,
          isEnd: true,
         },
         {
          name: 'Company IT BRAINS:',
          speciality: '"Fullstack JS Developer"',
          period: 'from 01/03/2023 to 01/12/2023 (9 months);',
            
          point: 10,
          isEnd: false,
         },
      ] ,
      certificates: [
        {
          name: 'Certificate Bachelors', 
          id: 10,
        },
        {
          name: 'Certificate Masters',
          id: 10,
        },
        {
          name: 'Certificate "SheCodes Basics" https://www.shecodes.io/certificates/d40b87390eefe6145e4513fa4fb21514',
          id: 10,
        },
        {
          name: 'Certificate "SheCodes Plus" https://www.shecodes.io/certificates/23d045db58fada88c616e7238e25263d ',
          id: 10,
        },
      ]
     },
    footer,
    
    
   
    

  })
})
// ================================================================
//================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },
    header,
    main: {
      works:[
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name:'Resume',
              url: 'https://resume.com.ua/',
              about: 'Airbnb competitor. High-load application for searching apartments',
              stacks:[
              {
                name: 'React.js',
              },
              {
                name: 'HTML / CSS',
              },
              {
                name: 'Nodejs',
              },
            ],
            awards: [
              {
                name: "Background verification - is a feature that provides users to prove that they are real rersons",
                name: "Preparing SEO optimized pages. The automated process of getting data for the app from documents.",
              },
            ],
            stackAmount: 3,
            awardAmount: 3,
          },
          ],
        },
      ],
    },
    footer,
    
  })
})






//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layuot: 'person',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects1: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members1: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects2: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members2: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],

    },
  })
})


// ================================================================


// ================================================================

// router.get Створює нам один ентпоїнт

router.get('/mac', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('mac', {
    layout: 'basic',
    name: 'Apple MacBook Pro',
    description: 'The ultimate notebook for power users',
    price: 1999.99,
    category: 'Computers & Tablets',
    features: {
      processor: {
        brand: 'Intel',
        model: 'Core i9',
        speed: '2.3 GHz',
        cores: 8,
        cache: '16 MB',
      },
      memory: {
        type: 'DDR4',
        size: '32 GB',
        speed: '2666 MHz',
      },
      storage: {
        type: 'SSD',
        size: '1 TB',
      },
      display: {
        size: '16 inches',
        resolution: '3072x1920',
        technology: 'Retina',
        color_space: 'P3',
        brightness: '500 nits',
        refresh_rate: '60 Hz',
      },
      graphics: {
        brand: 'AMD',
        model: 'Radeon Pro 5500M',
        memory: '4 GB GDDR6',
      },
      ports: [
        {
          type: 'Thunderbolt 3',
          count: 4,
          features: [
            'Charging',
            'DisplayPort',
            'Thunderbolt (up to 40 Gbps)',
            'USB 3.1 Gen 2 (up to 10 Gbps)',
          ],
        },
        {
          type: 'HDMI',
          count: 1,
        },
      ],
      battery: {
        type: 'Lithium Polymer',
        capacity: '100 Wh',
        life: 'Up to 11 hours',
      },
      weight: '4.3 pounds',
      dimensions: {
        height: '0.64 inch',
        width: '14.09 inches',
        depth: '9.68 inches',
      },
      operating_system: 'macOS',
      accessories: [
        {
          name: 'Apple Magic Keyboard',
          price: 99.99,
        },
        {
          name: 'Apple Magic Mouse 2',
          price: 79.99,
        },
        {
          name: 'USB-C to USB Adapter',
          price: 19.99,
        },
      ],
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// ================================================================

// router.get Створює нам один ентпоїнт

router.get('/facebook', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('facebook', {
    layout: 'basic',
    name: 'Facebook',
    users: [
      {
        id: 1,
        name: 'John Doe',
        gender: 'Male',
        age: 30,
        friends: [
          {
            id: 2,
            name: 'Jane Smith',
            gender: 'Female',
            age: 27,
            mutual_friends: [
              {
                id: 4,
                name: 'Samantha Lee',
                gender: 'Female',
                age: 25,
              },
            ],
          },
          {
            id: 5,
            name: 'Mike Williams',
            gender: 'Male',
            age: 28,
            mutual_friends: [
              {
                id: 7,
                name: 'David Kim',
                gender: 'Male',
                age: 29,
              },
            ],
          },
        ],
        groups: [
          {
            id: 1,
            name: 'Hiking Enthusiasts',
            description:
              'A group for people who love hiking and the great outdoors',
            members: [
              {
                id: 8,
                name: 'Sarah Johnson',
                gender: 'Female',
                age: 25,
              },
            ],
          },
          {
            id: 2,
            name: 'Foodies United',
            description:
              'A group for food lovers to share recipes and restaurant recommendations',
            members: [
              {
                id: 5,
                name: 'Mike Williams',
                gender: 'Male',
                age: 28,
              },
              {
                id: 8,
                name: 'Sarah Johnson',
                gender: 'Female',
                age: 25,
              },
            ],
          },
        ],
      },
      {
        id: 16,
        name: 'Amy Lee',
        gender: 'Female',
        age: 30,
        friends: [
          {
            id: 15,
            name: 'Peter Kim',
            gender: 'Male',
            age: 32,
            mutual_friends: [
              {
                id: 17,
                name: 'David Chen',
                gender: 'Male',
                age: 33,
              },
              {
                id: 19,
                name: 'Erica Wong',
                gender: 'Female',
                age: 29,
                mutual_friends: [
                  {
                    id: 20,
                    name: 'Alex Lee',
                    gender: 'Male',
                    age: 31,
                  },
                ],
              },
            ],
            groups: [
              {
                id: 3,
                name: 'Travel Addicts',
                description:
                  'A group for people who love to travel and explore new places',
                members: [
                  {
                    id: 22,
                    name: 'Jackie Chen',
                    gender: 'Female',
                    age: 26,
                  },
                ],
              },
              {
                id: 4,
                name: 'Pet Lovers',
                description:
                  'A group for people who love their furry friends',
                members: [
                  {
                    id: 16,
                    name: 'Amy Lee',
                    gender: 'Female',
                    age: 30,
                  },
                  {
                    id: 25,
                    name: 'John Smith',
                    gender: 'Male',
                    age: 33,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================// Підключаємо роутер до бек-енду
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
 router.get('/shophome', function (req, res) {
    res.render('shophome', {
      layout: 'shop',
      navigation: {
        links: [
          {
            text: 'Home',
            href: 'https://github.com/',
          },
          {
            text: 'Contacts',
            href: 'https://www.google.com/',
          },
          {
            text: 'Help',
            href: 'https://www.youtube.com/',
          },
        ],
      },

      newsBlock: {
        title: 'Latest News',
        cards: [
          {
            title: 'COVID-19 Vaccinations Begin in Europe',
            description:
              'As the world continues to grapple with the ongoing COVID-19 pandemic, Europe begins its vaccination rollout, with healthcare workers and the elderly among the first to receive the vaccine.',
            isTop: false,
            isNew: false,
          },
          {
            title: 'Tesla Stock Surges After Record Sales',
            description:
              "Tesla's stock price jumps 10% following the company's announcement of record sales in the last quarter, thanks in part to strong demand for its electric vehicles.",
            isTop: true,
            isNew: true,
          },
          {
            title:
              'New Study Shows Benefits of Meditation for Mental Health',
            description:
              'A new study published in the Journal of the American Medical Association finds that practicing mindfulness meditation can lead to improved mental health outcomes for people struggling with depression and anxiety.',
            isTop: false,
            isNew: false,
          },
          {
            title: 'NASA Launches New Mars Rover',
            description:
              "NASA's Perseverance rover successfully launches on a mission to explore Mars, with the goal of collecting samples of the planet's surface and searching for signs of ancient microbial life.",
            isTop: false,
            isNew: true,
          },
          {
            title:
              'GameStop Shares Soar as Reddit Traders Rally',
            description:
              'Shares of GameStop surge as amateur traders on the social media platform Reddit rally to drive up the price, in what some are calling a battle between Wall Street and Main Street.',
            isTop: false,
            isNew: false,
          },
          {
            title:
              'UK Announces Plan to Ban Sale of Gas-Powered Cars by 2030',
            description:
              'In an effort to combat climate change, the UK government announces a plan to ban the sale of new gas-powered cars and vans by 2030, with hybrid vehicles to follow in 2035.',
            isTop: true,
            isNew: false,
          },
          {
            title:
              'New Study Shows Link Between Exercise and Longevity',
            description:
              'A new study published in the Journal of the American Medical Association suggests that regular exercise can help people live longer, with participants who exercised regularly having a lower risk of premature death.',
            isTop: false,
            isNew: false,
          },
          {
            title:
              'Amazon Expands Grocery Delivery Service',
            description:
              'Amazon announces an expansion of its grocery delivery service, with plans to offer free delivery to Prime members on orders over $35 and to expand its selection of fresh and organic produce.',
            isTop: false,
            isNew: true,
          },
        ],
      },

      goodsBlock: {
        tabs: [
          {
            isActive: true,
            isDisabled: false,
            text: 'Electronics',
          },
          {
            isActive: false,
            isDisabled: false,
            text: 'Home & Kitchen',
          },
          {
            isActive: false,
            isDisabled: false,
            text: 'Clothing & Accessories',
          },
          {
            isActive: false,
            isDisabled: true,
            text: 'Toys & Games',
          },
        ],
        cards: [
          {
            image: 'https://picsum.photos/400/200',
            title: 'iPhone 13',
            description:
              'The latest iPhone model features a new A15 Bionic chip, improved camera system, and longer battery life.',
            isHot: false,
            isNew: false,
          },
          {
            image: 'https://picsum.photos/400/200',
            title: 'MacBook Pro',
            description:
              "Apple's high-end laptop features a 16-inch Retina display, powerful M1 Pro or M1 Max chip, and up to 64GB of RAM.",
            isHot: true,
            isNew: false,
          },
          {
            image: 'https://picsum.photos/400/200',
            title: 'AirPods Pro',
            description:
              "Apple's premium wireless earbuds feature active noise cancellation, a customizable fit, and up to 4.5 hours of listening time.",
            isHot: false,
            isNew: false,
          },
          {
            image: 'https://picsum.photos/400/200',
            title: 'Sony Bravia XR A90J',
            description:
              'This OLED TV boasts a 4K resolution, HDR support, and a high refresh rate for smooth motion handling.',
            isHot: false,
            isNew: true,
          },
          {
            image: 'https://picsum.photos/400/200',
            title: 'Nintendo Switch OLED Model',
            description:
              'The latest iteration of the popular gaming console features a larger OLED screen and improved audio quality.',
            isHot: false,
            isNew: false,
          },
          {
            image: 'https://picsum.photos/400/200',
            title: 'Bose SoundLink Revolve+',
            description:
              'This portable Bluetooth speaker features 360-degree sound, water-resistant construction, and up to 16 hours of battery life.',
            isHot: true,
            isNew: true,
          },
        ],
      },
      subscribe: {
        header: 'Unlock Premium Content',
        description:
          'Subscribe to access exclusive content and features.',
        buttons: [
          {
            text: 'Register Now',
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Buy Subscription',
            link: 'https://www.youtube.com/',
          },
        ],
      },
      service: {
        title: 'Our Services',
        description:
          'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
        buttons: [
          {
            text: 'Show More',
            link: 'https://www.youtube.com/',
          },
        ],
      },

      footer: [
        [
          {
            text: 'Home',
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Trending',
            link: 'https://www.youtube.com/feed/trending',
          },
          {
            text: 'Subscriptions',
            link: 'https://www.youtube.com/feed/subscriptions',
          },
          {
            text: 'Library',
            link: 'https://www.youtube.com/feed/library',
          },
        ],
        [
          {
            text: 'History',
            link: 'https://www.youtube.com/feed/history',
          },
          {
            text: 'Your Videos',
            link: 'https://www.youtube.com/feed/my_videos',
          },
          {
            text: 'Live',
            link: 'https://www.youtube.com/live',
          },
          {
            text: 'Settings',
            link: 'https://www.youtube.com/account',
          },
        ],
        [
          {
            text: 'Watch Later',
            link: 'https://www.youtube.com/playlist?list=WL',
          },
          {
            text: 'Liked Videos',
            link: 'https://www.youtube.com/playlist?list=LL',
          },
          {
            text: 'Music',
            link: 'https://www.youtube.com/music',
          },
          {
            text: 'Gaming',
            link: 'https://www.youtube.com/gaming',
          },
        ],
        [
          {
            text: 'Sports',
            link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
          },
          {
            text: 'News',
            link: 'https://www.youtube.com/news',
          },
          {
            text: 'Fashion & Beauty',
            link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
          },
          {
            text: 'Learning',
            link: 'https://www.youtube.com/learning',
          },
        ],
        [
          {
            text: 'Report History',
            link: 'https://www.youtube.com/feed/history/report_history',
          },
          {
            text: 'Help',
            link: 'https://support.google.com/youtube/?hl=en',
          },
          {
            text: 'Send Feedback',
            link: 'https://support.google.com/youtube/answer/4347644?hl=en',
          },
          {
            text: 'About',
            link: 'https://www.youtube.com/about/',
          },
        ],
      ],
    })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================




// Підключаємо роутер до бек-енду

module.exports = router
