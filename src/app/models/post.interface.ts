export interface Post {
  id: number;
  user_id: number;
  title: string;
}

export interface Comments {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
}
