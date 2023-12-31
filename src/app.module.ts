import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModesModule } from './modes/modes.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [ModesModule, GamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
