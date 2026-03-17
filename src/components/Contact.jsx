import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:mdomarkhan314@gmail.com?subject=${encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `${formData.message}\n\nFrom: ${formData.email}`
    )}`;

    window.location.href = mailtoLink;

    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'mdomarkhan314@gmail.com',
      link: 'mailto:mdomarkhan314@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 7982325440',
      link: 'tel:+917982325440'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Delhi, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      url: 'https://github.com/Omar-netizen'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/md-omar-khan-9a1355268'
    },
    {
      icon: <FileText size={20} />,
      label: 'Portfolio',
      url: 'https://portfolio-lake-two-56.vercel.app/'
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      
      {/* IMPORTANT: Prevent overlays from blocking inputs */}
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-bold text-gray-600 mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200"
                  >
                    <div className="text-gray-600 bg-gray-100 p-3 rounded-lg">
                      {info.icon}
                    </div>

                    <div>
                      <p className="text-gray-500 text-xs font-medium mb-1">
                        {info.label}
                      </p>

                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-gray-800 transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 font-medium">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-gray-600 mb-4">
                Connect with Me
              </h4>

              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-4 rounded-lg border border-gray-200 text-gray-600 hover:text-gray-800 transition-all hover:shadow-md"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="relative z-10 bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-600 mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-100 text-gray-600 py-3 px-6 rounded-lg font-medium hover:bg-blue-100 transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;