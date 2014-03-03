'use strict';

//Subscribes service used for subscribes REST endpoint
angular.module('mean.subscribes').factory('Subscribes', ['$resource', function($resource) {
    return $resource('subscribes/:subscribeId', {
        subscribeId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);