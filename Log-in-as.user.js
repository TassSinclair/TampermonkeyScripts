// ==UserScript==
// @name         Log-in-as
// @namespace    http://sinclairstudios.net
// @version      0.1
// @description  Add buttons for quick logins
// @author       Tass Sinclair
// @match        file:///Users/tass/Projects/tampermonkey-scripts/login.html
// @grant        none
// ==/UserScript==
/* jshint -W097 */

'use strict';
var loginButton = document.querySelector('#login');
var usernameField = document.querySelector('#username');
var passwordField = document.querySelector('#password');


function signInAs(username, password) {
    usernameField.value = username;
    passwordField.value = password;
    loginButton.click();
};

function addLoginButton(username, password) {
    var loginAsButton = document.createElement('button');    
    loginAsButton.innerHTML = 'Log in as ' + username;
    
    loginAsButton.addEventListener('click', function() {
        signInAs(username, password);
    });    
    
    var buttonParent = loginButton.parentNode;
    buttonParent.appendChild(loginAsButton);
}

addLoginButton('DemoUser1', 'password');
addLoginButton('DemoUser2', 'password');
