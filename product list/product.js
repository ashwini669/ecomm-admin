
$(document).ready(function updateTable(){

  let data1=[];
  data1=JSON.parse(localStorage.getItem("session_table"));
  var j=0;
  var x1=data1[j];
  var y1=x1.email;

  let data2=[];
  data2=JSON.parse(localStorage.getItem("pro_table"));

    for(var i=0 in data2)
    {
      var item=data2[i];
      var y2=item.admin_email;
   
          if(y1==y2)
          {
            //location.reload();
          $('#list').show();
          var i=0;
          //var x=data.length;
          localStorage.removeItem('pid_table');
          
          // var table = $('tbody')[0];
          //  var numRows = $('#viewlist tr').length;
          // var pro_img = $('<img>');
          // pro_img.attr({'src':item.Image,'width':50,'height':50});
          var newRow = "<tr>"
              +"<td>"+item.Product_id+"</td>"
              +"<td>"+item.Product_name+"</td>"
              +"<td>"+item.Product_price+"</td>"
              +"<td><img src="+item.Image+" width="+50+" height="+50+"></img></td>"
              +"<td><button class='editRow'p-id="+item.Product_id+">Edit</button></td>"
              +"<td><button class='delRow' pro-id="+item.Product_id+">Delete</button></td>"
           +"</tr>";
                //$(".delRow").attr('pro-id',item.Product_id);
          
                $(newRow).appendTo("#list tbody");
        //   );
          }
     }

        $("#list").on('click', '.delRow', function () {
          if (confirm('Are you sure to delete this record ?'))
            {
              $(this).closest('tr').remove();
              onDelete($(this))
            }  
          });

          function onDelete(td) {

            var pid=$(td).attr("pro-id");
            delLocalStorage(pid);
          }

          function delLocalStorage(data) {
              
              let m=[];
              m=getInfo();

              m= m.filter(function(m,index) {
                return m.Product_id!==data
              });

                localStorage.setItem('pro_table',JSON.stringify(m));
                alert("item deleted");
          }

          function getInfo() {
              let data; 
              if(localStorage.getItem('pro_table')===null){
                data=[];
              } else{
                data= JSON.parse(localStorage.getItem('pro_table'));

              }
              return data;
          } 
      
          $("#list").on('click', '.editRow', function () {

            onEdit($(this));
          });

          function onEdit(td) {
              
                var pid=$(td).attr("p-id");
                row = td.parent().parent();
                var d= row.children();
                var pid=$('d[0]').html();
                var name=$('d[1]').html();
                var price=$('d[2]').html();
                var image=$('d[3]').html();
            //window.pid=td.getAttribute('p-id'); 
            let pid_data=localStorage.getItem("pid_table");
              if(pid_data==null)
              {
                task1=[];
                }
              else{
                  task1=JSON.parse(pid_data);
                  }
              task1.push({'pid':pid,'name':name,'price':price,'image':image});
              localStorage.setItem("pid_table",JSON.stringify(task1));

              document.getElementById('updatepro').style.display="";
              document.getElementById('disptab').style.display="none";
              updatePro();
           }

            function updatePro(){
              let p; 

              if(localStorage.getItem('pid_table')===null){
                  p=[];
              } else{
                  p= JSON.parse(localStorage.getItem('pid_table'));
              }
              var x=0;
              var pro=p[x];
              //let data; 
            
                    $("#productid").val(pro.pid);
                    $("#productname").val(pro.name); 
                    $("#productprice").val(pro.price);
                    $("#productimage").val(pro.image);
                    window.proid=pro.pid;
                    updateRecord();
            }

            function updateRecord() {
              if(confirm("Are you sure to update changes??"))
                {
                    let Data=[];
                    Data=getdata();
            
                    let m=[];
                    m=getInfo();
                    
                    for(var i=0 in m)
                    {
                      var item=m[i];
                      if(item.Product_id === proid)
                      {
                      item.Product_id=Data[0];
                      item.Product_name=Data[1];
                      item.Product_price=Data[2];
                      item.Image=Data[3];
                      break;
                      }
                    }
              
                    localStorage.setItem('pro_table',JSON.stringify(m));
                    alert("item updated");
                    formclear();
                    localStorage.removeItem('pid_table');
                    document.getElementById('updatepro').style.display="none";
                    //location.reload();
                }
                else{ 
                    formclear();
                    localStorage.removeItem('pid_table');
                  }
              }
  
              function getInfo() {
                  let data; 
                
                  if(localStorage.getItem('pro_table')===null)
                    {
                      data=[];
                    } 
                  else
                    {
                      data= JSON.parse(localStorage.getItem('pro_table'));
                    }
                  return data;
              }
              
              function getdata(){
                  var proName = $('#productname').val();
                  var proPrice = $('#productprice').val();
                  var proImg =$('#productimage').val();
                  var proId =$('#productid').val(); 
                  
                  var data=[proId,proName,proPrice,proImg];
                  return data;
              }
  
              function formclear(){
                  $('#productid').val(" ");
                  $('#productname').val(" ");
                  $('#productprice').val(" ");
                  $('#productimage').val(" ");
                  localStorage.removeItem('pid_table');
              
              }

  })