import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query ($page: Int, $count: Int) {
    getAllUsers(page: $page, count: $count) {
      firstName
      email
    }
  }
`;
