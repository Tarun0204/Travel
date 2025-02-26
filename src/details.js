const details = {
  destinations: [
    {
      id: "kenya",
      title: "Kenya: The Ultimate Wildlife Safari Destination",
      description:
        "Kenya is celebrated as one of Africa's premier wildlife safari destinations, drawing countless travelers from around the globe. With its stunning national parks, Kenya is renowned for its incredible variety of wildlife and is home to the famous 'Big 5.'",
      national_parks: [
        {
          name: "Maasai Mara National Park",
          description:
            "Maasai Mara is the crown jewel of Kenya's wildlife safari experience. This iconic park features vast savannahs adorned with acacia trees and is the epicenter of The Great Migration from mid-July to early October.",
          highlights: [
            "Witness the Big 5 and the Small 5 in their natural habitat.",
            "Best visited from June to October; April should be avoided due to slushy conditions.",
            "An unforgettable wildlife safari adventure awaits nature lovers and enthusiasts.",
          ],
        },
        {
          name: "Amboseli National Park",
          description:
            "Situated at the foot of the majestic Mount Kilimanjaro, Amboseli is famous for its striking volcanic landscapes and is home to some of the largest elephants, known as tuskers.",
          highlights: [
            "Experience the awe of seeing elephants with tusks that touch the ground.",
            "Flamingos flock to the park’s salt lakes, creating stunning pink landscapes.",
            "Amboseli offers a remarkable setting for wildlife photography and safari experiences.",
          ],
        },
        {
          name: "Samburu National Reserve",
          description:
            "Samburu is one of Kenya's hidden gems, rich in wildlife and located alongside the Ewaso Nyiro River. This reserve is essential for a complete wildlife safari experience in Kenya.",
          highlights: [
            "Spot rare northern species such as Grevy's zebra and reticulated giraffe.",
            "The reserve is famous for its packs of painted wild dogs, known for their intelligence in hunting.",
            "A must-visit for those seeking unique wildlife encounters off the beaten path.",
          ],
        },
        {
          name: "Lake Nakuru National Park",
          description:
            "Initially recognized for its birdlife, Lake Nakuru was designated a National Park in 1968 and is now known for hosting a large population of white rhinos.",
          highlights: [
            "The lake covers a significant portion of the park, attracting thousands of flamingos, making it a birdwatcher's paradise.",
            "Explore diverse ecosystems teeming with wildlife, perfect for photography and safari tours.",
            "Enjoy breathtaking views and an array of animal species.",
          ],
        },
      ],
      must_see_attractions: [
        {
          name: "Giraffe Centre",
          location: "Langata, just outside Nairobi",
          description:
            "Dedicated to breeding the endangered Rothschild giraffe. Visitors can learn about these majestic creatures and even feed them with care.",
        },
        {
          name: "David Sheldrick Elephant Orphanage",
          description:
            "Founded by Daphne Sheldrick, this orphanage is dedicated to rescuing elephant and rhino calves. The daily bathing and feeding sessions are heartwarming highlights for animal lovers and safari enthusiasts alike.",
        },
      ],
      visa_requirements: {
        e_visa:
          "Foreign nationals traveling to Kenya can apply for an E-Visa. Check the eligibility list for exemptions.",
        visa_free_entry:
          "Starting January 2024, Indian nationals can visit Kenya without a visa.",
      },
      climate:
        "Kenya boasts a diverse climate, generally characterized by warm and pleasant weather throughout the year. The dry seasons, which vary by region, are the best times for wildlife safaris and outdoor adventures.",
    },
    {
      id: "vietnam",
      title:
        "Discover the Wonders of Vietnam: A Complete Guide to the 'Land of the Ascending Dragon'",
      description:
        "Vietnam is an enchanting country in Southeast Asia, known for its diverse landscapes, rich cultural heritage, and vibrant local traditions. Whether you're looking for a peaceful escape or an adventurous journey, Vietnam offers a unique blend of natural beauty, modern conveniences, and ancient history.",
      geography:
        "Vietnam’s geography is defined by towering mountains, expansive rice terraces, and a long coastline. The country is a mix of highlands, dense forests, and pristine beaches, making it one of the most scenic and diverse regions in Southeast Asia.",
      airports: [
        {
          name: "Noi Bai International Airport (HAN)",
          location: "Hanoi",
          description:
            "One of the busiest airports in Vietnam, serving northern Vietnam. It connects Hanoi with major international destinations and is the main gateway for exploring the northern region.",
        },
        {
          name: "Tan Son Nhat International Airport (SGN)",
          location: "Ho Chi Minh City",
          description:
            "The largest airport in the country, offering flights to numerous global destinations and providing easy access to the southern regions of Vietnam.",
        },
      ],
      climate:
        "Vietnam has a tropical climate with a distinct monsoon season from May to October. The weather varies by region, with the north experiencing cooler winters and the south remaining warm year-round.",
      culture:
        "Vietnam's rich cultural heritage reflects centuries-old traditions influenced by various dynasties and cultures. It is famous for its festivals, vibrant art forms, cuisine, handicrafts, and ancient architecture.",
      visa_information: {
        apply_visa:
          "Foreign visitors should check specific visa requirements for their country before planning their trip. Vietnam offers several visa options, including e-visas.",
      },
      top_destinations: [
        {
          category: "Cruise the Majestic Waters of Vietnam",
          places: [
            {
              name: "Halong Bay",
              description:
                "A UNESCO World Heritage Site known for its emerald waters and thousands of limestone islands. Visitors can enjoy boat cruises, exploring caves and floating villages.",
            },
            {
              name: "Mekong Delta",
              description:
                "Famous for its intricate network of rivers, swamps, and floating markets. A boat tour through the delta provides a glimpse into traditional Vietnamese life.",
            },
            {
              name: "Sapa",
              description:
                "Nestled in the Hoang Lien Son mountains, Sapa is renowned for its terraced rice fields and ethnic hill tribes. Visitors can trek through the beautiful valleys and enjoy the cool climate and breathtaking views.",
            },
            {
              name: "Ha Giang",
              description:
                "For those looking for a more remote adventure, Ha Giang offers stunning mountain passes, untouched villages, and some of the most dramatic landscapes in Vietnam. It’s perfect for motorbike tours and photography enthusiasts.",
            },
          ],
        },
      ],
    },
    {
      id: "tanzania",
      title: "Tanzania - Cradle of Mother Nature",
      description:
        "Tanzania, one of the world's most diverse wilderness destinations, offers an unparalleled combination of flora, wildlife, and breathtaking landscapes. Home to over 20% of Africa’s animal population, it boasts the spectacular annual wildebeest migration.",
      highlights: [
        "Every February and March, more than a million wildebeests gather on the Ndutu Plains for the calving season.",
        "Rare sightings of critically endangered East African black rhinos in Ngorongoro and Mkomazi.",
        "Tarangire is home to the legendary elephant tuskers.",
        "Lake Manyara offers stunning views of flamingo flocks coloring the waters.",
      ],
      visa_requirements: {
        single_entry_visa:
          "Travelers require a single-entry visa valid for up to three months. Check the official Tanzanian immigration website for more details.",
      },
      national_parks: [
        {
          name: "Serengeti National Park",
          description:
            "Known as 'The Land of Endless Plains,' Serengeti offers rocky outcrops for lion sightings, rivers cutting through the plains, and diverse woodlands, making it a globally significant ecosystem.",
        },
        {
          name: "Ngorongoro Conservation Area",
          description:
            "Home to the world’s largest inactive volcanic caldera, the Ngorongoro Crater hosts over 30,000 animals, including black rhinos, lions, leopards, and cheetahs, creating an unforgettable wildlife experience.",
        },
        {
          name: "Tarangire National Park",
          description:
            "Famous for its annual elephant migration, Tarangire features massive baobab trees and is home to the endangered Ashy Starling, greater kudu, and fringe-eared oryx.",
        },
        {
          name: "Gombe Stream National Park",
          description:
            "Renowned for close encounters with chimpanzees, made famous by Jane Goodall’s research in the 1960s.",
        },
        {
          name: "Mikumi National Park",
          description:
            "Often called the 'second Serengeti,' Mikumi is teeming with lions, giraffes, zebras, and other wildlife.",
        },
        {
          name: "Udzungwa Mountains National Park",
          description:
            "A paradise of waterfalls, rainforest islands, and biodiversity, including four endemic primate species.",
        },
      ],
      must_see_attractions: [
        {
          name: "Mbudya Island",
          location: "Near Dar es Salaam",
          description:
            "A serene escape with crystal-clear waters, delicious seafood, and pristine beaches.",
        },
        {
          name: "St. Joseph's Cathedral",
          location: "Dar es Salaam",
          description:
            "A beautiful Gothic-style Roman Catholic cathedral, known for its Sunday English mass at 8:30 AM.",
        },
        {
          name: "Kivukoni Fish Market",
          location: "Dar es Salaam",
          description:
            "A bustling market offering an authentic local experience as fishermen unload their fresh catch.",
        },
        {
          name: "National Museum of Dar es Salaam",
          location: "Dar es Salaam",
          description:
            "Explore Tanzania’s history and culture, including unique exhibits like wooden bicycles.",
        },
        {
          name: "Coco Beach",
          location: "Msasani Peninsula, Dar es Salaam",
          description:
            "A vibrant beach area popular for relaxation, food, and social gatherings.",
        },
      ],
    },
    {
      id: "kerala",
      title: "Discover the Magic of Kerala: A Paradise on Earth",
      description:
        "Kerala, often referred to as 'God's Own Country,' is a tropical paradise in South India known for its lush landscapes, serene backwaters, vibrant culture, and delicious cuisine. Whether you're looking for a relaxing getaway or an adventurous escape, Kerala offers a unique travel experience.",
      must_see_attractions: [
        {
          name: "Alleppey Backwaters",
          description:
            "Alleppey, also known as Alappuzha, is famous for its picturesque backwaters and houseboat cruises. It is the best place to experience Kerala’s tranquil waterways.",
          highlights: [
            "Stay in a luxurious houseboat and enjoy scenic views.",
            "Witness the famous Nehru Trophy Boat Race in August.",
            "Experience authentic Kerala cuisine while floating on the serene backwaters.",
          ],
        },
        {
          name: "Munnar",
          description:
            "Famed for its sprawling tea plantations, rolling hills, and cool climate, Munnar is a haven for nature lovers. Key attractions include Eravikulam National Park, home to the Nilgiri Tahr, Anamudi Peak, and Mattupetty Dam.",
          highlights: [
            "Visit the Eravikulam National Park to see the endangered Nilgiri Tahr.",
            "Enjoy panoramic views from Top Station.",
            "Explore tea plantations and learn about tea processing at the Tea Museum.",
          ],
        },
        {
          name: "Kumarakom",
          description:
            "A beautiful village on the banks of Vembanad Lake, Kumarakom is a must-visit for bird lovers and nature enthusiasts.",
          highlights: [
            "Visit the Kumarakom Bird Sanctuary, home to migratory birds.",
            "Enjoy a serene boat ride through the backwaters.",
            "Experience a traditional Ayurvedic massage and wellness retreat.",
          ],
        },
        {
          name: "Kovalam Beach",
          description:
            "One of Kerala’s most famous beaches, Kovalam is known for its crescent-shaped coastline and vibrant atmosphere.",
          highlights: [
            "Relax on the golden sandy beach and enjoy water sports.",
            "Visit the iconic lighthouse at Lighthouse Beach.",
            "Experience Ayurvedic treatments at one of the beachside resorts.",
          ],
        },
        {
          name: "Varkala Beach",
          description:
            "A stunning beach known for its dramatic cliffs, mineral springs, and spiritual ambiance.",
          highlights: [
            "Take in breathtaking sunset views from the cliff-top.",
            "Swim in the clean waters of Papanasam Beach, believed to have healing properties.",
            "Explore the bustling cliffside cafes and shops.",
          ],
        },
        {
          name: "Wayanad",
          description:
            "A nature lover’s paradise, Wayanad is home to lush forests, waterfalls, and unique historical sites.",
          highlights: [
            "Explore the ancient Edakkal Caves with prehistoric petroglyphs.",
            "Visit the Wayanad Wildlife Sanctuary to spot elephants and leopards.",
            "Trek to Chembra Peak for a breathtaking view and see the heart-shaped lake.",
          ],
        },
        {
          name: "Periyar Wildlife Sanctuary",
          description:
            "Located in Thekkady, this sanctuary is a haven for wildlife enthusiasts and nature lovers.",
          highlights: [
            "Take a boat ride on Periyar Lake to spot elephants and other wildlife.",
            "Go on a guided trek through the lush forest.",
            "Visit spice plantations and learn about Kerala’s rich spice heritage.",
          ],
        },
        {
          name: "Athirappilly Waterfalls",
          description:
            "Known as the 'Niagara of India,' Athirappilly is Kerala’s largest waterfall, set amidst dense forests.",
          highlights: [
            "Marvel at the breathtaking 80-foot-high waterfalls.",
            "Go on a nature trek through the Sholayar forests.",
            "Spot exotic birds and wildlife in the surrounding region.",
          ],
        },
        {
          name: "Fort Kochi",
          description:
            "A historic coastal town showcasing a blend of Portuguese, Dutch, and British influences.",
          highlights: [
            "See the iconic Chinese fishing nets in action.",
            "Visit St. Francis Church, one of the oldest European churches in India.",
            "Explore the vibrant art scene at the Kochi-Muziris Biennale.",
          ],
        },
        {
          name: "Padmanabhaswamy Temple",
          description:
            "One of the richest temples in the world, known for its intricate Dravidian architecture and religious significance.",
          highlights: [
            "Marvel at the temple’s towering gopuram (entrance tower).",
            "Experience the temple’s rich history and spiritual ambiance.",
            "Discover the temple’s hidden vaults rumored to contain immense treasures.",
          ],
        },
      ],
      culture:
        "Kerala is rich in cultural heritage, known for its classical dance forms like Kathakali and Mohiniyattam, traditional music, and ancient martial arts like Kalaripayattu.",
      cuisine: [
        "Enjoy traditional Kerala dishes such as Sadya, Appam with Stew, Puttu and Kadala Curry, and the famous Malabar Biryani.",
      ],
      best_time_to_visit:
        "The best time to visit Kerala is from September to March when the weather is pleasant and ideal for sightseeing, backwater cruises, and beach vacations.",
      visa_requirements: {
        e_visa:
          "Foreign nationals can apply for an Indian e-Visa online before traveling to Kerala.",
      },
      climate:
        "Kerala has a tropical climate with two monsoon seasons – Southwest Monsoon (June to September) and Northeast Monsoon (October to November). The winter season (December to February) offers the most pleasant weather.",
    },
    {
      id: "iceland",
      title: "Discover Iceland: Land of Fire, Ice, and Natural Wonders",
      description:
        "Iceland, located in the North Atlantic, is famous for its stunning landscapes, vibrant culture, and unique natural wonders. Known as the 'Land of Fire and Ice,' this island nation boasts a mesmerizing blend of glaciers, volcanoes, geysers, and hot springs, making it a dream destination for nature enthusiasts and adventure seekers alike.",
      must_see_attractions: [
        {
          name: "Reykjavik",
          description:
            "The capital of Iceland, Reykjavik, is a vibrant city known for its rich cultural scene and historical landmarks.",
          highlights: [
            "Visit Hallgrímskirkja, an iconic church offering stunning panoramic views of the city.",
            "Explore Harpa Concert Hall, a striking glass building known for cultural performances.",
            "Relax in the Blue Lagoon, the famous geothermal spa just outside the capital.",
          ],
        },
        {
          name: "The Golden Circle",
          description:
            "A popular tourist route featuring some of Iceland's most famous natural attractions.",
          highlights: [
            "Witness the tectonic plates meet at Thingvellir National Park, a UNESCO World Heritage site.",
            "Watch the Strokkur geyser erupt at the Geysir Geothermal Area.",
            "Admire the powerful Gullfoss Waterfall, one of Iceland’s most iconic falls.",
          ],
        },
        {
          name: "South Coast Adventures",
          description:
            "The southern coast of Iceland is home to breathtaking waterfalls, black sand beaches, and glaciers.",
          highlights: [
            "Stand behind the majestic Seljalandsfoss waterfall for a unique view.",
            "Marvel at Skógafoss, one of Iceland’s most spectacular waterfalls.",
            "Explore Reynisfjara Beach, a dramatic black sand beach with basalt columns.",
          ],
        },
        {
          name: "Northern Iceland",
          description:
            "A region known for its stunning fjords, waterfalls, and geothermal activity.",
          highlights: [
            "Visit Akureyri, the 'Capital of the North,' with lush botanical gardens and cultural sites.",
            "See Goðafoss, the 'Waterfall of the Gods,' with its breathtaking cascades.",
            "Explore Lake Mývatn, famous for its geothermal activity and rich birdlife.",
          ],
        },
        {
          name: "Westfjords",
          description:
            "A remote and rugged region known for its unspoiled natural beauty.",
          highlights: [
            "Marvel at Dynjandi Waterfall, a stunning series of cascading waterfalls.",
            "Hike in Hornstrandir Nature Reserve, a pristine area perfect for wildlife spotting.",
            "Enjoy the dramatic fjords and scenic coastal roads.",
          ],
        },
      ],
      culture:
        "Icelandic culture is deeply connected to its natural environment and history, with strong literary traditions, unique festivals, and a vibrant arts scene.",
      cuisine: [
        "Enjoy traditional Icelandic dishes such as Plokkfiskur (fish stew), Skyr (a yogurt-like dairy product), and Hákarl (fermented shark).",
      ],
      best_time_to_visit:
        "The best time to visit Iceland depends on the experience you seek. Summer (June to August) offers mild weather and long days for outdoor adventures, while winter (November to March) provides prime conditions for witnessing the Northern Lights.",
      visa_requirements: {
        e_visa:
          "Visitors from most countries can enter Iceland visa-free for short stays, but some travelers may require a Schengen visa. Check with the Icelandic Directorate of Immigration for the latest requirements.",
      },
      climate:
        "Iceland has a subarctic and oceanic climate. Summers are cool and mild, while winters are cold with snow, making it an ideal time to see the Northern Lights.",
    },
  ],
};

export default details;
