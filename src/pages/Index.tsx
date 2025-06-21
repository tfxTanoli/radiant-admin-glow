
import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { LoadingSpinner } from "@/components/LoadingSpinner";

// Lazy load components for better performance
const DashboardStats = lazy(() => import("@/components/DashboardStats"));
const RevenueChart = lazy(() => import("@/components/RevenueChart"));
const UserActivityChart = lazy(() => import("@/components/UserActivityChart"));
const RecentActivity = lazy(() => import("@/components/RecentActivity"));

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          
          <main className="flex-1 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <DashboardHeader />
              
              <div className="p-6 space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <Suspense fallback={<LoadingSpinner />}>
                    <DashboardStats />
                  </Suspense>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="lg:col-span-1"
                  >
                    <Suspense fallback={<LoadingSpinner />}>
                      <RevenueChart />
                    </Suspense>
                  </motion.div>

                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="lg:col-span-1"
                  >
                    <Suspense fallback={<LoadingSpinner />}>
                      <UserActivityChart />
                    </Suspense>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Suspense fallback={<LoadingSpinner />}>
                    <RecentActivity />
                  </Suspense>
                </motion.div>
              </div>
            </motion.div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
