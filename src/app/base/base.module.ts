import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { BaseComponent } from './base.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ColorComponent } from './content/color/color.component';
import { BioComponent } from './content/bio/bio.component';
import { TypographyComponent } from './content/typography/typography.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    BaseComponent,
    SidenavComponent,
    HeaderComponent,
    ContentComponent,
    ColorComponent,
    BioComponent,
    TypographyComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
