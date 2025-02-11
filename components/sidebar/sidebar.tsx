"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import Logo from "@/public/Images/logo.png";
import { MENU_ITEMS, TABS } from "@/constants/sidebar-constants";
import { MenuButton } from "./menu-button";
import { SidebarContent } from "./sidebar-content";
import User from "@/public/Images/profile.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>(TABS[0]);

  return (
    <>
      <div className="h-screen w-16 bg-gray-100 dark:bg-gray-800 flex flex-col fixed left-0 top-0 z-10 rounded-lg m-1 mx-2">
        <div className="flex flex-col items-center py-4 space-y-6">
          <Button variant="ghost" size="icon">
            <Image src={Logo} alt="Logo" className="w-8 h-8" />
          </Button>
          {MENU_ITEMS.slice(0, -2).map((item) => (
            <MenuButton
              key={item.label}
              icon={item.icon}
              label={item.label}
              onClick={() => setIsOpen(true)}
            />
          ))}
        </div>

        <div className="mt-auto flex flex-col items-center space-y-6 pb-4">
          {MENU_ITEMS.slice(-2).map((item) => (
            <MenuButton
              key={item.label}
              icon={item.icon}
              label={item.label}
              onClick={() => setIsOpen(true)}
            />
          ))}
          <Button variant="ghost" size="icon">
            <Image src={User} alt="Logo" className="w-8 h-8" />
          </Button>
        </div>

      </div>

      <div className="relative left-16 top-0 z-0">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="left" className="w-80 p-0 ml-[4.6rem]">
            <SheetTitle className="sr-only">Sidebar Navigation</SheetTitle>
            <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Sidebar;
