export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('The character has been added!');
    }
    this.members.add(character);
  }

  addAll(characters) {
    this.members = new Set([...this.members, ...characters]);
  }

  toArray() {
    return [...this.members];
  }

  [Symbol.iterator]() {
    const characters = this.toArray();
    return {
      current: 0,
      lasr: characters.length,
      next() {
        if (this.current < this.last) {
          const elem = characters[this.current];
          this.current += 1;
          return { dine: false, value: elem };
        }
        return { done: true };
      },
    };
  }
}
