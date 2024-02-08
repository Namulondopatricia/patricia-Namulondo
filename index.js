
let  Email = "namulondopat@gmail.com";
   let Password = "22/u/6621@2024";

    let userEmail = prompt[" Enter userEmail "];
    let userPassword = prompt["Enter userPassword"]

function userCredentials(validEmail,validPassword){
    
    if(validEmail === Email && validPassword === Password){
        console.log(`"User email is [email].login succcessfully!" ${userPassword}`)
    }else{
        console.log(`The provided email : ${userEmail} Incorrect credentials`)
    }

}

userCredentials("userEmail","userPassword");
