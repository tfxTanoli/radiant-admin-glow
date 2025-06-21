
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    user: "John Doe",
    action: "Completed purchase",
    amount: "$299.99",
    time: "2 minutes ago",
    status: "success",
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "Updated profile",
    amount: null,
    time: "5 minutes ago",
    status: "info",
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "Failed payment",
    amount: "$150.00",
    time: "10 minutes ago",
    status: "error",
  },
  {
    id: 4,
    user: "Sarah Wilson",
    action: "Signed up",
    amount: null,
    time: "15 minutes ago",
    status: "success",
  },
  {
    id: 5,
    user: "Tom Brown",
    action: "Started trial",
    amount: "$49.99",
    time: "20 minutes ago",
    status: "info",
  },
];

const RecentActivity = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      case 'info':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Recent Activity</h3>
          <p className="text-gray-500">Latest user actions and transactions</p>
        </div>
        
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{activity.user}</p>
                  <p className="text-sm text-gray-500">{activity.action}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                {activity.amount && (
                  <span className="font-semibold text-gray-800">{activity.amount}</span>
                )}
                <Badge className={getStatusColor(activity.status)}>
                  {activity.status}
                </Badge>
                <span className="text-sm text-gray-400">{activity.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default RecentActivity;
