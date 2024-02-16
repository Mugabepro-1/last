class User{
    username;
    email;
    password;
    confirmpassword;
    dob;
    address;

    login(emailValue, passwordValue){
       this.email = emailValue;
       this.password = passwordValue
    }

    forgotPassword(email, password, confirmPassword){}
    signup(username, email, password, confirmPassword, dob,address){
        this.username=username;
        this.email =email;
        this.password =password;
        this.confirmpassword= confirmPassword;
        this.dob = dob;
        this.address= address;

    }
    tostring(){
        return $`username:${this.username}`+`password:${this.password}`+`email:${this.email}`+`password:${this.password}`
    }
//     constructor(username, password, confirmPassword, address, dob, email){
//         this.username=username;
//         this.email =email;
//         this.password =password;
//         this.confirmpassword= confirmPassword;
//         this.dob = dob;
//         this.address= address;
//     }
   }
// const user1 = new User();
// const user2 = new User();

user1.signup("admin", "admin@gmail.com", "year1c", "year1c", "12/01/2000","Nyabihu");
user1.signup("user", "user@gmail.com", "year1d", "year1d", "12/07/2000","Musanze");
console.log(user1.tostring());

