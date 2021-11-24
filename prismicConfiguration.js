// -- Prismic Repo Name
export const repoName = "jaypiclab";

// -- Prismic API endpoint
export const apiEndpoint = `https://${repoName}.prismic.io/api/v2`;

// -- Access Token if the repository is not public
export const accessToken = "";

// -- Link resolution rules
export const linkResolver = (doc) => {
  if (doc.type === "page") {
    return `/${doc.uid}`;
  }
  return "/";
};

// -- Route Resolver rules
export const Router = {
  routes: [
    {
      type: "homepage",
      path: "/:uid",
    },
  ],
};
