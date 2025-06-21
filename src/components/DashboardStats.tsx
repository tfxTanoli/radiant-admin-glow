
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";

const stats = [
  {
    title: "Total Revenue",
    value: "$124,592",
    change: "+12.5%",
    gradient: "from-blue-500 to-cyan-500",
    trend: "up"
  },
  {
    title: "Active Users",
    value: "12,543",
    change: "+8.2%",
    gradient: "from-purple-500 to-pink-500",
    trend: "up"
  },
  {
    title: "Orders",
    value: "3,842",
    change: "-2.4%",
    gradient: "from-green-500 to-emerald-500",
    trend: "down"
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "+0.8%",
    gradient: "from-orange-500 to-red-500",
    trend: "up"
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ y: -5 }}
          className="group"
        >
          <Card className="p-6 h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-lg flex items-center justify-center pulse-glow`}>
                  <div className="w-6 h-6 bg-white/20 rounded" />
                </div>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  stat.trend === 'up' 
                    ? 'text-green-600 bg-green-100' 
                    : 'text-red-600 bg-red-100'
                }`}>
                  {stat.change}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-gray-500 text-sm">{stat.title}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardStats;
