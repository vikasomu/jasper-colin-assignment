import { Plus, Minus } from "lucide-react";
import { SubMenuItem } from "./sub-menu-item";
import { NAVIGATION_ITEMS } from "@/constants/sidebar-constants";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface NavigationItemProps {
  item: (typeof NAVIGATION_ITEMS)[number];
}

export const NavigationItem = ({ item }: NavigationItemProps) => (
  <AccordionItem value={item.label} className="border-none">
    <AccordionTrigger className="py-4 px-4 hover:bg-accent hover:no-underline group">
      <div className="flex items-center flex-1">
        <item.icon className="mr-2 h-4 w-4" />
        {item.label}
      </div>
      <div className="accordion-icon">
        <Plus className="group-data-[state=open]:hidden h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        <Minus className="hidden group-data-[state=open]:block h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div className="flex flex-col space-y-2 ml-6 relative">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-border dark:bg-gray-600" />
        {item.subItems.map((subItem) => (
          <SubMenuItem key={subItem} item={subItem} />
        ))}
      </div>
    </AccordionContent>
  </AccordionItem>
);
