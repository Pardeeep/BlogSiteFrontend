export interface Post {
    id: number;
    Title: string;
    Description: string;
    Excerpt: string;
    created_at: any;
    updated_at: any;
    published_at: any;
  }

 export  interface PostJsonResponse {
    data: Post[];
  }