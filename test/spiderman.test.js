const Spiderman=require('./../app/spiderman')
describe("Unit Test for Spiderman Class", () => {
    test('1) Create an spiderman object', () => {
      const andrewgarfield = new Spiderman('Spiderman Sony',31,'Andrew Garfield',2, 'Sony')

      expect(andrewgarfield.name).toBe('Spiderman Sony');
      expect(andrewgarfield.age).toBe(31);
      expect(andrewgarfield.actor).toBe('Andrew Garfield');
      expect(andrewgarfield.movies).toBe(2);
      expect(andrewgarfield.studio).toBe('Sony');
    });
    test('2) Use the method getInfo()', () => {
        const tomHolland = new Spiderman('Spiderman Sony',25,'Tom Holland',5, 'Marvel')
  
        expect(tomHolland.getInfo).toBe("Hey, I'm Tom Holland from Marvel studio");
       
      });
  })