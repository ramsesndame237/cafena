export interface IHeaderMenu {
    name: string,
    uri: string
}

export interface IProductService {
    title: string,
    image: string,
    description?: string,
    index?: string,
    price?:string
}