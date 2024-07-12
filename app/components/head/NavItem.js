"use client"
import React from 'react'
import styles from "./header.module.css"
import Link from 'next/link';
import { menuItem } from '@/app/constants/navItemLinks';
import { usePathname } from 'next/navigation';


export default function NavItem({ className }) {
  const path = usePathname();
  return (
    <ul className={className}>
    {menuItem.map(({name, url}) => {
      return (
        <li
          className={path === url ? styles.navActive : ""}
          key={name}
        >
          <Link key={name} href={url}>{name}</Link>
        </li>
      );
    })}
  </ul>
  )
}
