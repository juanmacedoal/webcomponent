# Webcomponent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

ng add @angular/elements
ng add ngx-build-plus
ng build --prod --output-hashing none --single-bundle true

## Build the Webcomponent

Run `npm run build` to build the project.

## Package the generate build in one js file

Run `npm run package` will package all the dist/ files in one named webcomponent-element.js (This name can be change in the package.json script)

## Inject the script file

In the index.html inject the script tag with the src route to the file and inject this in the body.

<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.4/polyfill.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.10/webcomponents-bundle.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.1/zone.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.10/custom-elements-es5-adapter.js"></script>

## Vars needed

The input are (user) that is the name that will show in screen and the image url in the middle of the page.

## Example

In the test-webcomponent folder there is the example

## Possible error

If you get the following error:

Schema validation failed with the following errors:
Data path ".budgets[1].type" should be equal to one of the allowed values.

Go to budgets in the angular.json and delete the lines:

{
"type": "anyComponentStyle",
"maximumWarning": "6kb",
"maximumError": "10kb"
}

## Credits to the information

Link: https://medium.com/@het/micro-front-end-with-angular-elements-web-components-c56b7a235bcb
