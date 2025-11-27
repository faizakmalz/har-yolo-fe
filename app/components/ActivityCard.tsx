import React from "react";
import { Clock } from "lucide-react";
import { LatestActivity } from "../types/activity";
import { getActivityColor, getActivityIcon, getActivityLabel } from "../utils/activityHelper";

interface ActivityCardProps {
  latest: LatestActivity | null;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ latest }) => {
  const bgColor = latest?.activity 
    ? getActivityColor(latest.activity) 
    : "bg-gradient-to-br from-gray-400 to-gray-500";

  return (
    <div className={`${bgColor} rounded-2xl p-6 text-white shadow-lg`}>
      <div className="flex items-center gap-2 mb-3">
        <Clock size={20} />
        <h2 className="text-lg font-semibold">Aktivitas Terbaru</h2>
      </div>
      {latest?.activity ? (
        <div className="flex items-center gap-3 mt-4">
          <span className="text-5xl">{getActivityIcon(latest.activity)}</span>
          <div>
            <p className="text-3xl font-bold">{getActivityLabel(latest.activity)}</p>
            <p className="text-sm opacity-90 mt-1">{latest.timestamp}</p>
          </div>
        </div>
      ) : (
        <div className="py-8 text-center">
          <p className="text-lg opacity-90">Menunggu data aktivitas...</p>
        </div>
      )}
    </div>
  );
};

export default ActivityCard;