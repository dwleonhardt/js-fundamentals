window.onload = function() {
  var assert = chai.assert;
  mocha.setup('tdd');

  suite('bigSum', function() {
    test('adds a bunch of numbers as parameters', function() {
      assert.strictEqual(bigSum(1, 2, 3, 4), 10);
      assert.strictEqual(bigSum(1, -1, 2, -3), -1);
      assert.strictEqual(bigSum(), 0);
    });
  });

  suite('merge', function() {
    test('merges two sorted arrays', function() {
      assert.deepEqual(merge([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
      assert.deepEqual(merge([1, 3, 5], [1, 2]), [1, 1, 2, 3, 5]);
      assert.deepEqual(merge([], [1, 2]), [1, 2]);
      assert.deepEqual(merge([1, 2], []), [1, 2]);
      assert.deepEqual(merge([], []), []);
    });
  });

  suite('unique', function() {
    test('returns an array with only unique values', function() {
      assert.sameMembers(unique([]), []);
      assert.sameMembers(unique(['a', 'b', 'a', 'c']), ['a', 'b', 'c']);
      assert.sameMembers(unique(['a', 'b', 'c']), ['a', 'b', 'c']);
    });
  });

  suite('oldSchoolRomanNumeral', function() {
    test('converts a number to a roman numeral in the old school format', function() {
      assert.strictEqual(oldSchoolRomanNumeral(1), 'I');
      assert.strictEqual(oldSchoolRomanNumeral(2), 'II');
      assert.strictEqual(oldSchoolRomanNumeral(4), 'IIII');
      assert.strictEqual(oldSchoolRomanNumeral(5), 'V');
      assert.strictEqual(oldSchoolRomanNumeral(6), 'VI');
      assert.strictEqual(oldSchoolRomanNumeral(9), 'VIIII');
      assert.strictEqual(oldSchoolRomanNumeral(10), 'X');
      assert.strictEqual(oldSchoolRomanNumeral(11), 'XI');
      assert.strictEqual(oldSchoolRomanNumeral(15), 'XV');
      assert.strictEqual(oldSchoolRomanNumeral(16), 'XVI');
      assert.strictEqual(oldSchoolRomanNumeral(52), 'LII');
      assert.strictEqual(oldSchoolRomanNumeral(72), 'LXXII');
      assert.strictEqual(oldSchoolRomanNumeral(72), 'LXXII');
      assert.strictEqual(oldSchoolRomanNumeral(134), 'CXXXIIII');
      assert.strictEqual(oldSchoolRomanNumeral(273), 'CCLXXIII');
      assert.strictEqual(oldSchoolRomanNumeral(749), 'DCCXXXXVIIII');
      assert.strictEqual(oldSchoolRomanNumeral(1000), 'M');
    });
  });

  suite('newSchoolRomanNumeral', function() {
    test('converts a number to a roman numeral in the new school format', function() {
      assert.strictEqual(newSchoolRomanNumeral(1), 'I');
      assert.strictEqual(newSchoolRomanNumeral(2), 'II');
      assert.strictEqual(newSchoolRomanNumeral(4), 'IV');
      assert.strictEqual(newSchoolRomanNumeral(5), 'V');
      assert.strictEqual(newSchoolRomanNumeral(6), 'VI');
      assert.strictEqual(newSchoolRomanNumeral(9), 'IX');
      assert.strictEqual(newSchoolRomanNumeral(10), 'X');
      assert.strictEqual(newSchoolRomanNumeral(11), 'XI');
      assert.strictEqual(newSchoolRomanNumeral(15), 'XV');
      assert.strictEqual(newSchoolRomanNumeral(16), 'XVI');
      assert.strictEqual(newSchoolRomanNumeral(52), 'LII');
      assert.strictEqual(newSchoolRomanNumeral(72), 'LXXII');
      assert.strictEqual(newSchoolRomanNumeral(72), 'LXXII');
      assert.strictEqual(newSchoolRomanNumeral(134), 'CXXXIV');
      assert.strictEqual(newSchoolRomanNumeral(273), 'CCLXXIII');
      assert.strictEqual(newSchoolRomanNumeral(749), 'DCCXLIX');
      assert.strictEqual(newSchoolRomanNumeral(1000), 'M');
    });
  });

  mocha.run();
}
