import mongoose from 'mongoose';

const Connection = async () => {
    const URL = 'mongodb+srv://darshit:12345@blog-website.p8acdfq.mongodb.net/?retryWrites=true&w=majority&appName=blog-website'
    try{
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
//one minute vo postman mai hit nhi ho rhahai lekin 