import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Post } from '../../models/Post'
import axios from 'axios'
import Singlepost from '../../Components/Posts/Post/Singlepost'

export type PostDetailViewProps = {
    data: Post;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await axios.get("https://strapiblogsite.herokuapp.com/posts");
    const posts: Post[] = await response.data;

    const paths = posts.map((post) => {
      return {
        params: { id: String(post.id) },
      };
    });

    return {
      paths,
      fallback: false,
    }
  };

  export const getStaticProps: GetStaticProps = async ({ params }) => {
    console.log("@@@@",params)
    const { data } = await axios.get(`https://strapiblogsite.herokuapp.com/posts/${params?.id}`);

    return {
      props: {
        data,
      },
    };
  };

  const PostDetailView = ({ data }: PostDetailViewProps) => {
    console.log(data);
    return (
      <>
        <Singlepost data ={data}/>
      </>
    );
  };

  export default PostDetailView;
