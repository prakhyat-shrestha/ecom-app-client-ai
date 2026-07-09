import Link from "next/link";
import React from "react";
import {  Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

import Container from "./Container";
//import { getAllCategories, getMyOrders } from "@/sanity/helpers";
import HeaderMenu from "./new/HeaderMenu";
import Logo from "./new/Logo";
import { ListOrdered } from "lucide-react";
import CartIcon from "./new/CartIcon";
//import MobileMenu from "./new/MobileMenu";


const Header = async () => {

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-b-gray-200 py-5">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">   
          <Logo>Tulos</Logo>
        </div>
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <CartIcon />
           <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
        </div>
      </Container>
    </header>
  );
};

export default Header;
