//Task 1

let user1 = "Иваныч";
let age1 = 20;

function printUser(userName, userAge){
    return "Пользователь " + userName + ",возраст " + userAge;
}

console.log(printUser(user1, age1));

//Task 2

let user2 = "Иваныч";
let age2 = 20;
let gender = "male";

function printUserInfo(userName, userAge, userGender = null){
    if(userGender !== null){
        return "Пользователь " + userName + ",возраст " + userAge + ",пол " + (userGender == "male" ? "муж" : "жен");
    }else{
        return "Пользователь " + userName + ",возраст " + userAge;
    }
}

console.log(printUserInfo(user2, age2, gender));
console.log(printUserInfo(user2, age2));

//Task 3 

function userFullInfo(userFirstName, userLastName, userAge, userAddress, userPhoneNumber, userPhoneCode){
    return  {
        firstName: userFirstName,
        lastName: userLastName,
        age: userAge,
        address: userAddress,
        phone: {
            number: userPhoneNumber,
            code: userPhoneCode
        },
        fullName: userFirstName + " " + userLastName,
        printUserName(){
            console.log(this.fullName);
        },
        printUserAddress(){
            console.log(this.address);
        },
        printFullInfo(){
            console.log(this.fullName + this.age + this.address + this.phone.number + this.phone.code)
        }
    };
}

console.log(userFullInfo("userFirstName", "userLastName", "userAge", "userAddress", "userPhoneNumber", "userPhoneCode"));

//Task 4

function userBrowserInfo(userFirstName, userLastName, userAge){
    return {
        firstName: userFirstName,
        lastName: userLastName,
        age: userAge
    }
}

let fName;
let iName;
let age3;

fName = prompt("ваше имя?");
iName = prompt("ваша фамилия?");
age3 = prompt("ваш возраст?");

console.log(userBrowserInfo(fName, iName, age3));

//Task 5
let user5 = {
    firstName: "Sergei",
    lastName: "Rakhmanin",
    age: 21,
    address: "Voronesh",
    phone: {
        number: 89000000,
        code: 7
    }
};
let user6 = {
    phone: {
        number: 8999099,
        code: 8
    }
}
function userFullInfo2( user1, user2){
    return {
        firstName: user1.firstName,
        lastName: user1.lastName,
        age: user1.age,
        address: user1.address,
        phone: {
            number: user2.phone,
            code: user2.code
        } 
    }
}
console.log("Task5");
console.log(user5);
console.log(user6);
console.log(userFullInfo2(user5, user6));

//Task 6

let user7 = {
    firstName: "Sergei",
    lastName: "Rakhmanin",
    age: 21,
    address: "Voronesh",
    phone: {
        number: 89000000,
        code: 7
    }
};

let user8 = {
    firstName: "Sergei",
    lastName: "Rakhmanin",
    age: 21,
    address: "Voronesh",
    phone: {
        number: 89000000,
        code: 7
    }
};

let user9 = {
    firstName: "Sergei",
    lastName: "Rakhmanin",
    age: 21,
    address: "Voronesh",
    phone: {
        number: 89000000,
        code: 7
    }
};

function createChildren(father, mother, children){
    if(children != null){
        father.children = children;
        mother.children = children;
        return true;
    }else {
        return false;
    }
}

console.log(createChildren(user7, user8));
console.log(createChildren(user7, user8, user9));
console.log(user8);