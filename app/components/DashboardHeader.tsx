import React from "react";
import { Activity } from "lucide-react";
import { StatusIndicator } from "./StatusIndicator";

interface DashboardHeaderProps {
  backendOnline: boolean;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ backendOnline }) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-purple-400 to-purple-500 p-2 rounded-lg">
              <Activity className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Monitoring Aktivitas Pekerja</h1>
              <p className="text-sm text-gray-500">Real-time Human Activity Recognition</p>
            </div>
          </div>
          <StatusIndicator isOnline={backendOnline} />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;