import { gql } from "@apollo/client";

// get session user
export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      email
      folders {
        _id
        title
        createdAt
        aspirations {
          _id
          title
          description
          category
          createdAt
          date
          img
          priority
          genre
          focusPoint
          diet
          culture
          whatArticle
          username
        }
      }
    }
  }
`;

// get single folder
export const QUERY_FOLDER = gql`
  query folder($id: ID!) {
    folder(_id: $id) {
      _id
      title
      aspirations {
        _id
      }
    }
  }
`;

// get all folders
export const QUERY_FOLDERS = gql`
  query folders($username: String) {
    folders(username: $username) {
      _id
      title
    }
  }
`;

// get single aspiration
export const QUERY_ASPIRATION = gql`
  query aspiration($id: ID!) {
    aspiration(_id: $id) {
      _id
      title
      description
      category
      createdAt
      date
      img
      priority
      genre
      focusPoint
      diet
      region
      whatArticle
    }
  }
`;
