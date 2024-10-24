import React from 'react';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      description: "Perfect for small e-commerce businesses",
      features: [
        "Up to 10,000 monthly visitors",
        "10GB SSD Storage",
        "2 CPU Cores",
        "Basic DDoS Protection",
        "99.9% Uptime SLA",
        "Email Support"
      ]
    },
    {
      name: "Professional",
      price: "$599",
      description: "Ideal for growing businesses",
      features: [
        "Up to 50,000 monthly visitors",
        "50GB SSD Storage",
        "4 CPU Cores",
        "Advanced DDoS Protection",
        "99.95% Uptime SLA",
        "24/7 Priority Support",
        "Auto-scaling",
        "Custom SSL"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Unlimited monthly visitors",
        "Custom Storage",
        "Dedicated Resources",
        "Enterprise Security Suite",
        "99.99% Uptime SLA",
        "24/7 Dedicated Support",
        "Advanced Analytics",
        "Custom Integration"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`rounded-2xl p-8 ${
              index === 1 
                ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white transform scale-105 shadow-xl' 
                : 'bg-white border-2 border-gray-100'
            }`}>
              <h3 className={`text-2xl font-bold mb-2 ${index === 1 ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-lg">/month</span>}
              </div>
              <p className={`mb-6 ${index === 1 ? 'text-emerald-50' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <button className={`w-full py-3 rounded-lg mb-8 font-semibold ${
                index === 1 
                  ? 'bg-white text-emerald-600 hover:bg-emerald-50' 
                  : 'bg-emerald-500 text-white hover:bg-emerald-600'
              }`}>
                Get Started
              </button>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className={`h-5 w-5 mr-3 ${index === 1 ? 'text-emerald-50' : 'text-emerald-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;