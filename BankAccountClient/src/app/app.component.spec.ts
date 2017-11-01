import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

import {HttpModule} from '@angular/http';
import {AccountComponent} from './account/account.component';
import {DepWithComponent} from './depwith/dep.with.component';
import {MaterialModule} from '../material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NbThemeModule, NbSidebarModule, NbLayoutModule, NbSidebarService} from '@nebular/theme';

import {MessagesModule} from 'primeng/primeng';
import {MessageModule} from 'primeng/primeng';

const appRoutes: Routes = [
  { path: 'forms', component: DepWithComponent },
  { path: '', component: AccountComponent },
];


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MessagesModule,
        MessageModule,
        NgbModule,
        HttpModule,
        BrowserModule,
        ReactiveFormsModule,
        MaterialModule,
        NbThemeModule.forRoot({name: 'default'}),
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

    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'MYBANK'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('MYBANK');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('MYBANK');
  }));
});
