interface ListProps{
    className?: string;
    title?: string;
    content: (string | React.ReactNode)[];
    listimagestyle: string[];
}

const List = ({className, title, content, listimagestyle}: ListProps) => {
    return(
        <div className="lg:w-[25%]">
            {title && (
                <h3 className="text-2xl text-primary-blue font-PeaceSans text-center pb-4">
                    {title}
                </h3>
            )}
            <ul className={`${className}`}>
            {content.map((item, index) => (
                <li
                    key={index}
                    className="text-sm lg:text-justify py-2"
                    style={{
                        listStyleImage: listimagestyle.length > 1 
                        ? listimagestyle[index]
                        : listimagestyle[0]
                    }}
                >
                    {item}
                </li>
            ))}
            </ul>
        </div>
    );
}

export default List;
