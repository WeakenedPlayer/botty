import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DiscordBotService, DiscordBotController } from './discord-bot';

@Module({
  imports: [],
  controllers: [AppController, DiscordBotController],
  providers: [DiscordBotService],
})
export class AppModule {}
