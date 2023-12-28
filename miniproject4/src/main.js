import React from "react";
import { ReactDOM } from "react";
import './main.css';



const Main = () => {
   

    function display() {
        const fname = document.getElementById("Name").value
        document.getElementById("firstname").innerHTML= "FIRST NAME = "+fname ;

        const mname = document.getElementById("Mname").value
        document.getElementById("middlename").innerHTML= "MIDDLE NAME = "+mname ;

        const lname = document.getElementById("Lname").value
        document.getElementById("lastname").innerHTML= "LAST NAME = " +lname ;


           
            if(document.getElementById('genmale').checked) { 
                document.getElementById("Gender").innerHTML 
                    ="GENDER = "+ document.getElementById("genmale").value; 
            } 
            else if(document.getElementById('genfemale').checked) { 
                document.getElementById("Gender").innerHTML 
                    ="GENDER = "+ document.getElementById("genfemale").value;   
            } 
            else if(document.getElementById('genother').checked) { 
                document.getElementById("Gender").innerHTML 
                    ="GENDER = " + document.getElementById("genother").value ;   
            } 
            
            else { 
                document.getElementById("error").innerHTML 
                    = "You have not selected any gender"; 
            } 
        

        const date = document.getElementById("dates").value
        document.getElementById("DOB").innerHTML= "DATE OF BIRTH = " +date ;

        const phone = document.getElementById("3").value
        document.getElementById("mobile").innerHTML= "MOBILE NO = " +phone ;

        const mail = document.getElementById("gmail").value
        document.getElementById("Mail").innerHTML= "MAIL ID = " +mail ;

        const LANG = document.getElementById("lang").value
        document.getElementById("Lang").innerHTML= "MAIL ID = " +LANG ;

        {
            let checkboxes = document.querySelectorAll('input[name="course"]:checked');
            let values = [];
            checkboxes.forEach((checkbox) => {
                values.push(checkbox.value);
            });
            document.getElementById("Qual").innerHTML= "QUALIFICATION = " +values ;
        }

        const FILE = document.getElementById("files").value
        document.getElementById("File").innerHTML= "YOUR UPLOADED FILES = " +FILE ;

        
            var DropDown = document.querySelector('#dropdown');
            var output = DropDown.value;
            document.querySelector('#Dropdown').textContent ="COURSE YOU SELECTED ="+ output;
        

        const QUERYS = document.getElementById("text").value
        document.getElementById("Text").innerHTML= "YOUR QUERY = " +QUERYS ;


        const USER = document.getElementById("user").value
        document.getElementById("User").innerHTML= "USER NAME = " +USER ;

        const PASS = document.getElementById("pass").value
        document.getElementById("Pass").innerHTML= "PASSWORD = " +PASS ;


        

    }

    return (
        <div className="form">

            <form action="" method="get">
                <table className="abc">

                    <tr>
                        <td><label for="">Name : </label></td>
                        <td><input type="text" maxlength="30" placeholder="Enter your name" id="Name" /></td>
                    </tr>
                    <tr>
                        <td><label for="">Middle Name : </label></td>
                        <td> <input type="text" maxlength="30" placeholder="Enter your middle name"  id="Mname"/></td>
                    </tr>
                    <tr>
                        <td><label for="1">Last Name : </label></td>
                        <td><input type="text" maxlength="30" id="Lname" /></td>
                    </tr>

                    <tr>
                        <td><label for="">Gender : </label></td>
                        <td ><input type="radio" name="gender" value="Male" id="genmale"/> Male

                            <input type="radio" name="gender" value="Female" id="genfemale" /> Female

                            <input type="radio" name="gender" value="Other" id="genother" /> Other</td>
                    </tr>

                    <tr>
                        <td><label for="">DOB : </label></td>
                        <td><input type="date" id="dates"/> </td>
                    </tr>


                    <tr>
                        <td><label for="3">Mobile No : </label></td>
                        <td><input type="number" id="3" /></td>
                    </tr>


                    <tr>
                        <td><label for="">Email : </label></td>
                        <td><input type="email" placeholder="@gmail.com" required id="gmail" /></td>
                    </tr>


                    <tr>
                        <td><label for=""> Languages : </label></td>
                        <td><input type="text" maxlength="30" placeholder="Tamil" value="Tamil" readonly id="lang"/></td>
                    </tr>


                    <tr>
                        <td><label for="">Qualification : </label></td>
                        <td><input type="checkbox" name="course" value="10th" /> 10 <sup>th</sup>
                            <input type="checkbox" name="course" value="12th" /> 12 <sup>th</sup>
                            <input type="checkbox" name="course" value="Bachelor degree" /> Bachelor degree
                            <input type="checkbox" name="course" value="Master degree" /> Master degree
                            <input type="checkbox" name="course" value="other" /> Other </td>
                    </tr>

                    <tr>
                        <td><label for="">Upload file : </label></td>
                        <td><input type="file" id= "files"/></td>
                    </tr>

                    <tr>
                        <td><label for="">Course You Want :</label></td>
                        <td> <select id="dropdown">
                            <option value="java">JAVA</option>
                            <option value="c">C</option>
                            <option value="Python">Python</option>
                            <option value="C++">C++</option>
                            <option value="Other"> Other </option>

                        </select>
                        </td>
                    </tr>

                    <tr>
                        <td><label for="">Any Query : </label></td>
                        <td><textarea cols="50" rows="2" id="text" >Welocme!!!</textarea></td>
                    </tr>

                    <tr>
                        <td><label for="">UserName : </label></td>
                        <td><input type="text" maxlength="30" placeholder="Create Your Own UserName" id="user"/></td>
                    </tr>


                    <tr>
                        <td><label for="">Password : </label></td>
                        <td><input type="password" name="" id="pass" /></td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center">
                            <div>
                                <input type="submit" onClick={display} value="Submit" /> <input type="reset" value="Reset" /> </div>
                        </td>
                    </tr>


                </table>
                 <image src="welcome.png"></image>
                <iframe src="" frameborder="10" height="415px" width="980px" name="main" className="frame"  title="This is a unique title"  />
            </form>

            <div className="co">   </div>
            
            <div className="ans">
               <div className="ans1">
              <span id="firstname"></span>
              {<br/>}
              <span id="middlename"></span>
              {<br/>}
              <span id="lastname"></span>
              {<br/>}
              <span id="Gender"></span>
              <span id="error"></span>
              {<br/>}
              <span id="DOB"></span>
              {<br/>}
              <span id="mobile"></span>
              {<br/>}
              <span id="Mail"></span>
              {<br/>}
              </div>
              <div className="ans2">
              <span id="Lang"></span>
              {<br/>}
              <span id="Qual"></span>
              {<br/>}
              <span id="File"></span>
              {<br/>}
              <span id="Dropdown"></span>
              {<br/>}
              <span id="Text"></span>
              {<br/>}
              <span id="User"></span>
              {<br/>}
              <span id="Pass"></span>
              {<br/>}
              </div>
             
             
            </div>
            

        </div>

    )



}
export default Main