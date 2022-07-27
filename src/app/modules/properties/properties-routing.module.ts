import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PropertiesComponent } from './properties.component';
import { ListComponent } from './components/list/list.component';
import { NewComponent } from './components/new/new.component';

const routes: Routes = [
  { path: '',
    component: PropertiesComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'new-property', component: NewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
