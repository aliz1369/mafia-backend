import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateModesDto } from 'src/modes/dto/createModesDto';
import { UpdateModesDto } from 'src/modes/dto/updateModesDto';
import { Modes } from 'src/modes/interfaces/modes.interface';

@Injectable()
export class ModesService {
  constructor(
    @Inject('MODES_MODEL') private readonly modesModel: Model<Modes>,
  ) {}

  async create(createModesDto: CreateModesDto): Promise<Modes> {
    const createModes = await this.modesModel.create(createModesDto);
    return createModes;
  }
  async findAll(): Promise<Modes[]> {
    return this.modesModel.find().exec();
  }

  async findOne(id: string): Promise<Modes> {
    return this.modesModel.findById(id).exec();
  }

  async update(id: string, updateModesDto: UpdateModesDto) {
    return this.modesModel.findByIdAndUpdate(id, updateModesDto).exec();
  }
}
