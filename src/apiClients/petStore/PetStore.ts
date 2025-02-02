import { APIRequestContext, request } from "@playwright/test";
import { PetStatus, User } from "./types";

export class PetStore {
    private constructor(private ctx: APIRequestContext) {   }
    static async init() {
        const ctx = await request.newContext({baseURL: 'https://petstore.swagger.io'});
        return new PetStore(ctx);
    }

    async createUser(userData: User) {
        return await this.ctx.post('/v2/user', {data: userData})
    }

    async getUser(username: string) {
        return await this.ctx.get(`/v2/user/${username}`);
    }

    async petFindByStatus(statuses: PetStatus[]) {
        const statusQueries = statuses.map(s => `status=${s}`);
        return await this.ctx.get(`/v2/pet/findByStatus?${statusQueries.join('&')}`)
    }
}