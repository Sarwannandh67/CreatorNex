
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechVision Inc.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      stars: 5,
      quote: "Working with this agency has been transformative for our brand. They delivered a complete digital strategy that increased our leads by 200% within the first quarter!"
    },
    {
      id: 2,
      name: "Michael Chang",
      company: "Bright Solutions",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      stars: 5,
      quote: "Exceptional service from start to finish. Their team took the time to understand our business goals and delivered a website that perfectly captures our brand essence."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      company: "GreenLife Organics",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      stars: 5,
      quote: "The SEO campaign they created for us yielded immediate results. Our organic traffic has increased by 150%, and we're now ranking for keywords we never thought possible."
    },
    {
      id: 4,
      name: "David Wilson",
      company: "Metro Architects",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      stars: 4,
      quote: "Their creative approach to our social media strategy completely revitalized our online presence. We've seen a 300% increase in engagement and a significant boost in conversions."
    },
    {
      id: 5,
      name: "Olivia Taylor",
      company: "Elite Fashion",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      stars: 5,
      quote: "The e-commerce platform they built for us is not only beautiful but incredibly functional. Our sales have increased by 85% since the launch, and customer feedback has been overwhelmingly positive."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Get visible testimonials (current plus 1 on desktop)
  const getVisibleTestimonials = () => {
    const result = [testimonials[currentIndex]];
    const nextIndex = (currentIndex + 1) % testimonials.length;
    result.push(testimonials[nextIndex]);
    return result;
  };

  return (
    <section id="testimonials" className="section-padding gradient-bg text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-white mx-auto mb-8 rounded-full"></div>
          <p className="text-lg max-w-3xl mx-auto text-white/80">
            Don't just take our word for it. Hear what our clients have to say about
            their experience working with our team.
          </p>
        </div>

        <div className="relative px-4 md:px-10">
          {/* Desktop Testimonial Carousel */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {getVisibleTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/20"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-white/70">{testimonial.company}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < testimonial.stars ? "currentColor" : "none"}
                          className={i < testimonial.stars ? "text-yellow-400" : "text-gray-400"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="italic text-white/90">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>

          {/* Mobile Testimonial Carousel */}
          <div className="md:hidden">
            <div
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/20"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-white/70">{testimonials[currentIndex].company}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < testimonials[currentIndex].stars ? "currentColor" : "none"}
                        className={i < testimonials[currentIndex].stars ? "text-yellow-400" : "text-gray-400"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-white/90">"{testimonials[currentIndex].quote}"</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
