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


import { HeaderLanguageComponent } from './shared/header-language/header-language.component';

import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLanguageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    DashboardModule,
    HeaderModule,
    ToggleSidebarModule,
    SidebarModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
