import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Component/user/user.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './Component/parent/parent.component';
import { ChildComponent } from './Component/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //Starting component (HTML)
})
export class AppModule { }
