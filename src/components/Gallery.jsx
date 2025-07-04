
// export default Gallery;
import React, { useState } from 'react';
import Modal from '../components/ModalViewer';

const galleryData = {
  Weddings: [
    // Add 8-12 images
   " https://i.pinimg.com/736x/0c/5c/bd/0c5cbd02ff00827dd9995b586dffd2f2.jpg",
"https://i.pinimg.com/736x/bc/79/d3/bc79d31ca415ff4f9422c7ac82ec6a76.jpg",
"https://i.pinimg.com/736x/b0/24/04/b02404f527e632f2f12f4367aa4dded8.jpg",
"https://i.pinimg.com/736x/69/11/42/69114291a662dec933723b81ee6a01c6.jpg",
"https://i.pinimg.com/736x/88/7b/82/887b826c9e2ef54eac21180990658296.jpg",
"https://i.pinimg.com/736x/78/49/62/78496231ebdc3b6c540dc532ffc006ef.jpg",
"https://i.pinimg.com/736x/7a/fe/7e/7afe7e901162e0cd43242e31ce4f9bb3.jpg",
"https://i.pinimg.com/736x/cb/2b/45/cb2b45d84d31a788380abcab4d1c246a.jpg",
"https://i.pinimg.com/736x/ba/19/97/ba19971151cdcf4a461cd1ffc6b9081f.jpg",
"https://i.pinimg.com/736x/9e/60/2f/9e602fe35a9a6ecfd1f1a917e9b59303.jpg",
"https://i.pinimg.com/736x/28/9d/ac/289dacde31fead42339d959c975a24f7.jpg",
"https://i.pinimg.com/736x/d7/f4/75/d7f4750749a0f1104f56b85ec176cca0.jpg"
  ],
  'Birthdays & Private Parties': [
    // Add 6–9 images
    "https://i.pinimg.com/474x/c2/99/67/c29967813157903f60743b3925ef1df0.jpg",
"https://i.pinimg.com/736x/96/c6/53/96c6539c6362671bd936835aff501355.jpg",
"https://i.pinimg.com/736x/39/ad/ab/39adab1a89ec9cdb19a1d0cd54c9de56.jpg",
"https://i.pinimg.com/736x/19/97/21/199721eff0228eca5efe3e559be6d0f9.jpg",
"https://i.pinimg.com/736x/1b/38/f6/1b38f61659abda454cdc7a5158f1b2b8.jpg",
"https://i.pinimg.com/736x/fc/36/81/fc3681b4b579226a929cec33daacdd4d.jpg",
"https://i.pinimg.com/736x/42/e9/90/42e990160fae32a9dbc0f75554f847a4.jpg",
"https://i.pinimg.com/736x/95/c1/eb/95c1eb0b5f957420e309c3cf2d03e1f2.jpg",
"https://i.pinimg.com/736x/0b/e9/ec/0be9ec6e615c93f9524666aeaeab4a4a.jpg",
"https://i.pinimg.com/736x/81/93/4f/81934f6cad814afba6e9589b03308109.jpg"
  ],
  Haldi: [
    // Add 6–9 images
    "https://i.pinimg.com/736x/4e/fb/02/4efb020a8cd1ea7c73eb26bc663133d9.jpg",
"https://i.pinimg.com/736x/48/ed/d4/48edd4d8a12322b16b6ae8b75ddf4b4b.jpg",
"https://i.pinimg.com/736x/04/41/c5/0441c5c6709c61498dde7dcdc0850111.jpg",
"https://i.pinimg.com/736x/85/62/01/856201803d50a63fff9be0753073a807.jpg",
"https://i.pinimg.com/736x/3c/b3/0c/3cb30c8b4c1b046929c12fa4438fef07.jpg",
"https://i.pinimg.com/736x/72/c7/f5/72c7f5cbd0f4bfa6fd275167e48e6f86.jpg",
"https://i.pinimg.com/736x/8c/6b/a0/8c6ba05ebd19c99249c1545909f7dbf3.jpg",
"https://i.pinimg.com/736x/3e/ae/ae/3eaeaee3ff5e53c027b24577bc0b423f.jpg",
"https://i.pinimg.com/736x/fd/c2/ee/fdc2ee093efbc164a8efe975a1801186.jpg"
  ],
  'Baby Showers': [
    // Add 6–8 images
   "https://i.pinimg.com/736x/3e/8b/f7/3e8bf757ee134bc8bb272e9206b4bc39.jpg",
"https://i.pinimg.com/736x/1c/0d/5c/1c0d5ce66053e23af4b17f31c9426439.jpg",
"https://i.pinimg.com/736x/38/de/a7/38dea7de82f5fccf6f2514a9c0c33b6b.jpg",
"https://i.pinimg.com/736x/e4/dc/c1/e4dcc1026e061e73e864e61d929d49b6.jpg",
"https://i.pinimg.com/736x/de/fb/5b/defb5b41a3304687560a340dfbc48a41.jpg",
"https://i.pinimg.com/736x/f2/5e/4b/f25e4b7e7065a0dddea9cb8e26748d78.jpg",
"https://i.pinimg.com/736x/3c/20/64/3c2064ba5f85066950fa39458fc85077.jpg",
"https://i.pinimg.com/736x/55/0a/ce/550acefc4bcdbe871a429fbbc694af74.jpg",
"https://i.pinimg.com/736x/d9/18/49/d9184930f4ba68bc6af0e22341b1c96b.jpg"
  ],
  Engagement: [
    // Add 4–6 images
    "https://i.pinimg.com/736x/7c/59/fa/7c59fa603fee6890324534dc4e92a4a8.jpg",
"https://i.pinimg.com/736x/7d/dd/b0/7dddb0b0f06b6d74ff180ec5aa066838.jpg",
"https://i.pinimg.com/736x/1a/33/43/1a3343a1f267b4c0f571ae14072d8f8f.jpg",
"https://i.pinimg.com/736x/76/c4/17/76c4173d483244f0d71a6188f647d4b8.jpg",
"https://i.pinimg.com/736x/ed/94/96/ed94966c47ff7adc1213d609073226f7.jpg",
"https://i.pinimg.com/736x/cd/1d/86/cd1d86712282a63473e64947f1770b90.jpg",
"https://i.pinimg.com/736x/bd/a4/1e/bda41ecf8f46f526f26290f4c5ba3595.jpg",
"https://i.pinimg.com/736x/10/53/fb/1053fb55c6732813a1dae482f2fc172b.jpg",
"https://i.pinimg.com/736x/1b/86/5a/1b865af0c9d7b072a1b2edeb1b2688cd.jpg",
"https://i.pinimg.com/736x/4c/d4/e6/4cd4e6fc45f50df9afc478f8ac62b38e.jpg"
  ],
  Sangeet: [
    // Add 5–6 images
    "https://i.pinimg.com/736x/45/e1/4d/45e14d3efe036c3d4ca8eb32083d7648.jpg",
"https://i.pinimg.com/736x/22/b1/7d/22b17daf66db5a68008b6cdf15bae180.jpg",
"https://i.pinimg.com/736x/91/31/57/91315708e72025addad04c23cb8949fb.jpg",
"https://i.pinimg.com/736x/ca/94/5b/ca945bc0eb416fef9866b7ca3adf84e5.jpg",
"https://i.pinimg.com/736x/ba/cb/5a/bacb5afdb126b5b6d9e3318c71eb3eae.jpg",
"https://i.pinimg.com/736x/b7/52/5c/b7525c9a46679ddf79d7c04057047f06.jpg",
"https://i.pinimg.com/736x/02/f0/a6/02f0a6fdfb260d0126fe3d863302d392.jpg",
"https://i.pinimg.com/736x/f5/8d/b8/f58db82bc4f3be1b1e87096feb6b404c.jpg",
"https://i.pinimg.com/736x/f4/cb/02/f4cb022e25fd08684623a06142cdc209.jpg"
  ],
  'Corporate Events': [
    // Add 6–8 images
    "https://i.pinimg.com/736x/dd/0e/4c/dd0e4c180546a402a9cd482bfb23c98f.jpg",
"https://i.pinimg.com/736x/76/eb/ae/76ebaedc30fe16692627ecda5acaa36b.jpg",
"https://i.pinimg.com/736x/31/d0/37/31d037739c96436b21d1344b2ea2c0d7.jpg",
"https://i.pinimg.com/736x/13/e4/20/13e420e6678858372469a5f5c9473eea.jpg",
"https://i.pinimg.com/736x/c5/65/23/c56523241b53010713d0cf5e56d5862f.jpg",
"https://i.pinimg.com/736x/d6/8d/ae/d68dae79fa10014f1ad96f31641455a1.jpg",
"https://i.pinimg.com/736x/d7/e3/b2/d7e3b2ff3c6f611924d98e94b7f5bd3c.jpg",
"https://i.pinimg.com/736x/dd/0e/4c/dd0e4c180546a402a9cd482bfb23c98f.jpg"
  ],
  'House Warming': [
    // Add 3–4 images
    "https://i.pinimg.com/736x/33/75/96/337596a9493f1ee22779b772bf022e8c.jpg",
"https://i.pinimg.com/736x/5c/ea/55/5cea5593007d7fe4a9bffb3761c31520.jpg",
"https://i.pinimg.com/736x/1a/12/81/1a1281e7d802be818b457aedb4e4c0bc.jpg",
"https://i.pinimg.com/736x/6d/07/1a/6d071afcad91cdf45c16fe1ff6838f7c.jpg",
"https://i.pinimg.com/736x/4a/ee/99/4aee9944c69c1641ef432995cb84e2eb.jpg",
"https://i.pinimg.com/736x/60/b8/77/60b8779d3196a85029d13bfca198ee0c.jpg"
  ],
  'Cradle Ceremony': [
    // Add 4–5 images
    "https://i.pinimg.com/736x/e4/dc/c1/e4dcc1026e061e73e864e61d929d49b6.jpg",
"https://i.pinimg.com/736x/32/ca/b9/32cab96fce85c9b86684301c9b2bb5cf.jpg",
"https://i.pinimg.com/736x/07/d3/61/07d36181af40be29e3ff369aed7b0799.jpg",
"https://i.pinimg.com/736x/2e/62/92/2e6292ed9145e0988b9df4c168f6b0c6.jpg",
"https://i.pinimg.com/736x/2b/5f/62/2b5f6222ae70c8395b6f6d2c5bd88375.jpg",
"https://i.pinimg.com/736x/39/f4/77/39f47705f6a1fa0404550fcef2184238.jpg"
  ],
  'Dhoti & Half Saree': [
    // Add 4–5 images
    "https://i.pinimg.com/736x/96/23/19/9623197a6bddf0ec2937bea6c6788afd.jpg",
"https://i.pinimg.com/736x/f3/5d/29/f35d29a142ee7652dac3885158449671.jpg",
"https://i.pinimg.com/736x/ed/0b/69/ed0b69be1c3e23276e862908f54617bd.jpg",
"https://i.pinimg.com/736x/28/65/9f/28659f06ec726ed3ac4672e87cc15dfb.jpg",
"https://i.pinimg.com/736x/52/6e/b3/526eb36c1223b9b354309f3442cd3a2c.jpg",
"https://i.pinimg.com/736x/62/6b/fe/626bfe6ac53f3ddd9e8da09cb4760bde.jpg",
"https://i.pinimg.com/736x/b3/19/43/b31943c5ed19035de806e4fc65f50996.jpg"
  ],
  'Festival Decor Events': [
    // Add 4–5 images
    "https://i.pinimg.com/736x/a4/cb/c2/a4cbc23e3781bd9e03b220b854997002.jpg",
"https://i.pinimg.com/736x/fa/d9/d1/fad9d1f9e525df617fffc1164aab9ecf.jpg",
"https://i.pinimg.com/736x/19/57/ab/1957ab0f34dc8b3ce1dd586eaed8797e.jpg",
"https://i.pinimg.com/736x/cf/7f/02/cf7f023dcf96d1fbb64278fe5338f4eb.jpg",
"https://i.pinimg.com/736x/3b/a8/4f/3ba84fead9068697e9562261a91c80f9.jpg",
"https://i.pinimg.com/736x/cd/f2/72/cdf272b345471ca392d60d2e9a270af5.jpg"
  ],
  
  'Pre-Wedding Shoots': [
    // Add 3–4 images
    "https://i.pinimg.com/736x/05/7e/13/057e13927f46af5b9cf5c744a26175d4.jpg",
"https://i.pinimg.com/736x/e0/9b/19/e09b191e4a9edbb042b14ea8e81f5f7c.jpg",
"https://i.pinimg.com/736x/99/06/6b/99066bf902ca377de56115cd466e72e4.jpg",
"https://i.pinimg.com/736x/50/a2/d1/50a2d15dd743a2130e57941561b302be.jpg",
"https://i.pinimg.com/736x/ee/35/61/ee35618fb87ed7fcae34febc2bffc5a2.jpg",
"https://i.pinimg.com/736x/df/55/94/df5594b8280148f56f0f164c2e86e3d0.jpg"
  ],
  'Anniversary': [
    // Add 3–4 images
    "https://i.pinimg.com/736x/ec/18/71/ec18719cc74862987ac192d83bcfdee0.jpg",
"https://i.pinimg.com/736x/2e/ab/49/2eab49299954438e0b7aac1e6aac0d83.jpg",
"https://i.pinimg.com/736x/54/83/a2/5483a2ccec0dae8b261eec8e481b49b6.jpg",
"https://i.pinimg.com/736x/7e/65/0b/7e650b5848d4f08454026e1d0f10ccd3.jpg",
"https://i.pinimg.com/736x/81/d6/7a/81d67aa17dfd18909a86d9d02701bf10.jpg",
"https://i.pinimg.com/736x/f1/c9/a1/f1c9a1c35f168759890104f283689c09.jpg",
"https://i.pinimg.com/736x/36/9a/71/369a71b6f69700c8fa1ce46bc2fa3022.jpg",
"https://i.pinimg.com/736x/33/31/d5/3331d5bbd143cafc0949630bb95bb699.jpg",
"https://i.pinimg.com/736x/f7/5f/a8/f75fa8c38041000b5456a5cddd4cad9b.jpg"
  ]
};


// const Gallery = () => {
//   const categories = Object.keys(galleryData);
//   const [selectedCategory, setSelectedCategory] = useState(categories[0]);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const openLightbox = (img) => setSelectedImage(img);
//   const closeLightbox = () => setSelectedImage(null);

//   return (
//     <div className="bg-[#E6DFFF] py-24 md:py-32">
//       {/* Heading */}
//       <div className="container mx-auto px-4 text-center">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair text-black">
//           Event Moments
//         </h1>
//         <p className="text-xl max-w-3xl mx-auto text-gray-700 font-sans">
//           Cherished Celebrations Captured Beautifully
//         </p>
//       </div>

//       {/* Category Buttons */}
//       <div className="mt-8 overflow-x-auto whitespace-nowrap scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
//         <div className="inline-flex space-x-3 px-2" style={{ WebkitOverflowScrolling: 'touch' }}>
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-4 py-2 rounded-full transition duration-300 border shadow-sm text-sm sm:text-base
//                 ${selectedCategory === category
//                   ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold shadow-lg'
//                   : 'bg-white text-gray-700 hover:bg-purple-100'}`}
//               style={{ WebkitAppearance: 'none' }}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Gallery Grid */}
//       <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-16">
//         {galleryData[selectedCategory].map((img, idx) => (
//           <div
//             key={idx}
//             className="overflow-hidden rounded-xl shadow-md cursor-pointer transform transition duration-300 hover:scale-105"
//             onClick={() => openLightbox(img)}
//           >
//             <img
//               src={img}
//               alt={`${selectedCategory} ${idx + 1}`}
//               className="w-full h-60 object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Modal Viewer */}
//       {selectedImage && <Modal imgSrc={selectedImage} onClose={closeLightbox} />}
//     </div>
//   );
// };

// export default Gallery;
const Gallery = () => {
  const categories = Object.keys(galleryData);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (img) => setSelectedImage(img);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="bg-[#E6DFFF] py-24 md:py-32">
      {/* Heading */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair text-black">
          Event Moments
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-700 font-sans">
          Cherished Celebrations Captured Beautifully
        </p>
      </div>

      {/* Category Filter (Dropdown for mobile, buttons for desktop) */}
      <div className="mt-10 px-4 sm:px-6 md:px-16">
        {/* Mobile Dropdown */}
        <div className="block sm:hidden mb-6">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            <option disabled>Filter by</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition duration-300 border shadow-sm text-sm sm:text-base
                ${selectedCategory === category
                  ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-100'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-16">
        {galleryData[selectedCategory].map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-md cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => openLightbox(img)}
          >
            <img
              src={img}
              alt={`${selectedCategory} ${idx + 1}`}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal Viewer */}
      {selectedImage && <Modal imgSrc={selectedImage} onClose={closeLightbox} />}
    </div>
  );
};

export default Gallery;
