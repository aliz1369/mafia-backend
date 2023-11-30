export class CreateGameDto {
  readonly mode: string;
  readonly players: { name: string; role: string };
}
