import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
    basePath: "adritian",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "experience",
        label: "Experience",
        path: "content/experience",
        ui: {
          allowedActions: {
            create: true,
            delete: true,
          },
        },
        fields: [

          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "jobTitle",
            label: "jobTitle",
          },

          {
            type: "string",
            name: "company",
            label: "company",
          },

          {
            type: "string",
            name: "location",
            label: "location",
          },

          {
            type: "string",
            name: "duration",
            label: "duration",
          },

          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      // publications
      {
        name: "publications",
        label: "Publications",
        path: "content/publications",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "url",
            label: "URL",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "object",
            name: "categories",
            label: "Categories",
            list: true,
            itemProps: (item) => ({
              label: item.name, // Use the name
            }),
            fields: [
              {
                type: "string",
                name: "name",
                label: "Name",
              },
              {
                type: "string",
                name: "id",
                label: "ID",
              },
              {
                type: "object",
                name: "books",
                label: "Books",
                list: true,

                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "author",
                    label: "Author",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Link",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                  },
                ],
                itemProps: (item) => ({
                  label: item.title, // Use the name
                }),
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],

      },

      // homepage 
      {
        format: "yaml",
        name: 'homePageData',
        label: 'Home Page',
        path: "data",

        fields: [
          {
            type: 'object',
            name: 'head',
            label: 'Site Title',
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Title',
              },
            ],
          },
          {
            type: 'object',
            name: 'showcase',
            label: 'Me Section',

            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              {
                type: "string",
                name: "title",
                label: "title",
              },
              {
                type: "string",
                name: "subtitle",
                label: "subtitle",
              },
              {
                type: "rich-text",
                name: "description",
                label: "description",
              },
              {
                type: 'object',
                name: 'image',
                label: 'Image',
                fields: [
                  {
                    type: 'string',
                    name: 'x',
                    label: 'Image',
                  },
                  {
                    type: 'string',
                    name: '_2x',
                    label: 'Image ',
                  },
                ],
              },

              {
                type: 'object',
                name: 'imageMobile',
                label: 'Image',
                fields: [
                  {
                    type: 'string',
                    name: 'x',
                    label: 'Image',
                  },
                ],
              },
              {
                type: 'object',
                name: 'button',
                label: 'Button',
                fields: [
                  {
                    type: 'string',
                    name: 'icon',
                    label: 'Icon',
                  },
                  {
                    type: 'string',
                    name: 'btnText',
                    label: 'Button Text',
                  },
                  {
                    type: 'string',
                    name: 'URL',
                    label: 'URL',
                  },
                ],
              },

              {
                type: 'object',
                name: 'socialLinks',
                label: 'socialLinks',
                list: true,

                fields: [
                  {
                    type: 'string',
                    name: 'icon',
                    label: 'Icon',
                  },
                  {
                    type: 'string',
                    name: 'URL',
                    label: 'URL',
                  },
                ],

              },



            ],

          },
          // about
          {
            type: 'object',
            name: 'about',
            label: 'About',
            fields: [

              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              {
                type: 'string',
                name: 'title',
                label: 'Title',
              },
              {
                type: 'rich-text',
                name: 'content',
                label: 'about me',
              },
              {
                type: 'object',
                name: 'button',
                label: 'Button',
                fields: [
                  {
                    type: 'string',
                    name: 'icon',
                    label: 'Icon',
                  },
                  {
                    type: 'string',
                    name: 'btnText',
                    label: 'Button Text',
                  },
                  {
                    type: 'string',
                    name: 'URL',
                    label: 'URL',
                  },
                ],
              },
              {
                type: 'object',
                name: 'image',
                label: 'Image',
                fields: [
                  {
                    type: 'string',
                    name: 'x',
                    label: 'Image',
                  },
                  {
                    type: 'string',
                    name: '_2x',
                    label: 'Image',
                  },
                ],
              },
            ],
          },

          // education

          {
            type: 'object',
            name: 'education',
            label: 'Education',
            fields: [
              {
                type: 'boolean',
                name: 'enable',
                label: 'Enable Education Section',
              },
              {
                type: 'string',
                name: 'title',
                label: 'Title',
              },
              {
                type: 'object',
                name: 'items',
                label: 'Education Items',
                list: true,

                fields: [
                  {
                    type: 'string',
                    name: 'university',
                    label: 'University',
                  },
                  {
                    type: 'string',
                    name: 'year',
                    label: 'Year',
                  },
                  {
                    type: 'string',
                    name: 'degree',
                    label: 'Degree',
                  },
                ],
                
              },
            ],
          },

          // experience 

          {
            type: 'object',
            name: 'experience',
            label: 'Experience',
            
            fields: [
              {
                type: 'boolean',
                name: 'enable',
                label: 'Enable Experience Section',
              },
              {
                type: 'string',
                name: 'title',
                label: 'Title',
              },
              {
                type: 'rich-text',
                name: 'description',
                label: 'Description',
              },
              {
                type: 'object',
                name: 'button',
                label: 'LinkedinBUtton',
                fields: [
                  {
                    type: 'string',
                    name: 'icon',
                    label: 'icon',
                  },
                  {
                    type: 'string',
                    name: 'btnText',
                    label: 'btnText',
                  },
                  {
                    type: 'string',
                    name: 'URL',
                    label: 'URL',
                  },
                ],
              },
              {
                type: 'object',
                name: 'button2',
                label: 'Download Resume Button',
                fields: [
                  {
                    type: 'string',
                    name: 'icon',
                    label: 'icon',
                  },
                  {
                    type: 'string',
                    name: 'btnText',
                    label: 'btnText',
                  },
                  {
                    type: 'string',
                    name: 'URL',
                    label: 'URL',
                  },

                ],
              },
              {
                type: 'object',
                name: 'button3',
                label: 'Experience Button',
                fields: [
                  {
                    type: 'string',
                    name: 'icon',
                    label: 'icon',
                  },
                  {
                    type: 'string',
                    name: 'btnText',
                    label: 'btnText',
                  },
                  {
                    type: 'string',
                    name: 'URL',
                    label: 'URL',
                  },

                ],
              },

              {
                type: 'object',
                name: 'items',
                label: 'items',
                list: true,
              
                fields: [
                  {
                    type: 'string',
                    name: 'title',
                    label: 'title',
                  },
                  {
                    type: 'string',
                    name: 'company',
                    label: 'company',
                  },
                  {
                    type: 'string',
                    name: 'duration',
                    label: 'duration',
                  },

                ],
              },
            ],

          },

          // contact
          {
            type: 'object',
            name: 'contact',
            label: 'Contact',
            fields: [
              {
                type: 'boolean',
                name: 'enable',
                label: 'Enable Contact Section',
              },
              {
                type: 'string',
                name: 'title',
                label: 'Contact Title',
              },
              {
                type: 'object',
                name: 'form',
                label: 'Contact Form',
                fields: [
                  {
                    type: 'string',
                    name: 'action',
                    label: 'Form Action',
                  },
                  {
                    type: 'string',
                    name: 'full_name',
                    label: 'Full Name',
                  },
                  {
                    type: 'string',
                    name: 'email',
                    label: 'Email Address',
                  },
                  {
                    type: 'string',
                    name: 'message',
                    label: 'Message',
                  },
                ],
              },
              {
                type: 'object',
                name: 'phone',
                label: 'Phone Number',
                fields: [
                  {
                    type: 'string',
                    name: 'title',
                    label: 'Title',
                  },
                  {
                    type: 'string',
                    name: 'number',
                    label: 'Phone Number',
                  },
                ],
              },
              {
                type: 'object',
                name: 'email',
                label: 'Email Address',
                fields: [
                  {
                    type: 'string',
                    name: 'title',
                    label: 'Title',
                  },
                  {
                    type: 'string',
                    name: 'email',
                    label: 'Email Address',
                  },
                ],
              },
              {
                type: 'object',
                name: 'address',
                label: 'Address',
                fields: [
                  {
                    type: 'string',
                    name: 'title',
                    label: 'Title',
                  },
                  {
                    type: 'string',
                    name: 'address',
                    label: 'Address',
                  },
                ],
              },
              {
                type: 'object',
                name: 'button',
                label: 'Button',
                fields: [
                  {
                    type: 'string',
                    name: 'icon',
                    label: 'Button Icon',
                  },
                  {
                    type: 'string',
                    name: 'btnText',
                    label: 'Button Text',
                  },
                ],
              },
            ],
          },
        ],
      },



    ],
  },
});
