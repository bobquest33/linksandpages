'use strict';

// Articles routes use subscribes controller
var subscribes = require('../controllers/subscribes');
//var authorization = require('./middlewares/authorization');


module.exports = function(app) {

    //app.get('/subscribes', subscribes.all);
    app.post('/subscribes', subscribes.create);
    app.get('/subscribes/:subscribeId', subscribes.show);
    //app.put('/subscribes/:subscribeId', subscribes.update);
    //app.del('/subscribes/:subscribeId', authorization.requiresLogin, hasAuthorization, subscribes.destroy);

    // Finish with setting up the subscribeId param
    app.param('subscribeId', subscribes.subscribe);

};