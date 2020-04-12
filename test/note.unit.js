const assert = require('assert');

const note = require('../src/note');

describe('dev-note', () => {
  describe('#getCurrentMonthName', () => {
    it('should return a string with 3 characters', () => {
      const expected = 3;
      const actual = note.getCurrentMonthName().length;
      assert.deepStrictEqual(expected, actual);
    });

    it('should return the correct month', () => {
      const months = [ 
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec'
      ];
      const expected = months[new Date().getMonth()];
      const actual = note.getCurrentMonthName();
      assert.deepStrictEqual(expected, actual);
    });
  });
  
  describe('#getFormmatedDate', () => {
    it('should return current date in ISO string format', () => {
      const expected = new Date().toISOString().split('T')[0];
      const actual = note.getFormattedDate();
      assert.deepStrictEqual(expected, actual);
    });
  });

  describe('#formatHeader', () => {
    it('should return a formatted header', () => {
      const expected = `### Notes ${note.getFormattedDate()}\n========================`;
      const actual = note.formatHeader(note.getFormattedDate());
      assert.deepStrictEqual(expected, actual);
    });
  });
});