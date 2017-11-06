var myApp = angular.module('myApp', []);

myApp.controller('MessageBoardController', function ($http) {
    var vm = this;
    vm.message = {
        username: '',
        write: ''
    };

    vm.messages = []
    
    vm.getMessages = function () {
        $http.get('/messages').then(function (response){
            vm.messages = response.data;
        });
    }

    vm.getMessages();

    vm.submitMessage = function (messageToSubmit) {
        console.log('Submit Button Clicked');
        console.log('message', messageToSubmit);
        $http.post('/messages', messageToSubmit).then(function (response) {
            console.log(response);
            vm.getMessages();
        }).catch(function (error) {
            console.log('Failure!');
        });
    }

});
