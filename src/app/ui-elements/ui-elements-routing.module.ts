import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelsWellsComponent } from './panels-wells/panels-wells.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { GridComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';

const routes: Routes = [
  {
    path: 'panels-wells',
    component: PanelsWellsComponent,
    data: { title: 'Panels and Wells' }
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
    data: { title: 'Buttons' }
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    data: { title: 'Notifications' }
  },
  {
    path: 'typography',
    component: TypographyComponent,
    data: { title: 'Typography' }
  },
  {
    path: 'icons',
    component: IconsComponent,
    data: { title: 'Icons' }
  },
  {
    path: 'grid',
    component: GridComponent,
    data: { title: 'Grid' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiElementsRoutingModule { }
