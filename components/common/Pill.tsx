import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ filters, onClick }) => {
    return (
        <div className="flex flex-wrap">
            {filters.map((filter, index) => (
            <button
                key={index}
                onClick={() => onClick(filter)}
                className="px-4 py-2 m-1 rounded-full border border-gray-300 bg-gray-100 cursor-pointer"
            >
                {filter}
            </button>
            ))}
        </div>
    );
};

export default Pill;