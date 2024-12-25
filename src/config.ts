import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Health Records Vault",
    chainId: "galileo-4",
    createdDate: "2024-12-24T12:36:15.144Z",
    modifiedDate: "2024-12-25T17:56:07.853Z",
    id: "HealthRecordManagementSystem",
    banner: "https://indigo-charming-bobcat-816.mypinata.cloud/ipfs/bafybeigs5weicoj2hmaatm33tiygqm4xvmpraxopucvwr63w4xfynw6g3q",
    collections: [
        {
            auction: "andr1qwqsd6vgndyqyswazmjjg0rg2nzmfx28yzkxg6ut0l4hqjz4fy0qtp8pz4",
            cw721: "andr1d3uysht7u4t2ske9y3kc550mg3e46e9rs3slplfrk847xy0z9eyqcpmzfp",
            name: "Medical Records Collection",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1"
        },
        {
            exchange: "andr1z5a228fcg9mfg3gd9dz6rrsan9yjr4dg8rmzhw0929ghhydv6v2q5lkfu7",
            cw20: "andr1zk7500gs0hhl82au2qzvsryz7rl9qp63nhnjps89zze0sn8cz7fqpr4wkr",
            name: "Health Token Exchange",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1"
        }
    ],
    
}

export default CONFIG;
