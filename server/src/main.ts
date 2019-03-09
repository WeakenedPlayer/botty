import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.create( AppModule );
    
    app.useStaticAssets( join( __dirname, '..', 'public') );    // server/public にバンドルしたファイルを置く

    await app.listen( 3000 );   // TODO: コマンドライン引数でポートを変えられるようにする
}
bootstrap();
