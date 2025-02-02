import { User } from "../apiClients/petStore/types";
import {faker} from "@faker-js/faker";

export const randomized: User = {
    id: faker.number.int(),
    username: faker.internet.username(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.number(),
    userStatus: faker.number.int({ min: 0, max: 2 })
}