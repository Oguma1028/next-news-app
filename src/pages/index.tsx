import Head from "next/head";
import styles from "../styles/Home.module.scss";
import MainLayout from "../layouts";

export default function Home(props) {
  console.log(props.topArticles);
  return (
    <MainLayout>
      <Head>
        <title>Simple News</title>
      </Head>
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  const pageSize = 10;
  const topRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&category=technology&pageSize=${pageSize}&apiKey=3f820aff78014c0aa3713493a5f93480`
  );
  const topJson = await topRes.json();
  const topArticles = topJson?.article;

  return {
    props: {
      topArticles,
    },
    revalidate: 60 * 10,
  };
};
