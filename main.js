$(document).ready(function(){
  //const signUpButton = $('#signUp');
// const signInButton = $('#signIn');
// let signup = $('#signup');
// let signin = $('#signin');
 const container = document.getElementById('container');
//signin and signup part
$('#signUp').click(function(){
	
	container.classList.add('right-panel-active')
	
});

$('#signup').click( function(){

  var email= $("#email").val();
  var password=$("#password").val();
  var re_password= $('#conpass').val();
  var name = $("#name").val();
  var phoneno = $("#number").val();
  var role = $("#role1").val();
  var letters = /^[A-Za-z]+$/;
  var phonenum = /^\d{10}$/;
  var pass=  /^[A-Za-z]\w{5,14}$/;
  
 if(name!="" && name.match(letters))    
 {
   if(email!="")
    {
      if(phoneno.match(phonenum))
       { 
         if(password.length!=0 && re_password.length!=0 && password==re_password && password.match(pass))
          { 
          
            if(role=="admin")
            {
                let isAdmin="true";
              
                 let admin_data=localStorage.getItem("admin_table");
                 if(admin_data==null)
                 {
	                 task=[];
                  }
                 else{
	                   task=JSON.parse(admin_data);
                     }
                 task.push({'IsAdmin':isAdmin,'Name':name,'email':email,'password':password,'phone number':phoneno,'role':role});
                 localStorage.setItem("admin_table",JSON.stringify(task));
                 alert('sucessfully registered as admin');
                 
             }
             else 

               if(role=="user")
                 {
                  let isAdmin="false";
              
                  let admin_data=localStorage.getItem("admin_table");
                  if(admin_data==null)
                  {
                    task=[];
                   }
                  else{
                      task=JSON.parse(admin_data);
                      }
                  task.push({'IsAdmin':isAdmin,'Name':name,'email':email,'password':password,'phone number':phoneno,'role':role});
                  localStorage.setItem("admin_table",JSON.stringify(task));
                  alert('sucessfully registered as user');
                }    

        }
          else{ alert("invalid password");}
      }
       else{ alert("invalid phone number");}
    }
     else{alert("invalid email");}
  }
    else{alert("invalid name");}
});


$('#signIn').click( function(){
	container.classList.remove("right-panel-active");
});

$('#signin').click(function(){
  
  //event.preventDefault();
	let emailadd = $('#emailadd').val();
  let pass =$('#pass').val();
  //let role=document.getElementById('role2').value;
  
     let data=JSON.parse(localStorage.getItem("admin_table"));
    var i=0;
    var len=(data.length)-1;
      for( i=0;i<data.length;i++)
       {
        var item=data[i];
        var x=item.email;
        var y=item.password;
        var z=item.IsAdmin;
        
         if(x === emailadd && y === pass)
         {
          if(z=="true")
          {
           alert('welcome admin!!');
           
           let session_data=localStorage.getItem("session_table");
           if(session_data==null)
           {
             task1=[];
            }
           else{
               task1=JSON.parse(session_data);
               }
           task1.push({'email':emailadd});
           localStorage.setItem("session_table",JSON.stringify(task1));
           alert('LOGGED IN SUCCESSFULLY');
           
           $('#emailadd').val(" ");
           $('#pass').val(" ");
           window.location.replace("admin.html");
           break;
         }
         else {
           alert("welcome user!!!");
           $('#emailadd').val(" ");
           $('#pass').val(" ");
           break;
          }
        }

        if(i==len && x !== emailadd && y !== pass)
           { 
             alert('invalid username and password');
            location.reload();
           }
        
      }
      
});

});
