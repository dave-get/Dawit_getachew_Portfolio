// "use client";

// // import { motion } from "framer-motion";
// import Image from "next/image";
// import Marquee from "react-fast-marquee";

// const images = [
//   "/icon/figma.svg",
//   "/icon/react.svg",
//   "/icon/node.svg",
//   "/icon/next.svg",
//   "/icon/javascript.svg",
//   "/icon/css.svg",
//   "/icon/mongo.svg",
//   "/icon/express.svg",
// ];

// export default function Teckstack() {
//   return (
//     <div className="flex flex-col items-center w-full space-y-4">
//       <p className="text-xl text-[#FA9999] font-keania">Teck Stack</p>
//       <div className=" py-2 w-full shadow-[inset_30px_0_15px_-10px_rgba(255,255,255,0.2),inset_-30px_0_15px_-10px_rgba(255,255,255,0.2)] ">
//         <Marquee className="" speed={50} gradient={false}>
//           {[...images].map((src, index) => (
//             <div key={index} className="mx-20 flex items-center justify-center">
//               <Image
//                 src={src}
//                 alt={`Image ${index}`}
//                 width={50}
//                 height={50}
//                 className="rounded-md opacity-50 w-5 md:w-8 lg:w-10"
//               />
//             </div>
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   );
// }
