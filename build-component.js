const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/webcomponent/runtime-es2015.js",
    "./dist/webcomponent/polyfills-es2015.js",
    "./dist/webcomponent/scripts.js",
    "./dist/webcomponent/main-es2015.js"
  ];

  await fs.ensureDir("elements");
  await concat(files, "elements/webcomponent.js");
})();
