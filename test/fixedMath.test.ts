import fixedMath from '../src/index';

describe('fixedMath', () => {

  describe('Using round algorithm should approximate to the nearest number', () => {

    test(`If the precision is > 0, then it should truncate 'precision' decimal digits`, () => {
      expect(fixedMath(125.34567, 1)).toBe(125.3);
      expect(fixedMath(125.34567, 2)).toBe(125.35);
      expect(fixedMath(125.34567, 3)).toBe(125.346);
      expect(fixedMath(125.34567, 4)).toBe(125.3457);
      expect(fixedMath(125.34567, 5)).toBe(125.34567);
      expect(fixedMath(125.34567, 6)).toBe(125.34567);
    });

    test(`If the precision is == 0, then it should truncate every decimal digit`, function() {
      expect(fixedMath(125.6, 0)).toBe(126);
      expect(fixedMath(125.4, 0)).toBe(125);
    });

    test(`If the precision is < 0, then it should truncate every digit
        and -precision digits of the integer part`, () => {
      expect(fixedMath(125.34567, -1)).toBe(130);
      expect(fixedMath(125.34567, -2)).toBe(100);
    });

    test('It should handle unexpected typed values gracefully', function() {
      expect(fixedMath(NaN, 5)).toBe(0);
      expect(fixedMath(NaN, 0)).toBe(0);
      expect(fixedMath(NaN, -5)).toBe(0);
    });
  });

  describe(`Using ceil algorithm should approximate to the smallest number greater than or
            equal to the truncated number`, () => {

    test(`If the precision is > 0, then it should truncate 'precision' decimal digits`, () => {
      expect(fixedMath(125.34567, 1, 'ceil')).toBe(125.4);
      expect(fixedMath(125.34567, 2, 'ceil')).toBe(125.35);
      expect(fixedMath(125.34567, 3, 'ceil')).toBe(125.346);
      expect(fixedMath(125.34567, 4, 'ceil')).toBe(125.3457);
      expect(fixedMath(125.34567, 5, 'ceil')).toBe(125.34567);
      expect(fixedMath(125.34567, 6, 'ceil')).toBe(125.34567);
    });
  
    test(`If the precision is == 0, then it should truncate every decimal digit`, () => {
      expect(fixedMath(125.6, 0, 'ceil')).toBe(126);
      expect(fixedMath(125.4, 0, 'ceil')).toBe(126);
    });
  
    test(`If the precision is < 0, then it should truncate every digit
          and -precision digits of the integer part`, () => {
      expect(fixedMath(125.34567, -1, 'ceil')).toBe(130);
      expect(fixedMath(125.34567, -2, 'ceil')).toBe(200);
    });

    test('It should handle unexpected typed values gracefully', function() {
      expect(fixedMath(NaN, 5, 'ceil')).toBe(0);
      expect(fixedMath(NaN, 0, 'ceil')).toBe(0);
      expect(fixedMath(NaN, -5, 'ceil')).toBe(0);
    });

  });

  describe(`Using floor algorithm should approximate to the greatest number less than or
            equal to the truncated number`, () => {

    test(`If the precision is > 0, then it should truncate 'precision' decimal digits`, () => {
      expect(fixedMath(125.34567, 1, 'floor')).toBe(125.3);
      expect(fixedMath(125.34567, 2, 'floor')).toBe(125.34);
      expect(fixedMath(125.34567, 3, 'floor')).toBe(125.345);
      expect(fixedMath(125.34567, 4, 'floor')).toBe(125.3456);
      expect(fixedMath(125.34567, 5, 'floor')).toBe(125.34567);
      expect(fixedMath(125.34567, 6, 'floor')).toBe(125.34567);
    });
  
    test(`If the precision is == 0, then it should truncate every decimal digit`, () => {
      expect(fixedMath(125.6, 0, 'floor')).toBe(125);
      expect(fixedMath(125.4, 0, 'floor')).toBe(125);
    });
  
    test(`If the precision is < 0, then it should truncate every digit
          and -precision digits of the integer part`, () => {
      expect(fixedMath(125.34567, -1, 'floor')).toBe(120);
      expect(fixedMath(125.34567, -2, 'floor')).toBe(100);
    });

    test('It should handle unexpected typed values gracefully', function() {
      expect(fixedMath(NaN, 5, 'floor')).toBe(0);
      expect(fixedMath(NaN, 0, 'floor')).toBe(0);
      expect(fixedMath(NaN, -5, 'floor')).toBe(0);
    });

  });

  it('5. random', function() {
    for (var i = 0; i < 10000; i += 1) {
      var r = Math.random();
      expect((fixedMath(r, 2) + '').length).toBeLessThanOrEqual(4);
    }
  });

});