import { test as base, expect } from "@playwright/test";
import { PetStore } from "../apiClients/petStore/PetStore";

type ApiClients = {
    petStore: PetStore;
}

export const test = base.extend<ApiClients>({
    petStore: async ({ }, use) => {
        const petStore = await PetStore.init();
        await use(petStore);
    }
})

export { expect } from '@playwright/test';