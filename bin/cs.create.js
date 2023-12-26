#!/usr/bin/env node
const fs = require('fs');
const cs = require("../CodeSplitter");
const path = require("path");
const chalk = require("chalk");

const currentDir = process.cwd();

const configPath = path.resolve(currentDir, 'cs.config.js');

const { base, entry } = require( configPath );

const pathToComponents = path.resolve(base, entry);

const success = chalk.bold.green;
const warning = chalk.bold.yellow;

if (!fs.existsSync(pathToComponents)) {
    cs.createBaseDir();
    console.log(success("Сборка Code-Splitter успешно создана!"));
} else {
    console.log(warning("Сборка Code-Splitter уже существует."));
}

