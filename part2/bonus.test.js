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
