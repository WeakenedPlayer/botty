import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
} )
export class AppComponent {
    message: string = '';

    constructor( private http$: HttpClient ) {}
    
    async connect() {
        await this.http$.patch( '/server', { "active": true } ).toPromise();
    }
    
    async disconnect() {
        await this.http$.patch( '/server', { "active": false } ).toPromise();
    }
    
    async send() {
        await this.http$.post( '/message', { "message": this.message } ).toPromise();
        this.message = '';
    }
}
