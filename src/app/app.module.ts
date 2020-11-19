import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { DataDindingComponent } from './data-dinding/dinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { GenderPipe } from './pipes/gender.pipe';
import { GradePipe } from './pipes/grade.pipe';
import { RangePipe } from './pipes/range.pipe';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailsComponent,
    DataDindingComponent,
    EventsComponent,
    LoginComponent,
    PipesDemoComponent,
    GenderPipe,
    GradePipe,
    RangePipe,
    TemplateFormComponent,
    ReactiveFormComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
