
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', active: 1200, new: 400 },
  { name: 'Tue', active: 1900, new: 300 },
  { name: 'Wed', active: 800, new: 200 },
  { name: 'Thu', active: 1600, new: 500 },
  { name: 'Fri', active: 2200, new: 600 },
  { name: 'Sat', active: 1800, new: 450 },
  { name: 'Sun', active: 1400, new: 350 },
];

const UserActivityChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">User Activity</h3>
          <p className="text-gray-500">Daily active and new users</p>
        </div>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                stroke="#6b7280"
                fontSize={12}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Bar 
                dataKey="active" 
                fill="url(#activeGradient)"
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="new" 
                fill="url(#newGradient)"
                radius={[4, 4, 0, 0]}
              />
              <defs>
                <linearGradient id="activeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
                <linearGradient id="newGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </motion.div>
  );
};

export default UserActivityChart;
