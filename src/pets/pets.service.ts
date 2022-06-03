import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petRepo: Repository<Pet>,
    private readonly ownersService: OwnersService,
  ) {}

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

  async getOwner(id: number): Promise<Owner> {
    return await this.ownersService.findOne(id);
  }
}
