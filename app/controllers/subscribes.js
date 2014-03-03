'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Subscribe = mongoose.model('Subscribe'),
    _ = require('lodash');


/**
 * Find subscribe by id
 */
exports.subscribe = function(req, res, next, id) {
    Subscribe.load(id, function(err, subscribe) {
        if (err) return next(err);
        if (!subscribe) return next(new Error('Failed to load subscribe ' + id));
        req.subscribe = subscribe;
        next();
    });
};

/**
 * Create a subscribe
 */
exports.create = function(req, res) {
    var subscribe = new Subscribe(req.body);
    subscribe.user = req.user;

    subscribe.save(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(subscribe);
        }
    });
};

/**
 * Update a subscribe
 */
exports.update = function(req, res) {
    var subscribe = req.subscribe;

    subscribe = _.extend(subscribe, req.body);

    subscribe.save(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
          } else {
            res.jsonp(subscribe);
        }
    });
};


/**
 * Show an subscribe
 */
exports.show = function(req, res) {
    res.jsonp(req.subscribe);
};

