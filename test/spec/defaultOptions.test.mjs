import path from 'path';
import url from 'url';
import assert from 'assert';

import importDirectory from '../../lib/index.mjs';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', 'data', 'directory');

describe('defaultOptions', () => {
  it('recursive: false', async () => {
    const results = await importDirectory(DATA_DIR, { recursive: false });
    assert.equal(results.length, 1);
  });

  it('recursive: true', async () => {
    const results = await importDirectory(DATA_DIR, { recursive: true });
    assert.equal(results.length, 5);
  });
});
