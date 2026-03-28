import { PostCardInfo } from "../components/post-card/post-card-type";
import { ColorOf } from "./language-map";

export const allPosts: Array<PostCardInfo> = [

    {
        title: "Criação do Dev Blog",
        subtitle: "Sempre gostei da ideia de criar um blog pessoal e, depois de muito tempo procrastinando, resolvi criar este site para postar o andamento das coisas estou desenvolvendo.",
        postPath: "/posts/criacao-devblog",
        createdAt: "2026-03-14T14:54",
        imageUrl: "compiling.png",
        tags: [
            {
                name: "Pessoal",
                color: "#008"
            }
        ]
    },
    {
        title: "Biblioteca JStd",
        subtitle: "Resolvi criar uma outra abordagem para lidar com dependências em Java (e mostrar que as vezes menos é mais).",
        postPath: "/posts/jstd",
        createdAt: "2026-03-27T21:30",
        imageUrl: "mvn-build.png",
        tags: [
            {
                name: "Java",
                color: ColorOf["Java"]
            },

            {
                name: "C",
                color: ColorOf["C"]
            }
        ]
    },
]