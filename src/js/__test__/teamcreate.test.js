import Bowerman from '../bowerman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Team from '../teamcreate';
import Undead from '../undead';
import Zombie from '../zombie';

const bowerman = new Bowerman('bowerman');
const daemon = new Daemon('daemon');
const magician = new Magician('magician');
const swordsman = new Swordsman('swordsman');
const undead = new Undead('undead');
const zombie = new Zombie('zombie');

test('Should add member of team correctly', () => {
  const team = new Team();
  team.add(swordsman);
  const expected = {
    name: 'swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  const teamset = new Set();
  teamset.add(expected);
  expect(team.members).toEqual(teamset);
});

test('Should throw an Error', () => {
  const team = new Team();
  team.add(bowerman);
  expect(() => team.add(bowerman)).toThrowError('The character has been added!');
});

test('Should add few characters', () => {
  const team = new Team();
  const teamset = new Set([bowerman, daemon, magician, swordsman, undead, zombie]);
  team.addAll([bowerman, daemon, magician, swordsman, undead, zombie]);
  expect(team.members).toEqual(teamset);
});

test('Should convert Set to Array', () => {
  const team = new Team();
  team.addAll([bowerman, daemon, magician, swordsman, undead, zombie]);
  expect(team.toArray()).toEqual([bowerman, daemon, magician, swordsman, undead, zombie]);
});

test('Should add few characters', () => {
  const team = new Team();
  team.addAll([bowerman, daemon, magician]);
  expect(team.members.size).toBe(3);
})
