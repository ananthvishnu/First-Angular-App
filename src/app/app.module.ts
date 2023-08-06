import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//import { ReactiveFormComponent,  } from './reactive-form/reactive-form.component';
//import { FormComponent } from './form/form.component';
//import { ListComponent } from './list/list.component';
//import { HeadingComponent } from './heading/heading.component';
// import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    //DataBindComponent,
    //ReactiveFormComponent,
    //FormComponent,
    //ListComponent,
    //HeadingComponent,
    //TemplateDrivenFormComponent,
    //HelloWorldComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
