import React from 'react';
import { 
  Cpu, 
  Shield, 
  Globe, 
  BarChart, 
  Clock, 
  Cloud,
  Lock,
  Zap
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Scalable Infrastructure",
      description: "Automatically scale resources based on your traffic demands"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Advanced Security",
      description: "Enterprise-grade security with DDoS protection and WAF"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global CDN",
      description: "Lightning-fast content delivery across 200+ global locations"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Analytics",
      description: "Real-time insights and performance monitoring"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "99.99% Uptime",
      description: "Enterprise-grade SLA with guaranteed availability"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Storage",
      description: "Reliable and secure cloud storage for your assets"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "SSL Certificates",
      description: "Free SSL certificates with automatic renewal"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description: "Optimized infrastructure for maximum performance"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to scale your e-commerce business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-emerald-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;