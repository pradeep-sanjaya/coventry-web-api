function log(req, res, next) {
    console.log("-- logger middleware -- ");
    next();
}

module.exports = log;