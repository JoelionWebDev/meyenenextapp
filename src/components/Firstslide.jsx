// "use client";
// // components/ImageSlider.js
// import { useState, useEffect } from "react";
// import Image from "next/image";
// // import Slider1 from "@/assets/images/solar1.jpg";
// // import Slider2 from "@/assets/images/solar2.jpg";
// // import Slider3 from "@/assets/images/solar3.jpg";

// const ImageSlider = () => {
//   const images = [
//     {
//       id: "1",
//       src: "/solar1.jpg", // Put your image paths here
//       alt: "First Image",
//       title: "Estate Solar Installation – Lekki, Lagos:",
//       text: "Installed a solar grid system powering an entire residential estate, reducing energy bills by 60%.",
//     },
//     {
//       id: "2",
//       src: "/solar2.jpg",
//       alt: "Second Image",
//       title: "Estate Solar Installation – Lekki, Lagos:",
//       text: "Installed a solar grid system powering an entire residential estate, reducing energy bills by 60%.",
//     },
//     {
//       id: "3",
//       src: "/solar3.jpg",
//       alt: "Third Image",
//       title: "Desert Escapades",
//       text: "Experience the vastness of the desert and its endless sands.",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to move to the next image
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000); // Change image every 4 seconds
//     return () => clearInterval(interval); // Clean up the interval on component unmount
//   }, []);

//   return (
//     <div className="relative w-full h-[500px]">
//       {/* Slide container */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//         <div
//           className="flex transition-all duration-1000"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//           }}
//         >
//           {images.map((image, index) => (
//             <div key={index} className="w-full flex-shrink-0">
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 layout="fill"
//                 objectFit="cover"
//                 className="w-full h-full"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Text on top of the image */}
//       <div
//         className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-6 text-center text-white opacity-0 transition-opacity duration-1000"
//         style={{
//           opacity: currentIndex === 0 ? 1 : 0,
//         }}
//       >
//         <div>
//           <h2 className="text-4xl font-bold">{images[currentIndex].title}</h2>
//           <p className="mt-4 text-lg">{images[currentIndex].text}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
