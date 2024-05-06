
function clock() {
    var hours=document.getElementById('hour');
    var min=document.getElementById('min');
    var sec=document.getElementById('sec');
    var ampm=document.getElementById('pmam');



    var h=new Date().getHours();
    var m=new Date().getMinutes();
    var s=new Date().getSeconds();

         
    if (h>=12) {
        ampm.innerHTML="Pm"
    }
    else
    {
        ampm.innerHTML="Am" 
    }
    if (h >12) {
        h=h-12;
    }
    if (s < 10  ) {
            s="0"+s
        
        }
        else{
            s=s;
        }
        if (m<10 ) {
            m="0"+m
        
        }
        else(
            mL=m
        ) 
        if (h<10 ) {
          h="0"+h
        
        }
        else(
           h=h
        ) 
        hours.innerHTML=h;
        min.innerHTML=m;

        sec.innerHTML=s
     



}
setInterval (clock,1000)

