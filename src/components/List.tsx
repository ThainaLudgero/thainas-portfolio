interface ListProps{
    className?: string;
    title?: string;
    content: (string | React.ReactNode)[];
    listimagestyle: string;
}

const List = ({className, title, content, listimagestyle}: ListProps) => {
    return(
        <div className="w-[25%]">
            <h3 className="text-xl text-primary-blue font-PeaceSans text-center pb-4">{title}</h3>
            <ul className={`${className} list-image-[${listimagestyle}]`}>
            {content.map((item, index) => (
                <li
                    className="text-sm text-justify pb-2"
                    key={index}
                >
                    {item}
                </li>
            ))}
            </ul>
        </div>
    );
}

export default List;
