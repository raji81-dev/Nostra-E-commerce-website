var offerbox=document.querySelector(".offercontainer")

document.getElementById("close").addEventListener("click",
    function(){
        
        offerbox.style.display="none";
    }
)
//side navbar open
var sidebaropen= document.querySelector('.side-navbar')
document.getElementById("side-navbar-menu").addEventListener("click", function(){
   
    sidebaropen.style.marginLeft="0px"
})
//side navbar close
document.getElementById("close-sidebar").addEventListener("click", function(){
    
    sidebaropen.style.marginLeft="-63%"
})
//product sections
const images = [
    { id:1,src: "Images/Images1.jpg", alt: "Image 1", price:1994, name:"Crocodile",subname:"Men Comfort Spread Collar Checked Cotton Casual Shirt",offer:"(15% OFF)", tags:["new","brown","summer","formal"] },
    { id:2,src: "Images/Images2.jpg", alt: "Image 2", price:1087, name:"AD By Arvind",subname:"Geometric Patterned Slim Fit Shirt",offer:"(20% OFF)", tags:["new","green","party","formal"] },
    { id:3,src: "Images/Images3.jpg", alt: "Image 3", price:699, name:"HERE&NOW",subname:"Men Navy Blue & Off White Slim Fit Printed Casual Shirt",offer:"(65% OFF)", tags:["new","white","summer","floral"] },
    { id:4,src: "Images/Images4.jpg", alt: "Image 4", price:1218, name:"WROGN",subname:"Printed Drop-Shoulder Sleeves Cotton Casual Shirt",offer:"(47% OFF)", tags:["new","black","floral"] },
    { id:5,src: "Images/Images5.jpg", alt: "Image 5", price:2799,  name:"RARE RABBIT",subname:"Men Comfort Opaque Printed Casual Shirt",offer:"(20% OFF)", tags:["new","white","floral","party"]},
    { id:6,src: "Images/Images6.jpg", alt: "Image 6", price:434, name:"NOBERO",subname:"Men Typography T-shirt",offer:"(71% OFF)", tags:["new","red","party","summer"] },
    { id:7,src: "Images/Images11.jpg", alt: "Image 7", price:659, name:"Maniac",subname:"Men Solid Polo Collar Cotton Slim Fit T-shirt",offer:"(67% OFF)", tags:["new","blue","party","summer"] },
    { id:8,src: "Images/Images8.jpg", alt: "Image 8", price:379, name:"Roadster",subname:"Men White Mustard Yellow  Round Neck  Cotton T-shirt",offer:"(62% OFF)", tags:["new","blue","party","summer"] },
    { id:9,src: "Images/Images9.jpg", alt: "Image 9", price:781, name:"Anouk",subname:"Men Green & Gold-Toned Striped Mandarin-Collar Kurta",offer:"(66% OFF)", tags:["old","kurtas","green"] },
    { id:10,src: "Images/Images10.jpg", alt: "Image 10", price:1319, name:"House of Pataudi",subname:"Embellished Mirror Work Jashn Kurta",offer:"(60% OFF)",tags:["old","red","kurtas"] },
  ];

  // Get the gallery container
  const gallery = document.getElementById("gallery");

  // Loop through the images and add them to the gallery
  images.forEach((product)=>{
    var createItem = document.createElement("div")
    createItem.classList.add("product")
    createItem.innerHTML=` <img src="${product.src}">
    <h1 style="font-weight:bold; font-size:20px">${product.name}</h1>
    <h4 style="color:gray;font-size: 10px; font-weight:bold; width: 166px;">${product.subname}<br></h4>
    <p style="font-weight:bold">₹${product.price}</p><p style="color:#ffa35a">${product.offer}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`

    gallery.append(createItem)
})
var filterList =[]
var tags = document.getElementsByName("tags")
console.log(tags)


tags.forEach((tag)=>{
    
    tag.addEventListener("change",(e)=>{

        if(e.target.checked)
        {
        filterList.push(e.target.value)
        console.log(filterList)
        update()
        
        }
        else{
            filterList = filterList.filter(item => item !== e.target.value);
            update()

        }

        
       
    })
})
function update()
{
    var productList = document.querySelectorAll(".product")
    for(var i=0;i<productList.length;i++){
        var check = false
        var product=productList[i]
        console.log(product)
        var temp=product.querySelector("tags").innerHTML
       
        console.log("elemen"+temp)
        

        const tempFilterArray = temp.split(',');
        
        console.log("tempfilterarray"+tempFilterArray)
        console.log("filterlist"+filterList)
       
            filterList.forEach((j)=>{
                tempFilterArray.forEach((i)=>{
                if(j==i)
                {
                    check=true
                }
            })
        })


        if(!check && filterList.length>0)
        {
            product.style.display="none"
        }
        else{
            product.style.display="block"
        }

        
    };


}
//search
var searchInput = document.getElementById("searchInput")
searchInput.addEventListener("keyup",function(){
    update()
})
//slider

var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",

function(){
   
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)

