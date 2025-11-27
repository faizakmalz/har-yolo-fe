import React from "react";
import { AlertCircle } from "lucide-react";

interface AlertBannerProps {
  message: string;
  backendUrl: string;
}

export const AlertBanner: React.FC<AlertBannerProps> = ({ message, backendUrl }) => {
  return (
    <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-start gap-3">
      <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
      <div>
        <h3 className="font-semibold text-red-800">{message}</h3>
        <p className="text-sm text-red-600">Pastikan FastAPI server berjalan di {backendUrl}</p>
      </div>
    </div>
  );
};

export default AlertBanner;