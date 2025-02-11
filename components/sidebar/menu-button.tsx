import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
interface MenuButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export const MenuButton = ({ icon: Icon, label, onClick }: MenuButtonProps) => (
  <Button
    key={label}
    variant="ghost"
    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
    onClick={onClick}
  >
    <Icon size={24} />
  </Button>
);
