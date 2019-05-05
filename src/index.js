import { readFile, writeFile } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

import getStdin from 'get-stdin';
import { parse, stringify } from 'subtitle';

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

const STD_MARK = '-';

const inputPathRaw = process.argv[2] || STD_MARK;
const outputPathRaw = process.argv[3] || STD_MARK;

const inputPath = inputPathRaw !== STD_MARK && resolve(inputPathRaw);
const outputPath = outputPathRaw !== STD_MARK && resolve(outputPathRaw);

(async () => {
  try {
    const inputData = inputPath
      ? await readFileAsync(inputPath)
      : await getStdin();

    const inputDataString = String(inputData);
    const outputData = stringify(parse(inputDataString));

    outputPath
      ? await writeFileAsync(outputPath, outputData)
      : console.log(outputData);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
