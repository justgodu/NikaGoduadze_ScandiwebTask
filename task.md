Hi!

Your test day assignment is provided in this email.
This task will introduce you to ScandiPWA and ask you to implement your own component.

In case of ANY questions, blockers, or uncertainties - please don't hesitate to contact me!
Either via email (just respond to this message) or via Telegram (@dzhax).
Communication through Telegram will go faster.

Before you start, please ensure that you have Linux OS, node 14, npm 6, and yarn.
If you don't have yarn, you can install it with the following command:
```
npm -g install yarn
```

First please follow these steps in order to install and set up your ScandiPWA project.
```
# Install a project
yarn create scandipwa-app <FOLDER>
# Enter to the project directory
cd <FOLDER>
# Downgrade ScandiPWA
yarn add @scandipwa/scandipwa@4.5.1
```

Then open `composer.json` file and replace the list of dependencies in the `require` section with the following values:
```
"magento/framework": "*",
"scandipwa/service-worker": "1.0.1",
"scandipwa/installer": "4.0",
"scandipwa/menu-organizer": "2.1.1",
"scandipwa/persisted-query": "3.0.1",
"scandipwa/slider-graphql": "2.1.0",
"scandipwa/cms-graphql": "1.4.2",
"scandipwa/catalog-graphql": "3.1.24",
"scandipwa/route717": "2",
"scandipwa/performance": "1.4.6",
"scandipwa/customer-graph-ql": "3.1.2",
"scandipwa/quote-graphql": "2.19.8",
"scandipwa/wishlist-graphql": "2.0.7",
"scandipwa/urlrewrite-graphql": "1.3.7",
"scandipwa/store-graphql": "1.2.3",
"scandipwa/customization": "1.5.3",
"scandipwa/cache": "1.1.3",
"scandipwa/locale": "2",
"scandipwa/contact-graphql": "1.0.0",
"scandipwa/klarna-graphql": "1.1.2",
"scandipwa/compare-graphql": "1.0.8",
"scandipwa/customer-downloadable-graphql": "1.0.2",
"scandipwa/directory-graphql": "1.0.1",
"scandipwa/catalog-customer-graphql": "1.0.0"
```

Next open `package.json`, find the `proxy` field, and replace it with the following value:
```
https://demo100-ors-1588667385-swpwa451-zco.scandipwa.cloud/
```

It's also advisable to disable eslint for this task. Just head to the `eslintConfig` section inside the `package.json` and replace it with the next lines:
```
"eslintConfig": {
    "extends": "@scandipwa",
    "ignorePatterns": ["src/**"]
},
```

Now you can start the project:
```
yarn start
```

When you are done, please notify me so i can be sure that you didn't have any issues with the setup.

Before you start doing the task, you should get familiar with ScandiPWA [documentation](https://docs.scandipwa.com/).
You need to read about the [override mechanism](https://docs.scandipwa.com/developing-with-scandi/override-mechanism) first in order to implement your task.
Additional information regarding the project scaffolding technology and its features can be found in [this documentation](https://docs.create-scandipwa-app.com/).

The following task must be completed:
- Github issue [#889: Show checkout steps and progress](https://github.com/scandipwa/scandipwa/issues/889)

In this task, you have to implement a progress bar for the Checkout page.
The progress bar should look like it appears on the [screenshot](https://user-images.githubusercontent.com/46347627/97552113-83394480-19dc-11eb-8455-fbb4c693b477.png).
There are some mandatory requirements:
1. Progressbar must match the website's primary color.
2. The last step checkpoint doesn't render, you fill the progress bar to the end instead. So when you have shipping, billing, and success steps, you render two checkpoints for shipping and billing, but on the last (third) step you fill the progress bar to the end so it becomes completed.
3. Components should be reusable. No hardcode is allowed, all data is provided in the app. It should support any amount of steps. It should be possible to take this component out and put it into any other ScandiPWA project without any modifications.
4. When you complete a step, the progress bar should fill the next segment with animation.

You can use these credentials in order to log in and reuse predefined address so you don't have to enter an address in a form after each reload:
```
magento@magento.com
P@ssw0rd
```

When you are done, please push your result to the GitHub and send me the link.

Good luck!