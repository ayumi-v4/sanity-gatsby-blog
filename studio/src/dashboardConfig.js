export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62a0b9f4cb5b19084012f61c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-41d4nh9n",
                  apiId: "bd5b4a58-e03c-401e-b884-2061f5b39fe8",
                },
                {
                  buildHookId: "62a0b9f479ed0c0056a46aa5",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-f1kz5aon",
                  apiId: "e2b333fc-d18d-4864-a73d-0ac99318a8d2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ayumi-v4/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-f1kz5aon.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
