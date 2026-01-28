export const signup = async (req, res)=> {
    const {fullname, email, password}= req.body

    try {
        if(!fullname || !email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        //To check password
        if(password.length <6){
            return res.status(400).json({message:"password must be at least 6 charactor"});
        }
        //To check email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({message:"Invalid email format"});
        }
    }catch (error){

    }
};