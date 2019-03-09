import { Client, TextChannel } from 'discord.js';
import { fromEvent } from 'rxjs';
import * as config from './config';

export class DiscordBot {
    private client: Client = null;
    async connect(): Promise<void> {
        await new Promise( ( resolve, reject ) => {
            if( this.client === null ) {
                this.client = new Client();
                
                // register 'ready' event listener
                this.client.once( 'ready', () => {
                    resolve();
                } );
                
                // login
                this.client.login( config.TOKEN );
            } else {
                resolve();
            }
        } );
    }
    
    async disconnect() {
        if( this.client !== null ) {
            await this.client.destroy();
            this.client = null;
        }
    }
    
    async send( message: string ) {
        const channel = await this.client.channels.get( config.CHANNEL ) as TextChannel;
        channel.send( message );
    }
}
