import fs from 'fs-extra'
import path from 'path'
import require from 'requirejs';

import {env} from '../helpers/config.mjs'

// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
let requirejs = require('requirejs');

//let requirejs = await import('requirejs');

const filesExt = env.minify ? '.min.js' : '.js'
const absoluteUrlRegex = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gm

function modifyDependency(fn) {
    requirejs = fn;
}

function getThemeRequirejsConfig(themePath, context) {
    const themeRequirejsConfig = fs.readFileSync(path.join(themePath, `requirejs-config${filesExt}`), 'utf8');
    const f = new Function('require', themeRequirejsConfig);
    //  requirejs = JSON.parse(JSON.stringify(requirejs))
    const origConfig = requirejs.config;
    let origRequire = requirejs;

    modifyDependency(function() { });

    requirejs.config = function(c) {
        c.context = context;
        c.deps = null;
        origConfig.apply(this, arguments)
    }

    f(requirejs);

    //console.log(requirejs.config());
    modifyDependency(origRequire);
    requirejs.config = origConfig;

    const themeConfig = requirejs.s.contexts[context].config;
    const config = {
        map: {...themeConfig.map},
        shim: {...themeConfig.shim},
        paths: {...themeConfig.paths}
    }

    const s = JSON.stringify(config).replace(absoluteUrlRegex, 'empty:');
    return JSON.parse(s);
}

export default getThemeRequirejsConfig