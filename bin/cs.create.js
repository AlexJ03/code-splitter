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
    console.log(success("The Code-Splitter assembly has been successfully created!"));
} else {
    console.log(warning("The Code-Splitter assembly already exists..."));
}

