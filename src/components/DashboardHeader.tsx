
import React from 'react';
import { motion } from 'framer-motion';
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Search, Settings } from "lucide-react";

export function DashboardHeader() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-16 bg-white/80 backdrop-blur-lg border-b border-gray-200 flex items-center justify-between px-6"
    >
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-gray-600 hover:text-gray-800 transition-colors" />
        <div className="hidden md:block">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-sm text-gray-500">Welcome back, Admin</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <Search className="h-4 w-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-sm text-gray-600 placeholder-gray-400"
          />
        </div>
        
        <Button variant="outline" size="icon" className="h-9 w-9">
          <Settings className="h-4 w-4" />
        </Button>
        
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-sm">A</span>
        </div>
      </div>
    </motion.header>
  );
}
