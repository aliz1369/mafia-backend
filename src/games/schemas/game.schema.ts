import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { Modes } from 'src/modes/schemas/modes.schema';

export type GamesDocument = HydratedDocument<Game>;

@Schema()
export class Game {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Modes' })
  mode: Modes;

  @Prop({
    type: [
      {
        name: { type: String, required: true },
        role: { type: String },
      },
    ],
  })
  players: { name: string; role: string };
}

export const GameSchema = SchemaFactory.createForClass(Game);
