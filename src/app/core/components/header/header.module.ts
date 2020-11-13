import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ToggleSidebarModule } from '../toggle-sidebar/toggle-sidebar.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ToggleSidebarModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
