// Created by NemoNet aka The Young Programmer 🏅


setInterval(() => {
    d= new Date();
    ht= d.getHours();
    mt= d.getMinutes();
    st= d.getSeconds();
    hr= 30*ht + mt/2;
    mr= 6*mt;
    sr= 6*st;
    
    var hour = document.getElementById("hour");
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    
    hour.style.transform= `rotate(${hr}deg)`;
    min.style.transform= `rotate(${mr}deg)`;
    sec.style.transform= `rotate(${sr}deg)`;
    
    document.getElementById("h").innerHTML = ht; 
    document.getElementById("m").innerHTML = mt; 
    document.getElementById("s").innerHTML = st;

},1000);
