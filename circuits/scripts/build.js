#!/usr/bin/env node

const { exec } = require('child_process');

// go to sudoku folder
console.log('Starting directory: ' + process.cwd());
try {
  process.chdir(`${process.cwd()}/sudoku/`);
  console.log('New directory: ' + process.cwd());

  exec('sh executeGroth16.sh',
    (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });

} catch (err) {
  console.log('chdir: ' + err);
}
