#!/usr/bin/env node
class Commander {
    constructor(param) {
        this.param = param;
    }

    setParam(param) {
        this.param = param;
    }

    getNormalParam() {
        const checkObj = {
            // init
            "--init": "--init",
            "-init": "--init",
            "--i": "--init",
            "-i": "--init",
            // create
            "--create": "--create",
            "-create": "--create",
            "--c": "--create",
            "-c": "--create",
            // server
            "--server": "--server",
            "-server": "--server",
            "--s": "--server",
            "-s": "--server",
        };

        for (const key in checkObj) {
            if (this.param === key) {
                return checkObj[key];
            }
        }

        return null;
    }

    toReformatParam(param) {
        const scripts = {
            "--init": "cs-init",
            "--create": "cs-create",
            "--server": "cs-server"
        };

        return scripts[param] || null;
    }
}

module.exports = Commander;