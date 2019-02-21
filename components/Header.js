import Link from "next/link";

const Header = props => (
  <>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </li>
      <li>
        <Link href="/products">
          <a>Products</a>
        </Link>
      </li>
    </ul>
  </>
);

export default Header;
