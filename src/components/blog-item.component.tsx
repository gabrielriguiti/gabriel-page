export type BlogItem = {
    _id: string;
    date: number;
    description: string;
    imageUrl: string;
}

type BlogItemProps = {
    item: BlogItem;
}

export default function BlogItemComponent({ item }: BlogItemProps) {
    const { date, description, imageUrl } = item;

    const dateFormatted = new Date(date);
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

    return (
        <div
            className="blog-card relative w-[340px] h-[400px] md:w-[400px] md:h-[440px] rounded-xl overflow-hidden bg-cover bg-center cursor-pointer"
            style={{
                backgroundImage: `url(${baseUrl}${imageUrl})`,
                transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >

  

            <div className="relative w-full h-full flex flex-col justify-between p-5">
                {/* Date Badge */}
                <div
                    className="self-start flex flex-col justify-center items-center rounded-lg px-4 py-2"
                    style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <p className="font-bold text-2xl" style={{ color: '#f59e0b' }}>
                        {dateFormatted.getUTCDate()}
                    </p>
                    <p className="font-semibold text-xs uppercase tracking-wider" style={{ color: '#4b5563' }}>
                        {months[dateFormatted.getUTCMonth()]}
                    </p>
                </div>

                {/* Description */}
                <div
                    className="rounded-lg p-3"
                    style={{
                        background: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <p className="font-medium text-sm md:text-base text-center text-white leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}