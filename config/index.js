const configValues = require('./config')

module.exports = {
    getDbConnectionString: function() {
        return `mongodb://${configValues.uname}:${configValues.pwd}@ds157185.mlab.com:57185/nodetodosample`
    }
}