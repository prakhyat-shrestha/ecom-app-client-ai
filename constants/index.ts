// data/products.ts
import { Product } from "@/types/product";


export const headerData = [
  // { title: "Home", href: "/" },
  { title: "Men", href: "/men-s-fashion" },
  { title: "Woman", href: "/woman" },
  { title: "Kids", href: "/kids" },
  { title: "New", href: "/new" },
  { title: "Featured", href: "/featured" },
  { title: "Gift", href: "/gift" },
];

export const productType = [
  { title: "Tshirt", value: "tshirt" },
  { title: "Jacket", value: "jacket" },
  { title: "Pants", value: "pants" },
  { title: "Hoodie", value: "hoodie" },
  { title: "Short", value: "tshirt" },
];

export const quickLinksData = [
  { title: "About us", href: "/about" },
  { title: "Contact us", href: "/contact" },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "FAQs", href: "/faqs" },
];
export const categoriesData = [
  { title: "Men's Fashion", href: "/men-s-fashion" },
  { title: "Women's Fashion", href: "/women" },
  { title: "Kids corner", href: "/kids" },
  { title: "Tshirt", href: "/t-shirt" },
  { title: "Accessories", href: "/accessories" },
  { title: "Household", href: "/household" },
  { title: "Others", href: "/others" },
];
export const faqsData = [
  {
    question: "What services does Tulos offer?",
    answer:
      "Tulos offers a wide range of technology solutions including custom software development, cloud services, and digital transformation consulting.",
  },
  {
    question: "How can I get support for Tulos products?",
    answer:
      "You can reach our support team through our contact page or by emailing support@tulos.com.",
  },
  {
    question: "Does Tulos offer training for its products?",
    answer:
      "Yes, we offer comprehensive training programs for all our products and services. Please contact our sales team for more information.",
  },
  {
    question: "What industries does Tulos serve?",
    answer:
      "Tulos serves a wide range of industries including finance, healthcare, retail, and manufacturing.",
  },
  {
    question: "How does Tulos ensure data security?",
    answer:
      "We employ industry-standard security measures and comply with all relevant data protection regulations to ensure the security of our clients' data.",
  },
];








export const categories = [
  { _id: "cat-1", title: "Men" },
  { _id: "cat-2", title: "Women" },
  { _id: "cat-3", title: "Outerwear" },
];


export const products: Product[] = [
  {
    _id: "1",
    name: "Classic White Tee",
    slug: "classic-white-tee",
    images: [{ _key: "img1", url: "https://placehold.co/500x500.png?text=Tee" }],
    intro: "Everyday essential",
    description: "A soft, breathable cotton t-shirt for everyday wear.",
    price: 25,
    discount: 5,
    categories: [categories[0]],
    stock: 42,
    status: "new",
    variant: "tshirt",
  },
  {
    _id: "2",
    name: "Denim Jacket",
    slug: "denim-jacket",
    images: [{ _key: "img2", url: "https://placehold.co/500x500.png?text=Jacket" }],
    intro: "Timeless outerwear",
    description: "Rugged denim jacket with a relaxed fit.",
    price: 89,
    discount: 0,
    categories: [categories[2]],
    stock: 10,
    status: "hot",
    variant: "jacket",
  },
  {
    _id: "3",
    name: "Slim Fit Chinos",
    slug: "slim-fit-chinos",
    images: [{ _key: "img3", url: "https://placehold.co/500x500.png?text=Pants" }],
    intro: "Smart casual",
    description: "Tailored chinos for a smart-casual look.",
    price: 55,
    discount: 10,
    categories: [categories[0]],
    stock: 0,
    status: "sale",
    variant: "pants",
  },
  {
    _id: "4",
    name: "Pullover Hoodie",
    slug: "pullover-hoodie",
    images: [{ _key: "img4", url: "https://placehold.co/500x500.png?text=Hoodie" }],
    intro: "Cozy layer",
    description: "Fleece-lined hoodie, perfect for cooler days.",
    price: 60,
    discount: 0,
    categories: [categories[1]],
    stock: 18,
    status: "new",
    variant: "hoodie",
  },
];