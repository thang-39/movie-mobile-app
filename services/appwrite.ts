// track the searches made by a user

import {Client} from "react-native-appwrite";

const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;
const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;


const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject(PROJECT_ID)

export const updateSearchCount = async (query: string, movie: Movie) => {
  // check if a record of that search has already been stored
  // if a document is found increment the searchCount field
  // if no document is found
    // create a new document in Appwrite database -> 1
}