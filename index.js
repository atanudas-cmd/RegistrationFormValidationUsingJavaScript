//*********************************************FIRST NAME**************************************************
// **onblur ***
function fnameOn() {
    var fName = document.querySelector(".FName").value;
    var regExp = /^[a-zA-Z]+$/;
    // **if the pattern will not match 
    if (!regExp.test(fName)) {
        document.querySelector(".lable1").style.top = "20px";   //** the first name place holder will be in 20px position.
        document.querySelector(".lable1").style.color = "red";  //** the first name place holder will Red color.
        document.querySelector(".FName").style.border = "2px solid red"; //** border color 2px solid red
        document.querySelector(".FName").value = "";                  //** input value empty
        document.querySelector(".classname1").innerHTML = "Enter your first name";  //** error message 
        document.querySelector(".classname1").style.color = "red";     //**  error message color will red
        return false;
    }
    //**in else part if  the pattern will  match. then-
    else {
        document.querySelector(".lable1").style.top = "-0.1px";  //**top in -0.1px position
        document.querySelector(".lable1").style.color = "green";  // **color will br green
        document.querySelector(".lable1").style.backgroundColor = "white";  //** */ background color=white
        document.querySelector(".FName").style.border = "2px solid green"; //** */ border color solid green
        document.querySelector(".classname1").innerHTML = "";  //** */ not show error message, it will empty.
    }
}

// ** ONCLICK FUNCTION ***
function fname() {
    document.querySelector(".lable1").style.top = "-0.1px"; // **top position -0.1px;
}

// ** ONKEYUP FUNCTION ****
function fNameUp() {
    var fName = document.querySelector(".FName").value;

    var regExp = /^[a-zA-Z]+$/;

    if (!regExp.test(fName)) {
        document.querySelector(".classname1").innerHTML = "Only character no mixed digits";  // **if pattern will not match. it will show an error message.
        document.querySelector(".classname1").style.color = "red";  //**  with error message the color will be red
    }
    //**in else part if if the pattern will  match. then-
    else {
        document.querySelector(".classname1").innerHTML = "";  // **if pattern will  match. it will not show an error message.it will empty.
        document.querySelector(".lable1").style.top = "-0.1px"; // **top position will -0.1px
    }
}






// ********************Last Name ******************

// **onblur ***
function lnameOn() {
    var lName = document.querySelector(".LName").value;
    var regExp = /^[a-zA-Z]+$/;
    // **if the pattern will not match 
    if (!regExp.test(lName)) {
        document.querySelector(".lable2").style.top = "20px";   //** the first name place holder will be in 20px position.
        document.querySelector(".lable2").style.color = "red";  //** the first name place holder will Red color.
        document.querySelector(".LName").style.border = "2px solid red"; //** border color 2px solid red
        document.querySelector(".LName").value = "";                  //** input value empty
        document.querySelector(".classname2").innerHTML = "Enter your last name";  //** error message 
        document.querySelector(".classname2").style.color = "red";     //**  error message color will red
        return false;
    }
    //**in else part if  the pattern will  match. then-
    else {
        document.querySelector(".lable2").style.top = "-0.1px";  //**top in -0.1px position
        document.querySelector(".lable2").style.color = "green";  // **color will br green
        document.querySelector(".lable2").style.backgroundColor = "white";  //** */ background color=white
        document.querySelector(".LName").style.border = "2px solid green"; //** */ border color solid green
        document.querySelector(".classname2").innerHTML = "";  //** */ not show error message, it will empty.
    }
}

// ** ONCLICK FUNCTION ***
function lnameClick() {
    document.querySelector(".lable2").style.top = "-0.1px"; // **top position -0.1px;
}

// ** ONKEYUP FUNCTION ****
function lNameKeyUp() {
    var lName = document.querySelector(".LName").value;

    var regExp = /^[a-zA-Z]+$/;

    if (!regExp.test(lName)) {
        document.querySelector(".classname2").innerHTML = "Only character no mixed digits";  // **if pattern will not match. it will show an error message.
        document.querySelector(".classname2").style.color = "red";  //**  with error message the color will be red
    }
    //**in else part if if the pattern will  match. then-
    else {
        document.querySelector(".classname2").innerHTML = "";  // **if pattern will  match. it will not show an error message.it will empty.
        document.querySelector(".lable2").style.top = "-0.1px"; // **top position will -0.1px
    }
}





// ******************Email ********************************
// ******onblur function
function email1() {
    var EmailId = document.querySelector(".Email").value;
    var regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    // **if the pattern will not match 
    if(!regExp.test(EmailId)) {
        document.querySelector(".lable3").style.top = "20px";  //**the email place holder will be in 20px position.
        document.querySelector(".lable3").style.color = "red";    //**the email place holder will Red coor.
        document.querySelector(".Email").style.border = "2px solid red";    //** border color 2px solid red
        document.querySelector(".Email").value = "";             // **input value empty
        document.querySelector(".className3").innerHTML = "Please enter your email id";          // **error message 
        document.querySelector(".className3").style.color = "red";          // **error message color will red
        return false;
    }
    //**in else part if  the pattern will  match. then-
    else {
        document.querySelector(".lable3").style.top = "-0.1px";  // **top position -0.1px
        document.querySelector(".lable3").style.color = "green";       //** */ color will br green
        document.querySelector(".lable3").style.backgroundColor = "white";     // **background color=white
        document.querySelector(".Email").style.border = "2px solid green";      // **border color solid green
        document.querySelector(".className3").innerHTML = "";         // **not show error message, it will empty. 
    }
}
// onclick function
function email2() {
    document.querySelector(".lable3").style.top = "-0.1px";       // **top position -0.1px
}
//onkeyup function
function email3() {
    var EmailId = document.querySelector(".Email").value;
    var regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    //**if the parttern will not matched */
    if (!regExp.test(EmailId)) {
        document.querySelector(".className3").innerHTML = "Enter proper format only";         // **error message 
        document.querySelector(".className3").style.color = "red";          //**error message color will be in red */
    }
    //**in else part if  the pattern will  match. then-
    else {
        document.querySelector(".className3").innerHTML = "";     // **if pattern will  match. it will not show an error message.it will empty.
        document.querySelector(".lable3").style.top = "-0.1px";            // **top position -0.1px
    }
}


//********************Password****************************

// ***onblur function
function password1() {
    var Password_Id = document.querySelector(".Password").value;
    var regExp = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    //**if the pattern will not matched with users input */
    if (!regExp.test(Password_Id)) {
        document.querySelector(".lable4").style.top = "20px";   //** The password place holder will be in 20px position.*/
        document.querySelector(".lable4").style.color = "red";  //** color will be in red */
        document.querySelector(".Password").style.border = "2px solid red";  //** border color will solid red and 2px */
        document.querySelector(".Password").value = "";   //*** Input value will empty */
        document.querySelector(".className4").innerHTML = "Please enter your password.";  //** Showing an error message */
        document.querySelector(".className4").style.color = "red";  //* and the error messahe color will be red
        return false;
    }

    //** */ or if the password pather match with users input
    else {
        document.querySelector(".lable4").style.top = "-0.1px";  //** top will be -0.1px */
        document.querySelector(".lable4").style.color = "green";  //**color will be green */
        document.querySelector(".lable4").style.backgroundColor = "white";  //**password's Background color will be white */
        document.querySelector(".Password").style.border = "2px solid green";   // ** border color will green and solid
        document.querySelector(".className4").innerHTML = "";   //*** not showing an error message 
    }
}
// onclick function
function password2() {
    document.querySelector(".lable4").style.top = "-0.1px";  //** top will be -0.1px */
}
//onkeyup function
function password3() {
    // document.querySelector(".lable4").style.top = "-0.1px";    //** top will be -0.1px */
    var Password_Id = document.querySelector(".Password").value;
    var regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    //** if the pattern will not  matched */
    if (!regExp.test(Password_Id)) {
        document.querySelector(".className4").innerHTML = "Please enter min. 8 character";  //**Showing an error message  */
        document.querySelector(".className4").style.color = "red";       //** error message color will be red */
    }
    //** it he pattern will matched */
    else {
        document.querySelector(".className4").innerHTML = "";  //**not showing an error message */
        document.querySelector(".lable4").style.top = "-0.1px";   //**top will be in -0.1px position */
    }
}

//********************Confirm Password****************************

// onclick & onkeyup function function
function Cpassword2() {
    document.querySelector(".lable5").style.top = "-0.1px";
}


// onblur function
function Cpassword1() {
    var Password_Id = document.querySelector(".Password").value;
    var CPassword_Id = document.querySelector(".Cpassword").value;
    var regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


    //**if user's password and confirm password will not matched */
    if (Password_Id != CPassword_Id) {
        document.querySelector(".lable5").style.top = "20px";  //**confirm password placeholder will be in 20px position */
        document.querySelector(".lable5").style.color = "red";   //** */ AS passwrod and confirm password will not matched , placeholder will be in red
        document.querySelector(".Cpassword").style.border = "2px solid red";  // **border color will be in red color.
        document.querySelector(".Cpassword").value = "";     //**input will be empty */
        document.querySelector(".className5").innerHTML = "password not matched.";   //** show an error message "password not matched" */
        document.querySelector(".className5").style.color = "red";   //** error message color will be in red. */
        return false;
    }
    //**if user's password and confirm password will  matched */
    else {
        document.querySelector(".lable5").style.top = "-0.1px";   /// *** top position will -0.1px;
        document.querySelector(".lable5").style.color = "green";  //** placeholder color will be green
        document.querySelector(".lable5").style.backgroundColor = "white";   ///** placeholder background will be white */
        document.querySelector(".Cpassword").style.border = "2px solid green";  //**border color will be in solid green */
        document.querySelector(".className5").innerHTML = "";   //**not showing an error message */

    }
}



//******************Phone Number*********************************

// onblur function
function phoneNumber1() {
    var phone_Number = document.querySelector(".Phonenumber").value;
    var regExp = /^\d{10}$/;

    //**If phone number pattern will not matched */
    if (!regExp.test(phone_Number)) {
        document.querySelector(".lable6").style.top = "20px";  //**phone number placeholder will be in 20px position */ */
        document.querySelector(".lable6").style.color = "red";   //** phone number placeholder will be red */
        document.querySelector(".Phonenumber").style.border = "2px solid red";   //** border color will solid red */
        document.querySelector(".Phonenumber").value = "";   //**  When we put wrong value, input will be empty */ */
        document.querySelector(".className6").innerHTML = "Please enter your Phone number.";    //** error message */
        document.querySelector(".className6").style.color = "red";         //**Error message color will be red */
        return false;
    }
    //**If phone number pattern will  matched */
    else {
        document.querySelector(".lable6").style.top = "-0.1px";   //** phone number placeholder will be in -0.1px position */
        document.querySelector(".lable6").style.color = "green";       //**placeholder color will be green */
        document.querySelector(".lable6").style.backgroundColor = "white";      //*phone number placeholder's background color will be white
        document.querySelector(".Phonenumber").style.border = "2px solid green";   //**border color will solid green */
        document.querySelector(".className6").innerHTML = "";      //*not showing an error messsage
    }
}
// onclick function
function phoneNumber2() {
    document.querySelector(".lable6").style.top = "-0.1px";  //** phone number placeholder will be in -0.1px position */
}
//onkeyup function
function phoneNumber3() {
    var phone_Number = document.querySelector(".Phonenumber").value;
    var regExp = /^\d{10}$/;

    //**If phone number pattern will not matched */
    if (!regExp.test(phone_Number)) {
        document.querySelector(".className6").innerHTML = "It will take max. 10 digit number.";  //**if we put wrong value it will show an error message */
        document.querySelector(".className6").style.color = "red";      //**Error message color will be red */
    }
    //**If phone number pattern will  matched */
    else {
        document.querySelector(".className6").innerHTML = "";    //**not showign an error message */
        document.querySelector(".lable6").style.top = "-0.1px";   // ** phone number placeholder will be -0.1px position.
    }
}




                                        //******************Date*********************************
//** onblur 
function dateValOn() {
    // ***take input date value using the new Date() constructor to get  dates (either current date or a specific date).
    var inputDate = new Date(document.querySelector(".Date").value);
    // **EXTRACT INPUT DATE MONTH YEAR**
    var birthDateDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,   //***  (getMonth() + 1)  here 1 is added to the month value. This is because the month is 0 indexed. The value starts from 0. Example :::This means 7 will mean August instead of 8. */
        year: inputDate.getFullYear()
    }
    //** here i specify the particular date,month and year**
    var currentYear = 2023;
    var currentMonth = 1;
    var currentDate = 1;

    // ** check date of birth valid or not**
    //**  if the input year is grater than current year
    if (birthDateDetails.year > currentYear ||
        //** OR input month is grater than current month & input year is equal to  the current year  **//
        (birthDateDetails.month > currentMonth && birthDateDetails.year == currentYear) ||
        // **  OR input date is grater than current date & input month is equal to  the current month & input year is equal to  the current year
        (birthDateDetails.date > currentDate && birthDateDetails.month == currentMonth && birthDateDetails.year == currentYear)) {


        //**  If input date is greater than to the current date::Error message will show  "You have entered Invalid date of birth"
        document.querySelector(".className7").innerHTML = `You have entered Invalid date of birth`;
        document.querySelector(".lable7").style.top = "20px";    //** top will be 20px */
        document.querySelector(".Date").value = "";   //** input value will be empty */
    }

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];   //** 0-11(indexing) */

    // **check leap year or not.
    //** if the currentYear is divisible by 4 and 400 then it is leap year, but if it will divisible by 100 it will not leap year */
    if (currentYear % 4 == 0 || (currentYear % 100 != 0 && currentYear % 400 == 0)) {
        month[1] = 29;   //**if the year is leap year the februray month will 29 days. */
    }
    else {
        month[1] = 28;  //**if the year is not leap year the februray month will 28 days. */
    }

    // **date calculation
    // ** In the case,Suppose if we  take an example if currentDate  is 01-04-2023 and  birthDateDetails.date is 02-06-2000. 
    // ** In this case birthDateDetails.date is smaller than currentDate in this case currentDate will add  30/31 day from the month and it will add with day(day). 
    // ** And the month will less means currentMonth=currentMonth-1;

    if (birthDateDetails.date > currentDate) {
        // ** input date is grater than current date    // ***current date become current date  + current month days.
        currentDate = currentDate + month[currentMonth - 1];
        currentMonth--; //**current month became (month-1)
    }
    // **month calculation
    // **in the case of currentMonth, Suppose take an example if DOB is 02-06-200 and current date 17-03-2023. 
    //  **In this case birthDateDetails.month is grater than currentMonth(17-03-2023>02-06-2000) in this case month will borrow 12 month from the year and 
    //  **it will add with month(currentMonth=currentMonth+12). As the month borrow the 12 month from the year 
    //  **that's why year will be decrease by 1(currentYear=currentYear-1).

    if (birthDateDetails.month > currentMonth) {
        //**  if input month is grater than current month  // **current month become current month + 12 //(+12  ===add one year)
        currentMonth = currentMonth + 12;
        currentYear--; //**current year became (currentYear-1)
    }
    // **date, month, year calculation
    var birthDate = currentDate - birthDateDetails.date;  //current date means 01
    var birthMonth = currentMonth - birthDateDetails.month;  // current month means jan
    var birthYear = currentYear - birthDateDetails.year;  // current year means 2023

    //**When the age is 18 years old then the month and date difference will be zero. */
    if (birthYear == 18 && birthMonth == 0 && birthDate == 0) {
        // **here use template literals
        document.querySelector(".className7").innerHTML = `You are Eligible, and your age is ${birthYear} Year ${birthMonth} Month ${birthDate} Days`;   //**Age in message */
        document.querySelector(".className7").style.color = "green";   //** message color will be green*/
        document.querySelector(".Date").style.border = "2px solid green";    //**border will be  solid green */
        document.querySelector(".lable7").style.color = "green";   //*date placeholder color will be green
        document.querySelector(".lable7").style.backgroundColor = "white";   //**date placeholder's background color will be white */
        document.querySelector(".lable7").style.top = "-0.1px";  //**top position is -0.1px */
    }
    // **When the age is 18 years old then the month and date difference will be zero.
    else if (birthYear == 30 && birthMonth == 0 && birthDate == 0) {
        // here use template literals
        document.querySelector(".className7").innerHTML = `You are Eligible, and your age is ${birthYear} Year ${birthMonth} Month ${birthDate} Days`;    //**Age in message */
        document.querySelector(".className7").style.color = "green";   //** message color will be green*/
        document.querySelector(".Date").style.border = "2px solid green";    //**border will be  solid green */
        document.querySelector(".lable7").style.color = "green";          //*date placeholder color will be green
        document.querySelector(".lable7").style.backgroundColor = "white";           //**date placeholder's background color will be white */
        document.querySelector(".lable7").style.top = "-0.1px";       //**top position is -0.1px */
    }
    // **When the Age is between 18 and 30
    else if (birthYear > 18 && birthYear < 30) {
        // here use template literals
        document.querySelector(".className7").innerHTML = `You are Eligible, and your age is ${birthYear} Year ${birthMonth} Month ${birthDate} Days`;    //**Age in message */  
        document.querySelector(".className7").style.color = "green";        //** message color will be green*/
        document.querySelector(".Date").style.border = "2px solid green";             //**border will be  solid green */
        document.querySelector(".lable7").style.color = "green";               //*date placeholder color will be green
        document.querySelector(".lable7").style.backgroundColor = "white";             //**date placeholder's background color will be white */
        document.querySelector(".lable7").style.top = "-0.1px";                 //**top position is -0.1px */
    }
    // if the value is null 
    else if (document.querySelector(".Date").value == "") {
        document.querySelector(".className7").innerHTML = "Please enter your date of birth";    //***error message */
        document.querySelector(".className7").style.color = "red";          //**error message color will, be red */
        document.querySelector(".Date").style.border = "2px solid red";        //**border color will be solid red */
        document.querySelector(".lable7").style.color = "red";           // **place holder's color will be red
        document.querySelector(".lable7").style.top = "19px";              //**top will be 19px position */
        document.querySelector(".lable7").style.backgroundColor = "white";        //**lable's background color will be white */
        document.querySelector(".Date").type = "text";          //*type=text */
    }

    //**When user's age is not matched any conditions */
    else {
        document.querySelector(".className7").innerHTML = "Your age is not match our criteria";   //**Error message */
        document.querySelector(".className7").style.color = "red";   //*Error message color will be red
        document.querySelector(".Date").style.border = "2px solid red";           //**border color will be solid red */
        document.querySelector(".Date").value = "";         //**empty input field */
        document.querySelector(".lable7").style.color = "red";       //**placeholder's color red */
        document.querySelector(".lable7").style.top = "19px";          //**placeholder in 19px position */
        document.querySelector(".lable7").style.backgroundColor = "white";        //**background=white */
        document.querySelector(".Date").type = "text";          //*type=text
    }
}

// **************date of birth onclick & OnkeyUp ***************
function dateOn1() {
    document.querySelector(".lable7").style.top = "-0.1px";
    document.querySelector(".Date").type = "date";
    document.querySelector(".className7").innerHTML = "Age should be between 18 years to 30 years of age (as of 1 Jan , 2023).";
    document.querySelector(".className7").style.color = "red";

}


//*****************************************************GENDER*******************************************************//

// onblur 
function genderOnBlur() {

    var genderSelect = document.querySelector(".gender").value;

    //**if the input field is grater than zero.
    if (genderSelect.length > 0) {
        document.querySelector(".lable8").style.top = "-0.1px";  //**top position -0.1px
        document.querySelector(".lable8").style.color = "green";   //  **color will br green
        document.querySelector(".lable8").style.backgroundColor = "white";  //**background color will be white */
        document.querySelector(".gender").style.border = "2px solid green";  //**border color will be solid green */
        document.querySelector(".className8").innerHTML = "";  // *** not showing an error message
    }

    //** if the input field is null */
    if (genderSelect == "") {
        document.querySelector(".gender").style.border = "2px solid red";  //***border color will solid red */
        document.querySelector(".lable8").style.top = "20px";   // **the gender place holder will be in 20px position.
        document.querySelector(".lable8").style.color = "red";   // **color will be red
        document.querySelector(".className8").innerHTML = "Please select one";  // ** show an error message(This is an error message)
        document.querySelector(".className8").style.color = "red";    //** color will be red */
        return false;
    }
}
// BOTH ARE doing SAME  WORK  here
// **********GENDER ONKEYUP & ONCLICK FUNCTION****************//
function genderSelect() {
    document.querySelector(".lable8").style.top = "-0.1px";
}



//************************************************BUTTON************************************************//

var form = document.querySelector(".myForm");
//*****The submit event fires when the user clicks a submit button or presses
//addEventListener("submit", (event) => {});
//onsubmit = (event) => {};
form.addEventListener("submit", (ev) => {
    ev.preventDefault();              //**The preventDefault() method of an event is used to stop a cancelable event from executing. */
    //Several events can be fired when we access a website. These events could be a button click, filling out a form and submitting it, 
    //closing a tab, clicking a checkbox, or scrolling a page. All of these are events.



    //**first take all the input */
    var first_Name = document.querySelector(".FName").value;
    var last_Name = document.querySelector(".LName").value;
    var email = document.querySelector(".Email").value;
    var password = document.querySelector(".Password").value;
    var Confirm_password = document.querySelector(".Cpassword").value;
    var phoneNumber = document.querySelector(".Phonenumber").value;
    var gender = document.querySelector(".gender").value;
    var DOB = document.querySelector(".Date").value;


    //This is  sweet alert and it will display a message in display
    swal("Welcome! " + first_Name + " " + last_Name, "Registration successful", "success");

    //**Display all the users input in console. (using template literals)*/
    console.log(`Your have entered :-
         First Name:- ${first_Name}
         Last Name:-${last_Name}\n
         Email:-${email}\n
         Password:-${password}\n
         Confirm_Password:-${Confirm_password}\n
         PhoneNumber:-${phoneNumber}\n 
         Gender:-${gender}\n
         Date Of Birth:- ${DOB}`);
})


