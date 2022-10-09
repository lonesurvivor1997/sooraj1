$('.slideshow-container').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});
var a= location.search.substring(1);
var retrievedData2 = localStorage.getItem("q");
var mov = JSON.parse(retrievedData2);
let checkoutcart = [];
let p =[];


let s = "";

console.log(checkoutcart)

const clothings = [
  {
    id: 0,
    title: "Women Black Solid Lightweight Leather Jacket",
    brand: "United brands of Benetton",
    price: "RS 2599",
    pictureUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    link:"product.html?0",
  },
  {
    id: 1,
    title: "Men Black MAMGP T7 Sweat Sporty Jacket",
    brand: "Puma",
    price: "RS 7999",
    pictureUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",
    link:"product.html?1",
  },
  {
    id: 2,
    title: "Men Black Action Parkview Lifestyle Shoes",
    brand: "Hush Puppies",
    price: "RS 6999",
    pictureUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg",
    link:"product.html?2",
  },
  {
    id: 3,
    title: "Women Black Solid Lightweight Leather Jacket",
    brand: "BARESKIN",
    price: "RS 9999",
    pictureUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg",
      link:"product.html?3",
    }, 
  {
    id: 4,
    title: "Women Blue Solid Shirt Dress",
    brand: "SASSAFRAS",
    price: "RS 5299",
    pictureUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg",
      link:"product.html?4",
    } 
];

const acce = [
  {
    id: 5,
    title: "Unisex Black Galaxy Fit Fitness Band",
    brand: "Samsung",
    price: "RS 9900",
    pictureUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg",
      link:"product.html?5",
  },
  {
    id: 6,
    title: "Unisex Black & Green Reflex 2.0 Smart Band",
    brand: "Fastrack",
    price: "RS 1999",
    pictureUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg",
      link:"product.html?6",
  },
  {
    id: 7,
    title: "Unisex Silver-Toned Series 3 Smart Watch",
    brand: "Apple",
    price: "RS 31999",
    pictureUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg",
      link:"product.html?7",
  },
  {
    id: 8,
    title: "White 2nd Gen AirPods with Charging Case",
    brand: "Apple",
    price: "RS 14999",
    pictureUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg",
      link:"product.html?8",
    },
  {
    id: 9,
    title: "Gear IconX Black Cord-free Fitness Earbuds",
    brand: "Samsung",
    price: "RS 13990",
    pictureUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg",
      link:"product.html?9",
    }
];
let htmlCode = ` `;
clothings.forEach(function(clothingObject) {
   htmlCode =
    `${htmlCode}
    <article class="card1" onClick=so("${clothingObject.id}")>
    <a href="${clothingObject.link}">
    <div>
    <img src="${clothingObject.pictureUrl}" alt="${clothingObject.imageAlt}">
    </div>
    <div class="card2">
    <h3>${clothingObject.title}</h3>
    <h4>${clothingObject.brand}</h4>
    <h5>${clothingObject.price}</h5>
    </div></a>
  </article>
  `;
});
const c1 = document.querySelector(".clothing");



let htmlCode1 = ` `;
acce.forEach(function(acceObject) {
   htmlCode1 =
    `${htmlCode1}
    <article class="card1" onClick=so("${acceObject.id}")>
    <a href="${acceObject.link}">
    <div>
    <img src="${acceObject.pictureUrl}" alt="${
    acceObject.imageAlt
  }">
    </div>
    <div class="card2">
    <h3>${acceObject.title}</h3>
    <h4>${acceObject.brand}</h4>
    <h5>${acceObject.price}</h5>
    </div></a>
  </article>
  `;
});



$(".clothing").html (htmlCode);
$(".acce").html (htmlCode1);

var retrievedData4 = localStorage.getItem("quentinTarantino2");
if(retrievedData4 != null){s = s + " " + retrievedData4 }
console.log(s)
function cart(){

  var t = document.getElementById("product-id").innerHTML
  if(t != Number){s = s +" "+ t;}
  
  p.push(t)
  console.log(s)
  localStorage.setItem("quentinTarantino", JSON.stringify(p));
  localStorage.setItem("quentinTarantino2", s);
  }
  var p1 = s.trim();
 let cartf = p1.split(" ")
console.log(cartf);
 const count = {};
 cartf.forEach(element => {
  count[element] = (count[element] || 0) + 1;});
count
let a1 = Object.values(count)
let a2 = Object.keys(count)

console.log(a1);
console.log(a2)
  





const productList1 = [
  {
    id: "1",
    name: "Men Navy Blue Solid Sweatshirt",
    preview: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    description: "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    size: [ 1,
      1,
      0,
      1,
      0
    ],
    isAccessory: false,
    brand: "United Colors of Benetton",
    price: 2599
  },
  {
    id: "2",
    name: "Men Black MAMGP T7 Sweat Sporty Jacket",
    preview: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708559-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708542-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-3.jpg"
    ],
    description: "Black solid sporty jacket, has a mock collar, 3 pockets, zip closure, long sleeves, straight hem, unlined lining",
    size: [
      0,
      0,
      0,
      1,
      0
    ],
    isAccessory: false,
    brand: "Puma",
    price: 7999
  },
  {
    id: "3",
    name: "Men Black Action Parkview Lifestyle Shoes",
    preview: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/329c61f4-640b-44b6-98a6-8fa1fe0540191537343756244-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/6ba2ccd4-7f67-486d-abca-ad5a76a9ec701537343756256-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/bfb2efca-a6ca-4290-a680-08977b14d8341537343756267-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/581164ce-30e8-42da-9454-7e49682ad6371537343756277-5.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/54d44ce2-e62b-4157-8b78-a96a6d187be91537343756288-6.jpg"
    ],
    description: "Flaunt an effortless look with this ultimate pair of black coloured formal shoes from the house of Hush Puppies. Let the sun go down for uncomfortable shoes, as you opt for this pair of formal shoes that is crafted using comfortable TPR (thermoplastic rubber) sole. Pair these formal shoes with a shirt and trousers to look absolutely handsome",
    size: [
      1,
      1,
      1,
      1,
      1
    ],
    isAccessory: false,
    brand: "Hush Puppies",
    price: 6999
  },
  {
    id: "4",
    name: "Women Black Solid Lightweight Leather Jacket",
    preview: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673889-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673866-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673837-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673814-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-5.jpg"
    ],
    description: "Black solid leather jacket, has a spread collar, 3 pockets, zip closure, long sleeves, straight hem, polyester lining",
    size: [
      1,
      1,
      1,
      1,
      1
    ],
    isAccessory: false,
    brand: "BARESKIN",
    price: 9999
  },
  {
    id: "5",
    name: "Women Blue Solid Shirt Dress",
    preview: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/8d716804-d63a-4f61-a071-d44c50ae646d1525936414689-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/1356e0d6-5258-4ce6-a3c9-657c08f4bb501525936414668-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/203de2bb-41b6-4819-851e-4ec3998067551525936414644-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/27543aea-9b6c-48fc-8209-27c4444bd1c21525936414632-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-5.jpg"
    ],
    description: "Blue solid woven shirt dress, has a shirt collar, sleeveless, button closure, flared hem",
    size: [
      1,
      1,
      1,
      1,
      1
    ],
    isAccessory: false,
    brand: "SASSAFRAS",
    price: 5200
  },
  {
    id: "6",
    name: "Unisex Silver-Toned Series 3 Smart Watch",
    preview: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/dd1e37da-0de2-417f-abd2-6df8996040eb1558948536526-Apple-Unisex-Smart-Watches-1441558948536225-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/9dfea59a-4d94-43bd-a140-77b58e42e8971558948536512-Apple-Unisex-Smart-Watches-1441558948536225-3.jpg"
    ],
    description: "Low and high heart rate notifications. Emergency SOS. New Breathe watch faces. Automatic workout detection. New yoga and hiking workouts. Advanced features for runners like cadence and pace alerts. New head-to-head competitions. Activity sharing with friends. Personalized coaching. Monthly challenges and achievement awards. Walkie-Talkie, make phone calls, and send messages. Listen to Apple Music and Apple Podcasts. Use Siri in all-new ways. Silver aluminum case. Built-in GPS, GLONASS, Galileo, and QZSS. S3 with dual-core processor. W2 Apple wireless chip. Barometric altimeter Capacity 8GB. Optical heart sensor. 1 Year Manufacture Warranty",
    size: [
      1,
      1,
      1,
      1,
      1,
      1
    ],
    isAccessory: true,
    brand: "Apple",
    price: 31999
  },
  {
    id: "7",
    name: "Unisex Black & Green Reflex 2.0 Smart Band",
    preview: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/1d9bda95-b63e-4312-bbfa-c25b377c96c21550920383126-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/2261262d-8f2f-4451-9584-9d0cb90e48cf1550920383155-3.jpg"
    ],
    description: "The new Fastrack Reflex 2.0 Activity Tracker comes with all the features one could ask for! It comes in three colours that you can use to accentuate your athleisure, casual or party attire. Not only does it look uber cool in this cool grey & electric blue accent, further the TPU (Thermoplastic Polyurethane) strap ensures it gives you a snugfit while staying light on your wrist! It is a fitness band with smartwatch features. The band has Steps, Distance and Calorie Tracker, Sleep Tracker, Call & SMS Alerts, OLED Display, 10 Days Power Reserve, Vibration Alarm, Sedentary Reminder and is IPX6 Water Resistant. This band is compatible with both IOS and Android OS. It has a secure 'Pin' based pairing with your phone, for better protection. And, all of this at apricethat is hard match anywhere else with quality and promise of thebrandFastrack. Move on and get one for yourself!",
    size: [
      1,
      1,
      1,
      1,
      1
    ],
    isAccessory: true,
    brand: "Fastrack",
    price: 1999
  },
  {
    id: "8",
    name: "Unisex Black Galaxy Fit Fitness Band",
    preview: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/74a60845-202d-4cea-9531-e16931bd994a1561362162628-Samsung-Galaxy-Fit-4801561362161527-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/eb5f1aca-1b71-49fa-9c41-aba51f6b01941561362162569-Samsung-Galaxy-Fit-4801561362161527-4.jpg"
    ],
    description: "Keep up your routine for even longer. With plenty of power to last throughout your daily workouts, you can pack in those longer hours to reach your fitness goals. What's more, you won't have to worry about disruptive battery discharge when tracking your activity.",
    size: [
      1,
      1,
      1,
      1,
      1
    ],
    isAccessory: true,
    brand: "Samsung",
    price: 9990
  },
  {
    id: "9",
    name: "Gear IconX Black Cord-free Fitness Earbuds",
    preview: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/0423d170-fb49-450f-aef9-bbeb7003554d1554802772913-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/94813947-e557-4755-9d3d-22529436a1681554802772853-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-5.jpg"
    ],
    description: "Speak commands via Bixby or Google Voice and control your music with just a tap or swipe. Meet your fitness goals with speed, distance, calorie tracking and real-time voice guidance. Find the perfect fit with multiplesize of ear-tips and wing-tips right in the box. iOS/Mac users: Samsung Gear IconX can be used to stream music or take calls from your iOS handset or tablet. Fitness Functions that require the use of Samsung S-Health app are not available for iOS. 5 hours of Bluetooth streaming, 7 hours of MP3 listening, 4 hours talk time. Warranty: 6 months. Warranty provided by thebrandowner / manufacturer",
    size: [
      1,
      1,
      1,
      1,
      1
    ],
    isAccessory: true,
    brand: "Samsung",
    price: 13990
  },
  {
    id: "10",
    name: "White 2nd Gen AirPods with Charging Case",
    preview: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/9b14396e-0ee1-46b4-833c-4a2c35b5ce661558948436160-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/27569983-fada-4874-9306-14c945c234781558948436148-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-3.jpg"
    ],
    description: "AirPods with Charging Case: More than 24 hours listening time,3 up to 18 hours talk time8. AirPods (single charge): Up to 5 hours listening time,1 up to 3 hours talk time2. 15 minutes in the case equals up to 3 hours listening time4 or up to 2 hours talk time. Warranty: 1 year. Warranty provided byBrandManufacturer",
    size: [
      1,
      1,
      1,
      1,
      1
    ],
    isAccessory: true,
    brand: "Apple",
    price: 14999
  }
];
var k2 = 0;
var k3 = 0;
let tep1 = 0;
let htmlCode3 = ` `;
productList1.forEach((element)=> {
  if(a2.indexOf(element.id) != -1){
    
   htmlCode3 =
    `${htmlCode3} <div class="mbox1"><div ><img id="chepre" src="${element.photos[0]}" alt=""></div>
    <div class="prebox"><h4>${element.name}</h4>
    <h5><span>x</span><span>${a1[tep1]}</span></h5>
    <h5><span>Amount:  </span><span>${element.price}</span></h5>
  </div></div>
`;

k2 += a1[tep1] * element.price;
k3 += a1[tep1];
console.log(k2)
tep1 = tep1 + 1;
} });
$(".boximg").html (htmlCode3);
$("#final").html (k2);
$("#cart-count").html (k3);
  



    var productDetail = productList1[a]
    names = productDetail.name;
    id = productDetail.id;
    imageSrc = productDetail.preview;
    brand = productDetail.brand;
    price = productDetail.price;
    description = productDetail.description;
    photo0 = productDetail.photos[0];
    photo1 = productDetail.photos[1];
    photo2 = productDetail.photos[2];
    photo3 = productDetail.photos[3];
    photo4 = productDetail.photos[4];
    photo5 = productDetail.photos[5];

    var productImg = document.getElementById("product-name");
    productImg.innerHTML = names;
    var productImg = document.getElementById("product-id");
    productImg.innerHTML = id;
    var productImg = document.getElementById("product-brand");
    productImg.innerHTML = brand;
    var productImg = document.getElementById("product-price");
    productImg.innerHTML = price;
    var productImg = document.getElementById("product-discrition");
    productImg.innerHTML = brand;
    var productImg = document.getElementById("hello");
    productImg.src = imageSrc;
    var productImg0 = document.getElementById("id0");
    productImg0.src = photo0;
    var productImg1 = document.getElementById("1");
    productImg1.src = photo1;
    var productImg2 = document.getElementById("2");
    productImg2.src = photo2;
    var productImg3 = document.getElementById("3");
    productImg3.src = photo3;
    var productImg4 = document.getElementById("4");
    productImg4.src = photo4;
    var productImg5 = document.getElementById("5");
    productImg5.src = photo5;



 
    





document.getElementById("4").style.border = "2px solid #009688";
function what(s)
{
me();
console.log(s);
switch(s) {
case 4:
  document.getElementById("hello").src = photo4;
  document.getElementById("4").style.border = "2px solid #009688";
  break;
case 0:
  document.getElementById("hello").src = photo0 ;
  document.getElementById("id0").style.border = "2px solid #009688";
  break;
case 1:
  document.getElementById("1").style.border = "2px solid #009688";
  document.getElementById("hello").src = photo1;

  break;
case 2:
  document.getElementById("2").style.border = "2px solid #009688";
  document.getElementById("hello").src =photo2;
  break;
case 3:
  document.getElementById("3").style.border = "2px solid #009688";
  document.getElementById("hello").src =  photo3;
  break;
}
}
function me(){
document.getElementById("id0").style.border = "0px solid #009688";
document.getElementById("1").style.border = "0px solid #009688";
document.getElementById("2").style.border = "0px solid #009688";
document.getElementById("3").style.border = "0px solid #009688";
document.getElementById("4").style.border = "0px solid #009688";}




