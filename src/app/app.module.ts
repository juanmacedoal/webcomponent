import { RouterModule, PreloadAllModules } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { JmDashboardComponentComponent } from "./jm-dashboard-component/jm-dashboard-component.component";
import { createCustomElement } from "@angular/elements";
// import { AppComponent } from "./app.component";
// const routes = [
//   {
//     path: "",
//     component: JmDashboardComponentComponent
//   }
// ];
@NgModule({
  declarations: [JmDashboardComponentComponent],
  imports: [
    BrowserModule
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  entryComponents: [JmDashboardComponentComponent]
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(JmDashboardComponentComponent, {
      injector: this.injector
    });
    // using built in the browser to create your own custome element name
    customElements.define("jm-dashboard", el);
  }
}
