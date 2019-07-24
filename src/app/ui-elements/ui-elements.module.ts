import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiElementsRoutingModule } from './ui-elements-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { PanelsWellsComponent } from './panels-wells/panels-wells.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [
    CommonModule,
    UiElementsRoutingModule
  ],
  declarations: [ButtonsComponent, PanelsWellsComponent, NotificationsComponent, TypographyComponent, IconsComponent, GridComponent]
})
export class UiElementsModule { }
