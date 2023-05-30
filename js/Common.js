// for showing catagoris in phone
let NavCaragoris = document.querySelector(".NavCaragoris");

function HideMiniNev() {
  NavCaragoris.style.display = "none";
}

function ShowMiniNev() {
  NavCaragoris.style.display = "block";
}

// Switch Account
let ImgiD = document.getElementById("switchAccount");
let x = true;

ImgiD.addEventListener("click", () => {
  let SwitchDiv = document.querySelector(".WtitchDiv");
  if (x) {
    SwitchDiv.style.display = "block";
    x = false;
  } else {
    SwitchDiv.style.display = "none";
    x = true;
  }
});

//
window.addEventListener("scroll", () => {
  let TopNev = document.querySelector(".TopNev");
  let MidNev = document.querySelector(".MidNev");
  let MoboTop = document.querySelector(".MoboTop");

  if (window.scrollY > 100) {
    TopNev.style.display = "none";
    MidNev.style.display = "block";
    MidNev.classList.add("MidNevScrol")
    MoboTop.classList.add("pixedMobilnem")
  } else {
    TopNev.style.display = "block";
    MidNev.style.display = "block";
    MidNev.classList.remove("MidNevScrol")
    MoboTop.classList.remove("pixedMobilnem")
  }
});

// for dropdown menu in phone
let DropDown = document.querySelector(".DeopDownMenuMobiel");
DropDown.style.display = "none";
let isTrue = true;

function showDropdown() {
  if (isTrue) {
    DropDown.style.display = "block";
    isTrue = false;
  } else {
    DropDown.style.display = "none";
    isTrue = true;
  }
}

// hdie and show ctagoris in scrole
let CatagorisIcinHide111 = document.querySelector(".CatagorisIcinHide");
CatagorisIcinHide111.addEventListener("click", function () {
  document.getElementById("NavClickAction").style.display = "block";
  document.getElementById("CatagorisIcinHide").style.display = "none";
  document.getElementById("CatagorisIcinHideCros").style.display = "block";
});

let CatagorisIcinHideCros2222 = document.querySelector(
  ".CatagorisIcinHideCros"
);

CatagorisIcinHideCros2222.addEventListener("click", function () {
  document.getElementById("NavClickAction").style.display = "none";
  document.getElementById("CatagorisIcinHide").style.display = "block";
  document.getElementById("CatagorisIcinHideCros").style.display = "none";
});

function ProceedToCheckoutFuns() {
  document.getElementById("cartTab").style.display = "none";
  document.getElementById("checkOutTab").style.display = "block";
}

function ProceedToCheckout2Funs() {
  document.getElementById("checkOutTab").style.display = "none";
  document.getElementById("orderCompletedTab").style.display = "block";
}

// Address addd show  AddAdressBtnO
function FunAddAdressBtnO() {
  let addressInfoFrom = document.querySelector(".addressInfoFrom");
  let collectedAddressA = document.querySelector(".collectedAddress");
  collectedAddressA.style.display = "none";
  addressInfoFrom.style.display = "block";
  console.log("helow!!!!!!!!!");
}

function FunaddressInfoFrom() {
  let addressInfoFrom = document.querySelector(".addressInfoFrom");
  let collectedAddressA = document.querySelector(".collectedAddress");
  collectedAddressA.style.display = "block";
  addressInfoFrom.style.display = "none";
  console.log("helow!!!!!!!!!");
}

// Change Passoward and Mail
// function ChangeEmail(){
//   let emailID = document.querySelector("#EmaoChange")
//   let passowardlID = document.querySelector("#PassowardChange")
//   let ifoID = document.querySelector(".profileUpdate")

//   emailID.style.display = "block";
//   passowardlID.style.display = "none";
//   ifoID.style.display = "none";
// }

// function ChangePassoward(){
//   let emailID = document.querySelector("#EmaoChange")
//   let passowardlID = document.querySelector("#PassowardChange")
//   let ifoID = document.querySelector(".profileUpdate")

//   emailID.style.display = "none";
//   passowardlID.style.display = "block";
//   ifoID.style.display = "none";
// }