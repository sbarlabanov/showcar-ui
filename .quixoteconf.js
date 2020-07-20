var config = {
    url: 'http://localhost:9876/test/',   // karma url with port
    // width: [320, 768, 1024],
    width: [320, 1024],
    filesSet: [
        require.context('./src/', true, /^((?!tag|notification|navigation|tooltip|input-group).)*(specs.js)$/),
    ]
};
require('./tasks/quixote.js')(config);
