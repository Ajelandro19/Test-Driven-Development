
describe("Unit Test for Spiderman Class", () => {
    test('1) Create an spiderman object', () => {
      const andrewgarfield = new Spiderman('Spiderman Sony',31,'Andrew Garfield',2, 'Sony')

      expect(andrewgarfield.name).toBe('Spiderman Sony');
      expect(andrewgarfield.age).toBe(31);
      expect(andrewgarfield.actor).toBe('Andrew Garfield');
      expect(andrewgarfield.movies).toBe(2);
      expect(andrewgarfield.studio).toBe('Sony');
    });
  })