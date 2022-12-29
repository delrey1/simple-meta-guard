import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Meta, MetaDefinition, Title} from "@angular/platform-browser";

export interface SeoConfig {
  title: string;
  body: MetaDefinition[];
}
@Injectable({
  providedIn: 'root'
})
export class SimpleMetaGuard implements CanActivate {

  constructor(
    private titleService: Title,
    private metaService: Meta) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const metaData: SeoConfig = route.data['meta'];

    this.metaService.addTags(metaData.body);

    this.titleService.setTitle(metaData.title);
    return true;
  }

}
