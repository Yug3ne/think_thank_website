import React from 'react'

const Gallery = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
    {[
      { name: "Arts and crafts", imgSrc: "/gallery/kenzo.JPG" },
      {
        name: "Help Lab",
        imgSrc:
          "/gallery/help_day.JPG",
      },
      { name: "Smile for the camera", imgSrc: "gallery/kenzo_frank.JPG" },
      { name: "Out of touch", imgSrc: "gallery/kenzo_shakina.jpg" },
      { name: "This bottle is huge", imgSrc: "/MufasaAlu/dukeinclass.jpg" },
      {name: 'Awwww', imgSrc:'/gallery/kids.JPG'}
    ].map((member, index) => (
      <div key={index} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
        <div className="group relative bg-gray-100 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
          <img
            alt={member.name}
            className="w-full h-96 object-cover group-hover:opacity-90"
            src={member.imgSrc}
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-transparent bg-opacity-75 text-center rounded-b-xl">
            <h4 className="font-semibold text-lg text-white">
              {member.name}
            </h4>
          </div>
        </div>
      </div>
    ))}
  </div>  
  )
}

export default Gallery