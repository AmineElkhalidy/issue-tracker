import Link from "next/link";
import { BugAntIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <BugAntIcon className="w-5 h-5" />
      </Link>

      <ul className="flex space-x-6">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              className="text-zinc-500 hover:text-zinc-800 "
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
