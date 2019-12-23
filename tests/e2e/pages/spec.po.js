'use strict';
const {
  setDefaultTimeout
} = require('cucumber');
setDefaultTimeout(60 * 1200);

let nameInput,
  greeting;

module.exports = {
  init: () => {
    nameInput = element(by.model('yourName'));
    greeting = element(by.binding('yourName'));

  },
  get: (string) => {
    return browser.get(string);
  },
  setName: (name) => {
    return nameInput.sendKeys(name);
  },
  getGreetingText: () => {
    return greeting.getText();
  }
}