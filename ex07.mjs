import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

const data = new Uint8Array(Buffer.from('some text'));
writeFile('file.txt', data, (err) => {
  if (err) throw err;
});
