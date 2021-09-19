function greet(){
  confirm("submit");
}

function random()
    {
    var a=document.getElementById("state").value;
    if(a=="Delhi")
    {
      var arr=["goa","asjns","sadasd"];

    }
    else{
      var arr=[];

    }
    var string;
    for(var i=0;i<arr.length;i++)
    {
      string=string+arr[i];

    }
    document.getElementById("district").innerHTML=string;
    }
