const fs = require('fs')
const util = require('util')


class Reader {
    constructor() {
        //
        this.reader = util.promisify(fs.readFile)
    }
    //async/await precisa de try/catch
    async Read(filepath) {
        try {
            return await this.reader(filepath, 'utf8')
        } catch (err) {
            return "File not Found"
        }
    }
}

module.exports = Reader;