import React from "react";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { IRepository } from "./Repos";

const Repo: React.FC = () => {

    const queryClient = useQueryClient();

    const params = useParams();
    const currentRepository = params["*"] as string;

    async function handleReset() {
        await queryClient.invalidateQueries(["repos"])
    }

    async function handleChangeDescription() {
        const previousRepo = queryClient.getQueryData<IRepository[]>(["repos"]);

        if (previousRepo) {
            const nextRepos = previousRepo.map(item => {
                if (item.name === currentRepository) {
                    return { ...item, description: "Teste 123" };
                }

                return item;
            });

            queryClient.setQueryData(["repos"], nextRepos);
        }
    }


    return <h1>{currentRepository}
        <button onClick={handleReset} >Reset</button>

        <button onClick={handleChangeDescription}>Change Description</button>
    </h1>
}

export default Repo;