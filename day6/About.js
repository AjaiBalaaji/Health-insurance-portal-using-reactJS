import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
export default function App() {
   const sliderImages = [
      {
         url: "https://i.pinimg.com/236x/ae/ed/ea/aeedeac80aa2f35905a738ba3d4acc28.jpg",
      },
      {
         url: "https://www.oho.com/sites/default/files/2023-03/Untitled%20design%20%289%29.png",
      },
      {
         url: "https://1000logos.net/wp-content/uploads/2021/08/LIC-Logo-768x483.png",
      },
      {
         url: "https://www.shutterstock.com/image-photo/little-girl-play-bedroom-hold-syringe-1809606682",
      },
      {
         url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcR3IVlvufXIDZXxq0O8SVqwU2HeO6y7as0OXJl-YT55BA&s",
      },
      {
         url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQs_7aafRRY4vEbWz2wydowaogMmGI7mRVG6MQfZVtKDFXUGqt5iF-Mu0AYMQBEeznPkU&usqp=CAU",
      },
      {
         url: "https://smartslider3.com/wpcontent/uploads/2019/01/photo_slideshow.jpg",
      },
   ];
   return (
      <div>
         <h3>
            {" "}
            Creating the image slider using the react-simple-image-slider
         </h3>
         <SimpleImageSlider
            width={500}
            height={500}
            images={sliderImages}
            showNavs={true}
         />
         <div>
            <p></p>
         </div>
      </div>
   );
}