var firebaseConfig = {apiKey: "AIzaSyDWhdyEd4DEt2-HBuSVO8tKGkVaKh99B2Q",authDomain: "swizzcodes-samee.firebaseapp.com",
databaseURL: "https://swizzcodes-samee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId: "swizzcodes-samee",
storageBucket: "swizzcodes-samee.appspot.com",messagingSenderId: "632373340703",appId: "1:632373340703:web:fca362ff619a41bc7dc32a",measurementId: "G-2BNYYMZ5HM"
};firebase.initializeApp(firebaseConfig);




var btn = document.getElementById("m");
var menu = document.getElementById("o");
var c = document.getElementById("c");


document.body.style.width="1024px";
function load(){
	 menu.style.display="block";
    menu.style.animation="left 300ms";
    btn.style.display="none";
    c.style.display="block";
}

function op(){
    btn.style.display="block";
    c.style.display="none";
    menu.style.animation="right 300ms";
    setTimeout(()=>{
    	menu.style.display="none";
    },280);
}
function logo(){
	window.location.href="HTML/account.html";
}

var loc=firebase.database().ref("Accounts/user-accounts/");

function sign(){
    loc.push().set({
         'fullname':document.getElementById("i1").value,
         'email':document.getElementById("i2").value,
         'mobile':document.getElementById("i3").value,
         'address':document.getElementById("i4").value,
         'school':document.getElementById("i5").value,
         'grade':document.getElementById("i6").value,
         "psd":document.getElementById("i7").value,
         "course":"none",
         "points":0,
         "payment":"no",
         "entrytime":new Date().getTime()

    })
}

function search(){
    loc.on("value",function(snapshot){
        var data = snapshot.val();
        var keys = Object.keys(data);

        for(var i=0;i<keys.length;i++){
            var k = keys[i];
            var email = data[k].email;
            var psd=data[k].psd;
            var course=data[k].course;
            if(document.getElementById("e").value==email&&document.getElementById("p").value==psd&&course=="python"){
                 localStorage.setItem("mainkey",k);
                 alert("Successfully logged in to your account, Happy learning!");
                 window.location.href="board.html";
            }
            if(document.getElementById("e").value==email&&document.getElementById("p").value==psd&&course!="python"){
                alert("Unable to log in, you've not been alotted seat for any courses!");
            }

          }
    })
    
}

function j1(){
    document.getElementById('grp2').style.display="block";
    document.getElementById('grp1').style.display="none";
}

function j2(){
    document.getElementById('grp2').style.display="none";
    document.getElementById('grp1').style.display="block";
}

function res(){


    firebase.database().ref("Accounts/user-accounts/"+localStorage.getItem("mainkey")+"/courses/").on("value",function(snapshot){
       var picu=0;
       var chi = snapshot.val();
       var s11=chi.s11;
       var s12=chi.s12;
       var s13=chi.s13;
       var s21=chi.s21;
       var s22=chi.s22;
       var s31=chi.s31;
       var s32=chi.s32;
       var s41=chi.s41;
       var s42=chi.s42;
       var s43=chi.s43;
       var s51=chi.s51;
       var s52=chi.s52;
       var s53=chi.s53;
       var s61=chi.s61;
       var s62=chi.s62;
       var s63=chi.s63;
       var s71=chi.s71;
       var s72=chi.s72;
       var s73=chi.s73;
       var s74=chi.s74;
       var s75=chi.s75;
       var s76=chi.s76;
       var s81=chi.s81;
       var s82=chi.s82;
       var s83=chi.s83;
       var s91=chi.s91;
       var s92=chi.s92;
       var s93=chi.s93;
       var s101=chi.s101;
       var s102=chi.s102;
       var s103=chi.s103;
       var s111=chi.s111;
       var s112=chi.s112;
       var s113=chi.s113;
       var s121=chi.s121;
       var s122=chi.s122;
       var s123=chi.s123;

       if(s11=="yes"){
        picu++;
       
       }
       if(s12=="yes"){
        picu++;
       }
       if(s13=="yes"){
       picu++;
       }
       if(s21=="yes"){
       picu++;
       }
       if(s22=="yes"){
       picu++;
       }
       if(s31=="yes"){
        picu++;
       }
       if(s32=="yes"){
        picu++;
       }
       if(s41=="yes"){
        picu++;
       }
       if(s42=="yes"){
        picu++;
       }
       if(s43=="yes"){
        picu++;
       }
       if(s51=="yes"){
        picu++;
       }
       if(s52=="yes"){
        picu++;
       }
       if(s53=="yes"){
        picu++;
       }
       if(s61=="yes"){
        picu++;
       }
       if(s62=="yes"){
        picu++;
       }
       if(s63=="yes"){
        picu++;
       }
       if(s71=="yes"){
        picu++;
       }
       if(s72=="yes"){
        picu++;
       }
       if(s73=="yes"){
        picu++;
       }
       if(s74=="yes"){
        picu++;
       }
       if(s75=="yes"){
        picu++;
       }
       if(s76=="yes"){
        picu++;
       }
       if(s81=="yes"){
        picu++;
       }
       if(s82=="yes"){
        picu++;
       }
       if(s83=="yes"){
        picu++;
       }
       if(s91=="yes"){
       picu++;
       }
       if(s92=="yes"){
        picu++;
       }
       if(s93=="yes"){
        picu++;
       }
       if(s101=="yes"){
        picu++;
       }
       if(s102=="yes"){
        picu++;
       }
       if(s103=="yes"){
       picu++;
       }
       if(s111=="yes"){
        picu++;
       }
       if(s112=="yes"){
        picu++;
       }
       if(s113=="yes"){
        picu++;
       }
       if(s121=="yes"){
        picu++;
       }
       if(s122=="yes"){
        picu++;
       }
       if(s123=="yes"){
        picu++;
       } 

       const percent=Math.ceil(picu/37*100);
       document.getElementById("per").innerHTML=percent+"%";

       
    })
       
}

function dasho(){
    window.location.href="board.html";
}

function over(){
    window.location.href="overview.html";
}

function checker(){
    firebase.database().ref("Accounts/user-accounts/"+localStorage.getItem("mainkey")+"/courses/").once('value',function(snapshot){
         var chi = snapshot.val();
       var s11=chi.s11;
       var s12=chi.s12;
       var s13=chi.s13;
       var s21=chi.s21;
       var s22=chi.s22;
       var s31=chi.s31;
       var s32=chi.s32;
       var s41=chi.s41;
       var s42=chi.s42;
       var s43=chi.s43;
       var s51=chi.s51;
       var s52=chi.s52;
       var s53=chi.s53;
       var s61=chi.s61;
       var s62=chi.s62;
       var s63=chi.s63;
       var s71=chi.s71;
       var s72=chi.s72;
       var s73=chi.s73;
       var s74=chi.s74;
       var s75=chi.s75;
       var s76=chi.s76;
       var s81=chi.s81;
       var s82=chi.s82;
       var s83=chi.s83;
       var s91=chi.s91;
       var s92=chi.s92;
       var s93=chi.s93;
       var s101=chi.s101;
       var s102=chi.s102;
       var s103=chi.s103;
       var s111=chi.s111;
       var s112=chi.s112;
       var s113=chi.s113;
       var s121=chi.s121;
       var s122=chi.s122;
       var s123=chi.s123;

       if(s11=="yes"){
        document.getElementById("s11").style.backgroundColor="green";

       }
       if(s12=="yes"){
        document.getElementById("s12").style.backgroundColor="green";
       }
       if(s13=="yes"){
        document.getElementById("s13").style.backgroundColor="green";
       }
       if(s21=="yes"){
        document.getElementById("s21").style.backgroundColor="green";
       }
       if(s22=="yes"){
        document.getElementById("s22").style.backgroundColor="green";
       }
       if(s31=="yes"){
        document.getElementById("s31").style.backgroundColor="green";
       }
       if(s32=="yes"){
        document.getElementById("s32").style.backgroundColor="green";
       }
       if(s41=="yes"){
        document.getElementById("s41").style.backgroundColor="green";
       }
       if(s42=="yes"){
        document.getElementById("s42").style.backgroundColor="green";
       }
       if(s43=="yes"){
        document.getElementById("s43").style.backgroundColor="green";
       }
       if(s51=="yes"){
        document.getElementById("s51").style.backgroundColor="green";
       }
       if(s52=="yes"){
        document.getElementById("s52").style.backgroundColor="green";
       }
       if(s53=="yes"){
        document.getElementById("s53").style.backgroundColor="green";
       }
       if(s61=="yes"){
        document.getElementById("s61").style.backgroundColor="green";
       }
       if(s62=="yes"){
        document.getElementById("s62").style.backgroundColor="green";
       }
       if(s63=="yes"){
        document.getElementById("s63").style.backgroundColor="green";
       }
       if(s71=="yes"){
        document.getElementById("s71").style.backgroundColor="green";
       }
       if(s72=="yes"){
        document.getElementById("s72").style.backgroundColor="green";
       }
       if(s73=="yes"){
        document.getElementById("s73").style.backgroundColor="green";
       }
       if(s74=="yes"){
        document.getElementById("s74").style.backgroundColor="green";
       }
       if(s75=="yes"){
        document.getElementById("s75").style.backgroundColor="green";
       }
       if(s76=="yes"){
        document.getElementById("s76").style.backgroundColor="green";
       }
       if(s81=="yes"){
        document.getElementById("s81").style.backgroundColor="green";
       }
       if(s82=="yes"){
        document.getElementById("s82").style.backgroundColor="green";
       }
       if(s83=="yes"){
        document.getElementById("s83").style.backgroundColor="green";
       }
       if(s91=="yes"){
        document.getElementById("s91").style.backgroundColor="green";
       }
       if(s92=="yes"){
        document.getElementById("s92").style.backgroundColor="green";
       }
       if(s93=="yes"){
        document.getElementById("s93").style.backgroundColor="green";;
       }
       if(s101=="yes"){
        document.getElementById("s101").style.backgroundColor="green";
       }
       if(s102=="yes"){
        document.getElementById("s102").style.backgroundColor="green";
       }
       if(s103=="yes"){
        document.getElementById("s103").style.backgroundColor="green";
       }
       if(s111=="yes"){
        document.getElementById("s111").style.backgroundColor="green";
       }
       if(s112=="yes"){
        document.getElementById("s112").style.backgroundColor="green";;
       }
       if(s113=="yes"){
        document.getElementById("s113").style.backgroundColor="green";
       }
       if(s121=="yes"){
        document.getElementById("s121").style.backgroundColor="green";
       }
       if(s122=="yes"){
        document.getElementById("s122").style.backgroundColor="green";
       }
       if(s123=="yes"){
        document.getElementById("s123").style.backgroundColor="green";
       } 
    })
}


function follow(){
    window.location.href="test.html";
}

function checkall(){
    firebase.database().ref("Code-challenges/alltests/").once('value',function(snapshot){
        var data = snapshot.val();
        var keys=Object.keys(data);
        
        for(var i=0; i<keys.length;i++){
        var vals=[];
           var k = keys[i];
           var id = data[k].testid;
           const box = document.createElement("div");
           const pa = document.createElement("p");
           const st = document.createElement("p");
           
           pa.id="idi";
           
           box.id = "block";
           st.id=id;
           pa.innerHTML="Test ID: "+id;
           document.body.appendChild(box);
            box.appendChild(pa);
           box.appendChild(st);
           
           firebase.database().ref("Accounts/user-accounts/"+localStorage.getItem("mainkey")+"/tests/").once("value",function(snapshot){
            var dat = snapshot.val();
            var all = dat.ctest;
            var newp = all.split(" ");
             document.getElementById("listit").innerHTML="COMPLETED TEST BUNDLES ID'S: "+newp;
            
            for(var j=0;j<newp.length;j++){
                 if(id=newp[j]){
                     //document.getElementById(id).innerHTML="COMPLETED";
                    //document.getElementById(id).className="status";
                 }
            
            }
            

           })
            }

        
        
    })
}

function funco(){
   
    firebase.database().ref("Code-challenges/alltests/").once('value',function(snapshot){
      var data = snapshot.val();
      var keys = Object.keys(data);
      for(var i=0;i<keys.length;i++){
        var k = keys[i];
        var id = data[k].testid;
        if(document.getElementById("i0").value==id){
          localStorage.setItem("maintest",k);
          localStorage.setItem("mainid",id);
          window.location.href="challenge.html";
        }
      }
    })
}

function learn(){
    firebase.database().ref("Code-challenges/alltests/"+localStorage.getItem("maintest")).once("value",function(snapshot){
         
         var data=snapshot.val();
         var one = data.q1;
         var two = data.q2;
         var three = data.q3;
         var four = data.q4;
         var five = data.q5;
         document.getElementById("o1").innerHTML=one;
         document.getElementById("o2").innerHTML=two;
         document.getElementById("o3").innerHTML=three;
         document.getElementById("o4").innerHTML=four;
         document.getElementById("o5").innerHTML=five;
    })
}

function testo(){
  var set1= document.getElementById("a1").value;
  var set2= document.getElementById("a2").value;
  var set3= document.getElementById("a3").value;
  var set4= document.getElementById("a4").value;
  var set5= document.getElementById("a5").value;
if(set1!=""&&set2!=""&&set3!=""&&set4!=""&&set5!=""){
  punch();
}
else{
  alert("One of the answers are empty");
}
}

function punch(){
  
 firebase.database().ref("Code-challenges/alltests/"+localStorage.getItem("maintest")).on("value",function(snapshot){
  var dat = snapshot.val();
  var one = dat.a1;
  var two = dat.a2;
  var three = dat.a3;
  var four = dat.a4;
  var five = dat.a5;
  var set1= document.getElementById("a1").value;
  var set2= document.getElementById("a2").value;
  var set3= document.getElementById("a3").value;
  var set4= document.getElementById("a4").value;
  var set5= document.getElementById("a5").value;

  var arr1 = set1.split(" ");
  var arr2 = set2.split(" ");
  var arr3 = set3.split(" ");
  var arr4 = set4.split(" ");
  var arr5 = set5.split(" ");
  arr1.every(emerge1);
  arr2.every(emerge2);
  arr3.every(emerge3);
  arr4.every(emerge4);
  arr5.every(emerge5);
  function emerge1(wordo){
    let res = one.includes(wordo);
  
    if(res==true){
      document.getElementById("t1").style.display="block";
       document.getElementById("t1").style.backgroundColor="green";
      
    }
    
   else if(res==false){
    document.getElementById("t1").style.display="block";
    document.getElementById("t1").style.backgroundColor="red";
    }
  }
   function emerge2(wordo){
    let res = two.includes(wordo);
    

    if(res==true){
      document.getElementById("t2").style.display="block";
       document.getElementById("t2").style.backgroundColor="green";
      
    }
    else if(res==false){
    document.getElementById("t2").style.display="block";
    document.getElementById("t2").style.backgroundColor="red";
    
   }
  }
   function emerge3(wordo){
    let res = three.includes(wordo);
    
    if(res==true){
      document.getElementById("t3").style.display="block";
       document.getElementById("t3").style.backgroundColor="green";
      
    }
    else if(res==false){
    document.getElementById("t3").style.display="block";
    document.getElementById("t3").style.backgroundColor="red";
    
   }
  }
   function emerge4(wordo){
    let res = four.includes(wordo);
     
    if(res==true){
      document.getElementById("t4").style.display="block";
       document.getElementById("t4").style.backgroundColor="green";
       
    }
    else if(res==false){
    document.getElementById("t4").style.display="block";
    document.getElementById("t4").style.backgroundColor="red";
    
   }
  }
   function emerge5(wordo){
    let res = five.includes(wordo);
    
    if(res==true){
      document.getElementById("t5").style.display="block";
       document.getElementById("t5").style.backgroundColor="green";
      
    }
    else if(res==false){
    document.getElementById("t5").style.display="block";
    document.getElementById("t5").style.backgroundColor="red";
   
   }

if(document.getElementById("t1").style.backgroundColor=="green"&&document.getElementById("t2").style.backgroundColor=="green"&&document.getElementById("t3").style.backgroundColor=="green"&&document.getElementById("t4").style.backgroundColor=="green"&&document.getElementById("t5").style.backgroundColor=="green"){
   alert("You have completed your test!, you got +125xp");
   firebase.database().ref("Accounts/user-accounts/"+localStorage.getItem("mainkey")+"/tests/").once("value",function(snapshot){
    var data = snapshot.val();
    var tid = data.ctest;
    if(tid.includes(localStorage.getItem("mainid"))){
      alert("Already completed this test!");
    }
    else{
       addit();
    }
   })
   
  }
  
  
  }
   


  
})
 }



function addit(){

  var u=0;
 
  firebase.database().ref("Accounts/user-accounts/"+localStorage.getItem("mainkey")).once("value").then(function(snapshot){
    var dato = snapshot.val();
    var pi = dato.points;
    var m = parseInt(pi);
     firebase.database().ref("Accounts/user-accounts/"+localStorage.getItem("mainkey")).update({
     "points":pi+125       
     })

    
      var datan = snapshot.val();
      var j = datan.testid;
      var w1 = ' ';
      var w2 = localStorage.getItem("mainid");
      var res = w1.concat(w2);

    firebase.database().ref("Accounts/user-accounts/"+localStorage.getItem("mainkey")+"/tests/").once("value",function(snapshot){
      var d = snapshot.val();
      var jug = d.ctest;
      firebase.database().ref("Accounts/user-accounts/"+localStorage.getItem("mainkey")+"/tests/").update({
             "ctest":jug+" "+w2
      })
      })
  })
  setTimeout(()=>{
    window.location.href="test.html";
  },2000);
  
}

function checkit(){
  firebase.database().ref("Code-challenges/").once("value").then(function(snapshot){
    var data = snapshot.val();
    var total = data.total;
    var seto = total.split(" ");
    var user=localStorage.getItem("mainid");

    firebase.database().ref("Accounts/user-accounts/"+localStorage.getItem("mainkey")+"/tests/").once("value").then(function(snapshot){
      var datu = snapshot.val();
      var id2 = datu.ctest;
      var lat = id2.split(" ");

     

      for(var j=0; j<lat.length;j++){
        if(user=lat[j]){
        
        }
      }
    })

   
  })
}

function popu(){
  window.location.href="class.html";
}

function drive(){
  window.location.href="HTML/account.html";
}

function classo(){
  firebase.database().ref("Class/").once("value",function(snapshot){
    var data = snapshot.val();
    var d1 = data.date;
    var d2 = data.date2;
    var t1 = data.topic;
    var t2 = data.topic2;
    var ti1 = data.time;
    var ti2 = data.time2;
    var mc1 = data.meetcode;
    var mc2 = data.meetcode2;

    document.getElementById("1").innerHTML=d1;
    document.getElementById("2").innerHTML=t1;
    document.getElementById("3").innerHTML=mc1;
    document.getElementById("4").innerHTML=ti1;
    document.getElementById("5").innerHTML=d2;
    document.getElementById("6").innerHTML=t2;
    document.getElementById("7").innerHTML=mc2;
    document.getElementById("8").innerHTML=ti2;
  })
}

function mot(){
  window.location.href="account.html";
}

