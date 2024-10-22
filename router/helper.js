const dcrypt=require('bcryptjs');
const hashedPassword=async(password)=>{
    try{
        const saltRounds=10;
        const hashedPassword=await
        bcrypt.hash(password)
    }
}