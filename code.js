var firebaseConfig = {apiKey: "AIzaSyDWhdyEd4DEt2-HBuSVO8tKGkVaKh99B2Q",authDomain: "swizzcodes-samee.firebaseapp.com",
databaseURL: "https://swizzcodes-samee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId: "swizzcodes-samee",
storageBucket: "swizzcodes-samee.appspot.com",messagingSenderId: "632373340703",appId: "1:632373340703:web:fca362ff619a41bc7dc32a",measurementId: "G-2BNYYMZ5HM"
};firebase.initializeApp(firebaseConfig);var list = document.getElementById("sm");var all = document.getElementById("all");
function pass(){list.style.animation="role1 600ms";list.style.display="block";document.getElementById("a1").style.display="none";
document.getElementById("a3").style.display="block";}function shut(){list.style.animation="role2 600ms";
document.getElementById("a1").style.display="block";document.getElementById("a3").style.display="none";
setTimeout(()=>{list.style.display="none";},580);}function perform(){document.getElementById("bano").style.display="block";all.setAttribute('class','blur');}
var loc = firebase.database().ref("applications/");
function s1(){exito();loc.push().set({"fullname":document.getElementById("i1").value,"mobile":document.getElementById("i2").value})}
function exito(){document.getElementById("bano").style.display="none";all.removeAttribute("class","blur");}
function send1(){if(localStorage.getItem("loggedin")=="yes"){window.location.href="HTML/account.html"}else{window.location.href="HTML/login.html"}}
var loca = firebase.database().ref("Accounts/user-accounts/");
var final=firebase.database().ref("Accounts/user-accounts/"+localStorage.getItem('mainkey')+"/");
function li(){var e = document.getElementById("e").value;var p = document.getElementById("p").value;loca.once("value",function(snapshot){
var data = snapshot.val();var keys = Object.keys(data);for(var i=0;i<keys.length;i++){
var k = keys[i];var e2 = data[k].email;var p2 = data[k].password;var course = data[k].course;var user =data[k].id;if(e==e2&&p==p2&&course=="python"){
localStorage.setItem("mainkey",k);localStorage.setItem("loggedin","yes");localStorage.setItem("userid",user);window.location.href="account.html";}}})}

function classy(){
     final.once("value",function(snapshot){
     	var data = snapshot.val();
     	document.getElementById("pf").innerHTML = data.fullname.charAt(0);
     	document.getElementById("na").innerHTML = data.fullname;
     	document.getElementById("id").innerHTML ="#"+ data.id;
        document.getElementById("con2").innerHTML="Welcome, "+data.fullname;
     })
     firebase.database().ref("Code-challenges/alltests/").once("value",function(snapshot){
      var data = snapshot.val();
      var keys = Object.keys(data);
       document.getElementById("totli").innerHTML = keys.length;
       firebase.database().ref("Accounts/user-accounts/"+localStorage.getItem('mainkey')+"/tests/").once("value",function(snapshot){
      var data = snapshot.val();
      var cump = data.total;
      document.getElementById("compo").innerHTML=cump;
      document.getElementById("numpo").innerHTML=(keys.length)-cump;
      document.getElementById("d9").innerHTML = Math.ceil(cump/(keys.length)*100)+"%";
      var ti = keys.length;
      marks(ti);
      })
     })

}

function mojo(){
  window.location.href="class.html";
}

function marks(b){
firebase.database().ref("Accounts/user-accounts/"+localStorage.getItem("mainkey")+"/tests/").once("value",function(snapshot){
  var data = snapshot.val();
  var cor = data.correct;
  var wro = data.wrong;
  var a1=Math.ceil(cor/(b*5)*100);
  var a2=Math.ceil(wro/(b*5)*100);
  var options = {
          series: [{
          name: 'Marks',
          data: [a1,a2]
        }],
          chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: '30px',
            colors: ["white"]
          }
        },
        
        xaxis: {
          categories: ["Correct answers","Wrong answers"],
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }
        
        },
        title: {
          text: 'Correct answers vs wrong answers',
          floating: true,
          offsetY: 310,
          align: 'center',
          style: {
            color: 'white',
            fontSize:"30px"
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#myDiv"), options);
        chart.render();
})


}
      
function checnow(){
	if(localStorage.getItem("loggedin")=="yes"){
		document.getElementById("bt2").innerHTML="GO TO DASHBOARD";
	}
}
function fast(){
	window.location.href="fast.html";
}
var man = document.getElementById("alltests");

function checktests(){
	firebase.database().ref("Code-challenges/alltests/").once("value",function(snapshot){
	var data = snapshot.val();
	var keys = Object.keys(data);
	for(var i=0;i<keys.length;i++){
		var k = keys[i];
		var id=data[k].testid;
		const boxy = document.createElement("div");
		boxy.class="testo";
		man.appendChild(boxy);

	}

})
}

function soo(){
  window.location.href="over.html";
}

function meo(){
  window.location.href="account.html";
}
function support(){
  window.location.href="cust.html";
}
function place(){
  document.getElementById("btni").disabled=true;
  alert("Your concern has been successfully submitted!");
  firebase.database().ref("customer-care/concerns/").push().set({
    "id":localStorage.getItem("userid"),
    "concern":document.getElementById("mejo").value
  })
  setTimeout(()=>{
    window.location.href="account.html";
  },1000);
}