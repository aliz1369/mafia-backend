import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateModesDto } from 'src/modes/dto/createModesDto';
import { Modes } from 'src/modes/interfaces/modes.interface';
import { ModesService } from 'src/modes/modes.service';

@Controller('modes')
export class ModesController {
  constructor(private readonly modesService: ModesService) {}

  @Post()
  async create(@Body() createModesDto: CreateModesDto) {
    return this.modesService.create(createModesDto);
  }

  @Get()
  async findAll(): Promise<Modes[]> {
    return this.modesService.findAll();
  }

  @Patch('/:id')
  async update(
    @Body() updateModesDto: CreateModesDto,
    @Param('id') id: string,
  ) {
    const update = this.modesService.update(id, updateModesDto);
    return update;
  }
}
