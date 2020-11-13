import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
