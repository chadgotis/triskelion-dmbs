import { defineType,defineField } from "sanity";

export default defineType({
    name: 'member',
    title: 'Member',
    type: 'document',
    fields:[
        defineField({
            name: 'firstname',
            type: 'string',
            title: 'First Name'
        }),
        defineField({
            name: 'middlename',
            type: 'string',
            title: 'Middle Name'
        }),
        defineField({
            name: 'lastname',
            type: 'string',
            title: 'Last Name'
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