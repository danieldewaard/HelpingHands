import * as mongoose from './node_modules/mongoose';

export const CharitySchema = new mongoose.Schema({

    charityId: String,
    name: String,
    website: String, 
    location: {
        country: String,
        city: String, 
    },
    description: String,
    logoURL: String,
    verifiedCharity: Boolean,

});
