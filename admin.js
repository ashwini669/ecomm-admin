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
    // var home=$('#if')
    // console.log(home)

    // var list=$('#if3')
    // console.log(list)

    // var view=$('#if4')
    // console.log(view)

    // if(home.id==="if"){
        
        $('#if').show(); 
        $('#if3').hide();
        $('#if4').hide();

    //} 

})

$('#box2').click(function(){
    // var home1=$('#if')
    // console.log(home1)

    // var list1=$('#if3')
    // console.log(list1)

    // var view1=$('#if4')
    // console.log(view1)

    // if(list1.id==="if3"){
        
        $('#if3').show();
        $('#if').hide();
        $('#if4').hide();
    //} 

})

$('#box3').click(function(){
    // var home2=$('#if')
    // console.log(home2)

    // var list2=$('#if3')
    // console.log(list2)

    // var view2=$('#if4')
    // console.log(view2)

    // if(view2.id==="if4"){

        $('#if4').show();
        $('#if3').hide();
        $('#if').hide();
    //}  

})

})