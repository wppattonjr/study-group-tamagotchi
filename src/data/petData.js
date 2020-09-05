const petActionsData = [
  {
    id: 'id-eat',
    name: 'eat',
    score: 100,
    button1: 'Healthy',
    button2: 'Unhealthy',
  },
  {
    id: 'id-play',
    name: 'play',
    score: 50,
    button1: 'Super Fun Activity',
    button2: 'Slightly Fun Activity'
  },
  {
    id: 'id-fight',
    name: 'fight',
    score: 100,
    button1: 'Bravely Running Away',
    button2: 'Commit Violence'
  },

  {
    id: 'id-sleep',
    name: 'sleep',
    score: 50,
    button1: 'Nap',
    button2: 'Deep Slumber'
  }
];

const getPetActions = () => petActionsData;

export default { getPetActions };
