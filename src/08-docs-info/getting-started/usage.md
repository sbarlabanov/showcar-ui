<h2>Usage</h2>

You can either include showcar-ui as a fragment or directly include the JS, CSS and inline HTML on your page. The library provides some HTML content that needs to be inlined on your page. Use the index.html in the dist folder as a template in order to include the inline HTML, CSS and JS on your page.

<br>

#### Include jigsaw fragment (prefered):

If you are using UI-Composition you can use the showcar-ui fragment by adding the following line after the beginning of the BODY tag in your HTML:

```html
<body>
  <!--#include virtual="/fragment/assets/external/showcar-ui/showcar-ui-toggled-fragment.html" -->
</body>
```

<br>

#### Include pre-built dist files:

In case you can not use the fragment to include showcar-ui you can also include the pre-built files directly from the release branch in the github repository.
In order to do so follow these steps:

1.
Install showcar-ui NPM package:

```js
npm install showcar-ui --save
```

2.
Include the files on your page:

```html
<html>
  <head>
    <link rel="stylesheet" href="node_modules/showcar-ui/dist/showcar-ui.css" />
  </head>
  <body>
    <script src="node_modules/showcar-ui/dist/showcar-ui.js"></script>
  </body>
</html>
```

CAUTION: Be aware that you will not get any polyfills if you only include the JS/CSS files. In order to make the showcar-ui
library work properly cross browser you also need to include the inlined JS/CSS that we provide with our index-standalone.html
file. This file can also be found in the dist folder. Please make sure you also include this html file on your page. If you
need assistance please contact the Web Experience Team.

<br>

#### Build locally:

For building locally you can use the showcar-gulp build pipeline template: <a href="https://github.com/Scout24/showcar-gulp">https://github.com/Scout24/showcar-gulp</a>

1.
Clone repository

```bash
git clone git@github.com:Scout24/showcar-ui.git
```

2.
Setup

```bash
brew install node # install node if you didn't do it before
brew install yarn # we use yarn instead of npm to manage node package dependencies
yarn global add gulp # install gulp globally
yarn install
```

3.
Build and run

```bash
gulp build
```
