const indexRouter = require('express').Router();

indexRouter.use('/iecho', require('../apiService/iecho/iecho.routes.js'));

module.exports = indexRouter;