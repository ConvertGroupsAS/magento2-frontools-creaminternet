import mergeStream from 'merge-stream'
import helper from '../helpers/bower.mjs'
import themes from '../helpers/get-themes.mjs'

export const bower = () => {
    const streams = mergeStream()
    themes().forEach(name => {
        streams.add(helper(name))
    })
    return streams
}