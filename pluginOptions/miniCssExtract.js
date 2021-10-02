
const defaultOption = {
    filename: '[name].css',

    // This option determines the name of non-entry chunk files.
    // String|Function
    chunkFilename: '[name].css', // based on filename

    ignoreOrder: false,

    // String: query selector. inserted after the found item.
    // Function: function(linkTag) {}
    insert: (linkTag) => { document.head.appendChild(linkTag) },
}

export default {
    
    // filename: 'css/[name].css',
    insert: '#app'
}