export const checkValidData=(email,password,name)=> {
 const isEmailValid =/^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
 const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password);
 //const isNameValid=/*/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/*//^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/.test(name);

 if(!isEmailValid) return "Email Id is not valid";
if(!isPasswordValid) return "Password is not valid";
//if(!isNameValid) return "Name is not Valid"

return null;

};