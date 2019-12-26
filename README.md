## Basic Setup for Protractor

### To set up

- Run ```npm install``` to install dependencies;
- Run ```webdriver-manager update``` to install the helper that download the browsers and instance of Selenium.

### Technologies used

* [Protractor](https://www.protractortest.org/#/): Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would;
* [CucumberJS](https://github.com/cucumber/cucumber-js): Cucumber is a tool for running automated tests written in plain language. Because they're written in plain language, they can be read by anyone on your team. Because they can be read by anyone, you can use them to help improve communication, collaboration and trust on your team;

### Running tests

- Start the Selenium Server ```webdriver-manage start```

- Run the tests ```protractor protractor.conf.js```

###Information

- I have added Cucumber HTML Reporter: https://www.npmjs.com/package/protractor-multiple-cucumber-html-reporter-plugin

__Credits for Tulio for creating the reference repository: https://github.com/tuliobluz/protractor-cucumber-pageobject__
