import { Mongoose } from 'mongoose';
import { GameSchema } from 'src/games/schemas/game.schema';

export const gameProviders = [
  {
    provide: 'GAME_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('GAME', GameSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
