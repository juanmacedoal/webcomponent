# Webcomponent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build the Webcomponent

Run `npm run build` to build the project.

## Package the generate build in one js file

Run `npm run package` will package all the dist/ files in one named webcomponent-element.js (This name can be change in the package.json script)

## Inject the script file

In the index.html inject the script tag with the src route to the file.

## Vars needed

The input are (user) that is the name that will show in screen and the image url in the middle of the page.

## Example

`<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Webcomponent</title>
    <base href="/" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />

  </head>
  <body>
    <jm-dashboard user="Juan Manuel Macedo Almeida" image="../assets/logo.jpg"><jm-dashboard>
  </body>
  <script src="webcomponent-element.js"></script>
</html>`
