import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {SeoConfig, SimpleMetaGuard} from "SimpleMeta";
import {TestComponent} from "./test/test.component";

export const DEFAULT_SEO_CONFIG: SeoConfig = {
  title: 'testa',
  body: [
    {
      name: 'keywords',
      content: 'test1,test2,test3'
    },
    {
      name: 'description',
      content: 'test4',
    }
  ]
};


const routes: Routes = [
  {path: '', component: TestComponent, canActivate: [SimpleMetaGuard], data: {meta: DEFAULT_SEO_CONFIG}},
  {path: 'test', component: TestComponent, canActivate: [SimpleMetaGuard], data: {meta: DEFAULT_SEO_CONFIG}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: "enabledBlocking",
    // relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
