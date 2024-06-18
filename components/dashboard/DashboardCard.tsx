import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <Card className="bg-slate-100 dark:bg-slate-900 p-3 pb-0">
      <CardContent>
        <h3 className="text-2xl text-center mb-2 font-bold text-slate-500 dark:text-slate-200">
          {title}
        </h3>
        <div className="flex gap-2 justify-center items-center">
          {icon}
          <h3 className="text-3xl font-semibold text-slate-500 dark:text-slate-200">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
