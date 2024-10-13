import {links} from "./data"
export type SectionName = (typeof links) [number] ["hash"]
export type ProjectInfo ={
   title:string
   description:string
   tags:string[]
   link:string
   imageUrl:string
}
 export type Link = {
    nameEng:string;
    hash:string

 }