import BagsFootwear from "./data/bags_footwear.js"
import BeautyHealth from "./data/beauty_health.js"
import Electronics from "./data/electronic.js"
import Home_And__Kitchen from "./data/home_Kitchen.js"
import JewelleryAccessories from "./data/jewellary_assessories.js"
import Kid from "./data/kids.js"
import Man from "./data/mens.js"
import Women__Ethnic from "./data/women_ethinic.js"
import Women__Western from "./data/women_western.js"

let input_search_El=document.querySelector(".input_Search")
let recentInput = []
let form_Input_El = document.getElementById("input_Form")
const list_of_Recent_El = document.querySelector(".list_of_Recent")


input_search_El.addEventListener("keydown",()=>{
    //console.log(input_search_El)
    if(input_search_El){
        document.getElementById("close_Search").style.display="block";
    }else{
        document.getElementById("close_Search").style.display="none";
    }
})
form_Input_El.addEventListener("submit", (e) => {
    e.preventDefault()
    let listofRecentHTMLEl = ""

    recentInput.unshift(input_search_El.value)
    console.log(recentInput)

    if (recentInput.length > 0) {
        for (let i = 0; i < recentInput.length; i++) {
            listofRecentHTMLEl += `
            <div class="recent_Item">
                <div class="recent_Icon">
                     <img src="./img/recent.png"/>
                </div>
                <p>${recentInput[i]}</p>
            </div>
        `
        }

        list_of_Recent_El.innerHTML = listofRecentHTMLEl
    }
});

/*function reuble*****/
function renderSubMenu(id,data){
    let temp = document.getElementById(id)
function TempFunc(){
   return data.map(el =>{
        let list = ""; 
        list = el.data.map(element => `<p>${element}</p>`).join(" ")    
       return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
       `
    }).join("")
}
    temp.innerHTML = TempFunc()
}



/****womenEthic */
renderSubMenu("WomenEthnic_ID",Women__Ethnic)

/****WomenWestern */
renderSubMenu("womenWestern_ID",Women__Western)

//Men 
renderSubMenu("men_ID",Man)

/***kids */
renderSubMenu("kids_ID",Kid)

/**home % kitchen */
renderSubMenu("HomeAndKitchen_ID",Home_And__Kitchen)

/**beauty and health */
renderSubMenu("beautyAndHealth_ID",BeautyHealth)

// Jewellery & Accessories
renderSubMenu("JewelleryAndAccessoriesID",JewelleryAccessories)

// Bags & Footwear
renderSubMenu("BagsFootWaearrrId",BagsFootwear)

// Electronics
renderSubMenu("ElectronicsId",Electronics)


// let eth=document.getElementById("womenEthnic")
// let women_ethinic_HTML_ID=""
// console.log(Women__Ethnic)
// function womenEthnicFunc(){
//     return Women__Ethnic.map(el =>{
//         let list = ""; 
//         list = el.data.map(element => `<p>${element}</p>`).join(" ")    
//        return `
//         <div class="column">
//             <h4>${el.heading}</h4>
//             ${list}
//         </div>
//        `
//     }).join("")
// }
// eth.innerHTML=womenEthnicFunc() 

// let west=document.getElementById("womenWestern")
// let women_western_HTML_ID=""
// console.log(Women__Western)
// function womenWesternFunc(){
//     return Women__Western.map(el =>{
//         let list = ""; 
//         list = el.data.map(element => `<p>${element}</p>`).join(" ")    
//        return `
//         <div class="column">
//             <h4>${el.heading}</h4>
//             ${list}
//         </div>
//        `
//     }).join("")
// }
// west.innerHTML=womenWesternFunc() 


// let mmaann=document.getElementById("men")
// let Men_HTML_ID=""
// console.log(Man)
// function ManFunc(){
//     return Man.map(el =>{
//         let list = ""; 
//         list = el.data.map(element => `<p>${element}</p>`).join(" ")    
//        return `
//         <div class="column">
//             <h4>${el.heading}</h4>
//             ${list}
//         </div>
//        `
//     }).join("")
// }
// mmaann.innerHTML=womenWesternFunc()

// let bag_foot_Wear=document.getElementById("BagsFootWarId")
// let BagsFootWarId_HTML_ID=""
// function BagsFootWarIdFunc(){
//     return BagsFootwear.map(el =>{
//         let list = ""; 
//         list = el.data.map(element => `<p>${element}</p>`).join(" ")    
//        return `
//         <div class="column">
//             <h4>${el.heading}</h4>
//             ${list}
//         </div>
//        `
//     }).join("")
// }
// bag_foot_Wear.innerHTML=BagsFootWarIdFunc()


// let JewelleryAcce__ssories=document.getElementById("JewelleryAndAccessories")
// let JewelleryAndAccessories_HTML_ID=""
// function JewelleryAndAccessoriesFunc(){
//     return JewelleryAccessories.map(el =>{
//         let list = ""; 
//         list = el.data.map(element => `<p>${element}</p>`).join(" ")    
//        return `
//         <div class="column">
//             <h4>${el.heading}</h4>
//             ${list}
//         </div>
//        `
//     }).join("")
// }
// JewelleryAcce__ssories.innerHTML=JewelleryAndAccessoriesFunc()


// let Electronics__Id=document.getElementById("ElectronicsId")
// let ElectronicsId_HTML_ID=""
// function Electronics__IdFunc(){
//     return Electronics.map(el =>{
//         let list = ""; 
//         list = el.data.map(element => `<p>${element}</p>`).join(" ")    
//        return `
//         <div class="column">
//             <h4>${el.heading}</h4>
//             ${list}
//         </div>
//        `
//     }).join("")
// }
// Electronics__Id.innerHTML=Electronics__IdFunc()

// let kids__Id=document.getElementById("kids")
// let kidsId_HTML_ID=""
// function Kid__IdFunc(){
//     return Kid.map(el =>{
//         let list = ""; 
//         list = el.data.map(element => `<p>${element}</p>`).join(" ")    
//        return `
//         <div class="column">
//             <h4>${el.heading}</h4>
//             ${list}
//         </div>
//        `
//     }).join("")
// }
// kids__Id.innerHTML=Kid__IdFunc()