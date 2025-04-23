import React, { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [offset, setOffset] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const containerRef = useRef(null);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Rajalakshmi",
      username: "ambedkar_student_01",
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "Ambedkar Arakattalai has transformed my education. The free coaching helped me score 95% in my 12th exams. The teachers are dedicated and the study materials are excellent."
    },
    {
      id: 2,
      name: "Arun Kumar",
      username: "ambedkar_scholar_02",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "Thanks to Ambedkar Arakattalai, I cleared NEET in my first attempt. The evening classes after school made all the difference. This is more than a tuition center - it's a movement!"
    },
    {
      id: 3,
      name: "Kavitha",
      username: "ambedkar_graduate_03",
      imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
      content: "As a first-generation learner from a village near Madurai, Ambedkar Arakattalai gave me the confidence to pursue engineering. Their free computer classes changed my life."
    },
    {
      id: 4,
      name: "Suresh",
      username: "ambedkar_parent_04",
      imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
      content: "My two children have been attending Ambedkar Arakattalai for 3 years. Not just academics, they teach social awareness and Dr. Ambedkar's principles. Truly a noble initiative."
    },
    {
      id: 5,
      name: "Ramesh",
      username: "ambedkar_volunteer_05",
      imageUrl: "https://randomuser.me/api/portraits/women/33.jpg",
      content: "I volunteer here on weekends. Seeing underprivileged students get quality education brings joy. The library with Dalit literature is exceptional. Periyar and Ambedkar would be proud!"
    },
    {
      id: 6,
      name: "Dhanush Kumar",
      username: "ambedkar_alumni_06",
      imageUrl: "https://randomuser.me/api/portraits/men/58.jpg",
      content: "After benefitting from Ambedkar Arakattalai, I now donate part of my IT salary to support them. Their 'Each One Teach One' program is creating real social change in Tamil Nadu."
    }
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate items per row based on screen size
  const getItemsPerRow = () => {
    if (windowWidth < 640) return 1;     // Mobile
    if (windowWidth < 1024) return 2;    // Tablet
    return 3;                            // Desktop
  };

  const itemsPerRow = getItemsPerRow();
  
  // Duplicate the testimonials for seamless looping
  const firstRowItems = [...testimonials, ...testimonials];
  const secondRowItems = [...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3)];

  // Animation logic
  useEffect(() => {
    let animationFrameId;
    let speed = windowWidth < 640 ? 0.5 : windowWidth < 1024 ? 0.75 : 1; // Adjust speed based on screen size
    let currentOffset = 0;
    
    const animate = () => {
      // Calculate the width of one complete set
      const calculateRowWidth = (rowRef) => {
        if (!rowRef.current) return 1000;
        
        const cardWidth = rowRef.current.querySelector('.testimonial-card').offsetWidth;
        const computedStyle = window.getComputedStyle(rowRef.current);
        const gap = parseInt(computedStyle.gap || '24px');
        
        return (cardWidth + gap) * (testimonials.length / 2);
      };

      currentOffset += speed;
      
      // Reset when we've scrolled one full set width
      if (firstRowRef.current && secondRowRef.current) {
        const firstRowWidth = calculateRowWidth(firstRowRef);
        
        if (currentOffset >= firstRowWidth) {
          currentOffset = 0;
        }
      }
      
      setOffset(currentOffset);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [windowWidth, testimonials.length]);

  return (
    <section id='testimonials' className="bg-gray-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16">
          <div className="inline-block px-4 py-1 rounded-full text-orange-500 border border-orange-200 bg-orange-50 text-sm font-medium mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our students say</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        {/* First row - moves left to right */}
        <div className="relative mb-8 overflow-hidden">
          <div 
            ref={firstRowRef}
            className="flex gap-4 sm:gap-6 w-max" 
            style={{ transform: `translateX(${-offset}px)` }}
          >
            {firstRowItems.map((testimonial, index) => (
              <TestimonialCard 
                key={`first-${testimonial.id}-${index}`} 
                testimonial={testimonial} 
                highlight="Ambedkar"
                screenSize={windowWidth}
              />
            ))}
          </div>
        </div>
        
        {/* Second row - moves right to left */}
        <div className="relative overflow-hidden">
          <div 
            ref={secondRowRef}
            className="flex gap-4 sm:gap-6 w-max" 
            style={{ transform: `translateX(${offset}px)` }}
          >
            {secondRowItems.map((testimonial, index) => (
              <TestimonialCard 
                key={`second-${testimonial.id}-${index}`} 
                testimonial={testimonial} 
                highlight="Ambedkar"
                screenSize={windowWidth}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, highlight, screenSize }) {
  // Adjust card width based on screen size
  const getCardWidth = () => {
    if (screenSize < 640) return 'w-full max-w-xs';    // Mobile
    if (screenSize < 1024) return 'w-72';              // Tablet
    return 'w-80';                                     // Desktop
  };

  return (
    <div className={`testimonial-card bg-white rounded-2xl shadow-md p-5 sm:p-6 ${getCardWidth()} flex-none`}>
      <div className="mb-3 sm:mb-4 text-gray-400 text-3xl sm:text-4xl">"</div>
      <p className="text-gray-700 text-sm sm:text-base mb-4">
        {highlight ? (
          testimonial.content.split(highlight).map((part, i, arr) => 
            i < arr.length - 1 ? (
              <React.Fragment key={i}>
                {part}<span className="text-orange-500 font-medium">{highlight}</span>
              </React.Fragment>
            ) : part
          )
        ) : (
          testimonial.content
        )}
      </p>
      <div className="flex items-center mt-4 sm:mt-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full overflow-hidden mr-3">
          <img 
            src={testimonial.imageUrl} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/48";
            }}
          />
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
          <p className="text-xs sm:text-sm text-gray-500">{testimonial.username}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials