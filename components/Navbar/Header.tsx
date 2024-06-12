"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Mission", "Overview", "Annotations", "Log Out"];

  const currentPath = usePathname();

  const checkPath: (path: string) => boolean = (path) => {
    if (path === currentPath) {
      return true;
    }
    return false;
  };

  const router = useRouter();

  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand onClick={() => router.push("/")} className="cursor-pointer">
          <img className="w-[60px]" src="./assets/Comkar-logo.png" alt="" />
          <p className="font-bold text-inherit">Comkar</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={checkPath("/mission")}>
          <Link
            color={checkPath("/mission") ? "primary" : "foreground"}
            onClick={() => router.push("/mission")}
            className="cursor-pointer"
          >
            Mission
          </Link>
        </NavbarItem>
        <NavbarItem isActive={checkPath("/overview")}>
          <Link
            color={checkPath("/overview") ? "primary" : "foreground"}
            onClick={() => router.push("/overview")}
            className="cursor-pointer"
          >
            Overview
          </Link>
        </NavbarItem>
        <NavbarItem isActive={checkPath("/annotations")}>
          <Link
            color={checkPath("/annotations") ? "primary" : "foreground"}
            onClick={() => router.push("/annotations")}
            className="cursor-pointer"
          >
            Annotations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 0
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
