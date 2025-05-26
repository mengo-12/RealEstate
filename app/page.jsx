'use client'
import Image from "next/image";
import { Button } from "flowbite-react";
import { FaBeer } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import Nav from "@/components/Nav";
import About from "@/components/about";
import HouseSale from "@/components/HouseSale";

export default function Home() {

  return (
    <>
      <Nav/>
      <About/>
      <HouseSale/>
    </>
  );
}
