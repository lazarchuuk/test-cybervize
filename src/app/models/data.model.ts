export interface Drug {
    id: string;
    diseases: string[];
    description: string;
    name: string;
    released: string;
}

export interface DrugListAPI {
    drugs: Drug[]
}
