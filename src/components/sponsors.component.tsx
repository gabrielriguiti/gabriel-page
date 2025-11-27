import {useEffect, useState} from "react";
import {api} from "../api/api.ts";
import SponsorItemComponent, {type SponsorItem} from "./sponsor-item.component.tsx";

export default function SponsorsComponent() {
    const [sponsors, setSponsors] = useState<SponsorItem[]>([]);

    useEffect(() => {
        api.get('/api/sponsor')
            .then((result) => {
                setSponsors(result as SponsorItem[]);
            })
    }, [])

    return (
        <div className="bg-white/90 py-5 px-8 md:px-36">
            <p className={"font-montserrat text-2xl font-bold mb-5"}>
                Patrocinadores
            </p>

            <div className="bg-white p-5 md:p-12 rounded-sm">
                <div className="grid gap-5 grid-cols-4 sm:grid-cols-5 place-items-center">
                    {sponsors.filter(s => s.type == "SPO").map((item) => (
                        <div key={item._id}>
                            <SponsorItemComponent item={item}/>
                        </div>
                    ))}
                </div>
            </div>

            <p className={"font-montserrat text-2xl font-bold mt-5 mb-5"}>
                Apoiadores
            </p>

            <div className="bg-white p-5 md:p-12 rounded-sm">
                <div className="grid gap-5 grid-cols-4 sm:grid-cols-5 place-items-center">
                    {sponsors.filter(s => s.type == "SUP").map((item) => (
                        <div key={item._id}>
                            <SponsorItemComponent item={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}