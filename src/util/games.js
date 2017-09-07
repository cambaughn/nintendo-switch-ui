
const games = [
  {
    title: 'Legend of Zelda: Breath of the Wild',
  },
  {
    title: 'MarioKart 8 Deluxe',
  },
  {
    title: 'Splatoon 2',
  },
  {
    title: 'SnipperClips',
  },
  {
    title: 'Arms',
  },
]

const getGames = (callback) => {
  callback(games);
}

export { getGames };
