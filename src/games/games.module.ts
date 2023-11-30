import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { gameProviders } from 'src/games/games.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [GamesController],
  providers: [GamesService, ...gameProviders],
})
export class GamesModule {}
