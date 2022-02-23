import Character from '../app';

test('Should correctly create a character', () => {
  const expected = {
    name: 'Test',
    type: 'Bowerman',
    health: 100,
    level: 1,
  };
  expect(new Character('Test', 'Bowerman')).toEqual(expected);
});

test('Should throw an error if name is not a string', () => {
  expect(() => new Character(44, 'Bowerman')).toThrowError('The name must be a string!');
});

test('Should throw an error if name does not consider 2 - 10 literas', () => {
  expect(() => new Character('b', 'Bowerman')).toThrowError('The name must contain from 2 to 10 letters!');
  expect(() => new Character('htyjfhvhgkygy')).toThrowError('The name must contain from 2 to 10 letters!');
});

test('if value is not in the list, throws an error', () => {
  expect(() => new Character('Human')).toThrowError('The value must be selected from the list: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie!');
});
