import { Ods } from "./Ods";

export interface Post {
  id: number;
  startupName: string;
  title: string;
  shortDescription: string;
  description: string;
  likesCount: number;
  odsList: Ods[];
  postDate: Date;
  numberComents: number;
}
