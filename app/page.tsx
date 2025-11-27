"use client";
import { useEffect, useState } from "react";
import { TrendingUp, BarChart3 } from "lucide-react";
import { Log, LatestActivity, Stats } from "./types/activity";
import { calculateStats, calculateProductivityScore } from "./utils/activityHelper";
import { DashboardHeader } from "./components/DashboardHeader";
import { ActivityCard } from "./components/ActivityCard";
import { StatCard } from "./components/StatCard";
import { ActivityStatsCard } from "./components/ActivityStatCard";
import { ActivityTable } from "./components/ActivityTable";
// import AlertBanner from "./components/Alertbanner";

export default function Home() {
  const [latest, setLatest] = useState<LatestActivity | null>(null);
  const [logs, setLogs] = useState<Log[]>([]);
  const [backendOnline, setBackendOnline] = useState<boolean>(true);
  const [stats, setStats] = useState<Stats>({ duduk: 0, berdiri: 0, meninggalkan_meja: 0 });
  
  const BACKEND_URL = "http://127.0.0.1:8000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const liveRes = await fetch(`${BACKEND_URL}/api/live`);
        const logsRes = await fetch(`${BACKEND_URL}/api/logs`);
        
        if (!liveRes.ok || !logsRes.ok) throw new Error("Backend Error");
        
        const liveData = await liveRes.json();
        const logsData = await logsRes.json();
        
        setLatest(liveData);
        setLogs(logsData);
        setStats(calculateStats(logsData));
        setBackendOnline(true);
      } catch (err) {
        setBackendOnline(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);

  const totalActivities = stats.duduk + stats.berdiri + stats.meninggalkan_meja;
  const productivityScore = calculateProductivityScore(stats);

  const getPercentage = (value: number): number => {
    return totalActivities > 0 ? Math.round((value / totalActivities) * 100) : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader backendOnline={backendOnline} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* {!backendOnline && (
          <AlertBanner message="Backend Offline" backendUrl={BACKEND_URL} />
        )} */}

        {/* Stats Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="col-span-1 md:col-span-2">
            <ActivityCard latest={latest} />
          </div>
          
          <StatCard
            icon={TrendingUp}
            title="Skor Produktivitas"
            value={`${productivityScore}%`}
            subtitle="Berdasarkan waktu duduk bekerja"
            valueColor="text-purple-600"
          />
          
          <StatCard
            icon={BarChart3}
            title="Total Aktivitas"
            value={totalActivities}
            subtitle="Aktivitas tercatat hari ini"
            valueColor="text-purple-600"
          />
        </div>

        {/* Activity Stats Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <ActivityStatsCard
            icon="🪑"
            title="Duduk"
            count={stats.duduk}
            percentage={getPercentage(stats.duduk)}
            color="green"
          />
          
          <ActivityStatsCard
            icon="🧍"
            title="Berdiri"
            count={stats.berdiri}
            percentage={getPercentage(stats.berdiri)}
            color="yellow"
          />
          
          <ActivityStatsCard
            icon="🚶"
            title="Meninggalkan Meja"
            count={stats.meninggalkan_meja}
            percentage={getPercentage(stats.meninggalkan_meja)}
            color="red"
          />
        </div>

        {/* Activity Table */}
        <ActivityTable logs={logs} maxRows={10} />
      </div>
    </div>
  );
}