import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Meta, MetaDefinition, Title} from "@angular/platform-browser";

export interface SeoConfig {
  title: string;
  description?: string;
  keywords?: string[];
  body?: MetaDefinition[];
}

@Injectable({
  providedIn: 'root'
})
export class SimpleMetaGuard implements CanActivate, CanActivateChild {

  constructor(
    private titleService: Title,
    private metaService: Meta) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const metaData: SeoConfig = route.data['meta'];

    this.setMetaData(metaData);
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const metaData: SeoConfig = childRoute.data['meta'];
    this.setMetaData(metaData);
    return true;
  }

  private setMetaData(metaData: SeoConfig) {

    if (metaData.body) this.metaService.addTags(metaData.body);

    this.titleService.setTitle(metaData.title);

    this.checkIfDescriptionIsOverridden(metaData.description)
  }

  private checkIfDescriptionIsOverridden(description: string | undefined) {
    if (description) {
      this.metaService.addTag(
        {name: "description", content: description}
      )
    }
  }

}
