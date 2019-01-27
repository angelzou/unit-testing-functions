import fs from 'fs';
export default class FileSystem {
  parseJSONFile(file) {
    const content = String(fs.readFileSync(file));
    return JSON.parse(content);
  }
}
