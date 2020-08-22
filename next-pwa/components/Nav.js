import Link from "next/link";

const Nav = () => (
  <div>
     <img src="/static/logo.png" alt="logo" height="50" />
    <Link href="/">
      <a>index</a>
    </Link>
    <Link href="/login">
      <a>login</a>
    </Link>
    <Link href="/signup">
      <a>signup</a>
    </Link>
  </div>
);

export default Nav;
