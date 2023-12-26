#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const currentDir = process.cwd();
const configPath = path.resolve(currentDir, 'cs.config.js');
const config = require(configPath);
const data = require("./data");

class CodeSplitter {
    constructor( config ) {
        this.base = config.base;
        this.pathToConstructorFile = config.main || path.resolve(config.base, "cs.constructor.txt");
        this.pathToComponents = config.entry || path.resolve(config.base, "components");
        this.pathToGlobal = config.global || path.resolve(config.base, "global");
        this.nameOfOutputDir = config.output.name || "";
        this.nameOfOutputHtmlFile = config.output.html.name;
        this.nameOfOutputCssFile = config.output.css.name;
    };

    createBaseDir() {
        // Path to Components
        const pathToHeaderHTML = path.resolve(this.base, this.pathToComponents, "header", "header.html");
        const pathToHeaderCSS = path.resolve(this.base, this.pathToComponents, "header", "header.css");

        // Path to Global
        const pathToGlobalHeaderHTML = path.resolve(this.pathToGlobal, "header.html");
        const pathToGlobalFooterHTML = path.resolve(this.pathToGlobal, "footer.html");
        const pathToGlobalCSS = path.resolve(this.pathToGlobal, "global.css");

        // Path to Constructor
        const pathToConstructor = path.resolve(this.pathToConstructorFile);

        // Path to package.json
        const pathToPackage = path.resolve(config.base, "package.json");

        // Path to Main HTML
        const pathToHTML = path.resolve(config.base, this.nameOfOutputDir, `${this.nameOfOutputHtmlFile}.html`);

        // Path to Main CSS
        const pathToCSS = path.resolve(config.base, this.nameOfOutputDir, `${this.nameOfOutputCssFile}.css`);

        // Create dist
        if (this.nameOfOutputDir) {
            fs.mkdirSync(path.resolve(this.base, this.nameOfOutputDir));
        }

        // Create components
        fs.mkdirSync(path.resolve(this.base, this.pathToComponents));
        fs.mkdirSync(path.resolve(this.base, this.pathToComponents, "header"));
        fs.mkdirSync(path.resolve(this.pathToGlobal));

        // Create Files in Components
        // Header
        fs.writeFileSync(pathToHeaderHTML, data.header__HTML);
        fs.writeFileSync(pathToHeaderCSS, data.header__CSS);
        // Global
        fs.writeFileSync(pathToGlobalCSS, data.global__CSS);
        fs.writeFileSync(pathToGlobalHeaderHTML, data.global__header__HTML);
        fs.writeFileSync(pathToGlobalFooterHTML, data.global__footer__HTML);

        // Create Constructor File
        fs.writeFileSync(pathToConstructor, data.html__constructor);

        // Create package.json
        // fs.writeFileSync(pathToPackage, data.packagejson);

        // Create Main HTML
        fs.writeFileSync(pathToHTML, data.main__HTML);

        // Create MAIN CSS
        fs.writeFileSync(pathToCSS, data.main__CSS);
    }

    readConstructor() {
        return fs.readFileSync(this.pathToConstructorFile, "utf-8")
    }

    toArrayConstructorData(constructorData) {
        return constructorData.split("-->");
    }

    formatHtml(html) {
        return html.join("\n");
    }

    formatCss(css) {
        return css.join("\n");
    }

    checkToGlobalHtml(fileName) {
        return fileName.trim().includes("H::");
    }

    checkToGlobalCss(fileName) {
        return fileName.trim().includes("S::");
    }

    readHTML(arrayOfFiles) {
        const html = [];
        const ext = ".html";

        for (const fileName of arrayOfFiles) {
            const condition = this.checkToGlobalHtml(fileName) || !this.checkToGlobalCss(fileName);

            if (condition) {
                if (this.checkToGlobalHtml(fileName)) {
                    const name = fileName.trim().replace(/H::/g, "");
                    html.push(fs.readFileSync(path.resolve(this.pathToGlobal, `${name}${ext}`), "utf-8"));
                } else {
                    html.push(fs.readFileSync(path.resolve(this.base, this.pathToComponents, fileName.trim(), `${fileName.trim()}${ext}`), "utf-8"));
                }
            }
        }

        return html;
    }

    readCSS(arrayOfFiles) {
        const css = [];
        const ext = ".css";

        for (const fileName of arrayOfFiles) {
            const condition = this.checkToGlobalCss(fileName) || !this.checkToGlobalHtml(fileName);

            if (condition) {
                if (this.checkToGlobalCss(fileName)) {
                    const name = fileName.trim().replace(/S::/g, "");
                    css.push(fs.readFileSync(path.resolve(this.pathToGlobal, `${name}${ext}`), "utf-8"))
                } else {
                    css.push(fs.readFileSync(path.resolve(this.base, this.pathToComponents, fileName.trim(), `${fileName.trim()}${ext}`), "utf-8"));
                }
            }
        }

        return css;
    }

    buildHtml(html) {
        fs.writeFileSync(path.resolve(this.base, this.nameOfOutputDir, this.nameOfOutputHtmlFile + ".html"), html);
    }

    buildCss(css) {
        fs.writeFileSync(path.resolve(this.base, this.nameOfOutputDir, this.nameOfOutputCssFile + ".css"), css);
    }
}

const cs = new CodeSplitter( config );

module.exports = cs;