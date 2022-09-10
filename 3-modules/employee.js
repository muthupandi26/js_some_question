let employee = {
    fname : "muthu",
    lname : "pandi",

    fullName : function(){
        // return `first name ${this.fname} and last name ${this.lname}`;
        return "Full Name " + this.fname + this.lname ;
    },
    age : 20,
    company : "tft"
}




const age = 20;
const company = "tft";

export {age,company,employee};