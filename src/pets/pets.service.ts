import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petRepo: Repository<Pet>) {}

  async findAll(): Promise<Pet[]> {
    return await this.petRepo.find();
  }
}
