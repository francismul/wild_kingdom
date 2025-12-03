export interface Animal {
  slug: string;
  name: string;
  title: string;
  description: string;
  details: {
    intro: string;
    social: string;
    hunting: string;
    diet: string;
    habitat_info: string;
    conservation_status: string;
    fun_facts: string[];
    facts: { label: string; value: string }[];
  };
  story: {
    title: string;
    content: string;
  };
  images: {
    hero: string;
    gallery: string[];
  };
  video?: string;
  color: string;
}

export const animals: Animal[] = [
  {
    slug: 'lion',
    name: 'Lion',
    title: 'The Lion',
    description: 'King of the Savanna',
    details: {
      intro: 'The lion has been admired for centuries as a symbol of courage, strength, and nobility. Living in social groups called prides, these magnificent predators roam the grasslands of Africa, their powerful roars echoing across the plains.',
      social: 'Lions live in groups called prides, typically consisting of 5-15 individuals. Females do most of the hunting and cub rearing, while males defend the territory.',
      hunting: 'Lions are apex predators with incredible hunting skills. They work together in coordinated attacks, with lionesses using stealth and teamwork.',
      diet: 'Lions are carnivores. Their diet consists mainly of large ungulates such as wildebeest, zebras, and buffaloes. They are opportunistic eaters and will also scavenge or steal kills from other predators like hyenas.',
      habitat_info: 'Lions primarily inhabit the savannas and grasslands of Africa, though they can also be found in dense bush and open woodlands. Historically, their range extended across much of Europe, Africa, and Asia.',
      conservation_status: 'Vulnerable',
      fun_facts: [
        "A lion's roar can be heard up to 8 kilometers (5 miles) away.",
        "Lions spend up to 20 hours a day sleeping or resting.",
        "A lion's heels don't touch the ground when it walks.",
        "They are the only cats that live in groups."
      ],
      facts: [
        { label: 'Weight', value: '150-250 kg' },
        { label: 'Lifespan', value: '10-14 years' },
        { label: 'Habitat', value: 'Grasslands & Savannas' },
      ],
    },
    story: {
      title: 'The Pride of the Serengeti',
      content: 'Under the scorching African sun, the pride rested in the shade of an acacia tree. The golden grass shimmered in the heat. A young cub, full of energy, tugged at the tail of the resting male, who let out a low, rumbling grumble but didn\'t move. It was the dry season, and water was scarce. Tonight, the lionesses would embark on a hunt that would test their endurance and coordination, ensuring the survival of the pride for another week. As the sun dipped below the horizon, painting the sky in hues of orange and purple, the queens of the savanna rose, their eyes fixed on a distant herd of wildebeest.'
    },
    images: {
      hero: 'https://images.pexels.com/photos/1598377/pexels-photo-1598377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/1912176/pexels-photo-1912176.jpeg',
        'https://images.pexels.com/photos/40803/lion-animal-predator-big-cat-40803.jpeg',
        'https://images.pexels.com/photos/1622508/pexels-photo-1622508.jpeg',
        'https://images.pexels.com/photos/627667/pexels-photo-627667.jpeg',
        'https://images.pexels.com/photos/3498323/pexels-photo-3498323.jpeg',
      ]
    },
    video: 'https://www.youtube.com/embed/iDjoNwLWlYY',
    color: '#C69C6D'
  },
  {
    slug: 'leopard',
    name: 'Leopard',
    title: 'The Leopard',
    description: 'Master of Stealth',
    details: {
      intro: 'Solitary and elusive, the leopard is the most graceful and secretive of the big cats. Masters of camouflage, they can blend perfectly into their surroundings.',
      social: 'Leopards are strictly solitary animals. They only come together to mate. Males and females have separate territories.',
      hunting: 'Leopards are ambush predators. They rely on stealth to get within striking distance of their prey before pouncing.',
      diet: 'Leopards have the widest diet of any large predator. They eat anything from dung beetles to large antelopes. They are known to hoist their kills into trees to protect them from scavengers.',
      habitat_info: 'Leopards are highly adaptable and can live in diverse habitats ranging from rainforests and savannas to deserts and mountains. They are found across Africa and parts of Asia.',
      conservation_status: 'Vulnerable',
      fun_facts: [
        "Leopards are excellent swimmers and are very comfortable in the water.",
        "They can leap up to 6 meters horizontally and 3 meters vertically.",
        "Their spots are called rosettes because they look like roses.",
        "Leopards can carry prey up to three times their own body weight up a tree."
      ],
      facts: [
        { label: 'Weight', value: '30-90 kg' },
        { label: 'Lifespan', value: '12-17 years' },
        { label: 'Habitat', value: 'Diverse (Forests to Savannas)' },
      ],
    },
    story: {
      title: 'Shadows in the Canopy',
      content: 'High in the branches of a marula tree, a leopard draped herself over a sturdy limb, her spotted coat blending seamlessly with the dappled sunlight filtering through the leaves. Below, a herd of impala grazed, unaware of the danger lurking above. She had been watching them for hours, patient as a stone. This was her domain, a vertical world where she was the undisputed queen. With a silent fluidity that defied gravity, she began her descent, moving not like an animal, but like a shadow detaching itself from the bark.'
    },
    images: {
      hero: 'https://images.pexels.com/photos/1642068/pexels-photo-1642068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/1316297/pexels-photo-1316297.jpeg',
        'https://images.pexels.com/photos/20449623/pexels-photo-20449623.jpeg',
        'https://images.pexels.com/photos/2541239/pexels-photo-2541239.jpeg',
        'https://images.pexels.com/photos/32367449/pexels-photo-32367449.jpeg',
        'https://images.pexels.com/photos/1642068/pexels-photo-1642068.jpeg',
      ]
    },
    video: 'https://www.youtube.com/embed/xvyz6ZL8tTI',
    color: '#E6B800'
  },
  {
    slug: 'rhino',
    name: 'Rhino',
    title: 'The Rhinoceros',
    description: 'The Armored Giant',
    details: {
      intro: 'Rhinoceroses are large, herbivorous mammals identified by their horned snouts. They are some of the largest remaining megafauna.',
      social: 'Rhinos can be solitary or social depending on the species. White rhinos are the most social.',
      hunting: 'Rhinos are herbivores, but they are fierce defenders. They will charge at any perceived threat.',
      diet: 'Rhinos are herbivores. Black rhinos are browsers, eating trees and bushes, while White rhinos are grazers, feeding on grasses. They need to drink water daily.',
      habitat_info: 'Rhinos can be found in savannas, dense forests, and tropical bushlands. Their habitat varies by species, with White rhinos preferring open grasslands and Black rhinos preferring dense bush.',
      conservation_status: 'Critically Endangered',
      fun_facts: [
        "Rhino horns are made of keratin, the same protein that makes up human hair and nails.",
        "They have poor eyesight but an excellent sense of smell and hearing.",
        "A group of rhinos is called a 'crash'.",
        "Rhinos communicate through sneezes, honks, and poo!"
      ],
      facts: [
        { label: 'Weight', value: '1,000-2,300 kg' },
        { label: 'Lifespan', value: '35-50 years' },
        { label: 'Habitat', value: 'Savannas & Forests' },
      ],
    },
    story: {
      title: 'The Ancient Guardian',
      content: 'The old bull rhino stood like a prehistoric monument against the rising sun. His skin, thick and folded like armor plating, bore the scars of many battles. He was the guardian of this watering hole, a silent sentinel in a changing world. A young calf peered timidly from behind its mother nearby. The bull snorted, a puff of dust rising from the dry earth, and turned his massive head towards the wind, checking for the scent of danger. In his presence, even the lions kept their distance.'
    },
    images: {
      hero: 'https://images.pexels.com/photos/624063/pexels-photo-624063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/30705488/pexels-photo-30705488.jpeg',
        'https://images.pexels.com/photos/4394471/pexels-photo-4394471.jpeg',
        'https://images.pexels.com/photos/5872117/pexels-photo-5872117.jpeg',
        'https://images.pexels.com/photos/1577478/pexels-photo-1577478.jpeg',
        'https://images.pexels.com/photos/469778/pexels-photo-469778.jpeg',
      ]
    },
    video: 'https://www.youtube.com/embed/NOgl1nW0NtA',
    color: '#8C8C8C'
  },
  {
    slug: 'elephant',
    name: 'Elephant',
    title: 'The Elephant',
    description: 'The Gentle Giant',
    details: {
      intro: 'African elephants are the largest land animals on Earth. They are highly intelligent and have complex emotions.',
      social: 'Elephants live in matriarchal herds led by the oldest female. They have deep family bonds.',
      hunting: 'Elephants are herbivores. They spend up to 16 hours a day eating.',
      diet: 'Elephants consume a massive amount of vegetation daily, including grasses, leaves, bamboo, bark, and roots. An adult elephant can eat up to 300 pounds of food in a single day.',
      habitat_info: 'African elephants inhabit a diverse range of habitats, including savannas, forests, deserts, and marshes. They are a keystone species, shaping their environment by pushing over trees and digging for water.',
      conservation_status: 'Endangered',
      fun_facts: [
        "An elephant's trunk has around 40,000 distinct muscles.",
        "Elephants are one of the few animals that can recognize themselves in a mirror.",
        "They can communicate using infrasound, a low-frequency rumble that travels for miles.",
        "Baby elephants suck their trunks for comfort, just like humans suck their thumbs."
      ],
      facts: [
        { label: 'Weight', value: '2,500-6,000 kg' },
        { label: 'Lifespan', value: '60-70 years' },
        { label: 'Habitat', value: 'Savannas, Forests, Deserts' },
      ],
    },
    story: {
      title: 'The Long March',
      content: 'The matriarch paused, her trunk raised high, testing the breeze. The dry season had been harsh, and the waterholes were turning to mud. Behind her, the herd waited, trusting her ancient memory. She remembered a hidden spring from her childhood, a place that never ran dry. With a reassuring rumble to her calf, she signaled the move. The journey would be long and dusty, but her wisdom was their map. They walked in a single file, giant grey ghosts moving silently through the twilight.'
    },
    images: {
      hero: 'https://images.pexels.com/photos/1054666/pexels-photo-1054666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg',
        'https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg',
        'https://images.pexels.com/photos/68550/thailand-elephant-sunset-nature-68550.jpeg',
        'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg',
        'https://images.pexels.com/photos/1054654/pexels-photo-1054654.jpeg',
      ]
    },
    video: 'https://www.youtube.com/embed/6z6gbo0SpD8',
    color: '#7D7D7D'
  },
  {
    slug: 'buffalo',
    name: 'Cape Buffalo',
    title: 'The Cape Buffalo',
    description: 'The Black Death',
    details: {
      intro: 'The Cape Buffalo is known for its unpredictable nature and is considered one of the most dangerous animals in Africa.',
      social: 'Buffalo live in large herds which can number in the thousands. This provides protection against predators.',
      hunting: 'Buffalo are herbivores, grazers who need lots of water. They are formidable when cornered.',
      diet: 'Cape Buffalo are grazers, feeding primarily on tall, coarse grasses. They require water daily and are rarely found far from a water source.',
      habitat_info: 'They are found in swamps, floodplains, mopane grasslands, and forests of the major mountains of Africa. They avoid open areas without cover and need plenty of water.',
      conservation_status: 'Near Threatened',
      fun_facts: [
        "Cape Buffalo have never been domesticated due to their unpredictable nature.",
        "The fused base of their horns forms a continuous bone shield called a 'boss'.",
        "They are known to kill lions and have been nicknamed 'The Black Death' and 'Widowmaker'.",
        "Herds decide which direction to move by a form of 'voting' where they look in the direction they want to go."
      ],
      facts: [
        { label: 'Weight', value: '500-1,000 kg' },
        { label: 'Lifespan', value: '11-22 years' },
        { label: 'Habitat', value: 'Savannas & Floodplains' },
      ],
    },
    story: {
      title: 'Thunder of the Hooves',
      content: 'The herd was a sea of black horns and twitching ears, a thousand strong. They grazed peacefully near the riverbank until the wind shifted, carrying the scent of lion. In an instant, the mood changed. The bulls moved to the perimeter, forming an impenetrable wall of muscle and bone. They didn\'t run. They turned to face the threat. A low bellow started from the center, growing into a roar as the herd stamped the ground. Today, the hunters would become the hunted.'
    },
    images: {
      hero: 'https://images.pexels.com/photos/32617559/pexels-photo-32617559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/5127241/pexels-photo-5127241.jpeg',
        'https://images.pexels.com/photos/6551950/pexels-photo-6551950.jpeg',
        'https://images.pexels.com/photos/32617507/pexels-photo-32617507.jpeg',
        'https://images.pexels.com/photos/4768322/pexels-photo-4768322.jpeg',
        'https://images.pexels.com/photos/12775446/pexels-photo-12775446.jpeg',
      ]
    },
    video: 'https://www.youtube.com/embed/_KOXdeAXR0A',
    color: '#4A4A4A'
  }
];