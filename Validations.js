//var d = new Date();
//var dstring=d.toDateString()
//document.getElementById("dateid").innerHTML = dstring;
function validate()
{
    var fname=document.forms["myForm"]["FirstName"].value
    var lname=document.forms["myForm"]["LastName"].value
    var emailinput=document.forms["myForm"]["Email"].value
    var dob=document.forms["myForm"]["birthdate"].value
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    //var dobstring=dob.toDateString()
    if(fname=="")
    {
        document.getElementById("fid").innerHTML="First Name is Required"
    }
    if((!isNaN(fname))&& (!fname==""))
    {
        document.getElementById("fid").innerHTML="Numbers are not allowed"
    }
   
    if(lname=="")
    {
       document.getElementById("lid").innerHTML="Last Name is Required"
    }
    if((!isNaN(lname))&&(!lname==""))
    {
        document.getElementById("lid").innerHTML="Numbers are not allowed"
    }
    if(dob=="")
    {
        document.getElementById("d-id").innerHTML="Date of Birth is Mandatory"
    }
    /*if(dobstring>dstring)
    {
        console.log("The current date : "+d)
        document.getElementById("derrid").innerHTML="DOB should be past the current date"
    }*/
    if((!fname=="")&&(isNaN(fname))&&(!lname=="")&&(isNaN(lname))&&(!dob=="")&&(!emailinput==""))
    {
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)
        cell1.innerHTML=fname
        cell2.innerHTML=lname
        cell3.innerHTML=emailinput
        cell4.innerHTML=dob

    }
    document.getElementById("form-id").reset()
    
    
}
