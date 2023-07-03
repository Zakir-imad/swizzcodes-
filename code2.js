

function loader(){
  document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        alert("not ready");
    } else {
       alert("im ready");
    }
};
}var firebaseConfig = {apiKey: "AIzaSyDWhdyEd4DEt2-HBuSVO8tKGkVaKh99B2Q",authDomain: "swizzcodes-samee.firebaseapp.com",
databaseURL: "https://swizzcodes-samee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId: "swizzcodes-samee",
storageBucket: "swizzcodes-samee.appspot.com",messagingSenderId: "632373340703",appId: "1:632373340703:web:fca362ff619a41bc7dc32a",measurementId: "G-2BNYYMZ5HM"
};firebase.initializeApp(firebaseConfig);

var topico = document.getElementById("tit");
var man = document.getElementById("alltests");
function checktests(){
	firebase.database().ref("Code-challenges/alltests/").once("value",function(snapshot){
	var data = snapshot.val();
	var keys = Object.keys(data);
	for(var i=0;i<keys.length;i++){
		var k = keys[i];
		var id=data[k].testid;
		var comp = data[k].cids;
		var topic = data[k].title;
		prepare(comp);
		const boxy = document.createElement("div");
		const title = document.createElement("p");
		const iden = document.createElement("p");
		const quest = document.createElement("p");
		const sim = document.createElement("p");
		title.setAttribute('class','tit');
		boxy.setAttribute('class','testo');
		boxy.setAttribute('id',id);
		iden.setAttribute("class",'stme');
		quest.setAttribute("class","qt");
		sim.setAttribute("class","ct");
		iden.innerHTML="Test ID: #"+id;
		title.innerHTML=topic;
		quest.innerHTML="Total questions : 5";
		man.appendChild(boxy);
		man.appendChild(title);
		man.appendChild(iden);
		man.appendChild(quest);
		man.appendChild(sim);
		var tot = comp.split(" ");
        if(tot.includes(localStorage.getItem("userid"))){
    	    document.getElementById(id).style.backgroundColor="limegreen";
    	    quest.innerHTML="COMPLETED";
        }
        else{
             document.getElementById(id).style.backgroundColor="crimson";
             quest.innerHTML="INCOMPLETE COMPLETE NOW->";
             quest.onclick=function(){
             	localStorage.setItem("testid",sim.innerHTML);
                 window.location.href="testing.html";
             }
             sim.innerHTML =k;

    }   }

})
}
function prepare(cids){

   
}
var list = document.getElementById("sm");var all = document.getElementById("all");
function pass(){list.style.animation="role1 600ms";list.style.display="block";document.getElementById("a1").style.display="none";
document.getElementById("a3").style.display="block";}function shut(){list.style.animation="role2 600ms";
document.getElementById("a1").style.display="block";document.getElementById("a3").style.display="none";
setTimeout(()=>{list.style.display="none";},580);}function perform(){document.getElementById("bano").style.display="block";all.setAttribute('class','blur');}

/*firebase.database().ref("Code-challenges/alltests/").push().set({
	"testid":"T12S2",
	"title":"Data visualization in matplotlib",
	"cids":"",
	"q1":"",
	"q2":"",
	"q3":"",
	"q4":"",
	"q5":"",
	"a1":"",
	"a2":"",
	"a3":"",
	"a4":"",
	"a5":"",
})*/

function getkeys(){
	alert(localStorage.getItem("testid"));
}
var seti = ['op1','op2','op3','op4','op5','op6','op7','op8','op9','op10','op11','op12','op13','op14','op15','op16','op17','op18','op19','op20'];
var j= ['o1','o2','o3','o4','o5','o6','o7','o8','o9','o10','o11','o12','o13','o14','o15','o16','o17','o18','o19','o20'];
function setFries(){
  
}

function getq(){
  firebase.database().ref("Code-challenges/alltests/"+window.localStorage.getItem("testid")).once("value",function(snapshot){

    var data = snapshot.val();
    var q1 = data.q1;
    var q2 = data.q2;
    var q3 = data.q3;
    var q4 = data.q4;
    var q5 = data.q5;
    var n = data.cids;
    if(n.includes(window.localStorage.getItem("testid"))){
        alert("Already completed this test");
        window.location.href="account.html";
    }
    else{

    document.getElementById("q1").innerHTML="1. "+q1;
    document.getElementById("q2").innerHTML="2. "+q2;
    document.getElementById("q3").innerHTML="3. "+q3;
    document.getElementById("q4").innerHTML="4. "+q4;
    document.getElementById("q5").innerHTML="5. "+q5;
    
    document.getElementById("o1").innerHTML = data.o1;
    document.getElementById("o2").innerHTML = data.o2;
    document.getElementById("o3").innerHTML = data.o3;
    document.getElementById("o4").innerHTML = data.o4;
    document.getElementById("o5").innerHTML = data.o5;
    document.getElementById("o6").innerHTML = data.o6;
    document.getElementById("o7").innerHTML = data.o7;
    document.getElementById("o8").innerHTML = data.o8;
    document.getElementById("o9").innerHTML = data.o9;
    document.getElementById("o10").innerHTML = data.o10;
    document.getElementById("o11").innerHTML = data.o11;
    document.getElementById("o12").innerHTML = data.o12;
    document.getElementById("o13").innerHTML = data.o13;
    document.getElementById("o14").innerHTML = data.o14;
    document.getElementById("o15").innerHTML = data.o15;
    document.getElementById("o16").innerHTML = data.o16;
    document.getElementById("o17").innerHTML = data.o17;
    document.getElementById("o18").innerHTML = data.o18;
    document.getElementById("o19").innerHTML = data.o19;
    document.getElementById("o20").innerHTML = data.o20;
}
   
  })

  setTimeout(function(){
  	alert("Your test has been submitted!");
     verifier();
  },300000);
}


function verifier(){
	document.getElementById("htto").disabled=true;
	firebase.database().ref("Code-challenges/alltests/"+window.localStorage.getItem("testid")).once("value",function(snapshot){
    var data = snapshot.val();
    var a1 = data.a1;
    var a2 = data.a2;
    var a3 = data.a3;
    var a4 = data.a4;
    var a5 = data.a5;
    
    var correct=0;
    var wrong=5;
    var points=0;

    if(document.getElementById(a1).checked){
    	correct++;
    	points+=25;
    	wrong--;
    }

    if(document.getElementById(a2).checked){
    	correct++;
    	points+=25;
    	wrong--;
    }

    if(document.getElementById(a3).checked){
    	correct++;
    	points+=25;
    	wrong--;
    }

    if(document.getElementById(a4).checked){
    	correct++;
    	points+=25;
    	wrong--;
    }

    if(document.getElementById(a5).checked){
    	correct++;
    	wrong--;
    	points+=25;
    }
    fillit(correct,wrong);
    give(points);
});

}

function fillit(cor,wro){
	alert("Your test has been submitted!");
	firebase.database().ref("Accounts/user-accounts/"+localStorage.getItem("mainkey")+"/tests/").once("value",function(snapshot){
		var data = snapshot.val();
		var c = data.correct;
		var w = data.wrong;
		var tot =data.total;

		firebase.database().ref("Accounts/user-accounts/"+localStorage.getItem("mainkey")+"/tests/").update({
            "correct":c+cor,
            "wrong":w+wro,
            "total":tot+1  
	    })
	})
	alert(localStorage.getItem("testid"));
	firebase.database().ref("Code-challenges/alltests/"+localStorage.getItem("testid")+"/").once("value",function(snapshot){
		var data = snapshot.val();
		firebase.database().ref("Code-challenges/alltests/"+localStorage.getItem("testid")).update({
		    "cids":" "+localStorage.getItem("userid")
	    })
	})
	 setTimeout(()=>{
	 	window.location.href="fast.html";
	 },1000);
}

function give(a){
	firebase.database().ref("Accounts/user-accounts/"+localStorage.getItem("mainkey")+"/").once("value",function(snapshot){
		var data = snapshot.val();
		var points = data.points;
		firebase.database().ref("Accounts/user-accounts/"+localStorage.getItem("mainkey")+"/").update({
			'points':points+a
		})
	})
}

function loader(){
  document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";

        console.log("not ready");
    } else {
       console.log("im ready");
    }
};
}