import { Log, Stats } from "../types/activity";

export const formatTimestamp = (timestamp: string | null): string => {
  if (!timestamp) return "-";
  
  try {
    const date = new Date(timestamp);
    return date.toLocaleString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  } catch (error) {
    return timestamp;
  }
};

export const getActivityColor = (activity: string | null): string => {
  if (!activity) return "bg-gradient-to-br from-gray-400 to-gray-500";
  switch(activity) {
    case "duduk": 
      return "bg-gradient-to-br from-green-500 to-emerald-600";
    case "berdiri": 
      return "bg-gradient-to-br from-yellow-500 to-orange-500";
    case "meninggalkan_meja": 
      return "bg-gradient-to-br from-red-500 to-rose-600";
    default: 
      return "bg-gradient-to-br from-purple-400 to-purple-500";
  }
};

export const getActivityIcon = (activity: string | null): string => {
  if (!activity) return "❓";
  switch(activity) {
    case "duduk": return "🪑";
    case "berdiri": return "🧍";
    case "meninggalkan_meja": return "🚶";
    default: return "❓";
  }
};

export const getActivityLabel = (activity: string | null): string => {
  if (!activity) return "Tidak Ada Aktivitas";
  switch(activity) {
    case "duduk": return "Duduk";
    case "berdiri": return "Berdiri";
    case "meninggalkan_meja": return "Meninggalkan Meja";
    default: return activity;
  }
};

export const getActivityStatus = (activity: string | null): {
  label: string;
  className: string;
} => {
  if (!activity) {
    return { label: "Unknown", className: "bg-gray-100 text-gray-700" };
  }
  switch(activity) {
    case "duduk": 
      return { label: "Produktif", className: "bg-green-100 text-green-700" };
    case "berdiri": 
      return { label: "Istirahat", className: "bg-yellow-100 text-yellow-700" };
    case "meninggalkan_meja": 
      return { label: "Away", className: "bg-red-100 text-red-700" };
    default: 
      return { label: "Unknown", className: "bg-gray-100 text-gray-700" };
  }
};

export const calculateStats = (logs: Log[]): Stats => {
  return logs.reduce((acc, log) => {
    if (log.activity in acc) {
      acc[log.activity as keyof Stats]++;
    }
    return acc;
  }, { duduk: 0, berdiri: 0, meninggalkan_meja: 0 });
};

export const calculateProductivityScore = (stats: Stats): number => {
  const total = stats.duduk + stats.berdiri + stats.meninggalkan_meja;
  return total > 0 ? Math.round((stats.duduk / total) * 100) : 0;
};