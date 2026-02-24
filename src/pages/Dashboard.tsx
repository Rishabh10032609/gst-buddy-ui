import { motion } from "framer-motion";
import { TrendingUp, DollarSign, FileText, AlertCircle } from "lucide-react";

const stats = [
  { label: "Total Filings", value: "12", icon: FileText, change: "+2 this month" },
  { label: "Pending Actions", value: "3", icon: AlertCircle, change: "Due this week" },
  { label: "Compliance Score", value: "94%", icon: TrendingUp, change: "+5% from last month" },
  { label: "Total Spent", value: "₹24,500", icon: DollarSign, change: "This quarter" },
];

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-2xl font-bold text-foreground mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Dashboard
      </h1>
      <p className="text-muted-foreground mb-8">Welcome back. Here's your compliance overview.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-muted-foreground">{stat.label}</span>
              <stat.icon className="w-4 h-4 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {stat.value}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Dashboard;
