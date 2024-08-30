import Star from '../assets/star.png'
interface TitleProps{
    title: string;
    bgcolor: string;
}

const Title = ({title, bgcolor}: TitleProps) => {
    return(
        <div className="relative overflow-hidden flex justify-center items-center h-14" style={{ backgroundColor: bgcolor}}>
            {Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className="flex whitespace-nowrap">
                    <h1 className="pl-7 pr-2 text-2xl text-white font-PeaceSans">{title}</h1>
                    <img className="object-contain" src={Star} alt="star"/>
                </div>
            ))}
        </div>
    );
};

export default Title;
