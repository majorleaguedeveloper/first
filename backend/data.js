import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Lacoco Cordless Weed Wacker',
      slug: 'lacoco-cordless-weed-wacker',
      category: 'lawntrimmer',
      image: '/images/p1.jpg', // 679px × 829px
      images:['/images/p1.2.jpg','/images/p1.3.jpg','/images/p1.4.jpg','/images/p1.5.jpg','/images/p1.6.jpg'],
      price: 96,
      countInStock: 220,
      brand: 'Lacoco', 
      rating: 3.7,
      numReviews: 34,
      description: `【Warm Tips Before Use】Our team is online 24/7 to ensure that any customer problems are solved in a timely manner. ⚠️ Please charge the cordless weed wacker before use, if the battery can't be charged or malfunctions during use, please feel free to contact us. ⚠️ If you have problems installing the weed wacker, please check the instruction manual, the video in the product picture list, or contact us directly by sending an Amazon email!
🌿【Highly Efficient Motor & Long Battery Life】Lacoco Weed Eater is powered by a 750-watt pure copper motor that spins at up to 8,500 rpm, providing efficient support for trimming lawns and hedges, and cutting small shrubs and branches. It is powered by two 2000mAh 21V lithium-ion batteries, which can be used for up to 40 minutes on a 3-hour charge. Quiet and efficient, this electric weed eater makes garden maintenance a breeze.
🌿【3-IN-1 Versatile Cordless Weed Wacker】This weed eater battery powered is designed with 3 types of 6” blades for different gardening needs. The wire blade is suitable for mowing grass. Flat iron blades are suitable for cutting small bushes or trimming hedges. The alloy circular saw blade is suitable for cutting thicker bushes and mowing lawns. Whether you're mowing small patches of grass or large areas of weeds, this weed whacker is up to the task!
🌿【Telescopic Handle & Adjustable Wheels】The handle and auxiliary wheels of this weed wacker cordless are designed by a team of professionals for easy using. The telescopic pole ranges from 45-51 inches in length, making it suitable for people of different heights to control without fatigue while trimming weeds. The upgraded wheels help maintain balance and keep the weed wacker moving smoothly. There is also a secondary handle on the axle to keep this weed eater comfortable to operate.
🌿【Lightweight & Safety Protection Design 】The portable battery powered weed eater weighs 2.6 kg/5.7 lbs, even for the elderly or women. This grass trimmer has a protective cover on the blade and safety lock button on the side of the top loop handle to protect the user from injury. After pressing the safety lock button, the user can use this cordless weed eater normally by controlling the battery switch.
🌿【Multifunctional Weed Wacker】This electric weed eater is simple to switch between trimming and edging modes. The cutting head can rotates for use as an edge trimmer and the wheels support the weights of the body, ensuring a neat and consistent cut along the edge. With an anti-collision steel wire of the cutting head, the lawn mower will cut efficiently and safely to avoid damage to surface of road、rock and lawn.
🌿【Professional Factory Support& 24h Customer Service】Lacoco provides 90 days factory professional support for every customer. Any questions when installing or using battery weed eater, please let us know anytime via your order. Our friendly support team will reach out to help and solve the problem for you within 24h.`,
    },
    {
      // _id: '1',
      name: 'Black Decker lawn mower',
      slug: 'black-decker-lawn-mower',
      category: 'lawnmower',
      image: '/images/p2.jpg', // 679px × 829px
      images:['/images/p2.2.jpg','/images/p2.3.jpg','/images/p2.4.jpg','/images/p2.5.jpg','/images/p2.6.jpg'],
      price: 75,
      countInStock: 220,
      brand: 'black decker',
      rating: 4.2,
      numReviews: 345,
      description: `3N1 DESIGN – Electric mower easily converts to string trimmer and edger via a built-in foot pedal for versatile use.
6.5 AMP MOTOR – Supplies the ideal amount of power when trimming grass, weeds, and overgrowth.
GEAR DRIVE TRANSMISSION – For tackling tougher, thicker grass without getting bogged down.
AFS AUTOMATIC FEED SPOOL – Continuously feeds trimmer line without bumping for seamless, uninterrupted trimming.
ADJUSTABLE MOWER DECK AND TRIMMER HANDLE – Lawn mower deck and string trimmer handle are adjustable for ideal grass- cutting height and added comfort.
CORDED – Corded design offers unlimited runtime for even the biggest jobs.
INCLUDES – (1)GH912 trimmer/edger, (1) MTD100 detachable mower deck, (1) AF-100 spool, (1) auxiliary handle, (1) guard.
Item requires power cord. Power cord not included`,
    },
    {
      // _id: '1',
      name: 'Black Decker Hedge Trimmer',
      slug: 'black-decker-hedge-trimmer',
      category: 'hedge trimmer',
      image: '/images/p3.jpg', // 679px × 829px
      images:['/images/p3.2.jpg','/images/p3.3.jpg','/images/p3.4.jpg','/images/p3.5.jpg'],
      price: 33,
      countInStock: 220,
      brand: 'black decker',
      rating: 3.9,
      numReviews: 13,
      description: `COMPACT ELECTRIC HEDGE TRIMMER - Lightweight 3.5 amp corded electric hedge trimmer for small hedges and shrubs with branches up to 5/8” thick
MADE FOR MORE CONTROL - Bulk-free design, built-in wrap around handle and full length trigger for less fatigue
DUAL-ACTION BLADE - Hardened steel dual- action blade for reduced vibration while trimming
ENDLESS RUNTIME - Corded electric power with built-in cord retention system for longer work sessions without accidentally unplugging
FULL LENGTH TRIGGER - Easy fatigue-free operation with multi-finger trigger pull`,
    },
    {
      // _id: '4',
      name: 'Worx 40V 17',
      slug: 'worx-40v-1',
      category: 'lawnmowers',
      image: '/images/p4.jpg',
      images:['/images/p4.2.jpg','/images/p4.3.jpg','/images/p4.4.jpg','/images/p4.5.jpg','/images/p4.6.jpg'],
      price: 150,
      countInStock: 200,
      brand: 'WORX',
      rating: 4.7,
      numReviews: 7,
      description: 'Cordless Lawn Mower for Small Yards, 2-in-1 Battery Lawn Mower Cuts Quiet, Compact & Lightweight Push Lawn Mower with 7-Position Height Adjustment  2 Batteries & Charger Included',
    },
    {
      // _id: '4',
      name: 'Worx String Trimmer',
      slug: 'worx-string-trimmer',
      category: 'lawnmowers',
      image: '/images/p5.jpg',
      images:['/images/p5.2.jpg','/images/p5.3.jpg','/images/p5.4.jpg','/images/p5.5.jpg','/images/p5.6.jpg'],
      price: 80,
      countInStock: 200,
      brand: 'WORX',
      rating: 4.9,
      numReviews: 23,
      description: 'Worx String Trimmer Cordless GT3.0 20V PowerShare 12" Edger & Weed Trimmer (2 Batteries & Charger Included) WG163',
    },
    {
      // _id: '4',
      name: 'GARLAND',
      slug: 'garland',
      category: 'lawnmowers',
      image: '/images/p6.jpg',
      images:['/images/p6.2.jpg','/images/p6.3.jpg','/images/p6.4.jpg','/images/p6.5.jpg','/images/p6.6.jpg'],
      price: 240,
      countInStock: 200,
      brand: 'GARLAND',
      rating: 4.6,
      numReviews: 57,
      description: 'Artificial Turf Comber by Roll & Comb, Electric Power Vacuum for Artificial Grass, Cool Fathers Day and Gardening Gift, Corded Electric Lawn Broom, Rake, Leaf Collector, Model 302e, 19.8lb.',
    },
    {
      // _id: '4',
      name: 'SOYUS Electric Lawn Mower',
      slug: 'soyus-electric-lawn-mower',
      category: 'lawnmowers',
      image: '/images/p7.jpg',
      images:['/images/p7.2.jpg','/images/p7.3.jpg','/images/p7.4.jpg','/images/p7.5.jpg','/images/p7.6.jpg'],
      price: 150,
      countInStock: 200,
      brand: 'SOYUS',
      rating: 4.3,
      numReviews: 120,
      description: 'SOYUS Electric Lawn Mower Cordless, 40V 15 Inch Battery Powered Push Lawn Mower with Brushless Motor, 6-Postion Height Adjustment, 2x4.0Ah Batteries & Charger Included',
    },
    {
      // _id: '4',
      name: 'Maxlander Lawn Mower',
      slug: 'maxlander-lawn-mower',
      category: 'lawnmowers',
      image: '/images/p8.jpg',
      images:['/images/p8.2.jpg','/images/p8.3.jpg','/images/p8.4.jpg','/images/p8.5.jpg','/images/p8.6.jpg'],
      price: 160,
      countInStock: 200,
      brand: 'MAXLANDER',
      rating: 4.6,
      numReviews: 16,
      description: 'Maxlander Lawn Mower, 15Inch Electric Lawn Mower Cordless, 40V 2-in-1 Battery Powered Lawn Mower with Brushless Motor, 6-Position Height Adjustment, 2PCS 4.0Ah Batteries and Charger Included',
    },
    {
      // _id: '4',
      name: 'Litheli Cordless Lawn Mower',
      slug: 'litheli-cordless-lawn-mower',
      category: 'lawnmowers',
      image: '/images/p9.jpg',
      images:['/images/p9.2.jpg','/images/p9.3.jpg','/images/p9.4.jpg','/images/p9.5.jpg','/images/p9.6.jpg'],
      price: 118,
      countInStock: 200,
      brand: 'LITHELI',
      rating: 4.3,
      numReviews: 17,
      description: 'Litheli Cordless Lawn Mower 13 Inch, 5 Heights Adjustment, U20 Series 20V Electric Lawn Mowers for Garden, Yard and Farm, Light-Weight with Brushless Motor, 4.0Ah Portable Battery Included',
    },
    {
      // _id: '4',
      name: 'MZK',
      slug: 'mzk',
      category: 'lawnmowers',
      image: '/images/p10.jpg',
      images:['/images/p10.2.jpg','/images/p10.3.jpg','/images/p10.4.jpg','/images/p10.5.jpg','/images/p10.6.jpg'],
      price: 89,
      countInStock: 200,
      brand: 'MZK',
      rating: 4.1,
      numReviews: 63,
      description: 'MZK 13-inch 12-Amp 2-in-1 Electric Dethatcher and Scarifier w/Removeable 8-Gallon Collection Bag, 4-Position Height Adjustment, Keep Lawn Health',
    },
    {
      // _id: '4',
      name: 'Gray Bunny Lawn Aerator',
      slug: 'gray-bunny-lawn-aerator',
      category: 'lawnaerator',
      image: '/images/p11.jpg',
      images:['/images/p11.2.jpg','/images/p11.3.jpg','/images/p11.4.jpg','/images/p11.5.jpg','/images/p11.6.jpg'],
      price: 15,
      countInStock: 200,
      brand: 'GRAY BUNNY',
      rating: 4.6,
      numReviews: 12,
      description: 'Gray Bunny Lawn Aerator Tool - Aerator Lawn Tool, Lawn Dethatcher Core Aerator with 4 Spikes for Lawns, Great Yard Tools for Garden & Complicated Lawn Soil - Gray, 37 Inches',
    },
    {
      // _id: '4',
      name: 'MOFEEZ Lawn Aerator',
      slug: 'mofeez-lawn-aerator',
      category: 'lawnaerator',
      image: '/images/p12.jpg',
      price: 14,
      images:['/images/p12.2.jpg','/images/p12.3.jpg','/images/p12.4.jpg','/images/p12.5.jpg','/images/p12.6.jpg'],
      countInStock: 200,
      brand: 'MOFEEZ',
      rating: 3.7,
      numReviews: 8,
      description: 'MOFEEZ Lawn Aerator Shoes for Grass - Pre-Assembled Grass Aerator Shoes for Lawn - Soil Yard Aerator Tool for Aerating Patio Garden, Black',
    },
    {
      // _id: '4',
      name: 'SPLENDOR LAWN SWEEPER',
      slug: 'splendor-lawn-sweeper',
      category: 'lawnsweeper',
      image: '/images/p13.jpg',
      images:['/images/p13.2.jpg','/images/p13.3.jpg','/images/p13.4.jpg','/images/p13.5.jpg','/images/p13.6.jpg'],
      price: 105,
      countInStock: 200,
      brand: 'SPLENDOR',
      rating: 4.2,
      numReviews: 112,
      description: 'SPLENDOR LS-650A2 26-Inch Walk-behaind Push Lawn Sweeper Yard Sweeper',
    },
    {
      // _id: '4',
      name: 'American Lawn Mower',
      slug: 'american-lawn-mower',
      category: 'lawnmowers',
      image: '/images/p14.jpg',
      images:['/images/p14.2.jpg','/images/p14.3.jpg','/images/p14.4.jpg','/images/p14.5.jpg','/images/p14.6.jpg'],
      price: 89,
      countInStock: 200,
      brand: 'American Lawn Mower',
      rating: 4.7,
      numReviews: 35,
      description: 'American Lawn Mower 1815-18 18-Inch 5-Blade Reel Lawn Mower',
    },
    {
      // _id: '4',
      name: 'American Lawn Mower2',
      slug: 'american-lawn-mower2',
      category: 'lawnmowers',
      image: '/images/p15.jpg',
      images:['/images/p15.2.jpg','/images/p15.3.jpg','/images/p15.4.jpg','/images/p15.5.jpg','/images/p15.6.jpg'],
      price: 110,
      countInStock: 200,
      brand: 'American Lawn Mower',
      rating: 4.8,
      numReviews: 120,
      description: `5-blade reel with a cutting width of 14” and durable 10” polymer wheels for maximum maneuverability
Reel lawn mower with an adjustable blade height of 1-2.25" with scissor action cut
Manual grass cutter blades made of heat-treated alloy steel that stays sharp for years
Planet-friendly alternative to gas-powered lawn mowers which is pollution-free and noise-free; Low maintenance, lightweight and easy to use
T-style handle with a comfortable cushioned grip for better maneuverability
Grass Catcher/Grass Bag included with Reel Mower`,
    },
    {
      // _id: '4',
      name: 'Worx Edger Lawn Tool',
      slug: 'worx-edger-lawn-tool',
      category: 'lawnedger',
      image: '/images/p16.jpg',
      images:['/images/p16.2.jpg','/images/p16.3.jpg','/images/p16.4.jpg','/images/p16.5.jpg','/images/p16.6.jpg'],
      price: 65,
      countInStock: 200,
      brand: 'WORX',
      rating: 4.3,
      numReviews: 44,
      description: `[POWER LIKE THE PROS] The 12 Amp motor of the electric edger spins the 7.5” blade fast and deep at 4700 revolutions per minute, giving you professional-looking lines and edges
[3 DEPTH ADJUSTMENTS] This sidewalk edger cuts down at 1”, 1-1/4”, 1-1/2” depending on the task at hand
[CUTTING LINE INDICATOR] This yard edger stays on the straight and narrow with the cutting line guide—you’ll notice a difference when you’re done
[ADJUSTABLE SHAFT] Users of any height can find a length and comfortable position that works for them with the adjustable shaft and D-grip handle of this electric sidewalk edger
[DO IT YOURSELF. DO IT BETTER. DO IT WITH WORX.] WORX lawn edgers are engineered with cutting-edge technology, and above modern efficiency standards, so you can build a cost-effective tool collection that's been designed to last`,
    },
    {
      // _id: '4',
      name: 'Greenworks 40V Cordless String Trimmer',
      slug: 'greenworks-40v-cordless-string-trimmer',
      category: 'landtrimmer',
      image: '/images/p17.jpg',
      images:['/images/p17.2.jpg','/images/p17.3.jpg','/images/p17.4.jpg','/images/p17.5.jpg','/images/p17.6.jpg'],
      price: 83,
      countInStock: 200,
      brand: 'GREENWORKS',
      rating: 4.3,
      numReviews: 26,
      description: `40V STRING TRIMMER - powers through the toughest grass and weeds.String trimmer operation temperature range : 6.8°F (-14°C) - 104°F (40°C). Charger operation temperature range : 39°F (4°C) - 113°F (45°C)
12” CUTTING PATH - .065” line, auto feed head for quick and easy line advancement
VARIABLE SPEED TRIGGER - allows you to control cutting speed on the go, so you can easily maneuver around plants and shrubs
LIGHTWEIGHT - Ultra lightweight design, along with superior ergonomics allow for reduced user fatigue
EASY TO USE - Push button start. Included 2.0Ah battery recharges in 60 minutes
MAINTENANCE FREE - This string trimmer is virtually maintenance free, with no gas, no oil, and no emissions. It starts instantly, is quiet, and delivers to the power you need`,
    },
    {
      // _id: '1',
      name: 'LawnMaster CLM2413A Cordless 13-Inch Lawn Mower',
      slug: 'lawnmaster-clm2413a',
      category: 'lawnmower',
      image: '/images/p18.jpg', // 679px × 829px
      images:['/images/p18.2.jpg','/images/p18.3.jpg','/images/p18.4.jpg','/images/p18.5.jpg','/images/p18.6.jpg'],
      price: 134,
      countInStock: 220,
      brand: 'Lawnmaster',
      rating: 4.6,
      numReviews:78 ,
      description: `[12.4-INCH CUTTING WIDTH] With 13-inch high impact rust resistant deck
[POWERFUL ENGINE] Powered by a 24V MAX* li-ion battery provides a speed of 3700 RPM
[5 CUTTING POSITONS] Effortlessly change the height of cuts between 1-inch to 2.55-inch using the one-touch lever
[LIGHTWEIGHT DESIGN]23.15 lbs. with 5.51-inch wheels for easy maneuverability
[INCLUDED]13-inch 24V cordless lawn mower, 2x24V MAX* 4.0Ah batteries. Search B0CTQPN6Y7 for replacement battery and charger Search B0CTQL4H4X on Amazon`,
    },
    {
      // _id: '1',
      name: 'AIVOLT 48V Cordless Lawn Mower',
      slug: 'aivolt-cordless',
      category: 'lawnmoer',
      image: '/images/p19.jpg', // 679px × 829px
      images:['/images/p19.2.jpg','/images/p19.3.jpg','/images/p19.4.jpg','/images/p19.5.jpg','/images/p19.6.jpg'],
      price: 156,
      countInStock: 220,
      brand: 'Aivolt',
      rating:4.9 ,
      numReviews: 67,
      description: `QUICK-START 48V POWER: This lawn mower cuts through thick grass easier and lasts longer on a single charge. Get up to 40minutes of runtime when equipped with 48V, 4.0 Ah batteries, Quickly charge both batteries with included dual charger, Run-time varies based on grass condition and operator technique
2- IN-1 BAGGING & MULCHING: Switch modes at a moment's notice to suit the task at hand, easily switches between bagging, mulching. This push lawn mower is built with sharp blades to pulverize grass, saving space while bagging and boosting lawn health while mulching`,
    },
    {
      // _id: '1',
      name: 'LawnMaster GV1314 Electric',
      slug: 'lawnmaster-gv1314-electric',
      category: 'lawnmower',
      image: '/images/p20.jpg', // 679px × 829px
      images:['/images/p20.2.jpg','/images/p20.3.jpg','/images/p20.4.jpg','/images/p20.5.jpg','/images/p20.6.jpg'],
      price: 87,
      countInStock: 220,
      brand: 'lawnmaster',
      rating: 4.3,
      numReviews: 120,
      description: `2-IN-1 DESIGN: Choose between two attachments with 3,700 RPM* of power and a 10.5 gallon collection bag for healthy lawn growth
CUSTOMIZE YOUR PROJECT: Effortlessly remove layers of matted build up with 19 cutting positions to prepare for planting or general yard maintenance
HEALTHY LAWN GROWTH: Remove dead grass, moss, thatch, & more in early spring/fall for cool-season grasses and in late spring to early summer for warm-season grasses
EASY MAINTENANCE: Features a 14-inch cutting width and 6.7-inch front wheels for easy navigation across rugged terrain and no gas or batteries needed
ULTIMATE CONVENIENCE: Push handles fold for extremely compact storage
*No load speed`,
    },
    {
      // _id: '1',
      name: 'LawnMaster LMRM1602',
      slug: 'lawnmaster-lmrm1602',
      category: 'lawnmower',
      image: '/images/p21.jpg', // 679px × 829px
      images:['/images/p21.2.jpg','/images/p21.3.jpg','/images/p21.4.jpg','/images/p21.5.jpg','/images/p21.6.jpg'],
      price: 63,
      countInStock: 220,
      brand: 'lawnmaster',
      rating: 4.4,
      numReviews: 23,
      description: `SCISSOR-LIKE CUT: No ripping or tearing of grass blades for a better and healthier lawn
CUSTOMIZE YOUR CUT: Effortlessly change the height of your cut with 4 cutting positions varying between 1-inche and 2-inches
MAX MANEUVERABILITY: Features a 16-inch deck and 10-inch front wheels for easy navigation around the lawn
MOTORLESS DESIGN: Environmentally friendly with no gas or batteries needed
QUALITY MATERIALS: Designed with durable steel blades built to last`,
    },
    {
      // _id: '1',
      name: 'American Lawn Mower Company 1304-14',
      slug: 'american-lawn-mower-company',
      category: 'lawnmower',
      image: '/images/p22.jpg', // 679px × 829px
      images:['/images/p22.2.jpg','/images/p22.3.jpg','/images/p22.4.jpg','/images/p22.5.jpg','/images/p22.6.jpg'],
      price: 65,
      countInStock: 220,
      brand: 'american lawn mower',
      rating: 4.1,
      numReviews: 34,
      description: `5-blade reel with a cutting width of 14” and durable 10” polymer wheels for maximum maneuverability
Mechanical lawn mower with an adjustable blade height of 1”-2.25” with scissor action cut
Manual grass cutter blades made of heat-treated alloy steel that stays sharp for years
Planet-friendly alternative to gas-powered lawn mowers which is pollution-free and noise-free; Low maintenance, lightweight and easy to use
Capable of cutting grass up to 4 inches tall`,
    },
    {
      // _id: '1',
      name: 'American Lawn Mower Company 1304-14GC',
      slug: 'american-lawn-mower-company-1304-14gc',
      category: 'lawnmower',
      image: '/images/p23.jpg', // 679px × 829px
      images:['/images/p23.2.jpg','/images/p23.3.jpg','/images/p23.4.jpg','/images/p23.5.jpg','/images/p23.6.jpg'],
      price: 95,
      countInStock: 220,
      brand: 'american lawn mower',
      rating: 3.9,
      numReviews: 45,
      description: `5-blade reel with a cutting width of 14” and durable 10” polymer wheels for maximum maneuverability
Reel lawn mower with an adjustable blade height of 1-2.25" with scissor action cut
Manual grass cutter blades made of heat-treated alloy steel that stays sharp for years
Planet-friendly alternative to gas-powered lawn mowers which is pollution-free and noise-free; Low maintenance, lightweight and easy to use
T-style handle with a comfortable cushioned grip for better maneuverability
Grass Catcher/Grass Bag included with Reel Mower`,
    },
    {
      // _id: '1',
      name: 'Fiskars StaySharp Max Reel',
      slug: 'fiskars-staysharp-max-reel',
      category: 'lawnmower',
      image: '/images/p24.jpg', // 679px × 829px
      images:['/images/p24.2.jpg','/images/p24.3.jpg','/images/p24.4.jpg','/images/p24.5.jpg','/images/p24.6.jpg'],
      price: 200,
      countInStock: 220,
      brand: 'fiskars',
      rating: 4.8,
      numReviews: 21,
      description: `ECO-FRIENDLY PUSH LAWNMOWER: Manual reel lawnmower with 18" cut width; No gas, oil, charging, or cords required; 60% easier to push than other reel mowers and ideal for regular lawn maintenance
BEST-IN-CLASS CUTTING PERFORMANCE: InertiaDrive Reel boasts twice the cutting power of standard reel mowers, while the StaySharp Cutting System eliminates the cost and inconvenience of manual blade sharpening
SUPERIOR ERGONOMICS: Reversible grass chute can direct clippings away from your feet, making it easier to mow tough patches while limiting messiness; One-touch handle height adjustment enhances your comfort and control
IDEAL FOR ALL TYPES OF GRASS: Cuts through tough southern varieties like St. Augustine, Zoysia, Bahia, and Bermuda; VersaCut technology offers cut height settings from 1"-4" to mow all types of grass cleanly
INCLUDES: 1 Fiskars StaySharp Max Reel Mower cordless grass trimmer; Limited 3-year warranty`,
    },
    {
      // _id: '1',
      name: 'TBVECHI 20Inch Reel Mower',
      slug: 'tvbechi-20inch-reel-mower',
      category: 'lawnmower',
      image: '/images/p25.jpg', // 679px × 829px
      images:['/images/p25.2.jpg','/images/p25.3.jpg','/images/p25.4.jpg','/images/p25.5.jpg','/images/p25.6.jpg'],
      price: 110,
      countInStock: 220,
      brand: 'tvbechi',
      rating: 4.7,
      numReviews: 78,
      description: `📌【Large Mowing Area】5-blade reel with a cutting width of 20”, you can effortlessly tackle approximately 5,381 square feet of the push mower manual.
📌【Adjustable Cutting Height of 1.33''-2.51''】The manual lawn mower with 9-gear settings ranging from 1.33 to 2.51 inches, you can easily customize the cutting height according to your preference.
📌【Advantages】The manual reel mower is lightweight, quite, save time and effort. Easy to transport and operate.
📌【Large Capacity Collection Bag】The reel mower with detachable grass catcher. Large capacity. Convenient & Fast.
📌【Sturdy and Durable】The thickened U-shaped tube and six sets of set screws enhance the stability and durability of this manual lawn mower.`,
    },
    {
      // _id: '1',
      name: 'GARDENA Lawn and Leaf Collector',
      slug: 'gardena-lawn-and-leaf-collector',
      category: 'lawncollector',
      image: '/images/p26.jpg', // 679px × 829px
      images:['/images/p26.2.jpg','/images/p26.3.jpg','/images/p26.4.jpg','/images/p26.5.jpg','/images/p26.6.jpg'],
      price: 110,
      countInStock: 220,
      brand: 'gardena',
      rating: 4.6,
      numReviews: 52,
      description: `Tidying up in the autumn: This motor-free lawn sweeper is ideal for saving time when collecting leaves and grass cuttings on large lawns
Keeping your back safe as you work: Thanks to its ergonomically shaped handles, you can work in an upright position. It is also easy to push the collector around the garden
Integrated sweeping mechanism: Another impressive feature is the height adjustment - this allows you to adapt the sweeping height to different surfaces
Space-saving storage: The leaf and grass collector does not take up much storage space
Delivery includes: 1x Gardena leaf and grass collector`,
    },
    {
      // _id: '1',
      name: 'VEVOR Push Lawn Sweeper',
      slug: 'vever-push-lawn-sweeper',
      category: 'lawnsweeper',
      image: '/images/p27.jpg', // 679px × 829px
      images:['/images/p27.2.jpg','/images/p27.3.jpg','/images/p27.4.jpg','/images/p27.5.jpg','/images/p27.6.jpg'],
      price: 70,
      countInStock: 220,
      brand: 'vevor',
      rating: 4.6,
      numReviews: 102,
      description: `Keep Your Lawn Spotless: Unlike most lawn sweepers, our lawn sweeper has thickened and densified brushes to increase the overall sweeping force and prevent deformation. With a sweeping width of 21"/53.5 cm, it can pick up 80% of the debris in one pass.
Adjust to Any Terrain: The lawn sweep is designed with an adjustable spinning brush height–simply adjust the knob by hand to move brushes up and down without the need for any special tools. You can use it on any terrain, whether it's a sidewalk, driveway, yard, or garden.
Collect More Debris: Our yard sweeper has a high-quality non-woven hopper bag with a large capacity of 3.5 ft³, allowing you to collect more grass, leaves, and debris at once without frequent dumping. It's easy to remove from the frame and quickly dump when cleaning is complete`,
    },
    {
      // _id: '1',
      name: 'Earthwise  Lawn Sweeper',
      slug: 'eartwise-lawn-sweeper',
      category: 'lawnsweeper',
      image: '/images/p28.jpg', // 679px × 829px
      images:['/images/p28.2.jpg','/images/p28.3.jpg','/images/p28.4.jpg','/images/p28.5.jpg','/images/p28.6.jpg'],
      price: 85,
      countInStock: 220,
      brand: 'earthwise',
      rating: 3.6,
      numReviews: 36,
      description: `Ultra lightweight and easy to use, 21" brush width yard sweeper, Leaf Sweeper with spinning rake-like action with 70% pick-up on the first pass; multiple passes required to pick up 100% of the leaves.
Works best on flat surfaces, short or recently cut grass; good for dry leaves only. Does not collect any other yard debris.
Do NOT use in wet or windy conditions. For best results: only use in dry non-windy conditions. Wet material is difficult to sweep up and wind increases material blown out before reaching the collection bin.
Adjustable leaf sweeper rake height for easy and efficient collection of debris. Height adjustments needs to be set just below your grass height for the sweeper to sweep up your leaves
Not ideal for collecting rocks, nuts, pinecones, or any other material besides dry leaves. Does not work well in wet or windy conditions.`,
    },
    {
      // _id: '1',
      name: 'Artificial Turf Sweeper',
      slug: 'articial-turf-sweeper',
      category: 'lawnsweeper',
      image: '/images/p29.jpg', // 679px × 829px
      images:['/images/p29.2.jpg','/images/p29.3.jpg','/images/p29.4.jpg','/images/p29.5.jpg','/images/p29.6.jpg'],
      price: 120,
      countInStock: 220,
      brand: 'garland',
      rating: 4.6,
      numReviews: 65,
      description: `ARTIFICIAL GRASS SWEEPER: An essential tool for maintaining the fresh appeal of fake grass, this specialized power broom for artificial turf is designed to effectively groom and clean lawn turf, removing debris, dirt, and leaves, while also lifting the blades of the grass to maintain its natural look and feel.
ADJUSTABLE TURF LAWN VACUUM: This leaf sweeper features adjustable settings that allow users to control the height and intensity of the combs, in order to fit the characteristics of each grass carpet - properly cleaning, and extending the lifespan of your turf grass in the process.
ELECTRIC POWER BROOM: This lawn sweeper for leaves features a 1,800 W power corded electric motor is ideal for fake grass surfaces up to 4,500 sqft. With a 16" working width, it reaches into every corner of your lawn to recover its volume, and efficiently collects the dirt in its high capacity 40 liter catcher bag.
PUSH LAWN SWEEPER: With its patented roller, easy maintenance for your turf is guaranteed. It can comb, sweep, and collect debris in just one go - it's also useful for cleaning dog hair from artificial grass. Plus, it has an adjustable handle to make sure you're always working in a comfortable position.`,
    },
    {
      // _id: '1',
      name: 'AIVOLT 40V Cordless Leaf Blower Vacuum',
      slug: 'aivolt-leaf-blower',
      category: 'leafblower',
      image: '/images/p30.jpg', // 679px × 829px
      images:['/images/p30.2.jpg','/images/p30.3.jpg','/images/p30.4.jpg','/images/p30.5.jpg','/images/p30.6.jpg'],
      price: 90,
      countInStock: 220,
      brand: 'aivolt',
      rating: 3.9,
      numReviews: 95,
      description: `【LEAF BLOWER, MULCHER and VACUUM】– Our cordless leaf blower features 3-in-1 Blowing Vacuum and Mulching for Convenient Clean-up, Innovative axial fan designed to maximize air output and run time, Easily blow away your leaves in the yard, snow, and blowing dust from hard-to-clean corners
【LIGHTWEIGHT & CONVENIENT DESIGN】- The lightweight leaf blower vacuum Shredder ( only 7lbs) It includes a heavy-duty bag and adjustable wheels, allowing you to easily maneuver over a variety of terrains, shoulder strap, Adjustable front support handle Vacuum/blower tube make it easy to move
【SUPER BATTERY LIFE】 - This cordless leaf Blower comes with 2x20v battery and charger, Our machine can work for 15-25 minutes at different speed. If the running time is not enough for you, we also have replacement batteries for you to choose`,
    },
    {
      // _id: '1',
      name: 'Worx leaf blower',
      slug: 'worx-leaf-blower',
      category: 'leafblower',
      image: '/images/p31.jpg', // 679px × 829px
      images:['/images/p31.2.jpg','/images/p31.3.jpg','/images/p31.4.jpg','/images/p31.5.jpg','/images/p31.6.jpg'],
      price: 65,
      countInStock: 220,
      brand: 'worx',
      rating: 3.7,
      numReviews: 20,
      description: `LEAF BLOWER, MULCHER and VACUUM: The proprietary design changes from a blower to a vacuum with a mulcher with just the turn of a dial. Blow, vacuum, and mulch all day long if you want. But you won't have to. The Worx Trivac makes quick work of yard work.No-Load Speed : 16500/MIN.
A WIDE, STRONG STREAM OF AIR: 600 CFM (Cubic Feet per Minute) come streaming out of the wide-mouth tube. That's high-capacity air volume so you clear your property with less passes back and forth.
METAL MULCHER: The metal impeller with its shredder blade cuts in two stages, chopping leaves down to a 16:1 mulch ratio - that's 16 bags of leaves mulched into one.`,
    },

    
  ],
};
export default data;
