import { PetCount } from "../apiClients/petStore/types";

export class PetStoreAnalyzer {
  private pets: [number, string][] = [];

  constructor(petData: [number, string][]) {
    this.pets = petData;
  }

  countPetNames(): PetCount {
    const count =  this.pets.reduce((acc: PetCount, [_, name]) => {
      acc[name] = (acc[name] || 0) + 1;
      return acc;
    }, {});
    console.log('Pet name counts:', count);
    return count;
  }
}
