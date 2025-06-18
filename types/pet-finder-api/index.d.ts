declare function petFinder(api_key: string, api_secret: string, options?: any): petFinder.PetFinder;

declare namespace petFinder {
    interface PetFinder {
        getBreedList(animal: string, callback: (err: any, breedArray: string[]) => void): void;
        getPet(petId: number, options: any, callback: (error: any, pet: Pet) => void): void;
        getRandomPet(options: any, callback: (error: any, pet: Pet) => void): void;
        findPet(options: any, callback: (error: any, pets: Pet[]) => void): void;
        findShelter(location: string, options: any, callback: (error: any, shelters: Shelter[]) => void): void;
        getShelter(shelterId: string, options: any, callback: (error: any, shelter: Shelter) => void): void;
        getPetsInShelter(shelterId: string, options: any, callback: (error: any, pets: Pet[]) => void): void;
        getSheltersWithBreeds(
            animal: string,
            breed: string,
            options: any,
            callback: (error: any, shelters: Shelter[]) => void,
        ): void;
    }

    interface Pet {
        id: number;
        name: string;
        status: string;
        description: string;
        sex: string;
        age: string;
        size: string;
        mix: string;
        animal: string;
        shelterId: string;
        shelterPetId: string;
        contact: Contact;
        options: string[];
        breeds: string[];
        media: any;
    }

    interface Shelter {
        id: string;
        name: string;
        email: string;
        phone: string;
        fax: string;
        address1: string;
        address2: string;
        city: string;
        state: string;
        zip: string;
        country: string;
        longitude: number;
        latitude: number;
    }

    interface Contact {
        email: string;
        phone: string;
        fax: string;
        address1: string;
        address2: string;
        city: string;
        state: string;
        zip: string;
    }
}

export = petFinder;
