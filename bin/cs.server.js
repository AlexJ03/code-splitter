#!/usr/bin/env node
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
    console.log(success(`CodeSplitter запущен на порту ${port}...`));
});

browserSync.init({
    proxy: `localhost:${port}`,
    files: [path.resolve(config.base, config.output.name, config.output.html.name + ".html")],
});

browserSync.watch([`${path.resolve(config.base, config.entry)}/**/*.html`, `${path.resolve(config.base, config.entry)}/**/*.css`, `${path.resolve(config.base, config.global || "global")}/**/*.css`, `${path.resolve(config.base, config.global || "global")}/**/*.html`, `${config?.main || path.resolve(config.base, "cs.constructor.txt")}`]).on('change', (file) => {
    console.log(warn(`${file} изменен. Перезагрузка браузера...`));

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
