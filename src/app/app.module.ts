import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './core/components/dashboard/dashboard.module';
import { HeaderModule } from './core/components/header/header.module';
import { ToggleSidebarModule } from './core/components/toggle-sidebar/toggle-sidebar.module';
import { SidebarModule } from './core/components/sidebar/sidebar.module';

// material
import { MatSidenavModule } from '@angular/material/sidenav';
import { TagListComponent } from './pages/tag/tag-list/tag-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TagListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    DashboardModule,
    HeaderModule,
    ToggleSidebarModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
