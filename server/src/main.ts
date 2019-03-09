import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create( AppModule );
    const options = new DocumentBuilder()
    .setTitle('Discord Bot')
    .setDescription('Discord Bot をREST APIから操作する。')
    .setVersion('1.0')
    .build();

    const document = SwaggerModule.createDocument( app, options );
    SwaggerModule.setup( 'api', app, document );
    
    app.useStaticAssets( join( __dirname, '..', 'public') );    // server/public にバンドルしたファイルを置く

    await app.listen( 3000 );   // TODO: コマンドライン引数でポートを変えられるようにする
}
bootstrap();
