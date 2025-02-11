import { Button } from "@/components/ui/button";

interface SubMenuItemProps {
  item: string;
}

export const SubMenuItem = ({ item }: SubMenuItemProps) => (
  <Button
    variant="ghost"
    className="justify-start relative pl-6 group hover:bg-transparent"
  >
    <div className="absolute left-0 bottom-1/2 w-4 h-4 border-l border-b border-border dark:border-gray-600 rounded-bl-full" />
    <div className="absolute left-4 bottom-1/2 w-4 h-px bg-border dark:bg-gray-600" />
    <span className="ml-4 dark:text-gray-200 rounded px-2 py-1 group-hover:bg-gray-100 dark:group-hover:bg-gray-800">
      {item}
    </span>
  </Button>
);
