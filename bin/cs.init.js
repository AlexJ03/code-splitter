#!/usr/bin/env node
const { prompt } = require('enquirer');
const { prompts } = require("../data");
const createConfig = require("../createConfig");
const chalk = require("chalk");

const success = chalk.bold.green;

const questions = prompt( prompts )
    .then(response => createConfig(response))
    .then(() => console.log(success("The Code-Splitter assembly has been successfully created!")));
