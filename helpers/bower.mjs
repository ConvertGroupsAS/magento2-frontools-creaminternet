import gulp from 'gulp'
import bower from 'gulp-bower'
import fs from 'fs-extra'

import {
    env,
    projectPath,
    themes
} from './config.mjs'

export default (name) => {

    const theme = themes[name];
    const themePath = (projectPath + theme.src);

    try {
        fs.accessSync(themePath + '/bower.json', fs.constants.F_OK);

        return bower({
            directory: themePath + '/bower_components',
            cwd: themePath
        })
            .pipe(gulp.dest(themePath + '/bower_components'))
    } catch (error) {
        console.error(error);
    }
}