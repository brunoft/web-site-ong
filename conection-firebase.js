// Initialize Firebase
var config = {
  apiKey: "AIzaSyBfcwfplRjbWhhx_dyxZiDZojJwMoxSwMU",
  authDomain: "clientes-9cc69.firebaseapp.com",
  databaseURL: "https://clientes-9cc69.firebaseio.com",
  projectId: "clientes-9cc69",
  storageBucket: "clientes-9cc69.appspot.com",
  messagingSenderId: "414237227516"
};
firebase.initializeApp(config);

var d = new Date();
var t = d.getTime();
var counter =t;

var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function createTask(name,email,type){
  console.log(counter);
  counter+=1;


function GetEmailType(email)
{
  var lista = ["@gmail",
    "@hotmail",
    "@yahoo",
    "@outlook",
    "aol",
    "hotmail",
    "msn",
    "yahoo",
    "wanadoo.",
    "comcast",];
  var rst = "B2B";
  lista.forEach(function(et, index, array)
  {
    if(email.includes(et))
    {
      rst = "B2C";
      return;
    }
  });
  return rst;
}


  $.getJSON("https://jsonip.com?callback=?").then(function(data){
          var datetime = new Date();
          var task={
            id:counter,
            name: name,
            email: email,
            ip: data.ip,
            type: GetEmailType(email),
            date: datetime.toLocaleDateString()+" "+datetime.toLocaleTimeString()
          }
          console.log(task);
          let db= firebase.database().ref("leads/"+counter);
          db.set(task);



        });
}

function onInscrever()
{

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if(name == "" || email ==="" || !emailRegex.test(email)){
    return;
  }

  var x = document.getElementById("toast")
   x.className = "show";
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 50000);

  createTask(name,email);
  document.getElementById("formInscrever").reset();
}

function onInscrever2()
{

  var name = document.getElementById("name2").value;
  var email = document.getElementById("email2").value;

  if(name == "" || email ==="" || !emailRegex.test(email)){
    return;
  }

  var x = document.getElementById("toast")
   x.className = "show";
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);

  createTask(name,email);
  document.getElementById("formInscrever2").reset();
}

function formEbookClick()
{
  var name = document.getElementById("eb_name").value;
  var email = document.getElementById("eb_email").value;

  if(name == "" || email ==="" || !emailRegex.test(email)){
    return;
  }

  document.getElementById("formEbook").reset();
  createTask(name,email);
  document.getElementById("formEbook").style.visibility = "hidden";
  document.getElementById("linkEbook").style.visibility = "visible";

}
