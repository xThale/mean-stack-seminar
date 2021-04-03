const mongoose = require("mongoose")

var mongoDBUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/db'

mongoose.connect(mongoDBUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

module.exports = mongoose
