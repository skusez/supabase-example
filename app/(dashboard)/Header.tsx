import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  LineChartIcon,
  MenuIcon,
  Package2Icon,
  PackageIcon,
  SettingsIcon,
  ShoppingCartIcon,
  UsersIcon,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Breadcrumbs } from "./Breadcrumbs";

export function Header() {
  return (
    <header className="sticky top-0 py-4 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <MobileNav />
        </SheetContent>
      </Sheet>
      <Breadcrumbs />
      <div className="relative ml-auto flex-1 md:grow-0">
        <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <nav className="grid gap-6 text-lg font-medium">
      <Link
        href="#"
        className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
        prefetch={false}
      >
        <Package2Icon className="h-5 w-5 transition-all group-hover:scale-110" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <NavLink href="#" icon={HomeIcon} label="Dashboard" />
      <NavLink href="#" icon={ShoppingCartIcon} label="Orders" />
      <NavLink href="#" icon={PackageIcon} label="Models" isActive />
      <NavLink href="#" icon={UsersIcon} label="Customers" />
      <NavLink href="#" icon={LineChartIcon} label="Analytics" />
      <NavLink href="#" icon={SettingsIcon} label="Settings" />
    </nav>
  );
}

function NavLink({
  href,
  icon: Icon,
  label,
  isActive = false,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-4 px-2.5 ${
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
      prefetch={false}
    >
      <Icon className="h-5 w-5" />
      {label}
    </Link>
  );
}
