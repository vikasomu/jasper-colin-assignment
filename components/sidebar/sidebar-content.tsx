import { Search, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { NavigationItem } from "./navigation-item";
import { NAVIGATION_ITEMS, TABS } from "@/constants/sidebar-constants";

interface SidebarContentProps {
  activeTab: (typeof TABS)[number];
  setActiveTab: (tab: (typeof TABS)[number]) => void;
}

export const SidebarContent = ({
  activeTab,
  setActiveTab,
}: SidebarContentProps) => (
  <div className="flex flex-col h-full bg-background">
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-lg font-semibold">Overview</h2>
      </div>

      <div className="relative dark:bg-[grey] rounded-md">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search" className="pl-8 dark:text-white " />
      </div>
    </div>

    <nav className="flex-1 px-4">
      <div className="flex gap-2 border-b border-gray-100 dark:border-[white] mb-2">
        {TABS.map((tab) => (
          <Button
            key={tab}
            variant="ghost"
            onClick={() => setActiveTab(tab)}
            className={cn(
              "w-full justify-start relative text-sm font-medium hover:bg-transparent",
              activeTab === tab
                ? "text-black dark:text-white"
                : "text-gray-500 dark:text-gray-400"
            )}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black dark:bg-white" />
            )}
          </Button>
        ))}
      </div>

      <Accordion type="single" collapsible>
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationItem key={item.label} item={item} />
        ))}
      </Accordion>

      <Button variant="ghost" className="w-full justify-start mt-2">
        <MessageSquare className="mr-2 h-4 w-4" />
        Messages
      </Button>
    </nav>
  </div>
);
