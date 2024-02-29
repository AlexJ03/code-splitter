#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

yargs(hideBin(process.argv))
    .command('init', 'Initialize config file', () => {
        const { prompt } = require('enquirer');
        const { prompts } = require("../data");
        const createConfig = require("../createConfig");
        const chalk = require("chalk");

        const success = chalk.bold.green;

        const questions = prompt( prompts )
            .then(response => createConfig(response))
            .then(() => console.log(success("The Code-Splitter assembly has been successfully created!")));

    })
    .command('create', 'Create structure', () => {
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
    })
    .command('server', 'Start the server', () => {
        const path = require("path");
        const express = require('express');
        const app = express();
        const browserSync = require('browser-sync').create();
        const cs = require("../CodeSplitter");
        const chalk = require("chalk");
        const currentDir = process.cwd();
        const configPath = path.resolve(currentDir, 'cs.config.js');
        const config = require(configPath);

        const port = 3000;

        app.use(express.static(path.resolve(config.base, config.output.name)));

        const success = chalk.bold.bgGreen;
        const warn = chalk.bold.yellow;

        console.log("PATH: ", path.resolve(config.base, config.output.name, config.output.css.name + ".css"))

        app.get('/', (req, res) => {
            res.sendFile(path.resolve(config.base, config.output.name, config.output.html.name + ".html"));
        });

        app.listen(port, () => {
            console.log(success(`Code-Splitter is running on the port ${port}...`));
        });

        browserSync.init({
            proxy: `localhost:${port}`,
            files: [path.resolve(config.base, config.output.name, config.output.html.name + ".html")],
        });

        browserSync.watch([`${path.resolve(config.base, config.entry)}/**/*.html`, `${path.resolve(config.base, config.entry)}/**/*.css`, `${path.resolve(config.base, config.global || "global")}/**/*.css`, `${path.resolve(config.base, config.global || "global")}/**/*.html`, `${config?.main || path.resolve(config.base, "cs.constructor.txt")}`]).on('change', (file) => {
            console.log(warn(`${file} changed. Restarting the browser...`));

            const data = cs.readConstructor();
            const arrayOfFiles = cs.toArrayConstructorData(data);

            // HTML
            const htmlData = cs.readHTML(arrayOfFiles);
            const html = cs.formatHtml(htmlData);

            // CSS
            const cssData = cs.readCSS(arrayOfFiles);
            const css = cs.formatCss(cssData);

            // Build
            cs.buildHtml(html);
            cs.buildCss(css);
        });
    })
    .demandCommand(1, '')
    .parse();
