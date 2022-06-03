import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnersModule } from 'src/owners/owners.module';
import { Pet } from './entities/pet.entity';
import { PetsResolver } from './pets.resolver';
import { PetsService } from './pets.service';

@Module({
  providers: [PetsResolver, PetsService],
  imports: [TypeOrmModule.forFeature([Pet]), OwnersModule],
})
export class PetsModule {}
