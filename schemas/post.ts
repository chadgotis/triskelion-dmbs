import { isUniqueAcrossAllDocuments } from "@/helpers/isUniqueAcrossAllDocuments";
import { defineType,defineField } from "sanity";

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields:[
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Middle Name',
            options:{
                source: 'title',
                isUnique: isUniqueAcrossAllDocuments
            },
        }),
        defineField({
            name: 'description',
            type: 'string',
            title: 'Post Description'
        }),
        defineField({
            name: 'mainImage',
            type: 'image',
            title: 'Image',
            options:{
                hotspot:true
            }
        }),
    ]
})