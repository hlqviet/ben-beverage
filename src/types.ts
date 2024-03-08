import { CollectionEntry } from "astro:content";

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface ProductTabItem {
  id: string;
  label: string;
  items: CollectionEntry<"products">[];
}
