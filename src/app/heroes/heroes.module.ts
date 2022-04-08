import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    HeroListComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeroListComponent,
    HeroComponent
  ],
})
export class HeroesModule {
  
}