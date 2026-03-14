import { Tag } from "../tag/tag-type";

export type PostCardInfo = {
    createdAt: string;
    imageUrl: string;
    postPath: string;
    title: string;
    subtitle?: string;
    tags: Array<Tag>;
}