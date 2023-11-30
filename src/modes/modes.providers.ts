import { Mongoose } from 'mongoose';
import { ModesSchema } from 'src/modes/schemas/modes.schema';

export const modesProviders = [
  {
    provide: 'MODES_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('MODE', ModesSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
