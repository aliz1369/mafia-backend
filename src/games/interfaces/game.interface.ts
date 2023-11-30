import { Document } from 'mongoose';

export interface Game extends Document {
  readonly mode: string;
  readonly players: { name: string; role: string };
}
