const createArtwork = (title, accent, secondary) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
      <rect width="800" height="500" fill="#06070a"/>
      <rect x="40" y="40" width="720" height="420" rx="26" fill="#12141a" stroke="${accent}" stroke-width="3"/>
      <circle cx="250" cy="220" r="140" fill="${secondary}" opacity="0.25"/>
      <path d="M190 340 L250 150 L310 340 Z" fill="${accent}" opacity="0.8"/>
      <path d="M420 340 L500 170 L580 340 Z" fill="#f5d8a5" opacity="0.7"/>
      <rect x="120" y="380" width="560" height="18" rx="9" fill="${accent}" opacity="0.4"/>
      <text x="400" y="90" text-anchor="middle" font-family="Segoe UI, sans-serif" font-size="30" fill="#f5d8a5">${title}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const games = [
  {
    id: '1',
    title: 'Dark Souls Remastered',
    genre: 'Action RPG',
    releaseYear: '2018',
    developer: 'FromSoftware',
    publisher: 'Bandai Namco',
    difficulty: 'High',
    platforms: 'PC, PS4, Xbox One',
    image: createArtwork('Dark Souls Remastered', '#8b5a2b', '#1d1007'),
    description: 'A perilous journey through Lordran where patience and determination matter more than flashy combat.',
    story: 'The Chosen Undead rises from the ruins of a cursed kingdom to confront the spread of darkness and uncover the truth behind the First Flame.',
    features: ['Challenging boss encounters', 'Atmospheric world design', 'Meaningful exploration']
  },
  {
    id: '2',
    title: 'Dark Souls II',
    genre: 'Action RPG',
    releaseYear: '2014',
    developer: 'FromSoftware',
    publisher: 'Bandai Namco',
    difficulty: 'High',
    platforms: 'PC, PS3, Xbox 360',
    image: createArtwork('Dark Souls II', '#6b3e1a', '#140c07'),
    description: 'A darker and more intimate adventure that trades scale for harsh, memorable encounters.',
    story: 'A fallen monarch seeks to reclaim a world caught in endless decay as the curse of the undead spreads through the land.',
    features: ['Tactical combat', 'Expansive lore', 'Memorable boss fights']
  },
  {
    id: '3',
    title: 'Dark Souls III',
    genre: 'Action RPG',
    releaseYear: '2016',
    developer: 'FromSoftware',
    publisher: 'Bandai Namco',
    difficulty: 'High',
    platforms: 'PC, PS4, Xbox One',
    image: createArtwork('Dark Souls III', '#9f6d2e', '#221205'),
    description: 'A refined finale to the trilogy that leans into speed, aggression, and cinematic spectacle.',
    story: 'Ashen One ventures through the ruined kingdom of Lothric to end the cycle of fire and bring an end to the age of darkness.',
    features: ['Fast-paced combat', 'Rich visual style', 'Elegant level design']
  },
  {
    id: '4',
    title: 'Bloodborne',
    genre: 'Action RPG',
    releaseYear: '2015',
    developer: 'FromSoftware',
    publisher: 'Sony Interactive Entertainment',
    difficulty: 'Very High',
    platforms: 'PS4',
    image: createArtwork('Bloodborne', '#7a1e2a', '#130508'),
    description: 'A gothic masterpiece that combines brutal combat with unsettling atmosphere and rapid movement.',
    story: 'A hunter descends into the city of Yharnam in search of a cure, only to find a nightmare of blood and madness.',
    features: ['Agile combat', 'Haunting setting', 'Distinctive weapon design']
  },
  {
    id: '5',
    title: 'Sekiro: Shadows Die Twice',
    genre: 'Action',
    releaseYear: '2019',
    developer: 'FromSoftware',
    publisher: 'Activision',
    difficulty: 'Very High',
    platforms: 'PC, PS4, Xbox One',
    image: createArtwork('Sekiro', '#5d6f3c', '#12140d'),
    description: 'A sword-and-blood journey focused on precision, posture, and the mastery of intense duels.',
    story: 'A shinobi named Wolf seeks revenge after a brutal betrayal and embarks on a quest that crosses samurai, spirits, and destiny.',
    features: ['Posture-based combat', 'Skillful parries', 'Vertical exploration']
  },
  {
    id: '6',
    title: 'Elden Ring',
    genre: 'Open World',
    releaseYear: '2022',
    developer: 'FromSoftware',
    publisher: 'Bandai Namco',
    difficulty: 'High',
    platforms: 'PC, PS4, PS5, Xbox One, Xbox Series X/S',
    image: createArtwork('Elden Ring', '#6d4a1c', '#11110d'),
    description: 'A vast fantasy world filled with mystery, danger, and unforgettable encounters.',
    story: 'A Tarnished is called back to the shattered Lands Between to claim the Elden Ring and reshape the world itself.',
    features: ['Open-world exploration', 'Legendary boss battles', 'Rich lore']
  },
  {
    id: '7',
    title: 'Armored Core VI',
    genre: 'Mecha Action',
    releaseYear: '2023',
    developer: 'FromSoftware',
    publisher: 'Bandai Namco',
    difficulty: 'Medium',
    platforms: 'PC, PS4, PS5, Xbox One, Xbox Series X/S',
    image: createArtwork('Armored Core VI', '#385c70', '#08151e'),
    description: 'A high-speed mechanical combat experience that focuses on mobility, customization, and tactical freedom.',
    story: 'Raven takes on dangerous missions in a fractured world where every order carries a heavy cost.',
    features: ['Custom mech builds', 'Fast combat', 'Mission variety']
  },
  {
    id: '8',
    title: 'Demon\'s Souls',
    genre: 'Action RPG',
    releaseYear: '2020',
    developer: 'Bluepoint Games',
    publisher: 'Sony Interactive Entertainment',
    difficulty: 'High',
    platforms: 'PS5',
    image: createArtwork('Demon\'s Souls', '#6d2e1d', '#140707'),
    description: 'A beautifully rebuilt classic that proves that even the smallest rooms can feel monumental.',
    story: 'A lone hero descends into the kingdom of Boletaria to defeat a dark force that has swallowed the land in ruin.',
    features: ['Beautiful remaster', 'Tight level design', 'Punishing combat']
  }
];
