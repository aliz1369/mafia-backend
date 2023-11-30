import { Document } from 'mongoose';

export interface Modes extends Document {
  readonly name: string;
  readonly desc: string;
  readonly roles: { name: string; desc: string; sides: string };
}
