jest.mock('fs', () => ({
  readFileSync: jest.fn()
}));

import FileSystem from '../src/FileSystem.js';
import fs from 'fs';

describe('FileSystem test suite', function() {
  test('Should return the parsed JSON from a file specified as param', function(done) {
    const fileReader = new FileSystem();
    fs.readFileSync.mockReturnValue('{ "test": 1 }');
    const result = fileReader.parseJSONFile('test.json');
    expect(result).toEqual({ "test": 1 });
    done();
  });
});