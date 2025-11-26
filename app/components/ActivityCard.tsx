"use client";

interface Props {
  activity: string | null;
  timestamp: string | null;
}

export default function ActivityCard({ activity, timestamp }: Props) {
  const bg =
    activity === "meninggalkan_meja"
      ? "bg-red-500"
      : activity === "berdiri"
      ? "bg-yellow-500"
      : "bg-green-500";

  return (
    <div className={`p-6 rounded-xl text-white ${bg}`}>
      <h2 className="text-xl font-bold">Aktivitas Terbaru</h2>

      {activity ? (
        <>
          <p className="text-4xl mt-3 capitalize">{activity}</p>
          <p className="opacity-80 mt-2">Waktu: {timestamp}</p>
        </>
      ) : (
        <p className="text-gray-200 mt-3">Belum ada aktivitas.</p>
      )}
    </div>
  );
}
