export type BlogItem = {
    _id: string;
    date: number;
    description: string;
    imageUrl: string;
}

type BlogItemProps = {
    item: BlogItem;
}

export default function BlogItemComponent({item}: BlogItemProps) {
    const {date, description, imageUrl} = item;

    const dateFormatted = new Date(date);
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

    return (
        <div className="relative w-[250px] h-[300px] md:w-[300px] md:h-[300px] mx-5 rounded-xl overflow-hidden bg-cover bg-center border border-white"
            style={{backgroundImage: `url(${baseUrl}${imageUrl})`}}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"/>

            <div className="w-full h-full justify-between">
                <div className="bg-gray-50 self-start items-center rounded-sm ml-5 mt-5 px-3 py-1">
                    <p className="font-montserrat font-semibold color-typography-200">
                        {dateFormatted.getUTCDate()}
                    </p>

                    <p className={"color-typography-200"}>
                        {months[dateFormatted.getUTCMonth()]}
                    </p>
                </div>

                <p className="w-full text-center px-3 mb-5 font-montserrat font-light color-typography-950">
                    {description}
                </p>
            </div>
        </div>
    )
}