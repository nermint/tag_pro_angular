import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagListComponent } from '../tag/tag-list/tag-list.component';
import { TagRoutingModule } from './tag-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
//import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [TagListComponent],
  imports: [
    CommonModule,
    TagRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    //MatTabsModule
  ],
  exports: [ TagListComponent]
})
export class TagModule { }
