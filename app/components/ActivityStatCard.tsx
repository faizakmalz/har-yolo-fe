import React from "react";

interface ActivityStatsCardProps {
  icon: string;
  title: string;
  count: number;
  percentage: number;
  color: "green" | "yellow" | "red";
}

export const ActivityStatsCard: React.FC<ActivityStatsCardProps> = ({
  icon,
  title,
  count,
  percentage,
  color
}) => {
  const colorClasses = {
    green: { text: "text-green-600", bg: "bg-green-500" },
    yellow: { text: "text-yellow-600", bg: "bg-yellow-500" },
    red: { text: "text-red-600", bg: "bg-red-500" }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-3xl">{icon}</span>
          <h3 className="font-semibold text-gray-700">{title}</h3>
        </div>
        <span className={`text-2xl font-bold ${colorClasses[color].text}`}>{count}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`${colorClasses[color].bg} h-2 rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-gray-500 mt-2">{percentage}% dari total</p>
    </div>
  );
};

export default ActivityStatsCard;