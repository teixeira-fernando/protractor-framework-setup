let specPage = require('../pages/spec.po.js');
let screenshotCapture = require('../utils/screenshotCapture.js');

Before(function(){
    specPage.init();
})

Given('The user go to {string}', function (string) {
    specPage.get(string);
});

When('The user adds {string} in the name field', function (string) {
    specPage.setName(string);
});

Then('The user should see Hello with the username', function () {
    browser.takeScreenshot().then(function (png) {
        screenshotCapture.writeScreenShot(png, './reports/screenshots/test.png')
    });
    expect(specPage.getGreetingText())
        .to.eventually.equal('Hello Fernando!')
});