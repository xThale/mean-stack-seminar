const mongoose = require("mongoose")

var mongoDBUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/db'

// Baue Verbindung zu MongoDB auf
mongoose.connect(mongoDBUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

module.exports = mongoose
