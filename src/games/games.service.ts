import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateGameDto } from 'src/games/dto/createGameDto';
import { Game } from 'src/games/interfaces/game.interface';

@Injectable()
export class GamesService {
  constructor(@Inject('GAME_MODEL') private readonly gameModel: Model<Game>) {}
  async create(createGameDto: CreateGameDto): Promise<Game> {
    const createGame = await this.gameModel.create(createGameDto);
    return createGame;
  }

  async findAll(): Promise<Game[]> {
    return this.gameModel.find().populate('mode').exec();
  }
}
