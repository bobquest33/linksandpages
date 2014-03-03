'use strict';

angular.module('mean.subscribes').controller('SubscribesController', ['$scope', '$routeParams', '$location', 'Global', 'Subscribes', function ($scope, $routeParams, $location, Global, Subscribes) {
    $scope.global = Global;

    $scope.create = function() {
        var subscribe = new Subscribes({
            name: this.name,
            email: this.email
        });
        subscribe.$save(function(response) {
            $location.path('subscribes/' + response._id);
        });

        this.name = '';
        this.email = '';
    };

    $scope.remove = function(subscribe) {
        if (subscribe) {
            subscribe.$remove();

            for (var i in $scope.subscribes) {
                if ($scope.subscribes[i] === subscribe) {
                    $scope.subscribes.splice(i, 1);
                }
            }
        }
        else {
            $scope.subscribe.$remove();
            $location.path('subscribes');
        }
    };

    $scope.update = function() {
        var subscribe = $scope.subscribe;
        if (!subscribe.updated) {
            subscribe.updated = [];
        }
        subscribe.updated.push(new Date().getTime());

        subscribe.$update(function() {
            $location.path('subscribes/' + subscribe._id);
        });
    };

    $scope.find = function() {
        Subscribes.query(function(subscribes) {
            $scope.subscribes = subscribes;
        });
    };

    $scope.findOne = function() {
        Subscribes.get({
            subscribeId: $routeParams.subscribeId
        }, function(subscribe) {
            $scope.subscribe = subscribe;
        });
    };
}]);