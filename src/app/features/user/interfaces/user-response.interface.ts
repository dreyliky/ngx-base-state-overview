export interface UsersResponse {
    results: User[];
    info: Info;
}

export interface User {
    gender: UserGender;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Registered;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
}

export type UserGender = 'male' | 'female';

interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}

interface Name {
    title: string;
    first: string;
    last: string;
}

interface Street {
    number: number;
    name: string;
}

interface Coordinates {
    latitude: string;
    longitude: string;
}

interface Timezone {
    offset: string;
    description: string;
}

interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: any;
    coordinates: Coordinates;
    timezone: Timezone;
}

interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

interface Dob {
    date: Date;
    age: number;
}

interface Registered {
    date: Date;
    age: number;
}

interface Id {
    name: string;
    value: string;
}

interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}
