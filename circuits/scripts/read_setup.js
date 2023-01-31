#!/usr/bin/env node

const { exec } = require('child_process');
const { execSync } = require('child_process');
var shell = require('shelljs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

const commandsToRun = [`npm run setup_env`, `yq build.yaml`, `npm run install_circom`, `npm run build_circom`];

/*
  Flow:
  1. Get 
*/

function getBuildConfig() {
  try {
    console.log('Current directory: ' + process.cwd());
    const command = `yq -o=json build.yaml`;
    exec(command, (error, stdout, stderr) => {
          if (error) {
              console.log(`error: ${error.message}`);
              return;
          }
          if (stderr) {
              console.log(`stderr: ${stderr}`);
              return;
          }
  
          const yamlJSON = JSON.parse(stdout);
          console.log(yamlJSON);
          return yamlJSON;
          // here define the commands to run.
          // currently it only supports 
      });
  } catch (err) {
    console.log('chdir: ' + err);
  }
}

function cloneGitRepo(yamlConfig) {
  // 1. switch to a new directory of the app name.
  // 2. init npm with shell, and custom scripts.
  // 3. clone the github repo.
  // 4. go into the circuits folder.
  // 5. build the circuit.
  // 6. download the files.
  const gitRepoPath = yamlConfig.gitrepo;
  shell.cd(yamlConfig.base_dir);
  shell.exec(`git clone ${gitRepoPath}`, function(code, stdout, stderr){
    if (stderr) {
      console.log('Exit code:', code);
      console.log('Program stderr:', stderr);
      return;
    }
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    
    shell.cd(yamlConfig.main_dir);

  });


}

function buildCircuit(yamlConfig) {
  // 1. Build circuit.
  // 2. Generate tests.
  // 3. Expose the prover as a service.
}


try {
  console.log('Current directory: ' + process.cwd());
  const command = `npm run setup_env`;
  exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log("-----");

        // set up the environment
        console.log(`stdout1: ${stdout}`);
        // here define the commands to run.
        // currently it only supports 
    });
} catch (err) {
  console.log('chdir: ' + err);
}




