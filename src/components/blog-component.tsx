import {useEffect, useState} from "react";
import BlogItemComponent, {type BlogItem} from "./blog-item.component.tsx";
import {api} from "../api/api.ts";

export default function BlogComponent() {
    const [events, setEvents] = useState<BlogItem[]>([]);

    useEffect(() => {
        api.get('/event')
            .then((result) => {
                setEvents(result as BlogItem[]);
            })
    }, [])

    return (
        <div className="pt-5 pb-10 md:px-12">
            <p className={"ml-5 font-bold text-white text-2xl"}>Blog</p>

            <div className="overflow-x-auto mt-5">
                <div
                    className="grid gap-y-4"
                    style={{
                        gridAutoFlow: "column",
                        gridTemplateRows: "repeat(2, 300px)",
                    }}
                >
                    {events.map((item) => (
                        <div key={item._id}>
                            <BlogItemComponent item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}