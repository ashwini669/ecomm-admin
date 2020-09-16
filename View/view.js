$(document).ready(function setTable(){
    // location.reload();
        let data1=[];
      data1=JSON.parse(localStorage.getItem("session_table"));
      var j=0;
      var x1=data1[j];
      var y1=x1.email;

      let data2=[];
      data2=JSON.parse(localStorage.getItem("pro_table"));
      
          for(var i=0 in data2)
          {
             var x2=data2[i];
             var y2=x2.admin_email;
              if(y1==y2)
              {
                $('#list').show();
                localStorage.removeItem('pid_table');
              
                var item=data2[i];
                //var pro_img = $('<img>');
                //var x=item.Image;
                //pro_img.attr({'src':item.Image,'width':50,'height':50});
                var newRow = "<tr>"
                  +"<td>"+item.Product_id+"</td>"
                  +"<td>"+item.Product_name+"</td>"
                  +"<td>"+item.Product_price+"</td>"
                  +"<td><img src="+item.Image+" width="+50+" height="+50+"></img></td>"
                +"</tr>";
                        
                  $(newRow).appendTo("#list tbody");
              }

          }
  
  })