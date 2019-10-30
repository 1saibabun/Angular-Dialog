import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MymodalComponent } from './mymodalcomponent/mymodalcomponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDropdownModule } from 'ngx-bootstrap';
import { FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MymodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule
  ],

  entryComponents: [
    MymodalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
