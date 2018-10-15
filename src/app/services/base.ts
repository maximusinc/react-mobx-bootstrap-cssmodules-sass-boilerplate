

export abstract class BaseService {
    protected provider: any;

    constructor(provider: any) {
        this.provider = provider;
    }
}