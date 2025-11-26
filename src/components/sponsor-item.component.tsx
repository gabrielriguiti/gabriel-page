export type SponsorItem = {
    _id: string;
    name: string;
    type: "SPO" | "SUP";
    imageUrl: string;
    link: string;
}

type SponsorItemProps = {
    item: SponsorItem;
}

export default function SponsorItemComponent({item}: SponsorItemProps) {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    return (
        <div className={"md:mx-5 mx-0 my-0"}>
            <img
                src={`${baseUrl}${item.imageUrl}`}
                alt={"Patrocinador"}
            />
        </div>
    )
}