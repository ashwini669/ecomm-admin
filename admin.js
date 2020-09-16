//const logout=document.querySelector('#log');
$(document).ready(function(){

url=document.URL;
console.log(url);
if(url==="http://127.0.0.1:5500/admin.html"){
  if(localStorage.getItem('session_table')!==null){
    //alert('no');
    //window.location='/app.html';
  }
  else{
    window.location.replace("main.html");
      }
}

$('#log').click(

function sessionlogout(e){
    
    if(confirm("Are you sure to log out??"))
    { alert("logged out successfully");
    localStorage.removeItem('session_table');
    //window.location='/main.html';
    window.location.href="./main.html";
    }
});

$('#box1').click(function(){
            
        $('#if').show(); 
        $('#if3').hide();
        $('#if4').hide();

    })

$('#box2').click(function(){
    
        $('#if3').show();
        $('#if').hide();
        $('#if4').hide();
  
})

$('#box3').click(function(){
    
        $('#if4').show();
        $('#if3').hide();
        $('#if').hide();
     
})

})