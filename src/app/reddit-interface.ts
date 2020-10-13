export interface Data{
    title: string;
    thumbnail: string;
    permalink: string;
}

export interface Data1{
    modhash: string;
    dist: number;
    children: Child[];
    after: string;
}

export interface Child{
    kind: string;
    data: Data;
}

export interface Parent{
    kinda: string;
    data: Data1;
}
