import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Shirt, 
  Coffee, 
  Crown, 
  Package,
  Star,
  ChevronDown,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Heart
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const products = [
    { 
      icon: Shirt, 
      name: 'T-Shirts', 
      description: 'Custom printed t-shirts in various styles and colors',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Starting from $15'
    },
    { 
      icon: Package, 
      name: 'Hoodies', 
      description: 'Cozy hoodies with your custom designs',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Starting from $35'
    },
    { 
      icon: Crown, 
      name: 'Caps', 
      description: 'Stylish caps and hats for any occasion',
      image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Starting from $20'
    },
    { 
      icon: Package, 
      name: 'Shorts', 
      description: 'Comfortable shorts with custom printing',
      image: 'https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Starting from $25'
    },
    { 
      icon: Coffee, 
      name: 'Mugs', 
      description: 'Personalized mugs for coffee lovers',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Starting from $12'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'Incredible quality! They printed our company t-shirts perfectly. The colors are vibrant and the material is top-notch.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Event Coordinator',
      content: 'Fast turnaround and excellent customer service. Our event hoodies were a huge hit with participants!',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Marketing Manager',
      content: 'Professional service from start to finish. The custom mugs exceeded our expectations. Highly recommend!',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'What is the minimum order quantity?',
      answer: 'Our minimum order quantity is 10 pieces for most items. For mugs, we accept orders starting from 6 pieces.'
    },
    {
      question: 'How long does production take?',
      answer: 'Standard production time is 5-7 business days. Rush orders can be completed in 2-3 days with additional charges.'
    },
    {
      question: 'What file formats do you accept for designs?',
      answer: 'We accept PNG, JPG, PDF, AI, and PSD files. For best quality, we recommend vector files (AI, PDF) with 300 DPI resolution.'
    },
    {
      question: 'Do you offer design services?',
      answer: 'Yes! Our design team can help create or modify your designs. Design services start at $25 per design.'
    },
    {
      question: 'What are your shipping options?',
      answer: 'We offer standard shipping (5-7 days) and express shipping (2-3 days). Free shipping on orders over $200.'
    }
  ];

  const heroProducts = [
    'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  useEffect(() => {
    const productInterval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % heroProducts.length);
    }, 3000);

    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(productInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const ContactButton = ({ type, icon: Icon, text, action }: any) => (
    <button
      onClick={action}
      className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <Icon size={20} />
      <span className="font-medium">{text}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Shirt className="text-white" size={24} />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                PrintCraft
              </span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Products', 'About', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <ContactButton
                icon={MessageCircle}
                text="WhatsApp"
                action={() => window.open('https://wa.me/1234567890', '_blank')}
              />
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-3">
              {['Home', 'Products', 'About', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-700 hover:text-purple-600"
                >
                  {item}
                </button>
              ))}
              <div className="pt-4 border-t">
                <ContactButton
                  icon={MessageCircle}
                  text="Contact via WhatsApp"
                  action={() => window.open('https://wa.me/1234567890', '_blank')}
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                    Custom Printing
                  </span>
                  <br />
                  <span className="text-gray-800">Made Perfect</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Transform your ideas into stunning custom printed products. From t-shirts to mugs, 
                  we bring your vision to life with premium quality and vibrant colors.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <ContactButton
                  icon={MessageCircle}
                  text="Start Your Order"
                  action={() => window.open('https://wa.me/1234567890', '_blank')}
                />
                <button
                  onClick={() => scrollToSection('products')}
                  className="flex items-center space-x-2 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  <span className="font-medium">View Products</span>
                  <ArrowRight size={20} />
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>Fast Turnaround</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>Custom Designs</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {heroProducts.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Product ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === activeProduct ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">500+ Happy Customers</p>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={12} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our wide range of customizable products, each crafted with precision and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <product.icon className="text-purple-600" size={24} />
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-purple-600">{product.price}</span>
                    <button
                      onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <ContactButton
              icon={MessageCircle}
              text="Discuss Your Custom Project"
              action={() => window.open('https://wa.me/1234567890', '_blank')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">About PrintCraft</h2>
              <p className="text-lg text-gray-600">
                With over 5 years of experience in custom printing, we've helped thousands of customers 
                bring their creative visions to life. Our state-of-the-art equipment and skilled team 
                ensure every product meets the highest quality standards.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5000+</div>
                  <div className="text-gray-600">Products Printed</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
                  <div className="text-gray-600">Rush Orders</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Users className="text-purple-600 mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                  <p className="text-gray-600 text-sm">Skilled professionals dedicated to quality</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Heart className="text-pink-600 mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2">Custom Care</h3>
                  <p className="text-gray-600 text-sm">Personalized service for every order</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Zap className="text-orange-600 mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
                  <p className="text-gray-600 text-sm">Quick turnaround without compromising quality</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <CheckCircle className="text-green-600 mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2">Quality Assured</h3>
                  <p className="text-gray-600 text-sm">Premium materials and printing techniques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-800">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 md:p-12 text-center transition-all duration-500 ${
                    index === activeTestimonial ? 'block' : 'hidden'
                  }`}
                >
                  <div className="flex justify-center mb-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={24} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-purple-200">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <ChevronDown
                    className={`text-purple-600 transform transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'py-4 max-h-96' : 'py-0 max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Ready to Start Your Project?</h2>
              <p className="text-xl text-purple-100">
                Get in touch with us today for a free quote and consultation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <MessageCircle className="text-white mx-auto mb-4" size={32} />
                <h3 className="text-white font-bold mb-2">WhatsApp</h3>
                <p className="text-purple-100 text-sm">Quick chat and instant quotes</p>
              </div>
              
              <div
                onClick={() => window.location.href = 'mailto:info@printcraft.com'}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <Mail className="text-white mx-auto mb-4" size={32} />
                <h3 className="text-white font-bold mb-2">Email</h3>
                <p className="text-purple-100 text-sm">info@printcraft.com</p>
              </div>
              
              <div
                onClick={() => window.location.href = 'tel:+1234567890'}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <Phone className="text-white mx-auto mb-4" size={32} />
                <h3 className="text-white font-bold mb-2">Phone</h3>
                <p className="text-purple-100 text-sm">+1 (234) 567-890</p>
              </div>
            </div>

            <div className="pt-8">
              <ContactButton
                icon={MessageCircle}
                text="Start Your Order Now"
                action={() => window.open('https://wa.me/1234567890', '_blank')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Shirt className="text-white" size={20} />
                </div>
                <span className="font-bold text-lg">PrintCraft</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for custom printing solutions.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>T-Shirts</li>
                <li>Hoodies</li>
                <li>Caps</li>
                <li>Shorts</li>
                <li>Mugs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Custom Printing</li>
                <li>Design Services</li>
                <li>Rush Orders</li>
                <li>Bulk Discounts</li>
                <li>Quality Guarantee</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Facebook className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" size={24} />
                <Instagram className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" size={24} />
                <Twitter className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" size={24} />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PrintCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;