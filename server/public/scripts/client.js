var myApp = angular.module('myApp', []);

myApp.controller('MessageBoardController', function ($http) {
    var vm = this;
    vm.message = {
        username: '',
        write: ''
    };

    vm.submitMessage = function (messageToSubmit) {
        console.log('Submit Button Clicked');
        console.log('message', messageToSubmit);
        $http.post('/messages', messageToSubmit).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log('Failure!');
        });
    }

});
