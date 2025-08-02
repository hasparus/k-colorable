declare module "@tanstack/react-query" {
  export function useQuery(...args: any[]): any;
}

declare module "graphql-request" {
  export function request(...args: any[]): any;
  export function gql(...args: any[]): any;
}
