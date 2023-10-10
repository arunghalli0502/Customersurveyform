let fname= document.getElementById("fname");
let lname= document.getElementById("lname");
let firsttime= document.getElementsByName("firsttime");
let suggested = document.getElementsByName("suggested");
let rating= document.getElementsByName("rating");
let suggestion = document.getElementById("suggestions");
let errormessage = document.getElementById("errormessage");
let datadisppopup = document.querySelectorAll(".datadisppopup");
let datadisppopup1 = document.getElementById("datadisppopup");
const regex = /^[a-zA-Z-'\s]+$/;
function submitsurveydata() 
{
    event.preventDefault();
    console.log("submitsurveydata started");
    
    // lname= lname.value;   
    // suggestions= suggestions.value;
    // validationform(fname);
    // validationform(lname);
    // validateoptions(suggested);
    // validateoptions(firsttime);  
    // validateoptions(rating);
    console.log(datadisppopup[0].children);
    if( validationform(fname)  && validationform(lname)  && validateoptions(firsttime) && validateoptions(suggested) && validateoptions(rating)  && validationform(suggestion) )
    {
        alert("Your response saved successfully")
        datadisppopup[0].children[2].innerText="First Name : "+fname;
        datadisppopup[0].children[3].innerText="Last Name : "+lname;
        datadisppopup[0].children[4].innerText="Is this the first time your are using our product and service? : "+firsttime;
        datadisppopup[0].children[5].innerText="Would you suggestion to your friend and colleague? : "+suggested;
        datadisppopup[0].children[6].innerText="How satisfied are you with our comapny overall? : "+rating;
        datadisppopup[0].children[7].innerText="Do you have any suggestion to improve our company? : "+suggestion;
        datadisppopup1.style.display="block";
        return true;
    }
    else
    {
        return false;
    }
    // if(validateoptions(suggested))
    // {
    //     suggested= suggested[i].value;
    // }
    // else
    // {

    // }

    // for(i=0; i<firsttime.length; i++)
    // {
    //     if(firsttime[i].checked)
    //     {
    //         firsttime= firsttime[i].value;
    //         console.log(firsttime);
    //     }
    //     else{
    //         alert("Please select option firsttime")
    //     }
    // }
    // for(i=0; i<suggested.length; i++)
    // {
    //     if(suggested[i].checked)
    //     {
    //         suggested= suggested[i].value;
    //         console.log(suggested);
    //     }
    //     else{
    //         alert("Please select option suggested ")
    //     }
    // }
    // for(i=0; i<rating.length; i++)
    // {
    //     if(rating[i].checked)
    //     {
    //         rating= rating[i].value;
    //         console.log(rating);
    //     }
    //     else{
    //         alert("Please select option rating ")
    //     }
    // }



    // console.log(fname);
    // console.log(suggestions);
    // console.log(lname);
}


function validationform(inputfieldvalues)
{
    if ( inputfieldvalues.value !== '' && inputfieldvalues.value.match(regex) ) 
    {
        
        // console.log(fname);
        if(inputfieldvalues.id == "fname")
        {
            fname= inputfieldvalues.value;
        }
        else if(inputfieldvalues.id == "lname")
        {
            lname= inputfieldvalues.value;
        }
        else
        {
            suggestion= inputfieldvalues.value;
        }
        return true;
    }
    else
    {
        errormessage.style.display="block";
        if(inputfieldvalues.id == "fname")
       {
            errormessage.innerText= "Please enter a valid first name.";
       }
       else if(inputfieldvalues.id == "lname")
       {
            errormessage.innerText= "Please enter a valid last name."
       }
       else
       {
            errormessage.innerText= "Kindly provide sugeestions to improve our self"
       }
       return false;
    }
}

function  validateoptions(k)
{
    let S = k.length;
    console.log(S);
    // let r= k.id;
    
    for (let i = 0; i < S; i++) {
        console.log('--------------for loop executing-------------');
        if (k[i].checked) {
          let r = k[i].id;
          console.log(r, typeof r);
          console.log('--------------selection checked-------------');
          console.log(k[i].value);
        //   switch (r) 
        //   {
        //     case firsttime:
        //       firsttime = k[i].value;
        //       console.log(firsttime);
        //       break;
        //     case suggested:
        //       suggested = k[i].value;
        //       console.log(suggested);
        //       break;
        //     default:
        //       rating = k[i].value;
        //       console.log(rating);
        //       break;
        //   }
          if(k[i].id === "firsttime")
          {
            console.log("matched found");
            firsttime = k[i].value;
            console.log(firsttime);
            return true;
          }
          else if(k[i].id === "suggested")
          {
            console.log("matched found");
            suggested = k[i].value;
            console.log(suggested);
            return true;
          }
          else
        //   if(k[i].id === "rating")
          {
            console.log("matched found");
            rating = k[i].value;
            console.log(rating);
            return true;
          }
        } 
        else 
        {
          errormessage.style.display = 'block';
          errormessage.innerText = 'Please select the option provided';
        }
        console.log('--------------for loop executing end-------------');
      }
      
}


function closepopup()
{
    let form = document.getElementById("surveyform");
    console.log("closepopup called");
    if (datadisppopup)
    {
        // Hide the datadisppopup element.
        datadisppopup1.style.display = 'none';
    }
    form.reset()
}