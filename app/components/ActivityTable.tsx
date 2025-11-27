import React from "react";
import { Users, Activity } from "lucide-react";
import { Log } from "../types/activity";
import { getActivityIcon, getActivityLabel, getActivityStatus } from "../utils/activityHelper";

interface ActivityTableProps {
  logs: Log[];
  maxRows?: number;
}

export const ActivityTable: React.FC<ActivityTableProps> = ({ logs, maxRows = 10 }) => {
  const displayLogs = logs.slice().reverse().slice(0, maxRows);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Users size={20} className="text-gray-700" />
          <h2 className="text-xl font-bold text-gray-800">Riwayat Aktivitas</h2>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Aktivitas</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Waktu</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {displayLogs.length > 0 ? (
              displayLogs.map((item) => {
                const status = getActivityStatus(item.activity);
                return (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-600">#{item.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{getActivityIcon(item.activity)}</span>
                        <span className="font-medium text-gray-800">
                          {getActivityLabel(item.activity)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.timestamp}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${status.className}`}>
                        {status.label}
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                  <div className="flex flex-col items-center gap-2">
                    <Activity size={48} className="text-gray-300" />
                    <p>Belum ada data aktivitas</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityTable;