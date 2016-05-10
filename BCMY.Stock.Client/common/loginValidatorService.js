﻿(function () {
    "use strict";
    var module = angular.module("stockManagement");         // get module

    module.factory('loginValidatorService', function () {
        return {
            loginValidator: function () {
                if (localStorage["userName"] != null && localStorage["userName"] != '' && localStorage["userRolesList"] != null && localStorage["userRolesList"] != '') {
                    //alert("login validator service called " + localStorage["userName"]);
                    return true;
                }
                else {
                    alert("Error - Login validator service --> You are not logged in, or no role assigned");
                    return false;
                }                
            }
        };
    });

}());