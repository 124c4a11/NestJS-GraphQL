import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './entities/pet.entity';
import { PetsService } from './pets.service';

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private readonly petsService: PetsService) {}

  @Mutation(() => Pet)
  createPet(
    @Args('createPetInput') createPetInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petsService.create(createPetInput);
  }

  @Query(() => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }
}
