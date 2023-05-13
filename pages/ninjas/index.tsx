import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return { props: { ninjas: data } };
};

export default function Ninjas({ ninjas }: { ninjas: any }) {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja: any) => (
        <div key={ninja.id}>
          <Link href={"/ninjas/" + ninja.id} className={styles.single}>
            <h3>{ninja.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
