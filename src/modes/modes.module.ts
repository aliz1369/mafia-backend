import { Module } from '@nestjs/common';
import { ModesController } from './modes.controller';
import { ModesService } from './modes.service';
import { modesProviders } from 'src/modes/modes.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ModesController],
  providers: [ModesService, ...modesProviders],
})
export class ModesModule {}
