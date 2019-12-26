// at the top of the test spec:
var fs = require('fs');
module.exports = {
    writeScreenShot: (data, filename) => {
        var stream = fs.createWriteStream(filename);

        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }
}