import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, TrendingUp, Shield, Landmark } from "lucide-react";
import { useNavigate } from "react-router-dom";
import financeBg from "@/assets/finance-bg.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      navigate("/onboarding");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left panel - visual */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src={financeBg}
          alt="Financial data visualization"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end p-12 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center gold-glow">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-display font-semibold text-foreground">
                Live Market Pulse
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "S&P 500", value: "+1.24%", positive: true },
                { label: "NASDAQ", value: "+0.87%", positive: true },
                { label: "BTC/USD", value: "-0.32%", positive: false },
              ].map((item) => (
                <div key={item.label} className="glass-card p-4">
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className={`text-sm font-semibold font-display ${item.positive ? "text-emerald-400" : "text-destructive"}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">
              Your wealth, <span className="text-gradient-gold">intelligently managed.</span>
            </h2>
            <p className="text-muted-foreground max-w-md">
              Access real-time portfolio analytics, AI-driven insights, and institutional-grade tools.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right panel - login form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-background">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
              <Landmark className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-display font-bold text-foreground">Vaultex</span>
          </div>

          <h1 className="text-3xl font-display font-bold text-foreground mb-2">Welcome back</h1>
          <p className="text-muted-foreground mb-8">Sign in to access your financial dashboard</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full h-12 pl-11 pr-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground">Password</label>
                <button type="button" className="text-xs text-primary hover:text-primary/80 transition-colors">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full h-12 pl-11 pr-12 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold font-display text-sm gold-glow hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">or continue with</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="h-11 rounded-xl bg-secondary border border-border text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
            <button className="h-11 rounded-xl bg-secondary border border-border text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.18 0-.36-.02-.53-.06-.01-.18-.04-.56-.04-.95 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.06.28.06.44l.224.56zm4.565 17.71c-.38.8-.56 1.16-1.05 1.87-.68.99-1.64 2.22-2.83 2.23-1.06.01-1.33-.69-2.77-.68-1.44.01-1.74.7-2.8.68-1.19-.01-2.09-1.1-2.77-2.1-1.91-2.77-2.11-6.03-.93-7.76.84-1.22 2.16-1.94 3.38-1.94 1.26 0 2.05.7 3.09.7.99 0 1.6-.7 3.04-.7 1.07 0 2.24.58 3.06 1.58-2.69 1.47-2.25 5.31.58 6.32z"/></svg>
              Apple
            </button>
          </div>

          {/* Sign up */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            Don't have an account?{" "}
            <button className="text-primary hover:text-primary/80 font-medium transition-colors">
              Create account
            </button>
          </p>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-6 mt-10 pt-6 border-t border-border">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Shield className="w-3.5 h-3.5" />
              256-bit encryption
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="w-3.5 h-3.5" />
              SOC 2 Compliant
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
