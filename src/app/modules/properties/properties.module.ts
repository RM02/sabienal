import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesRoutingModule } from './properties-routing.module';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { PropertiesComponent } from './properties.component';
import { ListComponent } from './components/list/list.component';
import { NewComponent } from './components/new/new.component';

import { PropertiesService } from 'src/app/services/properties/properties.service';



@NgModule({
  declarations: [
    PropertiesComponent,
    ListComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    MatTableModule,
    FormsModule,
    SharedModule,
  ],
  providers: []
})
export class PropertiesModule { }
