 export interface Project {
    id: number;
    name: string;
    description: string;
    short_description: string;
    categories: string[];
    img_src: string;
    site: string;
    category: Category;
}

export interface Category{
    id: number;
    name: string;
}