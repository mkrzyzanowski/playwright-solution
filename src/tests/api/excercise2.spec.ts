import { test, expect } from '../../fixtures/apiClients';
import { ApiResponse, Pet, PetStatus, User } from '../../apiClients/petStore/types';
import { randomized } from '../../data/user';
import { PetStoreAnalyzer} from "../../utils/PetStoreAnalyzer"

test.describe('Pet Store', () => {
    test('should create a user and retrieve it', async ({ petStore }) => {
        const testUser = randomized;

        const createUserResponse = await petStore.createUser(testUser);
        expect(createUserResponse.ok()).toBeTruthy();
        const createUserResponseBody = await createUserResponse.json() as ApiResponse;
        expect(createUserResponseBody.message).toBe(String(testUser.id));

        const getUserResponse = await petStore.getUser(testUser.username);
        expect(getUserResponse.ok()).toBeTruthy();
        const retrievedUser = await getUserResponse.json() as User;
        expect(retrievedUser).toStrictEqual(testUser);
    });

    test('should retrieve sold pets and list the name counts', async ({ petStore }) => {
        const petsResponse = await petStore.petFindByStatus([PetStatus.Sold]);
        expect(petsResponse.ok()).toBeTruthy();
        const pets = await petsResponse.json() as Pet[];

        const petData = getPetsAsTuples(pets);
        const petStoreAnalyzer = new PetStoreAnalyzer(petData);
        const petCount = petStoreAnalyzer.countPetNames();

        const sum = Object.values(petCount).reduce((acc, val) => acc + val, 0);
        expect(sum).toEqual(petData.length);
    });
});

const getPetsAsTuples = (pets: Pet[]): [number, string][] => pets.map(pet => [pet.id, pet.name]);