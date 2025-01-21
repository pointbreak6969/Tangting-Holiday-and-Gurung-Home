const testimonials = [
    {
      content:
        "The rooms exceeded our expectations! The staff was incredibly helpful and the amenities were top-notch. We'll definitely be returning for our next vacation.",
      author: "Sarah Johnson",
      role: "Business Traveler",
    },
    {
      content:
        "Perfect location, immaculate rooms, and outstanding service. The attention to detail really made our stay special.",
      author: "Michael Chen",
      role: "Family Vacation",
    },
    {
      content:
        "A wonderful experience from check-in to check-out. The room was comfortable and the staff went above and beyond.",
      author: "Emma Martinez",
      role: "Weekend Getaway",
    },
    {
      content:
        "Exceptional value for money. The amenities and service quality far exceeded what we expected at this price point.",
      author: "James Wilson",
      role: "Leisure Stay",
    },
  ];

  let currentTestimonialIndex = 0;
  const testimonialContent = document.getElementById("testimonialContent");

  function updateTestimonial() {
    const testimonial = testimonials[currentTestimonialIndex];

    testimonialContent.style.opacity = "0";

    setTimeout(() => {
      testimonialContent.innerHTML = `
          <blockquote class="text-xl italic text-gray-700 mb-4">"${testimonial.content}"</blockquote>
          <div class="flex items-center">
            <div class="ml-4">
              <p class="font-semibold text-gray-800">${testimonial.author}</p>
              <p class="text-gray-600">${testimonial.role}</p>
            </div>
          </div>
        `;
      testimonialContent.style.opacity = "1";
    }, 500);

    currentTestimonialIndex =
      (currentTestimonialIndex + 1) % testimonials.length;
  }

  // Initial load
  updateTestimonial();

  // Auto-rotate testimonials every 5 seconds
  setInterval(updateTestimonial, 5000);