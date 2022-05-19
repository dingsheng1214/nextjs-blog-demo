import { gql, request } from 'graphql-request'

const graphqlAPI: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || ''
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            id
            author {
              bio
              name
              id
              createdAt
              photo {
                url
              }
            }
            slug
            title
            excerpt
            createdAt
            futuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `
  const response = await request(graphqlAPI, query)
  return response.postsConnection.edges
}
