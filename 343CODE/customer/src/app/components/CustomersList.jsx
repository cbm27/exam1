import Link from "next/link";

export default function CustomersList() {
  return (
    <>
      <Link href="/add">
        <h2>Add New Customer</h2>
      </Link>
      <p>Jane Doe</p>
      <p>John Smith</p>
      <p>Lisa Baker</p>
    </>
  );
}
