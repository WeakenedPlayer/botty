import { NgModule } from '@angular/core';

/* Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
const ANGULAR_MODULES = [
    BrowserModule,
    HttpClientModule,
    FormsModule
];

/* Components */
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
       AppComponent
    ],
    imports: [
        ...ANGULAR_MODULES  
    ],
    providers: [],
    bootstrap: [AppComponent]
} )
export class AppModule { }
