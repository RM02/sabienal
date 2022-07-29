import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LayoutComponent,
    MenuComponent,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
