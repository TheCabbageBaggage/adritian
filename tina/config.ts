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
        label: "experience",
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
    ],
  },
});
