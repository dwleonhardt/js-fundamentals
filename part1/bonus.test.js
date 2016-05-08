window.onload = function() {
  mocha.setup('tdd');
  var assert = chai.assert;

  suite('caesarAdd13', function(){
    test('it adds 13 to the number, wrapping it back to 97 once it hits 122', function(){
      assert.equal(caesarAdd13(97),   110);
      assert.equal(caesarAdd13(98),   111);
      assert.equal(caesarAdd13(99),   112);
      assert.equal(caesarAdd13(100),  113);
      assert.equal(caesarAdd13(101),  114);
      assert.equal(caesarAdd13(102),  115);
      assert.equal(caesarAdd13(103),  116);
      assert.equal(caesarAdd13(104),  117);
      assert.equal(caesarAdd13(105),  118);
      assert.equal(caesarAdd13(106),  119);
      assert.equal(caesarAdd13(107),  120);
      assert.equal(caesarAdd13(108),  121);
      assert.equal(caesarAdd13(109),  122);
      assert.equal(caesarAdd13(110),   97);
      assert.equal(caesarAdd13(111),   98);
      assert.equal(caesarAdd13(112),   99);
      assert.equal(caesarAdd13(113),  100);
      assert.equal(caesarAdd13(114),  101);
      assert.equal(caesarAdd13(115),  102);
      assert.equal(caesarAdd13(116),  103);
      assert.equal(caesarAdd13(117),  104);
      assert.equal(caesarAdd13(118),  105);
      assert.equal(caesarAdd13(119),  106);
      assert.equal(caesarAdd13(120),  107);
      assert.equal(caesarAdd13(121),  108);
      assert.equal(caesarAdd13(122),  109);
    });

    test('it throws an error if the number is less than 97', function(){
      assert.throws(caesarAdd13.bind({}, 50), 'Doh!  Too low.');
      assert.throws(caesarAdd13.bind({}, 90), 'Doh!  Too low.');
    });

    test('it throws an error if the number is greater than 122', function(){
      assert.throws(caesarAdd13.bind({}, 123), 'Doh!  Too high.');
      assert.throws(caesarAdd13.bind({}, 149), 'Doh!  Too high.');
    });

  });

  suite('caesarSubtract13', function(){
    test('it subtracts 13 to the number, wrapping it back to 122 once it hits 97', function(){
      assert.equal(caesarSubtract13(122),  109);
      assert.equal(caesarSubtract13(121),  108);
      assert.equal(caesarSubtract13(120),  107);
      assert.equal(caesarSubtract13(119),  106);
      assert.equal(caesarSubtract13(118),  105);
      assert.equal(caesarSubtract13(117),  104);
      assert.equal(caesarSubtract13(116),  103);
      assert.equal(caesarSubtract13(115),  102);
      assert.equal(caesarSubtract13(114),  101);
      assert.equal(caesarSubtract13(113),  100);
      assert.equal(caesarSubtract13(112),   99);
      assert.equal(caesarSubtract13(111),   98);
      assert.equal(caesarSubtract13(110),   97);
      assert.equal(caesarSubtract13(109),  122);
      assert.equal(caesarSubtract13(108),  121);
      assert.equal(caesarSubtract13(107),  120);
      assert.equal(caesarSubtract13(106),  119);
      assert.equal(caesarSubtract13(105),  118);
      assert.equal(caesarSubtract13(104),  117);
      assert.equal(caesarSubtract13(103),  116);
      assert.equal(caesarSubtract13(102),  115);
      assert.equal(caesarSubtract13(101),  114);
      assert.equal(caesarSubtract13(100),  113);
      assert.equal(caesarSubtract13(99),   112);
      assert.equal(caesarSubtract13(98),   111);
      assert.equal(caesarSubtract13(97),   110);
    });

    test('it throws an error if the number is less than 97', function(){
      assert.throws(caesarSubtract13.bind({}, 50), 'Doh!  Too low.');
      assert.throws(caesarSubtract13.bind({}, 90), 'Doh!  Too low.');
    });

    test('it throws an error if the number is greater than 122', function(){
      assert.throws(caesarSubtract13.bind({}, 123), 'Doh!  Too high.');
      assert.throws(caesarSubtract13.bind({}, 149), 'Doh!  Too high.');
    });

  });

  suite('encodeChar', function(){
    test('it encodes a character', function(){
      assert.equal(encodeChar('a'),  'n');
      assert.equal(encodeChar('b'),  'o');
      assert.equal(encodeChar('c'),  'p');
      assert.equal(encodeChar('d'),  'q');
      assert.equal(encodeChar('e'),  'r');
      assert.equal(encodeChar('f'),  's');
      assert.equal(encodeChar('g'),  't');
      assert.equal(encodeChar('h'),  'u');
      assert.equal(encodeChar('i'),  'v');
      assert.equal(encodeChar('j'),  'w');
      assert.equal(encodeChar('k'),  'x');
      assert.equal(encodeChar('l'),  'y');
      assert.equal(encodeChar('m'),  'z');
      assert.equal(encodeChar('n'),  'a');
      assert.equal(encodeChar('o'),  'b');
      assert.equal(encodeChar('p'),  'c');
      assert.equal(encodeChar('q'),  'd');
      assert.equal(encodeChar('r'),  'e');
      assert.equal(encodeChar('s'),  'f');
      assert.equal(encodeChar('t'),  'g');
      assert.equal(encodeChar('u'),  'h');
      assert.equal(encodeChar('v'),  'i');
      assert.equal(encodeChar('w'),  'j');
      assert.equal(encodeChar('x'),  'k');
      assert.equal(encodeChar('y'),  'l');
      assert.equal(encodeChar('z'),  'm');
    });

    test('it lowercases the letter', function(){
      assert.equal(encodeChar('A'),  'n');
      assert.equal(encodeChar('B'),  'o');
      assert.equal(encodeChar('C'),  'p');
    });
  });

  suite('encodeMessage', function(){
    test('it encodes a message', function(){
      assert.equal(encodeMessage('Wow this is cool'),  'jbj guvf vf pbby');
      assert.equal(encodeMessage('SUPER SECRET'),  'fhcre frperg');
      assert.equal(encodeMessage('Hello, there!'),  'uryyb, gurer!');
    });
  });

  suite('decodeMessage', function(){
    test('it encodes a message', function(){
      assert.equal(decodeMessage('jbj guvf vf pbby'),  'wow this is cool');
      assert.equal(decodeMessage('fhcre frperg'),  'super secret');
      assert.equal(decodeMessage('uryyb, gurer!'),  'hello, there!');
    });
  });

  mocha.run();
};
