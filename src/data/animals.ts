export interface Animal {
  slug: string;
  name: string;
  title: string;
  description: string;
  details: {
    intro: string;
    social: string;
    hunting: string;
    facts: { label: string; value: string }[];
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
      facts: [
        { label: 'Weight', value: '150-250 kg' },
        { label: 'Lifespan', value: '10-14 years' },
        { label: 'Habitat', value: 'Grasslands & Savannas' },
      ],
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
      facts: [
        { label: 'Weight', value: '30-90 kg' },
        { label: 'Lifespan', value: '12-17 years' },
        { label: 'Habitat', value: 'Diverse (Forests to Savannas)' },
      ],
    },
    images: {
      hero: 'https://images.pexels.com/photos/2541239/pexels-photo-2541239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/1316297/pexels-photo-1316297.jpeg',
        'https://images.pexels.com/photos/20449623/pexels-photo-20449623.jpeg',
        'https://images.pexels.com/photos/2541239/pexels-photo-2541239.jpeg',
        'https://images.pexels.com/photos/32367449/pexels-photo-32367449.jpeg',
        'https://images.pexels.com/photos/1642068/pexels-photo-1642068.jpeg',
      ]
    },
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
      facts: [
        { label: 'Weight', value: '1,000-2,300 kg' },
        { label: 'Lifespan', value: '35-50 years' },
        { label: 'Habitat', value: 'Savannas & Forests' },
      ],
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
      facts: [
        { label: 'Weight', value: '2,500-6,000 kg' },
        { label: 'Lifespan', value: '60-70 years' },
        { label: 'Habitat', value: 'Savannas, Forests, Deserts' },
      ],
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
      facts: [
        { label: 'Weight', value: '500-1,000 kg' },
        { label: 'Lifespan', value: '11-22 years' },
        { label: 'Habitat', value: 'Savannas & Floodplains' },
      ],
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
    color: '#4A4A4A'
  }
];
