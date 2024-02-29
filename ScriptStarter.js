#!/usr/bin/env node
const { spawn } = require('child_process');

class ScriptStarter {
    constructor(script) {
        this.script = script;
    }

    start() {

        const { exec } = require('child_process');

        exec('npm run cs-init', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
        });

    }
}

module.exports = ScriptStarter;