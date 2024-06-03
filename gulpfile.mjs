import gulp from 'gulp'

import pipelineHelper from './helpers/pipeline.mjs'

import { babel as babelTask } from './tasks/babel.mjs'
import { bower as bowerTask } from './tasks/bower.mjs'
import { bundle as bundleTask } from './tasks/bundle.mjs'
import { browserSync as browserSyncTask } from './tasks/browser-sync.mjs'
import { clean as cleanTask } from './tasks/clean.mjs'
import { csslint as cssLintTask } from './tasks/css-lint.mjs'
import { copyjs as copyjsTask } from './tasks/copyjs.mjs'
import { emailFix as emailFixTask } from './tasks/email-fix.mjs'
import { eslint as eslintTask } from './tasks/eslint.mjs'
import { inheritance as inheritanceTask } from './tasks/inheritance.mjs'
import { sasslint as sassLintTask } from './tasks/sass-lint.mjs'
import { setup as setupTask } from './tasks/setup.mjs'
import { styles as stylesTask } from './tasks/styles.mjs'
import { svg as svgTask } from './tasks/svg.mjs'
import { watch as watchTask } from './tasks/watch.mjs'
import magepackBundleTask from './tasks/magepack-bundle.mjs'
import magepackGenerateTask from './tasks/magepack-generate.mjs'

export const babel = gulp.series(inheritanceTask, babelTask)
export const bower = gulp.series(inheritanceTask, bowerTask)
export const bundle = gulp.series(inheritanceTask, bundleTask)
export const clean = cleanTask
export const csslint = cssLintTask
export const copyjs = copyjsTask
export const dev = gulp.series(browserSyncTask, watchTask)
export const emailfix = emailFixTask
export const eslint = eslintTask
export const inheritance = inheritanceTask
export const sasslint = sassLintTask
export const setup = setupTask
export const styles = gulp.series(inheritanceTask, stylesTask)
export const svg = gulp.series(inheritanceTask, svgTask)
export const watch = watchTask
export const magepackBundle = magepackBundleTask
export const magepackGenerate = magepackGenerateTask

export { default as default } from './tasks/default.mjs'
