import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables/tables.component';
import { RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [TablesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TablesRoutingModule,
    RouterModule,
    HttpClientModule,
    FileUploadModule,

  ],
  exports: []
})
export class TablesModule { }
