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
        <section 
            className="section"
            style={{
                background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)'
            }}
        >
            <div className="container">
                <h2 className="section-title" style={{color: '#1f2937'}}>Patrocinadores</h2>

                <div 
                    className="mt-8 p-6 md:p-10 rounded-2xl"
                    style={{
                        background: 'white',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <div className="grid gap-6 md:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center">
                        {sponsors.filter(s => s.type == "SPO").map((item) => (
                            <div key={item._id}>
                                <SponsorItemComponent item={item}/>
                            </div>
                        ))}
                    </div>
                </div>

                <h2 className="section-title mt-12" style={{color: '#1f2937'}}>Apoiadores</h2>

                <div 
                    className="mt-8 p-6 md:p-10 rounded-2xl"
                    style={{
                        background: 'white',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <div className="grid gap-6 md:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center">
                        {sponsors.filter(s => s.type == "SUP").map((item) => (
                            <div key={item._id}>
                                <SponsorItemComponent item={item}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}