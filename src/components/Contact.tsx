import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioConfig } from '../config/portfolio';

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, 0.2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Web3Forms - Free email service
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'c04d88eb-3ff0-4a1e-aca5-0d3d7ccf894f',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
          replyto: formData.email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };



  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDuration: '5s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Let's connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        {/* Unique Card-Based Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Top Row - Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { 
                icon: Mail, 
                label: 'Email Me', 
                value: portfolioConfig.contact.email,
                gradient: 'from-purple-500 to-pink-500',
                href: `mailto:${portfolioConfig.contact.email}`
              },
              { 
                icon: Phone, 
                label: 'Call Me', 
                value: portfolioConfig.contact.phone,
                gradient: 'from-pink-500 to-rose-500',
                href: `tel:${portfolioConfig.contact.phone}`
              },
              { 
                icon: MapPin, 
                label: 'Visit Me', 
                value: portfolioConfig.contact.location,
                gradient: 'from-emerald-500 to-teal-500',
                href: '#'
              }
            ].map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`group relative bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-xl rounded-2xl border border-white/10 p-8 transform transition-all duration-500 hover:scale-105 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Floating Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                <p className="text-white text-xl font-bold">{item.value}</p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Bottom Row - Form and Social */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Form - Takes 2 columns */}
            <div
              className={`md:col-span-2 bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-xl rounded-3xl border border-white/10 p-8 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                  <p className="text-gray-400 text-sm">I'll get back to you within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  {errors.subject && <p className="text-red-400 text-sm mt-2">{errors.subject}</p>}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-300 text-center backdrop-blur-sm">
                    <p className="font-semibold">✓ Message sent successfully!</p>
                    <p className="text-sm mt-1">I'll get back to you soon.</p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-center backdrop-blur-sm">
                    <p className="font-semibold">✗ Failed to send message</p>
                    <p className="text-sm mt-1">Please try again or email me directly.</p>
                  </div>
                )}
              </form>
            </div>

            {/* Social Links Sidebar */}
            <div
              className={`space-y-6 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  Follow Me
                </h3>
                
                <div className="space-y-4">
                  {[
                    { icon: Github, href: portfolioConfig.social.github, label: 'GitHub', color: 'from-gray-600 to-gray-800' },
                    { icon: Linkedin, href: portfolioConfig.social.linkedin, label: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
                    { icon: Twitter, href: portfolioConfig.social.twitter, label: 'Twitter', color: 'from-sky-500 to-blue-600' }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                        <social.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold">{social.label}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      24h
                    </div>
                    <p className="text-gray-400 text-sm">Response Time</p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                      100%
                    </div>
                    <p className="text-gray-400 text-sm">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
