import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AccountComponent } from './account/account.component';
import { DepWithComponent } from './depwith/dep.with.component';
import { MaterialModule} from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbSidebarService  } from '@nebular/theme';

import {MessagesModule} from 'primeng/primeng';
import {MessageModule} from 'primeng/primeng';

const appRoutes: Routes = [
  { path: 'forms', component: DepWithComponent },
  { path: '', component: AccountComponent },
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    NgbModule,
    HttpModule,
    BrowserModule,
    ReactiveFormsModule ,
    MaterialModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule,
    NbLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    AccountComponent,
    DepWithComponent,
  ],
  providers: [
    NbSidebarService,
    { provide: APP_BASE_HREF, useValue: location.pathname }, // This is specifically for Plunker's baseURL: run.plunkr.co
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

