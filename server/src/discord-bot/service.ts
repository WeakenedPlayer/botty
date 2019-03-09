import { Injectable } from '@nestjs/common';
import { DiscordBot } from './discord-bot';

@Injectable()
export class DiscordBotService {
    private bot: DiscordBot = new DiscordBot();
    constructor() {
    }

    async connect(): Promise<void> {
        await this.bot.connect();
    }
    
    async send( message: string ) {
        await this.bot.send( message );
    }
    
    async disconnect() {
        await this.bot.disconnect();
    }
}
