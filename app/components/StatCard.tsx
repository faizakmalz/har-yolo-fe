import React from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  subtitle: string;
  valueColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  icon: Icon, 
  title, 
  value, 
  subtitle,
  valueColor = "text-purple-600"
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center gap-2 mb-3 text-gray-700">
        <Icon size={20} />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="mt-4">
        <p className={`text-4xl font-bold ${valueColor}`}>{value}</p>
        <p className="text-sm text-gray-500 mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default StatCard;