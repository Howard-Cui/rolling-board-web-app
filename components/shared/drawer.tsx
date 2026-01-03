"use client";

import { Drawer } from "vaul";

interface SideDrawerProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SideDrawer = ({
  children,
  trigger,
  isOpen,
  setIsOpen,
}: SideDrawerProps) => {
  return (
    <Drawer.Root direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Trigger>{trigger}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="absolute left-0 top-0 w-full h-screen bg-black/40" />
        <Drawer.Content className="bg-dark-9 absolute top-0 right-0 h-screen outline-none rounded-2xl overflow-hidden">
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default SideDrawer;
