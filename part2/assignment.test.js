window.onload = function() {
  var assert = chai.assert;
  mocha.setup('tdd');

  suite('#sum', function() {
    test('adds a bunch of numbers', function() {
      assert.equal(sum([]), 0);
      assert.equal(sum([1, 2, 3, 4]), 10);
      assert.equal(sum([1, -1, 2, -3]), -1);
    });
  });

  suite('#product', function() {
    test('multiplies bunch of numbers', function() {
      assert.equal(product([]), 1);
      assert.equal(product([1, 2, 3, 4]), 24);
      assert.equal(product([1, 2, 3, 4, 0]), 0);
    });
  });

  suite('concatenate', function() {
    test('concatenates an array of strings', function() {
      assert.equal(concatenate([]), '');
      assert.equal(concatenate(['Hello', 'world', 'Seattle']), 'HelloworldSeattle');
    });
  });

  suite('#max', function() {
    test('calculates the max number in an array', function() {
      assert.equal(max([1, 2, 3, 4, 3]), 4);
      assert.equal(max([1, 2, 3, -4, 3]), 3);
    });

    test('calculates the max number in an empty array', function() {
      assert.equal(max([]), -Infinity);
    });
  });

  suite('#min', function() {
    test('calculates the min number in an array', function() {
      assert.equal(min([1, 2, 3, 4, 3]), 1);
      assert.equal(min([1, 2, 3, -4, 3]), -4);
    });

    test('calculates the min number in an empty array', function() {
      assert.equal(min([]), Infinity);
    });
  });

  suite('#mean', function() {
    test('calculates the mean of an array', function() {
      assert.equal(mean([1, 2, 3, 4, 5]), 3);
      assert.equal(mean([1, 2, 3, -4, 3]), 1);
      assert.equal(mean([]), null);
    });
  });

  suite('#median', function() {
    test('calculates the median of an array', function() {
      assert.equal(median([1, 1, 2, 3, 4, 5, 6]), 3);
      assert.equal(median([1, 1, 2, 3, 4, 5]), 2.5);
      assert.equal(median([1, 6, 5, 3, 4, 2, 1]), 3);
      assert.equal(median([]), null);
    });
  });

  suite('#distance', function() {
    test('returns the distance between two points', function() {
      assert.approximately(distance({x: 0, y: 3}, {x: 0, y: 0}), 3, 0.01);
      assert.approximately(distance({x: -1, y: 1}, {x: 0, y: 0}), Math.sqrt(2), 0.01);
    });
  });

  suite('#oldSchoolRomanNumeral', function() {
    test('converts a number to a roman numeral in the old school format', function() {
      assert.equal(oldSchoolRomanNumeral(1), 'I');
      assert.equal(oldSchoolRomanNumeral(2), 'II');
      assert.equal(oldSchoolRomanNumeral(4), 'IIII');
      assert.equal(oldSchoolRomanNumeral(5), 'V');
      assert.equal(oldSchoolRomanNumeral(6), 'VI');
      assert.equal(oldSchoolRomanNumeral(9), 'VIIII');
      assert.equal(oldSchoolRomanNumeral(10), 'X');
      assert.equal(oldSchoolRomanNumeral(11), 'XI');
      assert.equal(oldSchoolRomanNumeral(15), 'XV');
      assert.equal(oldSchoolRomanNumeral(16), 'XVI');
      assert.equal(oldSchoolRomanNumeral(52), 'LII');
      assert.equal(oldSchoolRomanNumeral(72), 'LXXII');
      assert.equal(oldSchoolRomanNumeral(72), 'LXXII');
      assert.equal(oldSchoolRomanNumeral(134), 'CXXXIIII');
      assert.equal(oldSchoolRomanNumeral(273), 'CCLXXIII');
      assert.equal(oldSchoolRomanNumeral(749), 'DCCXXXXVIIII');
      assert.equal(oldSchoolRomanNumeral(1000), 'M');
    });
  });

  suite('#newSchoolRomanNumeral', function() {
    test('converts a number to a roman numeral in the new school format', function() {
      assert.equal(newSchoolRomanNumeral(1), 'I');
      assert.equal(newSchoolRomanNumeral(2), 'II');
      assert.equal(newSchoolRomanNumeral(4), 'IV');
      assert.equal(newSchoolRomanNumeral(5), 'V');
      assert.equal(newSchoolRomanNumeral(6), 'VI');
      assert.equal(newSchoolRomanNumeral(9), 'IX');
      assert.equal(newSchoolRomanNumeral(10), 'X');
      assert.equal(newSchoolRomanNumeral(11), 'XI');
      assert.equal(newSchoolRomanNumeral(15), 'XV');
      assert.equal(newSchoolRomanNumeral(16), 'XVI');
      assert.equal(newSchoolRomanNumeral(52), 'LII');
      assert.equal(newSchoolRomanNumeral(72), 'LXXII');
      assert.equal(newSchoolRomanNumeral(72), 'LXXII');
      assert.equal(newSchoolRomanNumeral(134), 'CXXXIV');
      assert.equal(newSchoolRomanNumeral(273), 'CCLXXIII');
      assert.equal(newSchoolRomanNumeral(749), 'DCCXCVIV');
      assert.equal(newSchoolRomanNumeral(1000), 'M');
    });
  });

  suite('#replace', function() {
    test('replaces values in an array with another', function() {
      assert.equal(replace(['Ryan', 'Ken', 'Ken', 'Ian', 'Ryan', 'Ken'], 'Ken', 'Ryan'), ['Ryan', 'Ryan', 'Ryan', 'Ian', 'Ryan', 'Ryan']);
      assert.equal(replace(['Ryan', 'Ian', 'Ryan'], 'Ken', 'Ryan'), ['Ryan', 'Ian', 'Ryan']);
    });
  });

  suite('#contains', function() {
    test('checks if a number is in the array', function() {
      assert.equal(contains([1, 2, 3, 4, 5], 4), true);
      assert.equal(contains([], 4), false);
      assert.equal(contains([1, 2, 3, 4, 5], 6), false);
    });
  });

  suite('#pluck', function() {
    test('grabs the values from an array of object for a specific key', function() {
      assert.equal(pluck([], 'foo'), []);
      var stooges = [
        {name: 'moe', age: 40},
        {name: 'larry', age: 50},
        {name: 'curly', age: 60}
      ];
      assert.equal(pluck(stooges, 'name'), ['moe', 'larry', 'curly']);
    });
  });

  suite('#flatten', function() {
    test('flattens an array of arrays', function() {
      assert.equal(flatten([]), []);
      assert.equal(flatten([[1], [2], [3], [4]]), [1, 2, 3, 4]);
      assert.equal(flatten([[1], [2], [3, [[4]]]]), [1, 2, 3, [[4]]]);
    });
  });

  suite('#length', function() {
    test('returns true if the number is even', function() {
      assert.equal(length({}), 0);
      assert.equal(length({a: 1, b: 'foo'}), 2);
      assert.equal(length({b: 'foo'}), 1);
    });
  });

  suite('#pick', function() {
    test('picks an array of property names from an object', function() {
      assert.equal(pick({name: 'moe', age: 50, userid: 'moe1'}, []), {});
      assert.equal(pick({name: 'moe', age: 50, userid: 'moe1'},
        ['name', 'age']), {name: 'moe', age: 50});
    });
  });

  suite('#group', function() {
    test('groups arrays of objects by a specific key', function() {
      assert.equal(group([], 'foo'), {});
      assert.equal(group([{}], 'foo'), {});
    });

    test('returns false if the letter is not a vowel', function() {
      assert.equal(isVowel('z'), false);
      assert.equal(isVowel('b'), false);
      assert.equal(isVowel('d'), false);
      assert.equal(isVowel('y'), false);
    });
  });

  suite('#merge', function() {
    test('merges two sorted arrays', function() {
      assert.equal(merge([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
      assert.equal(merge([1, 3, 5], [1, 2]), [1, 1, 2, 3, 4, 5]);
      assert.equal(merge([], [1, 2]), [1, 2]);
      assert.equal(merge([1, 2], []), [1, 2]);
    });
  });

  mocha.run();
};
