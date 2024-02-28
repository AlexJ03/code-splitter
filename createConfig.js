const fs = require("fs");
const path = require("path");
const currentDir = process.cwd();
const configPath = path.resolve(currentDir, 'cs.config.js');

function createConfig(data) {
    const { entry, outputName, htmlName, cssName } = data;

    const file = `const base = __dirname;

const config = {
    base,
    entry: "${entry}",
    output: {
        name: "${outputName}",
        html: {
            name: "${htmlName}"
        },
        css: {
            name: "${'style'}"
        },
    },
};

module.exports = config;`;

    fs.writeFileSync(configPath, file);
}

module.exports = createConfig;