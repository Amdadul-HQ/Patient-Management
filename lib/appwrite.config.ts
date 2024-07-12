import * as sdk from 'node-appwrite'
const {PROJECT_ID,
    DATABASE,
    PATIENTS_COLLECTION_ID,
    DOCTORS_COLLECTION_ID,
    APPIONTMENT_COLLECTION_ID,NEXT_PUBLIC_BUCKET_ID:BUCKET_ID,Main} = process.env
    
const client = new sdk.Client();