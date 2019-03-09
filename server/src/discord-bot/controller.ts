import { Controller, Get, Body, Res, Post, Patch } from '@nestjs/common';
import { ApiModelProperty, ApiResponse } from '@nestjs/swagger';

import { DiscordBotService } from './service'

export class MessageDto {
    @ApiModelProperty( { required: true } )
    message: string;
}

export class ServerStatusDto {
    @ApiModelProperty( { required: true } )
    active: boolean;
}

@Controller()
export class DiscordBotController {
    constructor( private bot$: DiscordBotService ) {}
    
    @Post('message')
    async message( @Body() message: MessageDto ) {
        await this.bot$.send( message.message );
    }
    
    @Patch('server')
    async connect( @Body() serverStatus: ServerStatusDto ) {
        if( serverStatus.active ) {
            await this.bot$.connect();
        } else {
            await this.bot$.disconnect();
        }
    }   
}
