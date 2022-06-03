import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(@InjectRepository(Owner) private ownerRepo: Repository<Owner>) {}

  async create(createOwnerInput: CreateOwnerInput) {
    const newOwner = await this.ownerRepo.create(createOwnerInput);

    return await this.ownerRepo.save(newOwner);
  }

  async findAll() {
    return await this.ownerRepo.find();
  }

  async findOne(id: number) {
    return await this.ownerRepo.findOneByOrFail({ id });
  }
}
