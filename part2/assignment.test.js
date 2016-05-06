window.onload = function() {
  var assert = chai.assert;
  mocha.setup('tdd');

  suite('#sum', function() {
    test('adds a bunch of numbers', function() {
      assert.strictEqual(sum([]), 0);
      assert.strictEqual(sum([1, 2, 3, 4]), 10);
      assert.strictEqual(sum([1, -1, 2, -3]), -1);
    });
  });

  suite('#product', function() {
    test('multiplies bunch of numbers', function() {
      assert.strictEqual(product([]), 1);
      assert.strictEqual(product([1, 2, 3, 4]), 24);
      assert.strictEqual(product([1, 2, 3, 4, 0]), 0);
    });
  });

  suite('concatenate', function() {
    test('concatenates an array of strings', function() {
      assert.strictEqual(concatenate([]), '');
      assert.strictEqual(concatenate(['Hello', 'world', 'Seattle']), 'HelloworldSeattle');
    });
  });

  suite('#max', function() {
    test('calculates the max number in an array', function() {
      assert.strictEqual(max([1, 2, 3, 4, 3]), 4);
      assert.strictEqual(max([1, 2, 3, -4, 3]), 3);
    });

    test('calculates the max number in an empty array', function() {
      assert.strictEqual(max([]), -Infinity);
    });
  });

  suite('#min', function() {
    test('calculates the min number in an array', function() {
      assert.strictEqual(min([1, 2, 3, 4, 3]), 1);
      assert.strictEqual(min([1, 2, 3, -4, 3]), -4);
    });

    test('calculates the min number in an empty array', function() {
      assert.strictEqual(min([]), Infinity);
    });
  });

  suite('#mean', function() {
    test('calculates the mean of an array', function() {
      assert.strictEqual(mean([1, 2, 3, 4, 5]), 3);
      assert.strictEqual(mean([1, 2, 3, -4, 3]), 1);
      assert.strictEqual(mean([]), null);
    });
  });

  suite('#median', function() {
    test('calculates the median of an array', function() {
      assert.strictEqual(median([1, 1, 2, 3, 4, 5, 6]), 3);
      assert.strictEqual(median([1, 1, 2, 3, 4, 5]), 2.5);
      assert.strictEqual(median([1, 6, 5, 3, 4, 2, 1]), 3);
      assert.strictEqual(median([]), null);
    });
  });

  suite('#distance', function() {
    test('returns the distance between two points', function() {
      assert.approximately(distance({x: 0, y: 3}, {x: 0, y: 0}), 3, 0.01);
      assert.approximately(distance({x: -1, y: 1}, {x: 0, y: 0}), Math.sqrt(2), 0.01);
    });
  });

  suite('#repeat', function() {
    test('repeats a string multiple times', function() {
      assert.strictEqual(repeat('hi', 4), 'hihihihi');
      assert.strictEqual(repeat('ken', 3), 'kenkenken');
      assert.strictEqual(repeat('hello', 1), 'hello');
    });
  });

  suite('#contains', function() {
    test('checks if a string is in the array', function() {
      assert.strictEqual(contains(['Ryan', 'Ken', 'Ian'], 'Ken'), true);
      assert.strictEqual(contains([], 'Ken'), false);
      assert.strictEqual(contains(['Ryan', 'Ken', 'Ian', 'Lionel'], 'Adam'), false);
    });
  });

  suite('#replace', function() {
    test('replaces values in an array with another', function() {
      assert.deepEqual(replace([1, 3, 2, 1, 3], 1, 4), [4, 3, 2, 4, 3]);
      assert.deepEqual(replace([], 1, 4), []);
      assert.deepEqual(replace([1, 3, 2, 1, 3], 4, 1), [1, 3, 2, 1, 3]);
    });
  });

  suite('#filterPassingGrades', function() {
    test('filters all passing grades', function() {
      assert.deepEqual(filterPassingGrades([]), []);
      assert.deepEqual(filterPassingGrades([100, 45, 90, 60]), [100, 90]);
      assert.deepEqual(filterPassingGrades([100, 45, 70]), [100, 70]);
      assert.deepEqual(filterPassingGrades([0, 45, 40]), []);
    });
  });

  suite('#pluck', function() {
    test('grabs the values from an array of object for a specific key', function() {
      assert.deepEqual(pluck([], 'foo'), []);
      var stooges = [
        {name: 'moe', age: 40},
        {name: 'larry', age: 50},
        {name: 'curly', age: 60}
      ];
      assert.deepEqual(pluck(stooges, 'name'), ['moe', 'larry', 'curly']);
    });
  });

  suite('#flatten', function() {
    test('flattens an array of arrays', function() {
      assert.deepEqual(flatten([]), []);
      assert.deepEqual(flatten([[1], [2], [3], [4]]), [1, 2, 3, 4]);
      assert.deepEqual(flatten([[1], [2, 3], [4]]), [1, 2, 3, 4]);
      assert.deepEqual(flatten([[1], [2], [3, [[4]]]]), [1, 2, 3, [[4]]]);
    });
  });

  suite('#values', function() {
    test('returns values of an object', function() {
      assert.deepEqual(values({}), []);
      assert.deepEqual(values({a: 1, b: 'foo'}), [1, 'foo']);
      assert.deepEqual(values({b: 'foo'}), ['foo']);
    });
  });

  suite('#pick', function() {
    test('picks an array of property names from an object', function() {
      assert.deepEqual(pick({name: 'moe', age: 50, userid: 'moe1'}, []), {});
      assert.deepEqual(pick({name: 'moe', age: 50, userid: 'moe1'},
        ['name', 'age']), {name: 'moe', age: 50});
    });
  });

  suite('#unique', function() {
    test('returns an array with only unique values', function() {
      assert.sameMembers(unique([]), []);
      assert.sameMembers(unique(['a', 'b', 'a', 'c']), ['a', 'b', 'c']);
      assert.sameMembers(unique(['a', 'b', 'c']), ['a', 'b', 'c']);
    });
  });

  suite('#oldSchoolRomanNumeral', function() {
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
};
