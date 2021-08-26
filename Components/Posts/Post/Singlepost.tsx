import React from "react";
import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.css'
import moment from 'moment'
import { Post } from '../../../models/Post'

export type PostDetailViewProps = {
    data: Post;
};

function Singlepost({data} : PostDetailViewProps) {
    const router = useRouter();
  return (
    <div className={styles.container}>
      <button className={styles.back} onClick={() => router.back()}>
        Back
      </button>
      <h1 className={styles.title}>{data.Title}</h1>
      <p>{moment(data.published_at).format("Do MMM YYYY")}</p>
      <p className={styles.details}>{data.Description}</p>
    </div>
  );
}

export default Singlepost;
