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
export interface  TextFieldInterface {
    prefixIcon?:string,
    suffixIcon?:string,
    placeholder?:string,
    type:string,
    classes:string[],
    inputClasses:string[]
}