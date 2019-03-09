import { Injectable } from '@nestjs/common';
import { DiscordBot } from './discord-bot';

@Injectable()
export class DiscordBotService {
    private bot: DiscordBot = new DiscordBot();
    constructor() {
    }

    async connect(): Promise<void> {
        console.log( '[Connect]' );
        await this.bot.connect();
    }
    
    async send( message: string ) {
        console.log( '[Send] ' + message );
        await this.bot.send( message );
    }
    
    async disconnect() {
        console.log( '[Disconnect]' );
        await this.bot.disconnect();
    }
}
