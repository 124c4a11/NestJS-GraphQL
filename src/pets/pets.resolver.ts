import { Query, Resolver } from '@nestjs/graphql';
import { Pet } from './entities/pet.entity';
import { PetsService } from './pets.service';

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private readonly petsService: PetsService) {}

  @Query(() => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }
}
