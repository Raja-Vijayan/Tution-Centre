const Gallery = ({ animatedElements }) => {
  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D", alt: "Gallery Image 1" },
    { id: 2, src: "https://plus.unsplash.com/premium_photo-1683887033741-f7ae791b4831?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8", alt: "Gallery Image 2" },
    { id: 3, src: "https://images.unsplash.com/photo-1573894999291-f440466112cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8", alt: "Gallery Image 3" },
    { id: 4, src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D", alt: "Gallery Image 4" },
    { id: 5, src: "https://images.unsplash.com/photo-1573894998033-c0cef4ed722b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8", alt: "Gallery Image 5" },
    { id: 6, src: "https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVhY2hpbmclMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D", alt: "Gallery Image 6" }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-on-scroll ${animatedElements['gallery-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`} id="gallery-title">Our Gallery</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className={`group relative overflow-hidden rounded-lg shadow-lg h-64 animate-on-scroll ${
                animatedElements[`gallery-item-${image.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } transition-all duration-700 delay-${index * 100}`}
              id={`gallery-item-${image.id}`}
            >
              <img 
                src={`${image.src}/${400 + image.id * 10}/${300 + image.id * 5}`} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-lg">Project Title {image.id}</h3>
                  <p className="text-gray-200 text-sm">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Gallery ;