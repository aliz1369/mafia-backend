import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ModesDocument = HydratedDocument<Modes>;

@Schema()
export class Modes {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  desc: string;

  @Prop({
    type: [
      {
        name: { type: String, required: true },
        description: { type: String },
        sides: {
          type: String,
          required: true,
          enum: ['black', 'white', 'gray'],
        },
      },
    ],
  })
  roles: { name: string; desc: string; sides: string };
}

export const ModesSchema = SchemaFactory.createForClass(Modes);
