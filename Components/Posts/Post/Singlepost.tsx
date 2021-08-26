import React from "react";
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'
import moment from 'moment'
import { Post } from '../../../models/Post'

export type PostDetailViewProps = {
    data: Post;
};

function Singlepost({data} : PostDetailViewProps) {
  return (
    <div className={styles.container}>
      <Link href="/">
          <button className={styles.back} > Back </button>
      </Link>
      <h1 className={styles.title}>{data.Title}</h1>
      <p>{moment(data.published_at).format("Do MMM YYYY")}</p>
      <p className={styles.details}>{data.Description}</p>
    </div>
  );
}

export default Singlepost;
