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

  mocha.run();
}
