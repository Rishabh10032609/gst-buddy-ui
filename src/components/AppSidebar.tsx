import {
  LayoutDashboard,
  Calendar,
  FileText,
  FolderOpen,
  MessageSquare,
  CreditCard,
  Users,
  Settings,
  Landmark,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Compliance Calendar", url: "/compliance", icon: Calendar },
  { title: "Filings", url: "/filings", icon: FileText },
  { title: "Documents", url: "/documents", icon: FolderOpen },
  { title: "Chat & Support", url: "/support", icon: MessageSquare },
  { title: "Billing", url: "/billing", icon: CreditCard },
  { title: "Team", url: "/team", icon: Users },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <Landmark className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-sidebar-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Vaultex
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/dashboard"}
                      className="hover:bg-sidebar-accent/50"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
