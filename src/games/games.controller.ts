import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateGameDto } from 'src/games/dto/createGameDto';
import { GamesService } from 'src/games/games.service';

@Controller('games')
export class GamesController {
  constructor(private gameService: GamesService) {}

  @Post()
  async create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Get()
  async findAll() {
    return this.gameService.findAll();
  }
}
