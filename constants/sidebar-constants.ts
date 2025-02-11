import {
  Home,
  Mail,
  Layers,
  Grid,
  Users,
  Briefcase,
  Settings,
  BarChart2,
  MessageCircle,
  // User,
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
} from "lucide-react";
export const MENU_ITEMS = [
  { icon: Home, label: "Home" },
  { icon: Mail, label: "Mail" },
  { icon: Layers, label: "Layers" },
  { icon: Grid, label: "Grid" },
  { icon: Users, label: "Users" },
  { icon: Briefcase, label: "Briefcase" },
  { icon: Settings, label: "Settings" },
  { icon: BarChart2, label: "Analytics" },
  { icon: MessageCircle, label: "Chat" },
  // { icon: User, label: "Profile" },
] as const;

export const NAVIGATION_ITEMS = [
  {
    label: "Home",
    icon: Home,
    subItems: ["Overview", "Activity", "Notifications"],
  },
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    subItems: ["Analytics", "Reports", "Performance"],
  },
  {
    label: "Projects",
    icon: FolderKanban,
    subItems: ["My Projects", "Team Projects", "Archived"],
  },
  {
    label: "Tasks",
    icon: CheckSquare,
    subItems: ["Pending", "Completed", "Assigned"],
  },
  {
    label: "Settings",
    icon: Settings,
    subItems: [
      "My details",
      "My profile",
      "Security",
      "Integrations",
      "Billing",
    ],
  },
] as const;

export const TABS = ["My account", "Shared with me"] as const;
