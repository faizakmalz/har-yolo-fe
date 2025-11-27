import React from "react";

interface StatusIndicatorProps {
  isOnline: boolean;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ isOnline }) => {
  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${isOnline ? 'bg-green-100' : 'bg-red-100'}`}>
      <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
      <span className={`text-sm font-medium ${isOnline ? 'text-green-700' : 'text-red-700'}`}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
};

export default StatusIndicator;