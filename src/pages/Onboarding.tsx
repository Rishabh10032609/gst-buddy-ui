import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, ChevronRight, Landmark } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

const Onboarding = () => {
  const navigate = useNavigate();
  const [companyType, setCompanyType] = useState("");
  const [cin, setCin] = useState("");
  const [gst, setGst] = useState("");
  const [pan, setPan] = useState("");

  const isValid = companyType && cin && gst && pan;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
            <Landmark className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-display font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Vaultex
          </span>
        </div>

        {/* Step indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>Step 1 of 3</span>
            <span>Company Details</span>
          </div>
          <Progress value={33} className="h-1.5" />
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Building2 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Tell us about your company
            </h1>
            <p className="text-sm text-muted-foreground">We need a few details to set up your account</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleNext} className="space-y-5">
          {/* Company Type */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Company Type</label>
            <Select value={companyType} onValueChange={setCompanyType}>
              <SelectTrigger className="w-full h-12 rounded-xl bg-secondary border-border text-foreground">
                <SelectValue placeholder="Select company type" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border z-50">
                <SelectItem value="pvt-ltd">Pvt Ltd</SelectItem>
                <SelectItem value="llp">LLP</SelectItem>
                <SelectItem value="proprietorship">Proprietorship</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* CIN */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">CIN</label>
            <input
              type="text"
              value={cin}
              onChange={(e) => setCin(e.target.value)}
              placeholder="e.g. U12345MH2020PTC123456"
              required
              className="w-full h-12 px-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
            />
          </div>

          {/* GST Number */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">GST Number</label>
            <input
              type="text"
              value={gst}
              onChange={(e) => setGst(e.target.value)}
              placeholder="e.g. 22AAAAA0000A1Z5"
              required
              className="w-full h-12 px-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
            />
          </div>

          {/* PAN */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">PAN</label>
            <input
              type="text"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              placeholder="e.g. ABCDE1234F"
              required
              className="w-full h-12 px-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
            />
          </div>

          {/* Next CTA */}
          <motion.button
            type="submit"
            disabled={!isValid}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm gold-glow hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Onboarding;
