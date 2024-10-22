app.post('/register',async (req,res)
=>{
    try{
        const{name,age,worktype,password,confirmpassword}=req.body;
        const  ifExist=await User.findOne({email:email});
        if(ifExist){
            return res.status(400).send({message:"Email already exist"});
    }
    const data=new User({name,email,age,worktype,password:hashedPassword,confirmpassword});
    const response=await User.save(data);
    if(response){
        res.status(200).send(data);
    }
}
catch (err){
    res.status(500).send(err);
}
})
