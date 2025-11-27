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
        <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-4 rounded-xl transition-all duration-300 hover:scale-110"
            style={{
                background: 'transparent',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(245, 158, 11, 0.1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(245, 158, 11, 0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <img
                src={`${baseUrl}${item.imageUrl}`}
                alt={item.name || "Patrocinador"}
                className="max-w-[100px] md:max-w-[140px] h-auto object-contain"
                style={{
                    filter: 'grayscale(20%)',
                    transition: 'filter 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(20%)';
                }}
            />
        </a>
    )
}