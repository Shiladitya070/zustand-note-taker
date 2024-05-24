import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={"flex gap-2 mt-2 border-b-2 pb-2 px-6"}>
      <Link className="text-4xl font-bold" href={"/"}>
        Note Taker
      </Link>
      <Link className="bg-slate-300 p-2 rounded-md w-fit" href="/create">
        Create
      </Link>
      <Link className="bg-slate-300 p-2 rounded-md w-fit" href="/pin">
        Pins
      </Link>
    </nav>
  );
};

export default NavBar;
