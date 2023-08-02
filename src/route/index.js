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


// router.get Створює нам один ентпоїнт

router.get('/car', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('car', {
    layout: 'basic',
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'silver',
    features: {
      interior: {
        seats: {
          material: 'leather',
          color: 'black',
          heated: true,
          ventilated: true,
        },
        dashboard: {
          material: 'plastic',
          color: 'black',
          display: {
            type: 'LCD',
            size: 10.1,
            resolution: '1280x720',
            touchscreen: true,
          },
        },
        audio: {
          system: 'JBL',
          speakers: 8,
          subwoofer: true,
          bluetooth: true,
          USB: true,
        },
      },
      exterior: {
        wheels: {
          size: 18,
          type: 'alloy',
          color: 'silver',
        },
        headlights: {
          type: 'LED',
          brightness: 'high',
          automatic: true,
        },
        sunroof: {
          type: 'panoramic',
          size: 'large',
          automatic: true,
        },
      },
      safety: {
        airbags: {
          front: 2,
          side: 2,
          knee: 2,
          rear: 2,
        },
        assistance: {
          blind_spot_monitoring: true,
          rear_cross_traffic_alert: true,
          lane_departure_warning: true,
          adaptive_cruise_control: true,
          collision_warning: true,
        },
      },
    },
    engine: {
      type: 'gasoline',
      displacement: 2.5,
      horsepower: 206,
      torque: 186,
      transmission: {
        type: 'automatic',
        gears: 8,
      },
    },
    fuel_economy: {
      city: 28,
      highway: 39,
      combined: 32,
    },
    price: {
      base: 25900,
      destination: 995,
      options: {
        navigation: 1200,
        moonroof: 800,
        premium_paint: 595,
      },
      total: 28990,
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================// Підключаємо роутер до бек-енду
module.exports = router
