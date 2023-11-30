export class CreateModesDto {
  readonly name: string;
  readonly desc: string;
  readonly roles: { name: string; desc: string; sides: string };
}
