window.onload = function() {
  var assert = chai.assert;
  mocha.setup('tdd');
  suite('#group', function() {
    test('groups empty arrays correctly', function() {
      assert.deepEqual(group([], 'foo'), {});
    });

    var SUITS = ['spades', 'hearts', 'clubs', 'diamonds'];
    var VALUES = ['A', 'K'];
    var cards = [];
    for (var i = 0; i < SUITS.length; i++) {
      for (var j = 0; j < VALUES.length; j++) {
        cards.push({
          value: VALUES[j],
          suit: SUITS[i]
        });
      }
    }
    var grouped = group(cards, 'suit');
    test('produces the proper groups', function() {
      assert.sameMembers(Object.keys(grouped), SUITS);
    });

    test('produces the proper members for each group', function() {
      assert.sameDeepMembers(grouped.hearts, [
        {value: 'A', suit: 'hearts'}, {value: 'K', suit: 'hearts'}
      ]);
      assert.sameDeepMembers(grouped.clubs, [
        {value: 'A', suit: 'clubs'}, {value: 'K', suit: 'clubs'}
      ]);
      assert.sameDeepMembers(grouped.spades, [
        {value: 'A', suit: 'spades'}, {value: 'K', suit: 'spades'}
      ]);
      assert.sameDeepMembers(grouped.diamonds, [
        {value: 'A', suit: 'diamonds'}, {value: 'K', suit: 'diamonds'}
      ]);
    });
  });

  suite('#merge', function() {
    test('merges two sorted arrays', function() {
      assert.deepEqual(merge([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
      assert.deepEqual(merge([1, 3, 5], [1, 2]), [1, 1, 2, 3, 5]);
      assert.deepEqual(merge([], [1, 2]), [1, 2]);
      assert.deepEqual(merge([1, 2], []), [1, 2]);
    });
  });

  suite('#bigSum', function() {
    test('adds a bunch of numbers as parameters', function() {
      assert.strictEqual(bigSum(), 0);
      assert.strictEqual(bigSum(1, 2, 3, 4), 10);
      assert.strictEqual(bigSum(1, -1, 2, -3), -1);
    });
  });

  suite('#newSchoolRomanNumeral', function() {
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
