const losmeas = {
  name: 'Losmeas',
  age: 26,
  gender: 'female'
};

const resolvers = {
  Query: {
    person: () => losmeas
  }
};

export default resolvers;
