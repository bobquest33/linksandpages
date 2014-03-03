'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Subscribe Schema
 */
var SubscribeSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    email: {
        type: String,
        default: '',
        trim: true
    }
});

/**
 * Validations
 */
SubscribeSchema.path('email').validate(function(email) {
    return email.length;
}, 'Email cannot be blank');


mongoose.model('Subscribe', SubscribeSchema);
