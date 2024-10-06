import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66c2d2ec0015b2a82634")
  .setKey(
    "6e17e0b3c975b288e7f050e7206add9bdd6d25801e7014d928f80a1c851ec5619053f6af7d2c719e20c0f4680406cc12742854060146350e1de8c9ed22b2d3fb60741445923bc0a2426e025956c3240e53d6978800886123aa3b482d7990c9660306faeeb05dd3f6a95dc0f1169b57a48bd1039f6429d444ebe8dbf838c626c8"
  );

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
