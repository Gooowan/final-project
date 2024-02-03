exports.notFound = (req, res, next) => {
    res.status(404).send('404 - Not Found');
};

exports.catchErrors = (error, req, res, next) => {
    res.status(500).send(error.message);
};
