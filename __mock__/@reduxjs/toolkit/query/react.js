// __mocks__/@reduxjs/toolkit/query/react.js
const actualToolkitQuery = jest.requireActual('@reduxjs/toolkit/query/react');

module.exports = {
  ...actualToolkitQuery,
  useGetPokemonByNameQuery: jest.fn(),
};
