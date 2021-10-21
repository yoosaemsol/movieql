export const people = [
  {
    id: '0',
    name: 'Losmeas',
    age: 26,
    gender: 'female'
  },
  {
    id: '1',
    name: 'Monica',
    age: 27,
    gender: 'female'
  },
  {
    id: '2',
    name: 'Rachel',
    age: 24,
    gender: 'female'
  },
  {
    id: '3',
    name: 'Chandler',
    age: 29,
    gender: 'male'
  },
  {
    id: '4',
    name: 'Joey',
    age: 25,
    gender: 'male'
  },
  {
    id: '5',
    name: 'Ross',
    age: 29,
    gender: 'male'
  }
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
