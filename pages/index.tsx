import Posts from '../Components/Posts/Posts'
import { GetStaticProps } from "next";
import axios from 'axios'
import styles from "../styles/Home.module.css";
import { Post,PostJsonResponse } from '../models/Post';

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get("https://strapiblogsite.herokuapp.com/posts", {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Post[] = response.data;
  return {
    props: {
      data,
    },
  };
};


const IndexView = (props : PostJsonResponse) => {
  console.log(props)
  return (
    <>
      <div className={styles.container}>
        <h1>My Blogs</h1>
        <Posts  data={props.data}/>
      </div>
    </>
  );
};

export default IndexView;
