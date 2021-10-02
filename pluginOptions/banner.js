export default {
    // string | function, // the banner as string or function, it will be wrapped in a comment
    banner: `console.log('Jay Test Webpack');`,

    // if true, banner will not be wrapped in a comment
    raw: true, 

    // entryOnly: boolean, // if true, the banner will only be added to the entry chunks

    // string | RegExp | [string, RegExp], 
    // Include all modules that pass test assertion.
    test: /\.js$/i

    // include: string | RegExp | [string, RegExp],
     // Include all modules matching any of these conditions.

    // exclude: string | RegExp | [string, RegExp], 
    // Exclude all modules matching any of these conditions.
}