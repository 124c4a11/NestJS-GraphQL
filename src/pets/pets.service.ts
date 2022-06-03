import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petRepo: Repository<Pet>) {}

  async create(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = await this.petRepo.create(createPetInput);

    return await this.petRepo.save(newPet);
  }

  async findAll(): Promise<Pet[]> {
    return await this.petRepo.find();
  }

  async findById(id: number): Promise<Pet> {
    return await this.petRepo.findOneByOrFail({ id });
  }
}
